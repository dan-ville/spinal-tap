// The offline check that runs in CI: every record is valid, unique and correctly cross-referenced,
// and every citation in the prose resolves to a record.
import { citedIn, scanCitations, CITATION_ROOTS } from './citations.ts';
import { sameList } from './cited-in.ts';
import { loadRecords, type LoadResult, type Problem } from './load.ts';

export interface CheckResult {
  load: LoadResult;
  problems: Problem[];
  /** Generated cited_in per id; records with no entry are cited nowhere. */
  expectedCitedIn: Map<string, string[]>;
  stats: { records: number; citingFiles: number; citations: number; uncited: number };
}

export function checkEvidence(root?: string, roots: string[] = CITATION_ROOTS): CheckResult {
  const load = loadRecords(root);
  const problems = [...load.problems];

  // DOIs and PubMed IDs identify a paper: two records with the same one are a duplicate or a typo.
  for (const key of ['doi', 'pmid'] as const) {
    const seen = new Map<string, string>();
    for (const r of load.records) {
      const value = r[key]?.toLowerCase();
      if (!value) continue;
      const other = seen.get(value);
      if (other) problems.push({ file: `evidence/sources/${r.id}.yml`, message: `same ${key} as ${other}: ${value}` });
      else seen.set(value, r.id);
    }
  }

  const scan = scanCitations(load.root, roots);
  let citations = 0;
  for (const [file, ids] of scan)
    for (const id of ids) {
      citations++;
      if (!load.byId.has(id)) problems.push({ file, message: `cites unknown record [@${id}]` });
    }

  const expectedCitedIn = citedIn(scan);
  let stale = 0;
  for (const r of load.records) {
    const expected = expectedCitedIn.get(r.id) ?? [];
    if (!sameList(r.cited_in, expected)) stale++;
  }
  if (stale)
    problems.push({
      file: 'evidence/sources',
      message: `${stale} record(s) have an out-of-date cited_in. Run: npx freeweights-evidence cite-index --write`,
    });

  const uncited = load.records.filter((r) => !expectedCitedIn.has(r.id)).length;
  return {
    load,
    problems,
    expectedCitedIn,
    stats: { records: load.records.length, citingFiles: scan.size, citations, uncited },
  };
}
