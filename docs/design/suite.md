# The suite: one framework, several branded apps

**Status:** proposed, 2026-11-25. Decisions marked *owner* were made by the owner. The rest are
proposals until the owner confirms them; open questions are at the end. Work is tracked in GitHub
issues, each linked from the phase it belongs to.

## Goal

This repository holds research rounds, a shared evidence base and the sites built on them. Today
there is one site, Spinal Tap. The aim is several sites that share one framework, in the way
TanStack's libraries share one structure and design language:

- **Spinal Tap**: the lumbar spine for people who lift (exists).
- **Meatball Strong**: strength and mobility, built on the strength and mobility thesis (new).
- Later tracks get their own app the same way.

Each app has its own name, brand, domain and content. Underneath, they share a design system, the
3D atlas viewer, the site structure, the evidence base and the research method that produces it.

## Where things stand

| Area | Today |
|---|---|
| Spinal Tap | Astro + MDX static site in `apps/spinal-tap/`. Seven tracks, 42 articles, 24 evidence cards, a 3D atlas (an iframe app forked from human-atlas, about 90 MB of models), a return-to-lifting plan, a glossary, spaced-repetition review and Pagefind search. |
| Spinal Tap sources | Its own registry, `src/content/sources/sources.yml`: 51 sources tiered A/B/C by licence. Articles cite with `<Source id>` and `<Evidence id>`. |
| Evidence base | `evidence/sources/*.yml`: 662 records with design, read level and a graded finding per claim. Only 3 of Spinal Tap's sources have a record here. |
| Research | One full round (the strength and mobility thesis, 12 chapters) and the round-0 first pass. The spine content was written to `apps/spinal-tap/docs/plan.md` and has no research round behind it. |
| Method | Written down only in pieces: the thesis README, `research/README.md` and `evidence/README.md`. No rubric says what earns each grade. The checks (format, duplicates, DOIs) were run by hand. |

## Decisions

### D1. Separate branded apps on one shared framework (*owner*, 2026-11-25)

Each subject gets its own app, brand and deploy, built from shared packages. There is no hub site.
An app links to the others in its footer.

### D2. Astro stays the framework

Both apps are mostly prose plus structured data, served static. Spinal Tap already uses Astro's
content collections, MDX and Pagefind, and works. The atlas stays a separate React app embedded as
an iframe, so it does not tie the apps to React.

### D3. npm workspaces, source-only packages

One root `package.json` declares `packages/*` and `apps/*` as workspaces, with one lockfile. Packages
are not published and have no build step: apps import their `.astro`, `.ts` and `.css` files
directly. The atlas is the exception (D6).

### D4. Data stays at the root

`evidence/` and `research/` stay where they are, as plain files any tool can read. The
`@suite/evidence` package (the scope name is a placeholder until the suite is named, Q1) reads them.
Apps never copy evidence into their own folders.

### D5. One evidence base, one citation model

Spinal Tap's `sources.yml` and evidence cards merge into `evidence/sources/`. Every citation in
every app resolves to an evidence record:

- in MDX, `<Source id="...">` and `<Evidence id="...">` (as today);
- in plain Markdown (thesis chapters), `[@id]` (as today), rendered as the same citation link.

The merged record format adds what Spinal Tap needs and the thesis records lack:

| Field | Purpose | Comes from |
|---|---|---|
| `licence: {spdx, reuse}` | `reuse` is `copy`, `summarise` or `link`: whether an app may copy text or figures. Replaces tiers A/B/C. | `sources.yml` tier + licence |
| `design: guideline \| textbook \| dataset \| media` | New design values for sources that are not studies (OpenStax, BodyParts3D, Wikimedia, the WHO guideline). | `sources.yml` |
| `findings[].certainty` | GRADE certainty (`high` … `very-low`) **only when the source itself reports it**, as a guideline or Cochrane review does. Our own verdict stays in `grade`. | Evidence cards, checked during migration |
| `findings[].caveats`, `population`, `effect` | Already in the format; evidence-card text maps onto them. | Evidence cards |

This keeps two different things apart: a source's own certainty rating, and this project's grade for
the claim. When a card's `certainty` turns out to be Spinal Tap's own judgement rather than the
source's, it becomes a `grade`.

### D6. The atlas becomes a package, built once

`packages/atlas` holds the human-atlas fork. Its build produces static assets that each app copies
into `public/atlas/` at build time, plus the concept index that `<Structure>` checks ids against.
Muscles, tendons and joints matter to strength and mobility content too, so Meatball Strong can use
the same viewer with its own starting views.

### D7. Brands are themes over shared tokens

`packages/ui` defines the design tokens as CSS custom properties (colour, type, spacing, radius,
shadow, light and dark). It also holds the shared components and layouts. A brand is a small theme
file, plus a logo, fonts and an app name. It overrides tokens and never forks components. Spinal
Tap's current look becomes its theme, and nothing about the site should visibly change when it moves
onto the packages.

### D8. Sections are configured per app

Spinal Tap's seven tracks become one app's configuration of a general "sections" concept in the
kit: an id, name, blurb, icon and order. The article schema validates `section` against the app's
own list. Meatball Strong defines its own sections.

## Package layout

```
packages/
  evidence/   # record schema (zod), loader, Astro content loader, CLI
  ui/         # tokens, base layout, components, theme contract
  atlas/      # human-atlas fork; builds static assets + concept index
  kit/        # Astro integration: collections, routes, features, checks
apps/
  spinal-tap/        # brand theme + config + content + app-only pages
  meatball-strong/   # brand theme + config + content + app-only pages
evidence/            # data: one YAML per source
research/            # data: rounds, theses, notes, verification, METHODS.md
```

| Package | Holds | Moves from Spinal Tap |
|---|---|---|
| `evidence` | Schema; `loadRecords()`; an Astro loader so apps get records as a content collection; CLI: `check` (schema, ids, every citation resolves, `cited_in` accurate; runs in CI), `doi-audit` (Crossref: DOI matches title, retractions, corrections; networked, run on demand and weekly), `oa-lookup` (OpenAlex: legal open-access full texts for abstract-only records) | `check-sources.mjs` |
| `ui` | Tokens, `Base` layout, Callout, Lede, Tag, KeyList, Notes, Term, Glossary, Source, Evidence card, Disclaimer, theme toggle | `global.css`, most of `components/`, `layouts/` |
| `atlas` | The viewer app and models; `<AtlasViewer>` and `<Structure>` | `atlas/`, `Structure.astro`, `build-atlas-index.mjs` |
| `kit` | `suite()` Astro integration: MDX; article and glossary collections; routes for the evidence browser (`/evidence/`, `/evidence/[id]/`), the glossary and search; spaced-repetition review (FSRS, from `recall.ts` and `schedule.ts`); a Markdown renderer for thesis chapters that turns `[@id]` into citations; link and glossary checks | `lib/recall.ts`, `lib/schedule.ts`, `check-links.mjs`, parts of `check-plan.mjs`, the evidence and glossary pages |

Spinal Tap keeps its own: the return-to-lifting plan, gates, calculator, tracker templates and its
articles. Meatball Strong starts with: the thesis reader, the evidence browser, the glossary and
search. Its programmes and articles come later (Q2).

**CI:** one job validates the evidence base and runs package tests. One job per app builds the app
and runs its checks, filtered by the paths each app depends on.

**Deploys:** one Vercel project per app, each with its Root Directory set to its app folder and
"include files outside the root directory" enabled, so the workspace packages and root data are
available. Installs run from the repository root.

## Research method

A new `research/METHODS.md` describes how every research round runs, whatever its subject. In
outline:

1. **Protocol first.** Before searching, a round writes `protocol.md`: the question, the population
   and outcomes in scope, inclusion and exclusion rules, databases, date window, and the chapter
   plan. Changes after searching starts are logged with the reason.
2. **Search and log.** Search PubMed, Europe PMC and OpenAlex. Record the queries and hit counts, so
   the search can be repeated and a PRISMA-style count (found, screened, included) can be reported.
3. **Record every source** in `evidence/sources/`, extending existing records rather than
   duplicating them.
4. **Read at the highest level available.** Look up a legal open-access full text through OpenAlex
   before settling for the abstract. `read_level` records what was read, and only full-text numbers
   can be stated as verified.
5. **Verify independently.** A separate pass that did not write the notes checks the load-bearing
   claims against the primary source, not memory, and tries to refute them. Numbers get the closest
   check, because that is where AI extraction fails most.
6. **Grade with a written rubric.** Each grade (`established`, `promising`, `contested`,
   `speculative`, `convention`) gets explicit criteria adapted from GRADE: study design, risk of
   bias, consistency, precision, directness and publication bias.
7. **Audit mechanically.** `evidence check` must pass. `evidence doi-audit` must show no DOI pointing
   to another paper and no unread retraction. Published corrections must be read or listed.
8. **Write.** Chapters cite by record id. Synthesis grades never exceed the grades of the evidence
   beneath them.
9. **Disclose AI use.** Following the 2025 joint position of Cochrane, Campbell, JBI and CEE (built
   on RAISE), say how agents searched, extracted, verified and wrote, and what a human checked.
10. **Pace the work.** Rounds run as a sequence of scheduled steps, one at a time, so they don't
    exhaust a usage window. No step starts without the owner approving the plan.

The rubric in step 6 needs a focused look at GRADE and its adaptations for exercise science before it
is written. That is the first issue.

## Phases

| Phase | Work | Depends on | Issue |
|---|---|---|---|
| 0 | `research/METHODS.md` and the grading rubric | — | [#6](https://github.com/dan-ville/spinal-tap/issues/6) |
| 1 | npm workspaces; `packages/evidence` with schema, loader and `check`; CI job; `doi-audit` and `oa-lookup` | — | [#7](https://github.com/dan-ville/spinal-tap/issues/7) |
| 2 | Merge Spinal Tap's sources and evidence cards into `evidence/`; Spinal Tap reads through the package; `sources.yml` removed | 1 | [#8](https://github.com/dan-ville/spinal-tap/issues/8) |
| 3 | Extract `ui`, `atlas` and `kit` from Spinal Tap, with no visible change to Spinal Tap | 2 | [#9](https://github.com/dan-ville/spinal-tap/issues/9) |
| 4 | `apps/meatball-strong` v0: brand, thesis reader, evidence browser, glossary, search; Vercel project | 3 | [#10](https://github.com/dan-ville/spinal-tap/issues/10) |
| 5 | A spinal rehab research round under `METHODS.md`, so Spinal Tap's content gets the same evidence chain as the strength thesis | 0, 2 | [#11](https://github.com/dan-ville/spinal-tap/issues/11) |
| Data | Read the 14 published corrections; find DOIs for the 8 records without one; run `oa-lookup` over the 444 abstract-only records and re-read what becomes available | 1 | [#12](https://github.com/dan-ville/spinal-tap/issues/12) |

## Open questions

- **Q1. What is the suite called?** It names the npm scope (`@<name>/ui`) and probably the repository.
  The repository is still called `spinal-tap`.
- **Q2. What does Meatball Strong show?** Proposal: v0 renders the thesis as a library, with citations
  linked to the evidence browser. Articles and programmes written from the thesis come after, in the
  style of Spinal Tap's articles.
- **Q3. Are evidence-browser pages shared across apps?** Proposal: each app shows the whole evidence
  base, filtered by default to the topics its content cites.
- **Q4. Domains** for each app.
