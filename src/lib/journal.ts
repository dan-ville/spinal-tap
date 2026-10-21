// Pure logic for the dashboard's daily check-in journal and whole-site backup.
// No DOM and no localStorage here: dashboard.astro is the only code that touches storage.

// One check-in per local calendar day, mirroring the Phase 0 daily check-in on /plan/.
export interface Entry {
  date: string; // YYYY-MM-DD, the reader's local day
  stiffness: number | null; // morning stiffness test, 0–10
  belowGlute: boolean | null; // anything felt below the glute
  sleep: number | null; // hours
  stress: number | null; // life stress, 1–5
  bodyweight: number | null;
  walk: number | null; // walking minutes
  note: string;
}
export type Journal = Record<string, Entry>;

const DATE = /^\d{4}-\d{2}-\d{2}$/;
const num = (v: unknown) => (v === '' || v == null || !Number.isFinite(+v) ? null : +v);
const bool = (v: unknown) => (v === true || v === 'yes' ? true : v === false || v === 'no' ? false : null);

// Coerce loose input (a stored record or form values) into an Entry; null when the date is unusable.
export function toEntry(raw: Record<string, unknown>): Entry | null {
  const date = String(raw.date ?? '');
  if (!DATE.test(date)) return null;
  return {
    date,
    stiffness: num(raw.stiffness),
    belowGlute: bool(raw.belowGlute),
    sleep: num(raw.sleep),
    stress: num(raw.stress),
    bodyweight: num(raw.bodyweight),
    walk: num(raw.walk),
    note: String(raw.note ?? '').trim(),
  };
}

// Parse a stored blob; malformed input and malformed entries are dropped.
export function parseJournal(json: string | null | undefined): Journal {
  let raw: unknown;
  try { raw = JSON.parse(json || '{}'); } catch { return {}; }
  const out: Journal = {};
  if (!raw || typeof raw !== 'object') return out;
  for (const r of Object.values(raw as Record<string, any>)) {
    const e = r && typeof r === 'object' ? toEntry(r) : null;
    if (e) out[e.date] = e;
  }
  return out;
}

// A second check-in on the same day replaces the first.
export const upsertEntry = (j: Journal, e: Entry): Journal => ({ ...j, [e.date]: e });
export function deleteEntry(j: Journal, date: string): Journal {
  const { [date]: _, ...rest } = j;
  return rest;
}
export const newestFirst = (j: Journal): Entry[] => Object.values(j).sort((a, b) => b.date.localeCompare(a.date));

export const localDate = (d: Date): string =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;

// Consecutive logged days ending today, or ending yesterday when today is not logged yet.
export function streak(j: Journal, today: Date = new Date()): number {
  const day = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  if (!j[localDate(day)]) day.setDate(day.getDate() - 1);
  let n = 0;
  while (j[localDate(day)]) { n++; day.setDate(day.getDate() - 1); }
  return n;
}

// Whole-site backup: every localStorage key the site writes, except UI preferences.
const BACKED_UP = /^(journal|recall|gate:.+|notes:.+)$/;
export interface Backup { app: 'spinal-tap'; version: 1; exportedAt: string; data: Record<string, string> }

export function makeBackup(pairs: [string, string][], now: Date = new Date()): Backup {
  return { app: 'spinal-tap', version: 1, exportedAt: now.toISOString(), data: Object.fromEntries(pairs.filter(([k]) => BACKED_UP.test(k))) };
}

// The key/value pairs to write back; [] when the file is not a Spinal Tap backup.
export function readBackup(json: string): [string, string][] {
  let raw: any;
  try { raw = JSON.parse(json); } catch { return []; }
  if (raw?.app !== 'spinal-tap' || !raw.data || typeof raw.data !== 'object') return [];
  return Object.entries(raw.data).filter((p): p is [string, string] => BACKED_UP.test(p[0]) && typeof p[1] === 'string');
}
