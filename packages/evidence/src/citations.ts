// Finds citations of evidence records in prose.
//   Markdown (theses, notes):  [@smith-2024-volume]  or  [@a; @b, p. 3]
//   MDX (app articles):        <Source id="..." />, <Evidence id="..." />, and `sources: [...]` in frontmatter
// Code is ignored, so documentation can show the syntax (`[@id]`) without citing anything.
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative, sep } from 'node:path';
import { parse } from 'yaml';

const FENCED = /^(```|~~~)[^\n]*\n[\s\S]*?^\1[^\n]*$/gm;
const INLINE_CODE = /`[^`\n]*`/g;
const BRACKET = /\[([^\[\]]*@[^\[\]]*)\]/g;
// An @id must start a citation item: at the start of the bracket, or after space, ";" or "(".
// That keeps email addresses (name@host) out.
const CITE_ITEM = /(?:^|[\s;(])-?@([a-z0-9]+(?:-[a-z0-9]+)*)/g;
const MDX_TAG = /<(?:Source|Evidence)\b[^>]*?\bid="([^"]+)"/g;
const FRONTMATTER = /^---\n([\s\S]*?)\n---/;

export function stripCode(text: string): string {
  return text.replace(FENCED, '').replace(INLINE_CODE, '');
}

/** Ids cited in a Markdown text, in order of first appearance. */
export function markdownCitations(text: string): string[] {
  const ids = new Set<string>();
  for (const bracket of stripCode(text).matchAll(BRACKET))
    for (const item of bracket[1].matchAll(CITE_ITEM)) ids.add(item[1]);
  return [...ids];
}

/** Ids cited in an MDX article: its frontmatter `sources` list and its <Source>/<Evidence> tags. */
export function mdxCitations(text: string): string[] {
  const ids = new Set<string>();
  const fm = text.match(FRONTMATTER);
  if (fm) {
    const sources = (parse(fm[1]) as { sources?: unknown } | null)?.sources;
    if (Array.isArray(sources)) for (const id of sources) ids.add(String(id));
  }
  for (const m of stripCode(text.replace(FRONTMATTER, '')).matchAll(MDX_TAG)) ids.add(m[1]);
  return [...ids];
}

export function citationsIn(path: string, text: string): string[] {
  if (path.endsWith('.mdx')) return mdxCitations(text);
  if (path.endsWith('.md')) return markdownCitations(text);
  return [];
}

/** Folders scanned for citations, relative to the repository root. Apps join in phase 2. */
export const CITATION_ROOTS = ['research'];

function walk(dir: string, out: string[]): string[] {
  for (const name of readdirSync(dir).sort()) {
    if (name === 'node_modules' || name.startsWith('.')) continue;
    const path = join(dir, name);
    if (statSync(path).isDirectory()) walk(path, out);
    else if (/\.mdx?$/.test(name) && !name.startsWith('_')) out.push(path);
  }
  return out;
}

/** Every citation under the given roots: repo-relative file path (with /) → cited ids. */
export function scanCitations(root: string, roots: string[] = CITATION_ROOTS): Map<string, string[]> {
  const result = new Map<string, string[]>();
  for (const r of roots)
    for (const path of walk(join(root, r), [])) {
      const ids = citationsIn(path, readFileSync(path, 'utf8'));
      if (ids.length) result.set(relative(root, path).split(sep).join('/'), ids);
    }
  return result;
}

/** Inverts a scan: record id → sorted list of files that cite it. */
export function citedIn(scan: Map<string, string[]>): Map<string, string[]> {
  const byId = new Map<string, string[]>();
  for (const [file, ids] of scan)
    for (const id of ids) {
      const list = byId.get(id) ?? [];
      list.push(file);
      byId.set(id, list);
    }
  for (const list of byId.values()) list.sort();
  return byId;
}
