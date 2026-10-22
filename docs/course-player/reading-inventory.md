# Reading inventory (lesson rebuild)

Companion to [plan.md](plan.md). Gathered 2026-10-22. For each lesson outside the deleted self-coaching
track: its topic, the free Readings available for it with pinpoint locators, whether each Reading can be an
**EXCERPT** (CC BY or public domain) or only a **LINK** (free to read, not open), and a verdict.

Rules applied (see [GLOSSARY.md](../../GLOSSARY.md)): a login or registration wall counts as a paywall; a
paywalled Source is never assigned, not even its abstract; a lesson survives only with at least one
substantial free Reading (textbook section, guideline section or full open paper).

**Result: 30 KEEP, 7 MERGE, 0 DROP** (37 lessons).

## How this was checked

- **OpenStax A&P 2e**: section numbers and headings come from `collections/anatomy-and-physiology-2e.collection.xml`
  and module CNXML at commit `b0058a743bdd2cc08196abaaa7d5469970c0d80c` (the last CC BY 4.0 commit; see
  [openstax-inventory.md](openstax-inventory.md)). Chapter-intro modules are unnumbered, so 7.3 is the third
  content module of chapter 7. Key passages were confirmed by grepping the CNXML.
- **Papers**: Europe PMC `search?query=...&resultType=core` for `isOpenAccess` and `license`; Europe PMC
  `fullTextXML` or NCBI efetch (`db=pmc`) for section headings; Unpaywall and Crossref for copies outside PMC;
  the figshare API for repository records.
- **NICE NG59**: recommendation numbers from the Wayback copy of `/chapter/Recommendations` (2026-10-03).
- **Pressbooks**: both sites return 403 to this sandbox. Biomechanics of Human Movement was read from the
  Wayback copy (2026-05-09); Shelton's TOC from the CUNY Manifold mirror and Wayback chapter pages.
- **Not reachable**: NCBI Bookshelf pages (WHO NBK599212, StatPearls) are behind a reCAPTCHA, live and in the
  Wayback. WHO section locators below are marked *(unverified)*. StatPearls NBK ids come from PubMed esummary.

## Source status

### Registry sources: what they actually are

| id | Free? | Reading type | Evidence |
|---|---|---|---|
| openstax-ap-2e | yes | EXCERPT | CC BY 4.0 at pinned commit only |
| biomechanics-human-movement | yes | EXCERPT | Pressbooks page: "Copyright © August 22, 2016 by OpenStax is licensed under a Creative Commons Attribution 4.0 International License, except where otherwise noted". Editor Karine Hamm, Douglas College, 2020 |
| shelton-exercise-science | yes | EXCERPT **per chapter** | **Registry URL is wrong**: the book is at `https://mhcc.pressbooks.pub/hpe172/` (Amanda Shelton, MHCC Library Press, 2021). Book is CC BY 4.0 "except where otherwise noted", and chapter footers differ: ch. 14 *Body Levers* is "Copyright © 2021 by Lawrence Davis ... CC BY-NC-SA 4.0" (LINK only). Ch. 31, 33, 35, 54, 57, 58, 60 footers say CC BY 4.0 (Shelton). Others unchecked |
| grays-1918, wikimedia-anatomy, bodyparts3d-4 | yes | figures only | not Readings |
| tataryn-2021 | yes | EXCERPT | PMC7940464, `cc by` |
| belavy-2017 | yes | EXCERPT | PMC5396190, `cc by` |
| bell-2023-deload-delphi | yes | EXCERPT | PMC10511399, `cc by` |
| kent-2023-restore | yes | LINK until checked | Not in PMC. Unpaywall: publisher copy `other-oa` (not `cc-by`); author manuscripts `cc-by-nc-nd` at Curtin (`hdl.handle.net/20.500.11937/93042`), Imperial, SDU. Registry's `CC-BY-4.0` is unconfirmed: thelancet.com returned 403. If the Lancet page shows CC BY 4.0, upgrade to EXCERPT |
| owen-2020-bjsm-nma | yes | LINK | PMC7588406, `cc by-nc` (registry says only "open-access") |
| sedrak-2021 | yes | LINK | PMC8404721, `cc by-nc-nd` |
| helms-rpe-rir | yes | LINK | PMC4961270, `cc by-nc-nd` |
| jospt-2021-lbp-cpg | yes | LINK | PMC10508241, author manuscript, "fair use" only |
| brinjikji-2015-degeneration / -meta | yes | LINK | PMC4464797 / PMC7964277, no licence; PMC holds the PDF only (no XML body), so the locators are tables |
| deadlift-loads-2022 | yes | LINK | **Registry title is wrong**: the paper is "Low Back Biomechanics during Repetitive Deadlifts: A Narrative Review", IISE Trans Occup Ergon Hum Factors 2022, PMC9837526, author manuscript with no CC licence |
| resorption-2025-review | yes | LINK | **Registry title and year are wrong**: the paper is "Prevalence, clinical predictors, and mechanisms of resorption in lumbar disc herniation: a ..." Orthop Rev (Pavia) 2024, doi 10.52965/001c.121399, publisher `cc-by-nc`. PMC has the PDF only |
| hayden-2021-cochrane | yes (full text) | LINK | Full text is free in PMC8477273. Registry says "abstract free", but the full text is free |
| rubinstein-2011, furlan-2015, khadilkar-2008 (Cochrane) | yes (full text) | LINK | PMC12009663, PMC8734598, PMC7138213 |
| moseley-butler-explain-pain | yes | LINK | Unpaywall `bronze`: free on the publisher site, no licence |
| who-2023-clbp | yes | LINK | CC BY-NC-SA 3.0 IGO |
| nice-ng59 | yes | LINK | NICE terms. **July 2026 surveillance removed 1.2.13 and 1.2.14** (psychological therapy and combined physical-psychological programmes) as possibly out of date |
| statpearls, radiopaedia, physiopedia | yes | LINK | non-commercial or unconfirmed licences; reference pages, so never the only Reading |
| lancet-2018-lbp-series | **publisher: no** | LINK via repository | Publisher copy needs registration (paywall under the rules). Free repository copies: paper 1 published version at VU Research Portal and Maastricht CRIS (`other-oa`); paper 2 submitted version at UNIGE `archive-ouverte.unige.ch/unige:110922` (Unpaywall says `cc-by`; the record page licence was not confirmed, so treat it as a LINK) |
| zhong-2017-resorption | unclear | LINK if confirmed | Not in PMC and no Unpaywall copy. Pain Physician posts PDFs on its own site; check that they need no login before assigning |

### Registry sources that are paywalled (no free full text found)

| id | Notes |
|---|---|
| adams-dolan | **PMID 16023463 and DOI 10.1016/j.jbiomech.2004.11.010 are both wrong** (a saphenous-vein paper and a "Knee Mechanics" special-issue note). The real paper is Adams & Dolan, "Spine biomechanics", J Biomech 2005, doi 10.1016/j.jbiomech.2005.03.028: closed |
| callaghan-mcgill | closed |
| mcgill-1999-endurance-norms | closed |
| steele-2014-lumbar-extension | Unpaywall points to a CC BY figshare record (11830227), but its only file is `icmo_a_875465_sm0001.pdf`, the supplementary material. No free article |
| overley-2016 | closed. **PMID 26571176 is wrong** (an rhBMP-2 paper); the DOI is right |
| schoenfeld-volume | closed |
| louw-2016-pne | closed |
| mann-2010-apre | closed (Unpaywall) |
| williams-2017-periodization-meta | closed |
| impellizzeri-2020-acwr | closed |
| volume-landmarks, stronger-by-science, barbell-medicine, e3-rehab, physiotutors, squat-university, prs-lifting-manual, nsca-acsm-position-stands, teachmeanatomy | Blog and commercial pages, all rights reserved, and not textbook, guideline or paper. Not used as Readings |
| lehman-recovery-strategies, mit-ocw | Not needed by any kept lesson |

### NEW sources proposed

| id (suggested) | Citation | Access | Type | Used by |
|---|---|---|---|---|
| ahrq-2016-cer169 | Chou R et al. *Noninvasive Treatments for Low Back Pain*. AHRQ Comparative Effectiveness Review No. 169, 2016. NBK350276 | "This publication is in the public domain" (Bookshelf page) | EXCERPT | passive-therapies, exercise-modes-compared, what-the-guidelines-say |
| fournier-2020-disc-vascular | Fournier DE et al. Vascularization of the human intervertebral disc: a scoping review. JOR Spine 2020. PMC7770199 | `cc by` | EXCERPT | disc-nutrition, intervertebral-disc |
| wilke-2025-rom-nz | Range of Motion and Neutral Zone of All Human Spinal Motion Segments: a data collection ... JOR Spine 2025. PMC11881816 | `cc by` | EXCERPT | neutral-zone |
| nz-methods-2020 | Measuring the neutral zone of spinal motion segments: comparison of multiple analysis methods. JOR Spine 2020. PMC7323462 | `cc by` | EXCERPT | neutral-zone |
| disc-diurnal-2026 | Human In Vivo Disc Mechanics in Flexion, Extension, and Diurnal Loading With Aging and Degeneration. JOR Spine 2026. PMC13454735 | `cc by-nc` | LINK | diurnal-disc-changes, flexion-compression (merged) |
| willard-2012-tlf | Willard FH et al. The thoracolumbar fascia: anatomy, function and clinical considerations. J Anat 2012. PMC3512278 | free in PMC, no licence | LINK | spinal-ligaments |
| stokes-2010-iap | Stokes IA et al. Intra-abdominal pressure and abdominal wall muscular function: spinal unloading mechanism. Clin Biomech 2010. PMC2949466 | author manuscript | LINK | intra-abdominal-pressure-and-bracing |
| raja-2020-iasp | Raja SN et al. The revised IASP definition of pain. Pain 2020. PMC7680716 | free in PMC, no CC | LINK | pain-vs-damage |
| watson-2019-pne | Watson JA et al. Pain neuroscience education for adults with chronic musculoskeletal pain: mixed-methods systematic review and meta-analysis. J Pain 2019. doi 10.1016/j.jpain.2019.02.011 | publisher `bronze`; AAM `cc-by-nc-nd` at Teesside / RGU | LINK | pain-vs-damage (replaces the paywalled Louw 2016) |
| woolf-2011-central-sensitization | Woolf CJ. Central sensitization: implications for the diagnosis and treatment of pain. Pain 2011. PMC3268359 | author manuscript | LINK | sensitization |
| osullivan-2018-cft | O'Sullivan PB et al. Cognitive Functional Therapy: an integrated behavioral approach ... Phys Ther 2018. PMC6037069 | `cc by-nc-nd` | LINK | cognitive-functional-therapy |
| graded-exposure-2026-sajp | The effect of graded exposure therapy in patients with non-specific chronic lower back pain ... S Afr J Physiother 2026. PMC13444416 | `cc by` | EXCERPT | cognitive-functional-therapy (merged graded-exposure) |
| fardon-2014-nomenclature | Fardon DF et al. Lumbar disc nomenclature: version 2.0. Spine J 2014, doi 10.1016/j.spinee.2014.04.022 (publisher `cc-by-nc-nd`); AJNR co-publication PMC7965177 (free, no licence) | free | LINK | bulge-protrusion-extrusion |
| finucane-2020-red-flags | Finucane LM et al. International Framework for Red Flags for Potential Serious Spinal Pathologies. JOSPT 2020. doi 10.2519/jospt.2020.9971 | Published version free at VU Research Portal (`other-oa`). The MMU figshare record (32544777) says CC BY but has no file | LINK | red-flags |
| statpearls pages | Lumbar Disc Herniation NBK560878; Cauda Equina and Conus Medullaris Syndromes NBK537200; Low Back Pain: Evaluation and Management NBK538173; Facet Joint Disease NBK541049; Sciatica (PMID 29939685) | CC BY-NC-ND | LINK | pathology lessons |
| lolli-2019-acwr | Lolli L et al. Mathematical coupling causes spurious correlation within the conventional acute-to-chronic workload ratio calculations. BJSM 2019. doi 10.1136/bjsports-2017-098110 | published version at Teesside repository (`other-oa`) | LINK | workload-spikes-and-acwr |
| acwr-meta-2026 | Acute:chronic workload ratio and load management for team sports: a multilevel meta-analysis. Front Public Health 2026. PMC13520966 | `cc by` | EXCERPT | workload-spikes-and-acwr (read before assigning: its stance is unknown) |
| refalo-2023-failure | Refalo MC et al. Influence of resistance training proximity-to-failure on skeletal muscle hypertrophy: a systematic review with meta-analysis. Sports Med 2023. PMC9935748 | `cc by` | EXCERPT | rpe-and-rir, volume-intensity-frequency |
| grgic-2021-frequency | Effects of variations in resistance training frequency on strength development in well-trained populations ... Sports Med 2021. PMC8363540 | `cc by` | EXCERPT | volume-intensity-frequency |
| baz-valle-2022-volume | A systematic review of the effects of different resistance training volumes on muscle hypertrophy. J Hum Kinet 2022. PMC8884877 | `cc by-nc-nd` 3.0 | LINK | volume-intensity-frequency |
| periodization-meta-2026 | Comparison of linear and undulating periodization resistance training on athletic capacities ... Front Public Health 2026. PMC12999919 | `cc by` | EXCERPT | periodization |
| bell-2024-deload-survey | Bell L et al. Deloading practices in strength and physique sports: a cross-sectional survey. Sports Med Open 2024. PMC10948666 | `cc by` | EXCERPT | deloads |
| atlas-stone-2021 | The biomechanical characteristics of the strongman atlas stone lift. PeerJ 2021. PMC8418215 | `cc by` | EXCERPT | deadlift-and-squat-spinal-loads (merged strongman) |
| saraceni-2025-lifting | Is lifting technique related to pain and functional limitation? A replicated single-case design. Eur J Pain 2025. PMC12214296 | `cc by-nc` | LINK | deadlift-and-squat-spinal-loads (merged flexion-compression) |

Also checked and **paywalled**: Saraceni 2020 "To flex or not to flex?" (JOSPT), Moesgaard 2022 periodization
meta-analysis, Impellizzeri 2021 "Time to dismiss ACWR", Swain 2020 spine-posture umbrella review.

## Caveats that apply to several lessons

- **OpenStax 7.3, "Intervertebral Disc"** says bending forward and lifting a heavy object "can cause the
  nucleus pulposus to protrude posteriorly", and calls herniation a "slipped" disc. **BHM 8.6, Example 2 "Do
  Not Lift with Your Back"** says lifting with the back "can cause muscle strain and damage discs". Both are
  verbatim CC BY text that contradicts the framing of several lessons. Homework must quote them accurately
  and never as endorsement.
- **OpenStax 14.1** calls pain "primarily a chemical sense that interprets the presence of chemicals from
  tissue damage". This is the damage-meter model that pain-vs-damage argues against. Assign it as the
  textbook view the other Readings answer.
- **Shelton**: confirm each chapter's footer licence before excerpting; several chapters are remixes.

---

## Anatomy

### anatomy/lumbar-vertebra — The lumbar vertebra
Topic: body, arch, processes as levers, lumbar differences. Current sources: openstax-ap-2e, grays-1918.

| # | Reading | Type | Locator |
|---|---|---|---|
| 1 | OpenStax A&P 2e | EXCERPT | 7.3 The Vertebral Column → "Regions of the Vertebral Column", "Curvatures of the Vertebral Column" |
| 2 | OpenStax A&P 2e | EXCERPT | 7.3 → "General Structure of a Vertebra" |
| 3 | OpenStax A&P 2e | EXCERPT | 7.3 → "Regional Modifications of Vertebrae" → "Lumbar Vertebrae"; "Sacrum and Coccyx" |
| 4 | Shelton | EXCERPT (footer CC BY) | ch. 57 "Lumbar Spine" (a copy of the OpenStax text; use it only if the Shelton credit is preferred) |

**Verdict: KEEP.**

### anatomy/intervertebral-disc — The intervertebral disc
Topic: location, nucleus, anulus, endplates, adaptation. Current: openstax-ap-2e, grays-1918, belavy-2017, adams-dolan (paywalled).

| # | Reading | Type | Locator |
|---|---|---|---|
| 1 | OpenStax A&P 2e | EXCERPT | 7.3 → "Intervertebral Discs and Ligaments of the Vertebral Column" → "Intervertebral Disc" |
| 2 | OpenStax A&P 2e | EXCERPT | 9.3 Cartilaginous Joints → "Symphysis" (disc as a symphysis) |
| 3 | Belavy 2017 | EXCERPT | Results; Discussion (running and disc hydration/height) |
| 4 | Fournier 2020 (NEW) | EXCERPT | Introduction |

Drop adams-dolan. **Verdict: KEEP.**

### anatomy/facet-joints — The facet joints
Topic: paired synovial joints, orientation sets motion, load sharing. Current: openstax-ap-2e, grays-1918.

| # | Reading | Type | Locator |
|---|---|---|---|
| 1 | OpenStax A&P 2e | EXCERPT | 9.6 Anatomy of Selected Synovial Joints → "Articulations of the Vertebral Column" (zygapophysial joints; orientation "serves to determine" motion) |
| 2 | OpenStax A&P 2e | EXCERPT | 9.4 Synovial Joints → "Structural Features of Synovial Joints"; "Types of Synovial Joints" → "Plane Joint" |
| 3 | StatPearls, Facet Joint Disease (NBK541049) | LINK | Introduction; Pathophysiology |

There is no free source for load sharing; Homework stays on anatomy and orientation. **Verdict: KEEP.**

### anatomy/spinal-ligaments — Spinal ligaments and thoracolumbar fascia
Current: openstax-ap-2e, grays-1918.

| # | Reading | Type | Locator |
|---|---|---|---|
| 1 | OpenStax A&P 2e | EXCERPT | 7.3 → "Intervertebral Discs and Ligaments of the Vertebral Column" → "Ligaments of the Vertebral Column" (ALL, PLL, ligamentum flavum, supraspinous, interspinous) |
| 2 | OpenStax A&P 2e | EXCERPT | 8.3 The Pelvic Girdle and Pelvis → "Pelvis" (sacroiliac and pelvic ligaments) |
| 3 | Willard 2012 (NEW) | LINK | full paper; PMC holds a PDF, so use page or heading locators from it |

**Verdict: KEEP.**

### anatomy/deep-vs-global-muscles — Deep versus global trunk muscles
Topic: segmental vs multi-joint muscles; the timing debate. Current: openstax-ap-2e, grays-1918, mcgill-1999 (paywalled).

| # | Reading | Type | Locator |
|---|---|---|---|
| 1 | OpenStax A&P 2e | EXCERPT | 11.3 Axial Muscles of the Head, Neck, and Back → "Muscles of the Posterior Neck and the Back" (erector spinae, transversospinales, multifidus, segmental muscles) |
| 2 | OpenStax A&P 2e | EXCERPT | 11.4 Axial Muscles of the Abdominal Wall, and Thorax → "Muscles of the Abdomen" (TVA, obliques, rectus, quadratus lumborum) |
| 3 | OpenStax A&P 2e | EXCERPT | 11.1 Interactions of Skeletal Muscles ... → "Interactions of Skeletal Muscles in the Body" (prime mover, synergist, fixator) |
| 4 | Owen 2020 | LINK | Discussion → "What is the role for trunk muscles in treatment?" |

There is no free source for the timing debate (the Hodges work is paywalled); Owen's discussion is the
closest. **Verdict: KEEP.**

### anatomy/hip-complex — The hip complex
Current: openstax-ap-2e, grays-1918.

| # | Reading | Type | Locator |
|---|---|---|---|
| 1 | OpenStax A&P 2e | EXCERPT | 9.6 → "Hip Joint" |
| 2 | OpenStax A&P 2e | EXCERPT | 8.3 → "Hip Bone" (ilium, ischium, pubis) |
| 3 | OpenStax A&P 2e | EXCERPT | 11.6 Appendicular Muscles of the Pelvic Girdle and Lower Limbs → "Gluteal Region Muscles That Move the Femur"; "Thigh Muscles That Move the Femur, Tibia, and Fibula" |
| 4 | OpenStax A&P 2e | EXCERPT | 9.5 Types of Body Movements → "Flexion and Extension" |
| 5 | Shelton | EXCERPT (footer CC BY) | ch. 60 "Creating Movement at the Hip" |

**Verdict: KEEP.**

### anatomy/nerve-roots-and-dermatomes — Nerve roots and dermatomes
Current: openstax-ap-2e, grays-1918, nice-ng59.

| # | Reading | Type | Locator |
|---|---|---|---|
| 1 | OpenStax A&P 2e | EXCERPT | 13.2 The Central Nervous System → "The Spinal Cord" (cord ends early; cauda equina) |
| 2 | OpenStax A&P 2e | EXCERPT | 13.4 The Peripheral Nervous System → "Spinal Nerves" (plexuses, sciatic nerve) |
| 3 | OpenStax A&P 2e | EXCERPT | 16.4 The Sensory and Motor Exams → "Sensory Modalities and Location" (dermatomes); "Reflexes" |
| 4 | OpenStax A&P 2e | EXCERPT | 13.3 → "Protective Coverings of the Brain and Spinal Cord" |

nice-ng59 adds nothing to anatomy; remove it here. **Verdict: KEEP.**

### anatomy/disc-nutrition — How the disc is fed
Current: openstax-ap-2e, grays-1918, belavy-2017, adams-dolan (paywalled). OpenStax has no text on disc nutrition.

| # | Reading | Type | Locator |
|---|---|---|---|
| 1 | Fournier 2020 (NEW) | EXCERPT | Introduction; Discussion → "Summary of evidence" (avascular adult disc, endplate route) |
| 2 | Belavy 2017 | EXCERPT | Discussion (loading and disc hydration) |
| 3 | OpenStax A&P 2e | EXCERPT | 7.3 → "Intervertebral Disc" (water content declines with age) |

**Verdict: KEEP.**

## Biomechanics

### biomechanics/torque-and-moment-arms — Torque and moment arms
Current: biomechanics-human-movement, shelton, deadlift-loads-2022, openstax-ap-2e.

| # | Reading | Type | Locator |
|---|---|---|---|
| 1 | Biomechanics of Human Movement | EXCERPT | 8.2 The Second Condition for Equilibrium (torque, lever arm) |
| 2 | Biomechanics of Human Movement | EXCERPT | 8.6 Forces and Torques in Muscles and Joints → "Example 1: Muscles Exert Bigger Forces Than You Might Think"; "Example 2: Do Not Lift with Your Back" (see caveat) |
| 3 | OpenStax A&P 2e | EXCERPT | 11.1 → "The Lever System of Muscle and Bone Interactions" |
| 4 | Shelton | LINK (CC BY-NC-SA) | ch. 14 "Body Levers" → "Static Equilibrium in Levers"; "Mechanical Advantage" |

**Verdict: KEEP.**

### biomechanics/intra-abdominal-pressure-and-bracing — IAP and bracing
Current: openstax-ap-2e, shelton, mcgill-1999 (paywalled), deadlift-loads-2022.

| # | Reading | Type | Locator |
|---|---|---|---|
| 1 | OpenStax A&P 2e | EXCERPT | 11.4 → "Muscles of the Abdomen" (Valsalva paragraph); "The Diaphragm"; "Muscles of the Pelvic Floor and Perineum" ("resist intra-abdominal pressure") |
| 2 | Stokes 2010 (NEW) | LINK | Introduction; Discussion |
| 3 | OpenStax A&P 2e | EXCERPT | 22.3 The Process of Breathing → "Pressure Relationships" (for the Valsalva / blood-pressure heading) |
| 4 | Shelton | EXCERPT (footer CC BY) | ch. 58 "Abdomen" |

There is no free source for belts. **Verdict: KEEP.**

### biomechanics/neutral-zone — The neutral zone
Current: openstax-ap-2e, physiopedia, adams-dolan (paywalled), mcgill-1999 (paywalled).

| # | Reading | Type | Locator |
|---|---|---|---|
| 1 | NZ methods 2020 (NEW) | EXCERPT | Introduction (load-displacement curve, NZ definition) |
| 2 | Wilke 2025 (NEW) | EXCERPT | Introduction; Results → "Lumbar Spine" |
| 3 | Biomechanics of Human Movement | EXCERPT | 10.1 Force-Deformation Curve |
| 4 | OpenStax A&P 2e | EXCERPT | 7.3 → "Ligaments of the Vertebral Column" (passive restraint) |

**Verdict: KEEP.**

### biomechanics/flexion-compression — Flexion and compression
Current: adams-dolan, callaghan-mcgill (both paywalled), openstax-ap-2e, deadlift-loads-2022. The lesson is
about the cadaver and porcine failure mechanisms, and every source for them is paywalled (Saraceni 2020
was checked too). What is left free is OpenStax 7.3's herniation paragraph and the deadlift review.

**Verdict: MERGE INTO biomechanics/deadlift-and-squat-spinal-loads.** Carry over OpenStax 7.3 "Intervertebral
Disc" (herniation paragraph, EXCERPT with caveat), disc-diurnal-2026 → Results "Flexion" (LINK), and
Saraceni 2025 (LINK).

### biomechanics/diurnal-disc-changes — Diurnal disc changes
Current: adams-dolan (paywalled), openstax-ap-2e, physiopedia.

| # | Reading | Type | Locator |
|---|---|---|---|
| 1 | Disc diurnal 2026 (NEW) | LINK | Introduction; "Diurnal Results" → "Disc Deformation"; Discussion |
| 2 | Belavy 2017 | EXCERPT | Discussion (diurnal hydration as a confound) |
| 3 | OpenStax A&P 2e | EXCERPT | 7.3 → "Intervertebral Disc" (water content resists compression) |

The plan rule ("big 3 an hour after waking") has no free source; it goes. **Verdict: KEEP** (close call; the
fallback is MERGE INTO anatomy/disc-nutrition).

### biomechanics/deadlift-and-squat-spinal-loads — Deadlift and squat spinal loads
Current: deadlift-loads-2022, adams-dolan (paywalled), biomechanics-human-movement, openstax-ap-2e.

| # | Reading | Type | Locator |
|---|---|---|---|
| 1 | Deadlift review 2022 (PMC9837526) | LINK | Introduction; Results; Discussion; "Conclusions and practical implications" |
| 2 | Biomechanics of Human Movement | EXCERPT | 8.6 → "Example 2: Do Not Lift with Your Back" (why compression exceeds the load) |
| 3 | Atlas stone 2021 (NEW, from strongman) | EXCERPT | Results; Discussion |
| 4 | Saraceni 2025 (NEW, from flexion-compression) | LINK | Introduction; Discussion; "Clinical Implications" |
| 5 | OpenStax A&P 2e | EXCERPT | 7.3 → "Intervertebral Disc" (herniation paragraph; caveat) |

**Verdict: KEEP** (absorbs flexion-compression and strongman-loading).

## Pain science

### pain-science/pain-vs-damage — Pain is not a damage meter
Current: moseley-butler, louw-2016 (paywalled), lancet-2018 (publisher paywalled), brinjikji-2015-meta.

| # | Reading | Type | Locator |
|---|---|---|---|
| 1 | Raja 2020 (NEW) | LINK | "Final Recommendations" → Definition and Notes |
| 2 | Moseley & Butler 2015 | LINK | full paper (publisher, free) |
| 3 | Watson 2019 (NEW) | LINK | Discussion (effect of pain neuroscience education) |
| 4 | Hartvigsen 2018, Lancet paper 1 | LINK | VU Research Portal copy; panels on the biopsychosocial model |
| 5 | OpenStax A&P 2e | EXCERPT | 14.1 Sensory Perception → "Sensory Receptors" → "Functional Receptor Types" (nociceptor; see caveat) |

**Verdict: KEEP.**

### pain-science/sensitization — Sensitization
Current: moseley-butler, louw-2016 (paywalled), kent-2023-restore, lancet-2018.

| # | Reading | Type | Locator |
|---|---|---|---|
| 1 | Woolf 2011 (NEW) | LINK | "What is central sensitization?"; "Central sensitization and the clinical pain phenotype"; "Miscellaneous Musculoskeletal Disorders" |
| 2 | OpenStax A&P 2e | EXCERPT | 14.2 Central Processing → "Sensory Pathways"; "Spinal Cord and Brain Stem" |
| 3 | Moseley & Butler 2015 | LINK | full paper |

**Verdict: KEEP.**

### pain-science/graded-exposure — Graded exposure
Current: moseley-butler, kent-2023, louw-2016, hayden-2021, helms-rpe-rir. The "four dials" and "no bad
movements" content is the site's own; the only exposure-specific open paper is a small 2026 study, and
graded exposure is one arm of CFT.

**Verdict: MERGE INTO rehab/cognitive-functional-therapy.** Carry over graded-exposure-2026-sajp (EXCERPT;
Introduction, Results → "Kinesiophobia", Discussion) and O'Sullivan 2018 → "CFT Intervention" (LINK).

### pain-science/what-imaging-tells-you — What imaging does not tell you
Current: brinjikji ×2, nice-ng59, lancet-2018, moseley-butler. Its Readings are the same two Brinjikji
reviews that anchor pathology/degeneration-and-asymptomatic-findings, and its NICE reading belongs to
when-imaging-is-warranted.

**Verdict: MERGE INTO pathology/degeneration-and-asymptomatic-findings.**

## Pathology

### pathology/bulge-protrusion-extrusion — Bulge, protrusion, extrusion, sequestration
Current: radiopaedia, brinjikji ×2, adams-dolan (paywalled).

| # | Reading | Type | Locator |
|---|---|---|---|
| 1 | Fardon 2014, Lumbar disc nomenclature 2.0 (NEW) | LINK | Spine J version (publisher CC BY-NC-ND), sections defining bulge, protrusion, extrusion and sequestration; or AJNR PMC7965177 |
| 2 | StatPearls, Lumbar Disc Herniation (NBK560878) | LINK | Introduction; Pathophysiology |
| 3 | OpenStax A&P 2e | EXCERPT | 7.3 → "Intervertebral Disc" (herniation paragraph; caveat) |
| 4 | Brinjikji 2015 (degeneration) | LINK | Table of prevalence by age (bulge, protrusion) |
| 5 | Radiopaedia | LINK | "Disc protrusion" / "Disc extrusion" articles (supplementary) |

**Verdict: KEEP.**

### pathology/degeneration-and-asymptomatic-findings — Degeneration in pain-free scans
Current: brinjikji ×2, adams-dolan (paywalled).

| # | Reading | Type | Locator |
|---|---|---|---|
| 1 | Brinjikji 2015, degeneration | LINK | Results; prevalence-by-age table |
| 2 | Brinjikji 2015, meta-analysis | LINK | Results; Discussion |
| 3 | NICE NG59 | LINK | 1.1.5 (explaining that imaging may not change management), from what-imaging-tells-you |

**Verdict: KEEP** (absorbs what-imaging-tells-you).

### pathology/natural-history-and-resorption — Natural history
Current: zhong-2017 (access unclear), resorption-2025-review, brinjikji-2015-degeneration, radiopaedia.

| # | Reading | Type | Locator |
|---|---|---|---|
| 1 | Resorption review (Orthop Rev 2024; registry `resorption-2025-review`) | LINK | publisher full text (CC BY-NC); Results; Discussion |
| 2 | StatPearls, Lumbar Disc Herniation (NBK560878) | LINK | "Prognosis" |
| 3 | Zhong 2017 | LINK, only if the journal PDF needs no login | Results |

**Verdict: KEEP.**

### pathology/radiculopathy — Radiculopathy
Current: sedrak-2021, overley-2016 (paywalled), statpearls, zhong-2017.

| # | Reading | Type | Locator |
|---|---|---|---|
| 1 | OpenStax A&P 2e | EXCERPT | 7.3 → "Intervertebral Disc" (herniation compresses a spinal nerve; L4/L5, L5/S1; sciatica) |
| 2 | OpenStax A&P 2e | EXCERPT | 16.4 → "Sensory Modalities and Location"; "Muscle Strength and Voluntary Movement"; "Reflexes" |
| 3 | StatPearls, Sciatica (PMID 29939685) and Lumbar Disc Herniation (NBK560878) | LINK | History and Physical; Evaluation |
| 4 | Sedrak 2021 | LINK | Results → "RTP Findings"; Discussion |
| 5 | NICE NG59 | LINK | 1.3.5 to 1.3.8 (epidurals and decompression for sciatica) |

StatPearls "Lumbosacral Radiculopathy" is archived; don't use it. **Verdict: KEEP** (absorbs return-to-sport-gates).

### pathology/red-flags — Red flags
Current: nice-ng59, lancet-2018, statpearls.

| # | Reading | Type | Locator |
|---|---|---|---|
| 1 | Finucane 2020, IFOMPT framework (NEW) | LINK | VU Research Portal copy; sections on cauda equina syndrome, fracture, malignancy, infection |
| 2 | StatPearls, Cauda Equina and Conus Medullaris Syndromes (NBK537200) | LINK | History and Physical |
| 3 | StatPearls, Low Back Pain: Evaluation and Management (NBK538173) | LINK | History and Physical (red-flag list) |
| 4 | NICE NG59 | LINK | 1.1.1 "Alternative diagnoses" |

**Verdict: KEEP.**

### pathology/when-imaging-is-warranted — When imaging is warranted
Current: nice-ng59, jospt, who-2023, brinjikji-2015-degeneration, lancet-2018.

| # | Reading | Type | Locator |
|---|---|---|---|
| 1 | NICE NG59 | LINK | 1.1 → "Imaging": 1.1.4, 1.1.5, 1.1.6 |
| 2 | StatPearls, Low Back Pain: Evaluation and Management (NBK538173) | LINK | Evaluation |
| 3 | Brinjikji 2015, degeneration | LINK | Conclusions |

JOSPT 2021 covers interventions, not imaging, so remove it here. Check whether WHO 2023 covers imaging
*(unverified)*. **Verdict: KEEP.**

## Rehab

### rehab/what-the-guidelines-say — Three guidelines
Current: jospt, who-2023, nice-ng59, lancet-2018, hayden-2021.

| # | Reading | Type | Locator |
|---|---|---|---|
| 1 | JOSPT 2021 CPG | LINK | Recommendation summary block (EXERCISE / MANUAL AND OTHER DIRECTED THERAPIES / EDUCATION for acute and chronic LBP) |
| 2 | WHO 2023 | LINK | Executive summary, recommendations table *(unverified)* |
| 3 | NICE NG59 | LINK | 1.2 "Non-invasive treatments", 1.2.1 to 1.2.15 (note 1.2.13 and 1.2.14 removed July 2026) |
| 4 | AHRQ CER 169 (NEW) | EXCERPT | Discussion → "Key Findings and Strength of Evidence" |

**Verdict: KEEP.**

### rehab/exercise-modes-compared — Exercise modes compared
Current: owen-2020, tataryn-2021, hayden-2021, jospt, steele-2014 (paywalled).

| # | Reading | Type | Locator |
|---|---|---|---|
| 1 | Tataryn 2021 | EXCERPT | Key Points; Results → "Outcomes"; Discussion → "Pain", "Disability", "Adverse Events" |
| 2 | Owen 2020 | LINK | Results → "Pain", "Physical function"; Discussion |
| 3 | Hayden 2021 Cochrane | LINK | full text in PMC8477273: Main results; Authors' conclusions |
| 4 | JOSPT 2021 CPG | LINK | "Intervention: Exercise" → "EXERCISE FOR CHRONIC LBP"; "KEY POINTS FOR EXERCISE INTERVENTIONS" |
| 5 | AHRQ CER 169 (NEW) | EXCERPT | Results → Key Question 2, exercise subsections |

**Verdict: KEEP** (absorbs mcgill-approach-and-critics).

### rehab/mcgill-approach-and-critics — The McGill approach and its critics
Current: mcgill-1999, steele-2014, callaghan-mcgill, adams-dolan (all paywalled), owen-2020, tataryn-2021,
hayden-2021. All of McGill's own work and its main critique are paywalled. What is left free is the
exercise-modes evidence, which the lesson's merge target already assigns.

**Verdict: MERGE INTO rehab/exercise-modes-compared.** Carry over Owen 2020 → Discussion "What is the role for
trunk muscles in treatment?".

### rehab/cognitive-functional-therapy — CFT and RESTORE
Current: kent-2023, who-2023, nice-ng59, louw-2016 (paywalled), moseley-butler.

| # | Reading | Type | Locator |
|---|---|---|---|
| 1 | Kent 2023 RESTORE | LINK (EXCERPT if the Lancet page confirms CC BY) | Curtin AAM: Methods (interventions); Results; Discussion |
| 2 | O'Sullivan 2018 (NEW) | LINK | "Cognitive Functional Therapy (CFT): Assessment and Treatment" → "CFT Intervention", "Efficacy of CFT" |
| 3 | Graded exposure 2026 SAJP (NEW, from graded-exposure) | EXCERPT | Introduction; Discussion |
| 4 | JOSPT 2021 CPG | LINK | "EDUCATION FOR CHRONIC LOW BACK PAIN" |
| 5 | WHO 2023 | LINK | psychological and multicomponent interventions recommendations *(unverified)* |

NICE 1.2.13 and 1.2.14 (psychological and combined programmes) were removed in July 2026. Don't assign them.
**Verdict: KEEP** (absorbs graded-exposure).

### rehab/passive-therapies — Passive therapies
Current: who-2023, nice-ng59, jospt, three Cochrane reviews, hayden-2021, physiopedia, barbell-medicine, e3-rehab.

| # | Reading | Type | Locator |
|---|---|---|---|
| 1 | NICE NG59 | LINK | 1.2.3 belts and corsets, 1.2.6 traction, 1.2.7 manual therapy only "as part of a treatment package including exercise", 1.2.8 acupuncture, 1.2.9 ultrasound, 1.2.10 PENS, 1.2.11 TENS, 1.2.12 interferential |
| 2 | AHRQ CER 169 (NEW) | EXCERPT | Results → Key Question 2: spinal manipulation, massage, TENS, traction, acupuncture subsections |
| 3 | JOSPT 2021 CPG | LINK | "MANUAL AND OTHER DIRECTED THERAPIES FOR CHRONIC LOW BACK PAIN" (and acute) |
| 4 | Cochrane SMT 2011 / massage 2015 / TENS 2008 | LINK | full text in PMC12009663 / PMC8734598 / PMC7138213: Main results; Authors' conclusions |
| 5 | WHO 2023 | LINK | physical-intervention recommendations *(unverified)* |

Remove barbell-medicine, e3-rehab and physiopedia. **Verdict: KEEP.**

### rehab/return-to-sport-gates — Return-to-sport gates
Current: mcgill-1999, overley-2016 (both paywalled), sedrak-2021, helms-rpe-rir, who-2023, hayden-2021. The
gates are the plan's own rules and have no source. The one substantial free Reading, Sedrak, is already in
radiculopathy.

**Verdict: MERGE INTO pathology/radiculopathy.**

## Training science

### training-science/volume-intensity-frequency — The three dials
Current: schoenfeld-volume (paywalled), volume-landmarks (blog), helms-rpe-rir, deadlift-loads-2022.

| # | Reading | Type | Locator |
|---|---|---|---|
| 1 | Shelton | EXCERPT (footer CC BY) | ch. 35 "Training Volume" → "How much is enough?", "What is too much?"; ch. 32 "FITT Principle" (check footer) |
| 2 | Baz-Valle 2022 (NEW) | LINK | Results; Discussion |
| 3 | Grgic 2021 frequency (NEW) | EXCERPT | Results; Discussion |
| 4 | OpenStax A&P 2e | EXCERPT | 10.6 Exercise and Muscle Performance → "Resistance Exercise" |

Volume landmarks (MEV/MAV/MRV) have no free source except the RP blog; drop the vocabulary.
**Verdict: KEEP.**

### training-science/rpe-and-rir — RPE and RIR
Current: helms-rpe-rir, schoenfeld-volume (paywalled).

| # | Reading | Type | Locator |
|---|---|---|---|
| 1 | Helms 2016 | LINK | "Benefits of Using a Repetitions in Reserve–Based Scale ..."; "Relationship of Percentage One Repetition Maximum, Repetitions Performed, and Repetitions in Reserve"; "Incorporating the Scale into Programming" |
| 2 | Refalo 2023 (NEW) | EXCERPT | Results; Discussion |
| 3 | Shelton | EXCERPT (footer CC BY) | ch. 54 "Measuring Intensity" → "Other Ways to Determine Intensity" (Borg RPE) |
| 4 | Shelton | EXCERPT (footer CC BY) | ch. 31 "Principles of Adaptation and Stress" → "Progressive Overload" (from progression-models) |

**Verdict: KEEP** (absorbs progression-models).

### training-science/progression-models — Double progression and APRE
Current: helms-rpe-rir, mann-2010-apre (paywalled), schoenfeld-volume (paywalled), volume-landmarks (blog).
The worked examples are the site's own and APRE's source is paywalled. The Readings left (Helms
"Incorporating the Scale into Programming", Shelton "Progressive Overload") belong with RPE/RIR.

**Verdict: MERGE INTO training-science/rpe-and-rir.**

### training-science/periodization — Periodization
Current: williams-2017 (paywalled), volume-landmarks, schoenfeld-volume (paywalled), helms-rpe-rir, bell-2023.

| # | Reading | Type | Locator |
|---|---|---|---|
| 1 | Periodization meta 2026 (NEW) | EXCERPT | Introduction (linear vs undulating); Results; Discussion |
| 2 | Shelton | EXCERPT (footer CC BY) | ch. 33 "Rest, Recovery, and Periodization" (about 450 words) |
| 3 | Bell 2023 | EXCERPT | Discussion → "Integrating Deloading into the Strength and Physique Athlete's Training Programme" |

**Verdict: KEEP.** Read reading 1 before committing; if it is thin, MERGE INTO deloads.

### training-science/deloads — Deloads
Current: bell-2023, volume-landmarks, helms-rpe-rir, schoenfeld-volume.

| # | Reading | Type | Locator |
|---|---|---|---|
| 1 | Bell 2023 Delphi | EXCERPT | Results → "General Perceptions of Deloading", "Designing and Implementing Deload Training"; Discussion |
| 2 | Bell 2024 survey (NEW) | EXCERPT | Results → "Duration and Frequency of Deloading", "Changes in Training Frequency and Volume During Deloading", "Changes in Intensity of Effort During Deloading" |
| 3 | Shelton | EXCERPT (footer CC BY) | ch. 33 "Rest, Recovery, and Periodization" |

**Verdict: KEEP.**

### training-science/workload-spikes-and-acwr — Workload spikes
Current: impellizzeri-2020 (paywalled), schoenfeld-volume, helms-rpe-rir, deadlift-loads-2022.

| # | Reading | Type | Locator |
|---|---|---|---|
| 1 | Lolli 2019 (NEW) | LINK | Teesside repository published version (full paper; short) |
| 2 | ACWR meta 2026 (NEW) | EXCERPT | Discussion (read first: it may support ACWR thresholds) |

The plan's alternative (axial hard-set budget, 30-day maximum) has no source and goes. Thin.
**Verdict: KEEP** if reading 2 holds up; otherwise DROP (Lolli alone is a short paper).

### training-science/strongman-loading — Strongman loading
Current: deadlift-loads-2022, callaghan-mcgill (paywalled), mcgill-1999 (paywalled), helms-rpe-rir,
prs-lifting-manual (all rights reserved). The regression ladders are the plan's own and there is no free
source for carries or the yoke. The one open paper (atlas stone, PeerJ 2021, CC BY) is a spinal-loading
Reading.

**Verdict: MERGE INTO biomechanics/deadlift-and-squat-spinal-loads.**

## Summary table

| Lesson | Verdict |
|---|---|
| anatomy/* (8) | KEEP |
| biomechanics/torque-and-moment-arms | KEEP |
| biomechanics/intra-abdominal-pressure-and-bracing | KEEP |
| biomechanics/neutral-zone | KEEP |
| biomechanics/flexion-compression | MERGE → deadlift-and-squat-spinal-loads |
| biomechanics/diurnal-disc-changes | KEEP (fallback: merge into disc-nutrition) |
| biomechanics/deadlift-and-squat-spinal-loads | KEEP |
| pain-science/pain-vs-damage | KEEP |
| pain-science/sensitization | KEEP |
| pain-science/graded-exposure | MERGE → rehab/cognitive-functional-therapy |
| pain-science/what-imaging-tells-you | MERGE → pathology/degeneration-and-asymptomatic-findings |
| pathology/* (6) | KEEP |
| rehab/what-the-guidelines-say | KEEP |
| rehab/exercise-modes-compared | KEEP |
| rehab/mcgill-approach-and-critics | MERGE → exercise-modes-compared |
| rehab/cognitive-functional-therapy | KEEP |
| rehab/passive-therapies | KEEP |
| rehab/return-to-sport-gates | MERGE → pathology/radiculopathy |
| training-science/volume-intensity-frequency | KEEP |
| training-science/rpe-and-rir | KEEP |
| training-science/progression-models | MERGE → rpe-and-rir |
| training-science/periodization | KEEP (fallback: merge into deloads) |
| training-science/deloads | KEEP |
| training-science/workload-spikes-and-acwr | KEEP (thin; fallback DROP) |
| training-science/strongman-loading | MERGE → deadlift-and-squat-spinal-loads |
