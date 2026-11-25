// `cited_in` is generated from the citations in the prose, never written by hand: hand-kept lists
// drifted badly during the strength and mobility thesis. This rewrites only that field, in place,
// keeping the record's existing style (flow `[a, b]` or a block list) so diffs stay small.

const FLOW = /^cited_in:[ \t]*\[[^\]\n]*\][ \t]*$/m;
const BLOCK = /^cited_in:[ \t]*\n(?:[ \t]*- [^\n]*\n?)+/m;
const EMPTY = /^cited_in:[ \t]*$/m;

function quote(path: string): string {
  return /^[\w./-]+$/.test(path) ? path : JSON.stringify(path);
}

export function rewriteCitedIn(yamlText: string, files: string[]): string {
  if (BLOCK.test(yamlText)) {
    const indent = yamlText.match(/^cited_in:[ \t]*\n([ \t]*)- /m)?.[1] ?? '';
    const block = files.length
      ? `cited_in:\n${files.map((f) => `${indent}- ${quote(f)}\n`).join('')}`
      : 'cited_in: []\n';
    return yamlText.replace(BLOCK, block);
  }
  const flow = `cited_in: [${files.map(quote).join(', ')}]`;
  if (FLOW.test(yamlText)) return yamlText.replace(FLOW, flow);
  if (EMPTY.test(yamlText)) return yamlText.replace(EMPTY, flow);
  throw new Error('record has no cited_in field');
}

export function sameList(a: readonly string[], b: readonly string[]): boolean {
  return a.length === b.length && a.every((x, i) => x === b[i]);
}
