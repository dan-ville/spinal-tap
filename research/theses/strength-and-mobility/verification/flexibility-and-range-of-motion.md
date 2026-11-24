# Verification: Chapter 6, "Flexibility and range of motion"

This is an independent verification pass, dated 2026-11-24, of `notes/flexibility-and-range-of-motion.md`. I
checked each load-bearing claim against its primary source, using the full text wherever I could get it. I also
looked for newer, contradicting or qualifying evidence. Evidence records in `evidence/sources/` were updated:

- `checked` is filled in;
- `read_level` is set to what this pass read;
- wrong numbers are fixed and missing findings added.

Six new records were created for studies that bear on the claims but are missing from the notes.

**What this pass read.**

- **Full text, via Europe PMC XML:**
  - meta-analyses: Konrad 2023, Behm 2023, Ingram 2025, Panidi 2023, Arntz 2023, Arntz 2024, Alizadeh 2023,
    Favro 2025, Afonso 2021, Warneke 2024 (stretching and strength), Warneke & Lohmann 2024 (force deficit),
    the Warneke 2024 recalculation and Konrad 2025;
  - the Delphi consensus and the Warneke 2025 SMH opinion paper;
  - trials: Warneke 2023 EJAP, Kaczorowski 2026 and Panidi 2021 (abstract and methods only);
  - for Homer 2025, Siegel 2026, Van Every 2022, Wohlann 2024, Rosenfeldt 2024 and Murakami 2025, only the
    abstract section of the full text.
- **Full text, other sources:**
  - Ingram 2024: a third-party PDF mirror of the published article. The publisher site served a bot challenge.
  - Afonso 2026: the OSF preprint (v1, July 2025). The published version was not reachable.
  - Blazevich 2014, Kay 2012 and Blazevich 2018: author manuscripts in the University of Northampton repository.
- **Abstract only (PubMed):**
  - mechanism trials: Behm 2016, Medeiros 2016, Magnusson 1996 (both papers), Folpp 2006, Konrad & Tilp 2014,
    Freitas 2018, Takeuchi 2023, Moltubakk 2021 and Guissard 2004;
  - modality and dose: Thomas 2018, Park 2026 and Luangpon 2026;
  - pre-exercise and hypertrophy: Morton 2011, Simic 2013 and Warneke 2023 JSCR;
  - injury: Lauersen 2014, Thacker 2004, Pope 2000 and Small 2008;
  - new studies: Gergley 2013, Beedle 2008, Molacek 2010, Wadhi 2022, Kokkonen 2007, Herbert 2011 and Lima &
    Blazevich 2026.
- **Bibliographic record only:** Takeuchi 2024, via Crossref. The publisher host is blocked in this environment.
- **Not retrievable:**
  - The PMC copy of Magnusson 1996 J Physiol returned a reCAPTCHA page.
  - The BMJ, Wiley, Taylor & Francis, ScienceDirect and Springer pages returned bot challenges.
  - Repository copies of Moltubakk 2021 and Freitas 2018 sit behind JavaScript-only pages.

**Verdict summary**

| # | Claim (short) | Verdict | Grade after check |
|---|---|---|---|
| 1 | Chronic SS large ROM gain; acute moderate, <30 min | confirmed (wording) | established |
| 2 | Chronic gains mainly tolerance, plus muscle (not tendon) stiffness | corrected | promising (tolerance); speculative (which stiffness) |
| 3 | Fascicle lengthening contested | confirmed (attribution of causes refined) | contested |
| 4 | Static and PNF beat ballistic/dynamic chronically | confirmed, with qualification | promising |
| 5 | Weekly volume governs; plateau ~10 min/week | corrected | promising (frequency/intensity null); speculative (plateau) |
| 6 | RT improves ROM; body weight does not; trained gain less | corrected | promising; speculative (body weight, training status) |
| 7 | RT and stretching not shown to differ; imprecise | confirmed, add trials | contested |
| 8 | Pre-exercise SS: small isolated-strength loss, no athletic loss | confirmed, with qualification | promising |
| 9 | Chronic SS: small strength gain, trivial-small hypertrophy | corrected (grade split, moderator wording) | promising (strength); contested (hypertrophy) |
| 10 | SMH needs impractical doses; no RCT in trained lifters | corrected (partly refuted) | contested |
| 11 | Stretching does not reduce injury risk | confirmed (wording; read level upgraded) | promising |
| 12 | ROM gains only partly lost after 2-6 weeks | corrected (population, "active" subgroup) | promising (partial retention); speculative (activity) |
| 13 | Delphi consensus statements | confirmed | convention (see note) |
| 14 | Evidence base untrained, calves/hamstrings; no barbell-1RM data | corrected (partly refuted) | established (population skew) |

---

## Claim-by-claim

### 1. Chronic static stretching gives a large ROM gain; one session gives a moderate, short-lived gain

**Verdict: confirmed, with wording corrections.**

**Evidence.**

- **Ingram 2024** (full text):
  - 189 studies, 6654 adults.
  - Acute g = 0.63 (0.52 to 0.75), I2 = 51%, GRADE **low**.
  - Chronic g = 0.96 (0.84 to 1.09), I2 = 62%, GRADE moderate; 0.87 (0.77 to 0.97) after outliers.
- **Konrad 2023** (full text):
  - ES -1.002 (-1.165 to -0.840), I2 = 74.97%.
  - Egger intercept -3.96, p < 0.001.
- **Behm 2023** (full text): ES -0.555 (-0.677 to -0.434), I2 = 33%, GRADE moderate.
- **Behm 2016** (abstract): ROM gains "typically lasting <30 min".
- **Medeiros 2016** (abstract): SLR +12.04 deg (9.61 to 14.47).

**Refutation attempts.** No 2025-2026 synthesis contradicts the size or direction. The 2025-2026 sweep turned up
only narrative reviews (Lima & Blazevich 2026) and a network meta-analysis restricted to the ankle (Park 2026).

**Problems.**

- **How the authors label the effects.**
  - Behm 2023 calls its effect "small", not moderate.
  - Konrad 2023 calls an ES of 1.0 "moderate".
  - Only Ingram 2024 uses "moderate" (acute) and "large" (chronic). The labels follow each paper's thresholds.
- **"GRADE moderate" belongs to Behm 2023.** Ingram's acute estimate is GRADE low.
- **"<30 min" is qualitative.** It is a summary statement in a narrative review abstract (Behm 2016), not a pooled
  estimate. The claim's `read_level: full-text` does not hold for this part, or for Medeiros.

**Corrected wording.** "Chronic static stretching produces a large increase in passive ROM versus passive controls
in adults (Ingram 2024: g = 0.96, 95% CI 0.84 to 1.09, 189 studies, GRADE moderate; Konrad 2023: SMD 1.00, 0.84 to
1.17, with reporting bias). A single session gives a small-to-moderate increase (Ingram 2024: g = 0.63, 0.52 to
0.75, GRADE low; Behm 2023: SMD 0.56, 0.43 to 0.68, GRADE moderate). A narrative review reports that the acute gain
typically lasts less than 30 min (Behm 2016, abstract)."

### 2. Chronic ROM gains are mainly stretch tolerance, plus a smaller reduction in muscle (not tendon) stiffness

**Verdict: corrected.**

**Evidence.** Ingram 2025, full text:

- **Chronic tolerance:** maximum tolerable passive resistive torque g = 0.74 (0.38 to 1.10), GRADE very low.
- **Chronic stiffness:** *overall* stiffness g = 0.37 (0.18 to 0.56), GRADE low. This pools MTU, muscle and tendon
  stiffness, passive torque at a given angle, and shear-wave elastography.
- **Chronic meta-regression:**
  - ROM vs tolerable torque: g = 0.74 (0.41 to 1.09), 16 studies.
  - ROM vs overall stiffness: g = 0.59 (0.08 to 1.10), 17 studies.
  - By stiffness measure (Table 3), **only passive torque at a given angle** was associated with ROM: 1.57 (0.25 to
    2.88).
  - Muscle stiffness was not associated (0.48, -1.25 to 2.21; p = 0.52), and neither were tendon (0.29) or MTU
    stiffness (0.44).
- **Acute meta-regression:**
  - Overall stiffness was **not** associated with acute ROM gains: g = -0.37 (-0.87 to 0.13), p = 0.15.
  - Only the MTU-stiffness subgroup was associated.
  - Tolerable torque was not associated either (0.58, -0.43 to 1.58).

**Refutation attempts and other sources.**

- **Warneke 2024 recalculation** (now read in full text):
  - Chronic *muscle* stiffness: -0.38 (-0.65 to -0.11).
  - Tendon stiffness: 0.04 (n.s.).
  - But chronic *overall* stiffness was **not** significant: -0.24, p = 0.12. Its printed CI, -0.56 to -0.07,
    contradicts that p value.
  - So "muscle, not tendon" comes from Warneke's recalculation and Takeuchi 2023 (muscle stiffness ES -0.749), not
    from Ingram.
- **Blazevich 2014** (author manuscript): muscle stiffness fell 18%. The authors attribute the ROM gain to stretch
  tolerance *and* muscle and fascicle elongation.
- **Guissard & Duchateau 2004** (abstract): they conclude the gain came "mainly from reduced passive stiffness ...
  and tonic reflex activity".
- **Murakami 2025** (new record): stretching and calf-raise RT increased ROM similarly. ROM change correlated with
  the change in passive torque at end ROM (r = 0.86), not with stiffness.

**Problems.**

1. **g = 0.37 is attributed to muscle stiffness.** It is overall stiffness. Ingram's subgroup analyses found no
   difference between measures; tendon was only numerically smallest.
2. **"Acute gains are mainly stiffness" is presented as a finding.** It is the authors' interpretation. Ingram's own
   acute meta-regression did not link overall stiffness to ROM.
3. **The sensory-theory list is too uniform.** The notes' sentence "The foundational short trials all show ROM rising
   without a change in the torque-angle relation" is not true of Blazevich 2014 (muscle stiffness -18%) or Guissard
   2004.
4. **Circularity.** The ROM-tolerance association is partly circular: end ROM is defined at tolerable torque. The
   notes acknowledge this (Disagreement 3), and Lima & Blazevich 2026 make the same point.

**Corrected wording.** "Chronic static stretching increases stretch tolerance (maximum tolerable passive torque
g = 0.74, 95% CI 0.38 to 1.10; GRADE very low) and slightly reduces overall passive stiffness (g = 0.37, 0.18 to
0.56; GRADE low) (Ingram 2025). Both are associated with chronic ROM gains in meta-regression. Among stiffness
measures, only passive torque at a given angle was associated with ROM. A dependency-robust re-analysis found
reduced *muscle* but not tendon stiffness (-0.38 vs 0.04), and no significant change in overall stiffness (Warneke
2024). Acute ROM gains coincide with transient stiffness reductions, but acute stiffness change was not associated
with acute ROM gain in meta-regression."

Grade: promising for "tolerance is the largest contributor"; speculative for which tissue's stiffness changes.

### 3. Whether static stretching lengthens fascicles is contested

**Verdict: confirmed, with the attribution of causes refined.**

**Evidence.**

- **Panidi 2023** (full text):
  - Resting fascicle length: SMD 0.17 (0.01 to 0.33).
  - During stretch: 0.39 (0.05 to 0.74).
  - High volume: 0.29 (0.09 to 0.49) vs -0.06 for low volume. High intensity: 0.28 vs -0.05.
  - High-volume programmes lasted 10.6 vs 5.1 weeks, so volume and duration are confounded.
  - Authors' GRADE: "considerable confidence".
- **Ingram 2025** (full text): chronic fascicle length g = 0.07 (-0.25 to 0.26), I2 = 0%. Half of its studies used
  ≥90 min of stretching.
- **Moltubakk 2021** (abstract): 24 weeks, no change in gastrocnemius medialis fascicle length.
- **Panidi 2021** (full text): adolescents, +6 ± 7% at rest.

**Problems.**

- **Ingram's only stated reason is clustering.** Ingram writes that Panidi "did not account for within-study
  clustering". The other two causes in the claim (ultrasound method, adolescent samples) are the researcher's
  inference.
- **Panidi says it did account for nesting.** Its methods state that nesting was handled where one muscle was
  measured at two sites. The dispute is about adequacy, not omission.
- **Panidi's GRADE text is internally inconsistent.** It says certainty was downgraded for publication bias, then
  reports no publication bias on Egger's tests.

**Corrected wording.** Keep the claim, but say: "Ingram 2025 attributes the disagreement to Panidi's handling of
within-study clustering, which Panidi states it modelled. Differences in ultrasound method, an adolescent trial and
the confounding of volume with programme length (10.6 vs 5.1 weeks) are further plausible explanations (our
inference)."

### 4. Static and PNF stretching beat ballistic/dynamic for chronic ROM; technique does not matter acutely

**Verdict: confirmed, with qualification.**

**Evidence.**

- **Konrad 2023, Table 1:**
  - static -1.005 (-1.184 to -0.825), k = 66;
  - PNF -1.283 (-1.757 to -0.813), k = 11;
  - ballistic/dynamic -0.550 (-0.852 to -0.248), k = 8;
  - Q p = 0.012; static vs PNF p = 0.28.
- **Behm 2023:** technique p = 0.72.
- **Delphi:** static or PNF over dynamic, 95% agreement.

**Problems.**

- **Few studies behind the comparison.** The ballistic/dynamic subgroup has only 8 effects, and the comparison is
  between studies, not within them.
- **Other syntheses disagree on PNF.**
  - Thomas 2018 (abstract) found static better than PNF.
  - Park 2026 (abstract; ankle only) ranked PNF and foam rolling highest for passive ROM.

  The claim's "no difference between static and PNF" should be marked as Konrad's result, not a settled one.

**Corrected wording.** "In the largest meta-analysis (Konrad 2023), static (SMD -1.01) and PNF (-1.28) stretching
produced larger chronic ROM gains than ballistic/dynamic stretching (-0.55, k = 8; p = 0.012), with no difference
between static and PNF (p = 0.28). Other syntheses rank static above PNF (Thomas 2018) or PNF above static at the
ankle (Park 2026). Technique did not moderate acute ROM (Behm 2023, p = 0.72)."

### 5. Weekly volume, not frequency or intensity, governs chronic ROM; plateau ~10 min/week

**Verdict: corrected.**

**Evidence.**

- **Ingram 2024** (full text):
  - Chronic cubic spline: QM(df = 3) = 10.0, p = 0.02. The plateau "beyond 10 min" comes from inspecting the curve.
  - Acute spline: QM(df = 2) = 3.0, n.s.
  - Weekly frequency: g = -0.001 (-0.04 to 0.03).
  - Intensity: n.s.
- **Konrad 2023:**
  - **total stretch duration was not related to ROM** (p = 0.73);
  - frequency p = 0.42;
  - intensity p = 0.54.
- **Arntz 2023:** more repetitions, time per session and total time all predicted larger gains (β = 0.078-0.094).
- **Kaczorowski 2026:** 2 min/week worked (d = 1.65).
- **Luangpon 2026:** 30 min/day was not detectably better than 3 min × 3/week.

**Problems.** Only one of the three dose syntheses supports "volume governs". The largest all-technique
meta-analysis, Konrad 2023, found no dose relation at all. Frequency and intensity are consistently null. The
evidence on volume is inconsistent rather than favouring volume.

**Corrected wording.** "Neither weekly frequency nor intensity moderates chronic ROM gains (Ingram 2024; Konrad
2023). Evidence on volume is inconsistent:

- Ingram 2024's spline suggests gains stop rising beyond about 10 min per muscle per week (visual reading of a curve
  with sparse high-volume data).
- Konrad 2023 found no relation with total duration.
- Arntz 2023 found more time gave more gain.
- Single trials show 2 min/week can work and 30 min/day was not detectably better than 9 min/week.

Practitioner guidance (Delphi) favours daily stretching at the highest feasible volume."

Grade: promising for the null effect of frequency and intensity; speculative for the 10-min plateau.

### 6. Loaded resistance training improves ROM; body-weight training does not; trained people gain less

**Verdict: corrected.**

**Evidence.**

- **Alizadeh 2023** (full text):
  - 55 studies in the review, 52 in the main meta-analysis.
  - ES 0.73 (0.545 to 0.913), I2 = 74%.
  - Body weight: 0.232 (-0.517 to 0.053), **k = 4**. Free weights: 1.31, **k = 3**.
  - "Trained **and active**" 0.434 vs "untrained and sedentary" 1.027, p = 0.005.
  - Ages 8-79.
- **Favro 2025** (full text):
  - g = 0.63 (0.48 to 0.79), 36 studies.
  - **Activity level was not a significant moderator**: 22 sedentary vs 7 active studies, with a trend toward
    sedentary.
  - Mean age 46; no study at low risk of bias.

**Problems.**

- **Body weight.** "Does not" rests on 4 studies with a CI reaching 0.05. Better wording: "not shown to".
- **Training status.**
  - The contrast pools trained with merely active participants.
  - The second meta-analysis did not replicate it.
  - Training status did not moderate stretching-induced ROM in Ingram 2024 or Konrad 2023 either.

**Corrected wording.** "Resistance training improves ROM moderately versus no training (Alizadeh 2023: SMD 0.73,
0.55 to 0.91; Favro 2025: g = 0.63, 0.48 to 0.79). Body-weight-only programmes have not been shown to improve ROM
(k = 4, SMD 0.23, -0.52 to 0.05). Alizadeh found smaller gains in trained or active people (0.43 vs 1.03); Favro
did not find activity level to be a significant moderator."

### 7. Full-ROM RT and stretching have not been shown to differ; the evidence is imprecise

**Verdict: confirmed; add three trials.**

**Evidence.**

- **Afonso 2021** (full text): ES -0.22 (-0.55 to 0.12), 11 RCTs, n = 452, GRADE moderate (Table 3).
- **Alizadeh 2023:** 0.084 (-0.558 to 0.725), 7 studies.
- **Kaczorowski 2026:** +3.93 vs +1.81 cm, n = 16 per group, SS vs RT n.s.
- **Warneke 2023 EJAP:** ROM p = 0.378, d = 0.38.

**Refutation attempts and additions.** None of these three trials is in the notes.

- **Wohlann 2024** (PMC; record from chapter 7): 15 min/day, 4 days/week of pectoral stretching increased shoulder
  flexibility **more** than RT (d = 0.789, p = 0.001), in 81 active adults.
- **Murakami 2025** (new record): similar dorsiflexion ROM gains, SS d = 0.65 vs RT d = 0.37.
- **Rosenfeldt 2024:** equal sit-and-reach gains, n = 6 per group.

The only significant head-to-head difference favours stretching.

**Corrected wording.** Keep the claim and add: "One RCT found a larger flexibility gain with high-volume stretching
than with RT (Wohlann 2024, d = 0.79). Two small trials found similar gains (Murakami 2025; Rosenfeldt 2024)."

### 8. Pre-exercise static stretching causes a small loss of isolated maximal strength, but not of athletic performance

**Verdict: confirmed, with qualification.**

**Evidence.**

- **Warneke & Lohmann 2024, Table 1** (full text):
  - Static force deficit vs passive control: -0.21 (-0.39 to -0.02), p = 0.003, 36 studies.
  - Bouts ≥60 s: -0.84 (-1.32 to -0.37), 8 studies. Bouts <60 s: -0.13, n.s.
  - Speed performance: 0.07 (p = 0.29).
  - The internal inconsistencies flagged by the researcher are confirmed. A further one: combined force and
    performance at ≥60 s shows ES -0.48 with a printed CI of -1.21 to -0.24 but p = 0.17.
  - Only 18 of 83 studies used trained participants.
- **Kay 2012** (author manuscript): -1.1% for stretches <30 s and -1.9% for 30-45 s. The dose-response is sigmoidal,
  with turning points near 60 s and 2 min.
- **Blazevich 2018** (author manuscript): 20 male team-sport athletes; no effect of 5-s, 30-s or dynamic stretches
  inside a full warm-up.

**Refutation attempts.** Searching for barbell-lift outcomes found three acute studies the notes miss:

- **Gergley 2013** (new record): passive static stretching added to an active warm-up that included barbell squats
  **reduced back-squat 1RM by 8.4%** in 17 moderately trained men. Self-rated stability fell 23%.
- **Beedle 2008** (new record): 3 × 15 s per muscle did not change free-weight bench or leg-press 1RM in 51 active
  adults, most with lifting experience.
- **Molacek 2010** (new record): low- or high-volume static or PNF stretching inside a 1RM warm-up did not change
  bench 1RM in 15 resistance-trained football players.

**Corrected wording.** Keep the meta-analytic statement and add: "In multi-joint barbell tests, short pre-test
stretching did not change bench or leg-press 1RM (Beedle 2008; Molacek 2010). More extensive passive lower-body
stretching added to a warm-up reduced back-squat 1RM by about 8% in moderately trained men (Gergley 2013, n = 17)."

### 9. Chronic static stretching gives small strength gains and at most trivial-to-small hypertrophy

**Verdict: corrected (grade split; moderator wording).**

**Evidence.**

- **Warneke 2024** (full text):
  - Strength d = 0.30 (0.14 to 0.46). ≥15 min/session: 0.45. <15 min: 0.21 (-0.06 to 0.44), p = 0.06.
  - Hypertrophy d = 0.20 (0.08 to 0.32; Table 2 misprints the lower bound as 0.008). ≥15 min: 0.28 (0.12 to 0.44),
    7 studies.
  - **The ≥15 vs <15 min hypertrophy difference was not significant (p = 0.29).** Meta-regression found no moderator
    (p = 0.23-0.88). Only the >6 vs ≤6 weeks contrast was significant (p = 0.006).
- **Arntz 2024** (full text):
  - SMD 0.118, 95% PI -0.233 to 0.469. The CI excludes zero (p = 0.017); only the PI crosses it.
  - Trained β = 0.424, from 3 studies.
- **Arntz 2023:** strength 0.21 (0.10 to 0.32).

**Problems.**

- **Grades.** Strength is consistent across two independent meta-analyses (0.21 and 0.30) and should be graded
  promising. Hypertrophy is contested.
- **"Significant only at ≥15 min/session".** The phrase implies a demonstrated dose threshold. In fact, a significant
  subgroup sat beside a non-significant one without a significant difference between them.

**Corrected wording.** "Chronic static stretching produces small strength gains (Warneke 2024: d = 0.30, 0.14 to
0.46; Arntz 2023: SMD 0.21, 0.10 to 0.32; promising). Hypertrophy effects are trivial to small (Warneke 2024:
d = 0.20, 0.08 to 0.32; Arntz 2024: SMD 0.12, with a prediction interval of -0.23 to 0.47; contested; GRADE low).
Programmes over 6 weeks gave larger effects. Sessions of 15 min or more reached significance while shorter ones did
not, but the difference between them was not significant."

### 10. Stretch-mediated hypertrophy needs impractical doses, rests on one group's ultrasound data, and has no RCT in trained lifters

**Verdict: corrected (partly refuted).**

**Evidence.**

- **Warneke 2023 EJAP** (full text):
  - 69 recreationally active adults.
  - Isometric MVC: +18.0% (stretching) vs +13.4% (RT).
  - Lateral gastrocnemius thickness: RT vs control d = 0.61; stretching vs control d = 0.32, n.s.
  - Dose: up to 7 h/week of stretching vs 3 × 15 min of RT.
- **Warneke 2023 JSCR** (abstract): MRI CSA d = 0.16-0.30 vs ultrasound d = 0.53-0.60. The abstract does not define
  "well-trained".
- **SMH opinion paper** (full text): "just one RCT on athletes and one case study".

**Refutation attempts.**

- **Wadhi 2022** (new record) is an RCT of stretching added to RT in **resistance-trained men**:
  - 30-s loaded inter-set pectoral stretch, 8 weeks, n = 26;
  - no added effect on thickness, bench 1RM or repetitions.

  It tests short loaded stretching, not hour-long static stretching. Still, "no RCT as an add-on to RT in
  resistance-trained lifters" is false as worded.
- **Wohlann 2024**: about 1 h/week of pectoral stretching (15 min × 4) matched RT for strength and thickness in
  active adults. "About 1 h/day" is therefore not a general requirement. It applies to the calf protocols.
- **Siegel 2026** (12 × 15 min) points the same way.
- **Siegel's strength gain was at the shortened angle only.** This does not fit the force-length (serial sarcomere)
  explanation the notes offer.

**Corrected wording.** "Stretch-mediated hypertrophy evidence comes mostly from one research network and from
ultrasound. MRI effects are smaller (d = 0.16-0.30). Protocols are long:

- calf studies used up to 1 h/day, and RT still produced more lateral gastrocnemius growth;
- one pectoral trial matched RT with about 1 h/week (Wohlann 2024).

In resistance-trained men, the only RCT tested short loaded inter-set stretching and found no added effect (Wadhi
2022). Long-duration stretching added to RT in trained lifters is untested beyond a single case study (Homer 2025)."

Grade: contested.

### 11. Stretching does not reduce sports-injury risk

**Verdict: confirmed; wording and read level adjusted.**

**Evidence.**

- **Afonso 2026:** the OSF preprint full text matches every published-abstract number.
  - All comparators: OR 0.945 (0.828 to 1.078; PI 0.773 to 1.155), k = 15, n = 9002.
  - Passive controls: 0.923. Active controls: 1.190.
  - GRADE very low except bone injury (low).
- **Afonso 2026 tissue-specific results (preprint Table 2), not in the notes:**
  - muscle OR 0.768 (0.298 to 1.982);
  - tendon 0.965;
  - ligament/capsule 0.764 (0.563 to 1.036);
  - **bone 1.332 (1.000 to 1.776, p = 0.050, fragility index 1)**: a borderline *increase*.
- **Lauersen 2014, Thacker 2004, Pope 2000 and Small 2008** (all abstract): numbers confirmed.

**Problems.**

- **Wording.** "Does not reduce" overstates very-low-certainty evidence. Better: "no detectable effect".
- **Strength-training comparison.** The RR 0.315 is an indirect comparison across different trials, and it rests on
  few strength trials (the 2018 Lauersen update pooled six).
- **Takeuchi 2024.** The DOI is now verified (10.1007/s11332-024-01213-9), but its numbers remain unverified.
- **Published version unavailable.** The published Afonso 2026 version could differ from the preprint.

**Corrected wording.** "Chronic stretching programmes show no detectable effect on sports-injury risk (Afonso 2026:
OR 0.945, 0.828 to 1.078, 15 studies, 9002 participants, GRADE very low; consistent with Lauersen 2014, Thacker 2004
and the Pope 2000 trial). There was no effect for muscle, tendon or ligament injury. Bone injury was borderline
higher with stretching (OR 1.33, 1.00 to 1.78). Acute pre-activity stretching has never been tested. In a separate
meta-analysis, strength-training programmes reduced injuries (RR 0.315); this is an indirect comparison."

### 12. ROM gains are only partly lost after 2-6 weeks of stopping

**Verdict: corrected (population and "active" subgroup).**

**Evidence.** Konrad 2025, full text:

- Pre to post: 0.93 (0.54 to 1.31), GRADE high.
- Post to detraining: -0.41 (-0.73 to -0.09), GRADE low.
- Pre to detraining: 0.55 (0.33 to 0.77).
- Inactive participants: -0.52, p = 0.04. The printed CI, -0.97 to -0.39, is inconsistent with that p value.
- Active participants: p = 0.09.

**Problems.**

- **Population.** At least 6 of the 13 studies were in children or adolescents (mean ages 5.9-16.5 y), with one
  older-adult sample. The claim's implied adult population is wrong. The evidence record already says "many in
  youth"; the notes do not.
- **The "active" subgroup.** "Active participants retain gains" rests on a non-significant decline, which is an
  absence of evidence.
- **Guissard 2004** is correctly cited for the different time courses of neural and mechanical change.

**Corrected wording.** "In 13 small studies of mixed ages, many in children and adolescents, 2-6 weeks without
stretching reduced ROM slightly from post-training levels (ES -0.41, -0.73 to -0.09; GRADE low), but it stayed above
baseline (0.55, 0.33 to 0.77). Participants who stayed active showed no significant loss (p = 0.09); this suggests,
but does not show, that ongoing activity preserves gains."

### 13. The 2025 Delphi consensus

**Verdict: confirmed.**

**Evidence** (full text):

- 20 experts, ≥80% agreement threshold.
- Chronic ROM: static or PNF, 2-3 sets daily of 30-120 s, "to reach the highest possible weekly volume" (95%).
- Full-ROM RT and foam rolling are named as alternatives.
- Avoid >60 s per muscle before maximal or explosive efforts of isolated muscles (95%).
- Not a primary strategy for strength (85%) or muscle mass (90%).
- Not for injury prevention in general (85%).
- Acute stiffness reduction: >4 min per muscle (90%).

**Note on grade.** "Convention" fits the dosing specifics, which have no direct trial data. Many statements rest on
systematic reviews written by panel members, and that overlap should be stated. The statements predate Afonso 2026.

**Corrected wording.** Unchanged. Add: "Several panel members authored the reviews the panel relied on."

### 14. The evidence base is untrained young adults, mostly men, mostly calves and hamstrings

**Verdict: corrected (partly refuted).**

**Evidence.**

- **Ingram 2024:** chronic trained 30 of 148 effects; athletes 3; 61% male.
- **Ingram 2025:** plantar flexors 60%, hamstrings 29%; 71% male; 11% of studies trained.
- **Konrad 2023:** 4 elite-athlete effects.
- **Warneke & Lohmann 2024:** 56 of 83 studies untrained or recreationally active; 18 trained.

**Problems.** "No trial addresses barbell 1RM after stretching" is false. Gergley 2013, Beedle 2008 and Molacek 2010
measured squat, bench and leg-press 1RM, in moderately trained men, active adults with lifting experience and
resistance-trained football players (claim 8). The rest of the claim survives:

- none of these trials is in competitive powerlifters or weightlifters;
- no trial tests loaded end-range positions or chronic ROM outcomes in strength athletes.

**Corrected wording.** "The evidence base is mostly recreationally active or untrained young adults, mostly men,
mostly plantar flexors and hamstrings, with passive end-range ROM as the outcome. A few small acute trials tested
barbell 1RM after stretching, with mixed results. No trial studied competitive strength athletes, loaded end-range
positions, or chronic stretching outcomes in lifters."

---

## Spot checks (numbers in the notes outside the claims list)

| # | Notes statement | Source checked | Result |
|---|---|---|---|
| S1 | Ingram 2024 average vs poor baseline g = -0.34 (-0.59 to -0.08) | Ingram 2024 Table 2 (full text) | **Corrected**: -0.33 (-0.59 to -0.08), p = 0.01; the group is "average/not reported". Fixed in the record; the notes state -0.34 twice. |
| S2 | Konrad 2023 females -1.56 vs males -0.89, p = 0.036 | Konrad 2023 Table 1 | Confirmed (-1.558 vs -0.886; Q p = 0.036). The text also prints p = 0.03 and 0.04. |
| S3 | Konrad 2023 supervision -1.08 / -0.75 / -0.74, p = 0.17 | Konrad 2023 Table 1 | Confirmed (p = 0.172). |
| S4 | Folpp 2006 extensibility -1 deg (-4 to 3), tolerance +8 deg (5 to 12) | PubMed abstract | Confirmed. |
| S5 | Blazevich 2018 expectation ratings 4.0/10 vs 5.3-6.4 | Author manuscript | Confirmed (NS 4.0 ± 2.2; 5S 5.7, DYN 6.4, 30S 5.3). |
| S6 | Alizadeh eccentric 0.89 vs concentric 0.72, p = 0.52 | Alizadeh 2023 table | Confirmed (0.889 vs 0.715, p = 0.521). Eccentric k = 9. |
| S7 | Ingram 2025 chronic programmes averaged 4.7 sessions/week for 6.5 weeks | Ingram 2025 full text | Confirmed (4.7 ± 2.3; 6.5 ± 4.2). |
| S8 | Herbert 2011 DOMS: pre MD -0.52 (-11.3 to 10.3), post -1.04, large trial -3.8 | PubMed abstract | Confirmed. |
| S9 | Kokkonen 2007 knee extension 1RM +32.4%, flexion +15.3% | PubMed abstract | Confirmed. |
| S10 | Magnusson 1996 stress relaxation 33% vs 38% | PubMed abstract | Confirmed. |

---

## Wider concerns about the notes

1. **Read levels in the claim tags.**
   - Claims 1, 2, 4 and 5 are tagged `read_level=full-text` but lean partly on abstract-only sources: Behm 2016,
     Medeiros, Magnusson, Folpp, Konrad & Tilp, Freitas, Takeuchi, Thomas, Park and Luangpon.
   - The header lists 16 full texts, but the claim tags imply more.
   - This pass upgraded the following records to full text: Afonso 2026 (preprint), Ingram 2024 (mirror), Blazevich
     2014, Kay 2012, Blazevich 2018, the Warneke recalculation, Panidi 2021, Favro 2025 and Rosenfeldt 2024.
2. **The barbell-1RM gap is overstated** (RQ4 "Studies are a poor fit for lifting", Gaps 1, claim 14). Gergley 2013,
   Beedle 2008 and Molacek 2010 exist and should be cited. They are directly relevant to the target population.
3. **Missing trials.**
   - Wadhi 2022: the RCT in trained men.
   - Wohlann 2024: stretching beat RT for flexibility and matched it for strength and size, at about 1 h/week.
   - Murakami 2025: a head-to-head trial with a mechanism.

   All three cut against statements in RQ3 and RQ5a.
4. **Single-group dominance is understated.** Many key syntheses come from one author network: the Delphi, both
   Warneke meta-analyses, Konrad 2023/2025, Behm 2023, Afonso 2021/2026, Murakami 2025 and Wohlann 2024. Several
   carry internal numeric inconsistencies that this pass found:
   - Warneke & Lohmann 2024: CIs that contradict their p values; the jump ES of 0.15 vs 0.21.
   - The Warneke recalculation: overall-stiffness CI vs p value; duplicated "long" rows.
   - Konrad 2025: the inactive-subgroup CI.
   - Warneke 2024: the Table 2 CI misprint.
   - Panidi 2023: the GRADE text vs Egger's test.

   The chapter should not treat point estimates from these papers as more precise than they are.
5. **Detraining population.** Konrad 2025 is about half paediatric. The "maintenance" inference for adult lifters is
   weaker than the notes imply.
6. **Mechanism inference from Siegel 2026.** The notes cite Siegel as an example of a force-length shift. Strength
   rose only at the *short* angle (70 deg), which is the opposite of what added serial sarcomeres would predict.
7. **Interpreting non-significance.** Several statements read "n.s." as "no effect":
   - body-weight RT;
   - the "active" detraining subgroup;
   - the ≥15-min hypertrophy threshold;
   - "does not impair" athletic performance.

   The chapter should say "not shown" where CIs are wide.
8. **Lauersen 2014 strength-training RR.** The notes use RR 0.315 to argue that loading beats stretching for
   injuries. That is a cross-trial comparison, not a head-to-head result.
9. **Records left at abstract or secondary level** (paywalled or blocked here): Behm 2016, Thomas 2018, Simic 2013,
   Lauersen 2014, Takeuchi 2024 (numbers unverified), Moltubakk 2021, Freitas 2018, Park 2026, Luangpon 2026, Morton
   2011 and Warneke 2023 JSCR. Their numbers match the abstracts, but none may be stated as verified.

## Records changed

**Updated** (`checked` filled; `read_level` set to what this pass read):

- **Claims 1-4:** ingram-2024-stretching-dose (baseline-flexibility number fixed), konrad-2023-chronic-rom,
  behm-2023-acute-rom, behm-2016-acute-stretching, medeiros-2016-hamstring-static,
  ingram-2025-stretching-mechanisms (meta-regression limitation added), magnusson-1996-flexibility,
  folpp-2006-stretch-tolerance, konrad-2014-static-stretching, blazevich-2014-plantar-flexor-stretch,
  freitas-2018-chronic-stretching-mtu, takeuchi-2023-muscle-stiffness,
  warneke-2024-passive-properties-recalculation (limitation added), magnusson-1996-stress-relaxation,
  panidi-2023-fascicle-meta, moltubakk-2021-six-month-stretching, panidi-2021-adolescent-stretching,
  thomas-2018-stretching-typology, park-2026-ankle-nma.
- **Claims 5-8:** warneke-2025-delphi-consensus, arntz-2023-chronic-stretching-strength, luangpon-2026-older-volume,
  kaczorowski-2026-low-volume, alizadeh-2023-rt-rom, favro-2025-rt-flexibility (limitation added),
  afonso-2021-strength-vs-stretching, morton-2011-rt-vs-stretching, warneke-2023-stretch-vs-rt,
  warneke-2024-force-deficit, kay-2012-acute-static-stretch, simic-2013-pre-exercise-stretching,
  blazevich-2018-full-warmup.
- **Claims 9-10:** warneke-2024-stretch (the earlier chapter-5 note is kept), arntz-2024-stretch-hypertrophy,
  warneke-2023-long-lasting-stretch-trained, warneke-2025-smh-applications, homer-2025-bodybuilder-case,
  siegel-2026-quadriceps-smh, van-every-2022-interset-stretch.
- **Claims 11-12:** afonso-2026-stretching-injury (tissue-specific finding added), lauersen-2014-injury-prevention,
  thacker-2004-stretching-injury, pope-2000-army-stretching, small-2008-static-stretching-injury,
  takeuchi-2024-stretching-muscle-injury (DOI and URL added), konrad-2025-detraining, guissard-2004-stretch-training.
- **Chapter 7 records cited here:** wohlann-2024-pec-stretch and rosenfeldt-2024-rt-vs-stretch. Their chapter 7
  findings are unchanged.

**Created:** gergley-2013-squat-stretch, beedle-2008-stretch-1rm, molacek-2010-bench-stretch,
wadhi-2022-interset-stretch-trained, murakami-2025-ss-vs-rt, lima-2026-rom-mechanisms-review.
