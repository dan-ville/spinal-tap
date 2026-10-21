// Fails if any gate in src/data/gates.yml lacks a stable unique id, a 0–4 phase, text, or both a known
// source id and a heuristic/proposed tag; or if a phase has no <Gate phase={n} /> on src/pages/plan.mdx.
import { readFileSync } from "node:fs";
import { parse } from "yaml";

const registry = parse(readFileSync("src/content/sources/sources.yml", "utf8")) ?? {};
const gates = parse(readFileSync("src/data/gates.yml", "utf8")) ?? [];
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
  if (source && !(source in registry)) errors.push(`gate ${id}: unknown source id ${source}`);
  if (!source && !["heuristic", "proposed"].includes(tag)) errors.push(`gate ${id}: needs a source id or tag: heuristic | proposed`);
}
for (const phase of new Set(gates.map((g) => g.phase)))
  if (!text.includes(`<Gate phase={${phase}} />`)) errors.push(`plan.mdx renders no gates for phase ${phase}`);
for (const m of text.matchAll(/<Source\s+[^>]*?id="([^"]+)"/g))
  if (!(m[1] in registry)) errors.push(`unknown source id: ${m[1]}`);

if (errors.length) { console.error(errors.join("\n")); process.exit(1); }
console.log(`check-plan: ${seen.size} gates ok`);
