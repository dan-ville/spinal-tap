// Fails if any site-relative href/src in dist/ points at nothing. External links are listed only.
import { existsSync, readFileSync, globSync, statSync } from "node:fs";
import { join } from "node:path";

if (!existsSync("dist")) {
  console.error("check-links: dist/ not found — run `npm run build` first");
  process.exit(1);
}

const broken = [];
const external = new Set();

const resolves = (p) => {
  const f = join("dist", p);
  if (!existsSync(f)) return false;
  // ponytail: a directory counts only when it has an index.html, matching how Astro serves /foo/
  return statSync(f).isDirectory() ? existsSync(join(f, "index.html")) : true;
};

for (const file of globSync("dist/**/*.html")) {
  const html = readFileSync(file, "utf8");
  for (const m of html.matchAll(/\b(?:href|src)=["']([^"']+)["']/g)) {
    const raw = m[1].trim();
    if (/^(?:https?:|mailto:|tel:|data:)/i.test(raw)) { external.add(raw); continue; }
    if (raw.startsWith("#") || raw.startsWith("//")) continue; // in-page / protocol-relative
    if (!raw.startsWith("/")) continue; // ponytail: Astro emits root-relative links; relative ones are not resolved
    const path = decodeURIComponent(raw.split(/[?#]/)[0]);
    if (!resolves(path)) broken.push(`${file}: ${raw}`);
  }
}

if (external.size) console.log(`check-links: ${external.size} external link(s) (not checked)\n  ` + [...external].sort().join("\n  "));
if (broken.length) {
  console.error("check-links: broken internal links\n" + broken.join("\n"));
  process.exit(1);
}
console.log("check-links: all internal links ok");
