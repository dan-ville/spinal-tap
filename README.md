# Spinal Tap

A static learning site about the lumbar spine for people who lift: anatomy, biomechanics, pathology terminology, pain science, rehab evidence, training science and self-coaching. Articles are MDX with inline source citations, evidence cards summarising open-access studies, an embedded 3D human atlas, a worked return-to-lifting plan, and spaced-repetition review of each article's checks.

## Teaching, not diagnosing

This site teaches how the spine works and how the evidence reads. It does not diagnose, does not prescribe a direction of movement, and does not label any movement categorically bad. Nothing here is a verdict on your own tissue. If you have red-flag symptoms (listed on the [plan page](src/pages/plan.mdx)), see a clinician. See [CONTRIBUTING.md](CONTRIBUTING.md) for the hard content rules every article follows.

## Local setup

Node 22 or newer (see `engines` in package.json).

```sh
npm ci                  # Astro site
npm --prefix atlas ci   # human-atlas fork (iframe app under /atlas/)
npm run dev             # Astro dev server
npm run build           # atlas build -> public/atlas, astro build -> dist, pagefind index
```

The first `npm run build` takes about a minute because it builds the atlas. Later builds reuse `public/atlas/` and take about fifteen seconds.

## Verification

Three commands define "done". CI runs all of them.

```sh
npm test                           # calc, recall, schedule and journal unit tests
node scripts/check-sources.mjs     # every cited id exists in sources.yml with a tier; Check ids unique
node scripts/check-links.mjs       # every internal link in dist/ resolves (run after npm run build)
```

## Licences

| What | Licence | File |
|---|---|---|
| Code (Astro site, scripts, components) | MIT | [LICENSE](LICENSE) |
| Prose (articles, evidence cards, plan) | CC BY-SA 4.0 | [LICENSE-content.md](LICENSE-content.md) |
| Atlas data (`atlas/`, fork of human-atlas) | CC BY 4.0 | [ATTRIBUTION.md](ATTRIBUTION.md) |

Third-party sources keep their own licences; `src/content/sources/sources.yml` records each one's tier and licence.

## Layout

- `src/content/articles/<track>/` MDX articles. `src/content/articles/_template.mdx` is the starting shape.
- `src/content/evidence/` frontmatter-only evidence cards, one per Tier B source.
- `src/content/sources/sources.yml` the source registry.
- `src/pages/plan.mdx` the return-to-lifting plan (read-only); its exit gates live in `src/data/gates.yml`.
- `src/pages/dashboard.astro` daily check-in journal, gate tracking, calculators and a whole-site backup (localStorage).
- `atlas/` the 3D atlas, built into `public/atlas/` and embedded as an iframe.
- `scripts/` build and verification scripts.
- `docs/plan.md` the design document.
