import type { Card } from 'ts-fsrs';
import { nextCard } from './schedule.ts';

// Pure record-set logic for Check self-grading. No DOM and no localStorage here:
// the inline script in Check.astro is the only code that touches storage.
export type Confidence = 'low' | 'med' | 'high';
export type Grade = 'correct' | 'incorrect';
export interface RecallRecord {
  id: string;
  confidence: Confidence | null;
  grade: Grade;
  reviewedAt: string; // ISO
  due: string; // ISO
  card?: Card; // ts-fsrs state carried between reviews (absent on records from before FSRS)
}
export type RecordSet = Record<string, RecallRecord>;

// Parse a stored blob; malformed input and unknown keys are dropped.
export function parseRecords(json: string | null | undefined): RecordSet {
  let raw: unknown;
  try { raw = JSON.parse(json || '{}'); } catch { return {}; }
  const out: RecordSet = {};
  if (!raw || typeof raw !== 'object') return out;
  for (const r of Object.values(raw as Record<string, any>)) {
    if (!r || typeof r.id !== 'string' || (r.grade !== 'correct' && r.grade !== 'incorrect')) continue;
    out[r.id] = { id: r.id, confidence: r.confidence ?? null, grade: r.grade, reviewedAt: String(r.reviewedAt), due: String(r.due) };
    if (r.card && typeof r.card === 'object') out[r.id].card = r.card;
  }
  return out;
}

// A repeat review of the same id overwrites the previous record.
export function mergeRecord(
  set: RecordSet,
  rec: { id: string; confidence?: Confidence | null; grade: Grade },
  now: Date = new Date(),
): RecordSet {
  // ponytail: JSON round-trip turns the card's Date fields into ISO strings so stored and in-memory records are identical.
  const card: Card = JSON.parse(JSON.stringify(nextCard(set[rec.id]?.card, rec.confidence, rec.grade, now)));
  return {
    ...set,
    [rec.id]: { id: rec.id, confidence: rec.confidence ?? null, grade: rec.grade, reviewedAt: now.toISOString(), due: new Date(card.due).toISOString(), card },
  };
}

export const serialise = (set: RecordSet): string => JSON.stringify(set);

// Import helper: `replace` drops the current set; `merge` keeps whichever record was reviewed most recently.
export function importRecords(current: RecordSet, incoming: RecordSet, mode: 'replace' | 'merge'): RecordSet {
  if (mode === 'replace') return { ...incoming };
  const out = { ...current };
  for (const r of Object.values(incoming)) {
    const cur = out[r.id];
    if (!cur || Date.parse(r.reviewedAt) >= Date.parse(cur.reviewedAt)) out[r.id] = r;
  }
  return out;
}
