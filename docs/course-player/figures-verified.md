# Figures: verified shortlist (M7 input)

_Verified 2026-10-21 against the live Commons API and the pinned OpenStax commit. This replaces the "not final"
candidate table in [plan.md](plan.md#figures-decision-3). The verbatim `LicenseShortName`, `Artist`, `Credit`,
original URL and size for every pick are in [figure-candidates.json](figure-candidates.json); generate
`figures.yml` from that file and don't retype them._

Every candidate the plan listed exists on Commons, and the licence the plan guessed matched in every case.
OpenStax `b0058a743bdd2cc08196abaaa7d5469970c0d80c` is CC BY 4.0 (its LICENSE file says so, and the commit is dated
2026-03-11, before the relicensing). None of the OpenStax figures picked here has a third-party credit line.

## Per-lesson picks

"Fit" means how well the image shows what the lesson actually says. I checked each lesson's MDX for the concept
before rating it.

| Lesson | Primary | Also | Licence | Fit / notes |
|---|---|---|---|---|
| anatomy/lumbar-vertebra | 725 Lumbar Vertebrae.jpg | Gray93.png | CC BY 3.0; PD | good |
| anatomy/intervertebral-disc | 716 Intervertebral Disk.jpg | Gray301.png | CC BY 3.0; PD | good. Use the .jpg (BY), not the BY-SA .svg redraw |
| anatomy/disc-nutrition | — | | | **rail.** 716 shows no nutrition route |
| anatomy/facet-joints | Gray93.png (lumbar articular processes) | Facet Joints.png (Blausen) | PD; CC BY 3.0 | good |
| anatomy/spinal-ligaments | Gray301.png | Gray320.png | PD | good. OpenStax 729 rejected: it shows the cervical spine |
| anatomy/deep-vs-global-muscles | OpenStax 1117 Muscles of the Neck and Back (multifidus labelled) | Gray388.png (cross-section, QL, fascia); Multifidi.png; Quadratuslumborum.png | CC BY 4.0; PD | good. 1117 is 2.2 MB, so crop it to the back panel |
| anatomy/nerve-roots-and-dermatomes | 1611 Dermatomes-02.jpg | Gray662.png (cauda equina) | CC BY 4.0; PD | good |
| anatomy/hip-complex | 3D | OpenStax 817 Ligaments of Pelvis (SI ligaments) | CC BY 4.0 | optional strip |
| biomechanics/intra-abdominal-pressure-and-bracing | 1112 Muscles of the Abdomen.jpg | | CC BY 4.0 | good |
| biomechanics/neutral-zone, flexion-compression | Gray301.png | | PD | weak (segment only) |
| biomechanics/diurnal-disc-changes | 716 Intervertebral Disk.jpg | | CC BY 3.0 | weak |
| biomechanics/deadlift-and-squat-spinal-loads, torque-and-moment-arms | — | | | rail |
| pathology/bulge-protrusion-extrusion | Servier "Degeneration Prolapse Extrusion Sequestration" | 728 Herniated Disk.jpg; Herniated disk.svg | CC BY-SA 3.0; CC BY 3.0 | good, with one catch: Servier's label says "Prolapse" where the lesson says "protrusion", so the caption must map the two. The source is 10240×5760, so crop and downscale it |
| pathology/degeneration-and-asymptomatic-findings | Lateral X-ray of lumbar spine spondylosis.jpg | | CC BY-SA 3.0 | good |
| pathology/natural-history-and-resorption | Servier "Sequestration" panel | Hernie discale L4 L5.png (midline MRI) | CC BY-SA 3.0; CC0 | ok. No resorption series exists |
| pathology/radiculopathy | Blausen 0484 HerniatedLumbarDisc.png | Sciatica.png | CC BY 3.0; CC BY-SA 4.0 | good |
| pathology/red-flags | Saddle anesthesia.png | Gray662.png | CC BY-SA 3.0; PD | good |
| pathology/when-imaging-is-warranted | — | | | rail |
| pain-science/pain-vs-damage | Descartes-reflex.JPG | OpenStax 1417 Ascending Pathways | PD; CC BY 4.0 | good. The caption must say the lesson rejects Descartes's model |
| pain-science/sensitization | — | | | **rail.** Gate theory is never mentioned in the lesson, so Gate Theory Circuit Mechanism.svg is dropped |
| pain-science/graded-exposure | Fear-avoidance model.jpg | | CC BY-SA 3.0 | ok (a redraw of Vlaeyen & Linton) |
| pain-science/what-imaging-tells-you | Hernie discale L4 L5.png | | CC0 | good. Lumbar MRI …sagittal 10 dropped: it is a parasagittal slice and shows little |
| rehab/cognitive-functional-therapy | — | | | **rail.** "Biopsychosocial" appears nowhere in the lesson |
| rehab/exercise-modes-compared | — | | | rail (owner: journal figures dropped) |
| rehab/mcgill-approach-and-critics | Side plank 1.svg (Everkinetic) | | CC BY-SA 3.0 | good. Commons has no Everkinetic bird dog or curl-up |
| training-science/deloads | — | | | rail. Supercompensation.svg dropped: the lesson talks about fatigue, never supercompensation |
| training-science/strongman-loading | Odd Haugen Yoke Walk.JPG | Travis Ortmayer Farmer's Walk.JPG (or Laurence Shahlaei) | CC BY 2.0; CC BY 3.0 | good. **Farmers walk.jpg dropped:** it shows a frame/log carry and came from "log carry.JPG". Atlas Stones1.JPG dropped: too distant, full of ads |
| everything else in rehab, training-science, self-coaching | — | | | rail, as the plan says |

Structure figures for "not in atlas" chips (all verified): Gray395.png (internal oblique), Transversus
abdominis.png, Latissimus dorsi.PNG, Sacroiliac Joint.png, Blausen 0822 SpinalCord.png, Gray823.png, Lumbar
plexus.svg, Gray832.png. All are PD or CC BY 3.0.

## Rejected

- Intervertebral discs problem stages.jpg: licence is "Attribution" with no version, and the labels are Greek.
- BORG RPE-skala.jpg: Swedish, and it is the 6–20 Borg scale, not the lifting RPE/RIR the lesson uses.
- OpenStax 729 Ligaments of Vertebral Column: shows the cervical spine.
- Red flag symptoms of cauda equina syndrome.jpg: "own work" with no permission ticket; the page links a patient campaign site (ihavecaudaequina.com), so authorship is doubtful. Category:Cauda equina syndrome has no other usable file.
- Tataryn 2021 / Bell 2023 journal figures: owner decided to drop them (2026-10-21).
- Gate Theory, Biopsychosocial Model, Supercompensation, Farmers walk.jpg, Lumbar MRI …sagittal 10, Atlas Stones1.JPG: see the table.

## Size work needed before commit (caps: raster ≤ 500 KB)

These need to be downscaled or cropped, and each one recorded in `changes`: Sacroiliac Joint.png (6.4 MB),
Blausen 0822 SpinalCord.png and Facet Joints.png (2.3 MB each), Blausen 0484 (1.4 MB), the Servier 4-stage panel
(3 MB at 10240 px), 1611 Dermatomes-02 (935 KB), 1112 Muscles of the Abdomen (658 KB), OpenStax 1117/1417/1321
(1–2.2 MB).

## Still to do in M7

- `sources.yml` / LICENSE-content.md `openstax-ap-2e`: pin the commit above and note the 2026-03-19 relicensing
  (planned M7 change, not done yet).
