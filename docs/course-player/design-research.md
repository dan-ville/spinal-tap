# Course player: design research (2026-10-21)

Supporting detail for [plan.md](plan.md). It was produced by a design workflow: five readers (atlas internals,
two article surveys, site shell, UX research), three independent designs (ship-first, performance-first,
learner-first) and a judge that scored them, checked the riskiest claims against the code, and synthesized the
plan below.

**Where this file and plan.md differ, plan.md wins.** The owner has since answered the open questions at the end
of this file:
1. Completion: the "Mark lesson complete" button or all Checks graded (the recommended default).
2. 3D auto-loads on wide screens (the recommended default).
3. 2D figures are built in this branch from existing open-licensed assets only; lessons with no fitting figure
   keep the collapsed rail. See plan.md, "Figures".
4. Mislabelled tags: honest "shows: …" note now, fix later (the recommended default).

Work happens on the branch named in plan.md, not the `course-player` branch suggested below.

## Verified claims

- Camera framing happens only in isolate mode. scene.tsx:119-123 frames the bounding box of the selection only when s.isolate; outside isolate mode the camera moves only through fit() on a view or reset change (scene.tsx:117), which frames the whole body. New finding: isolate framing always uses direction (.2,.1,1) and its isolateKey includes s.reset. The explorer's view buttons bump reset (page.tsx:46), so while a structure is isolated they re-frame from the same direction and Back/Side do nothing. Any 'view=back' feature has to pass the view direction into the framing block.
- Selective chunk loading is feasible but changes how 'ready' and progress work. loadChunk(ci) builds only parts with p.chunk===ci (scene.tsx:62-76). Progress is loaded/15 (scene.tsx:75), ready becomes true only after all chunks finish (scene.tsx:77), and taps are ignored until ready (scene.tsx:91).
- A subset pack can load through the existing loader unchanged. The Atlas interface (anatomy.ts:19-21) needs only parts, concepts and chunks{url,bytes,gzip,gzipBytes}, and loadChunk resolves chunk urls through BASE_URL (scene.tsx:63). Each part's bytes are contiguous and padded relative to a 4-aligned start (atlas/scripts/optimize-anatomy.mjs:11,33). A course.json with rebased offsets and its own chunk list therefore needs no loader changes.
- Pack sizes measured from atlas/public/models (gzip -9): LUMBAR_PRESET + the 18 concepts tagged in articles + vertebral column FMA13478 + bony pelvis FMA16580 + femur FMA9611 = 75 parts, 4.06 MB raw, 2.30 MB gz (today: 32.96 MB, 2,234 parts). Preset + tagged only = 38 parts, 1.33 MB gz. Adding ribs and sternum = 102 parts, 2.87 MB gz. Perf's fuller manifest = 155 parts, 4.57 MB gz. Lumbar bones-only context = 13 parts, 0.51 MB gz.
- Structure coverage, recomputed with Structure.astro's resolution rules: 14 lessons have at least one atlas-linked concept, 18 use <Structure>, and 24 use none. There are 18 distinct linked concepts, all in chunks {1,4,11,12,13} (11.13 MB gz). The lumbar bone context sits in chunks {11,12,13} (6.75 MB gz). The four lessons whose tags are all absent from the atlas are nerve-roots-and-dermatomes, spinal-ligaments, natural-history-and-resorption and radiculopathy. Every lesson has 2-3 Checks.
- transition:persist does not keep an iframe alive in Astro 5.18.2. swapBodyElement runs oldElement.replaceWith(newElement) first and only then newEl.replaceWith(el) for persisted nodes (node_modules/astro/dist/transitions/swap-functions.js:41-53), so the iframe is detached and reloads. event.swap is defined writable (events.js:86-90).
- Glossary.astro does not conflict in v1: only src/pages/plan.mdx renders it, and no article uses <Term>. Its FAB (fixed, right 20px, bottom 20px, z 30) and right-hand drawer (z 40) would only overlap the viewer pane if it were added to lessons later. Its popover is positioned with window.scrollY (Glossary.astro:156-158), which only works if the window, not a pane, scrolls.
- check-links matches data-src. The regex \b(?:href|src)= finds a word boundary between '-' and 'src', and it strips the query string. A data-src='/atlas/embed.html?…' is therefore checked as long as dist/atlas/embed.html exists.
- OrbitControls r159 returns early from onMouseWheel, before preventDefault, when enableZoom is false (atlas/node_modules/three/examples/jsm/controls/OrbitControls.js:1177-1179). It registers the wheel listener as passive:false (:1395) and sets touchAction='none' (:36). A capture-phase wheel listener that toggles enableZoom therefore lets ordinary scrolling reach the article.
- vercel.json's immutable rule '/atlas/models/(.*)\.(bin|gz)' also matches /atlas/models/packs/<hash>.bin.gz but not packs/course.json. Hashed pack chunks become immutable while the pack's manifest revalidates, with no rule change. atlas.json is not covered by the immutable rule.
- entry.body is retained by default (node_modules/astro/dist/content/loaders/glob.js:130, retainBody !== false). src/content.config.ts excludes _template.mdx from the collection, so the collection holds exactly 42 entries.
- Check.astro reads localStorage at module top level (parseRecords(localStorage.getItem(KEY)), lines 66-71) before it registers the delegated click handler. If storage access throws, Reveal and grading stop working. Notes.astro binds the textarea once, with no try/catch.
- recall.ts imports schedule.ts, which imports ts-fsrs, and the built recall chunk ships separately. The outline's status script should use a minimal graded-id reader, not recall.ts.
- Check.astro renders id={id} on each check (line 27), so '#<check-id>' anchors from the end-of-lesson block work without any change.
- settings.astro builds its export bundle as {site, exported, recall, notes} (line 93). Clear removes recall and notes:* (lines 103-104), and import rejects a file with `if (!nr && !nn)` (line 116). A new progress key must be handled in all four places.
- Base.astro's nav row is capped at 72rem by a scoped style. data-pagefind-body wraps the whole slot. The theme toggle binds once. global.css gives every <main> max-width 46rem with auto margins (line 118) and sets html scroll-padding-top to nav-h + 16px (line 89).
- [...slug].astro calls getCollection('articles') unfiltered and builds prev/next within a track only; /learn/ filters to published. atlas/vite.config.ts has a single implicit input (root ./web, index.html), so a second Rollup input is a config-only change. The root tsconfig includes **/*, so the site can import atlas/app/embed-protocol.ts by relative path.

## TITLE
Course player v1 for Spinal Tap: three panes on a window-scrolled page (Udemy-style lesson outline | unchanged article | anatomy viewer), with the atlas embedded through its own entry point and a 2.3 MB content-hashed course pack

## LAYOUT
SCROLL MODEL: the window scrolls the lesson, as it does today
- Panes that scroll independently are rejected for long reading. With window scroll, these keep working unchanged: html scroll-padding for the TOC and #check links, back/forward scroll restoration and the back-forward cache, Space/PageDown, find-in-page, mobile URL-bar collapse, the Glossary popover's window.scrollY maths, and printing.
- Both side panes are sticky grid items: `position: sticky; top: var(--nav-h); align-self: start; height: calc(100vh - var(--nav-h)); height: calc(100svh - var(--nav-h))`.
- Use svh, not dvh. With dvh, the tablet URL bar would resize the iframe, and every resize refits the camera (scene.tsx:85).
- Only each pane's inner list scrolls (`overflow-y: auto; overscroll-behavior: contain`), so a wheel over a pane header still scrolls the page.
- No ancestor may set overflow, or sticky stops working. Base's data-pagefind-body div sets none and must stay that way; document this in Player.astro.

FILES
- New src/layouts/Player.astro wraps Base with a new `wide` prop, which lifts the nav row's 72rem cap so the logo aligns over the outline column.
- Article.astro renders Player instead of Base.
- DOM order inside `<div class="player" data-outline data-viz>`:
  1. an is:inline pre-paint script
  2. the 'Skip to lesson' link
  3. nav.course-outline
  4. main#lesson
  5. aside.viz
- Each pane is a single element, restyled per breakpoint and never moved in the DOM. Moving it would reload the iframe.

BREAKPOINTS (rem, so zoomed readers drop a tier)
1. 75rem (1200px) and wider:
   - `grid-template-columns: 16rem minmax(0,1fr) clamp(22rem,30vw,34rem)`.
   - main gets max-width 42rem, auto margins, padding 40px 32px 64px. The text column is 608px or less, about 75 characters, against about 85 today.
   - Worked widths: 1280px gives 256 | 640 | 384; 1440px gives 256 | 752 (672 used) | 432; 1920px gives 256 | 1120 | 544.
   - Either side pane collapses to a 3rem rail; collapsing both gives focus mode.
2. 64 to 75rem (1024-1199px):
   - `3.5rem minmax(0,1fr) 22rem`; at 1024px that is 56 | 616 | 352.
   - The outline is always a rail here. Its button opens the outline as a 20rem overlay drawer.
3. Below 64rem:
   - One column.
   - A sticky LessonBar (44px, top var(--nav-h), z 9) holds [Lessons] [Anatomy · 3 of 8] [Anatomy (n)]. The third button appears only when the lesson has chips.
   - The outline becomes a left modal drawer, min(85vw, 20rem).
   - The viewer becomes a right sheet, min(92vw, 30rem), from 48 to 64rem, and a full-screen dialog below 48rem.
   - `html { scroll-padding-top: calc(var(--nav-h) + 60px) }` keeps anchors and focus clear of the bar (WCAG 2.4.11).
   - On landscape phones (max-height: 30rem) the bar is static, not sticky.

STATE BEFORE FIRST PAINT
- The server sets data-viz='open' on the 18 lessons that use <Structure> and data-viz='rail' on the other 24.
- The inline script then applies the viewer's 'player:ui' preference (outline/viz collapsed) inside try/catch, so the layout never shifts after paint.

Z-INDEX: bar 9, site nav 10, backdrop 38, drawers 40 (the Glossary scale).

FOOTER: the Base footer stays below the grid. The sticky panes stop at the end of the grid.

PRINT: `@media print` hides the outline, viewer and bar, turns the grid back into normal block flow, and shows the inline TOC.

NAVIGATION: full page loads, with no ClientRouter. Never add unload listeners (use pagehide), so the back-forward cache stays eligible and Back restores the live 3D view instantly.

## SIDEBAR
COMPONENT
- New src/components/CourseOutline.astro, rendered once by Player.astro.
- Static HTML from src/lib/course.ts: the same 42 links on every page, about 10 KB (about 2 KB gzipped). It works without JS.
- It sits on the left, matching the order the owner described and the fCC/Starlight convention; the right column holds the viewer.

MARKUP
- Root: `<nav id="course-outline" aria-label="Course lessons" data-pagefind-ignore>`. It contains no h1, so Pagefind keeps the lesson h1 as the page title.
- Header:
  - The text 'Course · 42 lessons · about 4 h 25 min' (minutes are summed at build time).
  - `<progress max="42">` with 'n of 42 complete', filled in by JS.
  - A collapse button with aria-controls and aria-expanded.
- One native `<details class="ol-track">` per track, in src/data/tracks.ts order. The current track starts open.
  - The summary shows the number, the track name and '8 lessons · 31 min'. JS rewrites it to '3 of 8 complete', with sr-only text.
- Each lesson row is `<li data-lesson="anatomy/hip-complex" data-checks="id1 id2">` containing `<a href aria-current="page"?>`. The link holds:
  - an aria-hidden status glyph slot
  - the title
  - a meta line, e.g. '4 min · 3D'. The 3D badge appears only when the lesson has a modelled structure; it plays the role of a lecture-type icon.
  - sr-only status text
- Rows are at least 36px tall, and at least 44px under (pointer: coarse).
- The active row gets the brand-light background and the brand left border.
- Status glyphs are neutral: an empty ring for not started, a half ring for started, a brand-green check for complete. Never red.

ACTIVE LESSON
- The open lesson's row expands into a nested `<ol>` of its h2 sections. These come from the headings [...slug] already renders, so no extra render() calls are needed.
- Scroll-spy uses one IntersectionObserver over `main h2[id]`, with a top rootMargin of the nav height (plus the bar on narrow screens). It sets aria-current="true" on the section being read.
- The inline TOC inside main is hidden by CSS only while the full outline column is visible (75rem or wider and not collapsed). That removes today's TOC box from in front of the lede on desktop, and keeps it on rails and phones.

SCRIPT: src/scripts/player/outline.ts, about 90 lines, every storage access wrapped in try/catch
- Reads 'progress' and 'recall' through src/lib/progress.ts. It never imports recall.ts, which would pull in ts-fsrs.
- Sets each row's state, the track counts and the course progress bar.
- Re-renders on 'recall:change' and 'progress:change' (same tab) and on 'storage' (other tabs).
- Centres the active row inside the list with `list.scrollTop = row.offsetTop - list.clientHeight/3`. It never calls scrollIntoView, which would also scroll the window.
- The collapse button flips .player[data-outline] and writes 'player:ui'.
- Drawer mode (rail button and LessonBar button) follows the Glossary.astro pattern:
  - role=dialog and aria-modal are added only in drawer mode
  - inert on main, aside.viz and .site-nav
  - focus moves to the active link; Esc and the backdrop close; focus returns to the opener
  - motion is skipped under prefers-reduced-motion
  - a matchMedia change closes the drawer
- Without JS: the rail button is a plain link to /learn/, and the bar's Lessons control links to /learn/<track>/.

## CONTENTPANE
MDX IS UNTOUCHED
- No MDX file and no MDX component's rendered output changes. Article.astro keeps its order: crumb, h1, lede slot, Disclaimer (rehab only), inline TOC, body, Notes, Sources, prev/next.

CHANGES AROUND THE CONTENT
1. Article.astro:
   - Base becomes Player.
   - `<main class="article" id="lesson" tabindex="-1">` is the skip-link target, and it sets container-type: inline-size.
   - The crumb uses trackName plus 'Lesson 3 of 8', replacing track.replace('-',' ').
   - Prev/next come from the course-wide order. At a track boundary the link reads 'Next track: Biomechanics · Torque and moment arms'.
2. New src/components/LessonEnd.astro, placed before prev/next and marked data-pagefind-ignore. It is the fCC 'challenge passed' moment:
   - 'Checks answered 2 of 3', with links to the unanswered ones (#<check-id>; Check renders id={id}).
   - A 'Mark lesson complete' button with aria-pressed. It is rendered `hidden` and revealed by JS, because it needs storage. Once marked it reads 'Completed 21 Oct · Undo'.
   - A large 'Next: <title>' card.
   - A polite live region announcing 'Lesson complete. 13 of 42.'
   - It never auto-advances.
3. Check.astro:
   - Wrap the init read and the setItem in try/catch. Today, if storage throws at line 66, the module aborts before the delegated handler registers, so Reveal stops working.
   - After writing, dispatch `document.dispatchEvent(new CustomEvent('recall:change', {detail: {id, grade}}))`.
4. Notes.astro: wrap its storage calls in try/catch. Markup is unchanged.
5. Wide tables: under `@container (max-width: 38rem)`, tables get `display: block; overflow-x: auto`, so training-science tables never overflow the narrower column. No MDX edits.
6. Inline <Structure> links: a delegated handler in the viewer script intercepts plain left clicks on `main a.structure` and focuses that concept in the pane, opening the sheet below 64rem. Keyboard focus stays on the link. Modified clicks, middle clicks and no-JS keep the existing /atlas/?focus= href.

[...slug].astro
- Builds the course once with buildCourse().
- Passes lesson, groups, structures and prev/next into Article.
- Builds published entries only in production. Drafts build only under `astro dev` and never appear in the outline or prev/next. All 42 entries are published today, so production output does not change.

UNCHANGED: Calc, Evidence, Source, Callout, KeyList, Lede and Disclaimer. Full page loads keep every run-once script valid. Pagefind still indexes only the article: the h1 stays the first h1, and the outline, LessonBar, LessonEnd and viewer all carry data-pagefind-ignore.

## VISUALPANE
COMPONENT: src/components/LessonViz.astro, rendered as `<aside class="viz" id="lesson-viz" aria-labelledby="viz-title" data-pagefind-ignore>`, a sibling of main.

LAYOUT, top to bottom (a flex column at the sticky height)
1. Header: 'Anatomy in this lesson' and a collapse button (aria-expanded, aria-controls). Below 64rem it is a close button instead.
2. Stage (flex 1, minimum 16rem):
   - The HTML carries `<div class="stage" data-src="/atlas/embed.html" data-focus="FMA…,FMA…">` and never an iframe. check-links resolves data-src.
   - Before load it shows a 1 KB inline SVG spine glyph, 'Shows: psoas major, iliacus…', and [Load 3D view · 2.3 MB first time, then cached]. The size is read at build time from public/atlas/models/packs/course.json.
3. Controls, as site buttons in site CSS so they follow the theme:
   - [In context | Isolated] (aria-pressed)
   - [Auto ¾ Front Side Back] (aria-pressed)
   - Reset to lesson view
   - 'Open full atlas ↗', linking to /atlas/?focus=<current ids> and labelled as the full 33 MB explorer
4. A status line, role=status and aria-live=polite.
5. Chips, in a list that scrolls on its own:
   - With two or more modelled structures, the first chip is 'All in this lesson (n)', a link to /atlas/?focus=a,b,…
   - Each modelled structure is `<a class="chip" href="/atlas/?focus=ID" data-focus="ID">label <small>shows: atlas name</small></a>`. The 'shows:' line appears only when the article's label differs from the atlas name, which makes the existing mismatches visible without editing MDX: hamstring group → semitendinosus, erector spinae → iliocostalis lumborum, lumbar vertebrae → fourth lumbar vertebra.
   - Each absent structure is `<li class="chip chip--absent">multifidus <small>not in atlas</small></li>`: plain text, never clickable, never replaced by a nearby structure.
6. Credit line: '3D models: BodyParts3D © DBCLS, CC BY 4.0', with links to lifesciencedb.jp/bp3d and /ATTRIBUTION.md. Embed mode hides the atlas's own credits.

WHAT IT SHOWS (counts verified against the MDX and src/data/atlas-concepts.json)
1. 14 lessons with at least one modelled structure. All 18 of their concepts are in the course pack.
   - The pane is open.
   - Default view: every modelled concept in the lesson, in context mode, tinted the atlas's neutral teal against the pack's skeleton (vertebral column, sacrum, pelvis, femurs).
   - The view direction is auto: back when the selection lies behind the spine (erector, gluteal and hamstring muscles), three-quarter otherwise. The camera is framed on the selection.
2. 4 lessons whose structures are all absent: nerve-roots-and-dermatomes, spinal-ligaments, natural-history-and-resorption and radiculopathy.
   - The pane is open, with 'not in atlas' chips and the line 'None of this lesson's structures are modelled in the 3D atlas.'
   - A 'Show the lumbar spine for orientation' button loads the bones only, on click, with the caption 'Orientation only: these structures are not shown.'
3. 24 lessons with no tags.
   - The pane starts as a rail.
   - When opened it reads 'No anatomy is tagged in this lesson' and offers the same orientation button.
- Default for owner question 4: on these lessons the pane never fills with stand-ins.

LOADING POLICY (default for owner question 4)
- Auto-mount happens only when all of these hold:
  - the screen is 64rem or wider
  - the pane is open
  - the lesson has at least one modelled chip
  - navigator.connection.saveData is not true
  - effectiveType is not 2g
- It waits for window 'load' plus requestIdleCallback (2 s timeout), so the article paints first.
- Below 64rem the 3D view never auto-loads. When the sheet opens it mounts directly if 'atlas:pack' matches the current pack hash (already cached); otherwise it shows the Load button.
- Any explicit action mounts it: a chip, an inline Structure link, the Load or orientation button.

LIFECYCLE (DOM glue in src/scripts/player/viz.ts; logic in the pure src/lib/atlas-bridge.ts)
- src = data-src plus `?focus=…&mode=context&view=auto&theme=light|dark`, so the first view needs no message.
- The iframe has tabindex=-1, because the canvas has no keyboard model and every action has a parent-page button. Its title is '3D anatomy viewer: <lesson title>'.
- The bridge keeps only the latest 'show' request until 'ready', then drops 'shown' replies whose request id is stale.
- If 'ready' has not arrived after 15 s: 'The 3D viewer did not start' plus [Retry] (recreates the iframe, never reloads the page) and the full-atlas link.
- On 'error' (webgl, geometry or context-lost): the same message and Retry.
- Collapsing the pane sends 'pause'; after 60 s collapsed the iframe is removed.
- Closing the sheet below 64rem removes the iframe at once, freeing the GPU on phones.
- When the document becomes hidden, 'pause' is sent.
- After a successful load, the viewer-only key 'atlas:pack' = <hash> is written.

SYNC WITH THE TEXT (click-driven in v1)
- Chips and inline Structure links focus the 3D view and mark the matching chip aria-current.
- A tap inside the 3D view returns 'picked'. The status line reads 'Selected: left semitendinosus' and offers [Back to lesson view].
- Theme: a MutationObserver on html[data-theme] and the prefers-color-scheme listener send 'theme', so the stage is never a bright rectangle in dark mode.

FALLBACKS
- No JS: chips and inline links are plain links to /atlas/?focus=, and nothing loads in the pane.
- No WebGL or a lost context: a message plus the full-atlas link.
- Pack missing (only possible in atlas-only dev): the embed falls back to atlas.json and the status line says it is loading the full atlas.

## ATLASCHANGES
All edits are made in place in atlas/; never `git subtree pull`. With no `embed` prop, scene.tsx behaves as today. The only behaviour change in /atlas/ is a comma-separated ?focus. LUMBAR_PRESET stays textually unchanged, because check-sources.mjs:31 regexes it. Estimate: about 250 new lines, mostly in new files, and about 60 changed lines in scene.tsx.

1. SEPARATE EMBED ENTRY (from the perf design), not EMBED flags threaded through page.tsx
- New atlas/web/embed.html: viewport meta and `<meta name="robots" content="noindex">`.
- New atlas/web/embed-main.tsx.
- New atlas/app/embed-page.tsx, about 120 lines.
- New atlas/app/embed.css, about 1 KB of plain CSS: html, body and #root at 100% with overflow hidden; .scene; .scene canvas; .part-hover; .embed-msg.
- atlas/vite.config.ts: `build.rollupOptions.input = {index: path('./web/index.html'), embed: path('./web/embed.html')}`. three and React share a hashed chunk under /atlas/assets, which is already immutable, so /atlas/ and the embed share cache.
- The embed does not import globals.css (tailwind and the 767px phone rules), base-ui, cmdk or lucide. It never calls registerAtlasTools and never renders the inspector or about sheets, so the atlas's unsourced EXPLANATIONS can never appear next to sourced lessons.
- Root build:atlas keeps `mv index.html app.html`; embed.html is copied as is.

2. NEW atlas/app/embed-protocol.ts: pure, no imports. Imported by embed-page and by the site through a relative path, so there is one source of truth.
- Envelope: `{ns:'spinal-tap/atlas', v:1, type, …}`.
- Parent to atlas:
  - `show {req, ids: string[] (32 or fewer), mode: 'context'|'isolate', view: 'auto'|'three-quarter'|'front'|'side'|'back'}`
  - `reset`
  - `theme {theme}`
  - `pause` / `resume`
- Atlas to parent:
  - `ready {pack: string|null, concepts}`
  - `progress {percent}`
  - `loaded`
  - `shown {req, names, missing}`
  - `picked {partId, name, conceptId}`
  - `interaction`
  - `error {code: 'webgl'|'catalogue'|'geometry'|'context-lost', message}`
- Exports the isToAtlas and isFromAtlas guards.
- Exports parseFocus(atlas, list): split on ',' (no concept id or name contains a comma), resolve by id or lowercase name, cap at 32, return {concepts, missing}.
- Exports autoView(atlas, partIds): 'back' when the selection's bounding-box centre z is less than the lumbar centre z minus 0.03, otherwise 'three-quarter'.
- Both ends check `e.origin === location.origin` and `e.source` (window.parent, or the iframe's contentWindow). Both post with targetOrigin location.origin, never '*'.

3. DATA SOURCE
- The embed fetches BASE_URL + 'models/packs/course.json', which is a valid Atlas object.
- Because of that, the existing loader (scene.tsx:62-77) runs unchanged: the 3-worker pool, decodeModelResponse, progress, `ready` and the tap gating all keep their meaning. No selective-loading code is written.
- On a 404 or parse error the embed falls back to models/atlas.json, which keeps `vite dev` inside atlas/ working.

4. scene.tsx gains an optional prop: `embed?: {insets: number; clearColor: string; wake: MutableRefObject<() => void>; onInteraction(): void}`
- a. Renderer: powerPreference 'low-power' in embed (line 19). The clear colour comes from the prop and is re-applied when it changes (line 20). Ground, platform and rings stay hidden in embed (line 126). rotate is forced false.
- b. Factor the isolate block (lines 121-122) into `frameBox(box, dir, pad, insets)`.
  - Non-embed calls pass today's DOM-measured insets, direction (.2,.1,1) and pad 1.35, so behaviour is identical.
  - Embed uses 12px insets, skips the .detail-sheet and .identity queries, and takes the direction from the view: front (0,.02,1), back (0,.02,-1), side (1,.02,0), three-quarter (.35,.06,1).
- c. Context framing, which is new:
  - anatomy.ts SceneState gains the optional fields `frame?: number` and `frameIds?: string[]`.
  - In embed, skip the fit-on-view branch (line 117) and the leave-isolate fit (line 123).
  - Instead, key on isolate + selected + frame + view + camera.aspect. When the key changes, frame the bounds of `frameIds ?? selected`, with pad 1.35 isolated and 2.0 in context.
  - Bounds come from the catalogue, so framing works before the geometry arrives.
- d. resize() (line 85) returns early when clientWidth or clientHeight is 0, in both modes. This prevents a NaN aspect in a collapsed pane.
- e. Idle sleep (embed only):
  - animate() stops scheduling after 60 frames that are not dirty, not moving and not damping.
  - It wakes on controls 'change', pointerdown or wheel on the host, the ResizeObserver, and embed-page state changes through the wake ref.
  - 'pause' cancels the rAF until 'resume'.
  - Today the loop runs every frame forever (line 99).
- f. Wheel policy (embed only):
  - A capture-phase wheel listener on the host sets `controls.enableZoom = e.ctrlKey || e.metaKey || activated`.
  - activated is set by a pointerdown on the canvas and cleared on pointerleave.
  - A plain scroll therefore chains to the article. Trackpad pinch arrives as ctrl+wheel, so it still zooms.
  - A 1.5 s hint reads 'Ctrl + scroll or pinch to zoom'.
- g. onInteraction fires on the first pointerdown or wheel after each show.

5. embed-page.tsx
- Reads focus, mode, view and theme from the URL once.
- Initial state: `{explode: 0, visible: ['skeletal'], selected, isolate: mode === 'isolate', view, rotate: false, reset: 0, frame: 1, frameIds}`.
- With no focus it shows an overview: the LUMBAR_PRESET bounds, bones only.
- A message effect keyed on [atlas]:
  - show (context): `{visible: ['skeletal'], selected, isolate: false, frame: +1}`
  - show (isolate): `{selected, isolate: true, frame: +1}`
  - each show is answered with `shown`
  - also handles theme, pause, resume and reset
- A tap selects that one part, does not reframe, and posts `picked`.
- Posts ready after the catalogue loads, progress from onProgress, loaded at 100, and error from onError or a lost context.
- Renders AnatomyScene plus a minimal role=alert error text, so it still works when opened standalone.

6. page.tsx (the full explorer): the only change is the ?focus effect (line 29). It accepts a comma list, unions the elements, and joins the chosen names with ' + '. A single id takes exactly today's path.

7. COURSE PACK: new root script scripts/build-atlas-pack.mjs
- Appended to build:atlas after build:atlas-index. predev also checks for packs/course.json.
- Concept set:
  - LUMBAR_PRESET, read with the same regex check-sources uses
  - every concept resolved from published <Structure> tags, using the same resolver as the pane (it imports src/lib/course.ts under --experimental-strip-types)
  - the context concepts in src/data/atlas-pack.json: FMA13478 vertebral column, FMA16580 bony pelvis, FMA9611 femur
  - the 'extra' list in src/data/atlas-pack.json, empty in v1
- Copying: each part's contiguous bytes [positions, indices + indexCount*4) are copied verbatim from the raw body-N.bin to a 4-aligned offset, and positions, normals and indices are rebased. Parts are split into up to 3 chunks of roughly equal bytes, so the existing loader fetches them in parallel and progress moves in steps.
- Output in public/atlas/models/packs/:
  - `course-<sha8>-<n>.bin` and `.bin.gz` (gzip level 9)
  - `course.json`: version, source, scope, the rebased parts, only concepts whose elements are all in the pack, the chunks with '/models/packs/…' urls, triangles, and `pack: {sha, parts, gzipBytes}`
- Measured on this repo: 75 parts, 2.30 MB gz, against 32.96 MB and 2,234 parts today (−93%).
- The build fails above 3.5 MB gz and prints a per-concept breakdown.
- Caching: the hashed files fall under vercel.json's existing immutable rule; course.json and embed.html revalidate by default. build:atlas already runs rm -rf public/atlas, so names are never reused. atlas.json and the tracked body-N chunks are never modified. vercel.json needs no change.

## DATA
No new content-data files are needed in v1. The pane is driven by the existing <Structure> tags, so the articles stay as they are.

NEW PURE MODULES (no astro imports; tested in node with --experimental-strip-types, in the recall.test.mjs style)
1. src/lib/course.ts
- `StructureRef {label, id?, name?}`: id and name are present only when the structure is modelled.
- `Lesson {id, title, track, trackName, href, order, index, n, of, minutes, kc, checkIds, structures, modelled}`.
- `TrackGroup {id, name, minutes, lessons}`.
- `resolveStructure(text, id, concepts)`: exactly Structure.astro's semantics (explicit id, else the lowercase name). It throws on an unknown explicit id.
- `extractStructures(body, concepts)`: a regex over the 71 single-line <Structure> tags, de-duplicated by id or lowercase label, in order of first appearance.
- `extractCheckIds(body)`: the same regex as check-sources.mjs.
- `readingMinutes(body)`: strip import/export lines and tags, divide words by 238, round up, minimum 1.
- `buildCourse(entries, tracks, concepts, {includeDrafts})`: groups in tracks.ts order, then by `order`.
- `neighbours(flat, id)`.
- Structure.astro switches to resolveStructure; its output must stay byte-identical. src/pages/learn/index.astro and [track].astro drop their own grouping and use buildCourse.
2. src/lib/progress.ts
- parseProgress (tolerant of junk), markDone, unmarkDone.
- gradedCheckIds(recallJson): a minimal reader that never imports recall.ts or ts-fsrs.
- `lessonStatus(lesson, progress, graded)`, returning `{state: 'none'|'started'|'done', graded, total}`.
- `resumeTarget(orderIds, progress, last)`.
3. src/lib/bundle.ts
- `makeBundle({recall, notes, progress})`, returning `{site: 'spinal-tap', v: 2, exported, recall, notes, progress}`.
- `readBundle(raw)` accepts a v2 bundle, an older {recall, notes} bundle (progress becomes {}), or a bare recall export.
- `CLEAR_KEYS`.
4. src/lib/storage.ts: getJSON, setJSON and remove, each wrapped in try/catch and returning a fallback.
5. src/lib/atlas-bridge.ts: a pure state machine (idle, booting, ready, shown, error, paused, unmounted) with request ids, coalescing and timeouts.
6. atlas/app/embed-protocol.ts: see atlasChanges.
7. src/data/atlas-pack.json: `{"context": ["FMA13478", "FMA16580", "FMA9611"], "extra": [], "budgetGz": 3500000}`.

VALIDATION
- scripts/course.test.mjs (added to npm test):
  - unit fixtures: id vs name resolution, an unknown explicit id throws, dedupe, check-id extraction, minutes, neighbours across a track boundary
  - over the real content: 42 published lessons in 7 groups in tracks.ts order; 114 check ids, 2–3 per lesson; 14 lessons with a modelled structure, 18 with any tag, 24 with none; hip-complex resolves 11 ids
- scripts/progress.test.mjs (npm test), covering progress.ts and bundle.ts:
  - junk tolerance, mark and unmark, the auto-complete rule
  - merge keeps the later doneAt; replace takes the incoming set
  - an old bundle imports with progress = {}; a bundle holding only progress is accepted
  - CLEAR_KEYS includes 'progress' and 'course:last' and excludes 'theme', 'player:ui' and 'atlas:pack'
- scripts/atlas-embed.test.mjs (npm test):
  - protocol guards reject a wrong ns or v, more than 32 ids, and unknown types
  - parseFocus handles an id, a name, a comma list and missing values
  - autoView gives 'back' for FMA22702 and 'three-quarter' for FMA13894, on the real atlas.json
  - bridge machine: queue until ready, coalesce, drop stale req, timeout → fallback, error → fallback, collapse → pause then unmount
- scripts/atlas-pack.test.mjs (npm test, run after build:atlas):
  - every part's slice is byte-identical to its source slice
  - offsets are 4-aligned; gunzip(.gz) equals .bin
  - every preset, tagged and context concept is present and complete in course.json
  - file names contain the content hash; two runs hash identically
  - the pack is within budget
  - the vercel.json immutable regex matches the pack's .gz path and does not match course.json
- scripts/check-sources.mjs gains about 6 lines: `order` must be unique within a track among published articles. The outline and course-wide prev/next depend on this.
- New scripts/check-player.mjs runs over dist/learn/*/*/index.html after the build. It is added to CI and to CONTRIBUTING, which brings the pre-PR list to six commands. Its assertions are listed in the milestones.

## PROGRESS
DEFAULT for owner question 1: a hybrid. A lesson is complete when the reader presses 'Mark lesson complete', or automatically when the last ungraded Check on the page is graded. Auto-complete fires only inside the grade event, so an Undo is never silently reverted on reload. A lesson is 'started' when at least one of its Checks is graded. Merely opening a lesson never ticks it (Udemy ticks on a full watch, fCC on passing tests).

KEYS
- 'progress' (new): `{v: 1, lessons: {"anatomy/hip-complex": {doneAt: ISO}}}`, keyed by entry.id like notes. Exported, imported and cleared.
- 'recall': unchanged. It drives 'started' and 'Checks answered n/m'.
- 'player:ui': `{outline: 'open'|'collapsed', viz: 'open'|'collapsed'}`. Viewer-only like 'theme': not exported, not cleared.
- 'course:last': the last lesson opened. Not exported; cleared together with progress.
- 'atlas:pack': the hash of the last pack that loaded successfully. Viewer-only.

WHERE IT SHOWS
- Outline glyphs with sr-only text.
- Per-track 'n of m complete' and the course <progress> bar.
- LessonEnd ('Checks answered n/m', the Mark button, the Next card).
- /learn/ cards get 'n of m complete' and a 'Continue: <title>' button from resumeTarget:
  1. course:last, if that lesson is not done
  2. otherwise the next undone lesson after it
  3. otherwise the first undone lesson overall
  The server fallback is 'Start the course' → anatomy/lumbar-vertebra.
- /learn/<track>/ rows get the same glyphs.

EVENTS: Check dispatches 'recall:change'; the Mark button dispatches 'progress:change'; 'storage' covers other tabs.

settings.astro (via src/lib/bundle.ts; all four changes ship together)
- A new inventory row, 'Lessons completed'.
- Export uses makeBundle (line 93).
- Clear also removes 'progress' and 'course:last' (lines 103-104).
- The import guard is widened to `!nr && !nn && !np` (line 116).
- Replace drops progress, as it already drops notes (line 117).
- The success message counts progress too.

IF THE OWNER CHOOSES DERIVED-ONLY completion: drop the 'progress' key, bundle.ts, the settings changes and the Mark button. The outline then uses lessonStatus over 'recall' alone, and 'done' means every Check is graded.

## ROUTING
NO URL CHANGES AND NO REDIRECTS
- /learn/<track>/<slug>/ is the player, a re-layout of the existing [...slug].astro. The 40+ cross-links, glossary.yml `see:` paths, plan.mdx links, home CTAs, Pagefind results and bookmarks all keep working.

BUILD RULES
- Production builds include published entries only. Drafts build only under `astro dev` and never appear in the outline or prev/next. This matches /learn/; all 42 entries are published today, so production output is unchanged.
- Prev/next become one linear course in tracks.ts order: 8 anatomy, 6 biomechanics, 4 pain science, 6 pathology, 6 rehab, 7 training science, 5 self-coaching. Track boundaries are labelled. rel=prev and rel=next are kept.

OTHER PAGES
- /learn/ keeps its cards and Expand-all, and gains progress counts and the Continue button.
- /learn/<track>/ gains status glyphs.
- /atlas/ stays the full explorer, loading all 15 chunks. It now also accepts `?focus=a,b`. It remains the target for no-JS clicks, modified clicks and 'Open full atlas'.
- New /atlas/embed.html: noindex, outside data-pagefind-body, linked only through data-src.
- New /atlas/models/packs/course.json and the hashed pack chunks.

BRANCH
- Work happens on `course-player`, cut from main, with one PR per milestone into it.
- It merges to main only after the owner's browser and device pass. Under plan §8, deploys and browser checks are human steps.

## ACCESSIBILITY
LANDMARKS
- All top level and labelled: the existing `nav aria-label="Site"`, `nav aria-label="Course lessons"`, `main#lesson`, and `aside aria-labelledby="viz-title"` (a sibling of main, never nested inside it).
- There is one h1 per page, inside main.

SKIP LINK (WCAG 2.4.1)
- 'Skip to lesson' is the first focusable element and is visible on focus. main has tabindex=-1.

OUTLINE
- Native details/summary, so there is no ARIA tree keyboard model.
- aria-current="page" on the current lesson; aria-current="true" on the active section in the nested list.
- Status is never shown by glyph or colour alone. Each row has sr-only text ('complete', 'started, 1 of 3 checks answered'), and summaries read 'Anatomy, 3 of 8 complete'.

TOGGLES AND DRAWERS
- Every toggle is a button with aria-expanded, aria-controls and a visible label or aria-label ('Show lessons', 'Show anatomy viewer').
- Drawers and sheets follow the Glossary.astro pattern, which matches the APG modal dialog:
  - role=dialog and aria-modal only in drawer mode
  - inert on the rest of the page
  - focus moves to the active lesson link, or to the sheet heading (tabindex=-1)
  - Esc and the backdrop close; focus returns to the opener
  - the slide is removed under prefers-reduced-motion

VIEWER
- Every 3D action has a parent-page button: mode, view, reset, chips, open full atlas.
- Chips are links with aria-current; mode and view buttons use aria-pressed.
- The iframe has tabindex=-1 and a specific title. The text equivalent is always present as chips plus the status line.
- One polite live region announces only reader-initiated results: loading %, 'Showing psoas major and iliacus in context', 'Selected: …', errors, and lesson completion with the count.
- An inline Structure click leaves keyboard focus on the link.
- Wheel zoom requires Ctrl or activation, so the pane never traps page scrolling. Touch 3D below 64rem happens only inside the sheet or dialog.

TARGETS AND REFLOW
- Targets are at least 24px (WCAG 2.5.8): rows at least 36px, and at least 44px under pointer: coarse.
- At 320px there is a single column with no horizontal scroll (WCAG 1.4.10). The canvas is exempt, and its controls wrap.
- scroll-padding includes the lesson bar (WCAG 2.4.11).

LEFT OUT ON PURPOSE IN v1
- Single-key shortcuts (avoids WCAG 2.1.4 conflicts with screen-reader browse keys and the Notes textarea).
- A drag splitter (avoids WCAG 2.5.7; collapse buttons give the same benefit).
- Autoplay and auto-advance.

COLOUR AND CONTENT RULES
- Highlights use the atlas's neutral teal and the brand green, never red or amber.
- The dark theme is propagated to the stage.
- New UI copy follows the content rules: no diagnosis, nothing labelled bad, no stand-ins for absent anatomy.

PRINT
- The article prints exactly as it does today; the panes and bar are hidden.

## MILESTONES
- M0: Branch and baseline |  | Branch course-player is cut from main. On the untouched branch these all exit 0: npm run build, npm test, node scripts/check-sources.mjs, node scripts/check-links.mjs and node scripts/check-plan.mjs. Two baselines are saved to the scratchpad: the Pagefind page count, and a snapshot of every built a.structure href and .structure--absent span under dist/learn.
- M1: Course data layer, published-only lesson builds, course-wide prev/next | src/lib/course.ts, scripts/course.test.mjs, src/components/Structure.astro, src/pages/learn/[...slug].astro, src/pages/learn/index.astro, src/pages/learn/[track].astro, scripts/check-sources.mjs, package.json | npm test passes, including course.test.mjs with the real-content assertions: 42 lessons, 7 groups, 114 checks, 14/18/24 structure coverage, 11 ids for hip-complex. check-sources passes with the new order-uniqueness rule. npm run build and check-links exit 0. Every a.structure href and .structure--absent span is byte-identical to the M0 snapshot. The built page for the last anatomy lesson has rel=next pointing at /learn/biomechanics/torque-and-moment-arms/ (biomechanics order 1).
- M2: Player shell, course outline, lesson end, static viewer pane (chips and credit, no 3D yet) | src/layouts/Base.astro, src/layouts/Player.astro, src/layouts/Article.astro, src/components/CourseOutline.astro, src/components/LessonEnd.astro, src/components/LessonViz.astro, src/scripts/player/outline.ts, src/components/Check.astro, src/components/Notes.astro, scripts/check-player.mjs, .github/workflows/ci.yml, CONTRIBUTING.md, package.json | All six commands exit 0. check-player asserts, on every one of the 42 lesson pages:
- exactly one nav.course-outline, with data-pagefind-ignore
- 42 lesson links, with exactly one aria-current="page", equal to the page's own href
- no h1 outside main
- a skip link to #lesson
- aside.viz present, with data-pagefind-ignore
- the chip set equals the lesson's resolved structures: 14 lessons with modelled chips, 4 with only absent chips, 24 with data-viz="rail"
- the hamstring-group chip on hip-complex carries 'shows: semitendinosus'
- the BodyParts3D credit is present wherever there are modelled chips
- prev/next follow the course order
- HTML is 64 KB or less, and there is no <iframe
The Pagefind page count equals M0's. The PR records a manual note that grading a Check updates the outline without a reload.
- M3: Progress, Mark complete, Continue, settings export | src/lib/progress.ts, src/lib/bundle.ts, src/lib/storage.ts, scripts/progress.test.mjs, src/components/LessonEnd.astro, src/scripts/player/outline.ts, src/pages/settings.astro, src/pages/learn/index.astro, src/pages/learn/[track].astro, package.json | npm test passes, including progress.test.mjs:
- junk tolerance
- auto-complete when all Checks are graded
- Undo
- merge and replace
- an old bundle imports with progress = {}
- a progress-only bundle is accepted
- the clear-key list
Build, check-links and check-player exit 0. check-player additionally asserts that each lesson's data-checks equals extractCheckIds for that lesson, and that the Mark button ships with the hidden attribute (JS reveals it). If the owner chooses derived-only completion, this milestone shrinks to the outline status and /learn/ counts, and settings.astro stays untouched.
- M4: Atlas embed entry, scene options, protocol, comma focus | atlas/web/embed.html, atlas/web/embed-main.tsx, atlas/app/embed-page.tsx, atlas/app/embed.css, atlas/app/embed-protocol.ts, atlas/app/scene.tsx, atlas/app/anatomy.ts, atlas/app/page.tsx, atlas/vite.config.ts, scripts/atlas-embed.test.mjs, package.json | These exit 0: npm --prefix atlas run check (tsc), npm --prefix atlas run build, and the root npm run build. atlas/dist contains both index.html and embed.html, and dist/atlas/embed.html exists. The embed entry's JS (its modulepreload graph) is 240 KB gzipped or less and contains no base-ui, cmdk or lucide code. atlas-embed.test.mjs passes. check-sources passes with LUMBAR_PRESET textually unchanged. git diff on atlas/app/page.tsx touches only the focus effect at line 29.
- M5: Course geometry pack | scripts/build-atlas-pack.mjs, scripts/atlas-pack.test.mjs, src/data/atlas-pack.json, package.json | npm run build:atlas writes public/atlas/models/packs/course.json and the hashed .bin and .bin.gz chunks. atlas-pack.test.mjs passes:
- byte identity, alignment and gunzip equality
- concept completeness
- hashed names and deterministic output
- 3.5 MB gz or less (about 2.30 MB and 75 parts today)
- the vercel.json regex matches the pack .gz path and not course.json
git diff on atlas/public/models and vercel.json is empty. The five standard commands exit 0.
- M6: Wire the 3D viewer into the pane | src/components/LessonViz.astro, src/scripts/player/viz.ts, src/lib/atlas-bridge.ts, src/layouts/Player.astro, scripts/atlas-embed.test.mjs, scripts/check-player.mjs | The bridge cases in atlas-embed.test.mjs pass. check-player asserts that every lesson with modelled structures has .stage[data-src="/atlas/embed.html"] with data-focus equal to its resolved ids, and a size label equal to course.json pack.gzipBytes; it still finds no <iframe in dist/learn. check-links resolves data-src. All six commands exit 0.

A manual checklist is recorded in the PR for the owner:
- auto-load on hip-complex at 1280px
- chip refocus without a reload, and inline-link refocus
- mode and view buttons, including the back view of gluteus maximus while isolated
- a plain wheel over the pane scrolls the article; Ctrl+wheel zooms
- the dark-mode toggle reaches the iframe
- the error path with WebGL disabled
- a collapsed pane goes idle on the CPU
- Back from the next lesson restores the live view
- /atlas/ and /atlas/?focus=FMA13075 behave as before
- M7: Responsive drawers, lesson bar, accessibility, print | src/layouts/Player.astro, src/components/LessonBar.astro, src/components/CourseOutline.astro, src/components/LessonViz.astro, src/scripts/player/drawers.ts, scripts/check-player.mjs | All six commands exit 0. check-player asserts aria-controls and aria-expanded on every pane toggle, a LessonBar with data-pagefind-ignore, and an @media print rule in the built CSS that hides .course-outline, .viz and .lesson-bar.

The manual owner checklist in the PR:
- widths 360, 768, 1024, 1280 and 1440
- a keyboard-only pass: skip link, drawers, Esc, focus return
- a VoiceOver or NVDA smoke test
- reflow at 320px
- print preview
- reduced motion
- a private window with storage blocked still renders
- a mid-range Android and an iPhone: open the sheet, load 3D, close it, and confirm the iframe is removed
- M8: Docs | docs/plan.md, atlas/README.md, CONTRIBUTING.md, README.md | docs/plan.md §2 describes the player, the embed contract (URL parameters plus protocol v1) and the course pack. §8 records three rules: geometry is never changed under an existing file name (immutable cache), the pack budget, and the deferred list. CONTRIBUTING lists the six commands and explains that the pane is driven by <Structure> tags and that drafts build only in dev. All six commands exit 0.

## RISKS
- The 3D view reboots on every lesson because the site is multi-page. Verified: transition:persist still reloads iframes in Astro 5.18.2 (swap-functions.js:41-53). Mitigations:
- a 2.3 MB immutable pack
- about 75 meshes instead of 2,234
- atlas.json is never fetched
- auto-mount only at 64rem or wider, after the article paints
- the back-forward cache keeps Back instant
Measure warm lesson-to-3D-ready time on a mid-range Android. If it exceeds about 1.5 s, schedule the deferred persistent-iframe work.
- scene.tsx is shared with the /atlas/ explorer. Every behaviour change is behind the optional embed prop, and the non-embed frameBox call must reproduce today's numbers exactly. No browser runs in the automated loop, so /atlas/ needs one manual pass before merge.
- A missed wake in idle sleep could freeze the view after a state change. Wake on every state change through the ref. The pane's Reset re-sends `show` as a recovery path. Include this in the M6 manual checklist.
- Pack and catalogue consistency. Rebasing errors would draw wrong geometry. atlas-pack.test byte-compares every slice and checks completeness. If course.json is missing at runtime, the embed falls back to the 33 MB atlas.json and says so.
- The immutable-cache trap. Pack files are content-hashed, course.json revalidates, and atlas.json and the body-N chunks are never modified. Any future repack must keep hashed names.
- Sticky panes fail silently if an ancestor gains overflow or a pane loses align-self:start. check-player cannot see this; only a browser can.
- Pagefind pollution, if any pane misses data-pagefind-ignore. check-player asserts it on all 42 pages, plus a page-count comparison with M0.
- Width budget. Three panes start at 75rem, so 1280-1366px laptops get a 384-410px viewer and a 576-608px text column. Between 64 and 75rem the outline is a rail; below 64rem there are no side columns.
- Honesty. A side-by-side pane exposes the three existing tag/label mismatches. Mitigations: chips print the atlas name ('shows: …'), absent structures are never substituted, the atlas's unsourced EXPLANATIONS are never rendered, and highlights stay neutral teal. New UI copy is reviewed against the content rules.
- Settings coupling. Export, clear, import and the guard must all change together. Mitigation: bundle.ts is the single source of truth and is unit-tested. Older exports import with progress = {}.
- Visible behaviour changes. Prev/next now cross track boundaries, the inline TOC is hidden on wide screens (the outline replaces it), and the reading column narrows from 46rem to 42rem. Call these out in the PR.
- Thin visuals on 28 of 42 lessons until 2D figures exist (owner question 3). The pane defaults to a rail there, so the reader is never shown an empty box.
- postMessage surface. Both ends check origin and source, use a versioned envelope, and cap the ids array. A careless `*` targetOrigin later would leak selection events; the protocol module is the only place that posts.
- Fork drift from upstream human-atlas grows. Mitigation: new logic lives in new files (embed-page, embed-protocol, embed.css), with small hooks in scene.tsx and page.tsx. The fork is edited in place, never subtree-pulled.
- Deploy and build cost. The pack adds about 6 MB (raw .bin plus .gz) and a few seconds to an atlas build that already takes 12-21 s. This is acceptable on Vercel.
- Plan §8 lists 'atlas data additions' as out of scope. The pack repackages existing geometry and adds no data; record this in plan §8 so later readers are not confused.

## OPEN
- Completion rule. Should a lesson be ticked complete when you press 'Mark lesson complete' or once you have self-graded every Check on it, whichever comes first? That needs a new 'progress' key, which /settings/ would export, import and clear. Recommended default: yes, both. Alternative: derive completion only from Check grades, with no new key and no button.
- Three <Structure> tags show less than their label says:
- 'hamstring group' shows semitendinosus only (hip-complex)
- 'erector spinae' shows iliocostalis lumborum only (torque-and-moment-arms, deadlift-and-squat-spinal-loads)
- 'lumbar vertebrae' shows L4 only (flexion-compression, neutral-zone)
Recommended default: leave the MDX untouched on this branch and show an honest 'shows: semitendinosus' note on each chip, then fix the tags in a small separate content PR, for example by pointing 'lumbar vertebrae' at FMA72065 'set of lumbar vertebrae'. Alternative: a pane-only group override, such as hamstring group = semitendinosus + semimembranosus + long head of biceps femoris.
- 2D figures. 28 of the 42 lessons have nothing the 3D atlas can show: 24 tag no anatomy, and 4 tag only structures the atlas lacks (ligaments, facet joints, nerve roots). Recommended default: this branch collapses the pane to a rail on those lessons, with 'not in atlas' chips and an on-demand lumbar orientation view. A follow-up branch would then add original SVG figures, sourced under the content rules, starting with spinal ligaments, facet joints, a disc cutaway and nerve-root exits. Do you want that follow-up? Are original SVGs, or adapted public-domain Gray's 1918 plates credited in LICENSE-content.md, acceptable?
- 3D auto-load. Recommended default: on screens 1024px or wider, lessons with modelled structures load the 3D view automatically once the article has painted. That costs 2.3 MB the first time, then the files stay cached for a year. It never auto-loads on phones or when Save-Data is on; everywhere else a click loads it. Alternative: always require a click.

## DEFERRED
- 2D SVG figures and charts: for structures the atlas lacks (ligaments, facets, nerve roots, disc internals) and for lessons with no anatomy. This is content work under the sourcing rules and the dataviz skill, and needs the owner's answer to open question 3.
- Per-section scroll-sync of the 3D view, driven by a src/data/lesson-visuals manifest. The manifest would map each h2 to focus ids, mode and view; list untagged-but-modelled mentions such as external oblique and rectus femoris; and hold group overrides. It would be validated against the headings and atlas-concepts.json, with a blocklist for trap ids (FMA7647, FMA7157, FMA7184, FMA9577, FMA9578).
- Keeping the iframe alive across lessons: ClientRouter with a custom astro:before-swap swap, plus re-entrant init for Check, Notes and the theme toggle. Start only if the measured warm lesson-to-3D-ready time is over about 1.5 s.
- Cross-document view transitions (@view-transition, navigation: auto) for app-like continuity between lessons.
- Opt-in keyboard shortcuts (n, p, l, ?) with a help sheet, and S/M/L width presets or an accessible splitter for the viewer.
- 'Review due' badges in the outline, from recall.due (ts-fsrs), and a resume-at-section banner.
- Hover prefetch of the next lesson.
- Loading the focused structure first in the full /atlas/ explorer.
- Showing the Glossary drawer on lesson pages. Its button would need to move so it does not cover the viewer.
- Fixing the three mislabelled <Structure> ids in MDX, as a separate content PR after the owner decides.
- Dropping the raw .bin fallbacks to roughly halve the atlas deploy size, and adding a cache header for atlas.json.
