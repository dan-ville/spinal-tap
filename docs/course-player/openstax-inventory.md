# OpenStax A&P 2e figure inventory (pinned CC BY commit)

Companion to [plan.md](plan.md), "Figures". Gathered 2026-10-21 from the OpenStax source repository on GitHub,
pinned at commit `b0058a743bdd2cc08196abaaa7d5469970c0d80c`, the last commit whose LICENSE and collection metadata
say CC BY 4.0. Module CNXML was fetched to read captions and credit lines, and every media URL below returned
HTTP 200 on a HEAD request. **No image body was downloaded or viewed**: what a figure shows, its panel count and
its label density come from captions, alt text and section text. Look at each image before committing it.

Raw URL pattern:
`https://raw.githubusercontent.com/openstax/osbooks-anatomy-physiology/b0058a743bdd2cc08196abaaa7d5469970c0d80c/media/<file>`

Figure numbers are counted from `<figure>` order in the collection and were not checked against the rendered book.

## Licence evidence at the pinned commit (verbatim)

| File | Text |
|---|---|
| `LICENSE` | Line 1 `Attribution 4.0 International`; line 57 `Creative Commons Attribution 4.0 International Public License` (397 lines, sha256 `0ff174546cbe3dd1287da231f9796618ac2f6e6595b2d11f567b2c9790f64868`) |
| `collections/anatomy-and-physiology-2e.collection.xml` | `<md:license url="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution License</md:license>` |
| `README.md` | `_Anatomy and Physiology 2e_ is available under the [Creative Commons Attribution License](./LICENSE) license.` |
| Preface, module m46844 | `... is licensed under a Creative Commons Attribution 4.0 International (CC BY) license ...`; also `OpenStax wishes to thank the Regents of University of Michigan Medical School for the use of their extensive micrograph collection.` |

Later: commit `fdfa6e2` changed `LICENSE` and the README to CC BY-NC-SA 4.0; `main` is NC-SA throughout. Use only
the pinned commit.

**Not covered by CC BY:** micrographs credited `(Micrograph provided by the Regents of University of Michigan
Medical School © 2012)` (e.g. 1313, 1319, all of m46049), and third-party photos credited to named people or
Flickr/Wikimedia users (e.g. 617, 619, 620, 1000, 1026, 1027, 1100, 1103, 1200, 1202, 1203, 1206, 1300, 1425,
1602). Figure 1611 (dermatomes) is credited `modification of work by Mikael Häggström`; keep that credit line.

## Strong or ok fit

"Clean" means the caption carries no credit line, so the book's CC BY 4.0 covers it; attribute OpenStax.

| Fig. / title | File | Bytes | Clean | Lessons | Atlas-gap structures | Fit | Notes |
|---|---|---|---|---|---|---|---|
| 7.23 Parts of a Typical Vertebra | 718_Vertebra.jpg | 238,557 | yes | lumbar-vertebra, facet-joints, nerve-roots | facet (articular processes) | strong | 2 panels; generic, not lumbar |
| 7.28 Lumbar Vertebrae | 725_Lumbar_Vertebrae.jpg | 190,206 | yes | lumbar-vertebra, facet-joints | — | strong | 2 panels |
| 7.24 Intervertebral Disc | 716_Intervertebral_Disk.jpg | 177,562 | yes | intervertebral-disc; weak for disc-nutrition, diurnal-disc-changes | nucleus pulposus, anulus fibrosus | strong | 2 panels; endplate not in caption |
| 7.30 Herniated Intervertebral Disc | 728_Herniated_Disk.jpg | 223,797 | drawing yes; photo panel uncredited | radiculopathy, flexion-compression, bulge-protrusion-extrusion, nerve-roots | nucleus, anulus, nerve root | strong / ok | Crop to the drawing; one stage; caption equates herniation with "protrusion" |
| 7.20 Vertebral Column | 715_Vertebral_Column-408a.jpg | 201,331 | yes | lumbar-vertebra | — | ok | 2 panels |
| 7.29 Sacrum and Coccyx | 720_Sacrum_and_Coccyx.jpg | 311,493 | yes | hip-complex, lumbar-vertebra | sacroiliac (auricular surface, text only) | ok | 3 panels |
| 7.31 Ligaments of Vertebral Column | 729_Ligaments_of_Vertebral_Column.jpg | 216,582 | yes | spinal-ligaments | ALL, supraspinous | ok/weak | Cervical, centred on the nuchal ligament |
| 9.3 Intervertebral Disc (ch. 9) | 902_Intervertebral_Disk-02.jpg | 261,463 | yes | facet-joints, intervertebral-disc | facet joints | ok | Single lateral view |
| 9.8 Synovial Joints | 907_Synovial_Joints.jpg | 744,567 | yes | facet-joints | — | ok | Generic joint |
| 9.18 Hip Joint | 916_Hip_Joint.jpg | 700,555 | yes | hip-complex | — | strong | 3 panels |
| 9.4 Multiaxial Joint | 903_Multiaxial_Joint.jpg | 410,974 | yes | hip-complex | — | ok | 2 panels |
| 8.12 Pelvis | 807_Pelvis.jpg | 291,505 | yes | hip-complex | sacroiliac joint | ok | — |
| 8.13 The Hip Bone | 808_Hip_Bone.jpg | 324,909 | yes | hip-complex | — | ok | 2 panels |
| 8.14 Ligaments of the Pelvis | 817_Ligaments_of_Pelvis.jpg | 227,514 | yes | hip-complex, spinal-ligaments | sacroiliac ligaments | ok | Iliolumbar not named |
| 11.15 Muscles of the Neck and Back | 1117_Muscles_of_the_Neck_and_Back.jpg | 2,199,713 | yes | deep-vs-global-muscles | erector spinae, transversospinales/multifidus (text) | strong | 4 panels, large; crop to deep back muscles; multifidus label unconfirmed |
| 11.16 Muscles of the Abdomen | 1112_Muscles_of_the_Abdomen.jpg | 673,926 | yes | deep-vs-global-muscles, intra-abdominal-pressure-and-bracing | rectus abdominis, obliques, TVA; QL (panel b) | strong | 2 panels |
| 11.17 Muscles of the Diaphragm | 1113_The_Diaphragm.jpg | 1,133,954 | yes | intra-abdominal-pressure-and-bracing | — | ok | Inferior view |
| 11.19 Muscles of the Pelvic Floor | 1115_Muscles_of_the_Pelvic_Floor.jpg | 811,163 | yes | intra-abdominal-pressure-and-bracing | — | ok | — |
| 11.23 Muscles That Move the Humerus | 1119_Muscles_that_Move_the_Humerus.jpg | 1,911,310 | yes | deep-vs-global-muscles | latissimus dorsi | ok | 4 panels; crop |
| 11.29 Hip and Thigh Muscles | 1122_Gluteal_Muscles_that_Move_the_Femur.jpg | 1,092,578 | yes | hip-complex | psoas, iliacus, glutes, hamstrings | strong | 3 panels |
| 13.24 Nerve Plexuses of the Body | 1321_Spinal_Nerve_Plexuses.jpg | 1,043,978 | yes | nerve-roots-and-dermatomes, radiculopathy | spinal cord, lumbar and sacral plexus | ok | Crop to lumbosacral |
| 16.13 Dermatomes | 1611_Dermatomes-02.jpg | 958,234 | yes, keep Häggström credit | nerve-roots-and-dermatomes, radiculopathy | dermatomes | strong | Possibly front views only |
| 13.14 Cross-section of Spinal Cord | 1313_Spinal_Cord_Cross_Section.jpg | 1,677,568 | diagram panel only | sensitization, nerve-roots | spinal cord | ok after crop | Must crop out the Michigan micrograph; thoracic segment |
| 14.19 Ascending Sensory Pathways | 1417_Ascending_Pathways_of_Spinal_Cord.jpg | 1,002,440 | yes | pain-vs-damage, sensitization | spinal cord | ok | 2 panels |
| 14.2 Receptor Classification by Cell Type | 1401_Receptor_Types.jpg | 655,819 | yes | pain-vs-damage, sensitization | — | ok | Crop to (a); surrounding text frames pain as tissue damage, which the lesson argues against |
| 10.13 Types of Muscle Contractions | 1015_Types_of_Contraction_new.jpg | 292,953 | yes | progression-models, exercise-modes-compared | — | ok | 3 panels |
| 10.14 The Ideal Length of a Sarcomere | 1011_Muscle_Length_and_Tension.jpg | 117,852 | yes | training-science (length–tension) | — | ok | Graph |

Weak or not clean (all HEAD 200): 911 body movements (crop for flexion; URL-encode the filename), 909 synovial
joint types, 0910 hip osteoarthritis, 722 osteoporosis of spine, 1105 muscular system overview, 1132 gluteal
table image, 1013 summation/tetanus, 1025 atrophy, 1421 sensory homunculus, 1506 referred pain chart, 1615 spinal
fibre tracts, 1201 nervous system overview, 604/606/615 bone figures; 1319 nerve structure (Michigan micrograph,
crop), 1027 hypertrophy, 1026 marathoners, 617 bone support movement (third-party photos, licence unknown).

## No usable OpenStax figure

- Lessons: biomechanics/{torque-and-moment-arms, neutral-zone, deadlift-and-squat-spinal-loads} (and
  diurnal-disc-changes only weakly via 7.24); pathology/{natural-history-and-resorption, when-imaging-is-warranted}
  (bulge-protrusion-extrusion has only the single-stage 7.30); pain-science/{graded-exposure,
  what-imaging-tells-you}; all of rehab and self-coaching; training-science/{periodization, deloads, rpe-and-rir,
  workload-spikes-and-acwr, strongman-loading}.
- Structures: thoracolumbar fascia, conus medullaris, cauda equina, vertebral endplate, interspinous,
  intertransverse and iliolumbar ligaments. PLL, ligamentum flavum, multifidus and the sciatic nerve appear in
  text only.

## Other GitHub sources found (raw URLs returned 200)

| Repo | Licence statement (verbatim) | Spine content | Caveat |
|---|---|---|---|
| `prazg/3D_Neurosurgical_Atlas` | figures.json: "Illustrations adapted (resized) from Servier Medical Art (https://smart.servier.com), licensed under CC BY 4.0" | `img/smart/smart_disc_1`–`4` (contained → bulge/protrusion → extrusion → sequestration), lumbar vertebra lateral/superior, lumbar canal, sciatic, spine levels, cord root, disc herniation | Small resized copies (12–87 KB); prefer originals from smart.servier.com where reachable; no LICENSE file |
| `duerrsimon/bioicons` | "Please always cite the individual icons and their respective license." | DBCLS (CC BY 4.0) pelvis, pelvic ligaments, hip joint, spinal tracts; Servier (CC BY 3.0) back musculature | No spine/vertebra icons |
| `awatson1978/clinical-grays-anatomy` | "All images are in the public domain." | vertebrae, spinal nerves, pelvic bone, torso muscles | Renamed files, no plate numbers to trace |
| `awatson1978/images-grays-anatomy` | "Images should all be in the public domain." | vertebral column, back muscles | Some paths 404 |

The Servier disc series in `prazg/3D_Neurosurgical_Atlas` is the one open four-stage herniation sequence found
that this sandbox can reach. It fills the gap for bulge-protrusion-extrusion and natural-history-and-resorption,
subject to checking image quality and Servier's current licence wording.
