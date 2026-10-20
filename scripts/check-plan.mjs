// Fails if any <Gate> in src/pages/plan.mdx lacks a stable id, or lacks both a known source id and a [heuristic]/[proposed] tag.
import { readFileSync } from "node:fs";
import { parse } from "yaml";

const registry = parse(readFileSync("src/content/sources/sources.yml", "utf8")) ?? {};
const text = readFileSync("src/pages/plan.mdx", "utf8");
const errors = [];
const seen = new Set();
const attr = (tag, name) => tag.match(new RegExp(`\\b${name}="([^"]*)"`))?.[1];

for (const m of text.matchAll(/<Gate\b[^>]*>/g)) {
  const id = attr(m[0], "id"), source = attr(m[0], "source"), tag = attr(m[0], "tag");
  if (!id) errors.push(`gate without id: ${m[0]}`);
  else if (seen.has(id)) errors.push(`duplicate gate id: ${id}`);
  seen.add(id);
  if (source && !(source in registry)) errors.push(`gate ${id}: unknown source id ${source}`);
  if (!source && !["heuristic", "proposed"].includes(tag)) errors.push(`gate ${id}: needs a source id or tag="heuristic"|"proposed"`);
}
for (const m of text.matchAll(/<Source\s+[^>]*?id="([^"]+)"/g))
  if (!(m[1] in registry)) errors.push(`unknown source id: ${m[1]}`);

if (errors.length) { console.error(errors.join("\n")); process.exit(1); }
console.log(`check-plan: ${seen.size} gates ok`);
