// Checks every record's DOI against Crossref: does it resolve, is it the paper the record names, and
// has the paper been retracted or corrected since? Read-only: it reports and never edits records.
import type { EvidenceRecord } from './schema.ts';
import { encodePath, getJson, paced } from './net.ts';

/** Crossref update types that mean the paper should not be relied on. */
const WITHDRAWN = new Set(['retraction', 'withdrawal', 'removal']);
/** Below this title similarity the DOI is treated as pointing to a different paper. */
export const TITLE_THRESHOLD = 0.5;

export interface DoiUpdate {
  type: string;
  doi: string;
  date: string | null;
}

export interface DoiAuditRow {
  id: string;
  doi: string | null;
  status: 'ok' | 'title-mismatch' | 'not-found' | 'error' | 'no-doi';
  similarity: number | null;
  crossrefTitle: string | null;
  withdrawn: boolean;
  concern: boolean;
  updates: DoiUpdate[];
}

export function normaliseTitle(s: string): string {
  return s
    .replace(/<[^>]+>/g, ' ')
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

/** Sørensen–Dice similarity of character bigrams, 0..1. Robust to punctuation and small edits. */
export function titleSimilarity(a: string, b: string): number {
  const x = normaliseTitle(a);
  const y = normaliseTitle(b);
  if (!x || !y) return 0;
  if (x === y) return 1;
  const grams = (s: string) => {
    const m = new Map<string, number>();
    for (let i = 0; i < s.length - 1; i++) m.set(s.slice(i, i + 2), (m.get(s.slice(i, i + 2)) ?? 0) + 1);
    return m;
  };
  const gx = grams(x);
  const gy = grams(y);
  let shared = 0;
  for (const [g, n] of gx) shared += Math.min(n, gy.get(g) ?? 0);
  return (2 * shared) / (x.length - 1 + (y.length - 1));
}

interface CrossrefWork {
  title?: string[];
  subtitle?: string[];
  'updated-by'?: { type?: string; DOI?: string; updated?: { 'date-parts'?: number[][] } }[];
}

export function auditWork(record: EvidenceRecord, work: CrossrefWork): DoiAuditRow {
  const main = work.title?.[0] ?? '';
  const full = [main, ...(work.subtitle ?? [])].filter(Boolean).join(': ');
  const similarity = Math.max(titleSimilarity(record.title, main), titleSimilarity(record.title, full));
  const updates = (work['updated-by'] ?? []).map((u) => ({
    type: String(u.type ?? 'update'),
    doi: String(u.DOI ?? ''),
    date: u.updated?.['date-parts']?.[0]?.map((n) => String(n).padStart(2, '0')).join('-') ?? null,
  }));
  return {
    id: record.id,
    doi: record.doi,
    status: similarity < TITLE_THRESHOLD ? 'title-mismatch' : 'ok',
    similarity: Math.round(similarity * 100) / 100,
    crossrefTitle: full || null,
    withdrawn: updates.some((u) => WITHDRAWN.has(u.type)),
    concern: updates.some((u) => u.type === 'expression_of_concern'),
    updates,
  };
}

export async function doiAudit(
  records: EvidenceRecord[],
  onProgress?: (done: number, total: number) => void,
): Promise<DoiAuditRow[]> {
  // Crossref's public pool allows a few requests a second; stay well under it.
  return paced(records, 250, async (record, i) => {
    onProgress?.(i + 1, records.length);
    const base = { id: record.id, doi: record.doi, similarity: null, crossrefTitle: null, withdrawn: false, concern: false, updates: [] };
    if (!record.doi) return { ...base, status: 'no-doi' as const };
    try {
      const res = await getJson(`https://api.crossref.org/works/${encodePath(record.doi)}`);
      if (res.status === 404) return { ...base, status: 'not-found' as const };
      if (!res.json) return { ...base, status: 'error' as const };
      return auditWork(record, (res.json as { message: CrossrefWork }).message);
    } catch {
      return { ...base, status: 'error' as const };
    }
  });
}

/** Rows that need a person: wrong or missing DOIs, withdrawn papers, expressions of concern. */
export function needsAction(row: DoiAuditRow): boolean {
  return row.status === 'title-mismatch' || row.status === 'not-found' || row.withdrawn || row.concern;
}
