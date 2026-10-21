# Contributing

Spinal Tap teaches; it does not diagnose. These rules come from `docs/plan.md` §8 and are not negotiable. Pull requests that break one will be sent back.

## Hard content rules

1. **No diagnosis.** Never tell the reader what is wrong with their tissue. Describe mechanisms, terminology and evidence; route red flags to a clinician via the plan page.
2. **No directional preference.** Do not recommend flexion over extension or the reverse, for anyone.
3. **No movement labelled categorically bad.** Loads and contexts can be discussed; a movement is never "dangerous" or "wrong" in itself. Mark mechanism-only claims `[contested]` where the evidence is.
4. **Every claim carries a source id or a tag.** A claim cites an id from `src/content/sources/sources.yml` via `<Source id="…">`, or is tagged `[contested]` (evidence disagrees) or `[heuristic]` (practitioner convention, no study).
5. **Numbers are `[proposed]` until `[measured]`.** Any threshold, percentage or interval that was not measured in a cited study carries `[proposed]`.
6. **Tier C sources: link and annotate, never copy.** Cite them with `<Source id>` in a sentence that says what the reader will find there. Do not paraphrase their text at length. Tier A text may be adapted with attribution in `LICENSE-content.md`.

Every article has: frontmatter, a `<Lede>`, body, `## Key points`, at least one `<Check id="…">`, and sources listed in frontmatter. Start from `src/content/articles/_template.mdx`.

## Adding a source

Edit `src/content/sources/sources.yml`. It is a mapping from id to entry. Pick the tier from the source's licence:

| Tier | Meaning | Examples |
|---|---|---|
| A | Open licence; text may be copied and adapted with attribution | CC BY, public domain |
| B | Open-access primary literature; summarise, cite, link | PMC articles, CC BY journals |
| C | Free to read but not open-licensed; link and annotate only | Radiopaedia, paywalled abstracts, anything with `licence: unconfirmed` |

```yaml
author-2024-short-title:
  id: author-2024-short-title     # same as the key
  tier: B
  title: "Full title"
  author: Surname A; Surname B
  year: 2024
  url: https://…
  licence: CC-BY-4.0              # or "unconfirmed", which forces tier C
  pmcid: PMC1234567               # optional; doi, pmid, note also accepted
```

Insert Tier B entries before the `# ---- Tier C` marker so the file stays grouped. If you cannot confirm the licence by fetching the source, tier it C. Evidence cards (`src/content/evidence/<id>.mdx`) may only point at Tier B sources; `scripts/check-sources.mjs` enforces this. Each card also takes a `topic` (treatment, imaging, biomechanics, pain-science, training, return-to-sport) and a `kind` (guideline, systematic-review, rct, observational, lab, narrative), which group and filter the `/evidence/` page.

## Before opening a PR

```sh
npm run build
npm test
node scripts/check-sources.mjs
node scripts/check-links.mjs
```

All four must exit 0. CI runs the same commands.
