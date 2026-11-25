// Regenerates src/data/atlas-concepts.json ({id, name} only, no geometry) from the atlas fork's atlas.json.
import { readFileSync, writeFileSync } from "node:fs";

const { concepts } = JSON.parse(readFileSync("atlas/public/models/atlas.json", "utf8"));
const index = concepts.map(({ id, name }) => ({ id, name })).sort((a, b) => a.id.localeCompare(b.id));
writeFileSync("src/data/atlas-concepts.json", JSON.stringify(index) + "\n");
console.log(`build-atlas-index: ${index.length} concepts`);
