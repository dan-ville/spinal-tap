// Fails if any gate in src/data/gates.yml lacks a stable unique id, a 0–4 phase, text, a plain reading, or both a
// known source id and a heuristic/proposed tag; if a phase has no <Gate phase={n} /> on src/pages/plan.mdx; if a
// <Source> or <Tag source> on the plan names an unknown source; or if src/data/glossary.yml has an entry without
// term/short/group, a `see` that is not a site path, or a <Term id> on the plan that it does not define.
import { readFileSync } from "node:fs";
import { parse } from "yaml";

const registry = parse(readFileSync("src/content/sources/sources.yml", "utf8")) ?? {};
const gates = parse(readFileSync("src/data/gates.yml", "utf8")) ?? [];
const glossary = parse(readFileSync("src/data/glossary.yml", "utf8")) ?? {};
const text = readFileSync("src/pages/plan.mdx", "utf8");
const errors = [];
const seen = new Set();

for (const g of gates) {
  const { id, phase, source, tag } = g;
  if (!id) { errors.push(`gate without id: ${JSON.stringify(g)}`); continue; }
  if (seen.has(id)) errors.push(`duplicate gate id: ${id}`);
  seen.add(id);
  if (![0, 1, 2, 3, 4].includes(phase)) errors.push(`gate ${id}: phase must be 0–4`);
  if (!g.text) errors.push(`gate ${id}: missing text`);
  if (!g.plain) errors.push(`gate ${id}: missing plain (the gate in everyday words)`);
  if (source && !(source in registry)) errors.push(`gate ${id}: unknown source id ${source}`);
  if (!source && !["heuristic", "proposed"].includes(tag)) errors.push(`gate ${id}: needs a source id or tag: heuristic | proposed`);
}
for (const phase of new Set(gates.map((g) => g.phase)))
  if (!text.includes(`<Gate phase={${phase}} />`)) errors.push(`plan.mdx renders no gates for phase ${phase}`);
for (const m of text.matchAll(/<(?:Source|Tag)\s+[^>]*?source="([^"]+)"|<Source\s+[^>]*?id="([^"]+)"/g)) {
  const id = m[1] ?? m[2];
  if (!(id in registry)) errors.push(`unknown source id: ${id}`);
}

for (const [id, e] of Object.entries(glossary)) {
  if (!/^[a-z0-9-]+$/.test(id)) errors.push(`glossary ${id}: id must be lowercase letters, digits and hyphens`);
  for (const k of ["term", "short", "group"]) if (!e?.[k]) errors.push(`glossary ${id}: missing ${k}`);
  if (e?.see && !/^\/[\w\-./]*$/.test(e.see)) errors.push(`glossary ${id}: see must be a site path, got ${e.see}`);
}
for (const m of text.matchAll(/<Term\s+[^>]*?id="([^"]+)"/g))
  if (!(m[1] in glossary)) errors.push(`plan.mdx: <Term id="${m[1]}"> is not in glossary.yml`);
const kinds = new Set(Object.keys(glossary));
for (const k of ["starting-number", "rule-of-thumb", "evidence-disagrees"])
  if (!kinds.has(k)) errors.push(`glossary.yml: Tag.astro expects an entry "${k}"`);

if (errors.length) { console.error(errors.join("\n")); process.exit(1); }
console.log(`check-plan: ${seen.size} gates, ${Object.keys(glossary).length} glossary entries ok`);
