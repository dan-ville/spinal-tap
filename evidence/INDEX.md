# Evidence index

All 662 evidence records in `sources/`, grouped by the area of each record's first topic. Written by the evidence audit (thesis step 11, 2026-11-25). The record format is described in [`README.md`](README.md).

## Audit results

- **Format.** All 662 records parse as YAML and carry every field the format requires, with valid `design`, `read_level` and finding `grade` values, `topics` in `area/subtopic` form and an `id` matching the file name.
- **Duplicates.** None. The check compared DOIs, PubMed IDs and titles. Two pairs matched but are different papers:
  - `trommelen-2023-protein-dose` and `witard-2024-protein-commentary` share a title prefix; the second is a commentary on the first.
  - `zabaleta-korta-2021` and `zabaleta-korta-2023` shared a DOI. The 2023 record carried the 2021 paper's DOI; it is now corrected to `10.5114/jhk/163561`, confirmed against PubMed and Crossref.
- **Citations.** Every `[@id]` in the thesis chapters points to a record. 514 records are cited in the chapters; the other 148 are cited only in the research notes or verification reports, mostly because the light-draft chapters condense their notes.

### Known issues not fixed in this step

A read-only check of every DOI against Crossref, run on 2026-11-25 outside the step queue, found the following. Fixes made since are noted on each item.

- **Five DOIs pointed to a different paper.** Fixed on 2026-11-25: each correct DOI was looked up from the record's PubMed ID and confirmed in OpenAlex and Crossref (`jorgenson-2020`, `goli-2026`, `pedrosa-2023`, `akcay-2026`, `wang-2026-bfr`).
- **No retractions** among the records with a DOI. 14 papers carry a published correction, erratum or corrigendum that has not been read: `bourne-2017-nordic-architecture`, `cuthbert-2020-nordic-volume`, `davis-2020-massage`, `doma-2017-alternate`, `gao-2023-sequence`, `hindle-2019-strongman-biomechanics`, `lopez-2021-load`, `morton-2018-protein`, `patterson-2019`, `plotkin-2023-hip-thrust`, `tsai-2024-tendon-loading-frequency`, `tundidor-duque-2026-velocity-loss`, `watson-2018-liftmor`, `xu-2024-creatine-cognition`.
- **8 records have no DOI** (practitioner web pages, a preprint and papers whose DOI was not recorded): `campos-2016-pilates`, `hubal-2005`, `lopez-bedoya-2013-active-passive`, `moritani-1979`, `patrick-2024-atg-program`, `remmert-2025-per-session-volume`, `rhea-2002-dup`, `spina-2026-frc-claims`. One record, `kong-2025-sleep-deprivation`, could not be checked because of Crossref's rate limit.
- **Read-level mismatch.** `pincheira-2022-sarcomere` was recorded as full text but marked abstract-only in chapter 5. Fixed in the final edit (thesis step 12): the chapter mark was removed.

## Counts

| Read level | Records |
|---|---:|
| full-text | 209 |
| abstract | 444 |
| secondary | 9 |

| Design | Records |
|---|---:|
| meta-analysis | 180 |
| rct | 168 |
| narrative-review | 70 |
| other | 46 |
| cross-sectional | 40 |
| crossover | 38 |
| cohort | 36 |
| systematic-review | 33 |
| mechanistic | 23 |
| consensus | 15 |
| preprint | 7 |
| umbrella-review | 6 |

| Year | Records |
|---|---:|
| 2020–2026 | 406 |
| 2010–2019 | 203 |
| before 2010 | 53 |

| Area | Records |
|---|---:|
| [hypertrophy](#hypertrophy) | 114 |
| [strength](#strength) | 106 |
| [programming](#programming) | 64 |
| [connective-tissue](#connective-tissue) | 62 |
| [frontiers](#frontiers) | 51 |
| [flexibility](#flexibility) | 49 |
| [concurrent](#concurrent) | 47 |
| [mobility](#mobility) | 39 |
| [nutrition](#nutrition) | 33 |
| [recovery](#recovery) | 29 |
| [injury](#injury) | 18 |
| [conditioning](#conditioning) | 11 |
| [technology](#technology) | 11 |
| [methods](#methods) | 8 |
| [monitoring](#monitoring) | 7 |
| [practice](#practice) | 6 |
| [cognition](#cognition) | 4 |
| [consensus](#consensus) | 2 |
| [mechanisms](#mechanisms) | 1 |

## hypertrophy

114 records.

| Record | Year | Design | Read level | Topics | Chapters |
|---|---:|---|---|---|---|
| [`akcay-2026`](sources/akcay-2026.yml) | 2026 | rct | abstract | hypertrophy/bfr, hypertrophy/trained | — |
| [`barsuhn-2025-volume-increase`](sources/barsuhn-2025-volume-increase.yml) | 2025 | rct | abstract | hypertrophy/volume, strength/volume | 3 |
| [`baz-valle-2022-volume`](sources/baz-valle-2022-volume.yml) | 2022 | meta-analysis | abstract | hypertrophy/volume | 3 |
| [`bjornsen-2019`](sources/bjornsen-2019.yml) | 2019 | rct | abstract | hypertrophy/bfr, hypertrophy/trained, hypertrophy/satellite-cells | 5 |
| [`boutagy-2026-frequency-preprint`](sources/boutagy-2026-frequency-preprint.yml) | 2026 | preprint | full-text | hypertrophy/frequency | 3 |
| [`buckner-2023-volume-doubts`](sources/buckner-2023-volume-doubts.yml) | 2023 | narrative-review | abstract | hypertrophy/volume, methods/measurement | 3 |
| [`conceicao-2018`](sources/conceicao-2018.yml) | 2018 | meta-analysis | abstract | hypertrophy/satellite-cells, hypertrophy/mechanisms | 5 |
| [`cowley-2026-advanced-nma`](sources/cowley-2026-advanced-nma.yml) | 2026 | meta-analysis | abstract | hypertrophy/advanced-techniques, hypertrophy/flywheel | 5 |
| [`cumming-2024`](sources/cumming-2024.yml) | 2024 | rct | abstract | hypertrophy/muscle-memory, hypertrophy/satellite-cells, frontiers/genetics-omics | 5 |
| [`da-silva-2025-ecc-con`](sources/da-silva-2025-ecc-con.yml) | 2025 | meta-analysis | abstract | hypertrophy/contraction-type, hypertrophy/eccentric | 5 |
| [`damas-2016-myops`](sources/damas-2016-myops.yml) | 2016 | cohort | abstract | hypertrophy/mechanisms, mechanisms/hypertrophy | 5 |
| [`dankel-2017-metabolites`](sources/dankel-2017-metabolites.yml) | 2017 | narrative-review | abstract | hypertrophy/mechanisms, mechanisms/hypertrophy | 5 |
| [`earp-2015`](sources/earp-2015.yml) | 2015 | rct | abstract | hypertrophy/regional | 5 |
| [`eidiyan-kakhki-2026`](sources/eidiyan-kakhki-2026.yml) | 2026 | meta-analysis | abstract | hypertrophy/flywheel, strength/methods | — |
| [`enes-2025-set-progression`](sources/enes-2025-set-progression.yml) | 2025 | rct | abstract | hypertrophy/volume, strength/volume, programming/progression | 3 |
| [`enes-2025-tempo`](sources/enes-2025-tempo.yml) | 2025 | meta-analysis | abstract | hypertrophy/contraction-type, hypertrophy/tempo | 5 |
| [`franchi-2014`](sources/franchi-2014.yml) | 2014 | rct | abstract | hypertrophy/contraction-type, hypertrophy/architecture, hypertrophy/eccentric | 5 |
| [`franchi-2018-mt`](sources/franchi-2018-mt.yml) | 2018 | cohort | abstract | hypertrophy/measurement | 5 |
| [`fukumitsu-2026`](sources/fukumitsu-2026.yml) | 2026 | cohort | abstract | hypertrophy/measurement | 5 |
| [`geng-2024`](sources/geng-2024.yml) | 2024 | meta-analysis | full-text | hypertrophy/bfr, hypertrophy/trained | 5 |
| [`goli-2026`](sources/goli-2026.yml) | 2026 | rct | abstract | hypertrophy/muscle-length, hypertrophy/advanced-techniques | — |
| [`greyvenstein-2026`](sources/greyvenstein-2026.yml) | 2026 | narrative-review | abstract | hypertrophy/mechanisms, mechanisms/hypertrophy | 5 |
| [`gschneidner-2025-lengthened-partials`](sources/gschneidner-2025-lengthened-partials.yml) | 2025 | rct | full-text | hypertrophy/range-of-motion, strength/range-of-motion | — |
| [`hammert-2024-volume-load-progression`](sources/hammert-2024-volume-load-progression.yml) | 2024 | narrative-review | abstract | hypertrophy/volume, methods/measurement | 3 |
| [`haun-2019-measurement`](sources/haun-2019-measurement.yml) | 2019 | narrative-review | full-text | hypertrophy/measurement, hypertrophy/mechanisms | 5 |
| [`havers-2025`](sources/havers-2025.yml) | 2025 | rct | full-text | hypertrophy/muscle-length, hypertrophy/range-of-motion, hypertrophy/trained, strength/range-of-motion, strength/joint-angle | 5 |
| [`horwath-2025`](sources/horwath-2025.yml) | 2025 | cohort | abstract | hypertrophy/muscle-memory | — |
| [`hu-2024-flywheel`](sources/hu-2024-flywheel.yml) | 2024 | meta-analysis | abstract | hypertrophy/flywheel, strength/methods | 5 |
| [`hulmi-2025-proteomic`](sources/hulmi-2025-proteomic.yml) | 2025 | rct | abstract | hypertrophy/muscle-memory, frontiers/genetics-omics | — |
| [`jorgenson-2020`](sources/jorgenson-2020.yml) | 2020 | narrative-review | abstract | hypertrophy/mechanisms, mechanisms/hypertrophy | 5 |
| [`kassiano-2022-variation`](sources/kassiano-2022-variation.yml) | 2022 | systematic-review | abstract | hypertrophy/exercise-selection, hypertrophy/regional | — |
| [`kassiano-2023-calf`](sources/kassiano-2023-calf.yml) | 2023 | rct | abstract | hypertrophy/muscle-length, hypertrophy/range-of-motion | 5 |
| [`kassiano-2023-rom-review`](sources/kassiano-2023-rom-review.yml) | 2023 | systematic-review | abstract | hypertrophy/range-of-motion, hypertrophy/muscle-length, strength/range-of-motion | 5 |
| [`kataoka-2026`](sources/kataoka-2026.yml) | 2026 | rct | full-text | hypertrophy/bfr, hypertrophy/effort | 5 |
| [`kinoshita-2023`](sources/kinoshita-2023.yml) | 2023 | rct | full-text | hypertrophy/muscle-length, hypertrophy/exercise-selection | 5 |
| [`kinoshita-2026`](sources/kinoshita-2026.yml) | 2026 | rct | full-text | hypertrophy/exercise-selection, hypertrophy/regional | 5 |
| [`kobayashi-2026`](sources/kobayashi-2026.yml) | 2026 | rct | abstract | hypertrophy/exercise-selection, hypertrophy/regional, hypertrophy/muscle-length | 5 |
| [`krieger-2010-sets-hypertrophy`](sources/krieger-2010-sets-hypertrophy.yml) | 2010 | meta-analysis | abstract | hypertrophy/volume | 3 |
| [`kubo-2019`](sources/kubo-2019.yml) | 2019 | rct | abstract | hypertrophy/range-of-motion, hypertrophy/exercise-selection, strength/range-of-motion, strength/joint-angle | 5, 7 |
| [`larsen-2025-lateral-raise`](sources/larsen-2025-lateral-raise.yml) | 2025 | rct | abstract | hypertrophy/exercise-selection, hypertrophy/trained | 5 |
| [`larsen-2025-leg-press`](sources/larsen-2025-leg-press.yml) | 2025 | rct | abstract | hypertrophy/range-of-motion, hypertrophy/trained | 5 |
| [`lasevicius-2018-intensity`](sources/lasevicius-2018-intensity.yml) | 2018 | rct | abstract | hypertrophy/load, strength/load, hypertrophy/mechanisms | 3, 5, 12 |
| [`lixandrao-2018`](sources/lixandrao-2018.yml) | 2018 | meta-analysis | abstract | hypertrophy/bfr | — |
| [`lum-2019-isometric`](sources/lum-2019-isometric.yml) | 2019 | narrative-review | abstract | hypertrophy/isometric, strength/specificity | 5 |
| [`maeo-2018`](sources/maeo-2018.yml) | 2018 | rct | abstract | hypertrophy/eccentric, hypertrophy/contraction-type | 5 |
| [`maeo-2021`](sources/maeo-2021.yml) | 2021 | rct | full-text | hypertrophy/muscle-length, hypertrophy/exercise-selection | 5 |
| [`maeo-2023`](sources/maeo-2023.yml) | 2023 | rct | abstract | hypertrophy/muscle-length, hypertrophy/exercise-selection | 5 |
| [`maeo-2024-nordic`](sources/maeo-2024-nordic.yml) | 2024 | rct | full-text | hypertrophy/eccentric, hypertrophy/muscle-length, hypertrophy/exercise-selection, mobility/eccentric-training | 5, 7 |
| [`maeo-2024-trained-fibers`](sources/maeo-2024-trained-fibers.yml) | 2024 | cross-sectional | full-text | hypertrophy/mechanisms, hypertrophy/trained | 5 |
| [`maroto-izquierdo-2017`](sources/maroto-izquierdo-2017.yml) | 2017 | meta-analysis | abstract | hypertrophy/flywheel | 5 |
| [`mckee-2026`](sources/mckee-2026.yml) | 2026 | meta-analysis | abstract | hypertrophy/bfr | 5 |
| [`mcmahon-2026`](sources/mcmahon-2026.yml) | 2026 | rct | abstract | hypertrophy/muscle-length, hypertrophy/range-of-motion, hypertrophy/architecture, strength/range-of-motion | 5 |
| [`mohan-2026-self-selected-rest`](sources/mohan-2026-self-selected-rest.yml) | 2026 | rct | abstract | hypertrophy/rest-interval, strength/rest-interval | 3 |
| [`moreno-2025-volume-baseline`](sources/moreno-2025-volume-baseline.yml) | 2025 | rct | abstract | hypertrophy/volume, strength/volume | 3 |
| [`morin-2026`](sources/morin-2026.yml) | 2026 | mechanistic | abstract | hypertrophy/regional, hypertrophy/muscle-length, hypertrophy/mechanisms | — |
| [`morton-2016-load-trained`](sources/morton-2016-load-trained.yml) | 2016 | rct | abstract | hypertrophy/load, strength/load, mechanisms/hypertrophy, hypertrophy/mechanisms | 3, 5 |
| [`morton-2019-fibre-activation`](sources/morton-2019-fibre-activation.yml) | 2019 | crossover | abstract | hypertrophy/mechanisms, hypertrophy/load | 5 |
| [`muddle-2018-motor-units`](sources/muddle-2018-motor-units.yml) | 2018 | crossover | abstract | hypertrophy/mechanisms, strength/neural | 5 |
| [`murach-2020-muscle-memory`](sources/murach-2020-muscle-memory.yml) | 2020 | mechanistic | abstract | hypertrophy/muscle-memory, hypertrophy/satellite-cells | 5 |
| [`nunes-2024-sites`](sources/nunes-2024-sites.yml) | 2024 | narrative-review | abstract | hypertrophy/measurement, hypertrophy/regional | 5 |
| [`oborn-2025`](sources/oborn-2025.yml) | 2025 | umbrella-review | full-text | hypertrophy/bfr | 5 |
| [`patterson-2019`](sources/patterson-2019.yml) | 2019 | consensus | full-text | hypertrophy/bfr | 5 |
| [`pedrosa-2022`](sources/pedrosa-2022.yml) | 2022 | rct | abstract | hypertrophy/muscle-length, hypertrophy/range-of-motion, hypertrophy/regional | 5 |
| [`pedrosa-2023`](sources/pedrosa-2023.yml) | 2023 | rct | abstract | hypertrophy/muscle-length, hypertrophy/regional | — |
| [`pedrosa-2025`](sources/pedrosa-2025.yml) | 2025 | rct | abstract | hypertrophy/range-of-motion, strength/specificity | 5 |
| [`pedrosa-2026-review`](sources/pedrosa-2026-review.yml) | 2026 | narrative-review | full-text | hypertrophy/muscle-length, hypertrophy/mechanisms, mobility/mechanisms | 5 |
| [`petre-2018`](sources/petre-2018.yml) | 2018 | meta-analysis | full-text | hypertrophy/flywheel | 5 |
| [`plotkin-2023-hip-thrust`](sources/plotkin-2023-hip-thrust.yml) | 2023 | rct | abstract | hypertrophy/exercise-selection, hypertrophy/regional | 5 |
| [`psilander-2019`](sources/psilander-2019.yml) | 2019 | rct | abstract | hypertrophy/muscle-memory | 5 |
| [`rantila-2026-high-volume`](sources/rantila-2026-high-volume.yml) | 2026 | rct | abstract | hypertrophy/volume, strength/volume | 3 |
| [`refalo-2023-failure-hypertrophy`](sources/refalo-2023-failure-hypertrophy.yml) | 2023 | meta-analysis | full-text | hypertrophy/proximity-to-failure | 3 |
| [`refalo-2024-failure-rir-trial`](sources/refalo-2024-failure-rir-trial.yml) | 2024 | rct | abstract | hypertrophy/proximity-to-failure | 3, 12 |
| [`refalo-2025-failure-perception`](sources/refalo-2025-failure-perception.yml) | 2025 | rct | abstract | hypertrophy/proximity-to-failure, adherence/perception | 3 |
| [`remmert-2025-per-session-volume`](sources/remmert-2025-per-session-volume.yml) | 2025 | preprint | full-text | hypertrophy/volume, strength/volume, hypertrophy/frequency | 3 |
| [`rilling-2026`](sources/rilling-2026.yml) | 2026 | mechanistic | abstract | hypertrophy/eccentric, hypertrophy/architecture | — |
| [`roberts-2020-sarcoplasmic`](sources/roberts-2020-sarcoplasmic.yml) | 2020 | narrative-review | abstract | hypertrophy/mechanisms, mechanisms/hypertrophy | 5 |
| [`roberts-2023-mechanisms`](sources/roberts-2023-mechanisms.yml) | 2023 | narrative-review | abstract | hypertrophy/mechanisms, mechanisms/hypertrophy | 5 |
| [`robinson-2025-volume-individual`](sources/robinson-2025-volume-individual.yml) | 2025 | preprint | abstract | hypertrophy/volume, strength/volume, methods/individual-response, frontiers/individual-response | 3, 11 |
| [`ruple-2022-imaging`](sources/ruple-2022-imaging.yml) | 2022 | cohort | abstract | hypertrophy/measurement | 5 |
| [`scarpelli-2025`](sources/scarpelli-2025.yml) | 2025 | rct | abstract | hypertrophy/satellite-cells, hypertrophy/individual-response | — |
| [`schoenfeld-2010-mechanisms`](sources/schoenfeld-2010-mechanisms.yml) | 2010 | narrative-review | abstract | hypertrophy/mechanisms, mechanisms/hypertrophy | 5 |
| [`schoenfeld-2016-frequency`](sources/schoenfeld-2016-frequency.yml) | 2016 | meta-analysis | abstract | hypertrophy/frequency | 3 |
| [`schoenfeld-2017-ecc-con`](sources/schoenfeld-2017-ecc-con.yml) | 2017 | meta-analysis | abstract | hypertrophy/contraction-type, hypertrophy/eccentric | 5 |
| [`schoenfeld-2017-volume`](sources/schoenfeld-2017-volume.yml) | 2017 | meta-analysis | abstract | hypertrophy/volume | 3 |
| [`schoenfeld-2019-frequency`](sources/schoenfeld-2019-frequency.yml) | 2019 | meta-analysis | abstract | hypertrophy/frequency | 3 |
| [`schoenfeld-2019-volume-trained`](sources/schoenfeld-2019-volume-trained.yml) | 2019 | rct | full-text | hypertrophy/volume, strength/volume, strength/minimum-dose, strength/hypertrophy-strength, strength/training-age | 2, 3 |
| [`scott-2017-panoramic`](sources/scott-2017-panoramic.yml) | 2017 | cohort | abstract | hypertrophy/measurement | — |
| [`seaborne-2018`](sources/seaborne-2018.yml) | 2018 | cohort | abstract | hypertrophy/muscle-memory, frontiers/genetics-omics | 5 |
| [`singer-2024-rest`](sources/singer-2024-rest.yml) | 2024 | meta-analysis | full-text | hypertrophy/rest-interval | 3 |
| [`strey-2026`](sources/strey-2026.yml) | 2026 | meta-analysis | abstract | hypertrophy/muscle-length, hypertrophy/range-of-motion | 5 |
| [`van-der-pijl-2018`](sources/van-der-pijl-2018.yml) | 2018 | mechanistic | abstract | hypertrophy/mechanisms, hypertrophy/muscle-length | 5 |
| [`van-der-pijl-2026`](sources/van-der-pijl-2026.yml) | 2026 | mechanistic | abstract | hypertrophy/mechanisms, hypertrophy/muscle-length, mobility/mechanisms | 5 |
| [`varovic-2025-isometric`](sources/varovic-2025-isometric.yml) | 2025 | rct | abstract | hypertrophy/isometric, hypertrophy/muscle-length, hypertrophy/trained, mobility/end-range-isometrics | 5 |
| [`varovic-2025-muscle-length`](sources/varovic-2025-muscle-length.yml) | 2025 | meta-analysis | abstract | hypertrophy/muscle-length, hypertrophy/regional, strength/range-of-motion | 5 |
| [`vasconcelos-2026-elbow-failure`](sources/vasconcelos-2026-elbow-failure.yml) | 2026 | rct | abstract | hypertrophy/proximity-to-failure, strength/proximity-to-failure | 3 |
| [`vasconcelos-2026-leg-extension-failure`](sources/vasconcelos-2026-leg-extension-failure.yml) | 2026 | rct | abstract | hypertrophy/proximity-to-failure, strength/proximity-to-failure | 3 |
| [`vendruscolo-2025-bfr-length`](sources/vendruscolo-2025-bfr-length.yml) | 2025 | rct | abstract | hypertrophy/muscle-length, hypertrophy/bfr, hypertrophy/trained | — |
| [`vicens-bordas-2018`](sources/vicens-bordas-2018.yml) | 2018 | meta-analysis | abstract | hypertrophy/flywheel, strength/methods | — |
| [`wackerhage-2019`](sources/wackerhage-2019.yml) | 2019 | narrative-review | abstract | hypertrophy/mechanisms, mechanisms/hypertrophy | 5 |
| [`wadhi-2022-interset-stretch-trained`](sources/wadhi-2022-interset-stretch-trained.yml) | 2022 | rct | abstract | hypertrophy/muscle-length, flexibility/stretch-hypertrophy | 6 |
| [`wagle-2017`](sources/wagle-2017.yml) | 2017 | narrative-review | abstract | hypertrophy/accentuated-eccentric | — |
| [`wakahara-2013`](sources/wakahara-2013.yml) | 2013 | cohort | abstract | hypertrophy/regional | — |
| [`walker-2016`](sources/walker-2016.yml) | 2016 | rct | full-text | hypertrophy/eccentric, hypertrophy/accentuated-eccentric, hypertrophy/trained | 5 |
| [`wang-2026-bfr`](sources/wang-2026-bfr.yml) | 2026 | rct | abstract | hypertrophy/bfr, hypertrophy/trained | — |
| [`warneke-2023-stretch-review`](sources/warneke-2023-stretch-review.yml) | 2023 | narrative-review | abstract | hypertrophy/muscle-length, hypertrophy/mechanisms, flexibility/stretch-hypertrophy | — |
| [`warneke-2024-stretch`](sources/warneke-2024-stretch.yml) | 2024 | meta-analysis | full-text | hypertrophy/muscle-length, flexibility/stretching, flexibility/stretch-hypertrophy, mobility/loaded-stretching | 5, 6 |
| [`west-2010`](sources/west-2010.yml) | 2010 | rct | abstract | hypertrophy/mechanisms, mechanisms/hypertrophy | 5 |
| [`wolf-2023-rom`](sources/wolf-2023-rom.yml) | 2023 | meta-analysis | full-text | hypertrophy/range-of-motion, hypertrophy/muscle-length, strength/range-of-motion, strength/specificity | 5, 7 |
| [`wolf-2025-lengthened-partials`](sources/wolf-2025-lengthened-partials.yml) | 2025 | rct | full-text | hypertrophy/muscle-length, hypertrophy/range-of-motion, hypertrophy/trained, strength/range-of-motion | 5 |
| [`wolf-2026-longitudinal`](sources/wolf-2026-longitudinal.yml) | 2026 | systematic-review | full-text | hypertrophy/muscle-length, hypertrophy/architecture, mobility/mechanisms | 5 |
| [`zabaleta-korta-2021`](sources/zabaleta-korta-2021.yml) | 2021 | rct | abstract | hypertrophy/regional, hypertrophy/exercise-selection | — |
| [`zabaleta-korta-2023`](sources/zabaleta-korta-2023.yml) | 2023 | rct | abstract | hypertrophy/regional, hypertrophy/muscle-length | — |
| [`zhang-2025-bfr-athletes`](sources/zhang-2025-bfr-athletes.yml) | 2025 | meta-analysis | abstract | hypertrophy/bfr, hypertrophy/trained | — |
| [`zhong-2025-ael`](sources/zhong-2025-ael.yml) | 2025 | systematic-review | abstract | hypertrophy/accentuated-eccentric, strength/methods | 5 |

## strength

106 records.

| Record | Year | Design | Read level | Topics | Chapters |
|---|---:|---|---|---|---|
| [`aagaard-2002`](sources/aagaard-2002.yml) | 2002 | other | abstract | strength/neural-adaptations, strength/rate-of-force-development | 2 |
| [`ahtiainen-2003`](sources/ahtiainen-2003.yml) | 2003 | other | abstract | strength/training-age, strength/hypertrophy-strength | 2 |
| [`akalu-2026`](sources/akalu-2026.yml) | 2026 | rct | abstract | strength/reticulospinal, strength/corticospinal | 2 |
| [`alegre-2014-isometric`](sources/alegre-2014-isometric.yml) | 2014 | rct | abstract | strength/joint-angle, strength/isometric, hypertrophy/architecture | 7 |
| [`altheyab-2026`](sources/altheyab-2026.yml) | 2026 | meta-analysis | full-text | strength/cross-education | 2 |
| [`androulakis-korakakis-2020-minimum-dose`](sources/androulakis-korakakis-2020-minimum-dose.yml) | 2020 | meta-analysis | abstract | strength/minimum-dose, strength/minimal-dose | 3 |
| [`androulakis-korakakis-2021-powerlifters`](sources/androulakis-korakakis-2021-powerlifters.yml) | 2021 | other | full-text | strength/minimum-dose, strength/maintenance | 3 |
| [`appleby-2012`](sources/appleby-2012.yml) | 2012 | cohort | abstract | strength/training-age, strength/hypertrophy-strength | 2 |
| [`balshaw-2017`](sources/balshaw-2017.yml) | 2017 | other | abstract | strength/hypertrophy-strength, strength/neural-adaptations | 2 |
| [`balshaw-2021`](sources/balshaw-2021.yml) | 2021 | cross-sectional | abstract | strength/hypertrophy-strength, strength/methods | 2 |
| [`balshaw-2022`](sources/balshaw-2022.yml) | 2022 | cross-sectional | full-text | strength/training-age, strength/rate-of-force-development, strength/neural-adaptations | 2 |
| [`balshaw-2026`](sources/balshaw-2026.yml) | 2026 | other | full-text | strength/methods, strength/hypertrophy-strength | 2 |
| [`behm-1993`](sources/behm-1993.yml) | 1993 | narrative-review | abstract | strength/specificity, strength/velocity | 2 |
| [`bickel-2011-maintenance`](sources/bickel-2011-maintenance.yml) | 2011 | rct | abstract | strength/maintenance, hypertrophy/maintenance | 3 |
| [`bloomquist-2013-squat-depth`](sources/bloomquist-2013-squat-depth.yml) | 2013 | rct | abstract | strength/range-of-motion, strength/joint-angle, hypertrophy/range-of-motion | 7 |
| [`buckner-2016`](sources/buckner-2016.yml) | 2016 | other | abstract | strength/hypertrophy-strength | 2 |
| [`buckner-2021`](sources/buckner-2021.yml) | 2021 | rct | abstract | strength/hypertrophy-strength, strength/specificity, strength/training-age | 2 |
| [`carolan-1992`](sources/carolan-1992.yml) | 1992 | rct | abstract | strength/neural-adaptations, strength/antagonist-coactivation | 2 |
| [`carroll-2001`](sources/carroll-2001.yml) | 2001 | narrative-review | abstract | strength/neural-adaptations, strength/specificity | 2 |
| [`casolo-2020`](sources/casolo-2020.yml) | 2020 | rct | abstract | strength/motor-units, strength/morphology | 2 |
| [`casolo-2021`](sources/casolo-2021.yml) | 2021 | cross-sectional | abstract | strength/motor-units, strength/training-age, strength/hypertrophy-strength | 2 |
| [`casolo-2026`](sources/casolo-2026.yml) | 2026 | rct | full-text | strength/motor-units, strength/neural-adaptations | 2 |
| [`cumming-2025`](sources/cumming-2025.yml) | 2025 | rct | abstract | strength/load, strength/specificity, strength/training-age | 2 |
| [`currier-2023-nma`](sources/currier-2023-nma.yml) | 2023 | meta-analysis | full-text | strength/load, hypertrophy/load, strength/volume, hypertrophy/volume, strength/frequency | 3 |
| [`currier-2026-acsm-position-stand`](sources/currier-2026-acsm-position-stand.yml) | 2026 | umbrella-review | full-text | strength/load, hypertrophy/volume, strength/frequency, strength/proximity-to-failure, strength/rest-interval, hypertrophy/rest-interval, consensus/guidelines, programming/periodization, programming/progression, programming/autoregulation, frontiers/frontier-trials | 3, 4 |
| [`damas-2016`](sources/damas-2016.yml) | 2016 | other | abstract | strength/time-course, strength/methods, hypertrophy/measurement | 2, 5 |
| [`dankel-2020`](sources/dankel-2020.yml) | 2020 | rct | abstract | strength/specificity, strength/cross-education, strength/hypertrophy-strength | 2 |
| [`davidson-2025-rest-preprint`](sources/davidson-2025-rest-preprint.yml) | 2025 | preprint | abstract | strength/rest-interval, hypertrophy/rest-interval | 3 |
| [`del-vecchio-2019`](sources/del-vecchio-2019.yml) | 2019 | rct | abstract | strength/neural-adaptations, strength/motor-units, strength/time-course | 2 |
| [`del-vecchio-2026`](sources/del-vecchio-2026.yml) | 2026 | other | abstract | strength/methods, strength/motor-units | 2 |
| [`elgueta-cancino-2022`](sources/elgueta-cancino-2022.yml) | 2022 | meta-analysis | full-text | strength/motor-units, strength/methods | 2 |
| [`erskine-2010`](sources/erskine-2010.yml) | 2010 | other | abstract | strength/morphology, strength/specific-tension | 2 |
| [`erskine-2011`](sources/erskine-2011.yml) | 2011 | other | abstract | strength/morphology, strength/specific-tension, strength/fibre-type | 2 |
| [`fling-2009`](sources/fling-2009.yml) | 2009 | cross-sectional | abstract | strength/motor-units, strength/neural-adaptations | 2 |
| [`folland-2007`](sources/folland-2007.yml) | 2007 | narrative-review | abstract | strength/neural-adaptations, strength/morphology, strength/time-course | 2 |
| [`folland-2021`](sources/folland-2021.yml) | 2021 | other | secondary | strength/hypertrophy-strength | 2 |
| [`glover-2020`](sources/glover-2020.yml) | 2020 | mechanistic | abstract | strength/reticulospinal, strength/neural-adaptations | 2 |
| [`glover-2022`](sources/glover-2022.yml) | 2022 | mechanistic | abstract | strength/reticulospinal | 2 |
| [`gomez-feria-2023`](sources/gomez-feria-2023.yml) | 2023 | meta-analysis | abstract | strength/corticospinal, strength/neural-adaptations | 2 |
| [`grgic-2018-frequency-strength`](sources/grgic-2018-frequency-strength.yml) | 2018 | meta-analysis | abstract | strength/frequency | 3 |
| [`grgic-2018-rest-strength`](sources/grgic-2018-rest-strength.yml) | 2018 | systematic-review | abstract | strength/rest-interval | 3 |
| [`grgic-2022-failure`](sources/grgic-2022-failure.yml) | 2022 | meta-analysis | abstract | strength/proximity-to-failure, hypertrophy/proximity-to-failure | 3 |
| [`hakkinen-1988`](sources/hakkinen-1988.yml) | 1988 | cohort | abstract | strength/training-age | 2 |
| [`hammert-2026-nonspecific-strength`](sources/hammert-2026-nonspecific-strength.yml) | 2026 | meta-analysis | full-text | strength/load, mechanisms/specificity, strength/specificity | 2, 3 |
| [`haun-2019`](sources/haun-2019.yml) | 2019 | other | abstract | strength/morphology, strength/hypertrophy-strength, hypertrophy/mechanisms | 2, 5 |
| [`heidel-2022`](sources/heidel-2022.yml) | 2022 | meta-analysis | abstract | strength/specificity | 2 |
| [`hernando-garijo-2026`](sources/hernando-garijo-2026.yml) | 2026 | meta-analysis | abstract | strength/cross-education | 2 |
| [`hortobagyi-2021`](sources/hortobagyi-2021.yml) | 2021 | systematic-review | abstract | strength/neural-adaptations, strength/methods | 2 |
| [`inubashiri-2026`](sources/inubashiri-2026.yml) | 2026 | cross-sectional | abstract | strength/reticulospinal, strength/specificity | 2 |
| [`iversen-2021-time-efficient`](sources/iversen-2021-time-efficient.yml) | 2021 | narrative-review | abstract | strength/minimum-dose, hypertrophy/volume | 3 |
| [`jenkins-2017`](sources/jenkins-2017.yml) | 2017 | rct | full-text | strength/neural-adaptations, strength/specificity, strength/load | 2 |
| [`jukic-2023-velocity-loss`](sources/jukic-2023-velocity-loss.yml) | 2023 | meta-analysis | full-text | strength/proximity-to-failure, hypertrophy/proximity-to-failure, programming/autoregulation, strength/velocity-based-training, technology/velocity-based-training | 3, 4 |
| [`kassiano-2025-unilateral`](sources/kassiano-2025-unilateral.yml) | 2025 | meta-analysis | abstract | strength/specificity | 2 |
| [`kassiano-2026-mediation`](sources/kassiano-2026-mediation.yml) | 2026 | rct | abstract | strength/hypertrophy-strength | 2 |
| [`kidgell-2017`](sources/kidgell-2017.yml) | 2017 | meta-analysis | abstract | strength/corticospinal, strength/neural-adaptations | 2 |
| [`lecce-2024`](sources/lecce-2024.yml) | 2024 | rct | abstract | strength/cross-education, strength/motor-units | 2 |
| [`lecce-2026-preprint`](sources/lecce-2026-preprint.yml) | 2026 | preprint | abstract | strength/motor-units, strength/cross-education | 2 |
| [`li-2026-corticospinal`](sources/li-2026-corticospinal.yml) | 2026 | meta-analysis | abstract | strength/corticospinal, strength/neural-adaptations | 2 |
| [`loenneke-2019-mehy`](sources/loenneke-2019-mehy.yml) | 2019 | other | abstract | strength/hypertrophy-strength | 2 |
| [`loenneke-2019-sportsmed`](sources/loenneke-2019-sportsmed.yml) | 2019 | other | secondary | strength/hypertrophy-strength | 2 |
| [`lopez-2021-load`](sources/lopez-2021-load.yml) | 2021 | meta-analysis | full-text | strength/load, hypertrophy/load, strength/specificity | 2, 3, 12 |
| [`maden-wilkinson-2020`](sources/maden-wilkinson-2020.yml) | 2020 | cross-sectional | full-text | strength/hypertrophy-strength, strength/morphology, strength/training-age, strength/specific-tension | 2 |
| [`manca-2017`](sources/manca-2017.yml) | 2017 | meta-analysis | abstract | strength/cross-education | 2 |
| [`manca-2021`](sources/manca-2021.yml) | 2021 | consensus | abstract | strength/cross-education | 2 |
| [`marques-2025`](sources/marques-2025.yml) | 2025 | other | full-text | strength/hypertrophy-strength, strength/methods | 2 |
| [`mattocks-2017-practice-test`](sources/mattocks-2017-practice-test.yml) | 2017 | rct | abstract | strength/load, strength/minimum-dose, mechanisms/specificity, strength/specificity, strength/hypertrophy-strength | 2, 3, 4 |
| [`mcmahon-2014-rom`](sources/mcmahon-2014-rom.yml) | 2014 | rct | abstract | strength/range-of-motion, hypertrophy/architecture, mobility/detraining | 7 |
| [`moritani-1979`](sources/moritani-1979.yml) | 1979 | other | abstract | strength/time-course, strength/neural-adaptations | 2 |
| [`mpampoulis-2025-reduced-frequency`](sources/mpampoulis-2025-reduced-frequency.yml) | 2025 | rct | full-text | strength/maintenance, hypertrophy/maintenance | 3 |
| [`noorkoiv-2014-isometric-angle`](sources/noorkoiv-2014-isometric-angle.yml) | 2014 | rct | abstract | strength/joint-angle, strength/isometric, mobility/mechanisms | 7 |
| [`nuzzo-2017`](sources/nuzzo-2017.yml) | 2017 | rct | abstract | strength/corticospinal, strength/neural-adaptations | 2 |
| [`olmos-2026`](sources/olmos-2026.yml) | 2026 | other | abstract | strength/motor-units, strength/hypertrophy-strength | 2 |
| [`oranchuk-2019`](sources/oranchuk-2019.yml) | 2019 | systematic-review | abstract | strength/specificity, strength/joint-angle, hypertrophy/isometric, hypertrophy/muscle-length, mobility/end-range-isometrics | 2, 5, 7 |
| [`pallares-2021`](sources/pallares-2021.yml) | 2021 | meta-analysis | abstract | strength/specificity, strength/range-of-motion, hypertrophy/range-of-motion | 2 |
| [`pearcey-2021`](sources/pearcey-2021.yml) | 2021 | narrative-review | abstract | strength/time-course, strength/training-age, strength/neural-adaptations | 2 |
| [`pelland-2026-volume-frequency`](sources/pelland-2026-volume-frequency.yml) | 2026 | meta-analysis | full-text | strength/volume, hypertrophy/volume, strength/frequency, hypertrophy/frequency, strength/minimum-dose, strength/hypertrophy-strength, strength/specificity, frontiers/frontier-trials | 2, 3, 12 |
| [`pinto-2012-rom`](sources/pinto-2012-rom.yml) | 2012 | rct | abstract | strength/range-of-motion, hypertrophy/range-of-motion | 7 |
| [`plotkin-2021`](sources/plotkin-2021.yml) | 2021 | narrative-review | abstract | strength/fibre-type, strength/morphology | 2 |
| [`ralston-2017-volume-strength`](sources/ralston-2017-volume-strength.yml) | 2017 | meta-analysis | abstract | strength/volume | 3 |
| [`rantila-2025`](sources/rantila-2025.yml) | 2025 | other | full-text | strength/hypertrophy-strength, strength/methods, frontiers/individual-response | 2, 11 |
| [`refalo-2023-failure-fatigue`](sources/refalo-2023-failure-fatigue.yml) | 2023 | crossover | full-text | strength/proximity-to-failure, recovery/fatigue | 3 |
| [`reggiani-2020`](sources/reggiani-2020.yml) | 2020 | narrative-review | abstract | strength/hypertrophy-strength, strength/specific-tension | 2 |
| [`robinson-2024-proximity-failure`](sources/robinson-2024-proximity-failure.yml) | 2024 | meta-analysis | full-text | strength/proximity-to-failure, hypertrophy/proximity-to-failure | 3, 4, 12 |
| [`roig-2009`](sources/roig-2009.yml) | 2009 | meta-analysis | abstract | strength/specificity, strength/contraction-type, hypertrophy/eccentric, hypertrophy/contraction-type | 2, 5 |
| [`ruple-2023`](sources/ruple-2023.yml) | 2023 | rct | abstract | strength/motor-units, strength/training-age | 2 |
| [`rutherford-1986`](sources/rutherford-1986.yml) | 1986 | other | abstract | strength/specificity, strength/neural-adaptations | 2 |
| [`saeterbakken-2025`](sources/saeterbakken-2025.yml) | 2025 | meta-analysis | full-text | strength/specificity, strength/joint-angle | 2 |
| [`santos-2023`](sources/santos-2023.yml) | 2023 | systematic-review | abstract | strength/training-age, strength/neural-adaptations, strength/antagonist-coactivation | 2 |
| [`schoenfeld-2016-rest`](sources/schoenfeld-2016-rest.yml) | 2016 | rct | abstract | strength/rest-interval, hypertrophy/rest-interval | 3 |
| [`schoenfeld-2017-load`](sources/schoenfeld-2017-load.yml) | 2017 | meta-analysis | abstract | strength/load, hypertrophy/load | 3 |
| [`schoenfeld-2020-rom-review`](sources/schoenfeld-2020-rom-review.yml) | 2020 | systematic-review | full-text | strength/range-of-motion, hypertrophy/range-of-motion | — |
| [`seynnes-2007`](sources/seynnes-2007.yml) | 2007 | other | abstract | strength/time-course, strength/morphology | 2 |
| [`siddique-2020`](sources/siddique-2020.yml) | 2020 | meta-analysis | abstract | strength/neural-adaptations, strength/corticospinal | 2 |
| [`siddique-2026`](sources/siddique-2026.yml) | 2026 | other | abstract | strength/reticulospinal, strength/corticospinal | 2 |
| [`skarabot-2021-emg`](sources/skarabot-2021-emg.yml) | 2021 | cross-sectional | abstract | strength/neural-adaptations, strength/methods, strength/training-age | 2 |
| [`skarabot-2021-review`](sources/skarabot-2021-review.yml) | 2021 | narrative-review | full-text | strength/neural-adaptations, strength/methods, strength/corticospinal, strength/reticulospinal | 2 |
| [`skarabot-2024`](sources/skarabot-2024.yml) | 2024 | cross-sectional | full-text | strength/motor-units, strength/training-age, strength/rate-of-force-development | 2 |
| [`spiering-2021-maintenance`](sources/spiering-2021-maintenance.yml) | 2021 | narrative-review | abstract | strength/maintenance, hypertrophy/maintenance | 3, 4 |
| [`steele-2023-minimal-dose-longitudinal`](sources/steele-2023-minimal-dose-longitudinal.yml) | 2023 | cohort | abstract | strength/minimum-dose, frontiers/ageing | 3 |
| [`swinton-2024-dose-response`](sources/swinton-2024-dose-response.yml) | 2024 | meta-analysis | full-text | strength/load, strength/volume, strength/frequency, frontiers/sex-differences | 3, 11 |
| [`taber-2019`](sources/taber-2019.yml) | 2019 | other | secondary | strength/hypertrophy-strength | 2 |
| [`tanel-2025`](sources/tanel-2025.yml) | 2025 | cross-sectional | full-text | strength/reticulospinal, strength/corticospinal, strength/training-age | 2 |
| [`tao-2026-frequency`](sources/tao-2026-frequency.yml) | 2026 | meta-analysis | abstract | strength/frequency, hypertrophy/frequency | 3 |
| [`valamatos-2018-rom`](sources/valamatos-2018-rom.yml) | 2018 | rct | abstract | strength/range-of-motion, strength/joint-angle, hypertrophy/architecture | — |
| [`vigotsky-2018`](sources/vigotsky-2018.yml) | 2018 | other | abstract | strength/hypertrophy-strength, strength/methods | 2 |
| [`wu-2026-non-failure`](sources/wu-2026-non-failure.yml) | 2026 | meta-analysis | abstract | strength/proximity-to-failure, hypertrophy/proximity-to-failure | 3 |

## programming

64 records.

| Record | Year | Design | Read level | Topics | Chapters |
|---|---:|---|---|---|---|
| [`afonso-2019-periodization-meta`](sources/afonso-2019-periodization-meta.yml) | 2019 | systematic-review | full-text | programming/periodization, programming/critique | 4 |
| [`afonso-2020-nonlinear-periodization`](sources/afonso-2020-nonlinear-periodization.yml) | 2020 | narrative-review | abstract | programming/periodization, programming/critique | — |
| [`androulakis-korakakis-2018-daily-max`](sources/androulakis-korakakis-2018-daily-max.yml) | 2018 | cohort | abstract | programming/autoregulation, programming/periodization, strength/minimal-dose | — |
| [`bartolomei-2014-block`](sources/bartolomei-2014-block.yml) | 2014 | rct | abstract | programming/periodization, strength/periodization | — |
| [`bartolomei-2023-mixed-block`](sources/bartolomei-2023-mixed-block.yml) | 2023 | rct | abstract | programming/periodization, strength/periodization | 4 |
| [`bell-2022-deload-coaches`](sources/bell-2022-deload-coaches.yml) | 2022 | other | abstract | programming/deload, practice/surveys | — |
| [`bell-2023-deload-delphi`](sources/bell-2023-deload-delphi.yml) | 2023 | consensus | full-text | programming/deload, consensus/guidelines | 4 |
| [`bosquet-2007-taper`](sources/bosquet-2007-taper.yml) | 2007 | meta-analysis | abstract | programming/taper | 4 |
| [`buckner-2017-gas`](sources/buckner-2017-gas.yml) | 2017 | narrative-review | abstract | programming/periodization, programming/critique | 4 |
| [`burke-2023-cessation`](sources/burke-2023-cessation.yml) | 2023 | rct | abstract | programming/taper | 4 |
| [`coleman-2024-deload`](sources/coleman-2024-deload.yml) | 2024 | rct | full-text | programming/deload, strength/detraining | 4 |
| [`colquhoun-2017-fdup`](sources/colquhoun-2017-fdup.yml) | 2017 | rct | abstract | programming/autoregulation, programming/periodization | 4 |
| [`cunanan-2018-gas`](sources/cunanan-2018-gas.yml) | 2018 | narrative-review | abstract | programming/periodization, programming/critique | 4 |
| [`de-marco-2024-deload-coaches`](sources/de-marco-2024-deload-coaches.yml) | 2024 | cross-sectional | abstract | programming/deload, practice/surveys | — |
| [`droguett-2025-rir-experience`](sources/droguett-2025-rir-experience.yml) | 2025 | cross-sectional | abstract | programming/autoregulation, effort/rir-accuracy | — |
| [`enes-2026-volume-progression`](sources/enes-2026-volume-progression.yml) | 2026 | rct | abstract | programming/progression, hypertrophy/volume, strength/volume | — |
| [`gonzalez-rave-2022-reverse`](sources/gonzalez-rave-2022-reverse.yml) | 2022 | systematic-review | full-text | programming/periodization | 4 |
| [`graham-2021-rir-autoregulation`](sources/graham-2021-rir-autoregulation.yml) | 2021 | rct | full-text | programming/autoregulation, methods/rpe-rir | 4 |
| [`grgic-2017-lp-dup-hypertrophy`](sources/grgic-2017-lp-dup-hypertrophy.yml) | 2017 | meta-analysis | full-text | programming/periodization, hypertrophy/periodization | 4 |
| [`grgic-2017-taper-croatia`](sources/grgic-2017-taper-croatia.yml) | 2017 | other | abstract | programming/taper, practice/surveys | — |
| [`harries-2015-linear-undulating`](sources/harries-2015-linear-undulating.yml) | 2015 | meta-analysis | abstract | programming/periodization, strength/periodization | 4 |
| [`held-2022-vbt-nma`](sources/held-2022-vbt-nma.yml) | 2022 | meta-analysis | abstract | programming/autoregulation, strength/velocity-based-training, technology/velocity-based-training | — |
| [`helms-2018-rpe-percentage`](sources/helms-2018-rpe-percentage.yml) | 2018 | rct | full-text | programming/autoregulation, methods/rpe-rir | 4 |
| [`helms-2018-rpe-volume`](sources/helms-2018-rpe-volume.yml) | 2018 | crossover | abstract | programming/autoregulation, methods/rpe-rir | — |
| [`hickmott-2022-autoregulation`](sources/hickmott-2022-autoregulation.yml) | 2022 | meta-analysis | full-text | programming/autoregulation, strength/velocity-based-training, hypertrophy/proximity-to-failure | 4 |
| [`huang-2025-autoregulation-nma`](sources/huang-2025-autoregulation-nma.yml) | 2025 | meta-analysis | full-text | programming/autoregulation, strength/velocity-based-training | 4 |
| [`kataoka-2021-periodization-definition`](sources/kataoka-2021-periodization-definition.yml) | 2021 | narrative-review | abstract | programming/periodization, programming/critique | 4 |
| [`kataoka-2022-fatigue-accumulation`](sources/kataoka-2022-fatigue-accumulation.yml) | 2022 | narrative-review | abstract | programming/deload, recovery/fatigue | 4 |
| [`kiely-2012-periodization`](sources/kiely-2012-periodization.yml) | 2012 | narrative-review | abstract | programming/periodization, programming/critique | — |
| [`kiely-2018-periodization`](sources/kiely-2018-periodization.yml) | 2018 | narrative-review | full-text | programming/periodization, programming/critique | 4 |
| [`larsen-2021-autoregulation`](sources/larsen-2021-autoregulation.yml) | 2021 | systematic-review | abstract | programming/autoregulation | — |
| [`liao-2021-vbt`](sources/liao-2021-vbt.yml) | 2021 | meta-analysis | abstract | programming/autoregulation, strength/velocity-based-training | — |
| [`mann-2010-apre`](sources/mann-2010-apre.yml) | 2010 | cohort | abstract | programming/autoregulation | — |
| [`mansfield-2020-rir-accuracy`](sources/mansfield-2020-rir-accuracy.yml) | 2020 | crossover | abstract | programming/autoregulation, effort/rir-accuracy | 4 |
| [`micke-2026-block-hift`](sources/micke-2026-block-hift.yml) | 2026 | crossover | abstract | programming/periodization, strength/periodization | 4 |
| [`moesgaard-2022-periodization`](sources/moesgaard-2022-periodization.yml) | 2022 | meta-analysis | abstract | programming/periodization, strength/periodization, hypertrophy/periodization | 4 |
| [`myrholt-2023-velocity-loss`](sources/myrholt-2023-velocity-loss.yml) | 2023 | rct | abstract | programming/autoregulation, strength/velocity-based-training | — |
| [`ogasawara-2013-periodic`](sources/ogasawara-2013-periodic.yml) | 2013 | rct | abstract | programming/deload, strength/detraining | — |
| [`orange-2022-vbt`](sources/orange-2022-vbt.yml) | 2022 | meta-analysis | abstract | programming/autoregulation, strength/velocity-based-training, technology/velocity-based-training | 4 |
| [`painter-2012-block-dup`](sources/painter-2012-block-dup.yml) | 2012 | rct | abstract | programming/periodization, strength/periodization | — |
| [`pancar-2026-deload`](sources/pancar-2026-deload.yml) | 2026 | rct | full-text | programming/deload | 4 |
| [`pareja-blanco-2017-velocity-loss`](sources/pareja-blanco-2017-velocity-loss.yml) | 2017 | rct | abstract | programming/autoregulation, strength/velocity-based-training, strength/proximity-to-failure | — |
| [`pareja-blanco-2020-velocity-loss`](sources/pareja-blanco-2020-velocity-loss.yml) | 2020 | rct | abstract | programming/autoregulation, strength/velocity-based-training, strength/proximity-to-failure | — |
| [`pareja-blanco-2026-intensity-velocity-loss`](sources/pareja-blanco-2026-intensity-velocity-loss.yml) | 2026 | rct | abstract | programming/autoregulation, strength/velocity-based-training, strength/load | 4 |
| [`prestes-2009-reverse`](sources/prestes-2009-reverse.yml) | 2009 | rct | abstract | programming/periodization, strength/periodization | — |
| [`pritchard-2016-taper-practices`](sources/pritchard-2016-taper-practices.yml) | 2016 | other | abstract | programming/taper, practice/surveys | — |
| [`pritchard-2018-training-cessation`](sources/pritchard-2018-training-cessation.yml) | 2018 | crossover | abstract | programming/taper | — |
| [`pritchard-2019-taper-intensity`](sources/pritchard-2019-taper-intensity.yml) | 2019 | crossover | abstract | programming/taper | — |
| [`puschkasch-mock-2026-power-phase`](sources/puschkasch-mock-2026-power-phase.yml) | 2026 | other | abstract | programming/periodization, strength/periodization | 4 |
| [`rhea-2002-dup`](sources/rhea-2002-dup.yml) | 2002 | rct | abstract | programming/periodization, strength/periodization | — |
| [`rhea-2004-periodization-ma`](sources/rhea-2004-periodization-ma.yml) | 2004 | meta-analysis | abstract | programming/periodization, strength/periodization | — |
| [`rogerson-2024-deload-survey`](sources/rogerson-2024-deload-survey.yml) | 2024 | cross-sectional | full-text | programming/deload, practice/surveys | 4 |
| [`stone-2021-block-periodization`](sources/stone-2021-block-periodization.yml) | 2021 | narrative-review | abstract | programming/periodization, programming/critique | 4 |
| [`travis-2020-taper-review`](sources/travis-2020-taper-review.yml) | 2020 | systematic-review | full-text | programming/taper, strength/detraining | 4 |
| [`travis-2021-step-exponential`](sources/travis-2021-step-exponential.yml) | 2021 | rct | abstract | programming/taper | — |
| [`travis-2021-taper-survey`](sources/travis-2021-taper-survey.yml) | 2021 | cross-sectional | abstract | programming/taper, practice/surveys | — |
| [`wang-2026-vbt`](sources/wang-2026-vbt.yml) | 2026 | meta-analysis | full-text | programming/autoregulation, strength/velocity-based-training, technology/velocity-based-training | 4, 11 |
| [`williams-2017-periodization`](sources/williams-2017-periodization.yml) | 2017 | meta-analysis | full-text | programming/periodization, strength/periodization | 4 |
| [`winwood-2018-strongman-taper`](sources/winwood-2018-strongman-taper.yml) | 2018 | cross-sectional | abstract | programming/taper, practice/surveys | — |
| [`winwood-2026-taper-sr`](sources/winwood-2026-taper-sr.yml) | 2026 | systematic-review | full-text | programming/taper, practice/surveys | 4 |
| [`zhang-2021-autoregulation`](sources/zhang-2021-autoregulation.yml) | 2021 | meta-analysis | full-text | programming/autoregulation | 4 |
| [`zhang-2022-vbt-percentage`](sources/zhang-2022-vbt-percentage.yml) | 2022 | meta-analysis | abstract | programming/autoregulation, strength/velocity-based-training | — |
| [`zhang-2026-lp-up`](sources/zhang-2026-lp-up.yml) | 2026 | meta-analysis | full-text | programming/periodization, strength/periodization | 4 |
| [`zourdos-2016-dup-powerlifters`](sources/zourdos-2016-dup-powerlifters.yml) | 2016 | rct | abstract | programming/periodization, strength/periodization | — |

## connective-tissue

62 records.

| Record | Year | Design | Read level | Topics | Chapters |
|---|---:|---|---|---|---|
| [`alentorn-geli-2017-running-oa`](sources/alentorn-geli-2017-running-oa.yml) | 2017 | meta-analysis | abstract | connective-tissue/cartilage | 8 |
| [`arampatzis-2007-strain-magnitude`](sources/arampatzis-2007-strain-magnitude.yml) | 2007 | rct | abstract | connective-tissue/tendon, connective-tissue/loading-parameters | 8 |
| [`aussieker-2023-collagen-mps`](sources/aussieker-2023-collagen-mps.yml) | 2023 | rct | abstract | connective-tissue/collagen-supplement | — |
| [`balshaw-2023-collagen-peptides`](sources/balshaw-2023-collagen-peptides.yml) | 2023 | rct | abstract | connective-tissue/collagen-supplement, connective-tissue/tendon | 8 |
| [`belavy-2017-running-disc`](sources/belavy-2017-running-disc.yml) | 2017 | cross-sectional | full-text | connective-tissue/disc | 8 |
| [`bischof-2024-collagen-meta`](sources/bischof-2024-collagen-meta.yml) | 2024 | meta-analysis | full-text | connective-tissue/collagen-supplement | 8 |
| [`bohm-2014-strain-rate-duration`](sources/bohm-2014-strain-rate-duration.yml) | 2014 | rct | abstract | connective-tissue/tendon, connective-tissue/loading-parameters | 8 |
| [`bohm-2015-tendon-meta`](sources/bohm-2015-tendon-meta.yml) | 2015 | meta-analysis | full-text | connective-tissue/tendon, connective-tissue/loading-parameters | 8 |
| [`bricca-2019-exercise-cartilage`](sources/bricca-2019-exercise-cartilage.yml) | 2019 | systematic-review | abstract | connective-tissue/cartilage | — |
| [`buchalski-2026-collagen-review`](sources/buchalski-2026-collagen-review.yml) | 2026 | systematic-review | abstract | connective-tissue/collagen-supplement | — |
| [`challoumas-2023-tendinopathy-nma`](sources/challoumas-2023-tendinopathy-nma.yml) | 2023 | meta-analysis | full-text | connective-tissue/tendinopathy-isometrics | — |
| [`clifford-2020-isometric-meta`](sources/clifford-2020-isometric-meta.yml) | 2020 | meta-analysis | full-text | connective-tissue/tendinopathy-isometrics | — |
| [`couppe-2008-habitual-loading`](sources/couppe-2008-habitual-loading.yml) | 2008 | cross-sectional | abstract | connective-tissue/tendon, connective-tissue/time-course | — |
| [`eckstein-2006-cartilage`](sources/eckstein-2006-cartilage.yml) | 2006 | narrative-review | abstract | connective-tissue/cartilage | 8 |
| [`fu-2026-achilles-nma`](sources/fu-2026-achilles-nma.yml) | 2026 | meta-analysis | abstract | connective-tissue/tendon, connective-tissue/loading-parameters | — |
| [`gratzke-2007-cartilage-weightlifters`](sources/gratzke-2007-cartilage-weightlifters.yml) | 2007 | cross-sectional | abstract | connective-tissue/cartilage | 8 |
| [`grzelak-2012-cruciate`](sources/grzelak-2012-cruciate.yml) | 2012 | cross-sectional | full-text | connective-tissue/ligament | 8 |
| [`heinemeier-2013-tendon-14c`](sources/heinemeier-2013-tendon-14c.yml) | 2013 | mechanistic | full-text | connective-tissue/tendon, connective-tissue/time-course | 8 |
| [`heinemeier-2016-cartilage-14c`](sources/heinemeier-2016-cartilage-14c.yml) | 2016 | mechanistic | abstract | connective-tissue/cartilage, connective-tissue/time-course | 8 |
| [`heinemeier-2018-tendinopathy-14c`](sources/heinemeier-2018-tendinopathy-14c.yml) | 2018 | mechanistic | abstract | connective-tissue/tendon, connective-tissue/time-course | — |
| [`heinonen-2002-female-weightlifters`](sources/heinonen-2002-female-weightlifters.yml) | 2002 | cross-sectional | abstract | connective-tissue/bone | 8 |
| [`holden-2020-isometric`](sources/holden-2020-isometric.yml) | 2020 | crossover | full-text | connective-tissue/tendinopathy-isometrics | — |
| [`houtvast-2026-tissue-protein-synthesis`](sources/houtvast-2026-tissue-protein-synthesis.yml) | 2026 | rct | full-text | connective-tissue/time-course, connective-tissue/collagen-supplement, connective-tissue/ligament | 8 |
| [`jerger-2022-collagen-achilles`](sources/jerger-2022-collagen-achilles.yml) | 2022 | rct | abstract | connective-tissue/collagen-supplement, connective-tissue/tendon | 8 |
| [`jerger-2023-collagen-patellar`](sources/jerger-2023-collagen-patellar.yml) | 2023 | rct | abstract | connective-tissue/collagen-supplement, connective-tissue/tendon | 8 |
| [`jones-2026-bmd-women`](sources/jones-2026-bmd-women.yml) | 2026 | meta-analysis | abstract | connective-tissue/bone | 8 |
| [`kubo-2010-time-course`](sources/kubo-2010-time-course.yml) | 2010 | cohort | abstract | connective-tissue/tendon, connective-tissue/time-course | 8 |
| [`langberg-1999-peritendinous-collagen`](sources/langberg-1999-peritendinous-collagen.yml) | 1999 | mechanistic | abstract | connective-tissue/tendon, connective-tissue/time-course | 8 |
| [`lazarczuk-2022-tendon-meta`](sources/lazarczuk-2022-tendon-meta.yml) | 2022 | meta-analysis | full-text | connective-tissue/tendon, connective-tissue/loading-parameters | 8 |
| [`lee-2024-collagen-dose`](sources/lee-2024-collagen-dose.yml) | 2024 | crossover | full-text | connective-tissue/collagen-supplement | 8 |
| [`lee-2025-collagen-female-soccer`](sources/lee-2025-collagen-female-soccer.yml) | 2025 | rct | full-text | connective-tissue/collagen-supplement, connective-tissue/tendon | 8 |
| [`lis-2019-collagen-derivatives`](sources/lis-2019-collagen-derivatives.yml) | 2019 | crossover | abstract | connective-tissue/collagen-supplement | 8 |
| [`lis-2022-collagen-rfd`](sources/lis-2022-collagen-rfd.yml) | 2022 | rct | abstract | connective-tissue/collagen-supplement | — |
| [`mages-2021-bmd-men`](sources/mages-2021-bmd-men.yml) | 2021 | meta-analysis | abstract | connective-tissue/bone | — |
| [`magnusson-2010-tendinopathy-loading`](sources/magnusson-2010-tendinopathy-loading.yml) | 2010 | narrative-review | abstract | connective-tissue/tendon, connective-tissue/time-course | 8 |
| [`martyn-st-james-2006-rt-bmd`](sources/martyn-st-james-2006-rt-bmd.yml) | 2006 | meta-analysis | abstract | connective-tissue/bone | 8 |
| [`massey-2018-tendinous-long-term`](sources/massey-2018-tendinous-long-term.yml) | 2018 | cross-sectional | abstract | connective-tissue/tendon, connective-tissue/time-course | 8 |
| [`mersmann-2023-tendon-strain-risk`](sources/mersmann-2023-tendon-strain-risk.yml) | 2023 | cohort | abstract | connective-tissue/tendon, injury/tendon-risk | — |
| [`miller-2005-tendon-collagen-synthesis`](sources/miller-2005-tendon-collagen-synthesis.yml) | 2005 | mechanistic | abstract | connective-tissue/tendon, connective-tissue/time-course | 8 |
| [`miller-2007-tendon-collagen-women`](sources/miller-2007-tendon-collagen-women.yml) | 2007 | mechanistic | abstract | connective-tissue/tendon, connective-tissue/time-course | — |
| [`miyamoto-2025-collagen-stiffness`](sources/miyamoto-2025-collagen-stiffness.yml) | 2025 | rct | abstract | connective-tissue/collagen-supplement, connective-tissue/tendon | — |
| [`neason-2025-asteroid`](sources/neason-2025-asteroid.yml) | 2025 | rct | abstract | connective-tissue/disc | — |
| [`nulty-2025-collagen-female-masters`](sources/nulty-2025-collagen-female-masters.yml) | 2025 | rct | abstract | connective-tissue/collagen-supplement, connective-tissue/tendon | — |
| [`nulty-2025-collagen-middle-aged`](sources/nulty-2025-collagen-middle-aged.yml) | 2025 | rct | full-text | connective-tissue/collagen-supplement, connective-tissue/tendon | 8 |
| [`owen-2020-disc-rct`](sources/owen-2020-disc-rct.yml) | 2020 | rct | abstract | connective-tissue/disc | — |
| [`owen-2021-athletes-disc`](sources/owen-2021-athletes-disc.yml) | 2021 | cross-sectional | abstract | connective-tissue/disc | — |
| [`pang-2026-strength-stiffness`](sources/pang-2026-strength-stiffness.yml) | 2026 | meta-analysis | full-text | connective-tissue/tendon, connective-tissue/time-course | 8 |
| [`paxton-2012-intermittent-stretch`](sources/paxton-2012-intermittent-stretch.yml) | 2012 | mechanistic | abstract | connective-tissue/short-bout-loading, connective-tissue/ligament | 8 |
| [`rio-2015-isometric`](sources/rio-2015-isometric.yml) | 2015 | crossover | abstract | connective-tissue/tendinopathy-isometrics | — |
| [`rio-2017-in-season`](sources/rio-2017-in-season.yml) | 2017 | rct | abstract | connective-tissue/tendinopathy-isometrics | — |
| [`robling-2002-short-bouts`](sources/robling-2002-short-bouts.yml) | 2002 | mechanistic | abstract | connective-tissue/bone, connective-tissue/short-bout-loading | 8 |
| [`samanna-2026-asteroid-disc`](sources/samanna-2026-asteroid-disc.yml) | 2026 | rct | abstract | connective-tissue/disc | — |
| [`samanna-2026-disc-meta`](sources/samanna-2026-disc-meta.yml) | 2026 | meta-analysis | full-text | connective-tissue/disc | 8 |
| [`seynnes-2009-patellar-tendon`](sources/seynnes-2009-patellar-tendon.yml) | 2009 | cohort | abstract | connective-tissue/tendon, connective-tissue/time-course | — |
| [`shaw-2017-gelatin`](sources/shaw-2017-gelatin.yml) | 2017 | crossover | full-text | connective-tissue/collagen-supplement | 8 |
| [`tsai-2024-tendon-loading-frequency`](sources/tsai-2024-tendon-loading-frequency.yml) | 2024 | rct | full-text | connective-tissue/tendon, connective-tissue/loading-parameters, connective-tissue/time-course | 8 |
| [`tsuzuku-1998-powerlifters`](sources/tsuzuku-1998-powerlifters.yml) | 1998 | cross-sectional | abstract | connective-tissue/bone | 8 |
| [`videman-1995-athletes-spine`](sources/videman-1995-athletes-spine.yml) | 1995 | cohort | abstract | connective-tissue/disc | 8 |
| [`warden-2021-bone-workload`](sources/warden-2021-bone-workload.yml) | 2021 | narrative-review | full-text | connective-tissue/bone, connective-tissue/short-bout-loading, injury/training-load | 8 |
| [`watson-2018-liftmor`](sources/watson-2018-liftmor.yml) | 2018 | rct | abstract | connective-tissue/bone | 8 |
| [`weidlich-2023-squat-tendon-strain`](sources/weidlich-2023-squat-tendon-strain.yml) | 2023 | cross-sectional | full-text | connective-tissue/tendon, connective-tissue/loading-parameters | 8 |
| [`weidlich-2024-personalized-tendon`](sources/weidlich-2024-personalized-tendon.yml) | 2024 | cohort | full-text | connective-tissue/tendon, connective-tissue/time-course | 8 |

## frontiers

51 records.

| Record | Year | Design | Read level | Topics | Chapters |
|---|---:|---|---|---|---|
| [`ahtiainen-2016`](sources/ahtiainen-2016.yml) | 2016 | cohort | abstract | frontiers/individual-response, frontiers/ageing, frontiers/sex-differences | 11 |
| [`atkinson-2015`](sources/atkinson-2015.yml) | 2015 | other | abstract | frontiers/individual-response, methods/statistics | 11 |
| [`atkinson-2019`](sources/atkinson-2019.yml) | 2019 | other | abstract | frontiers/individual-response, methods/statistics | 11 |
| [`bamman-2007-cluster`](sources/bamman-2007-cluster.yml) | 2007 | cohort | abstract | frontiers/individual-response, frontiers/genetics-omics | — |
| [`bergamasco-2024-androgen-receptor`](sources/bergamasco-2024-androgen-receptor.yml) | 2024 | cohort | abstract | frontiers/individual-response, frontiers/sex-differences, hypertrophy/mechanisms | 11 |
| [`borde-2015-older-dose`](sources/borde-2015-older-dose.yml) | 2015 | meta-analysis | full-text | frontiers/ageing, strength/dose-response | 11 |
| [`chaves-2025-within-individual`](sources/chaves-2025-within-individual.yml) | 2025 | other | full-text | frontiers/individual-response, methods/statistics | — |
| [`churchward-venne-2015`](sources/churchward-venne-2015.yml) | 2015 | cohort | abstract | frontiers/individual-response, frontiers/ageing | 11 |
| [`colenso-semple-2023-menstrual`](sources/colenso-semple-2023-menstrual.yml) | 2023 | umbrella-review | full-text | frontiers/menstrual-cycle | 11 |
| [`colenso-semple-2025-mps`](sources/colenso-semple-2025-mps.yml) | 2025 | crossover | full-text | frontiers/menstrual-cycle, hypertrophy/mechanisms | 11 |
| [`damas-2019`](sources/damas-2019.yml) | 2019 | rct | abstract | frontiers/individual-response, hypertrophy/variables | 11 |
| [`dankel-2020-differential-responders`](sources/dankel-2020-differential-responders.yml) | 2020 | other | abstract | frontiers/individual-response, methods/statistics | — |
| [`dsouza-2026-menstrual-rct`](sources/dsouza-2026-menstrual-rct.yml) | 2026 | rct | full-text | frontiers/menstrual-cycle | 11 |
| [`elliott-sale-2020-ocp`](sources/elliott-sale-2020-ocp.yml) | 2020 | meta-analysis | full-text | frontiers/menstrual-cycle, frontiers/hormonal-contraception | 11 |
| [`fragala-2019-nsca`](sources/fragala-2019-nsca.yml) | 2019 | consensus | abstract | frontiers/ageing | — |
| [`fyfe-2022-minimal-dose`](sources/fyfe-2022-minimal-dose.yml) | 2022 | narrative-review | abstract | frontiers/ageing, strength/minimal-dose | 11 |
| [`grgic-2020-very-elderly`](sources/grgic-2020-very-elderly.yml) | 2020 | meta-analysis | abstract | frontiers/ageing | 11 |
| [`grgic-2022-detraining-older`](sources/grgic-2022-detraining-older.yml) | 2022 | meta-analysis | abstract | frontiers/ageing, strength/detraining | 11 |
| [`hecksteden-2015`](sources/hecksteden-2015.yml) | 2015 | other | abstract | frontiers/individual-response, methods/statistics | 11 |
| [`hecksteden-2018`](sources/hecksteden-2018.yml) | 2018 | rct | abstract | frontiers/individual-response, methods/statistics | 11 |
| [`hubal-2005`](sources/hubal-2005.yml) | 2005 | cohort | abstract | frontiers/individual-response, frontiers/sex-differences | 11 |
| [`hunter-2014-fatigability`](sources/hunter-2014-fatigability.yml) | 2014 | narrative-review | abstract | frontiers/sex-differences | — |
| [`izquierdo-2021-icfsr`](sources/izquierdo-2021-icfsr.yml) | 2021 | consensus | abstract | frontiers/ageing | — |
| [`jones-2021-sex-older`](sources/jones-2021-sex-older.yml) | 2021 | meta-analysis | abstract | frontiers/sex-differences, frontiers/ageing | 11 |
| [`kissow-2022-phase-based`](sources/kissow-2022-phase-based.yml) | 2022 | narrative-review | abstract | frontiers/menstrual-cycle | 11 |
| [`latella-2024-powerlifting-age`](sources/latella-2024-powerlifting-age.yml) | 2024 | cohort | abstract | frontiers/ageing, frontiers/sex-differences | 11 |
| [`lesinski-2016-youth`](sources/lesinski-2016-youth.yml) | 2016 | meta-analysis | abstract | frontiers/ageing, frontiers/youth | — |
| [`lixandrao-2024-volume-nonresponders`](sources/lixandrao-2024-volume-nonresponders.yml) | 2024 | rct | abstract | frontiers/individual-response, frontiers/ageing, hypertrophy/volume | 11 |
| [`lixandrao-2025-molecular`](sources/lixandrao-2025-molecular.yml) | 2025 | mechanistic | abstract | frontiers/genetics-omics, frontiers/ageing, frontiers/individual-response | 11 |
| [`lloyd-2014-youth-consensus`](sources/lloyd-2014-youth-consensus.yml) | 2014 | consensus | secondary | frontiers/youth | — |
| [`mcnulty-2020-menstrual`](sources/mcnulty-2020-menstrual.yml) | 2020 | meta-analysis | full-text | frontiers/menstrual-cycle, frontiers/sex-differences | 11 |
| [`morton-2018-androgen-receptor`](sources/morton-2018-androgen-receptor.yml) | 2018 | cohort | abstract | frontiers/individual-response, frontiers/genetics-omics, hypertrophy/mechanisms | 11 |
| [`munteanu-2026-menstrual-vbt`](sources/munteanu-2026-menstrual-vbt.yml) | 2026 | cohort | full-text | frontiers/menstrual-cycle, technology/velocity-based-training | 11 |
| [`niering-2024-menstrual-strength`](sources/niering-2024-menstrual-strength.yml) | 2024 | meta-analysis | abstract | frontiers/menstrual-cycle | 11 |
| [`nolan-2024-contraceptive`](sources/nolan-2024-contraceptive.yml) | 2024 | meta-analysis | full-text | frontiers/hormonal-contraception, frontiers/sex-differences | 11 |
| [`nunes-2024-volume-older-women`](sources/nunes-2024-volume-older-women.yml) | 2024 | meta-analysis | abstract | frontiers/ageing, frontiers/sex-differences, hypertrophy/volume | 11 |
| [`nuzzo-2023-sex-review`](sources/nuzzo-2023-sex-review.yml) | 2023 | narrative-review | abstract | frontiers/sex-differences | 11 |
| [`nuzzo-2024-reps-1rm`](sources/nuzzo-2024-reps-1rm.yml) | 2024 | meta-analysis | abstract | frontiers/sex-differences, strength/load | 11 |
| [`parnell-2026-somatotype`](sources/parnell-2026-somatotype.yml) | 2026 | preprint | abstract | frontiers/individual-response | — |
| [`petrella-2008-satellite`](sources/petrella-2008-satellite.yml) | 2008 | cohort | abstract | frontiers/individual-response, frontiers/genetics-omics, hypertrophy/mechanisms | 11 |
| [`pickering-2019-nonresponders`](sources/pickering-2019-nonresponders.yml) | 2019 | narrative-review | full-text | frontiers/individual-response | — |
| [`refalo-2025-sex`](sources/refalo-2025-sex.yml) | 2025 | meta-analysis | full-text | frontiers/sex-differences, hypertrophy/sex | 11 |
| [`roberts-2020-sex`](sources/roberts-2020-sex.yml) | 2020 | meta-analysis | abstract | frontiers/sex-differences | 11 |
| [`roberts-2026-heterogeneity-conference`](sources/roberts-2026-heterogeneity-conference.yml) | 2026 | consensus | full-text | frontiers/individual-response, frontiers/genetics-omics, frontiers/sex-differences, frontiers/ageing | 11 |
| [`roberts-2026-hypertrophy-trajectory`](sources/roberts-2026-hypertrophy-trajectory.yml) | 2026 | preprint | abstract | frontiers/ageing, frontiers/sex-differences, hypertrophy/time-course | — |
| [`shen-2026-intensity-older`](sources/shen-2026-intensity-older.yml) | 2026 | meta-analysis | abstract | frontiers/ageing, strength/load | 11 |
| [`steele-2023-variation`](sources/steele-2023-variation.yml) | 2023 | meta-analysis | full-text | frontiers/individual-response, methods/statistics | 11 |
| [`swinton-2018-individual-response`](sources/swinton-2018-individual-response.yml) | 2018 | other | full-text | frontiers/individual-response, methods/statistics | 11 |
| [`webborn-2015-genetic-testing`](sources/webborn-2015-genetic-testing.yml) | 2015 | consensus | abstract | frontiers/genetics-omics | 11 |
| [`willems-2017-grip-gwas`](sources/willems-2017-grip-gwas.yml) | 2017 | cohort | abstract | frontiers/genetics-omics | 11 |
| [`yang-2024-gwas`](sources/yang-2024-gwas.yml) | 2024 | cohort | abstract | frontiers/genetics-omics, frontiers/individual-response | 11 |

## flexibility

49 records.

| Record | Year | Design | Read level | Topics | Chapters |
|---|---:|---|---|---|---|
| [`afonso-2021-strength-vs-stretching`](sources/afonso-2021-strength-vs-stretching.yml) | 2021 | meta-analysis | full-text | flexibility/resistance-training-rom, flexibility/resistance-training | 6, 7 |
| [`alizadeh-2023-rt-rom`](sources/alizadeh-2023-rt-rom.yml) | 2023 | meta-analysis | full-text | flexibility/resistance-training-rom, flexibility/resistance-training, mobility/practitioner-systems | 6, 7 |
| [`arntz-2023-chronic-stretching-strength`](sources/arntz-2023-chronic-stretching-strength.yml) | 2023 | meta-analysis | full-text | flexibility/stretch-hypertrophy, flexibility/stretching-modality | 6 |
| [`arntz-2024-stretch-hypertrophy`](sources/arntz-2024-stretch-hypertrophy.yml) | 2024 | meta-analysis | full-text | flexibility/stretch-hypertrophy | 6 |
| [`beedle-2008-stretch-1rm`](sources/beedle-2008-stretch-1rm.yml) | 2008 | crossover | abstract | flexibility/acute-performance | 6 |
| [`behm-2016-acute-stretching`](sources/behm-2016-acute-stretching.yml) | 2016 | systematic-review | abstract | flexibility/acute-performance, injury/stretching | 6 |
| [`behm-2021-stretch-impairment-mechanisms`](sources/behm-2021-stretch-impairment-mechanisms.yml) | 2021 | narrative-review | abstract | flexibility/acute-performance, flexibility/mechanisms | 6 |
| [`behm-2023-acute-rom`](sources/behm-2023-acute-rom.yml) | 2023 | meta-analysis | full-text | flexibility/stretching-modality, flexibility/acute-performance | 6 |
| [`blazevich-2014-plantar-flexor-stretch`](sources/blazevich-2014-plantar-flexor-stretch.yml) | 2014 | mechanistic | full-text | flexibility/mechanisms, flexibility/stiffness | 6 |
| [`blazevich-2018-full-warmup`](sources/blazevich-2018-full-warmup.yml) | 2018 | crossover | full-text | flexibility/acute-performance | 6 |
| [`favro-2025-rt-flexibility`](sources/favro-2025-rt-flexibility.yml) | 2025 | meta-analysis | full-text | flexibility/resistance-training-rom | 6, 7 |
| [`folpp-2006-stretch-tolerance`](sources/folpp-2006-stretch-tolerance.yml) | 2006 | rct | abstract | flexibility/mechanisms | 6 |
| [`freitas-2018-chronic-stretching-mtu`](sources/freitas-2018-chronic-stretching-mtu.yml) | 2018 | meta-analysis | abstract | flexibility/mechanisms, flexibility/stiffness, mobility/mechanisms | 6 |
| [`gergley-2013-squat-stretch`](sources/gergley-2013-squat-stretch.yml) | 2013 | crossover | abstract | flexibility/acute-performance | 6 |
| [`guissard-2004-stretch-training`](sources/guissard-2004-stretch-training.yml) | 2004 | mechanistic | abstract | flexibility/mechanisms, flexibility/stiffness, flexibility/detraining | 6 |
| [`homer-2025-bodybuilder-case`](sources/homer-2025-bodybuilder-case.yml) | 2025 | other | abstract | flexibility/stretch-hypertrophy | 6 |
| [`ingram-2024-stretching-dose`](sources/ingram-2024-stretching-dose.yml) | 2024 | meta-analysis | full-text | flexibility/stretching-dose | 6 |
| [`ingram-2025-stretching-mechanisms`](sources/ingram-2025-stretching-mechanisms.yml) | 2025 | meta-analysis | full-text | flexibility/mechanisms, flexibility/stiffness, mobility/mechanisms | 6 |
| [`kaczorowski-2026-low-volume`](sources/kaczorowski-2026-low-volume.yml) | 2026 | rct | full-text | flexibility/resistance-training-rom, flexibility/stretching-dose | 6 |
| [`kay-2012-acute-static-stretch`](sources/kay-2012-acute-static-stretch.yml) | 2012 | systematic-review | full-text | flexibility/acute-performance | 6 |
| [`kokkonen-2007-chronic-stretching`](sources/kokkonen-2007-chronic-stretching.yml) | 2007 | rct | abstract | flexibility/stretch-hypertrophy | — |
| [`konrad-2014-static-stretching`](sources/konrad-2014-static-stretching.yml) | 2014 | rct | abstract | flexibility/mechanisms | 6 |
| [`konrad-2023-chronic-rom`](sources/konrad-2023-chronic-rom.yml) | 2023 | meta-analysis | full-text | flexibility/stretching-dose, flexibility/stretching-modality, mobility/practitioner-systems | 6, 7 |
| [`konrad-2025-detraining`](sources/konrad-2025-detraining.yml) | 2025 | meta-analysis | full-text | flexibility/detraining, mobility/detraining | 6 |
| [`lima-2026-rom-mechanisms-review`](sources/lima-2026-rom-mechanisms-review.yml) | 2026 | narrative-review | abstract | flexibility/mechanisms | 6 |
| [`luangpon-2026-older-volume`](sources/luangpon-2026-older-volume.yml) | 2026 | rct | abstract | flexibility/stretching-dose, flexibility/stretch-hypertrophy | 6 |
| [`magnusson-1996-flexibility`](sources/magnusson-1996-flexibility.yml) | 1996 | mechanistic | abstract | flexibility/mechanisms | — |
| [`magnusson-1996-stress-relaxation`](sources/magnusson-1996-stress-relaxation.yml) | 1996 | mechanistic | abstract | flexibility/mechanisms, flexibility/stiffness | 6 |
| [`medeiros-2016-hamstring-static`](sources/medeiros-2016-hamstring-static.yml) | 2016 | meta-analysis | abstract | flexibility/stretching-dose | 6 |
| [`molacek-2010-bench-stretch`](sources/molacek-2010-bench-stretch.yml) | 2010 | crossover | abstract | flexibility/acute-performance | 6 |
| [`moltubakk-2021-six-month-stretching`](sources/moltubakk-2021-six-month-stretching.yml) | 2021 | rct | abstract | flexibility/mechanisms, flexibility/stiffness | 6 |
| [`morton-2011-rt-vs-stretching`](sources/morton-2011-rt-vs-stretching.yml) | 2011 | rct | abstract | flexibility/resistance-training-rom, flexibility/resistance-training | — |
| [`murakami-2025-ss-vs-rt`](sources/murakami-2025-ss-vs-rt.yml) | 2025 | rct | abstract | flexibility/stretching, flexibility/resistance-training-rom | 6 |
| [`nuzzo-2020-retiring-flexibility`](sources/nuzzo-2020-retiring-flexibility.yml) | 2020 | narrative-review | abstract | flexibility/resistance-training-rom, consensus/guidelines, mobility/measurement | 7 |
| [`panidi-2021-adolescent-stretching`](sources/panidi-2021-adolescent-stretching.yml) | 2021 | rct | full-text | flexibility/mechanisms, flexibility/stretch-hypertrophy | 6 |
| [`panidi-2023-fascicle-meta`](sources/panidi-2023-fascicle-meta.yml) | 2023 | meta-analysis | full-text | flexibility/mechanisms, flexibility/stretch-hypertrophy, mobility/mechanisms | 6 |
| [`park-2026-ankle-nma`](sources/park-2026-ankle-nma.yml) | 2026 | meta-analysis | abstract | flexibility/stretching-modality | 6 |
| [`siegel-2026-quadriceps-smh`](sources/siegel-2026-quadriceps-smh.yml) | 2026 | rct | abstract | flexibility/stretch-hypertrophy | 6 |
| [`simic-2013-pre-exercise-stretching`](sources/simic-2013-pre-exercise-stretching.yml) | 2013 | meta-analysis | abstract | flexibility/acute-performance | — |
| [`takeuchi-2023-muscle-stiffness`](sources/takeuchi-2023-muscle-stiffness.yml) | 2023 | meta-analysis | abstract | flexibility/mechanisms, flexibility/stiffness | — |
| [`thomas-2018-stretching-typology`](sources/thomas-2018-stretching-typology.yml) | 2018 | meta-analysis | abstract | flexibility/stretching-dose, flexibility/stretching-modality | 6 |
| [`van-every-2022-interset-stretch`](sources/van-every-2022-interset-stretch.yml) | 2022 | rct | abstract | flexibility/stretch-hypertrophy | — |
| [`warneke-2023-long-lasting-stretch-trained`](sources/warneke-2023-long-lasting-stretch-trained.yml) | 2023 | rct | abstract | flexibility/stretch-hypertrophy | 6 |
| [`warneke-2023-stretch-vs-rt`](sources/warneke-2023-stretch-vs-rt.yml) | 2023 | rct | full-text | flexibility/stretch-hypertrophy, mobility/loaded-stretching | 6 |
| [`warneke-2024-force-deficit`](sources/warneke-2024-force-deficit.yml) | 2024 | meta-analysis | full-text | flexibility/acute-performance | 6 |
| [`warneke-2024-passive-properties-recalculation`](sources/warneke-2024-passive-properties-recalculation.yml) | 2024 | meta-analysis | full-text | flexibility/mechanisms, flexibility/stiffness | 6 |
| [`warneke-2024-rt-force-deficit`](sources/warneke-2024-rt-force-deficit.yml) | 2024 | crossover | abstract | flexibility/acute-performance | 6 |
| [`warneke-2025-smh-applications`](sources/warneke-2025-smh-applications.yml) | 2025 | narrative-review | full-text | flexibility/stretch-hypertrophy, mobility/loaded-stretching | — |
| [`weppler-2010-extensibility`](sources/weppler-2010-extensibility.yml) | 2010 | narrative-review | abstract | flexibility/mechanisms, mobility/mechanisms | 6, 7 |

## concurrent

47 records.

| Record | Year | Design | Read level | Topics | Chapters |
|---|---:|---|---|---|---|
| [`apro-2015-ampk`](sources/apro-2015-ampk.yml) | 2015 | crossover | abstract | concurrent/molecular | 9 |
| [`atherton-2005-ampk-switch`](sources/atherton-2005-ampk-switch.yml) | 2005 | mechanistic | abstract | concurrent/molecular, concurrent/history | 9 |
| [`baar-2014-concurrent`](sources/baar-2014-concurrent.yml) | 2014 | narrative-review | full-text | concurrent/molecular, concurrent/timing, concurrent/nutrition | 9 |
| [`chen-2024-concurrent-nma`](sources/chen-2024-concurrent-nma.yml) | 2024 | meta-analysis | full-text | concurrent/moderators, concurrent/hiit | 9 |
| [`coffey-2017-concurrent-review`](sources/coffey-2017-concurrent-review.yml) | 2017 | narrative-review | full-text | concurrent/molecular, concurrent/training-status | 9 |
| [`conceicao-2026-hiit-mps`](sources/conceicao-2026-hiit-mps.yml) | 2026 | rct | abstract | concurrent/molecular, concurrent/hypertrophy, concurrent/hiit | 9 |
| [`doma-2017-alternate`](sources/doma-2017-alternate.yml) | 2017 | narrative-review | abstract | concurrent/residual-fatigue | 9 |
| [`eddens-2018-sequence`](sources/eddens-2018-sequence.yml) | 2018 | meta-analysis | full-text | concurrent/sequence | 9 |
| [`ferraro-farro-2026-sit`](sources/ferraro-farro-2026-sit.yml) | 2026 | meta-analysis | full-text | concurrent/hiit, conditioning/sprint-interval | 9 |
| [`fyfe-2014-interference-review`](sources/fyfe-2014-interference-review.yml) | 2014 | narrative-review | abstract | concurrent/molecular, concurrent/moderators | — |
| [`fyfe-2016-intensity`](sources/fyfe-2016-intensity.yml) | 2016 | rct | full-text | concurrent/moderators, concurrent/hiit, concurrent/explosive-strength | 9 |
| [`fyfe-2016-signalling`](sources/fyfe-2016-signalling.yml) | 2016 | crossover | abstract | concurrent/molecular, concurrent/hiit | 9 |
| [`fyfe-2018-methodology`](sources/fyfe-2018-methodology.yml) | 2018 | narrative-review | abstract | concurrent/methods, concurrent/training-status | — |
| [`fyfe-2018-ribosome`](sources/fyfe-2018-ribosome.yml) | 2018 | rct | full-text | concurrent/molecular, concurrent/training-status | 9 |
| [`gao-2023-sequence`](sources/gao-2023-sequence.yml) | 2023 | meta-analysis | full-text | concurrent/sequence | 9 |
| [`gomes-2025-acute-neural`](sources/gomes-2025-acute-neural.yml) | 2025 | crossover | abstract | concurrent/neural, concurrent/explosive-strength | 9 |
| [`gomes-2025-load-velocity`](sources/gomes-2025-load-velocity.yml) | 2025 | rct | full-text | concurrent/explosive-strength, concurrent/training-status | 9 |
| [`gomes-2025-neural-training`](sources/gomes-2025-neural-training.yml) | 2025 | rct | abstract | concurrent/neural, concurrent/explosive-strength | 9 |
| [`gomes-2026-trained-morphology`](sources/gomes-2026-trained-morphology.yml) | 2026 | rct | abstract | concurrent/explosive-strength, concurrent/hypertrophy, concurrent/training-status | 9 |
| [`hakkinen-2003-concurrent`](sources/hakkinen-2003-concurrent.yml) | 2003 | rct | abstract | concurrent/explosive-strength, concurrent/neural | 9 |
| [`held-2026-concurrent-umbrella`](sources/held-2026-concurrent-umbrella.yml) | 2026 | umbrella-review | abstract | concurrent/interference, concurrent/sequence | 9 |
| [`hickson-1980`](sources/hickson-1980.yml) | 1980 | rct | abstract | concurrent/interference, concurrent/history | 9 |
| [`huiberts-2024-concurrent-sex`](sources/huiberts-2024-concurrent-sex.yml) | 2024 | meta-analysis | full-text | concurrent/sex, concurrent/training-status, frontiers/sex-differences | 9, 11 |
| [`jones-2013-ratio`](sources/jones-2013-ratio.yml) | 2013 | rct | abstract | concurrent/moderators, concurrent/frequency | 9 |
| [`kikuchi-2026-hiit-concurrent`](sources/kikuchi-2026-hiit-concurrent.yml) | 2026 | meta-analysis | abstract | concurrent/hiit, concurrent/explosive-strength | 9 |
| [`konopka-2014-aerobic-hypertrophy`](sources/konopka-2014-aerobic-hypertrophy.yml) | 2014 | narrative-review | abstract | concurrent/hypertrophy, conditioning/aerobic | — |
| [`lee-2020-order`](sources/lee-2020-order.yml) | 2020 | rct | full-text | concurrent/sequence, concurrent/explosive-strength, concurrent/timing | 9 |
| [`lundberg-2013-aerobic-hypertrophy`](sources/lundberg-2013-aerobic-hypertrophy.yml) | 2013 | rct | abstract | concurrent/hypertrophy, concurrent/critique | — |
| [`lundberg-2022-fiber-concurrent`](sources/lundberg-2022-fiber-concurrent.yml) | 2022 | meta-analysis | full-text | concurrent/interference, concurrent/hypertrophy, concurrent/moderators | 9 |
| [`mikkonen-2024-females-concurrent`](sources/mikkonen-2024-females-concurrent.yml) | 2024 | systematic-review | full-text | concurrent/sex | 9 |
| [`monserda-vilaro-2023-hiit-hypertrophy`](sources/monserda-vilaro-2023-hiit-hypertrophy.yml) | 2023 | meta-analysis | abstract | concurrent/hypertrophy, concurrent/hiit | — |
| [`murach-2016-concurrent-hypertrophy`](sources/murach-2016-concurrent-hypertrophy.yml) | 2016 | narrative-review | abstract | concurrent/hypertrophy, concurrent/critique | — |
| [`murlasits-2018-sequence`](sources/murlasits-2018-sequence.yml) | 2018 | meta-analysis | abstract | concurrent/sequence | — |
| [`nader-2006-concurrent`](sources/nader-2006-concurrent.yml) | 2006 | narrative-review | abstract | concurrent/molecular, concurrent/history | 9 |
| [`petre-2021-concurrent`](sources/petre-2021-concurrent.yml) | 2021 | meta-analysis | full-text | concurrent/training-status, concurrent/moderators | 9 |
| [`petre-2023-flywheel-hiit-order`](sources/petre-2023-flywheel-hiit-order.yml) | 2023 | rct | full-text | concurrent/sequence, concurrent/athletes | — |
| [`petre-2024-hiit-recovery`](sources/petre-2024-hiit-recovery.yml) | 2024 | crossover | full-text | concurrent/timing, concurrent/explosive-strength, concurrent/athletes | 9 |
| [`pistilli-2026-rfd-model`](sources/pistilli-2026-rfd-model.yml) | 2026 | other | full-text | concurrent/explosive-strength | — |
| [`robineau-2016-recovery`](sources/robineau-2016-recovery.yml) | 2016 | rct | abstract | concurrent/timing | 9 |
| [`sabag-2018-hiit-concurrent`](sources/sabag-2018-hiit-concurrent.yml) | 2018 | meta-analysis | abstract | concurrent/interference, concurrent/hiit, concurrent/moderators | — |
| [`sale-1990-concurrent`](sources/sale-1990-concurrent.yml) | 1990 | rct | abstract | concurrent/interference, concurrent/history | 9 |
| [`schumann-2022-concurrent`](sources/schumann-2022-concurrent.yml) | 2022 | meta-analysis | full-text | concurrent/interference, concurrent/moderators, concurrent/explosive-strength | 9 |
| [`shamim-2018-protein-concurrent`](sources/shamim-2018-protein-concurrent.yml) | 2018 | rct | full-text | concurrent/nutrition, concurrent/hypertrophy | — |
| [`sporer-2003-aerobic-recovery`](sources/sporer-2003-aerobic-recovery.yml) | 2003 | crossover | abstract | concurrent/timing, concurrent/residual-fatigue | 9 |
| [`tundidor-duque-2026-velocity-loss`](sources/tundidor-duque-2026-velocity-loss.yml) | 2026 | rct | full-text | concurrent/moderators, concurrent/residual-fatigue | 9 |
| [`wang-2026-hirt-elite`](sources/wang-2026-hirt-elite.yml) | 2026 | systematic-review | full-text | concurrent/athletes | 9 |
| [`wilson-2012-concurrent`](sources/wilson-2012-concurrent.yml) | 2012 | meta-analysis | abstract | concurrent/interference, concurrent/moderators | 9 |

## mobility

39 records.

| Record | Year | Design | Read level | Topics | Chapters |
|---|---:|---|---|---|---|
| [`afonso-2026-rom-vs-flexibility`](sources/afonso-2026-rom-vs-flexibility.yml) | 2026 | narrative-review | full-text | mobility/measurement, flexibility/definitions | 7 |
| [`alonso-fernandez-2018-nordic`](sources/alonso-fernandez-2018-nordic.yml) | 2018 | cohort | abstract | mobility/eccentric-training, hypertrophy/architecture, mobility/detraining | — |
| [`andrews-2025-hamstring-review`](sources/andrews-2025-hamstring-review.yml) | 2025 | narrative-review | full-text | mobility/eccentric-training, mobility/mechanisms | — |
| [`andrews-2025-multiscale`](sources/andrews-2025-multiscale.yml) | 2025 | cohort | full-text | mobility/eccentric-training, mobility/mechanisms, hypertrophy/architecture, mobility/detraining | 7 |
| [`andrews-2026-nhe-mechanics`](sources/andrews-2026-nhe-mechanics.yml) | 2026 | cohort | full-text | mobility/eccentric-training, mobility/mechanisms, strength/joint-angle | 7 |
| [`bajcetic-2026-pilates-women`](sources/bajcetic-2026-pilates-women.yml) | 2026 | meta-analysis | full-text | mobility/practitioner-systems, flexibility/pilates | 7 |
| [`blazevich-2025-sarcomerogenesis`](sources/blazevich-2025-sarcomerogenesis.yml) | 2025 | meta-analysis | full-text | mobility/mechanisms, hypertrophy/architecture | 7 |
| [`bourne-2017-nordic-architecture`](sources/bourne-2017-nordic-architecture.yml) | 2017 | rct | abstract | mobility/eccentric-training, hypertrophy/architecture, hypertrophy/exercise-selection | 7 |
| [`brockett-2001-optimum-length`](sources/brockett-2001-optimum-length.yml) | 2001 | mechanistic | abstract | mobility/mechanisms, strength/joint-angle, mobility/eccentric-training | 7 |
| [`buxton-2022-qmt`](sources/buxton-2022-qmt.yml) | 2022 | rct | abstract | mobility/practitioner-systems, mobility/measurement | 7 |
| [`buxton-2024-qmt-emg`](sources/buxton-2024-qmt-emg.yml) | 2024 | cross-sectional | abstract | mobility/practitioner-systems | — |
| [`campos-2016-pilates`](sources/campos-2016-pilates.yml) | 2016 | meta-analysis | abstract | mobility/practitioner-systems, flexibility/pilates | 7 |
| [`carmichael-2022-isometric-eccentric-hip`](sources/carmichael-2022-isometric-eccentric-hip.yml) | 2022 | rct | abstract | mobility/eccentric-training, hypertrophy/architecture, strength/specificity, mobility/detraining | 7 |
| [`cholp-2025-nordic-volume`](sources/cholp-2025-nordic-volume.yml) | 2025 | meta-analysis | full-text | mobility/eccentric-training, hypertrophy/architecture, strength/eccentric | 7 |
| [`cramer-2015-yoga-safety`](sources/cramer-2015-yoga-safety.yml) | 2015 | meta-analysis | abstract | mobility/practitioner-systems, flexibility/yoga | — |
| [`cuthbert-2020-nordic-volume`](sources/cuthbert-2020-nordic-volume.yml) | 2020 | meta-analysis | full-text | mobility/eccentric-training, hypertrophy/architecture, strength/eccentric | 7 |
| [`diong-2022-eccentric-flexibility`](sources/diong-2022-eccentric-flexibility.yml) | 2022 | meta-analysis | abstract | mobility/eccentric-training, flexibility/resistance-training | 7 |
| [`fry-2003-knee-position`](sources/fry-2003-knee-position.yml) | 2003 | crossover | abstract | mobility/practitioner-systems, strength/technique | 7 |
| [`guo-2026-yoga-older`](sources/guo-2026-yoga-older.yml) | 2026 | meta-analysis | abstract | mobility/practitioner-systems, flexibility/yoga | 7 |
| [`head-2026-cars-vs-static`](sources/head-2026-cars-vs-static.yml) | 2026 | rct | full-text | mobility/practitioner-systems, flexibility/acute | 7 |
| [`hinks-2023-ultrasound-ssn`](sources/hinks-2023-ultrasound-ssn.yml) | 2023 | mechanistic | full-text | mobility/measurement, mobility/mechanisms, hypertrophy/architecture | 7 |
| [`kawama-2026-ecc-vs-stretch-hamstring`](sources/kawama-2026-ecc-vs-stretch-hamstring.yml) | 2026 | rct | abstract | mobility/eccentric-training, mobility/mechanisms, flexibility/stretching | 7 |
| [`kay-2023-eccentric-rom`](sources/kay-2023-eccentric-rom.yml) | 2023 | meta-analysis | abstract | mobility/eccentric-training, flexibility/resistance-training | 7 |
| [`kay-2024-cross-education`](sources/kay-2024-cross-education.yml) | 2024 | rct | abstract | mobility/eccentric-training, mobility/mechanisms, flexibility/resistance-training | 7 |
| [`kay-2026-eccentric-vs-stretch`](sources/kay-2026-eccentric-vs-stretch.yml) | 2026 | crossover | full-text | mobility/eccentric-training, mobility/mechanisms, flexibility/stretching | 7 |
| [`kruse-2021-longitudinal-growth`](sources/kruse-2021-longitudinal-growth.yml) | 2021 | narrative-review | full-text | mobility/mechanisms, hypertrophy/architecture | — |
| [`lopez-bedoya-2013-active-passive`](sources/lopez-bedoya-2013-active-passive.yml) | 2013 | rct | abstract | mobility/measurement, flexibility/stretching | 7 |
| [`movahhedi-2026-knees-over-toes`](sources/movahhedi-2026-knees-over-toes.yml) | 2026 | rct | full-text | mobility/practitioner-systems, strength/technique | 7 |
| [`osullivan-2012-eccentric-flexibility`](sources/osullivan-2012-eccentric-flexibility.yml) | 2012 | systematic-review | abstract | mobility/eccentric-training, flexibility/resistance-training | — |
| [`patrick-2024-atg-program`](sources/patrick-2024-atg-program.yml) | 2024 | other | secondary | mobility/practitioner-systems | 7 |
| [`pincheira-2022-sarcomere`](sources/pincheira-2022-sarcomere.yml) | 2022 | cohort | full-text | mobility/eccentric-training, mobility/mechanisms, hypertrophy/architecture | 5, 7 |
| [`rosenfeldt-2024-rt-vs-stretch`](sources/rosenfeldt-2024-rt-vs-stretch.yml) | 2024 | rct | full-text | mobility/practitioner-systems, flexibility/resistance-training, strength/joint-angle | 6, 7 |
| [`sivaramakrishnan-2019-yoga`](sources/sivaramakrishnan-2019-yoga.yml) | 2019 | meta-analysis | full-text | mobility/practitioner-systems, flexibility/yoga | 7 |
| [`spina-2026-frc-claims`](sources/spina-2026-frc-claims.yml) | 2026 | other | secondary | mobility/practitioner-systems, mobility/measurement | 7 |
| [`timmins-2016-ecc-con-architecture`](sources/timmins-2016-ecc-con-architecture.yml) | 2016 | rct | abstract | mobility/eccentric-training, hypertrophy/architecture, mobility/detraining | 7 |
| [`tran-2001-hatha-yoga`](sources/tran-2001-hatha-yoga.yml) | 2001 | cohort | abstract | mobility/practitioner-systems, flexibility/yoga | — |
| [`wohlann-2024-pec-stretch`](sources/wohlann-2024-pec-stretch.yml) | 2024 | rct | abstract | mobility/loaded-stretching, hypertrophy/muscle-length, flexibility/stretching | 6 |
| [`yagiz-2021-nordic-fascicle`](sources/yagiz-2021-nordic-fascicle.yml) | 2021 | meta-analysis | full-text | mobility/eccentric-training, hypertrophy/architecture, mobility/measurement | 7 |
| [`yona-2026-jefferson-curl`](sources/yona-2026-jefferson-curl.yml) | 2026 | cross-sectional | full-text | mobility/practitioner-systems, mobility/loaded-flexion | 7 |

## nutrition

33 records.

| Record | Year | Design | Read level | Topics | Chapters |
|---|---:|---|---|---|---|
| [`antonio-2021-creatine-questions`](sources/antonio-2021-creatine-questions.yml) | 2021 | narrative-review | abstract | nutrition/creatine | — |
| [`ashtary-larky-2025-creatine-training-status`](sources/ashtary-larky-2025-creatine-training-status.yml) | 2025 | meta-analysis | full-text | nutrition/creatine | 10 |
| [`burke-2023-creatine-hypertrophy`](sources/burke-2023-creatine-hypertrophy.yml) | 2023 | meta-analysis | full-text | nutrition/creatine, hypertrophy/supplements | 10 |
| [`carvalho-2022-habitual-caffeine`](sources/carvalho-2022-habitual-caffeine.yml) | 2022 | meta-analysis | abstract | nutrition/caffeine | — |
| [`clifford-2020-antioxidants`](sources/clifford-2020-antioxidants.yml) | 2020 | meta-analysis | abstract | nutrition/supplements, recovery/antioxidants | 10 |
| [`grgic-2018-caffeine`](sources/grgic-2018-caffeine.yml) | 2018 | meta-analysis | full-text | nutrition/caffeine | 10 |
| [`grgic-2020-caffeine-umbrella`](sources/grgic-2020-caffeine-umbrella.yml) | 2020 | umbrella-review | abstract | nutrition/caffeine | 10 |
| [`guest-2021-caffeine`](sources/guest-2021-caffeine.yml) | 2021 | consensus | full-text | nutrition/caffeine | 10 |
| [`helms-2014-contest-nutrition`](sources/helms-2014-contest-nutrition.yml) | 2014 | narrative-review | abstract | nutrition/energy-deficit, nutrition/protein | 10 |
| [`helms-2023-energy-surplus`](sources/helms-2023-energy-surplus.yml) | 2023 | rct | abstract | nutrition/energy-surplus | 10 |
| [`jager-2017-issn-protein`](sources/jager-2017-issn-protein.yml) | 2017 | consensus | abstract | nutrition/protein | — |
| [`jakubowski-2020-hmb`](sources/jakubowski-2020-hmb.yml) | 2020 | meta-analysis | abstract | nutrition/supplements | 10 |
| [`kreider-2017-creatine`](sources/kreider-2017-creatine.yml) | 2017 | consensus | full-text | nutrition/creatine | 10 |
| [`lanhers-2015-creatine-lower`](sources/lanhers-2015-creatine-lower.yml) | 2015 | meta-analysis | abstract | nutrition/creatine | — |
| [`lanhers-2017-creatine-upper`](sources/lanhers-2017-creatine-upper.yml) | 2017 | meta-analysis | abstract | nutrition/creatine | — |
| [`longland-2016-deficit-protein`](sources/longland-2016-deficit-protein.yml) | 2016 | rct | abstract | nutrition/energy-deficit, nutrition/protein | 10 |
| [`maughan-2018-ioc-supplements`](sources/maughan-2018-ioc-supplements.yml) | 2018 | consensus | abstract | nutrition/supplements | 10 |
| [`morton-2018-protein`](sources/morton-2018-protein.yml) | 2018 | meta-analysis | full-text | nutrition/protein, frontiers/ageing | 1, 10, 11, 12 |
| [`murphy-2022-energy-deficit`](sources/murphy-2022-energy-deficit.yml) | 2022 | meta-analysis | abstract | nutrition/energy-deficit | 10 |
| [`nunes-2022-protein`](sources/nunes-2022-protein.yml) | 2022 | meta-analysis | full-text | nutrition/protein | 10 |
| [`prokopidis-2023-creatine-memory`](sources/prokopidis-2023-creatine-memory.yml) | 2023 | meta-analysis | full-text | nutrition/creatine, cognition/creatine | 10 |
| [`refalo-2025-protein-deficit`](sources/refalo-2025-protein-deficit.yml) | 2025 | meta-analysis | full-text | nutrition/energy-deficit, nutrition/protein | 10 |
| [`schoenfeld-2013-protein-timing`](sources/schoenfeld-2013-protein-timing.yml) | 2013 | meta-analysis | full-text | nutrition/protein | 10 |
| [`schoenfeld-2018-protein-meal`](sources/schoenfeld-2018-protein-meal.yml) | 2018 | narrative-review | abstract | nutrition/protein | — |
| [`tagawa-2021-protein-dose`](sources/tagawa-2021-protein-dose.yml) | 2021 | meta-analysis | full-text | nutrition/protein | 10 |
| [`tavares-2025-protein-frequency`](sources/tavares-2025-protein-frequency.yml) | 2025 | rct | abstract | nutrition/protein | — |
| [`trommelen-2023-protein-dose`](sources/trommelen-2023-protein-dose.yml) | 2023 | rct | full-text | nutrition/protein, nutrition/muscle-protein-synthesis | 10 |
| [`trommelen-2024-protein-reply`](sources/trommelen-2024-protein-reply.yml) | 2024 | other | secondary | nutrition/protein | — |
| [`wang-2024-creatine-strength`](sources/wang-2024-creatine-strength.yml) | 2024 | meta-analysis | full-text | nutrition/creatine | 10 |
| [`wang-2026-creatine`](sources/wang-2026-creatine.yml) | 2026 | meta-analysis | full-text | nutrition/creatine | 10 |
| [`witard-2024-protein-commentary`](sources/witard-2024-protein-commentary.yml) | 2024 | other | abstract | nutrition/protein | 10 |
| [`xiao-2025-caffeine-velocity`](sources/xiao-2025-caffeine-velocity.yml) | 2025 | meta-analysis | full-text | nutrition/caffeine, monitoring/velocity | 10 |
| [`yasuda-2020-protein-distribution`](sources/yasuda-2020-protein-distribution.yml) | 2020 | rct | abstract | nutrition/protein | — |

## recovery

29 records.

| Record | Year | Design | Read level | Topics | Chapters |
|---|---:|---|---|---|---|
| [`ahokas-2023-sauna`](sources/ahokas-2023-sauna.yml) | 2023 | crossover | abstract | recovery/heat | — |
| [`berjisian-2026-cwi-umbrella`](sources/berjisian-2026-cwi-umbrella.yml) | 2026 | umbrella-review | full-text | recovery/cold-water-immersion | 10 |
| [`borba-2024-habitual-sleep`](sources/borba-2024-habitual-sleep.yml) | 2024 | cohort | full-text | recovery/sleep | 10 |
| [`brown-2017-compression`](sources/brown-2017-compression.yml) | 2017 | meta-analysis | abstract | recovery/compression | 10 |
| [`craven-2022-sleep`](sources/craven-2022-sleep.yml) | 2022 | meta-analysis | full-text | recovery/sleep | 10 |
| [`cunha-2023-sleep-interventions`](sources/cunha-2023-sleep-interventions.yml) | 2023 | systematic-review | abstract | recovery/sleep | 10 |
| [`davis-2020-massage`](sources/davis-2020-massage.yml) | 2020 | meta-analysis | full-text | recovery/massage | 10 |
| [`del-val-manzano-2026-sleep`](sources/del-val-manzano-2026-sleep.yml) | 2026 | crossover | abstract | recovery/sleep, monitoring/velocity | 10 |
| [`dupuy-2018-recovery`](sources/dupuy-2018-recovery.yml) | 2018 | meta-analysis | full-text | recovery/modalities | — |
| [`easow-2025-sleep-strength`](sources/easow-2025-sleep-strength.yml) | 2025 | systematic-review | abstract | recovery/sleep | — |
| [`fuchs-2020-cwi-mps`](sources/fuchs-2020-cwi-mps.yml) | 2020 | crossover | full-text | recovery/cold-water-immersion, nutrition/muscle-protein-synthesis | 10 |
| [`grgic-2023-cwi-strength`](sources/grgic-2023-cwi-strength.yml) | 2023 | meta-analysis | abstract | recovery/cold-water-immersion | 10 |
| [`kellmann-2018-recovery-consensus`](sources/kellmann-2018-recovery-consensus.yml) | 2018 | consensus | abstract | recovery/framework, monitoring/fatigue | — |
| [`knowles-2018-sleep-strength`](sources/knowles-2018-sleep-strength.yml) | 2018 | systematic-review | abstract | recovery/sleep | 10 |
| [`knowles-2022-sleep-restriction-females`](sources/knowles-2022-sleep-restriction-females.yml) | 2022 | crossover | abstract | recovery/sleep, monitoring/velocity | 10 |
| [`knowles-2024-sleep-transcriptome`](sources/knowles-2024-sleep-transcriptome.yml) | 2024 | crossover | abstract | recovery/sleep | — |
| [`kong-2025-sleep-deprivation`](sources/kong-2025-sleep-deprivation.yml) | 2025 | meta-analysis | full-text | recovery/sleep | 10 |
| [`lamon-2021-sleep-mps`](sources/lamon-2021-sleep-mps.yml) | 2021 | crossover | full-text | recovery/sleep, nutrition/muscle-protein-synthesis | 10 |
| [`lilja-2018-nsaid`](sources/lilja-2018-nsaid.yml) | 2018 | rct | abstract | recovery/anti-inflammatories | 10 |
| [`mallinson-2025-nsaid`](sources/mallinson-2025-nsaid.yml) | 2025 | rct | abstract | recovery/anti-inflammatories | 10 |
| [`malta-2021-cwi`](sources/malta-2021-cwi.yml) | 2021 | meta-analysis | abstract | recovery/cold-water-immersion | — |
| [`moran-navarro-2017-recovery`](sources/moran-navarro-2017-recovery.yml) | 2017 | crossover | abstract | recovery/time-course, monitoring/velocity | 10 |
| [`paulsen-2014-antioxidants`](sources/paulsen-2014-antioxidants.yml) | 2014 | rct | abstract | recovery/antioxidants | 10 |
| [`pinero-2024-cwi`](sources/pinero-2024-cwi.yml) | 2024 | meta-analysis | full-text | recovery/cold-water-immersion, hypertrophy/recovery | 10 |
| [`roberts-2015-cwi`](sources/roberts-2015-cwi.yml) | 2015 | rct | full-text | recovery/cold-water-immersion, hypertrophy/recovery | 10 |
| [`saner-2021-sleep-restriction`](sources/saner-2021-sleep-restriction.yml) | 2021 | rct | full-text | recovery/sleep | 10 |
| [`stadnyk-2018-heat`](sources/stadnyk-2018-heat.yml) | 2018 | rct | abstract | recovery/heat | 10 |
| [`walsh-2021-sleep-consensus`](sources/walsh-2021-sleep-consensus.yml) | 2021 | consensus | abstract | recovery/sleep | 10 |
| [`yu-2026-cwi-nma`](sources/yu-2026-cwi-nma.yml) | 2026 | meta-analysis | abstract | recovery/cold-water-immersion | 10 |

## injury

18 records.

| Record | Year | Design | Read level | Topics | Chapters |
|---|---:|---|---|---|---|
| [`aasa-2017-weightlifting-injuries`](sources/aasa-2017-weightlifting-injuries.yml) | 2017 | systematic-review | abstract | injury/strength-sports | 8 |
| [`afonso-2026-stretching-injury`](sources/afonso-2026-stretching-injury.yml) | 2026 | meta-analysis | full-text | injury/stretching | 6 |
| [`andrade-2020-acwr-review`](sources/andrade-2020-acwr-review.yml) | 2020 | systematic-review | abstract | injury/training-load | — |
| [`behm-2023-dynamic-stretching-injury`](sources/behm-2023-dynamic-stretching-injury.yml) | 2023 | narrative-review | abstract | injury/stretching, flexibility/stretching-modality | — |
| [`ding-2026-acwr-meta`](sources/ding-2026-acwr-meta.yml) | 2026 | meta-analysis | full-text | injury/training-load | 8 |
| [`edwards-2018-mechanical-fatigue`](sources/edwards-2018-mechanical-fatigue.yml) | 2018 | narrative-review | abstract | injury/training-load | — |
| [`gabbett-2016-paradox`](sources/gabbett-2016-paradox.yml) | 2016 | narrative-review | full-text | injury/training-load | 8 |
| [`herbert-2011-stretching-soreness`](sources/herbert-2011-stretching-soreness.yml) | 2011 | systematic-review | abstract | injury/stretching | 6 |
| [`impellizzeri-2020-acwr`](sources/impellizzeri-2020-acwr.yml) | 2020 | narrative-review | abstract | injury/training-load | 8 |
| [`impellizzeri-2021-chronic-workload`](sources/impellizzeri-2021-chronic-workload.yml) | 2021 | other | abstract | injury/training-load | 8 |
| [`kalkhoven-2021-load-causal`](sources/kalkhoven-2021-load-causal.yml) | 2021 | narrative-review | abstract | injury/training-load | 8 |
| [`lauersen-2014-injury-prevention`](sources/lauersen-2014-injury-prevention.yml) | 2014 | meta-analysis | abstract | injury/stretching, injury/strength-training-prevention | 6 |
| [`lauersen-2018-strength-injury`](sources/lauersen-2018-strength-injury.yml) | 2018 | meta-analysis | abstract | injury/strength-training-prevention | 8 |
| [`lolli-2019-coupling`](sources/lolli-2019-coupling.yml) | 2019 | other | secondary | injury/training-load | — |
| [`pope-2000-army-stretching`](sources/pope-2000-army-stretching.yml) | 2000 | rct | abstract | injury/stretching | 6 |
| [`small-2008-static-stretching-injury`](sources/small-2008-static-stretching-injury.yml) | 2008 | systematic-review | abstract | injury/stretching | — |
| [`takeuchi-2024-stretching-muscle-injury`](sources/takeuchi-2024-stretching-muscle-injury.yml) | 2024 | meta-analysis | secondary | injury/stretching | — |
| [`thacker-2004-stretching-injury`](sources/thacker-2004-stretching-injury.yml) | 2004 | meta-analysis | abstract | injury/stretching | 6 |

## conditioning

11 records.

| Record | Year | Design | Read level | Topics | Chapters |
|---|---:|---|---|---|---|
| [`grammenou-2024-fitness-recovery`](sources/grammenou-2024-fitness-recovery.yml) | 2024 | crossover | abstract | conditioning/recovery, concurrent/timing | 9 |
| [`harris-2016-strongman-acute`](sources/harris-2016-strongman-acute.yml) | 2016 | crossover | abstract | conditioning/strongman | 9 |
| [`hindle-2019-strongman-biomechanics`](sources/hindle-2019-strongman-biomechanics.yml) | 2019 | systematic-review | abstract | conditioning/strongman | — |
| [`kodama-2009-crf`](sources/kodama-2009-crf.yml) | 2009 | meta-analysis | abstract | conditioning/health | 9 |
| [`lundberg-2024-vo2max-recovery`](sources/lundberg-2024-vo2max-recovery.yml) | 2024 | cross-sectional | full-text | conditioning/aerobic, conditioning/recovery | 9 |
| [`mandsager-2018-crf`](sources/mandsager-2018-crf.yml) | 2018 | cohort | full-text | conditioning/health | 9, 12 |
| [`momma-2022-msa`](sources/momma-2022-msa.yml) | 2022 | meta-analysis | full-text | conditioning/health | 9 |
| [`munoz-martinez-2017-circuit`](sources/munoz-martinez-2017-circuit.yml) | 2017 | meta-analysis | abstract | conditioning/circuit, conditioning/aerobic | 9 |
| [`tomlin-2001-aerobic-recovery`](sources/tomlin-2001-aerobic-recovery.yml) | 2001 | narrative-review | abstract | conditioning/aerobic, conditioning/recovery | 9 |
| [`vondrasek-2026-post-cycling`](sources/vondrasek-2026-post-cycling.yml) | 2026 | crossover | abstract | conditioning/recovery, conditioning/aerobic | 9 |
| [`wong-2020-tyre-flip`](sources/wong-2020-tyre-flip.yml) | 2020 | rct | full-text | conditioning/strongman | 9 |

## technology

11 records.

| Record | Year | Design | Read level | Topics | Chapters |
|---|---:|---|---|---|---|
| [`bittencourt-2024-hrv-rt`](sources/bittencourt-2024-hrv-rt.yml) | 2024 | rct | abstract | technology/wearables, frontiers/ageing | 11 |
| [`claassen-2026-load-velocity`](sources/claassen-2026-load-velocity.yml) | 2026 | meta-analysis | full-text | technology/velocity-based-training, technology/devices | 11 |
| [`de-oliveira-2019-hrv-rt`](sources/de-oliveira-2019-hrv-rt.yml) | 2019 | rct | abstract | technology/wearables, frontiers/individual-response | 11 |
| [`dergaa-2024-gpt4`](sources/dergaa-2024-gpt4.yml) | 2024 | other | abstract | technology/ai-coaching | — |
| [`duking-2021-hrv`](sources/duking-2021-hrv.yml) | 2021 | meta-analysis | abstract | technology/wearables, frontiers/individual-response | — |
| [`genc-2025-chatgpt-versions`](sources/genc-2025-chatgpt-versions.yml) | 2025 | other | full-text | technology/ai-coaching | 11 |
| [`greig-2023-load-velocity`](sources/greig-2023-load-velocity.yml) | 2023 | meta-analysis | full-text | technology/velocity-based-training | 11 |
| [`havers-2025-ai-plans`](sources/havers-2025-ai-plans.yml) | 2025 | other | full-text | technology/ai-coaching | 11 |
| [`huang-2026-squat-1rm`](sources/huang-2026-squat-1rm.yml) | 2026 | cross-sectional | full-text | technology/velocity-based-training, frontiers/sex-differences | — |
| [`oberhofer-2021-smartwatch`](sources/oberhofer-2021-smartwatch.yml) | 2021 | cross-sectional | full-text | technology/wearables | 11 |
| [`washif-2024-chatgpt`](sources/washif-2024-chatgpt.yml) | 2024 | other | full-text | technology/ai-coaching | 11 |

## methods

8 records.

| Record | Year | Design | Read level | Topics | Chapters |
|---|---:|---|---|---|---|
| [`emanuel-2022-coaches-rir`](sources/emanuel-2022-coaches-rir.yml) | 2022 | cross-sectional | abstract | methods/rpe-rir | — |
| [`halperin-2022-rir-accuracy`](sources/halperin-2022-rir-accuracy.yml) | 2022 | meta-analysis | full-text | methods/measurement, strength/proximity-to-failure, methods/rpe-rir, programming/autoregulation | 3, 4 |
| [`holmes-2026-rir-rpe-accuracy`](sources/holmes-2026-rir-rpe-accuracy.yml) | 2026 | crossover | abstract | methods/rpe-rir | — |
| [`pelland-2022-proximity-methods`](sources/pelland-2022-proximity-methods.yml) | 2022 | narrative-review | abstract | methods/measurement, hypertrophy/proximity-to-failure | 3, 4 |
| [`refalo-2024-rir-accuracy-bench`](sources/refalo-2024-rir-accuracy-bench.yml) | 2024 | cross-sectional | abstract | methods/rpe-rir | 4 |
| [`steele-2017-rir-experience`](sources/steele-2017-rir-experience.yml) | 2017 | cross-sectional | abstract | methods/rpe-rir | — |
| [`zourdos-2016-rpe-scale`](sources/zourdos-2016-rpe-scale.yml) | 2016 | cross-sectional | abstract | methods/rpe-rir, programming/autoregulation | — |
| [`zourdos-2021-rir-accuracy`](sources/zourdos-2021-rir-accuracy.yml) | 2021 | cross-sectional | abstract | methods/rpe-rir, strength/proximity-to-failure | 4 |

## monitoring

7 records.

| Record | Year | Design | Read level | Topics | Chapters |
|---|---:|---|---|---|---|
| [`claudino-2017-cmj`](sources/claudino-2017-cmj.yml) | 2017 | meta-analysis | abstract | monitoring/jump | 10 |
| [`duignan-2020-wellness`](sources/duignan-2020-wellness.yml) | 2020 | systematic-review | full-text | monitoring/wellness | 10 |
| [`manresa-rocamora-2021-hrv-guided`](sources/manresa-rocamora-2021-hrv-guided.yml) | 2021 | meta-analysis | full-text | monitoring/hrv | 10 |
| [`plews-2013-hrv`](sources/plews-2013-hrv.yml) | 2013 | narrative-review | abstract | monitoring/hrv | 10 |
| [`saw-2016-subjective`](sources/saw-2016-subjective.yml) | 2016 | systematic-review | full-text | monitoring/wellness | 10 |
| [`thorpe-2017-fatigue`](sources/thorpe-2017-fatigue.yml) | 2017 | narrative-review | abstract | monitoring/fatigue | — |
| [`weakley-2021-devices`](sources/weakley-2021-devices.yml) | 2021 | systematic-review | full-text | monitoring/velocity, technology/velocity-devices | 10, 11 |

## practice

6 records.

| Record | Year | Design | Read level | Topics | Chapters |
|---|---:|---|---|---|---|
| [`amdi-2026-powerlifting-specificity`](sources/amdi-2026-powerlifting-specificity.yml) | 2026 | cross-sectional | abstract | practice/surveys, methods/rpe-rir | — |
| [`anyadike-danes-2023-coaches-planning`](sources/anyadike-danes-2023-coaches-planning.yml) | 2023 | cross-sectional | full-text | practice/surveys, programming/critique | 4 |
| [`shaw-2022-norwegian-powerlifters`](sources/shaw-2022-norwegian-powerlifters.yml) | 2022 | cross-sectional | abstract | practice/surveys, strength/frequency | — |
| [`swinton-2009-powerlifters`](sources/swinton-2009-powerlifters.yml) | 2009 | cross-sectional | abstract | practice/surveys | — |
| [`washif-2025-coaches-periodization`](sources/washif-2025-coaches-periodization.yml) | 2025 | cross-sectional | abstract | practice/surveys, programming/periodization | 4 |
| [`winwood-2011-strongman-practices`](sources/winwood-2011-strongman-practices.yml) | 2011 | cross-sectional | abstract | practice/surveys, programming/periodization, conditioning/strongman | — |

## cognition

4 records.

| Record | Year | Design | Read level | Topics | Chapters |
|---|---:|---|---|---|---|
| [`citherlet-2026-creatine-commentary`](sources/citherlet-2026-creatine-commentary.yml) | 2026 | other | full-text | cognition/creatine, nutrition/creatine | 10 |
| [`gordji-nejad-2024-creatine-sleep-deprivation`](sources/gordji-nejad-2024-creatine-sleep-deprivation.yml) | 2024 | crossover | abstract | cognition/creatine, recovery/sleep | 10 |
| [`mcmorris-2024-creatine-cognition`](sources/mcmorris-2024-creatine-cognition.yml) | 2024 | systematic-review | abstract | cognition/creatine | — |
| [`xu-2024-creatine-cognition`](sources/xu-2024-creatine-cognition.yml) | 2024 | meta-analysis | full-text | cognition/creatine, nutrition/creatine | 10 |

## consensus

2 records.

| Record | Year | Design | Read level | Topics | Chapters |
|---|---:|---|---|---|---|
| [`afonso-2021-mandatory-stretching`](sources/afonso-2021-mandatory-stretching.yml) | 2021 | narrative-review | abstract | consensus/guidelines, injury/stretching | — |
| [`warneke-2025-delphi-consensus`](sources/warneke-2025-delphi-consensus.yml) | 2025 | consensus | full-text | consensus/guidelines, flexibility/stretching-dose, flexibility/acute-performance, flexibility/stretch-hypertrophy, injury/stretching, mobility/loaded-stretching | 6 |

## mechanisms

1 records.

| Record | Year | Design | Read level | Topics | Chapters |
|---|---:|---|---|---|---|
| [`van-every-2025-hypertrophy-mechanisms`](sources/van-every-2025-hypertrophy-mechanisms.yml) | 2025 | narrative-review | abstract | mechanisms/hypertrophy, hypertrophy/mechanisms | 3, 5 |

