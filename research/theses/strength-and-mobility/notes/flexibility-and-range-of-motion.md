# Chapter 6 research notes: Flexibility and range of motion

These are the researcher notes behind `chapters/06-flexibility-and-range-of-motion.md`. Searched
2026-11-24 using Europe PMC, PubMed E-utilities, PubMed Central and web search, with a dedicated
2025-2026 sweep on each question. Every source has a record in `evidence/sources/<id>.yml`: 54 new
records, plus two existing chapter-5 records that were extended and had their DOIs corrected
(`warneke-2024-stretch`, `warneke-2023-stretch-review`).

**Tags.** Each finding carries `[@id]`, a grade (established | promising | contested | speculative |
convention) and the read level of its number:

- **FT**: full text read.
- **ABS**: abstract only.
- **SEC**: the number is quoted from another paper.

Only FT numbers may be stated as verified.

**Full texts read (16).** Ingram 2025 (mechanisms), Ingram 2024 (dose; publisher PDF mirror),
Konrad 2023 (chronic ROM), Behm 2023 (acute ROM), Alizadeh 2023, Afonso 2021, Warneke & Lohmann
2024, Warneke 2024 (stretch strength/hypertrophy MA), Arntz 2023, Arntz 2024, Panidi 2023
(fascicle MA), Warneke 2023 (EJAP; stretching vs RT), Kaczorowski 2026, Konrad 2025 (detraining),
the Warneke 2025 Delphi consensus, and the Warneke 2025 stretch-mediated hypertrophy (SMH) opinion
paper. For Siegel 2026, Panidi 2021, Warneke 2024 (recalculation) and Afonso 2021 (opinion), the
full text was downloaded but numbers were taken from the abstract, so those records say `abstract`.

**Population caveat that runs through the chapter.** Almost all of this literature studies
recreationally active or untrained young adults, mostly men, and mostly two muscle groups:

- **Muscle groups.** Plantar flexors were 60% of studies in Ingram 2025, and hamstrings 29%.
- **Training status.** In Ingram 2024, only 30 of 148 chronic effects came from "trained"
  participants and 3 from athletes. In Konrad 2023, 4 effects came from elite athletes. Panidi 2023
  had one athletic sample.
- **Strength athletes.** No trial studied strength athletes' ROM in competition lifts.
- **Implication.** Every statement about trained lifters below is an extrapolation. The one usable
  moderator signal is that people with less baseline flexibility, or less training, gain more:
  - Ingram 2024: average vs poor baseline flexibility g = -0.34.
  - Alizadeh 2023: trained 0.43 vs untrained 1.03.

**Measurement caveat.**

- **What ROM means.** "ROM" in this literature is usually *passive* end ROM: the angle at which the
  participant asks to stop, or at maximal tolerated torque. It is therefore partly a sensory
  measure by construction.
- **Stiffness.** Measures vary: the slope of the passive torque-angle curve (with inconsistent
  start points), muscle-tendon-junction displacement, or shear-wave elastography.
- **Fascicle length.** Measured with single-image ultrasound plus extrapolation, or with panoramic
  ultrasound.
- **Stretch intensity.** Almost always self-rated discomfort.

These measurement choices drive several of the disagreements below.

---

## RQ1. What limits ROM, and what explains acute and chronic ROM gains: sensory theory or structural change?

### Definitions and what limits ROM

- **ROM and the passive torque-angle curve.** Joint ROM is the angular excursion available at a
  joint. *Passive* ROM is limited by:
  - joint geometry: bony configuration, which matters especially at the ankle (Konrad 2023
    discussion; Delphi);
  - the passive resistance of the muscle-tendon unit (MTU), fascia, nerves and capsule;
  - the person's willingness to tolerate the stretch sensation.

  End ROM in a test is where the participant stops, and passive torque at that point is the
  "maximum tolerable passive torque". This is the standard operational index of stretch tolerance.
- **Two ways to gain ROM.** A gain is "structural/mechanical" if the passive torque-angle curve
  shifts, giving less torque at the same angle (lower stiffness or a longer MTU). It is "sensory"
  if the same curve is simply followed further, reaching higher torque at end range
  [@weppler-2010-extensibility] (ABS, promising).
- **Muscle activity does not limit slow stretches.** Reflex EMG is negligible during slow passive
  stretch, in healthy people and in people with complete spinal cord injury.
  - Torque falls during a 90-s hold: 33% in controls vs 38% in SCI, with no EMG change. This is
    viscoelastic stress relaxation, not reflex relaxation [@magnusson-1996-stress-relaxation]
    (ABS, established).
  - Reflex EMG "does not limit the range of movement during slow stretches"
    [@magnusson-1996-flexibility] (ABS, promising).

### Acute (single session) mechanisms

- **Stiffness falls; tolerance does not change.** A single bout of static stretching produces a
  small transient reduction in overall stiffness and no significant change in tolerable torque
  [@ingram-2025-stretching-mechanisms] (FT, promising; GRADE low/very low).
  - Stiffness: g = 0.42 (95% CI 0.21 to 0.63), or 0.33 after removing 5 outliers.
  - Maximum tolerable torque: g = 0.25 (95% CI -0.01 to 0.51), p = 0.05.
  - Fascicle length: unchanged, g = 0.11 (-0.26 to 0.47).
- **Intensity matters for the acute stiffness effect.** Moderate and high intensities (to
  discomfort or pain) reduced stiffness acutely; low intensity did not
  [@ingram-2025-stretching-mechanisms] (FT, speculative: intensity was coded from descriptions).
  The re-analysis by Warneke et al. found that only *long* durations reliably reduced muscle
  stiffness acutely [@warneke-2024-passive-properties-recalculation] (ABS). The Delphi panel's
  threshold for acute stiffness reduction is >4 min per muscle [@warneke-2025-delphi-consensus]
  (FT, convention).
- **The acute ROM gain fades fast.** Acute ROM gains typically last under 30 min
  [@behm-2016-acute-stretching] (ABS, promising). This fits a viscoelastic and thixotropic
  mechanism. Warm-up alone raises ROM, which is why Ingram excluded warm-up studies.
- **Size of the acute gain.**
  - Behm 2023: SMD 0.555 (95% CI 0.434 to 0.677) [@behm-2023-acute-rom] (FT, established;
    GRADE moderate).
  - Ingram 2024: g = 0.63 (0.52 to 0.75) [@ingram-2024-stretching-dose] (FT, established).
  - Neither was moderated by technique, intensity, training state or sex (Behm 2023).
- **Not specific to stretching.** Warm-up alternatives (foam rolling, cycling, jogging, eccentric
  RT, heat, vibration) give similar acute ROM [@warneke-2025-delphi-consensus] (FT, convention,
  citing Warneke 2024 JSHS, which was not retrieved).

### Chronic (weeks) mechanisms: the sensory-theory evidence

The foundational short trials all show ROM rising without a change in the torque-angle relation:

- **Magnusson 1996** [@magnusson-1996-flexibility] (ABS, promising).
  - Design: 3 weeks of hamstring stretching, n = 7.
  - At a fixed angle, stiffness, energy and peak torque were unchanged.
  - End ROM rose together with a "comparable increase in peak torque".
  - The authors concluded that the gain came from stretch tolerance, not tissue change.
- **Folpp 2006** [@folpp-2006-stretch-tolerance] (ABS, promising).
  - Design: 20 min per weekday for 4 weeks, within-subject, n = 20.
  - Extensibility at a standard torque: -1 deg (95% CI -4 to 3).
  - Angle at maximal tolerated torque: +8 deg (5 to 12).
- **Konrad & Tilp 2014** [@konrad-2014-static-stretching] (ABS, promising).
  - Design: 6 weeks, n = 49 randomised.
  - Dorsiflexion ROM rose from 30.9 to 36.3 deg.
  - No change in passive resistive torque, fascicle length, pennation angle, or muscle or tendon
    stiffness.
- **Blazevich 2014** [@blazevich-2014-plantar-flexor-stretch] (ABS, promising).
  - Design: 3 weeks.
  - Dorsiflexion ROM +19.9% and passive moment at end ROM +28%.
  - Muscle stiffness during stretch -18%, but resting fascicle length, tendon stiffness, EMG and
    motoneuron excitability did not explain the gain.
- **Freitas 2018 meta-analysis** [@freitas-2018-chronic-stretching-mtu] (ABS, promising).
  - 26 studies of 3-8 weeks.
  - Small effect for tolerated torque; trivial effects for resistance to stretch, architecture and
    muscle and tendon stiffness.
  - Conclusion: adaptations to programmes shorter than 8 weeks "seem to mostly occur at a sensory
    level".

### Chronic mechanisms: evidence that structure also changes (2023-2025)

- **Ingram 2025 meta-analysis (FT)** [@ingram-2025-stretching-mechanisms]. Promising, but GRADE
  is very low to low for every outcome.
  - Design: 65 studies, 1542 adults; chronic programmes averaged 4.7 sessions/week for 6.5 weeks.
  - Maximum tolerable torque (tolerance): g = 0.74 (95% CI 0.38 to 1.10).
  - Overall stiffness fell slightly: g = 0.37 (0.18 to 0.56).
  - Fascicle length did not change: g = 0.07 (-0.25 to 0.26), I2 = 0%.
  - Meta-regression, first of its kind: chronic ROM gains were associated with both higher
    tolerable torque (g = 0.74, 0.41 to 1.09; 16 studies) and lower stiffness (g = 0.59, 0.08 to
    1.10; 17 studies). Among stiffness measures, only "passive torque at a given angle" was
    significantly associated.
  - Authors' interpretation: acute gains are stiffness-driven, and chronic gains are mainly
    tolerance-driven, "with the relative contribution of stiffness... increasingly larger over
    time".
- **Takeuchi 2023 meta-analysis** [@takeuchi-2023-muscle-stiffness] (ABS, promising).
  - Design: 10 studies of 3-12 weeks.
  - Muscle stiffness fell moderately: ES -0.749.
  - No relation to total stretch duration (p = 0.881).
- **Warneke 2024 recalculation** [@warneke-2024-passive-properties-recalculation] (ABS, promising).
  - Re-analysed with dependency-robust models.
  - Chronic muscle stiffness -0.38 overall; supervised -0.49; long static -0.61.
  - Unsupervised and short-duration programmes: no effect.
  - Tendon stiffness: no effect.
  - Chronic passive peak torque at end ROM: +0.55.
  - Reading: muscle (not tendon) stiffness falls with enough supervised volume.
- **Tendon is not the compliant element.** Ingram 2025 found the smallest stiffness effect in
  tendon. They explain this by collagen content (muscle 1-10%, tendon 65-80%) and by series
  arrangement: under the same external torque, fascicles take more strain than tendon (FT).
- **The longest trial.** Moltubakk 2021 [@moltubakk-2021-six-month-stretching] (ABS, promising):
  - Design: 6 months, 4 x 60 s daily, n = 26, contralateral leg as control.
  - ROM: +11 deg in the stretched leg vs +4 deg in the control leg.
  - Passive torque at a standard angle: -10 vs -7 N m.
  - No change in tendon stiffness, resting tendon length or fascicle length.
  - The non-stretched leg changed in the same direction. This suggests a central (tolerance)
    contribution, a learning or test effect, or both.
- **Fascicle length (serial sarcomeres): disputed.**
  - **For.** Panidi 2023 [@panidi-2023-fascicle-meta] (FT, contested): 19 studies, n = 467,
    authors' GRADE "considerable confidence".
    - Resting fascicle length: SMD 0.17 (95% CI 0.01 to 0.33).
    - Fascicle length during stretch: SMD 0.39 (0.05 to 0.74).
    - The effect appeared only with high total volume (>=5400 s across the programme): 0.29
      (0.09 to 0.49) vs -0.06 for low volume.
    - It also appeared only with high intensity: 0.28 vs -0.05.
  - **Against.**
    - Ingram 2025 found no effect, even though half its studies used >=90 min of stretching.
      Ingram argues Panidi's effects were inflated by pooling several regions and heads of the
      same muscle within single studies without adequate clustering (FT).
    - Arntz 2024 criticises Panidi for omitting prediction intervals and excluding
      contralateral-control designs [@arntz-2024-stretch-hypertrophy] (FT).
    - Moltubakk 2021 (6 months) and Konrad & Tilp 2014 found no fascicle change.
  - **Panidi's confounder.** In Panidi's high-volume subgroup, programmes also lasted twice as
    long (10.6 vs 5.1 weeks). Volume and duration are therefore confounded.
  - **Strongest positive single study.** Panidi 2021 used panoramic ultrasound in adolescent
    female volleyball players stretching one leg 5 x/week for 12 weeks (9-15 min per session):
    - Resting gastrocnemius medialis fascicle length +6% in the stretched leg.
    - CSA +23% vs +13% in the control leg.
    - Grade: speculative, because of growth and sport-training confounds in adolescents
      [@panidi-2021-adolescent-stretching] (ABS).
- **Neural (spinal) adaptations.**
  - Guissard & Duchateau 2004 [@guissard-2004-stretch-training] (ABS, promising):
    - Design: 30 sessions.
    - Dorsiflexion +30.8%, associated with reduced passive stiffness (r2 = 0.88).
    - Reduced T-reflex (-36%) and H-reflex (-14%).
    - One month later, reflexes had returned to baseline while part of the ROM and stiffness change
      remained. Neural and mechanical adaptations therefore have different time courses.
  - Ingram 2025 cites this as support for a delayed neural basis of tolerance. Blazevich 2014
    found Hmax:Mmax decreases that did not explain the ROM gain.
  - The mechanism of "tolerance" itself is unknown. Candidate explanations:
    - reduced sensitivity of nociceptive endings;
    - central modulation;
    - expectation or familiarity with the sensation;
    - ischemic-compression analgesia (Ingram 2025 discussion, speculative).

### Mechanisms for other routes to ROM

- **Resistance training.** Alizadeh 2023 argues isoinertial RT acts like "dynamic stretching with
  load". This combines MTU stiffness changes, possible fascicle lengthening (especially with
  eccentric emphasis; Reeves et al. found fascicle length +20% eccentric vs +8% conventional, SEC)
  and increased stretch tolerance from end-range discomfort [@alizadeh-2023-rt-rom] (FT,
  speculative: argued, not measured).
- **Different stimulus.** Concentric/eccentric RT and dynamic stretching would excite rather than
  "disfacilitate" muscle spindles, so the spinal-reflex mechanism proposed for static stretching is
  unlikely to apply (FT).

### Disagreements and why

1. **"Sensory only" (Magnusson, Weppler, Freitas, Folpp, Konrad & Tilp) vs "sensory plus
   mechanical" (Ingram 2025, Takeuchi 2023, Warneke 2024 recalculation).** Most of the gap is
   explained by:
   - newer studies with longer, supervised, higher-volume protocols;
   - more studies, giving power to detect small stiffness changes (g ~0.4);
   - dependency-robust meta-analytic models;
   - ultrasound and elastography measures of *muscle* rather than whole-MTU stiffness.

   Both camps agree that tolerance is the largest single contributor over short programmes.
2. **Fascicle length.** Panidi 2023 says yes with high volume and intensity; Ingram 2025, Freitas
   2018 and Moltubakk 2021 say no. The causes are analytic (clustering, prediction intervals),
   measurement (extrapolated vs panoramic ultrasound) and population (adolescents in Panidi 2021).
3. **Tolerance is partly built into the outcome.** End-ROM tests stop at the point of discomfort,
   so "tolerance" and "ROM" are not independent. The ROM-tolerance meta-regression is partly
   circular. Ingram does not discuss this; it is my observation.

### What remains unknown

- Whether stiffness or fascicle changes accumulate over many months or years. Only Moltubakk
  (6 months) studied this, and it found none.
- The neural substrate of tolerance.
- Whether the mechanisms differ for loaded end-range training vs passive stretching.
- How fascia and nerves contribute: the Delphi notes a single RCT on fascia.
- Whether results from the plantar flexors and hamstrings transfer to the hip, shoulder and
  thoracic spine positions that matter to lifters.

---

## RQ2. Which stretching modalities and doses improve ROM most?

### Size of the chronic effect (established)

- **Ingram 2024** [@ingram-2024-stretching-dose] (FT, established; GRADE moderate).
  - Design: 189 studies, 6654 adults; static stretching only, passive controls, warm-up studies
    excluded.
  - Chronic effect: g = 0.96 (95% CI 0.84 to 1.09), I2 = 62%; 0.87 (0.77 to 0.97) after outliers.
- **Konrad 2023** [@konrad-2023-chronic-rom] (FT, established).
  - Design: 77 studies, 3870 participants, all techniques.
  - Effect: SMD 1.002 (0.840 to 1.165), I2 = 75%. Reporting bias detected (Egger p < 0.001).
- **Other estimates.**
  - Arntz 2023: flexibility SMD 0.96 (0.70 to 1.22) [@arntz-2023-chronic-stretching-strength] (FT).
  - Konrad 2025 detraining dataset: 0.93 (0.54 to 1.31) [@konrad-2025-detraining] (FT).
- **In degrees.** For hamstrings: passive SLR +12.0 deg (95% CI 9.6 to 14.5), passive knee
  extension +8.6 deg, active knee extension +8.4 deg [@medeiros-2016-hamstring-static] (ABS,
  established). Ankle gains are smaller, likely because of bony limits: Konrad 2023 triceps surae
  -0.70 vs hamstrings -1.16 (FT).

### Modality

- **Static and PNF beat ballistic/dynamic for chronic ROM** [@konrad-2023-chronic-rom] (FT,
  promising).
  - Static: SMD -1.005 (95% CI -1.184 to -0.825), k = 66.
  - PNF: -1.283 (-1.757 to -0.813), k = 11.
  - Ballistic/dynamic: -0.550 (-0.852 to -0.248), k = 8.
  - Between-technique p = 0.012; static vs PNF p = 0.28 (no difference).
  - Proposed reason: time under tension. Static and PNF hold the end position, while
    dynamic/ballistic swings in and out of it (FT, speculative).
- **Thomas 2018** found static > ballistic and PNF (p < 0.05) using percentage changes from 23
  studies [@thomas-2018-stretching-typology] (ABS, contested). This conflicts with Konrad on PNF.
- **Arntz 2023**: passive static (0.97) > active static (0.59) for flexibility (FT, promising).
- **Network meta-analysis (2026, ankle only)** [@park-2026-ankle-nma] (ABS, speculative).
  - Design: 41 RCTs, n = 1670.
  - Passive ROM: PNF (SUCRA 76.8%) and foam rolling (67.8%) ranked highest.
  - Over more than a month: PNF SMD 1.04 (0.64 to 1.44); foam rolling 1.03 (0.53 to 1.53).
  - Static stretching ranked best for long-term active ROM (SUCRA 72.4%).
  - SUCRA rankings magnify small differences.
- **Acute ROM: technique does not matter.** Behm 2023 technique p = 0.72 [@behm-2023-acute-rom]
  (FT, established). The Delphi recommends any technique, at least 2 x 5-30 s
  [@warneke-2025-delphi-consensus] (FT, convention).
- **Consensus.** For chronic ROM use static or PNF; 2-3 sets daily of 30-120 s per muscle "to reach
  the highest possible weekly volume" (95% agreement). The panel also says method choice can follow
  individual preference, because RT and foam rolling are alternatives (FT, convention).

### Dose

- **Weekly volume is what counts, with a plateau** [@ingram-2024-stretching-dose] (FT, promising).
  - Chronic gains stop rising beyond about **10 min of static stretching per muscle group per
    week**. The cubic spline was significant, QM(df = 3) = 10.0, p = 0.02, but the plateau was
    read by visual inspection.
  - Acute gains peak at about **4 min per session**, but the acute spline was not significant
    (p = 0.22).
  - Data are sparse at high volumes (spline knots at 3, 8, 16 and 173 min/week).
  - A UniSA press release gave 3 and 8 min. The paper says 4 and 10.
- **Frequency does not matter once volume is accounted for.**
  - Ingram 2024: weekly frequency g = -0.001 (-0.04 to 0.03).
  - Konrad 2023: frequency meta-regression p = 0.42; total duration p = 0.73.
  - Konrad 2023 notes most studies used ~1000 s in total, so power to find a dose response was low
    (FT).
- **Older advice differs.** Thomas 2018 recommended >=5 days/week and >=5 min/week and found
  frequency positively associated with ROM (ABS, contested). The Delphi recommends *daily*
  stretching. Both are more conservative than Ingram's volume-only reading.
- **Arntz 2023 found more is better.** More repetitions per session (beta = 0.094), more time per
  session (0.090) and more total time (0.078) gave larger flexibility gains (FT, promising). This
  does not contradict a plateau, because most studies sit below it.
- **High volume did not beat low volume in a direct test (2026)** [@luangpon-2026-older-volume]
  (ABS, promising; indirect population).
  - Design: older adults, 30 min/day vs 3 min three times per week.
  - ROM +12.4 vs +10.3 deg; no detectable difference (equivalence not tested).
- **Low weekly dose can work (2026)** [@kaczorowski-2026-low-volume] (FT, promising).
  - Design: 2 x 60 s once per week, at maximal tolerable intensity.
  - Sit-and-reach +3.9 cm over 6 weeks vs control (d = 1.65).
  - This is only 2 min/week, below Ingram's plateau.
- **Intensity: no moderation of chronic ROM.**
  - Konrad 2023: low -0.92 vs high -1.05 (p = 0.54).
  - Ingram 2024: low 0.82, moderate 1.05, high 0.84 (all n.s.).
  - Ingram 2025 notes intensity *does* moderate acute stiffness reduction.
  - Panidi 2023 suggests high intensity is needed for fascicle change.
  - Practical reading: discomfort is not needed for ROM gains, but it may matter if a structural
    adaptation is the goal (speculative).
- **Supervision.** In Konrad 2023, fully supervised studies showed numerically larger effects
  (-1.08) than periodically supervised (-0.75) or unsupervised (-0.74), p = 0.17 (FT). The
  Warneke recalculation found supervised programmes reduced stiffness and unsupervised ones did
  not (ABS).
- **Who gains most.**
  - People with poor baseline flexibility gain more: Ingram 2024 average vs poor g = -0.34 (-0.59
    to -0.08).
  - Females gained more in Konrad 2023: -1.56 vs -0.89, p = 0.036. Ingram 2024 found no sex
    difference.
  - Training status did not moderate: Ingram trained 0.99 vs sedentary 1.19, p = 0.40; Konrad
    elite athletes -1.30, k = 4.
  - Muscle: Ingram found no muscle difference (quadriceps 0.63 and spine 0.46 were n.s., k <= 4).
    The Delphi flags hip adductors (acute) and quadriceps (chronic) as weak responders.

### Disagreements and why

- **Frequency.** Thomas 2018 (more days is better) vs Ingram 2024 and Konrad 2023 (no effect).
  Thomas used percentage changes from 23 studies and did not separate frequency from total volume.
- **PNF vs static.** Konrad 2023 found no difference (PNF numerically higher); Thomas found static
  better; the 2026 NMA ranked PNF top for the ankle. Differences in pooling metrics and small PNF
  samples explain most of this.
- **Dose ceiling.** Ingram 2024 supports ~10 min/week. Arntz 2023 shows more time means more gain.
  The Delphi says "highest possible weekly volume". The data at high volumes are too thin to settle
  it, and the plateau may differ for people chasing extreme ROM (Konrad 2023 discussion).

### What remains unknown

- Dose-response at high weekly volumes, and in people who are already flexible (gymnasts, or
  lifters with adequate ROM).
- An objective measure of stretch intensity.
- Long-term (>6 months) cumulative gains.
- Transfer of passive ROM gains to *active*, loaded end-range positions such as squat depth or
  overhead position.

---

## RQ3. Does full-range resistance training improve flexibility as much as stretching?

### Findings

- **RT improves ROM versus no training (promising to established).**
  - Alizadeh 2023 [@alizadeh-2023-rt-rom] (FT):
    - Design: 55 studies, 2756 participants aged 8-79.
    - Effect: SMD 0.73 (95% CI 0.545 to 0.913), I2 = 74%.
    - By equipment: free weights 1.31, machines 0.96, bands 1.13, Pilates 0.70; body-weight-only
      0.23, n.s.
  - Favro 2025 [@favro-2025-rt-flexibility] (ABS, promising):
    - Design: 36 studies, 1469 adults, three-level model.
    - Effect: g = 0.63 (0.48 to 0.79). High-intensity RT gave larger gains (p = 0.02).
    - No included study was at low risk of bias.
- **Head-to-head comparisons are non-inferior in point estimate but imprecise (contested).**
  - Afonso 2021 [@afonso-2021-strength-vs-stretching] (FT; GRADE moderate):
    - Design: 11 supervised RCTs, n = 452.
    - Effect: ES -0.22 (95% CI -0.55 to 0.12), p = 0.21, I2 = 65%. The point estimate slightly
      favours stretching.
  - Alizadeh 2023:
    - RT vs stretching: SMD 0.084 (-0.558 to 0.725), 7 studies, I2 = 79%.
    - RT plus stretching vs stretching alone: -0.001 (-0.42 to 0.42), 4 studies.
    - Authors' conclusion: "stretching prior to or after RT may not be necessary to enhance
      flexibility".
  - Both CIs include differences of about half an SD in either direction. "No significant
    difference" is not equivalence. This is the main weakness of the "RT is as good as stretching"
    claim.
- **Trials.**
  - Morton 2011 [@morton-2011-rt-vs-stretching] (ABS, promising): 5 weeks in untrained adults;
    full-ROM RT matched static stretching for hamstring and hip ROM.
  - Kaczorowski 2026 [@kaczorowski-2026-low-volume] (FT, promising): 6 weeks, once weekly,
    time-matched.
    - Romanian deadlifts: +1.8 cm (d vs control 1.47).
    - Forward-bend stretch: +3.9 cm (d 1.65).
    - No significant SS vs RT difference, but stretching gained about twice as much (small trial,
      n = 16/group).
  - Warneke 2023 EJAP [@warneke-2023-stretch-vs-rt] (FT, promising): ROM gains did not differ
    between 1 h/day calf stretching and calf hypertrophy training (orthosis goniometer p = 0.378,
    d = 0.38).
- **Trained people gain less from RT, but still gain.** Trained/active SMD 0.43 (0.21 to 0.66) vs
  untrained/sedentary 1.03 (0.68 to 1.37), p = 0.005 [@alizadeh-2023-rt-rom] (FT, promising). The
  authors attribute this to higher baseline ROM from prior loading.
- **Contraction type did not moderate.** Eccentric 0.89 vs concentric 0.72, p = 0.52 (FT). Narrative
  evidence suggests eccentric work lengthens fascicles more (Reeves: +20% vs +8%, SEC).
- **Consensus.** "Full-ROM RT enhances ROM to at least a similar degree, especially if a focus is
  given to the eccentric phase" [@warneke-2025-delphi-consensus] (FT, convention).
- **Contrarian framing.**
  - Nuzzo 2020 argues flexibility has little predictive validity for health and performance, that
    RT maintains or improves it, and that stretching should not be a default prescription
    [@nuzzo-2020-retiring-flexibility] (ABS, contested). A published comment and reply followed.
  - Afonso 2021 distinguishes "can stretching help?" from "is it required?"
    [@afonso-2021-mandatory-stretching] (ABS, convention).

### Mechanisms

- **Range is the active ingredient, not load.**
  - Body-weight training did not improve ROM, because exercises such as push-ups are blocked short
    of end range (Alizadeh 2023 discussion, FT).
  - Zhou et al. (SEC in Alizadeh) found unloaded dynamic stretching gave more hip extension ROM
    than loaded versions.
  - So the full or near-full excursion seems to matter more than the external load (speculative).
- **Proposed pathways.** RT may increase ROM through:
  - stretch tolerance gained from end-range discomfort;
  - changes in muscle stiffness or compliance, with mixed evidence (RT may *increase* tendon
    stiffness);
  - fascicle lengthening and lower pennation with eccentric emphasis.

  None of these was measured in the meta-analyses (speculative).

### Disagreements and why

- **"Equivalent" or just "not shown to differ"?** Point estimates are near zero (Alizadeh) or
  slightly favour stretching (Afonso; Kaczorowski numerically 2:1). The comparisons rest on 7-11
  small, heterogeneous trials, often in elderly or untrained people, with outcome tests such as
  sit-and-reach.
- **Partial-ROM training.** No trial has compared full vs partial ROM RT on *flexibility*
  outcomes; Alizadeh notes the dearth. Kawama et al. (SEC) found wide-ROM eccentric training
  reduced semimembranosus shear modulus more than narrow-ROM training.

### What remains unknown

- Whether a trained lifter already training full-ROM gains further ROM from adding stretching, and
  in which joints. No data exist in strength athletes.
- Whether ROM gained by loading transfers better to active, loaded positions than ROM gained by
  stretching. This is plausible on specificity grounds, but untested.
- Which joints RT misses: the competition lifts may not load end range at the shoulder in flexion,
  thoracic extension, or hip in some planes.

---

## RQ4. Acute effects of pre-exercise stretching on strength and power

### Findings

- **The classic syntheses.**
  - Kay & Blazevich 2012 [@kay-2012-acute-static-stretch] (ABS, established):
    - Design: 106 studies.
    - Static stretch <30 s: pooled -1.1% (no detrimental effect).
    - 30-45 s: -1.9% (no significant effect).
    - A sigmoidal dose response makes significant decrements likely only at >=60 s, regardless of
      task, contraction mode or muscle.
  - Simic 2013 [@simic-2013-pre-exercise-stretching] (ABS, established):
    - Design: 104 studies.
    - Strength SMD -0.10 (-0.15 to -0.04), i.e. -5.4%.
    - Power -0.04 (-0.16 to 0.08).
    - Explosive performance -0.03 (-0.07 to 0.01), i.e. -2.0%.
    - Effects were larger in isometric tests and with longer duration.
  - Behm 2016 [@behm-2016-acute-stretching] (ABS, established):
    - Static stretching -3.7%, dynamic +1.3%, PNF -4.4%.
    - Static >=60 s per muscle group -4.6% vs <60 s -1.1%.
    - Static stretching gave +2.2% at long muscle lengths.
    - With post-stretch dynamic activity, no clear effect.
- **The 2024 re-analysis with controlled pre-post designs only** [@warneke-2024-force-deficit]
  (FT, promising).
  - Design: 83 studies, 2012 participants, multilevel model with robust variance estimation.
  - Maximal strength vs passive control: ES -0.21 (95% CI -0.39 to -0.02; reported p = 0.003),
    36 studies; GRADE low.
  - Single bouts >=60 s: -0.84 (-1.32 to -0.37), 8 studies.
  - Bouts <60 s: -0.13 (-0.32 to 0.07), n.s.
  - Speed/athletic performance (jump, sprint, throw, RFD): not impaired. Speed ES 0.07 (p = 0.29),
    athletic 0.13, RFD n.s.; GRADE moderate.
  - Vs active controls (other warm-up or fatiguing activity), strength was still reduced: -0.25
    (-0.36 to -0.13). Performance was not: -0.12 (-0.35 to 0.11).
  - Dynamic stretching did not affect strength and helped adult jumping: 0.28 (p = 0.02),
    5 studies.
  - **Internal inconsistencies to flag:**
    - The abstract gives jump ES 0.15 (p = 0.006); the results give 0.21 (p = 0.09).
    - The <60 s *total volume* subgroup (-0.47, 7 studies) was larger than the >=60 s volume
      subgroup (-0.18). The authors attribute this to unbalanced subgroups.
    - The reported CI for the main effect (-0.39 to -0.02) sits oddly with p = 0.003.
- **Within a full warm-up, nothing measurable** [@blazevich-2018-full-warmup] (ABS, promising).
  - Design: randomised, experimenter-blinded crossover; 20 team-sport athletes.
  - Adding 5-s or 30-s static stretches, or dynamic stretches, to a comprehensive warm-up did not
    change sprint, jump, change-of-direction or flexibility outcomes.
  - Athletes nonetheless *expected* stretching to help (no-stretch rated 4.0/10 vs 5.3-6.4).
- **Not stretch-specific fatigue** [@warneke-2024-rt-force-deficit] (ABS, speculative). Calf raises
  to failure reduced plantar-flexor strength more than 10-20 min of stretching and as much as
  30 min. The "stretch-induced" deficit after very long stretching may partly be generic fatigue.
- **Consensus** [@warneke-2025-delphi-consensus] (FT, convention; 95% agreement).
  - Avoid >60 s per muscle of static stretching before maximal or explosive efforts of isolated
    muscle groups.
  - Short static stretching inside a dynamic warm-up and dynamic stretching do not impair
    performance.
- **Other outcomes.**
  - Running economy: no effect of stretching (low certainty, 15 studies; Warneke 2025 SMO, noted
    only; record not created).
  - Delayed-onset muscle soreness: stretching does not reduce it. Pre-exercise MD -0.52/100
    (-11.3 to 10.3); post-exercise -1.04/100; a large trial found -3.8/100
    [@herbert-2011-stretching-soreness] (ABS, established).

### Mechanisms

Proposed mechanisms of the deficit [@behm-2021-stretch-impairment-mechanisms] (ABS,
speculative):

- **Neural:**
  - reduced voluntary activation;
  - reduced persistent-inward-current amplification of motoneuron output.
- **Mechanical:**
  - force-length shifts, with more slack and compliance, so optimum angle moves to longer lengths;
    this fits the benefit at long muscle lengths;
  - reduced Ca2+ sensitivity;
  - altered parallel elastic component.
- **Psychological:**
  - nocebo effects;
  - "mental energy" deficits.
- **Stiffness and SSC.** Reduced MTU stiffness could in theory slow force transmission and blunt
  stretch-shortening-cycle (SSC) recoil (Delphi; Ingram 2025). Yet jump and sprint outcomes are not
  impaired in practice.
- **Why isolated strength drops but athletic performance does not:**
  - stretching usually targets one muscle;
  - multi-joint tasks depend on coordination across many muscles;
  - re-warm-up activities reverse the deficit;
  - testing in many studies began 3-5 min after stretching with no dynamic activity (Behm 2016;
    Warneke & Lohmann discussion).

### Disagreements and why

- **Simic 2013 vs Warneke & Lohmann 2024.** Simic recommended avoiding static stretching as the
  sole warm-up activity. Warneke & Lohmann call Simic's SMD -0.10 "trivial" and argue avoidance is
  unjustified. They agree on the numbers and disagree on how to interpret small effects. For an
  elite lifter on a 1RM day, a few percent may matter (Warneke & Lohmann acknowledge this).
- **Studies are a poor fit for lifting.** Nearly all used isolated single-joint isometric MVCs
  (calf, knee extensors). No study tested barbell 1RM squat, bench or deadlift after stretching
  within a realistic warm-up. Application to strength athletes is inference.

### What remains unknown

- Effects of short pre-lift stretching on barbell 1RM and on technical positions (squat depth,
  bench arch), in trained lifters.
- Effects on velocity-based measures in trained lifters.
- Whether gaining a position acutely (e.g. hip flexion for depth) outweighs a small force cost.

---

## RQ5a. Can stretching build muscle or strength in humans?

### Findings

- **Strength: small, dose-dependent effects (promising).**
  - Warneke 2024 MA [@warneke-2024-stretch] (FT; GRADE low, moderate for duration subgroups):
    - Design: 42 studies, 1318 participants.
    - Overall: d = 0.30 (95% CI 0.14 to 0.46).
    - >=15 min per session: 0.45 (0.29 to 0.62). <15 min: 0.21 (-0.06 to 0.44), n.s.
    - >6 weeks: 0.36 vs <=6 weeks: 0.16.
  - Arntz 2023 [@arntz-2023-chronic-stretching-strength] (FT):
    - Design: 41 studies.
    - Strength SMD 0.21 (0.10 to 0.32); power 0.19 (0.12 to 0.26).
    - Larger effects in sedentary (0.58) than recreationally active (0.16) participants, and in
      older and more female samples.
- **Hypertrophy: trivial to small, and contested.**
  - Warneke 2024 [@warneke-2024-stretch] (FT, contested):
    - Overall: d = 0.20 (0.08 to 0.32), GRADE low.
    - Significant only with >=15 min per session: 0.28 (0.12 to 0.44), 7 studies.
    - Also only with >6 weeks and >5 sessions/week.
    - The authors themselves note the long-duration effects mostly come from one research group.
  - Arntz 2024 [@arntz-2024-stretch-hypertrophy] (FT, contested):
    - Design: 25 studies, 710 participants.
    - SMD 0.118 with 95% *prediction interval* -0.233 to 0.469: "unclear".
    - Larger effects with more time under stretch and more varied exercises.
    - Larger effects in "trained" people (beta 0.424, from only 3 studies).
    - ROM gains were not associated with hypertrophy.
  - Panidi 2023 found no change in muscle thickness overall (p = 0.18), but an increase with high
    intensity (FT).
- **Key trials.**
  - Warneke 2023 EJAP [@warneke-2023-stretch-vs-rt] (FT, promising):
    - Design: 1 h/day calf stretching with an orthosis for 6 weeks vs calf RT (5 x 10-12,
      3 x/week); 69 active adults.
    - Isometric MVC: +18.0% stretching vs +13.4% RT (n.s.).
    - Lateral gastrocnemius thickness rose significantly only with RT (d = 0.61 vs 0.32).
    - Time cost: up to 7 h/week of stretching to match 3 x 15 min of RT.
  - Warneke 2023 JSCR [@warneke-2023-long-lasting-stretch-trained] (ABS, promising):
    - Design: "well-trained" adults, 6 x 10 min/day for 6 weeks.
    - MVC d = 0.64-0.76; ultrasound thickness d = 0.53-0.60.
    - MRI cross-sectional area only d = 0.16-0.30. The MRI signal is much smaller than the
      ultrasound signal.
  - Siegel 2026 [@siegel-2026-quadriceps-smh] (ABS, speculative): the first quadriceps study.
    - Design: 12 sessions x 15 min of hip-flexor stretching over 4-5 weeks, recreationally active.
    - Rectus femoris thickness increased (eta_p2 0.14-0.41).
    - Vastus lateralis was inconsistent.
    - Strength rose at 70 deg but not at 110 deg.
  - Homer 2025 [@homer-2025-bodybuilder-case] (ABS, speculative): n = 1 drug-free bodybuilder.
    - Design: 60 min/day calf stretching 6 x/week for 12 weeks on top of training.
    - Thickness +7-23%, ROM +26%, strength +11%. No control.
  - Kokkonen 2007 [@kokkonen-2007-chronic-stretching] (ABS, contested): 10 weeks of 40-min
    stretching in sedentary people.
    - Knee extension 1RM +32.4%; knee flexion 1RM +15.3%.
    - Gains this large are implausible next to the meta-analytic averages. Warneke 2024 itself calls
      such short-duration results "unreasonably high".
  - Luangpon 2026 (older adults): 30 min/day of stretching gave no consistent thickness change,
    while eccentric training improved strength [@luangpon-2026-older-volume] (ABS).
- **Inter-set stretching in a lifting session.**
  - Van Every 2022 [@van-every-2022-interset-stretch] (ABS, speculative): untrained men, 20-s
    loaded inter-set calf stretch.
    - Soleus +0.7 mm (90% CI 0 to 1.6).
    - Gastrocnemius effects uncertain.
  - The 2025 SMH opinion notes only one RCT in athletes (Warneke 2023 JSCR) and the one case study
    show SMH in resistance-trained populations [@warneke-2025-smh-applications] (FT, speculative).
- **Consensus** [@warneke-2025-delphi-consensus] (FT, convention).
  - Not recommended as a primary strategy for strength (85% agreement) or muscle mass (90%).
  - If RT is not feasible: >=15 min per muscle per session, >=5x/week (strength) or daily
    (hypertrophy), for >=6 weeks.

### Mechanisms

- **Proposed.**
  - Sustained mechanical tension on sarcomeres activating mechanosensitive signalling:
    stretch-activated channels, mTOR/p70S6K, titin unfolding at long lengths.
  - Serial sarcomere addition.
  - A possible hypoxia/BFR-like milieu during long holds.
  - Neural adaptation, suggested by strength gains in the *non-stretched* contralateral leg in some
    studies [@warneke-2024-stretch] (FT, speculative).
- **Against a strong anabolic effect.**
  - Fowles et al. found no acute rise in muscle protein synthesis after 33 min of stretching in
    humans (SEC in Warneke 2024).
  - Human protein turnover is slower than in birds and rodents.
  - Animal models (up to ~300% mass gain in avian wing-loading) use near-continuous, progressive
    stretch that human protocols cannot reproduce.
- **Why strength gains exceed hypertrophy gains.** Strength d ~0.30-0.45 vs size ~0.20-0.28. This
  points to neural or test-specificity effects:
  - isometric testing near the stretch angle;
  - force-length shifts, as in Siegel 2026, where strength rose only at one angle.

### Disagreements and why

- **Warneke 2024 vs Arntz 2024.** Warneke finds a small significant effect at high dose; Arntz
  calls it "unclear".
  - Arntz did not include several long-duration orthosis studies.
  - Arntz uses prediction intervals.
  - Warneke's significant subgroups depend on 7 studies, mostly from one group.
  - Neither is wrong. The disagreement is about how much weight to give a small cluster of
    high-dose trials from one lab.
- **Ultrasound vs MRI.** In Warneke 2023 JSCR, ultrasound thickness gave d ~0.55 and MRI CSA
  d ~0.16-0.30. Ultrasound may overstate SMH.
- **Trained participants.**
  - Arntz finds larger effects in trained people (3 studies).
  - The SMH opinion paper finds almost no data in resistance-trained people.
  - Homer's n = 1 case cannot separate stretching from training.

### What remains unknown

- Whether stretching adds hypertrophy *on top of* well-designed RT in trained lifters (no RCT).
- Whether shorter, higher-intensity loaded stretches can substitute for hour-long holds.
- Effects in muscles other than the calf.
- MRI-confirmed effects beyond 6 weeks.
- Independent replication outside the Jena/Graz/Neuruppin group.

---

## RQ5b. Does stretching prevent injury?

### Findings

- **Most recent and largest synthesis (2026)** [@afonso-2026-stretching-injury] (ABS, promising;
  GRADE very low).
  - Design: 19 studies, >9000 participants, >80% male, 14-59 y, published online 21 Nov 2026.
  - No preventive effect vs all comparators: OR 0.945 (95% CI 0.828 to 1.078; 95% PI 0.773 to
    1.155), k = 15, n = 9002.
  - Vs passive controls: OR 0.923 (0.814 to 1.046). Vs active controls: OR 1.190 (0.849 to 1.667).
  - No effect for muscle, tendon or ligament/capsule injury, or across 19 sensitivity analyses.
  - No study tested acute pre-activity stretching.
  - About 90% of RCTs were at high risk of bias. There is almost no sport-specific stretching
    research.
- **Earlier syntheses, consistently null for all-cause injury (established).**
  - Lauersen 2014 [@lauersen-2014-injury-prevention] (ABS): stretching RR 0.963 (0.846 to 1.095).
    In contrast, strength training RR 0.315 (0.207 to 0.480), proprioception 0.550 and
    multicomponent 0.655 (25 RCTs, 26,610 participants).
  - Thacker 2004 [@thacker-2004-stretching-injury] (ABS): OR 0.93 (0.78 to 1.11).
  - Pope 2000 [@pope-2000-army-stretching] (ABS):
    - Design: 1538 army recruits; 20-s pre-exercise stretches.
    - All injuries HR 0.95 (0.77 to 1.18); soft tissue 0.83 (0.63 to 1.09); bone 1.22 (0.86 to
      1.76).
    - Fitness predicted injury.
  - Small 2008 [@small-2008-static-stretching-injury] (ABS, contested): all 4 RCTs null for
    all-cause injury, with "preliminary evidence" for fewer musculotendinous injuries.
- **The muscle-injury signal.**
  - Takeuchi 2024 reported fewer muscle (but not tendon) injuries
    [@takeuchi-2024-stretching-muscle-injury] (SEC, contested).
  - A published comment (Afonso, Costa, Warneke 2025) noted this came with *more* bone and joint
    injuries.
  - The 2026 Afonso meta-analysis did not reproduce a muscle-injury effect.
- **Dynamic stretching.** There is essentially no direct evidence: one null comparison. Benefits of
  dynamic warm-ups cannot be attributed to the stretching component
  [@behm-2023-dynamic-stretching-injury] (ABS, speculative).
- **Consensus** [@warneke-2025-delphi-consensus] (FT, convention; 85% agreement). "Does not
  recommend stretching for injury prevention in general." The panel acknowledges initial evidence
  for fewer muscle injuries, with a trade-off. This statement predates the 2026 meta-analysis,
  which weakens the muscle-injury caveat.

### Mechanisms (why one might expect a benefit, and why it may not appear)

- **Hypothesised benefit.** Greater ROM and compliance could reduce muscle strain at long lengths,
  for example during sprint-related hamstring injury.
- **Why it may not appear:**
  - most injuries are not end-range strain events;
  - stretching does not increase eccentric strength at long lengths, unlike Nordic or eccentric
    training;
  - reduced stiffness could shift load to other tissues (the bone and joint trade-off hypothesis,
    speculative);
  - stretching doses in the trials were low (20 s per muscle in Pope 2000);
  - samples were dominated by military recruits.
- **What does work.** Strength training reduces injuries far more convincingly (Lauersen RR 0.315).
  This supports investing time in loading rather than stretching for injury goals.

### What remains unknown

- Sport-specific stretching in sports with extreme ROM demands (gymnastics, dance, martial arts).
- Effects in women and in strength athletes.
- Acute pre-activity stretching and injury: never tested.
- Whether a muscle-injury benefit exists for specific high-speed sports.

---

## Cross-cutting: detraining and maintenance

- **Loss is slow and partial** [@konrad-2025-detraining] (FT).
  - Design: 13 studies, 556 participants.
  - After 5-15 weeks of stretching (ES 0.93, GRADE high), 2-6 weeks of cessation reduced ROM
    slightly: ES -0.41 (-0.73 to -0.09), GRADE low.
  - ROM stayed above baseline: 0.55 (0.33 to 0.77).
  - Grade: promising for "partial retention over weeks"; speculative for the decay rate.
- **Staying active matters.** Participants who stayed active in their sport kept their gains
  (post-to-detraining n.s.). Inactive participants lost some: -0.52, p = 0.04. Higher weekly
  stretching frequency moderated retention (FT, speculative).
- **Maintenance dose: largely unknown.** One older trial is cited secondarily (Reid and Kim):
  - 3 sessions/week maintained ROM after a 6-week programme;
  - 1 session/week did not (SEC).
- **Mechanism hint.**
  - Nakamura et al. (SEC in Konrad 2025): ROM and muscle stiffness both returned to baseline 5
    weeks after a 5-week programme.
  - Guissard 2004: reflex changes reverted within a month, while some ROM and stiffness change
    persisted [@guissard-2004-stretch-training] (ABS).
- **Implication for lifters (inference).** Regular full-ROM lifting is plausibly a "maintenance
  activity" for the ranges it loads, by analogy with the "active" subgroup. This is untested.

## Cross-cutting: where experts disagree, summarised

| Issue | Position A | Position B | Main reason |
|---|---|---|---|
| Chronic ROM mechanism | Mostly sensory (Magnusson 1996; Freitas 2018) | Sensory + modest muscle stiffness reduction (Ingram 2025; Takeuchi 2023; Warneke 2024 recalc) | Newer, longer, supervised trials; dependency-robust models; muscle-specific measures |
| Fascicle lengthening | Yes with high volume and intensity (Panidi 2023) | No (Ingram 2025; Moltubakk 2021; Freitas 2018) | Clustering of within-study effects; ultrasound method; adolescent data |
| Dose | ~10 min/week plateau (Ingram 2024) | More is better / daily (Arntz 2023; Delphi; Thomas 2018) | Sparse high-volume data; visual reading of spline |
| RT vs stretching | Equivalent (Alizadeh 2023) | Possibly slightly inferior (Afonso 2021 point estimate; Kaczorowski 2026) | Wide CIs; small heterogeneous trials |
| Pre-exercise static stretching | Avoid as sole warm-up (Simic 2013) | Fine in practice (Warneke & Lohmann 2024; Blazevich 2018) | Same small numbers, different interpretation of practical relevance |
| SMH | Small real effect at >=15 min (Warneke 2024) | Unclear (Arntz 2024) | One lab's long-duration studies; prediction intervals; ultrasound vs MRI |
| Injury | Possibly fewer muscle injuries (Takeuchi 2024; Small 2008) | No effect (Afonso 2026; Lauersen 2014) | Small subgroups; trade-offs with bone and joint injuries; high risk of bias |

**Conflict-of-interest note.** A small network of authors (Warneke, Konrad, Behm, Afonso, Lohmann,
Nakamura) wrote many of the meta-analyses, many of the primary SMH trials and the Delphi consensus.
Their conclusions are often sensible. Still, independent replication is thin, especially for SMH and
the 2024 force-deficit re-analysis.

---

## Gaps

1. **Trained strength athletes are almost absent.** No study measured ROM outcomes, stretching
   dose-response, acute stretching effects on barbell 1RM, or SMH in competitive powerlifters,
   weightlifters or strongman athletes. Every application to this population is extrapolated from
   recreationally active young adults, mostly men, mostly calves and hamstrings.
2. **Active and loaded ROM vs passive ROM.** Outcomes are almost always passive end ROM
   (tolerance-bound). There is no trial of whether passive gains transfer to loaded positions (squat
   depth under load, overhead lockout) or to strength at the new range. This links to chapter 7.
3. **Full vs partial ROM RT on flexibility.** No direct trial; Alizadeh 2023 flags the dearth.
4. **Long-term mechanisms.** Only one 6-month trial (Moltubakk 2021). Fascicle-length and stiffness
   adaptations over years, and their reversibility, are unknown.
5. **Dose at the top end and maintenance dose.** The 10-min/week plateau rests on sparse
   high-volume data. Minimum maintenance doses are untested in modern trials.
6. **Stretch intensity is unmeasured.** It is defined by perceived discomfort in nearly every study.
   This blocks dose-response work on stiffness, fascicle length and SMH.
7. **Independent replication of SMH.** The long-duration hypertrophy and strength evidence comes
   largely from one research group, uses ultrasound, and lasts 6 weeks or less. MRI shows smaller
   effects. There is no RCT of stretching added to RT in resistance-trained people.
8. **Injury.** No trial of acute pre-activity stretching. Almost no women. Little sport-specific
   stretching. Very-low-certainty evidence overall.
9. **Sources not retrieved, or read only from abstracts.** Thomas 2018, Behm 2016, Kay 2012, Simic
   2013, Lauersen 2014 and Afonso 2026 were read at abstract level only (paywalled).
   - The Afonso 2026 full text would give subgroup and bone-injury details.
   - Takeuchi 2024 (Sport Sci Health) and the Afonso/Costa/Warneke 2025 comment were known only
     through the Delphi consensus; their DOI and PMID are unverified.
   - Warneke 2024 JSHS (foam rolling and stretching vs other warm-ups) and the Warneke 2025
     running-economy meta-analysis were seen but have no records.
   - Moltubakk 2021 participant age and training status were not checked.
10. **Data quality issues noticed in other records (not this chapter's).**
    - `warneke-2024-stretch` and `warneke-2023-stretch-review` had wrong DOIs; both were corrected
      here.
    - DOI `10.1080/02640414.2021.1929736` is shared by `plotkin-2023-hip-thrust`,
      `zabaleta-korta-2023` and `zabaleta-korta-2021`, which suggests an error in chapter-5
      records.
