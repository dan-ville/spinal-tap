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
cited_in: [research/theses/<slug>/chapters/03-volume.md]
checked: {date: 2026-11-24, by: "verification pass", notes: ""}
```

`findings[].effect` is the number exactly as the source reports it. `read_level` describes where
that number was read. `topics` use `<area>/<subtopic>` slugs so the web app can group records.
