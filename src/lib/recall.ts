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
}
export type RecordSet = Record<string, RecallRecord>;

const DAY = 86_400_000;

// Parse a stored blob; malformed input and unknown keys are dropped.
export function parseRecords(json: string | null | undefined): RecordSet {
  let raw: unknown;
  try { raw = JSON.parse(json || '{}'); } catch { return {}; }
  const out: RecordSet = {};
  if (!raw || typeof raw !== 'object') return out;
  for (const r of Object.values(raw as Record<string, any>)) {
    if (!r || typeof r.id !== 'string' || (r.grade !== 'correct' && r.grade !== 'incorrect')) continue;
    out[r.id] = { id: r.id, confidence: r.confidence ?? null, grade: r.grade, reviewedAt: String(r.reviewedAt), due: String(r.due) };
  }
  return out;
}

// ponytail: fixed intervals (correct → 3 days, incorrect → 1 day) until /review swaps in ts-fsrs.
export function schedule(grade: Grade, now: Date): string {
  return new Date(now.getTime() + (grade === 'correct' ? 3 : 1) * DAY).toISOString();
}

// A repeat review of the same id overwrites the previous record.
export function mergeRecord(
  set: RecordSet,
  rec: { id: string; confidence?: Confidence | null; grade: Grade },
  now: Date = new Date(),
): RecordSet {
  return {
    ...set,
    [rec.id]: { id: rec.id, confidence: rec.confidence ?? null, grade: rec.grade, reviewedAt: now.toISOString(), due: schedule(rec.grade, now) },
  };
}

export const serialise = (set: RecordSet): string => JSON.stringify(set);
