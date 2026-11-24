# Research

Each research round lives in its own folder and never edits another round's files.

```
research/
  round-0-strength-mobility/   # abstracts-only first pass (Nov 2026), kept for the record
  theses/<slug>/
    README.md                  # question, scope, method, status
    outline.md                 # chapter plan and research questions
    chapters/NN-<slug>.md      # the thesis, one file per chapter
    notes/<chapter>/...        # researcher notes behind each chapter
    verification/...           # claim checks against full text
```

## Conventions

- **Sources go in `/evidence`.** Every study a thesis leans on gets an evidence record
  (`evidence/sources/<id>.yml`). Chapters cite by record id, e.g. `[@smith-2024-volume]`, so the web
  app can link claims to sources.
- **Read level is recorded, not assumed.** A record says whether its numbers came from the full
  text, the abstract, or a secondary source. A thesis may only state an effect size as verified
  when the record says `read_level: full-text`.
- **Every claim carries a grade:** `established`, `promising`, `contested`, `speculative`, or
  `convention` (practitioner practice with no direct data).
