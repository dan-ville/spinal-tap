# Evidence

One YAML file per source in `sources/`, named by its id: `<first-author>-<year>[-<topic>]`,
lowercase, e.g. `smith-2024.yml`, `smith-2024-volume.yml`. Records are shared: before
adding one, check whether it exists and extend it instead.

## Record format

```yaml
id: smith-2024-volume                  # matches the file name
title: "Full title as published"
authors: [Smith A, Jones B]
year: 2024
venue: "Journal name volume:pages"
doi: "10.xxxx/xxxxx"                    # or null
pmid: "12345678"                       # or null
url: https://pubmed.ncbi.nlm.nih.gov/12345678/
design: meta-analysis                  # meta-analysis | umbrella-review | systematic-review | rct | crossover | cohort | cross-sectional | mechanistic | narrative-review | consensus | preprint | other
population: "Who was studied, e.g. trained men and women, 18-35 y"
sample: {studies: 30, participants: 900}   # studies: null for a primary study
read_level: full-text                  # full-text | abstract | secondary
findings:
  - claim: "One plain sentence stating what was found."
    effect: "Effect exactly as reported, e.g. SMD 0.31 (95% CI 0.04 to 0.57)"
    grade: promising                   # established | promising | contested | speculative | convention
limitations:
  - "The limits that matter for using the finding."
topics: [strength/volume]
cited_in: [research/theses/<slug>/chapters/03-volume.md]   # generated: see below
checked: {date: 2026-11-24, by: "verification pass", notes: ""}
```

`findings[].effect` is the number exactly as the source reports it. `read_level` describes where
that number was read. `topics` use `<area>/<subtopic>` slugs so the web app can group records.

Quote any text that contains a colon followed by a space (`"1RM: 11 of 20"`). Unquoted, YAML reads
it as a key and value, not as text.

## Tools

The record format is enforced by the `@freeweights/evidence` package (`packages/evidence/`). From the
repository root, after `npm ci`:

```sh
npx freeweights-evidence check                 # format, ids, duplicate DOIs/PMIDs, citations, cited_in
npx freeweights-evidence cite-index --write    # regenerate every record's cited_in
npx freeweights-evidence doi-audit --out r.json   # Crossref: wrong DOIs, retractions, corrections
npx freeweights-evidence oa-lookup --out r.json   # OpenAlex: open-access full texts for records not read in full
```

- **`check` runs in CI** and must pass. It works offline.
- **`cited_in` is generated, never edited by hand.** It lists every file under `research/` that cites
  the record, notes and verification reports included. After adding or removing citations, run
  `cite-index --write`; `check` fails while any list is out of date.
- **Citations:** in Markdown, `[@id]` or `[@a; @b]`; in MDX, `<Source id>` and `<Evidence id>` plus
  the frontmatter `sources` list. Anything inside backticks or a code block is ignored, so
  documentation can show the syntax.
- **`doi-audit` and `oa-lookup` read the network and never edit records.** `doi-audit` also runs
  weekly in GitHub Actions (`.github/workflows/evidence-audit.yml`). OpenAlex works without a key; a
  key, where the environment supplies one, raises the daily budget.
