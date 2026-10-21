# Course player: lesson sidebar · lesson · visual pane

_Committed from the planning session. Read [design-research.md](design-research.md) for the verified code facts,
the full postMessage protocol, file:line references and per-milestone done conditions behind each decision._

## Context

The owner wants the learning pathways to feel like freeCodeCamp / Udemy: a curriculum sidebar listing every
lesson, the lesson itself in the middle, and a third pane that shows the anatomy being studied. Articles stay as
they are (no MDX edits). Work happens on branch `claude/awesome-keller-rk9189`, already reset to main (8f95c63).

Research (5 readers, 3 competing designs, 1 judge that verified load-bearing claims in code) produced the
architecture below. Owner decisions (2026-10-21):
1. **Completion** = "Mark lesson complete" button OR all Checks graded → new `progress` localStorage key,
   exported/imported/cleared by /settings/.
2. **3D auto-loads** on screens ≥ 64rem after the article paints; never on phones or Save-Data; click elsewhere.
3. **Lessons the atlas can't show get 2D figures in this branch, using existing open-licensed assets only**
   (no original illustration). See "Figures".
4. **Mislabelled tags** (hamstring group→semitendinosus, erector spinae→iliocostalis lumborum, lumbar
   vertebrae→L4): leave MDX untouched; chips show an honest "shows: …" note.

Verified facts that shape the design:
- The atlas fetches all 15 chunks (≈33 MB gz) and 2,234 parts; a **course pack** of the lesson structures +
  skeleton context is 75 parts ≈ **2.3 MB gz**, and loads through the existing loader unchanged if written as a
  valid `Atlas` object (`atlas/app/anatomy.ts:19-21`, `scene.tsx:62-77`).
- Camera framing only happens in isolate mode (`scene.tsx:119-123`); context framing must be added.
- `transition:persist` does NOT keep an iframe alive in Astro 5.18.2 → full page loads per lesson; rely on the
  immutable cache + small pack + bfcache.
- OrbitControls `preventDefault`s wheel when zoom is enabled → embed needs a Ctrl/activation wheel policy so the
  pane never hijacks article scrolling.
- 14 lessons have ≥1 atlas-modelled structure, 4 tag only absent structures, 24 tag nothing.

## Layout and scroll model

- **Window scrolls the lesson** (keeps anchors, find-in-page, bfcache, print, Glossary maths). Side panes are
  sticky grid items: `top: var(--nav-h); height: calc(100svh - var(--nav-h)); align-self: start`; only their
  inner lists scroll (`overscroll-behavior: contain`). No ancestor may set `overflow`.
- ≥ 75rem: `16rem | minmax(0,1fr) | clamp(22rem,30vw,34rem)`; main max 42rem. Each side pane collapses to a 3rem
  rail; both collapsed = focus mode.
- 64–75rem: outline is a rail (opens as overlay drawer) | lesson | 22rem pane.
- < 64rem: single column + sticky 44px **LessonBar** [Lessons] [Lesson 3 of 8] [Visual]; outline = left modal
  drawer; visual pane = right sheet (48–64rem) / full-screen dialog (< 48rem); scroll-padding includes the bar.
- Pre-paint inline script applies `player:ui` (collapsed state) so nothing shifts after paint.
- Print hides outline, pane and bar; the article prints as today.

## Files

New site files
- `src/layouts/Player.astro` — wraps Base (new `wide` prop lifts the nav's 72rem cap); grid + skip link.
- `src/components/CourseOutline.astro` — static outline from `buildCourse()`: one native `<details>` per track,
  rows with status glyph slot, title, "4 min · 3D/Figure" meta, sr-only status; active row expands into its h2
  list with scroll-spy. `data-pagefind-ignore`. Works without JS.
- `src/components/LessonEnd.astro` — "Checks answered n/m" (links to unanswered `#check-id`), Mark complete
  (rendered `hidden`, revealed by JS), large Next card, polite live region. Never auto-advances.
- `src/components/LessonViz.astro` — the right pane: header, stage, controls (In context | Isolated; Auto ¾ Front
  Side Back; Reset; Open full atlas), status line, structure chips, credits. Shows 3D, figure(s), or both.
- `src/components/LessonBar.astro` — narrow-screen bar.
- `src/scripts/player/{outline,viz,drawers}.ts` — DOM glue; every storage call in try/catch.
- Pure, node-tested modules: `src/lib/course.ts` (buildCourse, resolveStructure — Structure.astro switches to it
  with byte-identical output — extractStructures, extractCheckIds, readingMinutes, neighbours),
  `src/lib/progress.ts` (parse/mark/unmark, lessonStatus, resumeTarget, gradedCheckIds without ts-fsrs),
  `src/lib/bundle.ts` (export v2 `{recall, notes, progress}`, reads v1 and bare recall), `src/lib/storage.ts`,
  `src/lib/atlas-bridge.ts` (state machine: idle→booting→ready→shown/error/paused/unmounted, request ids,
  coalescing, 15 s timeout).

Changed site files
- `src/layouts/Article.astro` → renders Player; `main#lesson tabindex=-1`, container-type inline-size; crumb
  "Track · Lesson 3 of 8"; inline TOC hidden only while the full outline column is visible.
- `src/pages/learn/[...slug].astro` → buildCourse once; course-wide prev/next across tracks (labelled at
  boundaries); published-only in production.
- `src/components/Check.astro` → try/catch around storage; dispatch `recall:change`.
- `src/components/Notes.astro` → try/catch.
- `src/components/Structure.astro` → uses `resolveStructure` (output byte-identical).
- `src/pages/learn/index.astro`, `[track].astro` → use buildCourse; progress counts, "Continue: <lesson>".
- `src/pages/settings.astro` → bundle.ts: inventory row "Lessons completed", export/import/clear/replace all
  include `progress` (+ `course:last` cleared).
- `scripts/check-sources.mjs` → `order` unique per track.

Atlas (edit in place; /atlas/ behaviour unchanged except comma-separated `?focus=a,b`)
- New embed entry: `atlas/web/embed.html` (noindex), `atlas/web/embed-main.tsx`, `atlas/app/embed-page.tsx`,
  `atlas/app/embed.css` (no tailwind/base-ui/cmdk/lucide; no inspector/EXPLANATIONS), second Rollup input in
  `atlas/vite.config.ts`.
- `atlas/app/embed-protocol.ts` (pure, shared with the site): envelope `{ns:'spinal-tap/atlas', v:1, type}`.
  Parent→atlas: `show{req,ids≤32,mode,view}`, `reset`, `theme`, `pause`, `resume`. Atlas→parent: `ready`,
  `progress`, `loaded`, `shown{req,names,missing}`, `picked`, `interaction`, `error{code}`. Origin and source
  checked both ways; targetOrigin = location.origin. `parseFocus`, `autoView` (back view for posterior muscles).
- `atlas/app/scene.tsx` optional `embed` prop only: low-power renderer, theme clear colour, no ground/rings,
  `frameBox()` factored from the isolate block (non-embed numbers identical), context framing with view
  direction, zero-size resize guard (both modes), idle sleep + pause, Ctrl/activation wheel policy.
- `atlas/app/page.tsx`: only the `?focus` effect (comma list → union).
- `scripts/build-atlas-pack.mjs` (appended to `build:atlas`): LUMBAR_PRESET + resolved published `<Structure>`
  concepts + context (`src/data/atlas-pack.json`: vertebral column FMA13478, bony pelvis FMA16580, femur
  FMA9611); byte-copies part slices into ≤3 content-hashed chunks under `public/atlas/models/packs/`, writes
  `course.json`; fails above 3.5 MB gz. Hashed names fall under the existing immutable vercel.json rule.

Pane loading policy: auto-mount when ≥64rem, pane open, lesson has modelled chips, not Save-Data/2g, after
`load` + idle. Below 64rem only on explicit action; closing the sheet removes the iframe. Collapse → `pause`,
removed after 60 s. Inline `<Structure>` clicks (plain left click) focus the pane instead of navigating.

## Figures (decision 3)

Owner follow-ups (2026-10-21): lessons with no fitting existing figure keep the **collapsed rail**; single
figures from CC BY / CC BY-SA papers the lessons already cite are **allowed with per-figure credit**.

Research findings that constrain sourcing:
- This session can reach **only GitHub** (raw.githubusercontent.com) among image hosts. Wikimedia, Wellcome,
  Gutenberg, Internet Archive, NLM, LoC, Openverse, Flickr, Servier, PMC/Europe PMC and journal sites are blocked.
- **OpenStax A&P 2e was relicensed to CC BY-NC-SA on 2026-03-19** (commit fdfa6e2). The prior commit
  `b0058a743bdd2cc08196abaaa7d5469970c0d80c` is CC BY 4.0; CC licences are irrevocable for copies released under
  them, so figures are taken from that pinned commit only, with per-figure credit-line checks (some OpenStax
  micrographs are © third parties, not CC BY). `sources.yml` `openstax-ap-2e` currently says `CC-BY-4.0`
  without the pin — fix the entry (pin commit, note relicensing).
- Excluded as non-free: Owen 2020 (CC BY-NC), Helms 2016 (CC BY-NC-ND; table reprinted with permission),
  Sedrak 2021 (CC BY-NC-ND), WHO 2023 (CC BY-NC-SA), Radiopaedia (NC). `kent-2023-restore` licence unconfirmed.

Per-lesson assignments: **not final.** The candidates below were gathered from search-engine copies of the
file pages because the APIs were blocked here. A session that can reach Wikimedia must verify each one through
`https://commons.wikimedia.org/w/api.php?action=query&titles=File:NAME&prop=imageinfo&iiprop=url|size|mime|extmetadata&format=json`
(record `LicenseShortName`, `Artist`, `Credit` verbatim into figures.yml) before committing the file. An
inventory of OpenStax figures at the pinned commit was still running when this plan was committed; redo it
locally (fetch `modules/<id>/index.cnxml` for 7.3, 8.3, 9.x, 10.x, 11.3–11.6, 13.x, 14.x at the pinned commit and
read each caption's credit line).

Prefer, in order: Gray's 1918 plates (PD) → OpenStax first-edition uploads on Commons (CC BY 3.0/4.0) or the
pinned 2e repo → BruceBlaus/Blausen (CC BY 3.0) → Servier on Commons (CC BY-SA 3.0) → CC BY paper figures.

| Lesson | Candidate (Commons file unless noted) | Licence (unverified) |
|---|---|---|
| anatomy/lumbar-vertebra | 725 Lumbar Vertebrae.jpg; Gray93.png | CC BY 3.0; PD |
| anatomy/intervertebral-disc | 716 Intervertebral Disk.svg (or .jpg); Gray301.png | CC BY-SA 3.0 (.jpg CC BY 3.0); PD |
| anatomy/disc-nutrition | 716 Intervertebral Disk (weak: no nutrition route) | as above |
| anatomy/facet-joints | Facet Joints.png (BruceBlaus); Gray93.png | CC BY 3.0; PD |
| anatomy/spinal-ligaments | Gray301.png (midline ligaments); Gray320.png (iliolumbar, sacroiliac) | PD |
| anatomy/deep-vs-global-muscles | Gray388.png (cross-section, QL, fascia); Multifidi.png; Quadratuslumborum.png | PD; PD; PD-US only |
| anatomy/nerve-roots-and-dermatomes | Gray662.png (cauda equina); Dermatoms.svg; 1611 Dermatomes-02.jpg | PD; PD; CC BY 4.0 |
| anatomy/hip-complex | 3D covers it | — |
| biomechanics/intra-abdominal-pressure-and-bracing | 1112 Muscles of the Abdomen.jpg | CC BY 4.0 |
| biomechanics/neutral-zone, flexion-compression | Gray301.png (segment) | PD |
| biomechanics/diurnal-disc-changes | 716 Intervertebral Disk.svg | CC BY-SA 3.0 |
| pathology/bulge-protrusion-extrusion | Servier four-stage herniation series; 728 Herniated Disk.jpg; Herniated disk.svg | CC BY-SA 3.0; CC BY 3.0; CC BY-SA 4.0 |
| pathology/degeneration-and-asymptomatic-findings | Lumbar MRI t2-tse-rst-sagittal 10.jpg; Lateral X-ray of lumbar spine spondylosis.jpg | CC0; CC BY-SA 3.0 |
| pathology/natural-history-and-resorption | Servier sequestration panel; Hernie discale L4 L5.png | CC BY-SA 3.0; CC0 |
| pathology/radiculopathy | Blausen 0484 HerniatedLumbarDisc.png; Sciatica.png | CC BY 3.0; CC BY-SA 4.0 |
| pathology/red-flags | Saddle anesthesia.png; Gray662.png | CC BY-SA 3.0; PD |
| pain-science/pain-vs-damage | Descartes-reflex.JPG (the model the lesson rejects; caption must say so); OpenStax 1417 ascending pathways (pinned repo, raw URL verified 200) | PD; CC BY 4.0 |
| pain-science/sensitization | Gate Theory Circuit Mechanism.svg | CC BY-SA 4.0 |
| pain-science/graded-exposure | Fear-avoidance model.jpg (check "own work" claim) | CC BY-SA 3.0 |
| pain-science/what-imaging-tells-you | Lumbar MRI t2-tse-rst-sagittal 10.jpg | CC0 |
| rehab/cognitive-functional-therapy | Biopsychosocial Model of Health 1.svg | CC BY-SA 4.0 |
| rehab/exercise-modes-compared | Tataryn 2021 Fig. 2 (forest plot; needs zoom) | CC BY 4.0 |
| rehab/mcgill-approach-and-critics | Side plank 1.svg (Everkinetic) | CC BY-SA 3.0 |
| training-science/deloads | Bell 2023 Fig. 2 (check its credit line); Supercompensation.svg (needs a caveat) | CC BY 4.0; CC BY-SA 3.0 |
| training-science/strongman-loading | Odd Haugen Yoke Walk.JPG; Farmers walk.jpg | CC BY 2.0 |

Structures the atlas lacks: multifidus (Multifidi.png), QL (Quadratuslumborum.png), internal oblique
(Gray395.png), TVA (Transversus abdominis.png), rectus abdominis (1112 Muscles of the Abdomen.jpg), latissimus
(Latissimus dorsi.PNG), sacroiliac joint (Sacroiliac Joint.png), ligaments (Gray301.png, Gray320.png),
thoracolumbar fascia (Gray388.png), spinal cord (Blausen 0822 SpinalCord.png), lumbar plexus (Gray823.png,
Lumbar plexus.svg), sciatic nerve (Gray832.png). None found: vertebral endplate, intertransverse ligament, Modic
changes, disc resorption series, neutral-zone curve, spine moment-arm diagram.

Collapsed rail (no fitting open figure found): rehab/{passive-therapies, return-to-sport-gates,
what-the-guidelines-say}; training-science/{periodization, progression-models, rpe-and-rir,
volume-intensity-frequency, workload-spikes-and-acwr}; self-coaching/* (all five); pathology/when-imaging-is-warranted.

Pipeline (no network at build time):
- Originals committed to `src/assets/figures/<id>.{png,jpg,svg}`; rendered by new `src/components/Figure.astro`
  via `astro:assets` `<Picture>` (sharp is already installed as Astro's optional dep) at widths 350/550/1100,
  WebP, `sizes` matched to the pane. Click-to-zoom opens the largest size.
- Registry `src/data/figures.yml`: `id, file, source (sources.yml id), title, author, sourceUrl, licence (SPDX),
  licenceUrl, licenceEvidence, changes, retrieved, alt, caption, kind (line-art|colour|photo|imaging),
  invertInDark?`. Lesson mapping lives in `src/data/lesson-visuals.yml` (`<lesson slug>: [figure ids]`) so
  **no MDX or frontmatter changes**.
- Attribution: short credit under each figure; new `/credits/` page generated from figures.yml (full
  title/author/source/licence/changes), linked from the footer; LICENSE-content.md gains a "Figures carry
  their own licences" section.
- Rules: CONTRIBUTING.md, LICENSE-content.md, sources.yml header and docs/plan.md §3/§8 gain the narrow carve-out
  (one figure from a CC BY/BY-SA source may be reproduced when its own licence covers it, recorded in
  figures.yml; article text stays summarise-only).
- Dark mode: figures sit on a fixed light plate in both themes (slight brightness drop in dark); `invertInDark`
  only for public-domain/greyscale line art.
- New `scripts/check-figures.mjs` (style of check-plan.mjs): ids, required fields, licence allowlist
  (PD, CC0, CC BY 2.0–4.0, CC BY-SA 2.0–4.0), source exists and is not Tier C, Tier B needs licenceEvidence,
  files exist and within size caps (raster ≤ 500 KB, SVG ≤ 200 KB, folder ≤ 10 MB), no orphans, every
  lesson-visuals id resolves. `scripts/check-links.mjs` gains `srcset` parsing.
- Pane behaviour: lesson with 3D and figures → 3D stage plus a "Figures" strip; figures only → figure stage
  (pane open); neither → collapsed rail with "not in atlas" chips and the orientation button.

## Validation

- `scripts/course.test.mjs`, `scripts/progress.test.mjs`, `scripts/atlas-embed.test.mjs`,
  `scripts/atlas-pack.test.mjs` (byte identity, alignment, completeness, determinism, budget, cache regex) — in
  `npm test`.
- `scripts/check-player.mjs` over `dist/learn/*/*/index.html`: one outline with 42 links and exactly one
  `aria-current="page"`; no h1 outside main; skip link; pane present and `data-pagefind-ignore`; chip sets equal
  resolved structures; credits present; prev/next in course order; no `<iframe` in static HTML; ≤ 64 KB.
- Added to CI and CONTRIBUTING (six commands).

## Milestones (one commit each, all checks green at every step)

M0 baseline snapshot · M1 course data layer + course-wide prev/next · M2 player shell, outline, lesson end,
static pane · M3 progress + settings bundle · M4 atlas embed entry + protocol · M5 course pack · M6 wire 3D into
the pane · M7 figures · M8 responsive drawers, a11y, print · M9 docs (plan.md §2/§8, CONTRIBUTING, README).

## Verification

Every milestone ends with all of these exiting 0:
```sh
npm run build && npm test
node scripts/check-sources.mjs && node scripts/check-links.mjs && node scripts/check-plan.mjs
node scripts/check-player.mjs && node scripts/check-figures.mjs
```
Browser pass (Playwright with the preinstalled Chromium, or by hand), recorded in the PR:
- Widths 360, 768, 1024, 1280, 1440: outline, lesson, pane layout; no horizontal scroll at 320px.
- hip-complex at 1280px: 3D auto-loads after paint; chips and inline Structure links refocus without reload;
  mode/view buttons; plain wheel scrolls the article, Ctrl+wheel zooms; dark mode reaches the iframe.
- A figure-only lesson (spinal-ligaments) and a rail lesson (rpe-and-rir).
- Grade every Check on a lesson → outline tick appears without reload; Mark complete/Undo; /settings/ export
  includes progress and an old export still imports.
- Keyboard-only: skip link, drawers, Esc, focus return; reduced motion; print preview; storage blocked.
- /atlas/ and /atlas/?focus=FMA13075 behave as before; Back from the next lesson restores the live view.
- Phone: open the sheet, load 3D, close it, iframe removed.
