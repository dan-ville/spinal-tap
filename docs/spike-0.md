# Spike 0 — human-atlas lumbar coverage, build, and mount strategy

Date: 2026-10-20. Source: `ashemag/human-atlas` at commit `1c38bf3` (MIT code; BodyParts3D 4.0 data, CC BY 4.0).

## Verdict

Fork human-atlas. Mount it as an **iframe** at `/atlas/`. Structures the data lacks are illustrated in articles, not in the atlas. No supplementary pack: somakine uses the same BodyParts3D 4.0 source and marks the same structures unavailable.

## Lumbar coverage (from `public/models/atlas.json`: 2,234 parts, 3,432 concepts)

Present, individually selectable:

| Structure | Part names / ids |
|---|---|
| L1–L5 vertebrae | "First lumbar vertebra" FJ3157 … "Fifth lumbar vertebra" FJ3168 |
| Intervertebral discs L1–L5 | FJ3212, FJ3214, FJ3215, FJ3216, FJ3217 |
| Sacrum, hip bones | FJ3393; FJ3288 / FJ3152 |
| Erector spinae (as components) | iliocostalis lumborum/thoracis, longissimus thoracis, spinalis thoracis (no group part named "erector spinae") |
| Deep segmental muscles | lumbar rotators, medial/lateral lumbar intertransversarius, set of interspinales lumborum |
| Hip flexors, glutes, hamstrings | psoas major, iliacus, gluteus max/med/min, piriformis, biceps femoris, semitendinosus, semimembranosus |
| Trunk wall | external oblique, diaphragm, linea alba |

Absent (confirmed by substring search over parts and concepts):

- Muscles: multifidus, quadratus lumborum, internal oblique, transversus abdominis, rectus abdominis, latissimus dorsi
- Joints: facet (zygapophysial) joints, sacroiliac joint
- Ligaments: all spinal ligaments (ALL, PLL, flavum, supraspinous, interspinous, iliolumbar); the 56 "ligament" parts are eye, larynx, and foot only
- Fascia: thoracolumbar fascia
- Nerves: the `nervous` system (139 parts) is brain and cranial nerves only. No spinal cord body, no lumbar roots, no cauda equina, no sciatic nerve

## Supplement evaluation: ivershuo/somakine

- Licence: MIT code, BodyParts3D CC BY 4.0 data (README and pack.json `licenses`). Clear.
- Its `bodyparts3d-musculoskeletal` pack (255 structures, 31 MB) explicitly marks as `unavailable`: multifidus, lumbar facet joint, anterior longitudinal ligament, transversus abdominis, rectus abdominis, internal oblique, latissimus dorsi, erector spinae tendon, hip joint. Quadratus lumborum and all nerves are absent from the pack entirely.
- Conclusion: same source, same gaps. Not worth integrating. These structures get 2D figures in articles (Gray's plates) with a `[not in atlas]` tag on the `<Structure>` component.

## Build

- Node 22.16 (requires >=22.13). `npm ci`: 16 s, 567 packages. `npm run build`: 0.5 s.
- `dist/`: 108 MB, of which `models/` is 90 MB (31 files, largest 4.5 MB). JS bundle 916 kB (264 kB gzip). Fits GitHub Pages (100 MB/file) and Cloudflare Pages (25 MiB/file).
- `vite.config.ts` is minimal (react, tailwind v4 postcss, root `./web`, alias `@`). package.json carries unused vinext/RSC/cloudflare/openai deps; prune later.

## Island vs iframe: iframe

- Zero coupling to Astro's React/Tailwind setup; the fork keeps its own build.
- Build the fork with `base: '/atlas/'`, copy `dist/` into Astro `public/atlas/`, embed with `<iframe src="/atlas/?focus=…">`.
- Two absolute `/models/…` paths to prefix with `import.meta.env.BASE_URL`: `app/page.tsx` (atlas.json fetch) and `app/scene.tsx:63` (chunk `url`/`gzip` from atlas.json, which also stores absolute paths).
- `?focus=` goes in `app/page.tsx`: on atlas load, read `URLSearchParams`, find the concept by id or name, call `choose(c)`, set `isolate: true`.
