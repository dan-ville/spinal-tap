// Fails the build if any source lacks a tier or any article cites an unknown id.
import { readFileSync, globSync } from "node:fs";
import { parse } from "yaml";

const registry = parse(readFileSync("src/content/sources/sources.yml", "utf8")) ?? {};
const errors = [];

for (const [id, entry] of Object.entries(registry)) {
  if (!["A", "B", "C"].includes(entry?.tier)) errors.push(`untiered source: ${id}`);
}

for (const file of globSync("src/content/articles/**/*.mdx")) {
  const text = readFileSync(file, "utf8");
  const cited = new Set();
  const fm = text.match(/^---\n([\s\S]*?)\n---/);
  for (const id of parse(fm?.[1] ?? "")?.sources ?? []) cited.add(String(id));
  for (const m of text.matchAll(/<(?:Source|Evidence)\s+[^>]*?id="([^"]+)"/g)) cited.add(m[1]);
  for (const id of cited) if (!(id in registry)) errors.push(`${file}: unknown source id: ${id}`);
}

// Atlas preset ids must exist in atlas.json's concepts (ids are never written from memory).
const atlasIds = new Set(JSON.parse(readFileSync("atlas/public/models/atlas.json", "utf8")).concepts.map((c) => c.id));
for (const m of readFileSync("atlas/app/anatomy.ts", "utf8").match(/export const LUMBAR_PRESET[\s\S]*?\];/)?.[0].matchAll(/'(FMA\d+)'/g) ?? [])
  if (!atlasIds.has(m[1])) errors.push(`LUMBAR_PRESET: unknown atlas concept id: ${m[1]}`);

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}
console.log(`check-sources: ${Object.keys(registry).length} sources ok`);
