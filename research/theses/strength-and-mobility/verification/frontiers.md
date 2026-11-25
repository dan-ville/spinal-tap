# Verification: Chapter 11, "Frontiers: individual response, sex, age and technology"

Independent verification pass, 2026-11-24, of `notes/frontiers.md`. Each load-bearing claim was
checked against the primary source, using the full text where open access allowed, and I searched for
newer or contradicting evidence. Evidence records in `evidence/sources/` were updated: `checked`
filled, `read_level` set to what this pass read, and wrong numbers or descriptions fixed. Five new
records were added for contrary evidence found during refutation attempts.

**What this pass read.**
- **Full text:**
  - Europe PMC full-text XML: Rantila 2025, Refalo 2025, McNulty 2020, Munteanu 2026, Colenso-Semple
    2023 and 2025, Nolan 2024, Elliott-Sale 2020, Greig 2023, Claassen 2026, Havers 2025, Genc 2025,
    Swinton 2018, Chaves 2025, Pickering 2019, Weakley 2021, Borde 2015, Swinton 2024, Jukic 2023
    (abstract and results), Oberhofer 2021.
  - **D'Souza 2026 and Huang 2026 are open access in PMC** (PMC13561106, PMC13744422), so they are
    no longer abstract-only.
  - Roberts 2026 conference summary: PMC author manuscript via NCBI efetch.
  - Steele 2023 (variation): SportRxiv preprint (10.51224/SRXIV.214).
- **Abstracts:**
  - PubMed: Hubal, Atkinson 2015 and 2019, Hecksteden 2015 and 2018, Damas, Lixandrão 2024 and
    2025, Churchward-Venne, Webborn, Willems, Yang, Petrella, Bamman, Roberts 2020, Jones 2021,
    Kissow, Grgic 2020 and 2022, Ahtiainen (the PMC copy would not download), Latella, Shen, Nunes,
    Fyfe, Düking, Nuzzo 2024, Lesinski.
  - Dergaa: abstract from the PMC XML.
  - Records added for contrary evidence: Morton 2018, Bergamasco 2024, Niering 2024, De Oliveira
    2019, Bittencourt 2024.
- **Still not retrievable:**
  - Robinson 2025: the bioRxiv PDF is blocked. It is still a preprint, and the 2026 JAP summary
    cites it as bioRxiv.
  - Published J Sports Sci version of Steele 2023.
  - Ahtiainen 2016 full text.

**Verdict summary**

| # | Claim (short) | Verdict | Grade after check |
|---|---|---|---|
| 1 | Raw ranges overstate true variability; use SD_IR, replication, control limbs | confirmed | established |
| 2 | True inter-individual variability exists and partly repeats | confirmed (one number inconsistent in source) | promising |
| 3 | General trainability, not variable-specific response; mean-variance artefact | confirmed, with caveats | contested |
| 4 | True non-response is rare, outcome- and dose-dependent | corrected | promising |
| 5 | No validated genetic/omic predictor | corrected (attribution) | established |
| 6 | Ribosome biogenesis and satellite cells; hormones/AR/rDNA do not separate | corrected (AR is contested) | promising (mechanisms); contested (AR) |
| 7 | Equal relative hypertrophy; absolute favours men; women more relative upper-body strength | confirmed, one supporting source misdescribed | established (relative size); promising (rest) |
| 8 | Menstrual phase has at most a trivial acute effect | corrected | promising for dynamic strength; contested overall |
| 9 | Phase-based training gives no advantage | confirmed (now full text) | promising |
| 10 | Oral contraceptives do not change adaptations | confirmed | promising |
| 11 | Older adults stay highly trainable | confirmed | established (strength); promising (masters lifters) |
| 12 | Heavier loads, higher volume and minimal doses for older adults | corrected | promising (load); speculative-to-promising (volume, minimum dose) |
| 13 | LPT most valid; velocity 1RM ~10% error, overestimates | confirmed, refined | promising |
| 14 | VBT ≈ percentage-based for strength | confirmed | promising |
| 15 | LLM programmes moderate; no outcome trials; HRV-guided RT lacks controlled evidence | corrected (HRV part) | speculative |

---

## Claim-by-claim

### 1. Raw ranges overstate true variability

**Verdict: confirmed.**

**Evidence.**
- Hubal 2005 (abstract): 585 untrained adults (342 F, 243 M), 12-week unilateral elbow-flexor
  training. CSA changed by −2% to +59%, 1RM by 0% to +250%, MVC by −32% to +149%. There was no
  control group, so these are gross ranges.
- Atkinson 2015 (abstract): true individual-response differences "are quantified only by comparing
  the SDs of changes between intervention and comparator arms", or against a prior repeatability
  study of the same duration. Moderators should be explored only if that difference is clinically
  relevant.
- Atkinson 2019 (abstract): sample responder counts are biased by within-subject variability. They
  "may be explained wholly by sample differences in mean response", even when the threshold comes
  from measurement error. The recommended alternative is an SD_IR-based probability that a new
  person responds.
- Hecksteden 2015 (abstract): within-subject variation in training efficacy "may not be disclosed by
  comparison to a control group but calls for repeated interventions".
- Hecksteden 2018 (abstract): only 11 of 20 trainees were classified consistently across methods.
- Swinton 2018 and Chaves 2025 (full text): typical-error/SWC framework, and the contralateral
  control-limb design.

**Refutation attempts.** None found. The methodology is uncontested in principle. Its practical
limits are covered under claims 3 and 4.

**Corrected wording.** No change needed. One addition: Hecksteden 2018 is an endurance (VO2max) trial
in untrained 46-year-olds, so the "11 of 20" figure illustrates method disagreement. It is not
resistance-training data.

### 2. True inter-individual variability exists and is partly reproducible

**Verdict: confirmed, with one source inconsistency.**

**Evidence.** Rantila 2025, full text:
- Design: n = 20 analysed in the RT group (11 M, 9 F) and 27 controls; two identical 10-week
  periods separated by 10 weeks of detraining.
- SD_IR² by outcome: VL CSA 5.114 (95% CL 0.947 to 9.281); BB CSA 0.455 (0.117 to 0.793); LP
  1RM/BM 0.041 (0.014 to 0.07); BC 1RM/BM 0.001 (<0.001 to 0.002).
- Between-period correlations: VL CSA r = 0.697, BB CSA 0.761, LP 1RM 0.671 (p ≤ 0.001).
- Biceps curl is reported as **r = 0.393 in the abstract and r = 0.383 in the Results** (p = 0.095
  in both).
- Damas 2019 (abstract): trained men; between-subject CV of CSA change 37.8% vs between-leg 0.9%
  ("40-fold").

**Refutation attempts.**
- Steele 2023 (variation MA) and Robinson 2025 argue that magnitude is smaller than raw ranges
  suggest. They do not refute existence (see claim 3).
- No failed replication of a replicated-period RT design was found.

**Problems.**
1. SD_IR is estimated for RT1 only, against a single 10-week control period.
2. A repeatable response shows that something stable about the person matters. That includes
   behaviour (effort, adherence, habitual activity, diet) as well as biology. The authors'
   "physiological origin" is an interpretation.
3. Untrained participants only.
4. Damas's between-subject CV comes from a single period and still contains measurement error.

**Corrected wording.** "In the only replicated-period RT trial (untrained adults, n = 20), the SD of
individual responses exceeded zero for every outcome. Responses to two identical 10-week blocks
correlated at r ≈ 0.70 (VL CSA), 0.76 (biceps CSA) and 0.67 (leg-press 1RM), but only ≈ 0.39 (n.s.)
for biceps-curl 1RM. Stable person-level differences in response exist, at least in novices
(promising). Whether they are biological or behavioural is not established."

### 3. Heterogeneity is general trainability, not variable-specific; mean-variance artefact

**Verdict: confirmed as stated, with caveats. Grade contested is right.**

**Evidence.**
- Robinson 2025: abstract only. Full text blocked; no journal version found as of 2026-11-24.
  - 16 recreationally trained adults; ~8 vs ~16 sets/week; two 11-week phases.
  - General response repeated across phases at r 0.67-0.70; the volume-specific response at r
    0.04-0.06.
  - Hypertrophy +1.8 cm² (95% HDI 0.29 to 3.41).
- Steele 2023 (preprint full text):
  - Absolute variance measures: strength SD_ir 0.91 (0.36 to 1.47); lnVR 0.9 (0.77 to 1.02);
    hypertrophy SD_ir 0.42, lnVR 0.5.
  - Relative variance: lnCVR strength −0.61 (−0.76 to −0.47); hypertrophy −0.45 (−0.61 to −0.29).
  - All of these match the notes.

**Refutation attempts and problems.**
1. **The lnCVR result is partly built into the method.**
   - lnCVR on change scores divides by the control arm's mean change, which is close to zero. The
     authors used absolute change scores, but the control CV is still inflated, and that pushes
     lnCVR negative.
   - A negative lnCVR therefore says that absolute-variance statistics cannot prove response
     variation. It does not show that there is none.
   - The notes' sentence "the extra variance in trained groups could be explained by the larger
     mean change alone" is fair; anything stronger is not.
2. **Lixandrão 2024 points the other way.** In older adults, 1-set non-responders benefited from 4
   sets as a group (time × set P < 0.05), while responders' 1RM did not differ by volume. That is a
   person-by-volume interaction, though it is weakened by post-hoc classification and regression to
   the mean. The chapter should present it as the counter-signal.
3. Robinson's null on volume-specific response comes from n = 16 over two phases. It is
   underpowered to detect moderate interaction variance; the authors themselves say they "failed to
   detect irrefutable evidence".

**Corrected wording.** "Evidence favours stable differences in general trainability (promising).
Evidence that people differ in which programme variable suits them is lacking. The only replicated
test (n = 16, preprint) found no repeatable volume-specific response, while a non-replicated older-adult
trial suggests low responders benefit more from extra volume (contested). Relative-variation
meta-analysis (lnCVR) shows that absolute-variance statistics overstate heterogeneity. It cannot show
that heterogeneity is absent."

### 4. True non-response is rare, outcome- and dose-dependent

**Verdict: corrected.**

**Evidence.**
- **Rantila 2025** (full text):
  - 4 of 20 participants (~20%) were below the MDC in both periods, each on one strength variable
    (1 leg press, 3 biceps curl). None repeated on more than one variable, and there were no
    repeated size non-responders.
  - **Single-period non-response was common for one outcome: 11 of 20 were below the MDC for
    biceps-curl 1RM after RT2.**
- **Lixandrão 2024** (abstract): 51 of 85 were non-responders to 1 set (≤ 2 × TE = 3.27%).
  - Non-responders showed a time × set interaction for qCSA and 1RM, so as a group they gained more
    with 4 sets.
  - **The follow-up, Lixandrão 2025 (abstract), defines "low responders" with blunted hypertrophy at
    both 1 and 4 sets.** So more volume did not rescue every non-responder.
- **Churchward-Venne 2015** (abstract): every participant (n = 110) improved on at least one of
  several outcomes, and response improved from 12 to 24 weeks.
- **Pickering 2019** (full text): non-response is dose- and outcome-specific.

**Problems.**
1. "Rare" holds only for non-response that repeats across periods and outcomes. In Rantila, one in
   five repeated non-response on one outcome.
2. Every source here classifies people as non-responders with an MDC or 2 × TE threshold. Claim 1
   says (via Atkinson 2019) that such counts are biased, and the chapter should not lean on these
   counts without that caveat.
3. "At least one outcome improved" (Churchward-Venne) is a lenient test that noise alone can pass.

**Corrected wording.** "Non-response is best described as outcome- and dose-specific (promising).
- In the replicated trial, about one in five novices failed to exceed measurement error on the same
  single strength outcome in both blocks, but nobody did so on more than one outcome, and nobody
  repeatedly failed to grow.
- In older adults, a second leg trained with 4 sets gained more than the 1-set leg in the group
  classified as 1-set non-responders. A subgroup still did not grow at either volume.
- Responder counts are themselves biased (claim 1), so these proportions are approximate."

### 5. No validated genetic or omic predictor of training response

**Verdict: corrected (attribution and wording). The substance stands.**

**Evidence.**
- Roberts 2026 (author manuscript, full text):
  - FAMuSS: of ~500 polymorphisms, only MSTN and SPP1 were associated with hypertrophy. The summary
    gives FAMuSS as 1,300 participants overall, not the 585 of Hubal 2005.
  - One SNP (GLI3) of >315,000 was associated, in 119 college-aged men.
  - GWA findings "have proven difficult to replicate"; a robust PGS "requires … >100,000
    participants".
  - Practitioner advice: "not place **undue** weight on any genetic tests".
- Willems 2017 (abstract): 195,180 people gave 16 loci.
- Yang 2024 (abstract): 440 inactive adults; 11 SNPs at P < 1e-5; PPS explained 47.2% (RT); GLM AUC
  0.809 (0.669 to 0.949); models were 10-fold cross-validated.
- Webborn 2015 (abstract): consensus that genetic tests have "no role" in individualised training
  prescription.

**Problems.**
- **Attribution.** The 2026 summary cites Yang's 47% figure *in support of* the PGS approach. It
  notes only the liberal threshold. "Likely overfit" is this thesis's own methodological judgement:
  SNP discovery and scoring were done in the same cohort, and within-cohort cross-validation does not
  correct for SNP selection. The chapter must word it as our inference.
- The notes say the expert group told practitioners "not to weigh genetic tests". The source says
  "not place undue weight".

**Corrected wording.** "No genetic or omic predictor of resistance-training response has been
validated (established).
- Candidate-gene and GWAS hits are few and have proven hard to replicate.
- Experts estimate that a robust polygenic score would need >100,000 participants.
- A 2024 score said to explain 47% of hypertrophy variance (n = 440) was derived and tested in the
  same cohort with a liberal threshold. In our assessment it is at high risk of overfitting until it
  is replicated externally.
- Consensus statements advise against using genetic tests to individualise training (Webborn 2015)
  or putting undue weight on them (2026 expert summary)."

### 6. Mechanisms of high response

**Verdict: corrected. The androgen-receptor statement is contested, not settled.**

**Evidence.**
- Roberts 2026 (full text) names ribosome biogenesis and satellite-cell dynamics as the mechanisms
  replicated "across various laboratories". It reports that rDNA copy number and ECM proteins did not
  delineate responders. The hormone-receptor null is specifically "skeletal muscle sex hormone
  protein content or DNA binding activities" in Roberts/Libardi data, and Phillips's point is that
  physiological circulating hormones are not a key driver.
- Petrella 2008 (abstract): Xtr/Mod/Non n = 17/32/17; myofibre growth 58/28/0%; satellite cells
  +117% in Xtr only; myonuclei +26% (Xtr) and +9% (Mod).
- Bamman 2007 (abstract): MGF and myogenin rose in Xtr (+126%, +65%) and Mod (+73%, +41%), with no
  change in Non. All confirmed.

**Refutation attempts.** These found contrary data on androgen receptors:
- **Morton 2018** (abstract; resistance-trained men; 49 in the hormone models, 10 vs 10 extremes):
  no circulating or intramuscular hormone differed. However, **muscle AR content was higher at all
  time points in high responders and was linearly related to LBM (P < 0.01), type 1 CSA (P < 0.05)
  and type 2 CSA (P < 0.01).**
- **Bergamasco 2024** (abstract; the Roberts/Libardi study behind the conference statement): changes
  in AR markers did not correlate with hypertrophy, but **baseline cytoplasmic AR was associated with
  type II fibre hypertrophy in men**.

**Corrected wording.** "The mechanisms most consistently linked to high hypertrophic response across
laboratories are ribosome biogenesis and satellite-cell expansion with myonuclear addition
(promising; cluster-based classification inflates group differences).
- Circulating hormones within the physiological range do not separate high from low responders
  (promising).
- Training-induced changes in muscle androgen-receptor markers do not track growth. Baseline AR
  content has been associated with hypertrophy in men in two studies (contested).
- rDNA copy number did not separate responders in a single study (speculative)."

### 7. Sex differences in hypertrophy and strength

**Verdict: confirmed for the headline numbers. One supporting source is misdescribed.**

**Evidence.**
- Refalo 2025 (full text): 29 studies.
  - Absolute SMD 0.19 (95% HDI 0.11 to 0.28), pd 100%; relative lnRR 0.69% (−1.50% to 2.88%).
  - Upper body 0.30 (0.14 to 0.44) vs lower body 0.17 (0.056 to 0.29).
  - Trained subgroup 0.20 (0.01 to 0.38), 13 observations.
- Roberts 2020 (abstract): hypertrophy ES 0.07 ± 0.06 (P = 0.31). Upper-body strength −0.60 ± 0.16
  (P = 0.002; 19 outcomes, 17 studies, I² 72.1). Lower-body −0.21 ± 0.16 (P = 0.20; 23 outcomes,
  I² 74.7).
- Jones 2021 (abstract): older adults. Relative upper-body strength g −0.29 (−0.62 to 0.04, n.s.).
  This was missing from the notes and qualifies "women often gain more relative upper-body strength".

**Problem.** The notes say Swinton 2024 found "adding sex did not improve prediction of strength or
hypertrophy outcomes". **Swinton 2024 has no hypertrophy outcomes.** Its outcome domains are
strength, power, jump, change of direction and sprint (full text). Adding sex did not improve the
model (ELPD-LOO +2.9, se 2.3), and only 12% of groups were female-only.

**Corrected wording.** "Men and women gain muscle by the same relative amount (Refalo 2025: 0.69%,
95% HDI −1.50 to 2.88; established in untrained young adults). Absolute gains slightly favour men (SMD
0.19, 0.11 to 0.28), more in the upper body. In young adults, women show larger relative upper-body
strength gains (ES −0.60; promising, high heterogeneity, mostly short studies). In adults over 50 the
upper-body difference is not significant (g −0.29, −0.62 to 0.04). Across 295 S&C studies, adding sex
did not improve prediction of strength and power outcomes (Swinton 2024; no hypertrophy outcomes).
Data on trained people are sparse (13 observations)."

### 8. Menstrual-cycle phase and acute performance

**Verdict: corrected.**

**Evidence.**
- **McNulty 2020** (full text):
  - ES0.5 −0.06 (95% CrI −0.16 to 0.04) pools **endurance and strength outcomes** (51 studies) and
    is described as trivial for both.
  - Early vs late follicular −0.14 (−0.26 to −0.03); 73 studies in the network.
  - So the −0.06 is not a strength-only estimate.
- **Munteanu 2026** (full text): 28 resistance-trained women; deviations of ~0.01-0.02 m/s;
  motivation β = 0.0004 (p = 0.021).
  - **Motivation was rated on a 0-100 mm VAS**, so the β is per mm: about 0.02 m/s across a 50-mm
    swing in motivation. That is the same order as the phase deviations.
  - The paper reports motivation as "a strong predictor". It does not test whether motivation
    predicts *better than* phase, so the notes' phrasing goes beyond the source.

**Refutation attempts.** Niering 2024 (abstract; new record `niering-2024-menstrual-strength`) is a
strength-only meta-analysis of 22 studies (n = 433). It reports weighted mean SMDs favouring the late
follicular phase for:
- isometric strength: SMD 0.60, 7 studies;
- isokinetic strength: SMD 0.39, 5 studies;
- dynamic strength: SMD 0.14, 3 studies.

The analysis is methodologically weaker: weighted means, few studies per contrast, and phase
verification not reported in the abstract. It still means "at most trivial" is not uncontested,
especially for isometric strength.

**Corrected wording.** "Across all exercise performance, the early follicular phase may be trivially
worse (ES −0.06, 95% CrI −0.16 to 0.04; low-quality evidence; endurance and strength pooled). In
resistance-trained women training through two mesocycles, bar velocity deviated from individual
predictions by only ~0.01-0.02 m/s across phases (promising). Self-rated motivation was a significant
predictor of similar magnitude. One lower-quality strength-only meta-analysis reports small-to-moderate
phase effects for isometric strength (contested). For dynamic training performance, phase effects
appear too small to matter."

### 9. Phase-based training gives no advantage

**Verdict: confirmed. D'Souza 2026 is now read in full text (PMC13561106).**

**Evidence.**
- D'Souza 2026, design:
  - 24 eumenorrheic women, verified by LH tests and serum hormones; "previously untrained or
    recreationally active" (no lower-body RT for ≥ 6 months).
  - Each participant's two legs were randomised to two of four conditions, so each participant
    contributes two conditions.
- D'Souza 2026, results:
  - All training conditions beat control (P < 0.001); thigh lean mass +0.07 ± 0.01 kg vs CON in
    each condition.
  - No differences among EX, HV-FOL and HV-LUT (all P ≥ 0.17).
  - Volume load predicted change in thigh lean mass (marginal R² 0.47), VL CSA (0.30), leg press
    1RM (0.39) and leg extension (0.25), but not MVIC.
  - Exploratory finding: HV-FOL increased the type I:II fibre ratio vs CON and EX (interaction
    P = 0.017).
- Colenso-Semple 2025 (full text): MyoPS 1.33 → 1.52 %/d (follicular) and 1.28 → 1.46 (luteal);
  phase P = 0.213, interaction P = 0.299. Confirmed.

**Problems.**
- The paper does not say whether the zero-volume control legs were included in the volume-load
  models. If they were, the R² mostly reflects trained vs untrained legs.
- This is a single group (McMaster) with untrained participants and a quadriceps-only model, over
  three cycles.

**Corrected wording.** As in the notes, plus: "in previously untrained or recreationally active
women; untested in trained women or athletes".

### 10. Oral contraceptives and adaptation

**Verdict: confirmed.**

**Evidence.**
- Nolan 2024 (full text): 8 studies, 54 effects, 325 participants (159 OCP / 166 natural).
  Hypertrophy 0.01 (−0.11 to 0.13); strength 0.10 (−0.08 to 0.28); power −0.04 (−0.93 to 0.84). No
  non-oral methods were studied, although the title says "hormonal contraceptive".
- Elliott-Sale 2020 (full text): 42 studies, 590 participants. The probability of a small effect
  favouring natural cycles is 0.40 or 0.19 depending on method; 83% of studies were moderate to very
  low quality.

**Corrected wording.** None needed. Add that the power estimate is very imprecise.

### 11. Older adults remain trainable

**Verdict: confirmed.**

**Evidence.**
- Grgic 2020 (abstract): 22 studies. Strength 0.97 (0.50 to 1.44); ≥ 80 y 1.28 (0.28 to 2.29);
  whole muscle 0.30 (0.10 to 0.50).
- Borde 2015 (now full text):
  - Strength SMDbs 1.57 (95% CI 1.20 to 1.94; 25 studies; I² 80%).
  - Morphology 0.42 (0.18 to 0.66; 9 studies; I² 0%).
- Ahtiainen 2016 (abstract): age and sex did not affect responses.
- Latella 2024 (abstract): female Masters 3-4 (> 59 y) still +2.5-5.0%; male Masters 4 (> 69 y)
  ~−0.35%/y. Strength was compared with general-population norms, not a control group.
- Roberts 2026: "chronological age does not beget blunted responsiveness for all older adults".

**Problems.**
- "Strength gains exceed size gains (SMD 1.57 vs 0.42)" compares SMDs across different outcome
  types, so it is not a direct contrast. Strength SMDs in novices include learning.
- Latella is retrospective competition data with survivor bias.

**Corrected wording.** Keep the claim. Grade strength trainability as established, the masters-lifter
finding as promising, and phrase the strength-vs-size contrast as "standardised strength effects were
several times larger than standardised size effects".

### 12. Dose for older adults

**Verdict: corrected.**

**Evidence.**
- Shen 2026 (abstract): 18 RCTs, 1283 participants.
  - Leg press SMD 0.95 (0.48 to 1.43); leg extension 0.63 (0.09 to 1.17).
  - **Falls RR 2.68 (0.65 to 11.11)** and adverse events RR 2.42 (0.66 to 8.88).
- Nunes 2024 (abstract): HVRT g 0.52 (0.27 to 0.77) and LVRT 0.34 (0.14 to 0.53). **Each is
  compared with control**, the CIs overlap widely, and no direct between-volume test is reported.
  GRADE is low.
- Lixandrão 2024: see claim 4.
- Fyfe 2022 (abstract) is a narrative review. It gives no "1-3 sets, 1-2×/week" prescription; that
  figure is the notes' own synthesis.
- Steele 2023 (minimal dose) is commercial-gym clients aged 48 ± 11 y. Pelland 2026 is mostly young
  adults. **Neither is older-adult evidence**, though the claim is framed for older adults.

**Problems.**
- "With similar safety" rests on non-significance, with point estimates above 2 and very wide CIs.
  That is absence of evidence, not equivalence.
- "Higher volume builds more muscle (g 0.52 vs 0.34)" overstates an indirect subgroup comparison.

**Corrected wording.** "In adults ≥ 50, loads ≥ 70% 1RM produced larger lower-limb strength gains
than lighter loads (leg press SMD 0.95; promising). No significant difference in falls or adverse
events was found, but the estimates are too imprecise to show equal safety (RR 2.68 and 2.42, CIs
spanning ~0.65 to ~11). Indirect comparisons suggest higher-volume programmes produce somewhat more
lean mass in older women (g 0.52 vs 0.34 vs control; GRADE low; speculative-to-promising). In older
adults, extra volume helped many, but not all, 1-set low responders. Minimal doses improve strength
across ages (Fyfe; promising). Specific numbers (1-3 sets, 1-2×/week) come mostly from younger or
mixed-age data and remain a convention for older lifters."

### 13. Velocity devices and load-velocity 1RM prediction

**Verdict: confirmed, refined.**

**Evidence.**
- Weakley 2021 (full text): 44 studies; "linear transducers which have greater accuracy and
  reliability compared to other forms of device"; most studies lacked a gold-standard criterion.
- Greig 2023 (full text), main estimates:
  - SEE% 9.8 (7.4 to 12.2).
  - Systematic overestimate 4.5 kg (1.5 to 7.4), or 3.7% of 1RM (0.5 to 6.9).
  - Bench SEE 8.5 kg (5.4 to 11.6).
- Greig 2023, findings the notes left out:
  - **The squat was worse:** SEE 18.6 kg (7.5 to 29.8), SEE% 12.3, rated "poor".
  - Deadlift SEE 13.3 kg (SEE% 8).
  - **The relative-strength slope (+0.98 kg per 0.1 1RM/BM) was estimated for the bench only.**
- Claassen 2026 (full text): 1RM prediction validity ICC 0.91 (0.72 to 0.98; k = 9). Confirmed.
- Huang 2026 (now full text):
  - **Both the individual and the sample-average optimal MVT** avoided overestimation (raw error
    ≤ 2.20 kg); the notes mention only the individual MVT.
  - Absolute error 4.5-8.3% vs 8.0-12.4% for other MVTs.
  - The authors propose a unified 0.37 m/s.
  - Limits of agreement were wide for every method.

**Corrected wording.** "Linear position transducers appear the most accurate and reliable velocity
devices, though most validations lack a gold-standard criterion. Load-velocity 1RM prediction has a
standard error of about 10% of 1RM (worse for the squat, ~12%). It systematically overestimates by
about 4.5 kg (3.7%). In the bench press the error grows with relative strength. It is suitable for
tracking trends, not for replacing a 1RM test (promising)."

### 14. VBT vs percentage-based training

**Verdict: confirmed.**

**Evidence.**
- Wang 2026: the record shows full-text reading by the chapter 4 verifier, so the notes' "Abs" label
  is out of date. Strength SMD 0.21 (−0.01 to 0.43), p = 0.064; jump 0.27; COD 0.45.
- Orange 2022 (chapter 4 check): 4 RCTs; strength SMD 0.06 (−0.51 to 0.63).
- Jukic 2023 (full-text abstract): 19 longitudinal studies; VL did not affect strength; hypertrophy
  b = 0.006; CMJ b = −0.040.
- Held 2022: P-score rankings. Its record grade is speculative.

**Problems.**
- The Wang CI does not exclude a small strength advantage, so "similar" should read "similar, small
  advantage not excluded".
- Held's ranking should not be cited as evidence of superiority.

**Corrected wording.** "VBT gives strength gains similar to percentage-based training. A small
advantage is not excluded (SMD 0.21, −0.01 to 0.43). It has small advantages for jumping and change of
direction (promising)."

### 15. AI programmes, wearables and HRV

**Verdict: corrected (HRV part). The AI part is confirmed.**

**Evidence.**
- Havers 2025 (full text): Fleiss' κ −0.007, −0.028, 0.001 (strength) and −0.006, −0.015, −0.051
  (hypertrophy), all p > 0.05.
- Genc 2025 (full text): mean scores 2.367 / 3.612 / 4.143 from seven raters (Friedman test, then
  Wilcoxon, all p = .018).
- Washif and Dergaa: descriptions confirmed.
- Oberhofer 2021 (full text): 30 recreationally trained athletes; 88.4% of 363 sets recognised;
  8.9% of 1RM predictions succeeded.
- Düking 2021 (abstract): endurance only. Numbers confirmed.

**Refutation attempts.**
- **HRV-guided resistance training has been tested in two small RCTs, both null:**
  - De Oliveira 2019: 20 untrained young men; 1RM +30% vs +42%, CSA +15.7% vs +15.8%, no group
    differences.
  - Bittencourt 2024: 21 older women; no group × time interactions.
  - New records were added for both. The notes' "no controlled evidence for HRV-guided resistance
    training was found" is therefore wrong.
- AI coaching: web searches (standard and extended) found no RCT of AI-generated programmes on
  strength or hypertrophy outcomes. A secondary source mentions a trainer-vs-AI comparison that could
  not be traced to a primary paper.

**Corrected wording.** "Programmes generated by large language models are rated as moderate in
quality. Ratings improve with newer versions, but the programmes stay generic and under-individualised.
Expert raters barely agree (κ ≈ 0), and no outcome trial of AI coaching exists (speculative). Two small
RCTs of HRV-guided recovery between resistance sessions (untrained young men; older women) found no
benefit. There are no controlled trials in strength-trained people, and none of commercial readiness
scores (speculative)."

---

## Spot checks (numbers not in the claim list)

| # | Number in notes | Source checked | Result |
|---|---|---|---|
| 1 | Ahtiainen: size +4.8 ± 6.1% (−11 to 30), strength +21.1 ± 11.5% (−8 to 60), 29%/7% low responders | PubMed abstract | **Confirmed.** "n = 287 trained, 72 controls" is the notes' reading of the ambiguous "n = 287 with 72 controls". Flagged in the record. |
| 2 | Grgic 2022 detraining d −0.83 (−1.30 to −0.36); 12-24 wk −0.60; 31-52 wk −1.11 | PubMed abstract | **Confirmed.** Six studies; the outcome is muscle size only. "Gains are lost" should say "muscle size gains are lost". |
| 3 | Nuzzo 2024: reps-to-failure little moderated by sex, 269 studies | PubMed abstract | **Confirmed.** 269 studies; study groups 66% male. |
| 4 | Lesinski 2016: SMDwm 0.8-1.09 strength/jump, 0.58-0.75 sprint/agility, > 23 weeks best | PubMed abstract | **Confirmed.** 43 studies. |
| 5 | Swinton 2024: sex did not improve prediction of "strength or hypertrophy" | Europe PMC full text | **Corrected.** No hypertrophy outcomes (see claim 7). |
| 6 | Rantila biceps curl r = 0.393 | Full text | **Inconsistent in source.** 0.393 in the abstract, 0.383 in the Results. Cite "≈ 0.39, n.s." |
| 7 | Greig bench SEE 8.5 kg; relative-strength slope | Full text | **Confirmed.** The slope is bench-only. |
| 8 | Churchward-Venne lean mass +0.9 kg (−3.3 to +5.4) | PubMed abstract | **Confirmed.** |

---

## Wider concerns about the notes

1. **The notes count responders while saying responder counts are biased.** RQ1.1 establishes that
   responder counts are biased (Atkinson 2019). RQ1.4, RQ3 and the "non-responders" row of the
   disagreements table then rely on MDC and 2 × TE counts (Rantila, Lixandrão, Ahtiainen,
   Churchward-Venne). The chapter should present all such proportions as approximate and
   threshold-dependent.
2. **Attribution drift from the 2026 conference summary.** Three statements are attributed to Roberts
   2026 more strongly than the source makes them:
   - "Do not weigh genetic tests" (the source says "undue weight").
   - "AR content did not separate responders" (the source says sex-hormone receptor content and DNA
     binding, in Roberts/Libardi data).
   - The 11-SNP score as "overfit" (the source cites it approvingly).
   The writer should treat Roberts 2026 as a conference summary dominated by its authors' own
   laboratories and quote it exactly.
3. **Read-level labels in the notes are stale.**
   - D'Souza 2026 and Huang 2026 are open access and are now full text.
   - Borde 2015 is now full text.
   - Wang 2026 was already full text (chapter 4 verification), yet the notes still label it
     "Abs".
   - Section 2.6/Gap 11's list of abstract-only items should be updated.
4. **Population framing.**
   - Nearly every result in RQ1-RQ3 comes from untrained or older participants. Munteanu 2026
     (trained women), Damas 2019 (trained men), Morton 2018 (trained men), Robinson 2025
     (recreationally trained) and the Refalo trained subgroup are the exceptions.
   - The chapter should keep the notes' opening warning visible in every section, not only in the
     introduction.
5. **Missing contrary evidence.** The notes did not cite Niering 2024 (menstrual phase and strength),
   Morton 2018 / Bergamasco 2024 (androgen receptor), or the two HRV-guided RT trials. Each now has
   a record.
6. **Lixandrão 2024 should be the counterweight in claim 3.** It is the main evidence for a
   person-by-volume interaction, but the notes use it only in the non-responder section.
7. **Volume-load analyses in D'Souza 2026.** If the zero-volume control legs were included, the
   reported R² values mostly reflect training vs no training. The chapter should not cite them as
   dose-response evidence without that caveat.
