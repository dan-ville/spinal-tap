# Spine Academy — plan

*2026-10-20. Working name only; rename freely. Standalone, open source, free for anyone.*

## 0. Context

**The ask.** A free, open-source web app that teaches lumbar-spine anatomy, pain science, rehab, and strength programming deeply enough for a motivated non-clinician to self-direct rehab and training toward elite strength. Long-form articles plus a 3D anatomy explorer. Plus a long-horizon, gate-based rehab-to-performance plan. Everything free and open-licensed, because the audience (starting with you) cannot pay for school or materials.

**Scope rule.** This is its own repo with no dependency on any other project. Integrations with other tools are a later, separate decision.

**The one boundary the site keeps everywhere.** It teaches; it does not diagnose, clear a symptom, or replace a clinician. Every programming rule keys on load, volume, range, and preparedness relative to the reader's own history, never on "this movement is bad". Red flags (symptoms below the knee, numbness or weakness, saddle anaesthesia, bladder or bowel change, night pain, fever, unexplained weight loss, trauma) end self-direction and go to a clinician the same day. This appears on the plan page and in the pathology track, and a `Disclaimer` component sits on every rehab article.

---

## 1. The 3D visualizer — decision

**d3.js is the wrong tool**: it is a 2D data-viz library, not a 3D engine. The browser 3D engine is **three.js**, and the real question is which pre-built open anatomy atlas to fork.

| Option | Code licence | Data | Stack | Verdict |
|---|---|---|---|---|
| **ashemag/human-atlas** | MIT | BodyParts3D 4.0, **CC BY 4.0**, 2,234 meshes / 3,432 FMA concepts, ~33 MB compressed, batched GPU picking, search, isolate, exploded view, mobile | React + three.js + Vite | **Fork this.** Permissive code and data; the hard geometry work (simplify, batch, pick) is done. |
| ivershuo/somakine | unstated | BodyParts3D 4.0 musculoskeletal (bones, muscles, joints, ligaments, tendons) | TS + three.js | Backup for ligament/tendon layers if human-atlas lacks them. Confirm licence first. |
| authorOd/3d-anatomy-atlas | unstated | "licence audit pending" | Lit web component, GLB on demand | No, until the data licence clears. |
| Z-Anatomy | CC BY-SA 4.0 | BodyParts3D derivative | Blender / Unity | Dormant, no live web build. Mine its structure definitions only. |
| Open Anatomy Browser (Harvard SPL) | open | SPL atlases | older web stack | Research-grade; heavier than needed. |
| BioDigital, Zygote, Complete Anatomy | commercial | — | — | Out. |
| `<model-viewer>` | Apache | any glTF | zero code | No per-structure picking. Fine for single-structure figures inside articles. |

**Spike 0 (half a day, first):** clone human-atlas, `npm ci && npm run dev`, confirm these are individually selectable: L1–L5 bodies, intervertebral discs, facet joints, multifidus, erector spinae group, quadratus lumborum, psoas major, gluteus maximus, hamstrings, sciatic nerve, L4/L5/S1 roots, pelvis. If discs or ligaments are missing, add somakine's musculoskeletal pack for those layers. Write the result to `docs/spike-0.md`.

**Integration.** Mount the fork at `/atlas`. Add one feature: a `?focus=<FMA id or slug>` URL parameter that selects and isolates a structure on load. Articles get an MDX `<Structure id="FMA:xxxx">multifidus</Structure>` component that links to `/atlas?focus=…`. That link is what turns the atlas from a toy into a learning tool. Add nothing else to the fork in v1.

---

## 2. Architecture

**One repo, static, no backend, no accounts.**

```
spine-academy/
  astro.config.mjs            # Astro + MDX + React integration (atlas island only)
  src/
    content/
      articles/<track>/*.mdx  # content collection; frontmatter: title, track, order, sources[], status
      sources/sources.yml     # the source registry (§3); every citation resolves here
    components/               # Callout, Check, KeyList, Lede (copied from Chiron); Structure, Evidence, Source, Disclaimer, Calc, Notes (new)
    layouts/Article.astro
    pages/
      index.astro
      learn/[...slug].astro   # article pages with TOC and prev/next
      plan.mdx                # the rehab-to-performance plan template (§4)
      review.astro            # due Checks (ts-fsrs over localStorage), export/import JSON
      atlas.astro             # mounts the human-atlas React app as a client:only island
  atlas/                      # git subtree of the human-atlas fork, own package.json
  scripts/
    check-sources.mjs         # build fails if a cited source id lacks a licence tier
    check-links.mjs           # dead-link check over built HTML
  LICENSE                     # MIT (code)
  LICENSE-content.md          # CC BY-SA 4.0 (prose) + Tier A attributions
  ATTRIBUTION.md              # carried verbatim from the atlas fork
```

**Stack, by ladder rung.**
- Content: Astro content collections + MDX. Native TOC, sitemap, prev/next, zero client JS on article pages.
- Search: **Pagefind**, a static index built at deploy. Add once there are ~20 articles.
- Active recall: Chiron's `Check` component, copied. Review scheduling: `ts-fsrs` (MIT), the one runtime dependency beyond Astro and the atlas.
- Progress: `localStorage` per article and per plan gate. No accounts in v1.
- Atlas: human-atlas as a React island (`client:only="react"`). If Vite-specific pieces fight Astro, deploy the fork on its own and `<iframe>` it; the `?focus=` contract holds either way. Decide in Spike 0.
- Charts (dose-response curves, load tables): inline SVG. Load the `dataviz` skill before the first one.
- Hosting: GitHub Pages (free, public repo, 100 MB per file, 1 GB site) or Vercel hobby. Check atlas batch file sizes against the host's per-file cap before committing. Cloudflare Pages caps files at 25 MiB.
- Licences: code MIT; prose **CC BY-SA 4.0** (share-alike inputs force this); atlas data CC BY 4.0. A footer line on every page.

**Skipped, deliberately:** CMS, database, auth, comments, user content, i18n, native app, on-site AI chat. Each has a known upgrade path if the site grows beyond one maintainer.

---

## 2b. Pedagogy — methodology borrowed from Chiron's research

Chiron (your tutor-design project) did the learning-science homework; this site reuses the conclusions and the component code, not the product. Only the high-utility techniques with replicated effects are adopted.

**Format: prose that pauses and quizzes.** Every article is expository text broken every few paragraphs by a `Check` (question → pre-answer confidence rating → reveal → answer with explanation). Copy Chiron's `Check.astro`, `Callout.astro`, `KeyList.astro`, `Lede.astro` into `src/components/` as-is (your code, your licence).

**Rules for every Check** (Matuschak's rubric, kept short): one fact or idea per Check; generative short-answer, never recognition-only; always followed by the answer and a one-line why; ask "why" and "what would happen if", not "what is called". Transfer items use novel surface features (a new lifter, a new load) so a reader cannot pass by pattern-matching the article.

**Confidence first.** The rating before reveal is the cheapest high-value signal. Confidently-wrong items are what the review queue surfaces first.

**Spaced review, client-side.** Each Check's outcome (confidence, self-graded correct/incorrect) is stored in `localStorage` and scheduled with `ts-fsrs` (MIT, small). A `/review` page lists Checks that are due. No accounts, no server; export and import as JSON so a reader can move browsers. Measure and show *delayed* recall on the review page, never streaks.

**Knowledge-component tags.** Article frontmatter carries `kc: fact | concept | skill`. Facts (dermatomes, ratios) get spacing and testing; concepts (pain ≠ damage, tolerance envelope) get self-explanation Checks; skills (writing a block, reading a film) get worked examples with fading.

**Worked-example fading for programming skills.** The self-coaching track teaches block-writing as: full worked block → block with the last two decisions blank → write your own from a scenario. Same for regression ladders and the daily decision tree.

**Interleave confusables, block the new.** Bulge / protrusion / extrusion / sequestration, and MEV / MAV / MRV, are introduced blocked and then quizzed interleaved across later articles. New vocabulary is never interleaved on first exposure.

**Deterministic numbers.** Ratios, e1RM, hard-set counts, DOTS, and gate checks are computed in small JS components (`Calc`), never stated by hand in prose and never left to the reader's arithmetic.

**Your own notes.** Each article has a local-only notes box (plain markdown, exportable). Writing is the generation effect; the site never overwrites it.

**Anti-patterns refused, from Chiron's evaluation:** gamification and streak metrics; an open-ended chatbot; black-box mastery scores; marketing any learning gain beyond honest, compounding effects.

---

## 3. Acquiring the learning materials

Three licence tiers. Everything cited lives in `sources.yml` with its tier; the build fails on an untiered source.

**Tier A — copy and adapt (CC BY / public domain).**
- OpenStax *Anatomy & Physiology 2e* (CC BY 4.0; source on GitHub under `openstax/osbooks-anatomy-physiology`). Pull ch. 7 (axial skeleton: vertebral column), 9 (joints), 10–11 (muscle tissue; muscles of the back, abdomen, pelvis, thigh), 13 (spinal cord and spinal nerves).
- *Gray's Anatomy* 1918 plates (public domain, Wikimedia Commons) for lumbar and pelvic illustrations.
- Wikimedia Commons CC BY / BY-SA anatomy illustrations and MRI/CT images.
- Shelton, *Introduction to Exercise Science for Fitness Professionals* (CC BY 4.0, Pressbooks); *Biomechanics of Human Movement* (CC BY, derived from OpenStax Physics).
- BodyParts3D 4.0 (CC BY 4.0) via the atlas fork.

**Tier B — open-access primary literature: summarize as evidence cards, cite, link to PMC.** Starting list:
- JOSPT 2021 low back pain clinical practice guideline (PMC10508241). Grade A for trunk strengthening and endurance in chronic LBP.
- WHO 2023 guideline on non-surgical management of chronic primary LBP (NCBI Bookshelf NBK599212).
- NICE NG59 (free; a July 2026 surveillance update reportedly removed the psychological-therapy recommendations; verify on nice.org.uk).
- Lancet 2018 Low Back Pain series, 3 papers (free with registration).
- Kent et al. 2023, RESTORE trial, cognitive functional therapy (Lancet 401:1866). Large, durable effects at 52 weeks.
- Owen et al. 2020, BJSM network meta-analysis of exercise modes for chronic LBP (54:1279). Resistance, stabilisation, Pilates, aerobic all help; evidence quality low.
- Tataryn et al. 2021, posterior-chain resistance training vs general exercise, Sports Med Open 7:17. Favours posterior chain at 12–16 weeks.
- Hayden et al. 2021 Cochrane review, exercise therapy for chronic LBP.
- Brinjikji et al. 2015 (both AJNR papers): degeneration findings in asymptomatic people (37% at 20, 96% at 80), and the meta-analysis showing bulge and protrusion are more prevalent under 50 with pain. Teach both.
- Zhong et al. 2017 meta-analysis: spontaneous herniation resorption ~67%; 2025 systematic review (PMC11820193) ~77%, typically over 6 months.
- Sedrak et al. 2021, Sports Health (PMC8404721): elite athletes with symptomatic herniation, ~82% return to play conservative vs ~83% operative, no significant difference, ~4–5 months. Overley et al. 2016 agrees.
- Belavy et al. 2017, Sci Rep (PMC5396190): runners have better-hydrated, thicker discs. Cross-sectional, but the best evidence that discs adapt to loading.
- Adams & Dolan; Callaghan & McGill: flexion-under-compression cycling herniates cadaveric discs; neutral compression fails endplates first.
- McGill 1999 trunk endurance norms and ratios (the gate numbers in §4).
- Steele, Bruce-Low & Smith 2014: isolated lumbar extension strengthening and LBP.
- Schoenfeld volume and frequency meta-analyses; Helms et al. on RPE/RIR; volume landmarks (MEV/MAV/MRV) presented as a model, not a measurement.
- 2022 narrative review of deadlift spinal loads (PubMed 34875981): 5–18 kN compression, 1.3–3.2 kN shear; no repetitive-deadlift biomechanics studies exist.
- Louw et al. 2016, pain neuroscience education systematic review; Moseley and Butler explain-pain papers.
- Passive therapies (massage, manipulation, chiropractic): WHO 2023 and NICE NG59 positions (adjunct inside an exercise package; low-to-moderate evidence), Cochrane reviews on spinal manipulation and massage for LBP.

Pull metadata with the Europe PMC REST API (`/search?query=…&format=json`) to get licence and PDF links; store abstracts, not full text, unless the licence is CC BY.

**Tier C — free but not open-licensed: link and annotate, never copy.** Physiopedia (per-file licences, mixed), StatPearls, TeachMeAnatomy, Radiopaedia, Stronger By Science articles and free guides, Barbell Medicine articles and podcast, E3 Rehab and Physiotutors YouTube, Squat University, Greg Lehman's free *Recovery Strategies* workbook, Progressive Rehab & Strength free lifting manual, MIT OCW, NSCA and ACSM position stands.

**Article tracks (target table of contents, ~45 articles).**
1. **Anatomy** — vertebra; disc (nucleus, annulus, endplate); facets; ligaments; deep vs global muscles; hip complex; nerve roots and dermatomes; disc nutrition and blood supply. Each article deep-links its structures to the atlas.
2. **Biomechanics** — torque and moment arms; intra-abdominal pressure and bracing; neutral zone; flexion-compression; diurnal disc changes; deadlift and squat spinal loads.
3. **Pain science** — pain vs damage; sensitization; graded exposure; what imaging does and does not tell you.
4. **Pathology** — bulge vs protrusion vs extrusion vs degeneration; natural history and resorption; radiculopathy; red flags; when imaging is warranted.
5. **Rehab** — what the guidelines say; exercise modes compared; cognitive functional therapy; the McGill approach and its critics; passive therapies and their evidence; return-to-sport gates.
6. **Training science** — volume, intensity, frequency; RPE/RIR; progression models; periodization; deloads; workload-spike models and the ACWR critique; strongman-specific loading (carries, yoke, stones).
7. **Self-coaching** — the log; the daily decision tree; weekly and block reviews; writing your first block; the seven ways self-coached lifters fail.

Every article: a one-paragraph lede, the body, a **Key points** list, one or more `Check` questions, and a sources block. Every claim carries a source id or a `[contested]` / `[heuristic]` tag.

---

## 4. Rehab-to-performance plan — template v0

Published on the site as a template anyone can run; your own baselines and gate state stay in `localStorage`. Gates, not calendars. Every number is a labelled opening position, replaced by your own measurements as the log fills.

**Your baseline (from what you have said):** squat 315, bench 315, deadlift 225 for reps; back tightens on heavy top sets but no radiating pain; sustained incidental hinging provokes; trained, loaded hinging (RDLs, hyperextensions) builds capacity over weeks. No imaging, no clinical diagnosis.

**Phase 0 — Baseline (2 weeks).**
- Red-flag screen, written down, repeated monthly.
- Daily check-in, training day or not: a morning stiffness test performed identically each day, anything felt below the glute (y/n), hours slept, life stress, bodyweight.
- McGill endurance battery: trunk flexor hold, Biering-Sørensen extensor hold, side bridge L and R. Record seconds and ratios.
- Film squat, deadlift, RDL at working loads; compare monthly.
- Daily walking minutes.
- Exit: 14 consecutive check-ins.

**Phase 1 — Capacity floor (4–8 weeks).**
- Daily: walk 20–30 min; McGill big 3 as endurance (descending pyramid, e.g. 5-3-1 reps of 10 s holds), done at least an hour after waking.
- 2 non-consecutive axial-loading days. Main lifts at RPE ≤ 7, no grinding. Squat ~65–75%; pulls from blocks or trap bar; RDLs as the hinge driver (double progression 3×8 → 3×12).
- Loaded carries (farmer's, suitcase) and anti-rotation work twice a week.
- Regression rule: a bad next-day verdict → drop one rung on that movement (range → moment arm → load, never movement identity). Two bad days in a week → cut that week's axial hard sets by 40%.
- Exit gates: flexor/extensor ratio < 1.0; side bridge/extensor ≈ 0.75; L/R side bridge within 5%; 4 consecutive weeks without a bad verdict; pain-free RDL at 1.0× bodyweight for 8; suitcase carry 0.5× bodyweight per hand for 30 m.

**Phase 2 — Progressive loading (8–16 weeks).**
- Deadlift returns to the floor via blocks (4" → 2" → floor), one step per two clean weeks. Double progression or APRE. Deload every 4–6 weeks (volume −40–60%, intensity held).
- Separate weekly axial hard-set budget; trailing-30-day single-session max as the spike guard (no ACWR ratios, which do not hold up).
- Exit gates: deadlift from floor 1.5× bodyweight for 5 at RPE ≤ 8 with no yellow verdict; squat 1.5× bodyweight for 5; 8 consecutive clean weeks; endurance ratios held at monthly retest.

**Phase 3 — Strength build (6–12 months).**
- Block periodization (accumulation → intensification → realization). Strongman implements enter as regressed variants first: yoke, sandbag, stone-to-platform.
- Markers toward elite: a powerlifting DOTS around 450+ is roughly the top 1% of competitive open entries; treat as approximate and multi-year.
- Exit: first competition; three consecutive injury-free blocks.

**Phase 4 — Performance (ongoing).** Meet prep, peaking, event-specific loading. The rules never retire; the ceilings rise.

**Standing note.** One physiotherapy assessment is the cheapest input that can turn guesses about *your* back into findings. The plan works without it, and says so.

---

## 5. Build milestones

| # | Milestone | Done when |
|---|---|---|
| 0 | **Spike 0**: human-atlas builds locally; lumbar coverage confirmed; island vs iframe decided | `docs/spike-0.md` written |
| 1 | **Scaffold**: Astro + MDX, components, `sources.yml` seeded with §3, first 3 articles, deployed | public URL serves articles |
| 2 | **Atlas**: fork at `/atlas`, `?focus=` param, `<Structure>` component, "lumbar spine" preset | clicking *multifidus* in an article opens the atlas isolated on it |
| 3 | **Evidence cards**: one card per Tier B source; `check-sources.mjs` in CI | zero untiered sources |
| 4 | **Plan page**: §4 as `plan.mdx` with gate checkboxes in `localStorage` | tick a gate, reload, still ticked |
| 5 | **Anatomy + Pathology tracks**: ~15 articles with Gray's plates and atlas links | tracks 1 and 4 complete |
| 6 | **Rehab + Pain + Biomechanics + Training tracks**: ~25 articles, passive-therapies article included | tracks 2, 3, 5, 6 complete |
| 7 | **Self-coaching track + search + review**: Pagefind; a `Check` on every article; `/review` queue with FSRS scheduling and JSON export | search works; a Check answered today is due again later |
| 8 | **Open-source hygiene**: README, CONTRIBUTING, licence files, issue templates, article template | a stranger can add an article by PR |

Milestones 0–4 are a week of evenings. 5–7 are a content sprint and suit an autonomous loop, one article per story.

## 6. Verification

- Build green; `check-sources.mjs` and `check-links.mjs` run in CI on every PR.
- Atlas: Lighthouse on `/atlas` on a mid-range phone; first interaction under 5 s on broadband; `?focus=` round-trips for 10 named lumbar structures.
- Licence audit: `LICENSE-content.md` lists every Tier A source; `ATTRIBUTION.md` from the fork is byte-identical.
- Content: each article has ≥ 1 Tier A/B source, a `Check`, and no `[contested]` claim presented as settled.
- Plan page: every numeric gate carries a source or `[heuristic]`.

## 7. Open decisions (yours)

1. Repo name and domain.
2. Prose licence: CC BY-SA 4.0 (recommended; share-alike inputs force it) vs CC BY with Tier A limited to CC BY and public-domain sources.
3. Hosting: GitHub Pages vs Vercel hobby.

---

## 8. Decisions made and notes for whoever builds this (2026-10-20)

**Decided.** Prose licence: CC BY-SA 4.0. Hosting: Vercel (static output; `vercel.json` with `"framework": "astro"` is enough; the actual `vercel` link/deploy is a human step, not a story). Repo dir: `~/Projects/spine-academy` (GitHub name TBD, does not affect the build). Spike 0 is done: read `docs/spike-0.md` before touching the atlas.

**Pinned stack.** Astro 5 + `@astrojs/mdx` 4 (Astro 7 refuses Node 22.16, which is what this machine has; do not upgrade Astro). npm, not pnpm. No React integration in Astro: the atlas is an **iframe**, not an island. No Tailwind in the Astro site; plain scoped CSS in `.astro` files. Only runtime dependency allowed beyond Astro: `ts-fsrs`. Pagefind as a dev dependency.

**Atlas integration (milestone 2), concretely.**
- `atlas/` is a git subtree of `ashemag/human-atlas`; edit in place, never `git subtree pull` inside the loop.
- In `atlas/vite.config.ts` set `base: '/atlas/'`. Prefix the two absolute `/models/…` fetches with `import.meta.env.BASE_URL` (`atlas/app/page.tsx` atlas.json fetch; `atlas/app/scene.tsx` chunk `url`/`gzip` read from atlas.json, which stores absolute paths).
- `?focus=` in `atlas/app/page.tsx`: after atlas.json loads, read `URLSearchParams`, match a concept by `id` (e.g. `FMA...`) or case-insensitive `name`, call the existing select handler, set isolate true.
- Root `package.json` scripts: `build:atlas` = `npm --prefix atlas run build && rm -rf public/atlas && cp -R atlas/dist public/atlas`; `build` runs `build:atlas` then `astro build`. `public/atlas/` is gitignored (90 MB of generated models).
- Structures absent from the data (multifidus, quadratus lumborum, facet joints, all spinal ligaments, thoracolumbar fascia, internal oblique, transversus/rectus abdominis, latissimus, spinal cord, nerve roots, cauda equina, sciatic nerve): `<Structure>` renders them without a link and with a "not in atlas" marker. Never invent an FMA id.
- Lumbar preset = concept ids for L1–L5 (FJ3157…FJ3168), discs (FJ3212, FJ3214–FJ3217), sacrum FJ3393, hip bones FJ3288/FJ3152, psoas major, gluteus maximus, iliocostalis lumborum, longissimus thoracis.

**Content rules (hard).** No diagnosis. No directional preference. No movement labelled categorically bad. Every claim carries a source id from `src/content/sources/sources.yml` or a `[contested]` / `[heuristic]` tag; numbers are `[proposed]` until `[measured]`. Tier C sources: link and annotate, never copy. Tier A text may be adapted with attribution in `LICENSE-content.md`. Each article: lede, body, Key points, at least one `Check`, sources block. If a source's licence cannot be confirmed from a fetch, tier it C.

**Automatable definition of done per milestone.** `npm run build` exits 0; `node scripts/check-sources.mjs` exits 0 (every cited id exists and has a tier); `node scripts/check-links.mjs` exits 0 over `dist/` for internal links (external links: report only, never fail). Article counts are checked by `ls src/content/articles/<track> | wc -l`. No story may require a browser, a human, or a deploy.

**Out of scope for the loop.** Vercel deploy, GitHub repo creation, custom domain, Node upgrade, atlas data additions, anything in §2 "Skipped, deliberately".
