import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { test } from 'node:test';
import { parse } from 'yaml';
import {
  checkEvidence,
  loadRecords,
  markdownCitations,
  mdxCitations,
  recordSchema,
  rewriteCitedIn,
  titleSimilarity,
} from '../src/index.ts';
import { auditWork } from '../src/doi-audit.ts';
import { oaRow } from '../src/oa-lookup.ts';

const ROOT = join(import.meta.dirname, 'fixtures', 'repo');
const fixture = (id: string) => readFileSync(join(ROOT, 'evidence', 'sources', `${id}.yml`), 'utf8');
const record = (id: string) => recordSchema.parse(parse(fixture(id)));

test('schema accepts both fixture styles and normalises dates to strings', () => {
  assert.equal(record('smith-2024-volume').checked.date, '2026-11-24');
  assert.equal(record('lee-2020').checked.date, '2026-11-24');
});

test('schema rejects unknown grades, unknown keys and bad topics', () => {
  const base = parse(fixture('smith-2024-volume'));
  assert.equal(recordSchema.safeParse({ ...base, findings: [{ claim: 'x', effect: '', grade: 'likely' }] }).success, false);
  assert.equal(recordSchema.safeParse({ ...base, tier: 'B' }).success, false);
  assert.equal(recordSchema.safeParse({ ...base, topics: ['volume'] }).success, false);
  assert.equal(recordSchema.safeParse({ ...base, doi: 'doi.org/10.1/x' }).success, false);
  assert.equal(recordSchema.safeParse({ ...base, licence: { spdx: 'CC-BY-4.0', reuse: 'copy' } }).success, true);
});

test('markdown citations: single, grouped, prefixed; code and emails ignored', () => {
  const text = readFileSync(join(ROOT, 'research/theses/demo/chapters/01-intro.md'), 'utf8');
  assert.deepEqual(markdownCitations(text), ['smith-2024-volume', 'lee-2020']);
  assert.deepEqual(markdownCitations('[@a-1;\n@b-2] and [-@c-3]'), ['a-1', 'b-2', 'c-3']);
});

test('mdx citations: frontmatter sources and Source/Evidence tags', () => {
  const mdx = '---\ntitle: T\nsources: [who-2023-clbp, nice-ng59]\n---\n\nText <Source id="lancet-2018" />.\n\n<Evidence id="who-2023-clbp" />\n\n`<Source id="in-code" />`';
  assert.deepEqual(mdxCitations(mdx), ['who-2023-clbp', 'nice-ng59', 'lancet-2018']);
});

test('rewriteCitedIn keeps flow and block styles and touches nothing else', () => {
  const flow = rewriteCitedIn(fixture('smith-2024-volume'), ['research/a.md', 'research/b.md']);
  assert.match(flow, /^cited_in: \[research\/a\.md, research\/b\.md\]$/m);
  assert.equal(flow.replace(/^cited_in:.*$/m, ''), fixture('smith-2024-volume').replace(/^cited_in:.*$/m, ''));

  const block = rewriteCitedIn(fixture('lee-2020'), ['research/x.md']);
  assert.match(block, /^cited_in:\n- research\/x\.md\nchecked:/m);
  assert.match(rewriteCitedIn(fixture('lee-2020'), []), /^cited_in: \[\]\nchecked:/m);
  assert.deepEqual(parse(block).checked, parse(fixture('lee-2020')).checked);
});

test('check reports unknown citations and stale cited_in', () => {
  const { problems, expectedCitedIn, stats } = checkEvidence(ROOT);
  assert.deepEqual(expectedCitedIn.get('smith-2024-volume'), ['research/theses/demo/chapters/01-intro.md']);
  assert.ok(problems.some((p) => p.file.endsWith('02-gap.md') && p.message.includes('[@missing-2001]')));
  assert.ok(problems.some((p) => p.message.includes('1 record(s) have an out-of-date cited_in')));
  assert.equal(stats.records, 2);
  assert.equal(loadRecords(ROOT).problems.length, 0);
});

test('title similarity separates the right paper from a different one', () => {
  const ours = 'Training in the Initial Range of Motion Promotes Greater Muscle Adaptations Than at Final in the Arm Curl.';
  assert.ok(titleSimilarity(ours, 'Training in the Initial Range of Motion Promotes Greater Muscle Adaptations Than at Final in the Arm Curl') > 0.95);
  assert.ok(titleSimilarity(ours, 'Validity of a wrist-worn device for heart rate measurement during exercise') < 0.5);
  assert.ok(titleSimilarity('Résumé of <i>in vivo</i> loading', 'Resume of in vivo loading') > 0.95);
});

test('auditWork flags mismatches, retractions and corrections', () => {
  const r = record('smith-2024-volume');
  const ok = auditWork(r, {
    title: ['More sets, more muscle'],
    subtitle: ['a meta-analysis'],
    'updated-by': [{ type: 'correction', DOI: '10.1000/fix', updated: { 'date-parts': [[2025, 3, 1]] } }],
  });
  assert.equal(ok.status, 'ok');
  assert.equal(ok.withdrawn, false);
  assert.deepEqual(ok.updates, [{ type: 'correction', doi: '10.1000/fix', date: '2025-03-01' }]);

  const bad = auditWork(r, { title: ['Cardiac stereology in rats'], 'updated-by': [{ type: 'retraction', DOI: '10.1/r' }] });
  assert.equal(bad.status, 'title-mismatch');
  assert.equal(bad.withdrawn, true);
});

test('oaRow reads open-access location and PubMed Central id', () => {
  const row = oaRow(record('lee-2020'), {
    ids: { pmcid: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC123456' },
    open_access: { is_oa: true, oa_status: 'green', oa_url: 'https://europepmc.org/article/PMC/PMC123456' },
    best_oa_location: { pdf_url: null, landing_page_url: 'https://x', license: 'cc-by', version: 'publishedVersion' },
  });
  assert.equal(row.status, 'open');
  assert.equal(row.pmcid, 'PMC123456');
  assert.equal(row.licence, 'cc-by');
  assert.equal(oaRow(record('lee-2020'), { open_access: { is_oa: false } }).status, 'closed');
});
