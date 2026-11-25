// Reads evidence/sources/*.yml from the repository root. Data lives at the root, not in this package
// (docs/design/suite.md, D4), so every app and script reads the same files.
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { parse } from 'yaml';
import { recordSchema, type EvidenceRecord } from './schema.ts';

export const SOURCES_DIR = join('evidence', 'sources');

/** Walks up from `from` to the first directory that holds evidence/sources. */
export function findRepoRoot(from: string = process.cwd()): string {
  let dir = resolve(from);
  for (;;) {
    if (existsSync(join(dir, SOURCES_DIR))) return dir;
    const parent = dirname(dir);
    if (parent === dir) throw new Error(`no ${SOURCES_DIR} directory found above ${from}`);
    dir = parent;
  }
}

export interface Problem {
  file: string;
  message: string;
}

export interface LoadResult {
  root: string;
  records: EvidenceRecord[];
  byId: Map<string, EvidenceRecord>;
  /** Raw YAML text per id, for tools that edit files in place. */
  files: Map<string, string>;
  problems: Problem[];
}

/** Loads and validates every record. Invalid records are reported in `problems` and left out. */
export function loadRecords(root: string = findRepoRoot()): LoadResult {
  const dir = join(root, SOURCES_DIR);
  const records: EvidenceRecord[] = [];
  const byId = new Map<string, EvidenceRecord>();
  const files = new Map<string, string>();
  const problems: Problem[] = [];

  for (const name of readdirSync(dir).sort()) {
    if (!name.endsWith('.yml')) continue;
    const file = join(SOURCES_DIR, name);
    const text = readFileSync(join(dir, name), 'utf8');
    let data: unknown;
    try {
      data = parse(text);
    } catch (e) {
      problems.push({ file, message: `YAML does not parse: ${(e as Error).message.split('\n')[0]}` });
      continue;
    }
    const result = recordSchema.safeParse(data);
    if (!result.success) {
      for (const issue of result.error.issues)
        problems.push({ file, message: `${issue.path.join('.') || '(record)'}: ${issue.message}` });
      continue;
    }
    const record = result.data;
    if (`${record.id}.yml` !== name) problems.push({ file, message: `id "${record.id}" does not match the file name` });
    if (byId.has(record.id)) problems.push({ file, message: `duplicate id "${record.id}"` });
    records.push(record);
    byId.set(record.id, record);
    files.set(record.id, text);
  }
  return { root, records, byId, files, problems };
}
