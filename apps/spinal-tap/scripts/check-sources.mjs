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

// Every evidence card's source must exist in the registry and be an open-access Tier B source.
for (const file of globSync("src/content/evidence/*.mdx")) {
  const fm = parse(readFileSync(file, "utf8").match(/^---\n([\s\S]*?)\n---/)?.[1] ?? "");
  const src = registry[fm?.source];
  if (!src) errors.push(`${file}: unknown source id: ${fm?.source}`);
  else if (src.tier !== "B") errors.push(`${file}: source ${fm.source} is tier ${src.tier}, evidence cards need tier B`);
}

// Atlas preset ids must exist in atlas.json's concepts (ids are never written from memory).
const atlasIds = new Set(JSON.parse(readFileSync("atlas/public/models/atlas.json", "utf8")).concepts.map((c) => c.id));
for (const m of readFileSync("atlas/app/anatomy.ts", "utf8").match(/export const LUMBAR_PRESET[\s\S]*?\];/)?.[0].matchAll(/'(FMA\d+)'/g) ?? [])
  if (!atlasIds.has(m[1])) errors.push(`LUMBAR_PRESET: unknown atlas concept id: ${m[1]}`);

// <Structure id=...> in articles must cite a concept from the generated atlas index.
const structureIds = new Set(JSON.parse(readFileSync("src/data/atlas-concepts.json", "utf8")).map((c) => c.id));
for (const file of globSync("src/content/articles/**/*.mdx"))
  for (const m of readFileSync(file, "utf8").matchAll(/<Structure\s+[^>]*?id="([^"]+)"/g))
    if (!structureIds.has(m[1])) errors.push(`${file}: unknown atlas concept id: ${m[1]}`);

// Every <Check> needs a stable, site-unique id: it keys the reader's localStorage grade record.
const checkIds = new Map();
for (const file of globSync("src/content/articles/**/*.mdx"))
  for (const m of readFileSync(file, "utf8").matchAll(/<Check\b([^>]*)>/g)) {
    const id = m[1].match(/\bid="([^"]+)"/)?.[1];
    if (!id) errors.push(`${file}: <Check> without id`);
    else if (checkIds.has(id)) errors.push(`${file}: duplicate Check id "${id}" (also in ${checkIds.get(id)})`);
    else checkIds.set(id, file);
  }

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}
console.log(`check-sources: ${Object.keys(registry).length} sources ok`);
