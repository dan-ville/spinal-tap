# Chapter 5 research notes: Hypertrophy (mechanisms, muscle length and contraction type)

Researcher notes behind `chapters/05-hypertrophy-methods.md`. Searched 2026-11-24 (PubMed E-utilities,
Europe PMC, PubMed Central full texts, SportRxiv, publisher and institutional repository pages, web search
with a dedicated 2025-2026 sweep per question). Every source has a record in `evidence/sources/<id>.yml`
(94 records cited for this chapter; 86 new, 8 existing records extended).

**How to read the tags.** Each finding carries `[@id]`, a grade (established | promising | contested |
speculative | convention) and the read level of the number: **FT** = full text read, **ABS** = abstract
only, **SEC** = number quoted from another paper. Only FT numbers may be stated as verified.

**Full texts read (18):** Maeo 2021 (leg curl), Maeo 2024 (Nordic vs lengthened-state eccentric), Maeo
2024 (trained vs untrained fibres), Kinoshita 2023 (calf raise), Kinoshita 2026 (knee extension vs leg
press), Wolf 2023 (ROM meta-analysis, IUSCA PDF), Varovic 2025 (SportRxiv preprint of the muscle-length
meta-analysis; published numbers from the abstract), Wolf 2025 (lengthened partials, trained), Havers
2025 (initial partials, trained), Wolf 2026 (longitudinal growth review), Pedrosa 2026 (muscle-length
review), Geng 2024 (BFR moderators), Oborn 2025 (BFR umbrella review, results tables), Patterson 2019 (BFR
position stand), Kataoka 2026 (BFR vs failure), Walker 2016 (accentuated eccentrics, trained), Petré 2018
(flywheel), Haun 2019 (measurement construct). The per-study rows of the Wolf 2026 table (e.g. McMahon 2014, Alegre 2014,
Valamatos 2018) were read there but are secondary for those primary studies.

**Not reachable:** the publisher page for Strey 2026 (Sport Sci Health) could not be fetched, and its
accepted manuscript is embargoed until 2027-01-05. The abstract was read from the Ulster University
repository. Lixandrão 2018, Schoenfeld 2017, da Silva 2025 and Maroto-Izquierdo 2017 were read as
abstracts only.

**Population caveat that runs through the chapter.** Almost every mechanistic or exercise-selection trial
with MRI used **untrained** young adults, often within-subject (one limb per condition) for 8-12 weeks. In
Varovic 2025, 11 of 12 included studies used untrained participants [@varovic-2025-muscle-length]. The
studies in trained lifters (Wolf 2025, Havers 2025, Larsen 2025, Varovic 2025 isometric, Walker 2016,
Bjørnsen 2019) are smaller, shorter and mostly use ultrasound. Every recommendation for trained athletes
is an extrapolation and should say so.

---

## RQ1. What is the current mechanistic model of hypertrophy, and which older hypotheses has the evidence weakened?

### The current model (mechanical tension -> mechanotransduction -> protein accretion)

- **Mechanical tension on the fibres is the primary stimulus.** Mechanical signals are the leading
  candidate stimuli. The leading candidate sensors are filamin-C/BAG3 (chaperone-assisted selective
  autophagy coupled to mTORC1 and Hippo), costamere/focal-adhesion complexes and nuclear deformation.
  An mTORC1-mediated rise in muscle protein synthesis is "the key, but not sole" mechanism
  [@wackerhage-2019] (established, ABS). Roberts et al.'s Physiological Reviews synthesis lists the
  supported downstream mechanisms as mTORC1 signalling, ribosome biogenesis (translational capacity),
  satellite-cell proliferation with myonuclear accretion, and repeated post-exercise rises in MPS. It also
  catalogues open disagreements on each [@roberts-2023-mechanisms] (established, ABS). A 2026 review
  reaches the same conclusion: loading is the primary driver and protein a minor supporting factor
  [@greyvenstein-2026] (established, ABS). A 2025 narrative review (Phillips group) explicitly classes
  hormones, metabolites, cell swelling and sarcoplasmic hypertrophy as non-contributors or myths
  [@van-every-2025-hypertrophy-mechanisms] (promising, ABS).
- **Why "tension on fibres" rather than "load on the bar".** Low loads (~30% 1RM) taken to or near failure
  grow muscle about as much as heavy loads in trained men [@morton-2016-load-trained] (promising, ABS).
  The usual explanation is that, as fatigue develops, high-threshold motor units are recruited and their
  fibres slow down. Through the force-velocity relationship they then experience high tension. Effort,
  not load, sets how many fibres are exposed to high tension. Volume-load-matched training at 20% 1RM
  without high effort roughly halves growth [@lasevicius-2018-intensity] (promising, ABS). In Kataoka
  2026, submaximal low-load sets grew muscle less than low-load sets to failure (0.06 vs 0.17 cm). BFR
  closed most of that gap (0.14 cm) [@kataoka-2026] (promising, FT). This fits the idea that whatever
  raises fibre recruitment and tension, whether proximity to failure or cuff-induced fatigue, drives the
  response.
- **Titin as a length-dependent mechanosensor (animal evidence).** In mice whose hemidiaphragm is
  passively stretched, hypertrophy scaled with titin stiffness. Growth was 20% smaller with compliant
  titin and 18% larger with stiffer titin (wild-type +48% mass in 6 days) [@van-der-pijl-2018]
  (promising for the animal model, ABS). A 2026 eLife paper places the titin N2A element and MARP
  proteins upstream of mTORC1 in stretch-induced *longitudinal* (serial sarcomere) growth. Rapamycin
  blocked that growth [@van-der-pijl-2026] (speculative for humans, ABS). This is the main mechanistic
  bridge to the long-muscle-length literature: tension at long lengths includes passive (titin) tension
  on top of active tension [@pedrosa-2026-review] (speculative, FT).
- **Structural end-points are unresolved.** It is still not settled whether load-induced fibre growth
  comes mainly from bigger myofibrils, more myofibrils (myofibril splitting) or both
  [@jorgenson-2020] (established that it is unresolved, ABS).
  Long-term trained men (5.9 y) have biceps 70% larger than untrained men, with fibres 29% larger,
  an estimated 34% more fibres, 49% more myofibrils per fibre (105% more in total) and 7% tighter
  myosin spacing [@maeo-2024-trained-fibers] (promising, FT). Mechanism: long-term hypertrophy in trained
  people looks like myofibril proliferation plus denser packing, not dilution. The higher fibre-number
  estimate reopens the hyperplasia question, but it is cross-sectional (selection bias) and fibre number
  is estimated by division (ACSA / fibre area), not counted.

### Hypotheses the evidence has weakened

| Older hypothesis | What weakened it | Grade |
|---|---|---|
| Acute post-exercise anabolic hormones (GH, IGF-1, testosterone) drive growth | Arm trained in a high-hormone milieu grew no more than the arm trained in a low-hormone milieu (+10% vs +12% CSA; interaction P = 0.25) [@west-2010] (ABS). Acute hormone responses did not correlate with gains in trained men [@morton-2016-load-trained] (ABS) | established |
| Metabolic stress (lactate, H+, Pi, cell swelling) is an independent anabolic signal | The supporting protocols never separated metabolites from contraction. The only human test of post-exercise metabolite pooling found no added growth. Metabolites more plausibly act by forcing recruitment of more fibres [@dankel-2017-metabolites] (ABS). Wackerhage calls the metabolite evidence "indirect" [@wackerhage-2019] (ABS) | promising (that metabolites are not independently anabolic) |
| Muscle damage drives growth | Early MyoPS after the first sessions, when Z-band damage peaks, is spent on repair and does not relate to hypertrophy. Only after damage attenuates (weeks 3-10) does integrated MyoPS correlate with growth (r ~0.9) [@damas-2016-myops] (ABS). Early CSA gains partly reflect oedema [@damas-2016] (ABS). Damage is "probably not essential" [@wackerhage-2019] | promising |
| Three-factor model (tension, damage, metabolic stress as co-equal drivers) | The original model [@schoenfeld-2010-mechanisms] (ABS) is now mostly cited as history. Its own authors' later work moved toward a tension-centred view | contested (as originally stated) |
| Sarcoplasmic hypertrophy as a major mode of growth | Haun 2019: very high-volume 6-wk training raised fCSA +23% while actin/myosin per fibre fell ~30% (borderline statistics) [@haun-2019] (contested, ABS). The same group frames it as an open question [@roberts-2020-sarcoplasmic] (ABS). Long-term trained muscle shows more myofibrils and tighter packing, not dilution [@maeo-2024-trained-fibers] (FT) | contested; if it occurs, likely transient |

**Disagreement.** The Phillips group treats sarcoplasmic hypertrophy as a myth
[@van-every-2025-hypertrophy-mechanisms]. The Roberts group regards it as plausible but hard to measure
[@roberts-2020-sarcoplasmic; @haun-2019-measurement]. Some of the dispute is methodological. Protein
*concentration* assays, fibre CSA from biopsies taken 72 h after training (with oedema), and electron
microscopy of tiny samples do not measure the same thing (see RQ5).

### Satellite cells, myonuclear domain and muscle memory

- **Myonuclear domain ceiling.** The classic theory holds that a fibre can grow ~26% before needing new
  nuclei. A meta-analysis (27 studies, 903 participants) found that myonuclei are added even with ≤10%
  fibre growth, though addition is more consistent above ~22% [@conceicao-2018] (promising, ABS).
  Mechanism: nuclei are added early, so the domain is flexible rather than a hard ceiling.
- **BFR adds nuclei in trained athletes.** National-level powerlifters gained +18% myonuclei and +12%
  type I fibre area after two short BFR blocks [@bjornsen-2019] (promising, ABS).
- **Satellite cells and individual responses.** In untrained people, those who responded better to
  repetition progression than to load progression showed larger satellite-cell increases (+108.6% vs
  +48.9%). Myonuclear content, proteolysis and ECM markers did not explain responsiveness
  [@scarpelli-2025] (speculative, ABS).
- **Muscle memory: myonuclear permanence is contested.**
  - For: myonuclei gained in 10 weeks of elbow-flexor training (+33% in type 2 fibres) were retained
    after 16 weeks of detraining. However, retraining did not produce clearly greater regrowth (delta
    type 2 fCSA not different between arms) [@cumming-2024] (contested, ABS). No myonuclear loss
    followed 6 weeks of immobilisation after Achilles rupture [@horwath-2025] (promising, ABS).
  - Against or neutral: a 10-wk training / 20-wk detraining / 5-wk retraining study found no
    myonuclear accretion in the first block and no enhanced retraining response. It therefore could not
    test the hypothesis [@psilander-2019] (ABS). In mice, myonuclei gained with weighted wheel running
    were lost within 6 months of detraining in gastrocnemius and plantaris (soleus resisted)
    [@murach-2020-muscle-memory] (ABS).
  - Alternative memory mechanisms: genes hypomethylated after loading stayed hypomethylated through
    unloading, and reloading produced more widespread hypomethylation with larger gains
    [@seaborne-2018] (promising, ABS). A proteomic signature (e.g. CBR1, calpain-2) persisted after
    10 weeks off [@hulmi-2025-proteomic] (speculative, ABS).
  - Bottom line: regaining previously held muscle is faster in practice (convention, strongly believed
    by coaches). In humans, the cellular basis (nuclei vs epigenetic vs proteomic) and the size of the
    advantage are unresolved. Strength is retained longer than size after detraining (~60% of the
    strength gain retained when size had returned to baseline), consistent with a neural memory
    [@psilander-2019] (ABS).

### Unknown (RQ1)
- The identity of the human mechanosensor(s) and how passive vs active tension are weighted.
- Whether hyperplasia contributes in trained humans.
- Whether retained myonuclei accelerate regrowth in humans by a meaningful amount.

---

## RQ2. Does training at long muscle lengths or with lengthened partials produce more hypertrophy?

### Definitions that matter for reconciling the literature
- **Long-length training** can be produced by (a) **partial ROM in the initial, lengthened part**
  ("lengthened partials"), (b) **exercise selection or joint position** that lengthens a biarticular
  muscle (seated vs prone leg curl, overhead vs neutral triceps, standing vs seated calf raise), or
  (c) **isometrics at long lengths**. The meta-analyses mix these differently, which explains much of
  their apparent disagreement.
- The comparisons are of three kinds: long partials vs short partials; long partials vs full ROM; and
  long-position vs short-position exercises over a full range. A positive "long vs short" result does
  **not** imply "lengthened partials beat full ROM".

### Meta-analyses
- **Wolf et al. 2023** (IJSC; Bayesian multilevel; 23 studies in the model, 24 tabulated):
  - All outcomes: SMD 0.12 (95% CI -0.02 to 0.26) favouring full ROM.
  - Muscle size: SMD 0.04 (-0.17 to 0.25), i.e. trivial.
  - Exploratory subgroups: partial ROM at long lengths vs full ROM, SMD -0.28 (-0.81 to 0.16), favouring
    the partial. Partial ROM at short lengths vs full ROM, 0.08 (-0.24 to 0.42), favouring full ROM.
  - Strength was ROM-specific: SMD 0.32 (0.14 to 0.49) when the test favoured the full-ROM condition.
  - 19 of 23 studies trained partials mostly at short lengths [@wolf-2023-rom] (promising for the main
    estimate; speculative for the long-partial subgroup; FT).
- **Pallarés et al. 2021** (16 studies): full ROM beat partial ROM for strength (ES 0.56) and
  lower-limb hypertrophy (ES 0.88, p = 0.027). The pooled partial conditions were mostly short-length
  partials, so this does not test lengthened partials [@pallares-2021] (contested as a general claim,
  ABS).
- **Kassiano et al. 2023** (systematic review, 11 studies, no pooling): full ROM and initial (long)
  partials beat final (short) partials (ES 0.20-0.90). Initial partials beat full ROM for proximal rectus
  femoris (ES 0.35-0.38) [@kassiano-2023-rom-review] (promising, ABS).
- **Varovic, Wolf, Schoenfeld, Steele et al. 2025** (IJSM; Bayesian; 12 studies, 184 effects, 22 arms;
  regional measures only):
  - Longer vs shorter *mean* muscle length: SMD proximal 0.05 (95% QI -0.07 to 0.16), mid 0.07 (-0.02
    to 0.15), distal 0.09 (-0.01 to 0.19). Response ratio distal +1.88% (-0.44% to 4.34%).
  - The effect trended upward from proximal to distal, but most of each posterior lay inside the region
    of practical equivalence. In the preprint: 82.7%, 77.7% and 59.0% within ±0.1 SMD at the 25, 50
    and 75% sites. The average length contrast between conditions was only 21.8% of muscle length.
  - Authors' conclusion: longer and shorter mean lengths produce similar regional hypertrophy "at the
    contrasts typically employed" [@varovic-2025-muscle-length] (promising, ABS for the published
    numbers, FT for the preprint).
- **Strey et al. 2026** (Sport Sci Health; robust variance estimation; PROSPERO-registered; 8 studies;
  long partials vs short partials only; mainly vastus lateralis):
  - Overall ES 0.283 (p = 0.036); distal 0.433 (95% CI 0.01 to 0.85); central 0.276 (0.01 to 0.48).
  - Concluded that long-length training is more effective [@strey-2026] (promising, ABS; full text
    embargoed).

**Reconciling Varovic 2025 and Strey 2026.**
1. Strey compares long vs short partials. Varovic pools any manipulation of *mean* muscle length,
   including full ROM vs partial (where both conditions reach long lengths) and exercise-position
   studies, so its average contrast is diluted to ~22% of muscle length.
2. Strey uses frequentist RVE with 8 studies and reports significance. Varovic uses a Bayesian model
   with a pre-registered smallest effect of interest and reports equivalence. Their point estimates
   (SMD ~0.07-0.09 at mid/distal vs ~0.28-0.43) differ in size, but both point the same way and both
   find the largest effect distally.
3. Both are dominated by untrained participants and the quadriceps.
4. A defensible synthesis: **avoiding the lengthened range costs hypertrophy (short partials are
   inferior); among conditions that reach long lengths, the extra benefit of emphasising them is small
   and most visible distally and in biarticular muscles.** Grade: promising for the first half;
   contested for the second.

### Key trials (exercise-position: full ROM at longer vs shorter length)
- **Maeo 2021, seated vs prone leg curl** (n = 20 untrained, within-subject, 12 wk, MRI). Seated curls
  produced more growth: whole hamstrings +14.1% vs +9.3%; BFlh +14.4% vs +6.5%; ST +23.6% vs +19.3%; SM
  +8.2% vs +3.6% (P ≤ 0.010). The monoarticular BFsh grew equally (+10% vs +9%, P = 0.190). Both
  positions protected equally against later eccentric damage [@maeo-2021] (promising, FT). Mechanism:
  hip flexion lengthens only the biarticular heads, so the length effect appears exactly where the
  length differs. This within-muscle control is the strongest single argument that length itself, not
  effort or load, causes the difference.
- **Maeo 2023, overhead vs neutral triceps extension** (n = 21 untrained, within-subject, 12 wk, MRI):
  long head +28.5% vs +19.6% (d = 0.61). Surprisingly, the monoarticular lateral and medial heads also
  grew more (+14.6% vs +10.5%), despite 34-39% lower absolute loads [@maeo-2023] (promising, ABS).
  The monoarticular result is not explained by length alone. It may reflect altered force sharing or
  intramuscular pressure.
- **Kinoshita 2023, standing vs seated calf raise** (n = 14 untrained, within-subject, 12 wk, MRI):
  lateral gastrocnemius +12.4% vs +1.7%; medial +9.2% vs +0.6%; soleus +2.1% vs +2.9% (ns)
  [@kinoshita-2023] (promising, FT). Confound: with the knee flexed the gastrocnemius is not only short
  but also near active insufficiency, so it produces little force. "Length" and "active tension" cannot
  be separated here.
- **Maeo 2024, lengthened-state eccentric (hip-flexed) vs Nordic hamstring training** (n = 14/group):
  hamstrings +18% vs +11%; BFlh +19% vs +5%. Each exercise preferentially grew the muscles whose function
  it matched (hip-extending heads 2.2-fold with LSET; non-hip-extending heads 1.9-fold with Nordics)
  [@maeo-2024-nordic] (promising, FT).
- **Kobayashi 2026, incline vs preacher curl** (n = 21 untrained, MRI): incline curls (shoulder extended,
  biceps long head lengthened) grew the biceps slightly more (+22.1% vs +18.9%, g = 0.33). Preacher curls
  grew the brachialis (+17.1% vs +21.1%, g = 0.50) and brachioradialis more. Total elbow-flexor growth
  was the same (+17.6% vs +19.2%) [@kobayashi-2026] (promising, ABS). Length matters for the biarticular
  head, but the resistance profile redistributes growth among synergists and the total is unchanged.
- **Zabaleta-Korta 2023** (trained women, incline vs preacher): only the preacher's distal site grew,
  and the interactions were not significant [@zabaleta-korta-2023] (speculative, ABS).

### Key trials (ROM manipulations)
- **Pedrosa 2022** (untrained women, knee extension, 5 arms, ~9 per arm): initial-ROM (long) partials
  produced the greatest regional RF/VL growth at 50-70% of femur length. Final-ROM partials were no
  different from control at 60-70% [@pedrosa-2022] (promising, ABS). Follow-ups: in the arm curl,
  initial-ROM partials gave more distal biceps growth and more full-ROM 1RM gain [@pedrosa-2023]. In a
  second knee-extension trial, initial, full and varied ROM were similar and all better than final ROM
  [@pedrosa-2025] (promising, ABS).
- **Kubo 2019** (n = 17, full vs half squat, MRI): knee extensors grew equally (+4.9% vs +4.6%).
  Adductors (+6.2% vs +2.7%) and gluteus maximus (+6.7% vs +2.2%) grew more with full squats. Neither
  grew the rectus femoris or hamstrings [@kubo-2019] (promising, ABS). Mechanism: the vasti reach long
  lengths even in a half squat, whereas the glutes and adductor magnus are only lengthened in deep hip
  flexion. The rectus femoris (biarticular) stays near constant length in the squat because hip and knee
  flex together.
- **Kassiano 2023, calf raise** (n = 42 women): initial (dorsiflexed) partials +15.2% medial
  gastrocnemius vs full ROM +6.7% vs final +3.4% [@kassiano-2023-calf] (promising, ABS). This is the
  clearest case of long partials *beating* full ROM. A plausible explanation is that in a full-ROM calf
  raise much of each repetition is spent in the shortened plantarflexed range.
- **McMahon 2026** (n = 45, knee extensors, 4 arms): lengthened partials at 55% 1RM matched full ROM at
  80% 1RM for VL thickness and beat shortened partials distally. Lengthened partials increased fascicle
  length the most [@mcmahon-2026] (promising, ABS). This means equal growth with a ~30% lighter load.
- **Goli 2026** (n = 16 untrained, calf): adding long-length partials beyond full-ROM failure produced
  equivalent gastrocnemius growth (+8% vs +8%) with half the sets at equated volume load
  [@goli-2026] (speculative, ABS).

### Trials in trained lifters (the population of this thesis)
- **Wolf 2025** (n = 30 trained, within-subject, 8 wk, upper body). Lengthened partials and full ROM
  were equivalent for elbow-flexor and extensor thickness: differences -0.23 to 0.82 mm, all 95% CrIs
  spanning zero, BF 0.16-0.39 favouring the null. 10RM pulldown gains were also equivalent
  [@wolf-2025-lengthened-partials] (promising, FT).
- **Havers 2025** (n = 13 trained, preacher curl): initial partials vs full ROM were similar at 50%.
  The distal advantage for partials was trivial (SMD 0.10, BF 4.87). Full ROM gave slightly more 1RM
  (SMD 0.17) [@havers-2025] (speculative, FT).
- **Larsen 2025** (n = 23, 7.2 y training): leg press to ~100° vs maximal knee flexion (~154°) gave the
  same quadriceps growth (BF 0.14-0.22; multivariate BF < 0.01) [@larsen-2025-leg-press] (promising,
  ABS). Interpretation: beyond the range where the vasti are already long, extra depth adds nothing
  measurable.
- **Varovic 2025 isometric** (n = 23 trained): long-length isometrics ≈ full-ROM dynamic knee extension
  over 6 wk, with a possible proximal advantage (-0.11 cm, 95% HDI -0.24 to 0.02)
  [@varovic-2025-isometric] (speculative, ABS).
- **Vendruscolo 2025** (n = 21 trained, BFR curls at long vs short length, 3 wk, MRI): no difference
  [@vendruscolo-2025-bfr-length] (speculative, ABS). The study is very short, and BFR may already
  saturate recruitment.
- Pattern: **in trained lifters every head-to-head trial so far finds lengthened partials ≈ full ROM.**
  The large effects come from untrained participants and from short-length comparators.

### Mechanisms proposed for a long-length advantage
1. **Passive tension.** On the descending limb of the length-tension curve, titin and other elastic
   elements add passive force. Total fibre tension at a given active force is therefore higher, and
   titin is a known mechanosensor [@van-der-pijl-2018; @pedrosa-2026-review] (speculative for humans).
2. **Stretch-mediated hypertrophy.** Prolonged static stretching alone produces small growth: d = 0.20
   overall and 0.26-0.28 with higher doses (42 studies, 1318 participants), typically requiring very
   long durations [@warneke-2024-stretch; @warneke-2023-stretch-review] (promising/speculative, ABS).
   This shows lengthening is itself a growth signal, though a weak one compared with loading.
3. **Longitudinal (serial) growth.** Long-length and eccentric training increase ultrasound-estimated
   fascicle length more [@mcmahon-2026; @franchi-2014]. Eccentric overload increases serial sarcomere
   number in rats [@rilling-2026] (speculative). But no human study has measured serial sarcomere
   number after long- vs short-length training, and 7 of 8 studies estimated fascicle length by linear
   extrapolation [@wolf-2026-longitudinal] (established that the evidence base has this flaw, FT).
   Serial growth would preferentially enlarge distal and proximal regions. That fits the distal-biased
   effects in Varovic and Strey.
4. **Regional activation and fatigue.** Some researchers suggest the length effect works partly through
   greater metabolic stress or through region-specific activation [@pedrosa-2026-review;
   @wakahara-2013] (speculative).
5. **Proposed diminishing returns.** Pedrosa and colleagues hypothesise that sarcomerogenesis shifts
   the length-tension relationship, so the long-length advantage may shrink over time. That would be
   one reason why trained lifters show smaller effects [@pedrosa-2026-review] (speculative, FT).

### Disagreements
- **Size of the effect.** The Wolf/Varovic/Steele group (Bayesian, equivalence-oriented) reads the
  pooled data as "trivial at typical contrasts". Strey/McMahon/Pinto (frequentist) and the
  Brazilian/Japanese trial groups read the same body of trials as a reliable, moderate advantage. Each
  side's statistics fit its question. The practical difference is whether coaches should *replace*
  full ROM with lengthened partials (unsupported) or simply *avoid short-length bias* (supported).
- **Within-subject designs** dominate. Cross-education and shared systemic effects may shrink
  between-limb differences, so differences may be underestimated. Selective reporting of regional sites
  may inflate them.
- **Biarticular-muscle trials** (Maeo, Kinoshita) are the strongest evidence. But they confound length
  with active-insufficiency-driven differences in force (gastrocnemius) and with differences in absolute
  load.

### Unknown (RQ2)
- Long-length effects in well-trained lifters over more than 12 weeks, with MRI.
- Whether lengthened partials *added to* full-ROM sets (as in Goli 2026) beat extra full-ROM sets in
  trained people.
- Upper-body pressing and pulling, and the trunk, are almost unstudied.
- Whether the benefit wanes with training age.

---

## RQ3. What do eccentric, flywheel and isometric training add for hypertrophy and strength?

### Eccentric vs concentric
- **Schoenfeld 2017** (15 studies): eccentric training gave a small, non-significant advantage. ES
  difference 0.25 (95% CI -0.03 to 0.52; p = 0.076); mean growth 10.0% vs 6.8%
  [@schoenfeld-2017-ecc-con] (contested, ABS).
- **da Silva 2025** (26 studies, 682 participants): no significant difference, SMD 0.285 (-0.131 to
  0.701), I² 84.4%, **GRADE very low**. Subgroups favoured eccentric work in the upper limbs, in
  interventions of ≤8 wk, for thickness outcomes and with isokinetic devices [@da-silva-2025-ecc-con]
  (contested, ABS). The "≤8 wk" and "thickness" subgroups are exactly where oedema could inflate early
  eccentric "growth" [@damas-2016].
- **Roig 2009** (20 RCTs): eccentric training at high intensities grew girth more, with a trend for CSA.
  The advantage was tied to the higher loads possible eccentrically [@roig-2009] (promising, ABS).
- **Maeo 2018** (work-matched maximal isokinetic): with total work matched, eccentric training still
  increased ACSA (+4%, eccentric leg only) and torque (+76% vs +28%). Most of the torque gain was
  explained by EMG (neural) [@maeo-2018] (promising, ABS).
- **Architecture, not amount.** Concentric and eccentric training grew VL volume similarly (+8% vs
  +6%). Eccentric training lengthened fascicles more (+12% vs +5%) and grew the distal region more
  (+8% vs +2%), while concentric training increased pennation angle more (+30% vs +5%)
  [@franchi-2014] (promising, ABS). Mechanism: eccentric contractions stretch fibres under load and
  favour sarcomeres added in series. Concentric work favours parallel addition. MAPK signalling was
  eccentric-specific.
- **Tempo.** Hypertrophy is insensitive to repetition tempo between ~1 s and ~3.5 s: pooled difference
  0.09 (95% CrI -0.04 to 0.22), trivially favouring faster tempos, 14 studies [@enes-2025-tempo]
  (promising, ABS). Deliberately slow eccentrics are therefore not a hypertrophy lever on their own.
- **Interpretation.** Per repetition at the same relative effort, eccentric and concentric work give
  similar growth. Eccentric overload can raise tension beyond concentric capacity, and that is where
  any extra benefit lies (Roig). Eccentrics change muscle shape (fascicle length, distal growth) more
  than muscle size.

### Accentuated eccentric loading (AEL)
- **Walker 2016** (n = 28 strength-trained men, 10 wk, eccentric load = concentric + 40%): AEL increased
  isometric torque more than control (+18% vs +1%), along with eccentric torque, voluntary activation
  and work capacity. **Hypertrophy was similar to traditional training** [@walker-2016] (promising, FT).
- **Zhong 2025** (20 lower-body trials, no pooling): chronic AEL gave strength +9-22% and jump +4-11%,
  comparable or superior to traditional training. GRADE was moderate for strength and low to very low
  for speed [@zhong-2025-ael] (promising, ABS). An earlier review flagged inconsistent methods and
  hinted at IIx-specific adaptations [@wagle-2017] (speculative, ABS).
- **Cowley 2026 Bayesian NMA** of seven advanced methods: strength and power were similar across
  methods (all CrIs crossed zero), and no method consistently produced superior hypertrophy
  [@cowley-2026-advanced-nma] (promising, ABS).
- Bottom line: AEL is a **strength/neural** tool in trained lifters, not a demonstrated hypertrophy tool.

### Flywheel (isoinertial) training
- **Maroto-Izquierdo 2017** (9 studies, 276 participants): flywheel eccentric overload beat weight-stack
  training across outcomes. Pooled SMD 0.63 (0.49 to 0.76) mixed all outcomes, including hypertrophy
  [@maroto-izquierdo-2017] (contested, ABS).
- **Petré 2018** (20 studies): the reported effect sizes (CSA 0.59, strength 1.33, power 1.19) are
  **within-group pre-post** effects. Only one study had a conventional comparator [@petre-2018]
  (promising that flywheel training works; FT). Do not cite it as evidence of superiority.
- **Vicens-Bordas 2018**: not superior for strength, SMD -0.05 (-0.51 to 0.40); too little data for
  hypertrophy [@vicens-bordas-2018] (contested, ABS).
- **Hu 2024** (16 studies, 341 participants): strength SMD 0.24 (-0.26 to 0.74), ns. Power SMD 0.47
  (0.10 to 0.84) favoured flywheel, against weight stacks but not free weights [@hu-2024-flywheel]
  (promising, ABS). Team-sport meta-analysis: power and agility favoured flywheel, strength did not. Its
  SMDs are implausibly large, which suggests data problems [@eidiyan-kakhki-2026] (speculative, ABS).
  Cowley 2026: flywheel best for jump [@cowley-2026-advanced-nma].
- Bottom line: flywheel training grows muscle comparably to conventional training. Its distinctive
  benefit is **power/jump**. Claims of superior hypertrophy rest on early, small, unmatched comparisons.

### Isometric training
- **Oranchuk 2019** (26 studies, no pooling): isometrics at long muscle lengths gave more hypertrophy
  (0.86-1.69%/week) than at short lengths (0.08-0.83%/week) and transferred more to dynamic
  performance. Ballistic intent improved rapid force [@oranchuk-2019] (promising, ABS).
- **Lum & Barbosa 2019**: for hypertrophy, about 70-75% MVC, 3-30 s holds and >80-150 s total
  contraction per session. For strength, 80-100% MVC with 1-5 s holds. Strength gains are angle-specific
  [@lum-2019-isometric] (convention, ABS).
- **Varovic 2025** (trained): long-length isometrics ≈ full-ROM dynamic training for quadriceps growth
  [@varovic-2025-isometric] (speculative, ABS).
- Mechanism: isometrics at long lengths combine high active tension with passive tension and long time
  under tension. Short-length isometrics place fibres on the ascending limb, where both active force and
  passive tension are low.

### Unknown (RQ3)
- Long-term hypertrophy effects of AEL and flywheel training in well-trained lifters with MRI.
- Whether the extra fascicle length from eccentric or long-length work changes performance or injury
  risk (outside this chapter's scope).

---

## RQ4. How effective is blood-flow restriction training and when is it useful?

### Effectiveness
- **Low-load BFR ≈ high-load for hypertrophy, < high-load for strength.**
  - Geng 2024: hypertrophy ESdiff -0.067 (95% CI -0.205 to 0.071), 34 effects, I² 0%. Strength
    -0.335 (-0.515 to -0.156), 63 effects [@geng-2024] (established, FT).
  - Oborn 2025 umbrella (47 meta-analyses, 265 unique studies, all rated low-to-moderate quality):
    BFR vs low load without BFR, hypertrophy SMD 0.39 (0.23 to 0.54). BFR vs high load, -0.13
    (-0.30 to 0.05). Strength vs high load, -0.28 [@oborn-2025] (established, FT).
  - Lixandrão 2018 found the same pattern regardless of cuff width or pressure method
    [@lixandrao-2018] (established, ABS).
- **Trained individuals.** Geng's trained subgroup favoured BFR for hypertrophy, ESdiff 0.695 (0.189
  to 1.200), but from **only 3 effects**. For strength it was 0.491 (0.154 to 0.827) from 14 effects
  [@geng-2024] (speculative, FT). Oborn found smaller hypertrophy responses in athletes than in young
  adults [@oborn-2025] (FT). Trials in trained people:
  - Powerlifters: VL CSA +7.7% vs +0.5% after two 5-session BFR blocks, with type I fibre growth and
    myonuclear addition [@bjornsen-2019] (promising, ABS).
  - Trained men: split squat with low-load BFR ≈ high load (VL MT +8.1% vs +9.3%) [@wang-2026-bfr]
    (promising, ABS).
  - Athletes meta-analysis: BFR with low-intensity RT improved strength but added nothing beyond
    comparators [@zhang-2025-bfr-athletes] (promising, ABS).
- **High-load + BFR adds nothing**: size g = 0.08 (-0.18 to 0.34), strength g = 0.11 (-0.11 to 0.33),
  8 studies, very low certainty [@mckee-2026] (promising, ABS).
- **Is the cuff itself necessary?** Submaximal low-load BFR grew muscle as much as low-load training to
  failure without a cuff (+0.14 vs +0.17 cm). Submaximal low-load without BFR grew less (+0.06 cm).
  Strength gains were equal across all three [@kataoka-2026] (promising, FT). BFR is one route to the
  high-recruitment state that failure also produces.

### Mechanisms
- The cuff restricts venous outflow and partly restricts arterial inflow. Hypoxia and metabolite
  accumulation speed fatigue, which forces recruitment of higher-threshold motor units at loads of
  20-40% 1RM. Their fibres then experience high tension as they slow down. This is consistent with the
  "metabolites act through recruitment" view [@dankel-2017-metabolites] and with Kataoka's
  BFR ≈ failure result.
- Type I fibre growth in powerlifters [@bjornsen-2019] suggests BFR preferentially loads fibres that
  heavy, low-repetition training under-stimulates.
- The strength deficit relative to high loads reflects specificity: there is no practice with heavy
  loads [@geng-2024].

### Prescription and safety
- Position stand: 20-40% 1RM; 2-4 sets, commonly 30-15-15-15 (75 reps); 30-60 s rest with the cuff
  inflated; 5-10 min restriction per exercise; 2-3 sessions/week (or 1-2/day for 1-3 weeks).
  Pressure: 40-80% of individually measured arterial occlusion pressure, with higher pressure at ~20%
  1RM [@patterson-2019] (convention, FT).
- Safety: minimal adverse events for venous thromboembolism in the literature. Screen for VTE risk
  factors. Higher pressures raise cardiovascular responses [@patterson-2019] (promising, FT).
- Autoregulated cuffs offered no benefit over standard cuffs in trained men [@akcay-2026] (promising,
  ABS). An automated device was reported reliable but not valid for lower-limb occlusion pressure in
  trained athletes (Lang 2026, title only, not recorded). Measuring occlusion pressure properly matters
  more than the device.

### When BFR is useful for trained adults (inference, graded)
- When heavy loading is temporarily undesirable (joint irritation, deloads, in-season fatigue
  management): growth comparable to heavy loads with less mechanical load (promising).
- As an add-on block to target type I fibres or add volume at low joint stress (speculative).
- Not useful added to heavy sets [@mckee-2026] (promising).
- Not a strength-maximising tool on its own (established).

### Unknown (RQ4)
- Long-term (>12 wk) BFR in well-trained lifters.
- Whether BFR's trained-subgroup advantage is real (3 effects).
- Optimal pressure for trained limbs.

---

## RQ5. How regional is hypertrophy, how should exercise selection reflect it, and how valid are the measures?

### Hypertrophy is nonuniform (established)
- Growth differs within muscles (proximal/mid/distal) and between synergists. Single-site measures
  misrepresent training effects [@nunes-2024-sites] (established, ABS).
- Regions most activated in the first session (MRI T2) grew most over 12 weeks [@wakahara-2013]
  (promising, ABS). Heavy squats and jump squats grew different vasti regions, and neither grew the
  rectus femoris [@earp-2015] (promising, ABS).
- Modelled operating length (more than force) predicted which hamstring head was most damaged and most
  hypertrophied after knee-flexion exercises (75% of cases), but not after stiff-leg deadlifts
  [@morin-2026] (speculative, ABS).

### Exercise selection: what changes
- **Rectus femoris needs knee extension (or hip-extended knee work).**
  - Knee extension +13.2% vs leg press +1.1%. The vasti and whole quadriceps grew similarly (+7.1% vs
    +4.9%, ns). Only the leg press grew the gluteus maximus (+15.4%) and adductor magnus (+6.2%).
    EMG mirrored these patterns [@kinoshita-2026] (promising, FT).
  - Squats did not grow the RF [@kubo-2019; @earp-2015], while leg extensions grew all RF regions
    [@zabaleta-korta-2021] (promising, ABS).
  - Mechanism: in squats and leg presses the RF shortens at the knee while lengthening at the hip, so
    it works near constant length with low relative force. Its activation is also lower.
- **Gluteus maximus and adductors need deep hip flexion.** Full squats grew them more than half squats
  [@kubo-2019]. Hip thrusts and squats grew the glutes similarly, but squats grew the quadriceps (+3.6
  cm²) and adductors more. Hip-thrust EMG advantages did not predict growth [@plotkin-2023-hip-thrust]
  (promising, ABS).
- **Hamstrings** grow according to hip position and exercise: seated > prone leg curl [@maeo-2021].
  Lengthened-state eccentric work grows BFlh and SM (hip extensors), while Nordics grow ST and BFsh
  [@maeo-2024-nordic]. Stiff-leg deadlifts bias SM [@morin-2026].
- **Gastrocnemius needs a straight knee** [@kinoshita-2023] and a dorsiflexed range [@kassiano-2023-calf].
- **Triceps long head**: overhead work [@maeo-2023]. **Elbow flexors**: incline vs preacher shifts growth
  between biceps and brachialis/brachioradialis without changing the total [@kobayashi-2026].
- **Resistance profile with ROM matched**: cable vs dumbbell lateral raises grew the lateral deltoid
  equally in trained lifters (BF 0.22-0.27) [@larsen-2025-lateral-raise] (promising, ABS).
- **Variation**: systematic variation that targets different regions may help. Excessive random
  rotation may hinder progress [@kassiano-2022-variation] (promising, ABS).
- **EMG as a guide is unreliable**: it mirrored growth in Kinoshita 2026 but not in Plotkin 2023.
  Activation is necessary but not sufficient. Muscle length and force at the operating range also
  matter.

### Measurement validity
- **MRI** (volume, or CSA at multiple slices) is the reference standard. Most of the decisive
  length/selection trials above used it.
- **Ultrasound**:
  - Mid-thigh thickness tracks MRI ACSA change (r = 0.69) but not whole-muscle volume change (r =
    0.33, ns) [@franchi-2018-mt] (promising, ABS). The reason is that hypertrophy is regional.
  - Panoramic/extended-field CSA agrees well with MRI for the quadriceps (CCC 0.78) but poorly for the
    gastrocnemius (CCC 0.37; specificity for hypertrophy 33%) [@scott-2017-panoramic] (promising, ABS).
  - A 2026 palm-sized extended-field device: ICC 0.996, SDC 2.35 cm², change vs MRI r = 0.92
    [@fukumitsu-2026] (promising, ABS).
  - Implication: many lengthened-partial and calf trials rely on single-site ultrasound thickness and
    should be weighted below MRI trials.
- **DXA lean mass** is a whole-region proxy that includes water, glycogen and connective tissue. Its
  change correlated only moderately with MRI CSA change (r = 0.58) [@ruple-2022-imaging] (promising,
  ABS).
- **Biopsy fibre CSA** correlated *negatively* with MRI change (r = -0.57) in one study
  [@ruple-2022-imaging]. Across levels (biochemical, ultrastructural, fibre, whole-muscle, whole-body),
  change scores often disagree, so "hypertrophy" is not one construct [@haun-2019-measurement]
  (established, FT).
- **Oedema**: early CSA increases coincide with oedema (raised echo intensity and T2), so measurements
  in the first ~3 weeks, or within ~72 h of a session, overstate growth [@damas-2016] (promising, ABS).
  Eccentric and novel-exercise conditions are most affected.

### Unknown (RQ5)
- Whether regional growth in trained lifters follows the same patterns.
- How much region-specific growth matters for performance.
- Standardised multi-site protocols are rarely used.

---

## Gaps

1. **Training status.** Mechanistic, muscle-length and exercise-selection trials with MRI are almost all
   in untrained people. Only a handful of trials (mostly 6-8 wk, ultrasound) test lengthened partials,
   long-length isometrics, AEL or BFR in trained lifters. None tests competitive strength athletes over
   a full season.
2. **Duration.** Nearly all trials last 6-12 weeks. Whether long-length advantages persist or fade with
   sarcomerogenesis is untested.
3. **Muscle coverage.** The quadriceps, hamstrings, triceps surae and elbow muscles dominate. Pectorals,
   lats, deltoids (except Larsen 2025), trunk muscles and the multiarticular compound lifts are barely
   studied for length effects.
4. **Serial sarcomere number in humans** after long-length or eccentric training has never been
   measured. Fascicle length is mostly extrapolated [@wolf-2026-longitudinal].
5. **Contrast size.** The meta-analyses test small length contrasts (~22% of muscle length); dose-response
   by length contrast is unknown [@varovic-2025-muscle-length].
6. **Within-subject designs** may underestimate between-condition differences (cross-education) or
   inflate them (site selection). Few trials pre-register their regional sites.
7. **Muscle memory** in humans: whether retained myonuclei speed regrowth is unproven
   [@cumming-2024; @psilander-2019].
8. **BFR in trained people**: the hypertrophy advantage rests on 3 effects [@geng-2024].
9. **Measurement**: discordance between DXA, ultrasound, MRI and histology is unresolved. Trials should
   report MRI volume or multi-site ultrasound, avoid measuring during the oedema window and report
   typical error.
10. **Full texts not read** (numbers from abstracts only): Strey 2026, Lixandrão 2018, Schoenfeld 2017,
    da Silva 2025, Maroto-Izquierdo 2017, Pedrosa 2022, Maeo 2023, Kubo 2019, McMahon 2026, Cumming
    2024. These are priorities for the verification pass.
