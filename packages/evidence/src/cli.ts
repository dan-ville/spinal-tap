#!/usr/bin/env node
// freeweights-evidence: checks and tools for the evidence base.
//   check                      offline: schema, ids, duplicates, citations, cited_in (runs in CI)
//   cite-index [--write]       regenerate every record's cited_in from the citations in the prose
//   doi-audit [--out f.json]   Crossref: wrong DOIs, retractions, corrections (network)
//   oa-lookup [--out f.json]   OpenAlex: open-access full texts for records not read in full (network)
// Common options: --root <dir> (default: found from the current directory), --ids a,b,c
import { spawnSync } from 'node:child_process';
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { parseArgs } from 'node:util';
import { checkEvidence } from './check.ts';
import { rewriteCitedIn, sameList } from './cited-in.ts';
import { doiAudit, needsAction } from './doi-audit.ts';
import { findRepoRoot, loadRecords, SOURCES_DIR } from './load.ts';
import { oaLookup } from './oa-lookup.ts';

const NETWORKED = new Set(['doi-audit', 'oa-lookup']);

const { values, positionals } = parseArgs({
  allowPositionals: true,
  options: {
    root: { type: 'string' },
    ids: { type: 'string' },
    out: { type: 'string' },
    write: { type: 'boolean', default: false },
    help: { type: 'boolean', short: 'h', default: false },
  },
});
const command = positionals[0];

// Node's fetch ignores HTTPS_PROXY unless NODE_USE_ENV_PROXY is set at startup (Node >= 22.21).
if (NETWORKED.has(command) && (process.env.HTTPS_PROXY || process.env.https_proxy) && !process.env.NODE_USE_ENV_PROXY) {
  const r = spawnSync(process.execPath, ['--disable-warning=UNDICI-EHPA', ...process.argv.slice(1)], {
    stdio: 'inherit',
    env: { ...process.env, NODE_USE_ENV_PROXY: '1' },
  });
  process.exit(r.status ?? 1);
}

const root = values.root ?? findRepoRoot();
const err = (s: string) => process.stderr.write(s);

function selected() {
  const load = loadRecords(root);
  if (load.problems.length) {
    for (const p of load.problems) err(`${p.file}: ${p.message}\n`);
    err('fix the records above first (run: freeweights-evidence check)\n');
    process.exit(1);
  }
  const ids = values.ids?.split(',').map((s) => s.trim()).filter(Boolean);
  if (!ids) return load.records;
  const unknown = ids.filter((id) => !load.byId.has(id));
  if (unknown.length) {
    err(`unknown record id(s): ${unknown.join(', ')}\n`);
    process.exit(1);
  }
  return ids.map((id) => load.byId.get(id)!);
}

function progress(done: number, total: number) {
  if (process.stderr.isTTY) err(`\r${done}/${total}`);
  else if (done % 100 === 0 || done === total) err(`${done}/${total}\n`);
}

function writeReport(rows: unknown[]) {
  if (!values.out) return;
  writeFileSync(values.out, JSON.stringify(rows, null, 2) + '\n');
  console.log(`report: ${values.out}`);
}

function tally<T>(rows: T[], key: (r: T) => string) {
  const counts = new Map<string, number>();
  for (const r of rows) counts.set(key(r), (counts.get(key(r)) ?? 0) + 1);
  return [...counts].map(([k, n]) => `${k} ${n}`).join(', ');
}

async function main() {
  switch (command) {
    case 'check': {
      const { problems, stats } = checkEvidence(root);
      for (const p of problems) err(`${p.file}: ${p.message}\n`);
      console.log(
        `evidence check: ${stats.records} records; ${stats.citations} citations in ${stats.citingFiles} files; ` +
          `${stats.uncited} cited nowhere; ${problems.length} problem(s)`,
      );
      process.exit(problems.length ? 1 : 0);
    }
    case 'cite-index': {
      const { load, expectedCitedIn } = checkEvidence(root);
      const stale = load.records.filter((r) => !sameList(r.cited_in, expectedCitedIn.get(r.id) ?? []));
      if (values.write) {
        for (const r of stale)
          writeFileSync(
            join(root, SOURCES_DIR, `${r.id}.yml`),
            rewriteCitedIn(load.files.get(r.id)!, expectedCitedIn.get(r.id) ?? []),
          );
        console.log(`cite-index: rewrote cited_in in ${stale.length} record(s)`);
      } else {
        for (const r of stale) console.log(r.id);
        console.log(`cite-index: ${stale.length} record(s) out of date${stale.length ? ' (run with --write)' : ''}`);
        process.exit(stale.length ? 1 : 0);
      }
      return;
    }
    case 'doi-audit': {
      const rows = await doiAudit(selected(), progress);
      console.log(`\ndoi-audit: ${tally(rows, (r) => r.status)}`);
      for (const r of rows.filter(needsAction)) {
        const flags = [r.status !== 'ok' && r.status, r.withdrawn && 'WITHDRAWN', r.concern && 'expression of concern'].filter(Boolean);
        console.log(`  ${r.id}  ${r.doi}  ${flags.join(', ')}${r.crossrefTitle ? `  → "${r.crossrefTitle.slice(0, 80)}" (${r.similarity})` : ''}`);
      }
      const updated = rows.filter((r) => r.updates.length && !r.withdrawn && !r.concern);
      if (updated.length)
        console.log(`  corrections or other updates to read (${updated.length}): ${updated.map((r) => r.id).join(', ')}`);
      const errors = rows.filter((r) => r.status === 'error').length;
      writeReport(rows);
      process.exit(rows.some(needsAction) || errors ? 1 : 0);
    }
    case 'oa-lookup': {
      const todo = selected().filter((r) => r.read_level !== 'full-text');
      const rows = await oaLookup(todo, progress);
      console.log(`\noa-lookup: ${todo.length} records not read in full; ${tally(rows, (r) => r.status)}`);
      const viaPmc = rows.filter((r) => r.status === 'open' && r.pmcid).length;
      console.log(`  open access: ${rows.filter((r) => r.status === 'open').length} (with a PubMed Central copy: ${viaPmc})`);
      writeReport(rows);
      process.exit(rows.some((r) => r.status === 'error') ? 1 : 0);
    }
    default:
      console.log(`usage: freeweights-evidence <command> [options]

commands
  check                      validate records and citations (offline; runs in CI)
  cite-index [--write]       list, or rewrite, records whose cited_in is out of date
  doi-audit [--out f.json]   check DOIs, retractions and corrections against Crossref
  oa-lookup [--out f.json]   find open-access full texts in OpenAlex for records not read in full

options
  --root <dir>   repository root (default: found from the current directory)
  --ids a,b,c    only these records (doi-audit, oa-lookup)`);
      process.exit(command && !values.help ? 1 : 0);
  }
}

await main();
