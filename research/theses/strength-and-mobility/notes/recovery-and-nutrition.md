# Research notes: Chapter 10, Recovery, sleep, nutrition and monitoring

Researcher notes behind `chapters/10-recovery-and-nutrition.md`. Population of the thesis: healthy,
trained adults (recreational to competitive strength athletes). Evidence searched through
2026-11-24 (Europe PMC REST API and full-text XML, PubMed E-utilities, PMC, publisher and
repository pages, web search with a dedicated 2025-2026 sweep for each question).

Every source cited here has a record in `evidence/sources/<id>.yml`: 70 records, all with this
chapter in `cited_in`. Two are shared with chapter 11: `morton-2018-protein` and
`weakley-2021-devices`. Each finding carries its grade (established | promising | contested |
speculative | convention) and the read level of the number: **FT** = number read in the full text,
**Abs** = abstract only, **Sec** = taken from a secondary source. Only FT numbers may be stated as
verified in the chapter.

**Full texts read (19):** Craven 2022, Lamon 2021, Saner 2021, Kong 2025, Morton 2018, Nunes 2022,
Trommelen 2023, Kreider 2017 (ISSN creatine), Burke 2023, Wang 2024, Ashtary-Larky 2025, Xu 2024,
Grgic 2018, Guest 2021 (ISSN caffeine), Pinero 2024, Fuchs 2020, Berjisian 2026, Davis 2020, Saw
2016.

**Three warnings for the whole chapter.**

1. **Population mismatch.** Almost every trial here was run on young men. Most were untrained or
   "recreationally active" and tested over 4-12 weeks. Competitive strength athletes are rare in the
   samples. Sleep studies on performance are acute (one night). Supplement meta-analyses mix
   trained and untrained people, and protein meta-analyses also mix in older adults.
2. **Acute versus chronic.** A large share of the mechanistic evidence comes from acute muscle
   protein synthesis (MPS) and signalling studies: sleep loss, protein dose, cold water and
   antioxidants. Acute MPS often fails to predict long-term hypertrophy. Claims that X "blunts
   adaptation" are strong only where training studies agree; this is true for cold water, and
   partly true for ibuprofen.
3. **Measurement confounds.** DXA "lean mass" and "fat-free mass" include water and glycogen.
   This matters most for creatine, which draws water into muscle, and for energy deficits, which
   deplete glycogen. Where direct imaging (MRI, ultrasound) disagrees with DXA, prefer imaging.

---

## RQ1. How do sleep restriction, deprivation and extension affect strength performance and adaptation?

### 1.1 Acute sleep loss and next-day strength

- **Craven 2022 is the reference meta-analysis** [@craven-2022-sleep] *(FT)*. It covers 69
  publications, 227 outcomes and 959 participants (89% male). Acute sleep loss was one night of 6 h
  or less.
  - Across all tasks, performance fell by -7.56% (95% CI -11.9 to -3.13; I2 98%). *Established.*
  - **Strength fell only modestly:** -2.85% (95% CI -4.47 to -1.23), 25 studies, n = 289, 66
    outcomes, I2 62%. *Established.*
  - By protocol, only **total deprivation** was significant: -3.00% (-4.52 to -1.48). Restriction
    as a whole was -2.77% (-6.75 to 1.21). Early restriction (going to bed late) was -1.16% (-2.57
    to 0.25). Late restriction (waking early) was -4.45% (-9.30 to 0.41). *Established (direction);
    promising (protocol differences).*
  - **Lower-body strength** fell by -3.42% (-5.54 to -1.31). **Upper-body strength** did not change
    significantly: -1.63% (-3.30 to 0.04). *Promising.*
  - **Strength-endurance** fell by -9.85% (-19.6 to -0.13), but this rests on 5 studies (n = 62),
    and the estimate lost significance when single studies were removed. *Speculative.*
  - **Time awake and time of day.** For deprivation and late restriction, performance fell by about
    0.4% per hour awake before the task. For strength after late restriction specifically, the drop
    was -1.07% per hour (-2.05 to -0.10). Afternoon tasks were affected consistently; morning tasks
    largely were not. *Promising.*
- **Kong 2025** [@kong-2025-sleep-deprivation] *(FT)* covers 45 RCTs and crossovers to September
  2024. Sleep deprivation reduced **maximal force in athletes**: SMD -0.35 (95% CI -0.56 to -0.14).
  The effect was largest for partial deprivation **at the end of the night** (PSDE): SMD -0.57 (-0.94
  to -0.19). Afternoon tests showed SMD -0.30 (-0.51 to -0.09). RPE rose: SMD 0.39 (0.11 to 0.66).
  *Promising.*
  - **Terminology trap.** Kong's abstract calls PSDE "early sleep deprivation", but the methods
    define PSDE as deprivation at the *end* of the night (early waking). That is Craven's "late
    restriction". Read this way, the two meta-analyses agree: losing the last part of the night
    hurts more than going to bed late.
- **Knowles 2018** [@knowles-2018-sleep-strength] *(Abs)* is a systematic review of 17 studies of
  moderate or weak quality. One night without sleep had little effect on strength. Consecutive
  nights of restriction reduced force in **multi-joint but not single-joint** lifts. *Promising.*
- **Easow 2025** [@easow-2025-sleep-strength] *(Abs)*, a review of 13 studies, found inconsistent
  results across protocols and tests. *Contested.*

### 1.2 Sustained restriction in trained lifters

- **Knowles 2022** [@knowles-2022-sleep-restriction-females] *(Abs)* is a crossover in 10
  resistance-trained women: nine nights of 5 h in bed versus 7 h or more, with four lifting
  sessions per condition.
  - Volume load fell trivially (less than 1%).
  - Mean concentric velocity on lower-body compound lifts was up to 15% slower.
  - Squat intraset velocity loss was up to 7% greater.
  - Session RPE rose 11%, salivary cortisol AUC rose 42% and training distress rose 84%.
  - Upper-body lifts were not affected.
  - **The quality of lifting (velocity and effort) degraded more than the quantity.** *Promising.*

### 1.3 Mechanisms

- **Central and perceptual mechanisms.** Higher RPE at the same load (Kong; Knowles 2022) suggests
  that much of the acute effect is central: motivation, perceived effort and homeostatic sleep
  pressure. Several observations fit this. Knowles 2018 found that motivation (training in groups)
  or caffeine could offset the losses. Effects scale with time awake (Craven). Larger multi-joint
  and lower-body lifts suffer more; they need more neural drive and coordination than single-joint
  or upper-body tasks. Afternoon tasks are hit harder, which fits rising sleep pressure and
  circadian misalignment. Craven lists candidate mechanisms (neural drive, perceived effort,
  hormones, temperature, glycogen) but did not test them. *Promising (central mechanism as
  leading explanation; not directly isolated).*
- **Anabolic resistance after a single night.** Lamon 2021 [@lamon-2021-sleep-mps] *(FT)* is a
  crossover in 13 untrained young adults with no exercise. One night of total deprivation:
  - reduced postprandial mixed-muscle protein synthesis by 18% (0.072 vs 0.059 %/h, p = .040);
  - raised cortisol by 21% and lowered testosterone AUC by 24%;
  - left breakdown markers (MuRF1, MAFbx mRNA) unchanged.

  *Promising (mechanism); the effect on training adaptation is untested.*
- **Mitochondrial and metabolic effects, offset by exercise.** Saner 2021
  [@saner-2021-sleep-restriction] *(FT)*: five nights of 4 h in bed lowered **sarcoplasmic**
  (mitochondria-enriched) protein synthesis. FSR was 1.11 %/day with restriction versus 1.77 %/day
  when HIIE was added during the restriction. Restriction also lowered mitochondrial respiration
  and glucose tolerance. **HIIE performed during the restriction prevented all of these changes.**
  *Promising.* Note: secondary sources describe this as "myofibrillar" synthesis; the paper
  measured the sarcoplasmic fraction.
- **Interaction with exercise at the gene level.** Knowles 2024
  [@knowles-2024-sleep-transcriptome] *(Abs)* used the same nine-night protocol in trained women.
  Sleep restriction alone did not change the muscle transcriptome, but it changed how the
  transcriptome responded to resistance exercise (about 3,000 transcripts). *Speculative for
  adaptation.*

### 1.4 Chronic adaptation (hypertrophy and strength gains)

- **No randomised trial has tested whether chronic sleep restriction blunts hypertrophy or
  strength gains in trained lifters.** The only training study found is observational. Borba 2024
  [@borba-2024-habitual-sleep] *(Abs)* compared untrained middle-aged habitual short sleepers
  (about 6.3 h a day) with adequate sleepers over 16 sessions. Gains in repetitions and arm muscle
  area did not differ. *Speculative.*
- The mechanistic chain is plausible but unproven: lower MPS (Lamon), an altered response to
  exercise (Knowles 2024) and lower lifting quality (Knowles 2022) could together reduce the
  training stimulus. *Speculative.*

### 1.5 Sleep extension and sleep hygiene

- **Cunha 2023** [@cunha-2023-sleep-interventions] *(Abs)* reviewed 25 intervention studies in
  athletes. **Sleep extension and naps** were the most studied and most effective interventions
  for sleep and subsequent performance. Sleep hygiene education and cold water immersion showed no
  effect. Few studies measured strength. *Promising for performance in general; speculative for
  strength.*
- **Walsh 2021 consensus** [@walsh-2021-sleep-consensus] *(Abs)*:
  - Elite athletes often sleep less than 7 h, with fragmented sleep.
  - The effect of partial restriction over 1-3 nights is unclear.
  - The panel recommends an individualised target based on perceived sleep need rather than a fixed
    7-9 h, plus screening and education. *Convention (target); promising (descriptive).*

### 1.6 Disagreements

- **How large is the effect?** "Sleep loss ruins strength" is not supported for one night. Maximal
  strength drops about 3%, mainly after full deprivation or early waking. Effort-dependent,
  repeated and afternoon work is hit harder.
- Easow 2025 and Knowles 2018 read the same small, heterogeneous literature as inconsistent. Craven
  pooled it and found a small, consistent effect.
- **Acute performance versus adaptation.** These two are routinely conflated in the field. The
  adaptation claim currently rests on mechanism only.

### 1.7 Unknown

- Effects of chronic partial restriction (5-6 h for weeks) on hypertrophy and strength gains in
  trained lifters.
- Whether sleep extension raises strength or training quality in lifters who already sleep enough.
- Sex differences: most trials are in men; Knowles is in women only.
- Whether sleep quality or fragmentation matters independently of duration. Craven could not
  analyse fragmentation (one study).

---

## RQ2. What protein and energy intakes maximise strength and hypertrophy, including in a deficit?

### 2.1 Daily protein dose

- **Morton 2018** [@morton-2018-protein] *(FT)*: 49 RCTs, 1,863 participants, at least 6 weeks of
  training (mean 13 weeks). Protein supplementation added:
  - **+2.49 kg to 1RM** (95% CI 0.64 to 4.33), about **9% of the 27 kg gained from training
    itself**. It had no effect on MVC: SMD 0.04 (-0.09 to 0.16). *Established.*
  - **+0.30 kg FFM** (0.09 to 0.52), +310 um2 fibre CSA (51 to 570) and +7.2 mm2 mid-femur CSA (0.20
    to 14.30). *Established.*
  - **Break point 1.62 g/kg/day (95% CI 1.03 to 2.20) for FFM.** This is fitted on 42 study arms
    and 723 participants with DXA. **The segmental model was not statistically significant (p =
    0.079)**, and no break point was fitted for strength. *Promising* (the number is widely
    over-quoted as precise).
  - Benefit was larger in resistance-trained people (+0.75 kg, 0.09 to 1.40) and fell with age
    (-0.01 kg per year). *Promising.*
  - Mean baseline intake was already about 1.4 g/kg/day.
- **Nunes 2022** [@nunes-2022-protein] *(FT)*: 74 RCTs of healthy, non-obese adults, rated with
  GRADE.
  - More protein during resistance training gave **LBM SMD 0.22 (0.14 to 0.30)**, about 0.5-0.7 kg
    more than control. **Moderate certainty.** *Established.*
  - In adults under 65, only intakes of **1.6 g/kg/day or more** gave a significant LBM benefit:
    SMD 0.30 (0.17 to 0.43). At 1.2-1.59 g/kg/day the SMD was 0.15 (-0.02 to 0.31). *Promising.*
  - **Lower-body strength:** SMD 0.21 (0.08 to 0.34) overall and **0.40 (0.23 to 0.57) at 1.6 or
    more g/kg/day**, both low certainty. The abstract misprints this CI as 0.09:0.35; Table 4 gives
    0.23-0.57. **Bench press:** SMD 0.18 (0.04 to 0.32), low certainty. **Handgrip:** 0.15 (-0.03
    to 0.32), very low certainty. *Promising.*
- **Tagawa 2021** [@tagawa-2021-protein-dose] *(Abs)*: 105 RCTs, 5,402 participants; spline
  dose-response, mixed populations.
  - Lean mass rose by +0.39 kg per extra 0.1 g/kg/day below 1.3 g/kg/day and by +0.12 kg per 0.1
    g/kg/day above it.
  - The curve **flattens but does not plateau**, and resistance training markedly reduced the
    flattening.
  - The authors are employed by a dairy company. *Promising.*
- **Reconciliation.** Morton (segmented regression) finds a plateau near 1.6 g/kg/day with a wide
  CI. Tagawa (spline) and Nunes (subgroups) find continuing but diminishing returns. In practice
  they converge: **about 1.6 g/kg/day captures most of the benefit for most trained people; up to
  about 2.2 g/kg/day (Morton's upper CI) covers individual variation.** No meta-analysis shows harm
  or further gain above that. *Promising (range); established (that the added effect is small next
  to training).*

### 2.2 Per-meal dose, distribution and timing

- **Trommelen 2023** [@trommelen-2023-protein-dose] *(FT)*: RCT, 36 recreationally active young
  men, 60 min of whole-body resistance exercise, then 0, 25 or 100 g of intrinsically labelled
  milk protein. Quadruple tracer, 12-h measurement.
  - MPS was dose-dependent over 12 h: 100 g > 25 g > 0 g.
  - Myofibrillar synthesis was about 20% higher at 0-4 h and **about 40% higher at 4-12 h** with
    100 g versus 25 g.
  - Dietary amino acids incorporated into muscle: 18% of 25 g (about 4.5 g) versus **13 g (13%)
    of 100 g**, the latter still rising linearly at 12 h.
  - Amino acid oxidation and whole-body breakdown changed little. *Promising.*
  - **Mechanism.** After leucine "switches on" anabolic signalling, the magnitude and duration of
    synthesis track **amino acid availability (substrate)**. A large, slow bolus extends the
    postprandial period instead of being oxidised.
  - **Limits.** Milk protein is 80% casein (slow), so a fast whey bolus might plateau. The study
    used untrained men after whole-body exercise, measured acute synthesis rather than
    hypertrophy, and found responses not yet back to baseline at 12 h.
- **Critique and reply.** Witard and Mettler 2024 [@witard-2024-protein-commentary] *(Abs)* accept
  the finding but argue:
  - it does not justify dismissing protein distribution;
  - the participants were anabolically sensitive and untrained;
  - emerging data suggest "no upper limit" does not hold in resistance-trained young women.

  Trommelen 2024 [@trommelen-2024-protein-reply] *(Sec; not read)* defends the interpretation.
  *Contested.*
- **Older per-meal heuristics.** Schoenfeld and Aragon 2018 [@schoenfeld-2018-protein-meal]
  *(Abs)* suggested about 0.4 g/kg per meal over at least four meals to reach at least 1.6
  g/kg/day. The ISSN 2017 stand [@jager-2017-issn-protein] *(Abs)* gives 0.25 g/kg or 20-40 g every
  3-4 h with 700-3,000 mg leucine, and 30-40 g casein before sleep. *Convention.* Both predate
  Trommelen; neither is a tested ceiling.
- **Timing.** Schoenfeld 2013 [@schoenfeld-2013-protein-timing] *(Abs)*: once total daily protein
  is controlled, protein near the session has no effect on strength (20 studies) or hypertrophy (23
  studies). Total intake was the strongest predictor of hypertrophy. *Established.* The "anabolic
  window" is wide.
- **Distribution trials.**
  - Yasuda 2020 [@yasuda-2020-protein-distribution] *(Abs)*: untrained men, 12 weeks, matched daily
    protein. A protein-rich breakfast **tended** to give more lean mass than a dinner-skewed pattern
    (+2.5 kg). *Speculative.*
  - Tavares 2025 [@tavares-2025-protein-frequency] *(Abs)*: resistance-trained men, 8 weeks, 18 of
    32 completed. Three versus five protein meals (each above 0.24 g/kg) gave similar gains in lean
    mass, CSA and 1RM. *Speculative (underpowered).*
- **Synthesis.** Total daily protein dominates. Distribution and timing are second-order and
  unproven for long-term outcomes. Three to five meals of about 0.3-0.5 g/kg is a reasonable
  *convention*, not a requirement.

### 2.3 Energy deficit

- **Murphy and Koehler 2022** [@murphy-2022-energy-deficit] *(Abs)*:
  - Resistance training in an energy deficit **impaired lean-mass gains** (ES -0.57, p = 0.02) but
    **not strength gains** (ES -0.31, p = 0.28).
  - In the cross-study Analysis B, lean mass changed by ES -0.11 in deficit versus 0.20 in control;
    strength by 0.84 versus 0.81.
  - Meta-regression: **a deficit of about 500 kcal/day prevented lean-mass gains.**

  *Promising (lean mass impaired, strength spared); speculative (the 500 kcal threshold).*
- **Mechanism.** Energy deficit lowers MPS and anabolic hormones. Strength gains rely heavily on
  neural adaptation and skill, which need little energy, and so are spared. DXA lean mass also
  falls with glycogen and water in a deficit, which exaggerates apparent "muscle" loss. *Promising.*
- **Protein in a deficit.**
  - Longland 2016 [@longland-2016-deficit-protein] *(Abs)*: about 40% deficit for 4 weeks with
    resistance training plus HIIT 6 days a week. 2.4 g/kg/day gave +1.2 kg LBM versus +0.1 kg at
    1.2 g/kg/day (4-compartment model), with more fat loss. Performance was similar. The sample
    was overweight young men, not lean athletes. *Promising.*
  - Refalo 2025 [@refalo-2025-protein-deficit] *(Abs)*: 29 studies of **trained**, non-obese,
    energy-restricted people. There was a >97% probability of a **linear** protein-FFM
    relationship with no clear plateau. Per g/kg FFM: beta 0.06 (95% HDI 0.01 to 0.12). The
    relationship was stronger when intake was scaled to FFM, in men, in leaner people and over
    more than 4 weeks. The authors call the findings exploratory. *Promising (direction);
    speculative (moderators).*
  - Helms 2014 [@helms-2014-contest-nutrition] *(Abs)* and ISSN 2017: 2.3-3.1 g/kg **FFM** per day
    while dieting lean, and lose about 0.5-1% of body mass per week. *Convention.*
- **Why needs rise in a deficit.** Protein is oxidised more when energy is short, and lean people
  have less reserve. The leaner and the larger the deficit, the higher the protein that is
  justified. *Promising (mechanism), convention (specific numbers).*

### 2.4 Energy surplus

- Helms 2023 [@helms-2023-energy-surplus] *(Abs)*: trained lifters, 8 weeks, maintenance versus
  +5% versus +15% energy, 17 completers. Faster body-mass gain **mainly added fat**. Gain in
  biceps thickness was only weakly predicted (BF10 = 1.4), squat 1RM showed no group effect, and
  bench 1RM rose more in the large-surplus group. *Speculative.*

### 2.5 Unknown

- A break point measured in trained lifters with direct hypertrophy measures rather than DXA.
- Whether infrequent large boluses (Trommelen pattern) match frequent moderate meals over months of
  training.
- Protein needs of women and of very heavy athletes (g/kg body mass versus g/kg FFM).
- Optimal deficit size and rate of loss for strength athletes making weight. Little direct
  evidence exists.

---

## RQ3. Creatine, caffeine and weaker supplements

### 3.1 Creatine: strength

- **Lanhers 2015 and 2017** [@lanhers-2015-creatine-lower] [@lanhers-2017-creatine-upper] *(Abs)*:
  - Lower limb: 60 RCTs, ES 0.235 (0.125 to 0.346).
  - Upper limb: 53 RCTs, ES 0.317 (0.185 to 0.449); bench press 0.265 (0.132 to 0.398).
  - Effects did not depend on population, dose or duration. *Established.*
- **Wang 2024** [@wang-2024-creatine-strength] *(FT)*: 23 RCTs in adults under 50, mostly men,
  training 4-12 weeks.
  - Upper body **+4.43 kg (3.12 to 5.75)**; lower body **+11.35 kg (8.44 to 14.25)** beyond
    training plus placebo. *Established.*
  - Significant in men (upper +4.95 kg, lower +11.68 kg) but not in women (2 studies, 40 women).
    *Promising (sex difference; data sparse).*
  - Training status, loading and duration did not moderate the effect. Doses above 5 g/day trended
    toward larger lower-body gains (p = 0.068). *Speculative.*
- **Wang 2026** [@wang-2026-creatine] *(Abs)*: three-level meta-analysis, 63 studies, n = 1,489.
  Upper-body strength g 0.54, lower-body g 0.55, lean mass g 0.30. Effects were larger in younger
  samples. *Established.*

### 3.2 Creatine: hypertrophy versus "lean mass"

- **Ashtary-Larky 2025** [@ashtary-larky-2025-creatine-training-status] *(FT abstract and
  introduction)*: 61 trials. **FFM +1.39 kg (1.07 to 1.70)** with no change in fat mass. Trained
  lifters gained 1.82 kg and novices 1.23 kg; the difference was not significant. *Established (FFM
  rises).*
- **Burke 2023** [@burke-2023-creatine-hypertrophy] *(FT)*: 10 studies with **direct imaging**.
  - Pooled **SMD 0.11 (95% CrI -0.02 to 0.25)**, a very small effect.
  - Muscle thickness rose a further +0.10 to 0.16 cm.
  - Young adults: ES 0.23 (0.01 to 0.44). Older adults: 0.06 (-0.10 to 0.21). *Promising.*
- **The disagreement, and why.** DXA and BIA count creatine's intracellular water as fat-free
  mass. Creatine is an osmolyte, and loading adds about 1 kg of body mass early. Direct imaging
  shows a real but much smaller hypertrophy effect. **Conclusion: creatine adds a small amount of
  muscle and a moderate amount of strength; a 1-2 kg "lean mass" figure overstates the
  hypertrophy.** *Promising.*
- **Mechanism** [@kreider-2017-creatine] *(FT)*:
  - Supplementation raises muscle total creatine and phosphocreatine (PCr) by **20-40%**, from a
    usual 60-80% saturation.
  - Faster PCr resynthesis supports more reps and sets at a given load. The main pathway to strength
    and size is probably **more training work** (better "training quality").
  - Secondary pathways have been proposed but are not established in humans: cell swelling as an
    anabolic signal, satellite cells and myogenic regulatory factors, glycogen.
  - The mechanism also explains why women (who may have higher baseline stores), vegetarians (low
    baseline stores) and non-responders (already saturated stores, fewer type II fibres) differ.
    *Promising.*
- **Dosing and safety** [@kreider-2017-creatine] *(FT)* [@antonio-2021-creatine-questions] *(Abs)*:
  - Load at about 0.3 g/kg/day (about 20 g in four doses) for 5-7 days, then 3-5 g/day; or take
    3 g/day for about 28 days.
  - The ISSN finds no compelling evidence of harm up to 30 g/day for 5 years in healthy people.
  - Concerns about kidneys, hair loss, cramping and dehydration are judged unfounded.
  - **Conflict of interest:** the authors of both papers declare substantial creatine-industry
    funding or advisory roles (e.g., the Alzchem scientific advisory board). The Kreider 2017
    update was prepared at the request of the Council for Responsible Nutrition and the ISSN.

  *Established (efficacy, dosing); promising (long-term safety, given the authorship).*

### 3.3 Creatine: cognition

- **Prokopidis 2023** [@prokopidis-2023-creatine-memory] *(Abs)*:
  - Memory improved overall: SMD 0.29 (0.04 to 0.53).
  - The benefit sat in older adults (66-76 y; SMD 0.88). **Young people (11-31 y) showed no effect:
    SMD 0.03 (-0.14 to 0.20).**
  - A letter identified **double counting of participants** (Eckert and Pascher 2023). The
    authors' reanalysis reportedly found no overall effect but kept the older-adult effect (Sec;
    reply not read). *Contested.*
- **Xu 2024** [@xu-2024-creatine-cognition] *(FT)*: 16 RCTs, n = 492, healthy adults and patients
  mixed. Memory SMD 0.31 (0.18 to 0.44), **GRADE moderate**. No effect on overall cognition or
  executive function. *Promising (memory, mixed populations).*
- **McMorris 2024** [@mcmorris-2024-creatine-cognition] *(Abs)*: brain creatine rises only modestly,
  and cognitive results are equivocal. Effects, if any, may appear only under stress (sleep loss,
  hypoxia). *Contested.*
- **Sleep deprivation.** Gordji-Nejad 2024 [@gordji-nejad-2024-creatine-sleep-deprivation] *(Abs)*:
  a single 0.35 g/kg dose during 21 h of deprivation changed brain high-energy phosphates and
  reduced cognitive decline. A 2026 follow-up at 0.2 g/kg (n = 29) found smaller benefits.
  *Speculative.*
- **For healthy young trained adults: a cognitive benefit is unproven.** Possible exceptions are
  sleep-deprived states and older lifters.

### 3.4 Caffeine

- **Grgic 2018** [@grgic-2018-caffeine] *(FT)*:
  - 1RM strength SMD 0.20 (0.03 to 0.36); jump power SMD 0.17 (0.00 to 0.34).
  - Upper body 0.21 (0.02 to 0.39); lower body 0.15 (-0.05 to 0.34), not significant.

  *Established (small strength effect); promising (upper/lower split).*
- **Grgic 2020 umbrella** [@grgic-2020-caffeine-umbrella] *(Abs)*: 21 meta-analyses. Caffeine is
  ergogenic for strength, muscular endurance, power and aerobic endurance, with **moderate GRADE**
  for strength and endurance. Effects are larger for aerobic than for anaerobic exercise.
  *Established.*
- **ISSN 2021** [@guest-2021-caffeine] *(FT)*:
  - **3-6 mg/kg about 60 min before** exercise; possibly as little as 2 mg/kg. About 9 mg/kg adds
    side-effects without added benefit.
  - Gum works faster than capsules.
  - Caffeine may help performance during sleep deprivation, but it can disturb sleep.

  *Established (dose); convention (timing).*
- **Habitual intake.** Carvalho 2022 [@carvalho-2022-habitual-caffeine] *(Abs)*: 60 studies,
  overall SMD 0.25 (0.20 to 0.30). Habitual intake did not moderate the effect (p = 0.59),
  including for strength. Xiao 2025 [@xiao-2025-caffeine-velocity] *(Abs)*: 12 studies, n = 230.
  Bar velocity SMD 0.42 (0.19 to 0.65; I2 85%) and power SMD 0.21. The velocity effect was larger in
  **low habitual users (SMD 0.87 vs 0.21)**. *Contested (habituation).*
- **Mechanism.** The main mechanism is central: **adenosine-receptor antagonism**. It raises
  neural drive and arousal and lowers perceived effort and pain. Effects on muscle calcium handling
  probably need supraphysiological doses. Responses vary with genotype (CYP1A2, ADORA2A), anxiety
  and sleep sensitivity [@guest-2021-caffeine]. The same adenosine mechanism explains two things:
  why caffeine partly offsets sleep-loss performance decrements, and why late-day caffeine
  shortens and lightens sleep. **There is a trade-off between evening sessions and sleep.**
  *Promising.*
- **Monitoring caveat.** Because caffeine raises bar velocity by about 0.4 SD, it confounds
  velocity-based readiness tests unless intake is standardised. *Promising (inference).*

### 3.5 Weaker supplements and things that may harm adaptation

- **IOC 2018** [@maughan-2018-ioc-supplements] *(Abs)*: only caffeine, creatine, specific buffering
  agents (beta-alanine, bicarbonate) and nitrate have good performance evidence. Contamination with
  prohibited substances is a real risk, so batch-tested products are advised. *Established
  (classification); convention (practice).* Buffers and nitrate mainly help efforts of about
  30 s-10 min and endurance; strength-specific evidence was **not reviewed here** (gap).
- **HMB.** Jakubowski 2020 [@jakubowski-2020-hmb] *(Abs)*: in 11 studies of young adults, there
  was no effect on FFM, fat mass or strength. *Promising (null).* Earlier positive HMB trials are
  disputed.
- **Antioxidants.**
  - Paulsen 2014 [@paulsen-2014-antioxidants] *(Abs)*: high-dose vitamins C and E (1,000 mg and
    235 mg a day) **blocked mitochondrial-biogenesis markers** during endurance training (COX4 +59%
    vs -13%). VO2max gains were unchanged.
  - Clifford 2020 [@clifford-2020-antioxidants] *(Abs)*: across 9 resistance training trials, there
    was no detectable effect on lean mass or strength: SMD -0.07 (-0.36 to 0.23).
  - **Mechanism:** reactive oxygen species act as adaptive signals; quenching them can blunt
    signalling.

  *Promising (no meaningful harm to RT outcomes at the performance level); speculative (molecular
  blunting matters).*
- **Anti-inflammatory drugs.** Lilja 2018 [@lilja-2018-nsaid] *(Abs)*: maximal over-the-counter
  ibuprofen (1,200 mg a day for 8 weeks) **halved quadriceps hypertrophy** compared with low-dose
  aspirin (+3.7% vs +7.5%; difference 34 cm3) and blunted some strength gains. **Mechanism:**
  cyclooxygenase-dependent prostaglandin signalling contributes to the hypertrophic response.
  *Promising.* Occasional use is untested.

### 3.6 Disagreements and unknowns

- Creatine cognition (Prokopidis versus Xu versus McMorris).
- Whether creatine helps trained women: data sparse.
- Caffeine habituation: Carvalho versus Xiao.
- How much "lean mass" from creatine is muscle.
- Much of the creatine literature is authored by researchers with industry ties. Independent
  replications such as Burke's imaging meta-analysis give smaller hypertrophy estimates.

---

## RQ4. Which recovery modalities help or harm adaptation?

### 4.1 Cold water immersion (CWI)

- **Pinero 2024** [@pinero-2024-cwi] *(FT)*: 8 studies, Bayesian meta-analysis.
  - Comparative **cSMD -0.22 (95% CrI -0.47 to 0.04)**, with p(<0) = 0.957 and p(<-0.1) = 0.834.
  - Training alone gave SMD 0.36 (0.10 to 0.61); CWI plus training gave 0.14 (-0.08 to 0.36).
  - Training status did not moderate the effect.
  - Study quality was fair to poor. *Promising.*
- **Grgic 2023** [@grgic-2023-cwi-strength] *(Abs)*: 10 studies, n = 170, 92% male.
  - Strength ES -0.23 (-0.45 to -0.01).
  - **Limb-only CWI: -0.31 (-0.61 to -0.01). Whole-body CWI: -0.08 (-0.53 to 0.38).** *Promising.*
- **Malta 2021** [@malta-2021-cwi] *(Abs)*: 8 articles. Strength outcomes SMD -0.60 (-0.87 to
  -0.33); ballistic -0.61. **No effect on endurance adaptations** (-0.07). *Promising.* The
  estimate is larger than later analyses because several outcomes were pooled per study.
- **Berjisian 2026 umbrella** [@berjisian-2026-cwi-umbrella] *(FT)*: 15 meta-analyses, 161 unique
  studies.
  - CWI **reduces soreness (up to 96 h) and CK (24-72 h)**, accelerates vagal reactivation and
    improves power and jump recovery at 24-72 h.
  - Used repeatedly after resistance training, it **impairs strength and hypertrophy gains**.
  - Review quality was low to critically low (AMSTAR 2) and certainty low to very low (GRADE).
  - The chronic-adaptation reviews overlap by 64%.

  *Promising.*
- **Yu 2026 network meta-analysis** [@yu-2026-cwi-nma] *(Abs)*: 87 RCTs, n = 2,313. For strength
  in resistance training, **passive recovery ranked best**: medium/moderate CWI versus passive g
  0.00 (-0.38 to 0.38), moderate certainty. CWI improved perceived recovery (g -0.66) and damage
  markers (g -0.51). *Promising.*
- **Mechanism (the best-supported story in the chapter).**
  - Roberts 2015 [@roberts-2015-cwi] *(Abs)*: 12 weeks of CWI after strength sessions removed the
    gains in type II fibre CSA (+17% with active recovery only) and myonuclei (+26%). Acutely, CWI
    blunted satellite-cell (Pax7, NCAM) and p70S6K responses.
  - Fuchs 2020 [@fuchs-2020-cwi-mps] *(FT)*: cooling one leg to 8 C after exercise lowered:
    - **dietary amino acid incorporation** (0.016 vs 0.021 MPE);
    - acute myofibrillar protein synthesis (0.058 vs 0.072 %/h);
    - **two-week daily MyoPS (1.48 vs 1.67 %/day).**
  - **Proposed pathway.** Cold constricts blood vessels and lowers muscle temperature, which reduces
    amino acid delivery and slows enzyme kinetics. It also damps the inflammatory and
    satellite-cell response that supports remodelling. Endurance adaptations rely less on this
    pathway, which may explain why they are spared.
  - The limb-only versus whole-body difference (Grgic) fits a local-cooling mechanism, but rests on
    few studies.

  *Promising.*
- **Practical reading.** CWI trades long-term hypertrophy and strength for short-term soreness and
  power recovery. It is defensible in competition phases and tournaments. After hypertrophy or
  strength sessions in a building phase, it is counterproductive. *Promising.*

### 4.2 Massage, compression, heat

- **Massage.**
  - Davis 2020 [@davis-2020-massage] *(FT)*: 29 RCTs, n = 1,012. **No effect on strength: SMD
    0.17 (-0.08 to 0.42)**, nor on jump, sprint, endurance or fatigue. **DOMS improved: SMD 1.13
    (0.44 to 1.82; I2 86%)**, and flexibility slightly.
  - Dupuy 2018 [@dupuy-2018-recovery] *(Abs)*: 99 studies. Massage was the most effective method
    for DOMS and perceived fatigue. Recovery techniques overall reduced CK (SMD -0.37), IL-6
    (-0.36) and CRP (-0.38).

  *Established (no performance effect); promising (soreness relief).* No evidence of harm to
  adaptation.
- **Compression.** Brown 2017 [@brown-2017-compression] *(Abs)*: 23 studies.
  - Overall ES 0.38 (0.25 to 0.51).
  - **Strength recovery ES 0.62 (0.39 to 0.84)**, largest at 2-8 h (1.14) and beyond 24 h (1.03).
  - Benefits were largest after resistance exercise.
  - A placebo is impossible and only acute outcomes were measured. *Promising.*
- **Heat.**
  - Stadnyk 2018 [@stadnyk-2018-heat] *(Abs)*: n = 10, untrained. Heating the trained thigh above
    38 C gave identical hypertrophy (+15% vs +15%) and 3RM gains.
  - Ahokas 2023 [@ahokas-2023-sauna] *(Abs)*: one 20-min infrared sauna after training reduced
    the next-morning CMJ drop and soreness without disturbing night-time HRV.

  *Speculative.* No meta-analysis exists of heat and resistance training adaptation; animal and
  sedentary-human data on heat-induced hypertrophy were not reviewed.
- **Mechanism.** Massage and compression act mainly on **perception** (pain modulation, perceived
  fatigue) and possibly on fluid shifts and oedema. They do not act on the anabolic signalling that
  drives adaptation, so they neither help nor harm long-term gains. Their value is comfort and
  readiness. *Promising.*

### 4.3 How recovery time course depends on training

- Morán-Navarro 2017 [@moran-navarro-2017-recovery] *(Abs)*: trained men. Sets taken to failure
  (3x10 with 10 possible) slowed recovery of CMJ and bar velocity by **24-48 h** compared with
  volume-matched sets stopped halfway (3x5 or 6x5 with 10 possible). Metabolic and hormonal markers
  stayed elevated longer. *Promising.* **How the session is dosed (proximity to failure) changes
  recovery needs more than any modality does** (cross-reference chapter 3).
- Kellmann 2018 consensus [@kellmann-2018-recovery-consensus] *(Abs)* frames recovery as the
  balance of stress and recovery, to be monitored and individualised. *Convention.*

### 4.4 Unknown

- Whether whole-body CWI truly spares adaptation.
- Minimum time gap between CWI and training that avoids blunting (several hours? the next day?).
- Heat as an adaptation aid in trained lifters.
- Effects in women: all CWI chronic trials are male-dominated.

---

## RQ5. Which readiness and fatigue monitoring tools are valid and useful for strength athletes?

### 5.1 Subjective wellness

- **Saw 2016** [@saw-2016-subjective] *(FT)*: 56 studies. **Subjective measures** (POMS, RESTQ-S,
  DALDA, MTDS and others) **tracked acute and chronic training load more sensitively and
  consistently than objective measures** (blood markers, heart rate). The two generally did not
  correlate. *Promising.* The evidence comes mostly from endurance and team sports, with validated
  multi-item tools rather than ad-hoc single items.
- **Duignan 2020** [@duignan-2020-wellness] *(Abs)*: 21 team-sport studies of **single-item**
  scores (soreness, fatigue, sleep quality, stress, mood). Associations with load ranged from none
  to very large, mostly trivial to moderate in the largest datasets. Measurement properties are
  largely unestablished. *Contested.*

### 5.2 Heart rate variability (HRV)

- Plews 2013 [@plews-2013-hrv] *(Abs)*: single-day readings mislead. Use rolling (for example
  7-day) averages of ln rMSSD and their coefficient of variation. In elite athletes both rises and
  falls can signal maladaptation. *Promising* (endurance athletes).
- Manresa-Rocamora 2021 [@manresa-rocamora-2021-hrv-guided] *(Abs)*: HRV-guided **endurance**
  training improved vagal HRV (SMD 0.50). Gains in VO2max and performance were small and not
  significant (SMD 0.20). *Promising (small at most).*
- **For strength training there is no meta-analysis.** A web search found only small RCTs (older
  women; untrained men; a mixed functional-training trial). HRV-guided programming matched fixed
  programmes for strength, sometimes with less training stress. These trials were seen in search
  results only and have no records, so they are not citable. *Speculative.*
- **Mechanism.** HRV indexes cardiac vagal (autonomic) status. It responds to whole-body stress,
  sleep and aerobic load, but **local neuromuscular fatigue after heavy lifting moves it little**,
  which limits its specificity for strength athletes. *Promising (inference).*
- Thorpe 2017 [@thorpe-2017-fatigue] *(Abs)*: quick non-exhaustive tests (self-report, HR indices,
  jumps) are promising, but practitioners rarely define a minimal important change. Links to
  performance, injury and illness are unproven. *Promising.*

### 5.3 Bar velocity

- **Device validity.** Weakley 2021 [@weakley-2021-devices] *(FT per chapter 11 record)*: linear
  position transducers are the most accurate and reliable commercial devices. Most validation
  studies lack a gold-standard criterion and conflate device error with biological error.
  *Promising (LPT superiority); established (methodological weakness).*
- **Sensitivity to recovery and sleep.**
  - Velocity against a fixed load tracked the 24-48 h recovery after failure versus non-failure
    sets [@moran-navarro-2017-recovery] *(Abs)*.
  - Velocity, not volume load, revealed sleep restriction in trained women: up to -15% on
    lower-body lifts [@knowles-2022-sleep-restriction-females] *(Abs)*.

  *Promising.* Velocity at a standard warm-up load is the most specific objective readiness signal
  for lifters.
- **Confounders.** Caffeine raises velocity by about 0.4 SD [@xiao-2025-caffeine-velocity]. Time
  of day, warm-up and device error also matter. *Promising.*

### 5.4 Countermovement jump (CMJ) and grip

- Claudino 2017 [@claudino-2017-cmj] *(Abs)*: 151 studies. **Average CMJ height across several
  jumps** was more sensitive to fatigue and supercompensation than the best jump. *Promising.*
  Limits: jump strategy (countermovement depth) can change height without a change in capacity,
  and the samples were mostly jump-trained or team-sport athletes. CMJ is less specific to
  upper-body or heavy low-velocity lifting.
- **Grip strength.** No validation of grip as a readiness test for strength athletes was found. It
  appears only in exploratory tactical and field studies. *Speculative (gap).*

### 5.5 Synthesis and disagreement

- No readiness tool has been shown to improve **long-term strength or hypertrophy** when used to
  adjust training, compared with good fixed programming or in-session autoregulation (RPE and
  RIR; see chapter 4).
- The best-supported practical stack is:
  - a brief validated wellness questionnaire, tracked against the athlete's own baseline;
  - in-session RPE and RIR;
  - bar velocity at a standard load;
  - optionally, an averaged CMJ.

  This is a *convention* built from *promising* components.
- HRV is plausible for athletes with heavy aerobic loads, but **speculative** for pure strength
  athletes.

---

## Cross-cutting mechanisms (for the chapter's explanatory spine)

1. **Substrate plus signal.** Muscle gain needs a mechanical signal (training) and substrate:
   amino acids, plus energy to support synthesis. Protein dose, energy balance, sleep (MPS
   -18%) and cold (less amino acid delivery and lower MyoPS) all act on the substrate and
   synthesis arm. Each effect is small next to the training signal itself (protein about 9% of
   strength gain in Morton).
2. **Inflammation and ROS as signals, not just damage.** CWI, high-dose NSAIDs and high-dose
   antioxidants damp signals (satellite cells, prostaglandins, ROS) that the adaptive response
   uses. That is why "faster recovery" can mean "smaller adaptation".
3. **Central fatigue and perception.** Sleep loss, caffeine, massage and compression act largely
   through perceived effort, arousal and pain. This explains why their acute effects are real but
   do not transfer, or transfer only partly, to long-term adaptation.
4. **Work capacity.** Creatine (PCr resynthesis) and caffeine (central drive) let athletes do more
   or higher-quality work per session. Creatine's chronic benefit likely runs through this pathway.
5. **Measurement.** DXA water and glycogen confound creatine and deficit studies. Velocity and
   subjective measures detect degraded *quality* of lifting before volume load does.

---

## Gaps

- **Sleep and adaptation.** No RCT of chronic sleep restriction (or extension) on hypertrophy or
  strength gains in trained lifters. All performance data are acute, and nearly all participants are
  male.
- **Sleep extension for strength.** No dedicated trial was found; reviews pool sport-skill and
  sprint outcomes.
- **Protein in trained athletes.** There is no break-point analysis restricted to trained lifters
  with imaging outcomes. The Witard-Trommelen dispute (one large bolus versus distributed intake)
  is unresolved by long-term trials, and the reply text was not read (Sec). The cited "trained
  women" counter-evidence was not located.
- **Energy deficit specifics.** The 500 kcal/day threshold comes from a cross-study meta-regression.
  No trial in strength athletes compares deficit sizes or rates of loss for strength retention.
- **Creatine.**
  - Women: two studies in the Wang 2024 strength analysis.
  - The cognition reanalysis after the double-counting letter was read only second-hand.
  - Industry-linked authorship dominates the field.
- **Caffeine.** Habituation is unresolved (Carvalho versus Xiao). No chronic trial asks whether
  repeated pre-session caffeine improves long-term strength gains.
- **Other supplements.** Beta-alanine, nitrate, bicarbonate, omega-3, tart cherry and vitamin D
  were not reviewed in depth for strength outcomes. HMB rests on one meta-analysis read at abstract
  level.
- **Recovery modalities.**
  - The minimum delay between CWI and training that avoids blunting is unknown.
  - Whole-body versus limb immersion rests on few studies.
  - There is no meta-analysis of heat or sauna with resistance training adaptation.
  - Massage and compression data are acute and unblinded.
- **Monitoring.**
  - No meta-analysis of HRV-guided resistance training.
  - No validation of grip strength as a readiness test.
  - No trial shows that readiness-guided adjustment beats in-session RPE/RIR autoregulation for
    long-term outcomes.
- **Records read only at abstract level** that carry load-bearing numbers: Murphy and Koehler 2022,
  Grgic 2023 (CWI), Malta 2021, Roberts 2015, Lanhers 2015 and 2017, Carvalho 2022, Xiao 2025,
  Lilja 2018, Brown 2017. A verifier should check these against full text.
- **Records not included that were seen only in search results:** HRV-guided resistance-training
  RCTs (2019 untrained men; 2024 older women), a 2026 trial of slight deficit in trained adults
  (EJAP), a 2025 infrared-sauna training study, and a 2026 network meta-analysis of supplements in
  athletes.
