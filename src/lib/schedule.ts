// Pure ts-fsrs wrapper. No DOM, no storage: Check.astro and review.astro own localStorage.
import { fsrs, createEmptyCard, Rating, type Card, type Grade as FsrsGrade } from 'ts-fsrs';
import type { Confidence, Grade, RecallRecord, RecordSet } from './recall.ts';

// ponytail: long-term-only scheduling (no 10-minute learning steps) and no fuzz, so tests are deterministic.
const f = fsrs({ enable_short_term: false, enable_fuzz: false });

// Check outcome → FSRS rating. Wrong is Again regardless of confidence; confidence grades a correct answer.
export function toRating(confidence: Confidence | null | undefined, grade: Grade): FsrsGrade {
  if (grade !== 'correct') return Rating.Again;
  return confidence === 'high' ? Rating.Easy : confidence === 'low' ? Rating.Hard : Rating.Good;
}

// Next FSRS card state after a review. `prev` is the stored card (if any) from the previous review.
export function nextCard(prev: Card | null | undefined, confidence: Confidence | null | undefined, grade: Grade, now: Date): Card {
  const card = prev ?? createEmptyCard(now);
  return f.next(card, now, toRating(confidence, grade)).card;
}

export const nextDue = (prev: Card | null | undefined, confidence: Confidence | null | undefined, grade: Grade, now: Date): string =>
  new Date(nextCard(prev, confidence, grade, now).due).toISOString();

const CONF_RANK: Record<string, number> = { high: 0, med: 1, low: 2 };
const valid = (r: any): r is RecallRecord =>
  !!r && typeof r.id === 'string' && (r.grade === 'correct' || r.grade === 'incorrect') && !Number.isNaN(Date.parse(r.due));

// Records due at `now`, confidently-wrong first, then less-confident wrong, then correct ones; ties by due date.
// Corrupt records (bad due, missing grade) are skipped, never thrown on.
export function dueQueue(set: RecordSet | null | undefined, now: Date): RecallRecord[] {
  const t = now.getTime();
  return Object.values(set ?? {})
    .filter((r) => valid(r) && Date.parse(r.due) <= t)
    .sort((a, b) => {
      const wa = a.grade === 'incorrect' ? CONF_RANK[a.confidence ?? ''] ?? 3 : 4;
      const wb = b.grade === 'incorrect' ? CONF_RANK[b.confidence ?? ''] ?? 3 : 4;
      return wa - wb || Date.parse(a.due) - Date.parse(b.due);
    });
}

// Delayed recall: for each delay bucket, how often the last review (after that many days away) was correct.
export function recallByDelay(set: RecordSet | null | undefined): { label: string; correct: number; total: number }[] {
  const buckets = [
    { label: 'same day', max: 1, correct: 0, total: 0 },
    { label: '1–3 days', max: 4, correct: 0, total: 0 },
    { label: '4–14 days', max: 15, correct: 0, total: 0 },
    { label: '15+ days', max: Infinity, correct: 0, total: 0 },
  ];
  for (const r of Object.values(set ?? {})) {
    if (!valid(r)) continue;
    const d = r.card?.elapsed_days ?? 0;
    const b = buckets.find((x) => d < x.max)!;
    b.total++;
    if (r.grade === 'correct') b.correct++;
  }
  return buckets.map(({ label, correct, total }) => ({ label, correct, total }));
}
