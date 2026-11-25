# Verification: Chapter 7, "Strength through range and practitioner mobility systems"

Independent verification pass, 2026-11-24, of `notes/strength-through-range.md`. Each load-bearing
claim was checked against the primary source, using the full text where open access allowed. I
also searched for newer or contradicting evidence. Evidence records in `evidence/sources/` were
updated: `checked` filled, `read_level` set to what this pass read, and wrong numbers or
attributions fixed. Two records were added: `head-2026-cars-vs-static` and
`blazevich-2025-sarcomerogenesis`.

**What this pass read.**
- **Full text (PMC via NCBI efetch, or publisher/preprint PDF):**
  - Meta-analyses: Alizadeh 2023, Afonso 2021, Konrad 2023, Yagiz 2021, Cuthbert 2020,
    Sivaramakrishnan 2019, Bajcetic 2026, Ingram 2025 and Panidi 2023 (both re-read), Wolf 2023
    (IUSCA PDF), Blazevich 2025.
  - Trials and cohorts: Rosenfeldt 2024, Movahhedi 2026, Andrews 2025 (multiscale), Andrews 2026
    (NHE mechanics), Pincheira 2022, Hinks 2023, Yona 2026, Head 2026.
  - Reviews: Andrews 2025 (hamstring review), Afonso 2026.
  - Preprint: Gschneidner (SportRxiv 485). The published J Sports Sci version was not accessible.
- **Abstracts (PubMed E-utilities):**
  - All other cited sources, including Diong 2022, Kay 2023, Kawama 2026, Timmins 2016,
    Carmichael 2022, Alonso-Fernandez 2018, Bloomquist 2013, Kubo 2019, Pinto 2012, Noorkoiv 2014,
    Alegre 2014, Oranchuk 2019, Valamatos 2018, McMahon 2026, Kay 2024, Fry 2003, Guo 2026,
    Campos 2016, Tran 2001, Lopez-Bedoya 2013, Nuzzo 2020 and Brockett 2001.
  - Spot checks: Konrad 2025, McMahon 2014, Cholp 2025, Maeo 2024.
  - New evidence: Favro 2025, Pecci 2026, Wolf 2026 (longitudinal).
- **Not reachable:**
  - The Kay 2023 accepted manuscript (pure.northampton.ac.uk) and a secondary summary of Diong 2022
    (physiotutors.com): both hosts are blocked from this environment.
  - The Diong 2022 full text: paywalled.

**Verdict summary**

| # | Claim (short) | Verdict | Grade after check |
|---|---|---|---|
| 1 | RT raises ROM about as much as stretching; smaller in trained people | corrected | established (RT > control); promising (RT ≈ stretching) |
| 2 | Eccentric training raises ROM; matches stretching and adds strength | corrected (wording) | established (direction); promising (vs stretching) |
| 3 | NHE fascicle lengthening magnitude depends on method | confirmed | promising (direction); contested (magnitude) |
| 4 | Serial sarcomere addition measured directly in humans | corrected | speculative-to-promising |
| 5 | After NHE, peak torque shifts to longer lengths | confirmed | promising (one uncontrolled cohort) |
| 6 | Fascicle gains reverse in 3-4 wk; strength retained | corrected | promising |
| 7 | Strength gains specific to trained range | confirmed, minor nuance | promising |
| 8 | Long-length training transfers more broadly | confirmed | promising |
| 9 | Lengthened partials ≈ full ROM; short partials inferior | corrected | promising (hypertrophy); speculative (strength) |
| 10 | Stretching ROM gains sensory, no fascicle change; eccentrics structural | corrected (minor) | promising |
| 11 | No controlled trial exists of FRC/CARs, Kinstretch, ATG or GMB | **refuted as worded** | convention (systems); speculative (CARs, acute) |
| 12 | Knees-over-toes RCT null; hip load ~10x | corrected (context) | speculative |
| 13 | Jefferson curl: one 18-person RCT and one EMG study | confirmed, with nuance | speculative |
| 14 | Yoga/Pilates flexibility in untrained/older; strength fragile | corrected | promising (flexibility, untrained/older); contested (strength) |
| 15 | Separate ROM from flexibility; end-range isometric strength best outcome | confirmed, with nuance | speculative |

---

## Claim-by-claim

### 1. Resistance training improves ROM about as much as stretching

**Verdict: corrected.** The numbers are right, but "about as much" is stronger than the evidence
allows, and "trained" does not mean strength athletes.

**Evidence.**
- **Alizadeh 2023 (full text).**
  - RT vs control: SMD 0.73 (95% CI 0.545 to 0.913), 52 studies, I² 74%.
  - RT vs stretching: 0.084 (−0.558 to 0.725), only 7 studies, I² 79%.
  - Trained/active vs untrained/sedentary: 0.434 vs 1.027 in Table 2; the abstract and text give
    1.042 for untrained. The paper is internally inconsistent; "1.03" matches the table.
  - Body-weight-only RT: −0.232 (−0.517 to 0.053), based on 4 effect sizes. The authors themselves
    caution against overinterpreting this.
  - "Trained or active" is defined as people who "regularly participated in exercise and sports on
    a weekly basis". These are not trained strength athletes.
  - Egger p = 0.002 for RT vs control (already in the record).
- **Afonso 2021 (full text).**
  - ES −0.22 (−0.55 to 0.12), 11 RCTs, n = 452, GRADE moderate (Table 3): confirmed. The negative
    sign numerically favours stretching.
  - The pool includes fibromyalgia, chronic neck pain and ADL-impaired elderly samples.
  - 6 of 11 trials had high randomisation risk of bias.
- **Morton 2011 (abstract):** untrained adults, 5 weeks, n = 25 randomised plus 12 non-randomised
  convenience controls.
- **Rosenfeldt 2024 (full text):** n = 6 per group; sit-and-reach RT = stretching.
- **Newer evidence: Favro 2025 (J Strength Cond Res, abstract; record `favro-2025-rt-flexibility`).**
  - 36 studies, 1469 participants: RT on flexibility g = 0.63 (0.48 to 0.79).
  - Intensity was a moderator (high > low).
  - None of the included studies had low risk of bias.
  - This corroborates the direction and is not cited in the notes.

**Grade.** "Established" holds for RT improving ROM vs control: three meta-analyses agree, despite
reporting bias and high RoB. RT matching stretching rests on CIs that run from about −0.55 to +0.73
SMD. That is "no detectable difference", not demonstrated equivalence, so it is **promising**.

**Corrected wording.** "Resistance training improves joint ROM by a moderate amount versus no training
(SMD 0.73, 52 studies; g 0.63 in a 2025 meta-analysis of 36 high-risk-of-bias studies). Head-to-head
comparisons find no detectable difference from stretching (ES −0.22, 95% CI −0.55 to 0.12, 11 RCTs,
GRADE moderate; SMD 0.08, −0.56 to 0.73, 7 studies), but those intervals cannot exclude moderate
differences either way. Gains were smaller in people who already exercised weekly (0.43 vs 1.03). In
4 effect sizes, body-weight-only training did not significantly raise ROM. No trial was in trained
strength athletes."

### 2. Eccentric training increases flexibility and matches static stretching for ROM

**Verdict: corrected (wording).** The numbers match the abstracts.

**Evidence.**
- **Diong 2022 (abstract):** g 0.54 (0.34 to 0.74), 27 trials, 911 participants, I² 50%, GRADE low to
  high. The outcome pools **joint ROM and fascicle length** as "flexibility", and comparators include
  other interventions as well as no intervention. A secondary search extract (not verified) reports a
  ROM-only subgroup of g 0.52 (0.31 to 0.74), so the pooled number is probably close to the ROM-only
  value.
- **Kay 2023 (abstract):** all numbers are confirmed: g 0.86 (0.65 to 1.08), 22 outcomes, 17 studies,
  376 participants. It covers the lower limb only, and I could not verify whether its effect sizes
  are vs control or pre-post.
- **"Matching static stretching ... while adding strength and volume"** rests on one 11-man
  within-subject trial (Kawama 2026, abstract, no numbers given), plus the indirect RT-vs-stretching
  meta-analyses. Neither Diong nor Kay compares eccentrics with stretching.
- **O'Sullivan 2012:** 6 RCTs, no pooling; superseded.

**Corrected wording.** "Eccentric training increases joint flexibility (g 0.54, 95% CI 0.34 to 0.74, 27
trials; this pools ROM and fascicle-length outcomes) and lower-limb passive ROM (g 0.86, 0.65 to 1.08,
17 studies). In the one direct comparison, a within-subject 10-week trial in 11 men, eccentric
hamstring training matched static stretching for ROM and shear-modulus reduction and added strength and
volume." Grade: established for direction, promising for the comparison with stretching.

### 3. NHE fascicle lengthening: magnitude depends on measurement method

**Verdict: confirmed.**

**Evidence.**
- **Yagiz 2021 (full text).** All six method-specific estimates are confirmed:
  - NHE: MLE 0.23 (−1.02 to 1.47); panoramic 0.38 (−0.50 to 1.27); trigonometric 1.98 (0.52 to 3.44).
  - All eccentric training: panoramic 0.72 (0.17 to 1.28), which *is* significant.
- **Cuthbert 2020 (full text):** fascicle g ≥ 2.58 is a within-study pre-post figure; I² 88% for
  architecture; fail-safe N only.
- **Bourne 2017 and Timmins 2016 (abstracts):** consistent.
- **Hinks 2023 (full text):** rat casting; ultrasound overstated serial sarcomere change by about 5
  percentage points.

**Refutation search.**
- Two controlled syntheses in soccer players support a real but moderate effect:
  - Cholp 2025: high-volume NHE fascicle g 0.43 (0.20 to 0.65), I² 0%.
  - Pecci 2026, Sports Health: 6 studies, 168 players; NHE significantly lengthened BFlh
    fascicles, especially above ~290 total repetitions.
- So the notes' bottom-line heading that the effect is "mostly a measurement artefact" overstates
  the case. Direction is supported; the *magnitude* is inflated by single-image extrapolation and
  pre-post metrics.

**Corrected wording (bottom line 2 of the notes).** "Nordic and other eccentric hamstring training
lengthen biceps femoris fascicles; controlled estimates are small to moderate (g ≈ 0.4-0.7). The
large effects quoted in practice (g ≥ 2.58) come from uncontrolled pre-post effect sizes and
single-image extrapolation." Grade: promising (direction), contested (magnitude).

### 4. Serial sarcomere addition has been measured directly in humans

**Verdict: corrected.**

**Evidence.** Andrews 2025 (full text):
- The training numbers are confirmed: fascicle +19% / +33%, serial sarcomere number (SSN) +25% /
  +49%, volume +8%, strength +40%.
- **SSN is calculated, not directly counted:** mean 3D-ultrasound fascicle length divided by mean
  microendoscopy sarcomere length.
- **Sarcomere data exist for only 9 (central) and 6 (distal) of the 12 participants at baseline,
  and 5 and 4 after detraining.** The detraining SSN change was not testable ("statistical power is
  insufficient"), although the abstract speaks of "reductions".
- There was no control group; the authors list this as a limitation.

The 3-week result is from a *separate* 10-person cohort: Pincheira 2022, full text. That cohort
showed distal-only fascicle +21%, sarcomere length +17%, and unchanged SSN. In Andrews 2025, central
fascicles also did not change in the first 3 weeks.

**Refutation search.** Blazevich, Herzog and Nunes 2025 (J Sport Health Sci; full text; new record
`blazevich-2025-sarcomerogenesis`):
- In animals, eccentric resistance training did **not** increase SSN: Δ 1%, d 0.19 (−0.29 to 0.67).
  Pooling all "apparently eccentric" studies, including downhill running, gave about +3%.
- The authors conclude that high forces at long fibre lengths, not eccentric contraction as such,
  trigger sarcomerogenesis.
- They also conclude that human data are "too few" and "conflicting".
- The notes do not cite this review.

**Corrected wording.** "One uncontrolled study (12 recreationally active adults; sarcomere lengths
obtained in 6-9 of them) estimated a 25-49% rise in serial sarcomere number after 9 weeks of Nordic
training. SSN was calculated from ultrasound fascicle length and microendoscopic sarcomere length.
After 3 weeks of training, a separate 10-person cohort showed distal fascicle lengthening by sarcomere
stretch, not addition. A 2025 meta-analysis found eccentric training does not increase SSN in animals
and judged the human evidence too sparse to conclude." Grade: promising that fascicle lengthening is
real; **speculative** that eccentric training *per se* adds sarcomeres in humans.

### 5. After NHE training, peak torque occurs at longer lengths

**Verdict: confirmed.**

**Evidence.** Andrews 2026 (full text):
- Peak torque +40% (previously reported).
- 37% greater knee extension at peak torque (p = 0.012).
- MTU length +4% (p = 0.001).
- Fascicles 25% longer at peak torque (p < 0.001).
- Estimated active sarcomere length unchanged (p = 0.266).

"+37% knee extension" means a 37% greater knee-extension angle; the MTU itself lengthened only 4%.
It is the same uncontrolled cohort as claim 4. Active sarcomere length is *estimated* using that
cohort's sparsely sampled SSN, so this is not independent confirmation. Brockett 2001 (abstract; one
bout, n = 10, +7.7°) is consistent.

**Wording.** Keep, but add "(same 12-person uncontrolled cohort; sarcomere lengths estimated)".
Promising.

### 6. Fascicle lengthening reverses within 3-4 weeks of detraining; strength retained longer

**Verdict: corrected.** Reversal is partial in the best-measured study.

**Evidence.**
- **Timmins 2016 (abstract):** returned to baseline after 28 days (d −1.73 to −1.55); strength not
  reported in the abstract.
- **Carmichael 2022 (abstract):** −14.8% (d −1.25) after 4 weeks; eccentric torque and volumes
  unchanged.
- **Alonso-Fernandez 2018 (abstract):** decreased with d 1.79; whether it reached baseline is not
  stated; strength not measured.
- **Andrews 2025 (full text):** after 3 weeks fascicles fell 12-16% but **remained longer than
  pre-training (p < 0.001)**. Eccentric strength fell (p = 0.006; −6% per Andrews 2026) but stayed
  above baseline, and volume was maintained.
- **Misattribution:** the notes (RQ1 mechanisms) also attribute "strength outlasts fascicle gains in
  detraining" to `andrews-2025-hamstring-review`. Its full text never discusses detraining, so that
  finding was removed from the record.

**Corrected wording.** "Eccentric-induced fascicle lengthening is largely lost within 3-4 weeks of
detraining: fully in one trial, partly in another, in which fascicles stayed above baseline after 3
weeks. Muscle volume and most of the strength gain are retained over the same period."

### 7. Strength gains are specific to the trained range

**Verdict: confirmed, with a nuance.**

**Evidence.**
- **Bloomquist 2013 (abstract; n = 17 male students):** confirmed. Deep squat +~20% in both squats;
  shallow squat +36% shallow, +9% deep.
- **Kubo 2019 (abstract):**
  - Full-squat 1RM +31.8% vs +11.3% for half-squat trainees.
  - Half-squat 1RM +24.2% vs +32.0%, **not significantly different (p = 0.132)**.
- **Wolf 2023 (full text):** outcome-bias subgroup 0.32 (0.14 to 0.49) vs −0.12 (−0.31 to 0.07).
  This subgroup pools outcome types; the abstract frames it as strength.
- **Pinto 2012 (abstract):** confirmed.

**Nuance.** Transfer is asymmetric, not one-way. Deep trainees gained less in the shallow lift than
shallow trainees did (about 20% vs 36% in Bloomquist), so specificity cuts both ways. Promising.

### 8. Long-length training transfers more broadly; short-length gains are narrow and neural

**Verdict: confirmed.**

**Evidence.**
- **Noorkoiv 2014 (abstract):** clear angle specificity at short length but not long; the
  short-length gain (+13.4%) correlated with EMG/Mmax. Voluntary activation (VA%) did not change,
  so the "neural" inference rests on EMG alone. Fascicle length rose 5.4% in both groups.
- **Alegre 2014 (abstract):** long-length training (K90) +23.5%, peak-torque angle +14.6% toward
  longer lengths; short-length training (K50) +10% (NS), angle −7.3%.
- **Oranchuk 2019 (abstract):** "long muscle length training results in greater transference to
  dynamic performance".
- Samples are 8-11 per group, untrained.

Promising. Add "(small trials in untrained men; neural inference from EMG)".

### 9. Lengthened partials ≈ full ROM for hypertrophy and strength; short partials inferior

**Verdict: corrected.**

**Evidence.**
- **Gschneidner (SportRxiv full text; published 2025):**
  - Participants were existing clients with ≥ 6 months of supervised training at one studio chain.
  - CSA was *estimated from circumference and skinfolds*.
  - Arm interaction −0.032 (−0.123 to 0.058), thigh 0 (−0.094 to 0.094).
  - **Equivalence was not established at the pre-registered alpha** (p = 0.071 and 0.019 vs
    0.005). The authors call the effects "practically equivalent" only on exploratory reasoning.
  - Strength deviated from the pre-registration: estimated 1RM modelled from training logs,
    exploratory.
- **Wolf 2025** (n = 30 trained, within-participant): moderate Bayes-factor support for the null in
  muscle thickness and 10RM.
- **Havers 2025** (n = 13 trained): full ROM slightly better for 1RM (SMD 0.17) and long-length MVC
  (SMD 0.24), with weak-to-moderate evidence.
- **"Short-length partials are inferior":** Wolf 2023's pooled short-partial vs full hypertrophy
  estimate is **trivial and uncertain**, SMD 0.08 (−0.24 to 0.42). Inferiority comes from
  individual trials, such as McMahon 2026 (short partial < long partial and full ROM at some sites)
  and Kubo 2019, not from the meta-analysis.

**Corrected wording.** "For hypertrophy, lengthened partials produce gains very similar to full ROM in
untrained and trained people. This includes a 297-person multi-site trial in trained clients, which
estimated CSA anthropometrically and did not formally establish equivalence at its pre-set alpha. For
strength, data are sparser: full ROM was slightly better in one 13-person trial. Short-length partials
grew muscle less than lengthened partials or full ROM in several trials, although the pooled
meta-analytic estimate is trivial and imprecise (SMD 0.08, −0.24 to 0.42)." Grade: promising
(hypertrophy equivalence); speculative (strength equivalence).

### 10. Stretching ROM gains are sensory plus reduced stiffness; eccentrics add structure

**Verdict: corrected (minor).**

**Evidence.**
- **Ingram 2025 (full text):** chronic stretch tolerance g 0.74 (0.38 to 1.10, GRADE very low),
  stiffness g 0.37, no significant fascicle change. ROM gains were associated with *both* tolerance
  and stiffness.
- **Panidi 2023 (full text)** found a small but significant resting fascicle increase, SMD 0.17
  (0.01 to 0.33), with high stretching volume and intensity. "Without fascicle lengthening" is
  therefore slightly too absolute.
- **Kay 2024 (abstract; n = 13 + 13 controls):**
  - Trained limb: fascicle +7.6%, thickness, MTU stiffness +30%.
  - The contralateral limb gained ROM and stretch tolerance only. The authors say "primarily driven
    by neurological adaptation".
- **Weppler 2010 and Freitas 2018:** these address programmes of up to 8 weeks only.

**Corrected wording.** "...without meaningful fascicle lengthening at typical doses (resting fascicle
length SMD 0.17, seen only with high stretching volume and intensity)..." Promising.

### 11. No peer-reviewed controlled trial of FRC (CARs, PAILs/RAILs), Kinstretch, ATG or GMB

**Verdict: refuted as worded.**

**Evidence.** A peer-reviewed RCT of CARs exists: Head et al. 2026, Int J Exerc Sci 19(3):3005, PMID
42517070, full text read (new record `head-2026-cars-vs-static`).
- 28 young adults with limited hip internal rotation were randomised to one session of hip CARs or
  static stretching.
- Both groups increased passive IR ROM immediately and at 15 minutes (time p < 0.001); there was no
  group difference (interaction p = 0.193).
- It is acute only, with no non-stretching control.

**Why the researcher missed it.** The search reported 0 PubMed hits for "controlled articular
rotation*"[tiab]. I reproduced that: "controlled articular rotations"[tiab] also returns 0, although
the article is indexed with the phrase in its title. This is a phrase-index artefact, so zero-hit
phrase searches are not evidence of absence.

**Other components.**
- Kinstretch, GMB and ATG still return no trials.
- Konrad 2023 (full text): PNF −1.283, static −1.005, ballistic/dynamic −0.550 confirmed; static vs
  PNF not different.
- NCT03456050 is a clinical-population trial; no results located, as stated.

**Corrected wording.** "No chronic training trial exists for FRC (PAILs/RAILs), Kinstretch, the ATG
programme or GMB. The only controlled trial of CARs is a single-session RCT (n = 28), in which hip
CARs increased passive hip internal rotation as much as static stretching. The systems' component
techniques map onto PNF-type stretching and long-length loading, which do have evidence." Grade:
convention (systems and their outcome claims); speculative (acute CARs ≈ static stretching).

### 12. Knees-over-toes: the only RCT is null; blocking knee travel shifts load to the hip ~10x

**Verdict: corrected (context).**

**Evidence.** Movahhedi 2026 (full text) numbers are confirmed: Oswestry F(2,54) = 1.999, p = 0.145;
no secondary result met the Bonferroni threshold. The claim omits that:
1. The primary outcome was low-back disability (Oswestry) in healthy adults with a floor effect.
   The authors call this choice "an error of design".
2. The trial could detect only large differences (η² ≈ 0.15) and "was not an equivalence study".
3. It had **no ROM or strength outcome**.
4. Post hoc baseline-adjusted analyses strengthened some exercise-vs-control contrasts (two below
   the adjusted threshold; exploratory).

Fry 2003 (abstract):
- n = 7 weight-trained men; barbell load = body weight.
- Hip torque 28.2 ± 65.0 → 302.7 ± 71.2 N·m (≈10.7x); knee 150.1 → 117.3 N·m.
- The baseline hip mean is near zero with a large SD, so the ratio is unstable. "Shifts hip torque
  from near zero to about 300 N·m" is more accurate than "tenfold".

**Corrected wording.** "The only training RCT of the cue (60 active adults, 6 weeks of bodyweight
squats) found no detectable difference between allowing and blocking forward knee travel. Its
primary outcome was a disability index with a floor effect, it was powered only for large effects,
and it measured no ROM or strength. In 7 trained men squatting a body-weight barbell, blocking knee
travel cut knee torque by about a fifth and raised hip torque from near zero to about 300 N·m."
Speculative.

### 13. Jefferson curl: one 18-person RCT and one EMG study

**Verdict: confirmed, with nuance.**

**Evidence.**
- **Rosenfeldt 2024 (full text, Table):**
  - Sit-and-reach: RT +6.6 cm, SS +6.1 cm, RT = SS.
  - Isometric SLDL at 95% hip ROM: RT +145 ± 27 N vs SS −16 ± 57 N.
  - **But the RT advantage was just as large at 50% of ROM (+139 ± 53 N vs +17 N)**, so it is not
    an end-range-specific gain.
  - Controls also gained 49 N at 95% (p = 0.041).
  - The "modified" Jefferson curl began with a neutral-spine hinge before spinal flexion, and was
    combined with straight-leg deadlifts.
- **Yona 2026 (full text):** n = 21 resistance-trained; g 0.83, 0.49 and 0.60 confirmed. Load was
  progressed to Borg RPE 16 on the Jefferson curl and the same absolute load used for the RDL.

**Corrected wording.** Replace "end-range hinge strength far greater" with "isometric hip-hinge
strength far greater at both 50% and 95% of hip ROM". Speculative.

### 14. Yoga and Pilates: flexibility in untrained or older people; strength fragile

**Verdict: corrected.**

**Evidence.**
- **Sivaramakrishnan 2019 (full text):** mean age ≥ 60.
  - Vs inactive controls: lower-body flexibility g 0.50 (0.30 to 0.69), lower-limb strength 0.45
    (0.22 to 0.68).
  - Vs active controls: strength 0.49 (0.10 to 0.88), flexibility 0.28 (0.01 to 0.54).
  - All confirmed. The strength effects here are not "small" (0.45-0.49) and are significant.
    Fragility comes from Guo 2026 (abstract; trim-and-fill borderline).
- **Bajcetic 2026 (full text) is internally inconsistent.**
  - The text gives sit-and-reach SMD 0.69 (0.43 to 0.94) and handgrip 0.04 (−0.63 to 0.72).
  - The GRADE table gives sit-and-reach 0.86 (0.23 to 1.50; moderate) and handgrip 0.23 (−0.08 to
    0.54; low).
  - A 0.43-0.94 CI is implausibly narrow for a random-effects pool with I² 83%.
  - It includes non-randomised trials and mixed populations (students, postmenopausal, obese
    women).
- **Campos 2016 (abstract)** found **no significant flexibility benefit** of Pilates in healthy
  adults: MD 4.97 (−0.53 to 10.47), p = 0.08. The notes list it but the claim does not reflect it.

**Corrected wording.** "Yoga improves lower-body flexibility in older adults (g 0.50 vs inactive, 0.28
vs active controls). Its strength effect (g 0.45-0.49) shrank to borderline significance after
publication-bias adjustment in a 2026 meta-analysis. Pilates evidence on flexibility is mixed: one
meta-analysis of healthy adults found no significant effect, and a 2026 meta-analysis in women
reports SMD 0.69 or 0.86 (its text and GRADE table disagree), with high heterogeneity. There are no
trials in trained strength athletes." Grade: promising (yoga flexibility, older adults); contested
(Pilates flexibility; strength from both).

### 15. Measurement: separate ROM from flexibility; end-range isometric strength is the best "usable range" outcome

**Verdict: confirmed, with nuance.**

**Evidence.**
- **Afonso 2026 (full text):** the ROM vs flexibility distinction is confirmed.
- **Lopez-Bedoya 2013 (abstract):** confirmed, but groups were n = 9-11 with no control.
- **Afonso 2021:** no active-vs-passive subgroup difference for RT vs stretching.
- **Nuzzo 2020:** narrative argument; contested in published comments, which were not read.
- **Nuance.** The notes' supporting statement that end-range strength "distinguishes stretching
  (ROM up, end-range strength flat) from loaded training (both up)" is drawn from Rosenfeldt. There,
  the RT strength gain was equal at mid-range. Rosenfeldt therefore shows loaded training raises hip
  extensor strength across the range, not specifically at end range.

Speculative.

---

## Spot checks (numbers not in the claim list)

| # | Notes statement | Source checked | Result |
|---|---|---|---|
| 1 | Valamatos 2018: "PCSA +17.7% with partial" (notes l.110) | PubMed abstract | **Wrong.** PCSA +7.8 ± 4.0% (dav 0.6); +17.7 ± 3.9% is the torque-angle (strength) gain. Record fixed. |
| 2 | Konrad 2025: stretching ROM "pre-to-detraining ES 0.47" (notes l.451) | PubMed abstract and existing full-text record | **Wrong.** ES 0.55 (95% CI 0.33 to 0.77); post-to-detraining −0.41 (−0.73 to −0.09). Record already correct. |
| 3 | Cholp 2025: high-volume NHE fascicle g 0.43 (0.20 to 0.65), thickness 0.48, low-volume eccentric strength 0.46 | Abstract | Confirmed. |
| 4 | Maeo 2024: hamstrings +18% vs +11% (lengthened-state eccentrics vs NHE) | Abstract | Confirmed (BFlh figure truncated in the abstract text retrieved; not re-checked). |
| 5 | McMahon 2014: fascicle length +23% (long ROM) vs +10% (short) | Abstract | Confirmed (23 ± 5% vs 10 ± 2%). |
| 6 | Alizadeh body-weight subgroup −0.23 (−0.52 to 0.05) | Full text Table 2 | Confirmed (4 effect sizes). |
| 7 | Andrews 2025 detraining "with sarcomere-number loss" (notes l.126) | Full text | **Wrong.** The authors report insufficient power to test SSN after detraining; fascicles remained above baseline. |

---

## Wider concerns about the notes

1. **Zero-hit PubMed phrase searches were treated as proof of absence.** The CARs RCT was missed
   because PubMed's phrase index does not match "controlled articular rotations". Re-run the
   practitioner-system searches as unquoted keyword searches and web searches before the chapter says
   "no trial exists" for anything. The same caution applies to Kinstretch, GMB and ATG. My keyword
   re-search found nothing for these, but phrase-index gaps are common for new terms.
2. **Population indirectness is understated in the claim list.** Every architecture, sarcomere, ROM
   and practitioner-system study used untrained, recreationally active or older people. Alizadeh's
   "trained" subgroup means weekly exercisers. Only Gschneidner, Wolf 2025, Havers 2025 and Yona 2026
   used resistance-trained participants, and none measured ROM. The chapter should state this once,
   prominently, and avoid "established" for any claim about trained athletes.
3. **Misattributions and internal inconsistencies.**
   - Detraining retention was attributed to the Andrews review, which never discusses it.
   - Bajcetic's text and tables disagree.
   - Alizadeh's untrained ES differs between table and text.
   - Andrews 2025's abstract claims an SSN reduction after detraining that its results do not
     support.
4. **Missing evidence that qualifies the notes.**
   - Blazevich 2025: eccentric training not shown to add sarcomeres in animals; human data
     inconclusive.
   - Favro 2025: RT-flexibility g 0.63; no low-RoB studies.
   - Pecci 2026: controlled soccer NHE architecture review.
   - Head 2026: CARs RCT.

   The first and last now have records; Favro 2025 and Cholp 2025 already had records from other
   chapters.
5. **Read levels.** Claims 2, 6, 7 and 8 rest wholly on abstracts. Several of their numbers (Kay
   2023, Kawama 2026, Timmins 2016, Carmichael 2022, Bloomquist 2013, Noorkoiv 2014, Alegre 2014)
   cannot be stated as verified effect sizes under the repository convention. The Diong ROM-only
   subgroup (g 0.52) is secondary and unverified.
6. **Headline language.**
   - Bottom line 2 ("mostly a measurement artefact") is stronger than the data; controlled
     estimates are positive and moderate.
   - Bottom line 3 says SSN was "directly shown"; it was calculated from sparse sarcomere samples.
   - Bottom line 9 (Fry) should not say "tenfold" without noting the near-zero, high-variance
     baseline.
7. **Scope drift to watch.** Movahhedi's primary outcome is a low-back disability index, and several
   hamstring sources are framed around injury prevention. The chapter should cite them for
   performance-relevant findings only, consistent with the thesis's non-clinical framing.
