# Writing plan

The research and verification are done for all ten literature chapters (`notes/`, `verification/`,
`/evidence/sources/`). The chapters are now written one step at a time by a scheduled task, one
step per firing, so the work is spread out over time. The owner expands chapters later, as they
iterate.

## Length: light first draft

| Part | Target |
|---|---|
| Literature chapter (4–11) | 2,000–3,000 words (about 4–6 pages single-spaced) |
| Introduction and methods (1) | 1,500–2,000 words |
| Synthesis (12) | 3,000–4,000 words |

Chapters 2 and 3 were written earlier at full length (12.8k and 10k words). They stay as they are.

## Step queue

A step is done when its output file exists on the branch. Each firing does the first step that is
not done, and only that step.

| Step | Output | Input |
|---|---|---|
| 1 | `chapters/04-programming-and-periodization.md` | `notes/programming-and-periodization.md`, `verification/programming-and-periodization.md` |
| 2 | `chapters/05-hypertrophy-methods.md` | `notes/hypertrophy-methods.md`, `verification/hypertrophy-methods.md` |
| 3 | `chapters/06-flexibility-and-range-of-motion.md` | `notes/flexibility-and-range-of-motion.md`, `verification/flexibility-and-range-of-motion.md` |
| 4 | `chapters/07-strength-through-range.md` | `notes/strength-through-range.md`, `verification/strength-through-range.md` |
| 5 | `chapters/08-connective-tissue.md` | `notes/connective-tissue.md`, `verification/connective-tissue.md` |
| 6 | `chapters/09-concurrent-training.md` | `notes/concurrent-training.md`, `verification/concurrent-training.md` |
| 7 | `chapters/10-recovery-and-nutrition.md` | `notes/recovery-and-nutrition.md`, `verification/recovery-and-nutrition.md` |
| 8 | `chapters/11-frontiers.md` | `notes/frontiers.md`, `verification/frontiers.md` |
| 9 | `chapters/01-introduction-and-methods.md` | This plan, `README.md`, the chapters' abstracts and the round-0 report for context on what changed |
| 10 | `chapters/12-synthesis.md` | All chapters (abstracts, practical implications, claims tables) |
| 11 | `/evidence/INDEX.md` | Evidence audit: see below |
| 12 | `thesis.md` | Final edit: see below; then open the PR and turn the scheduled task off |

## How to write a literature chapter

- Write from the notes, the verification report and the evidence records. Where the verification
  corrected or refuted a claim, use its corrected version. Fetch a source only to check a specific
  number the chapter relies on; no new literature searches.
- Standalone: about building strength and mobility in healthy adults, with no rehab framing.
- Structure: a short abstract (100–150 words); sections that explain the mechanisms and the state
  of the evidence; a short critical appraisal (what limits this literature); practical implications,
  each tagged with its grade; and a closing table of key claims with grade and citations.
- Cite as `[@id]`, where `id` is a record in `/evidence/sources/`. Every claim carries a grade:
  established, promising, contested, speculative or convention. Call an effect verified only when
  the record's `read_level` is `full-text`.
- Clear explanatory prose for an intelligent non-specialist; define terms on first use.

## Evidence audit (step 11)

Check every record in `/evidence/sources/` against the format in `/evidence/README.md`. Merge
duplicate records about the same paper (keep one id and update citations to it). List citations in
the chapters that point to no record, and fix them where the source is clear. Write
`/evidence/INDEX.md`: a table of all records (id, year, design, read level, topics) grouped by
topic, with counts.

## Final edit (step 12)

Make terminology, grades and cross-references consistent across chapters (light touch: no
rewriting). Write `thesis.md`: a title page, a 250–400 word abstract, a table of contents linking
each chapter, abbreviations and a glossary. Update `README.md` with the status and word counts.
