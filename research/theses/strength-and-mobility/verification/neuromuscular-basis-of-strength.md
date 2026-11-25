# Verification: the neuromuscular basis of strength (Chapter 2)

Independent verification of `notes/neuromuscular-basis-of-strength.md`, done 2026-11-24 by the
verification pass. The verifier did not do the original research. Each load-bearing claim was
checked against the primary source (full text where open access allowed, otherwise the PubMed
abstract). Newer meta-analyses, replications and critiques were searched for to try to refute it.

**What was read.**

- Full text (Europe PMC or PubMed Central XML): elgueta-cancino-2022, maden-wilkinson-2020,
  balshaw-2022, skarabot-2024, balshaw-2026, marques-2025, jenkins-2017, saeterbakken-2025,
  lopez-2021-load (Table 2), hammert-2026-nonspecific-strength (abstract and study table),
  casolo-2026, altheyab-2026 and tanel-2025.
- Abstract only (PubMed): everything else cited below.
- Not reached: the del-vecchio-2019 full text. The PMC web page is behind a browser check, and the
  publisher does not allow XML download. Its MVF and recruitment-threshold numbers therefore remain
  at the researcher's own full-text reading and were not independently verified.

**Evidence records.** 50 records were updated in `/evidence/sources/`. In each, the `checked`
field is set (2026-11-24, verification pass), numbers are corrected where wrong, and `read_level`
is set to what the verifier actually read. Records where another chapter had already documented a
full-text check keep that read level, and the note says so. Two new records were added for newer
meta-analyses that bear on claim 3: `gomez-feria-2023` and `li-2026-corticospinal`.

## Summary

| # | Claim (short) | Verdict | Grade after check |
|---|---|---|---|
| 1 | Early neural adaptation: motor-unit (MU) rate coding and recruitment | corrected | promising |
| 2 | Pooled MU discharge-rate meta-analysis is weak | corrected | contested |
| 3 | Reduced intracortical inhibition is the most reproducible TMS change | corrected | **contested** (was promising) |
| 4 | Reticulospinal up-regulation in primates; human evidence indirect | corrected | speculative |
| 5 | Cross-education, about 12%, no contralateral hypertrophy | corrected | established (phenomenon); low certainty (size) |
| 6 | Trained people's higher EMG reflects muscle size | confirmed (minor wording) | promising |
| 7 | Muscle size is the main between-person determinant of strength | corrected | promising |
| 8 | Within-person evidence on growth and gains is contested | confirmed | contested |
| 9 | Ultrasound thickness cannot track individual MRI growth | corrected | promising |
| 10 | Whether added muscle adds 1RM in trained lifters is unresolved | confirmed | contested |
| 11 | Strength is task-specific | confirmed | established |
| 12 | Heavy loads beat light loads for 1RM, partly through practice | corrected | established (1RM effect); **speculative** (VA mechanism) |
| 13 | Strength and hypertrophy have different dose-response curves | confirmed (minor wording) | promising |
| 14 | Long-term training makes bigger but relatively slower muscle | corrected | promising (cross-sectional) |
| 15 | Training age caps gains | corrected | promising |

Overall: no claim is refuted outright. Two numerical errors matter:

- **Claim 2.** The meta-analysis pooled 4 studies, not 7, and the pooled estimate is a moderate
  *positive* SMD (0.70) that did not reach significance.
- **Claim 9.** Ultrasound thickness was measured at 11 sites, not a single site.

Three claims need their wording or grade changed:

- **Claim 3.** Newer meta-analyses contradict the SICI conclusion.
- **Claim 12.** The voluntary-activation mechanism rests on one 26-person trial.
- **Claim 14.** The causal wording is not supported by cross-sectional data.

Several claim-level read levels overstate what was read (see Wider concerns).

---

## Claim 1. Early strength gains run ahead of muscle growth through neural adaptation

**Verdict: corrected.**

**Evidence.**

- del-vecchio-2019 (abstract only for the verifier).
  - Confirmed: 14 trained vs 14 control men, 4 weeks of isometric dorsiflexion training, discharge
    rate +3.3 +/- 2.5 pps at the plateau (abstract gives P < 0.001), lower normalised recruitment
    thresholds (P < 0.05), and unchanged discharge rate at recruitment and derecruitment.
  - Not verifiable here: MVF 289 to 329 N and relative threshold 26 to 21 %MVF are not in the
    abstract, and the full text could not be reached.
  - elgueta-cancino-2022 extracted 13 trained vs 12 controls for discharge rate, and casolo-2026
    reused 12 young trainees, so the analysed n is below 28 for some outcomes.
- **"Replications" overstates independence.**
  - del-vecchio-2026 (abstract): 13 people, the same lab, the identical 4-week dorsiflexor
    protocol and the same ~14% MVF gain. It is very probably a reanalysis of (a subset of) the 2019
    cohort, not a second cohort. This could not be confirmed without the full text.
  - casolo-2020 (MVF +14.1%, 12 vs 12) is probably the same cohort again.
  - casolo-2026 (full text) is in **older adults** (13 trained, about 71 y). It found *no*
    recruitment-threshold change and adaptations that were "qualitatively similar but attenuated"
    compared with the young.
- **PICs (persistent inward currents) and force.** In casolo-2026 the change in delta-F correlated
  with the *plateau discharge-rate* change (rrm = 0.61, P = 0.021; not at recruitment, rrm = 0.41,
  P = 0.148). Discharge-rate change in turn correlated with MVF gain (rrm = 0.54-0.57). No direct
  delta-F vs force correlation is reported, and the delta-F rise was small to moderate (d = 0.43).
  "PICs tracking force gains" is a two-step inference.
- All of this is untrained or older people, tibialis anterior, isometric, submaximal contractions.

**Corrected wording.** In untrained young men, 4 weeks of isometric dorsiflexion training raised
tibialis anterior motor-unit discharge rate by about 3 pps and lowered relative recruitment
thresholds [@del-vecchio-2019]. A reanalysis from the same laboratory, probably of the same cohort,
reported discharge rate about +11% [@del-vecchio-2026]. In older adults the same protocol raised
discharge rate by 8-11% without changing thresholds. There, estimated PICs rose modestly and tracked
the discharge-rate increase, which in turn tracked the force gain [@casolo-2026]. Read levels:
del-vecchio-2019 abstract (MVF and threshold numbers from the researcher's full-text reading,
unverified), del-vecchio-2026 abstract, casolo-2026 full text. Grade **promising** for the direction
in untrained single-muscle isometric models. There is no independent replication outside one
laboratory group.

## Claim 2. Pooled meta-analytic evidence on MU discharge-rate change is weak

**Verdict: corrected.**

**Evidence (elgueta-cancino-2022, full text).**

- Seven trials (167 men) were included in the review, but the discharge-rate meta-analysis pooled
  **four** studies with **82** participants: Rich and Cafarelli 2000, Pucci 2006, Vila-Cha 2010
  and del-vecchio-2019.
- The pooled **SMD was 0.70 in favour of training**, which the authors call moderate, but it was
  not significant. The P value is **0.38 in the Results and 0.43 in the abstract and Discussion**;
  the paper is internally inconsistent.
- I2 = 91%. GRADE: very low for discharge rate and for recruitment threshold. All participants
  were men.
- The search ran to June 2021, so the review does predate most HD-sEMG tracking studies. It
  includes del-vecchio-2019 itself.
- No newer meta-analysis of MU firing properties after resistance training was found (PubMed
  search 2022-2026, plus a web search).

**Corrected wording.** The only meta-analysis pooled four small trials (82 men). It found a moderate
but non-significant increase in discharge rate (SMD 0.70; P = 0.38 to 0.43 depending on where it is
reported in the paper; I2 = 91%), with very low GRADE certainty. This is an imprecise estimate, not
evidence that discharge rate does not change. It predates most longitudinal HD-sEMG tracking
studies [@elgueta-cancino-2022]. Grade **contested**; read level full-text.

## Claim 3. Reduced intracortical inhibition is the most reproducible central change

**Verdict: corrected (grade promising to contested).**

**Evidence.** Every number in the claim matches its abstract:

- kidgell-2017: SICI SMD -1.00 (-1.84 to -0.17); silent period -0.66 (-1.00 to -0.32);
  corticospinal excitability 0.27 (0.00 to 0.54); motor threshold unchanged.
- siddique-2020: active MEP 0.55 (0.27 to 0.84); resting MEP 0.49 (-0.68 to 1.66); silent period
  0.65 (0.29 to 1.01); active SICI 0.68 (0.14 to 1.23). Decreases are coded positive.
  Resting SICI did *not* change (0.26, -0.29 to 0.81).
- nuzzo-2017: CMEPs unchanged.

But the interpretation does not survive the newer literature:

- **gomez-feria-2023** (Neurosci Biobehav Rev, multivariate meta-analysis, abstract) found **no
  significant effect on SICI**. It found a shorter silent period with every training modality, but
  that change did not predict strength. Corticospinal excitability rose after metronome-paced
  training and correlated with strength gain.
- **li-2026-corticospinal** (Front Physiol, 11 RCTs, 244 adults, abstract) found corticospinal
  excitability **increased**: SMD 0.59 (0.10 to 1.08), I2 = 69%.
- kidgell-2017 and siddique-2020 come from the same research group with overlapping primary
  studies, so they are not two independent confirmations.
- siddique-2026 found corticospinal excitability *decreased* in young adults after 2 weeks.
- nuzzo-2017 had a training group of only 10 people (7 women), and its CMEPs were recorded only in
  resting biceps. "Corticomotoneuronal transmission is unchanged" holds only for one small study
  at rest.

**Corrected wording.** TMS meta-analyses, mostly in untrained adults, agree that the cortical
silent period shortens after strength training (SMD about 0.65) [@kidgell-2017; @siddique-2020;
@gomez-feria-2023]. They disagree on SICI: reduced in two overlapping meta-analyses from one group
(SMD -1.00; active SICI 0.68) but not significant in a 2023 multivariate meta-analysis
[@gomez-feria-2023]. They also disagree on corticospinal excitability: borderline (SMD 0.27), raised
only during contraction (0.55), or raised overall (0.59) [@kidgell-2017; @siddique-2020;
@li-2026-corticospinal]. One small study found no change in cervicomedullary responses at rest
[@nuzzo-2017]. Grade **contested** for the site of change; **promising** only for a shorter silent
period. Read level abstract.

## Claim 4. Reticulospinal up-regulation in primates; human evidence indirect

**Verdict: corrected.**

**Evidence.**

- **glover-2020 (abstract; full text downloaded, not fully read).** In 2 macaques, responses to
  **M1 stimulation and to reticulospinal stimulation both increased**. Responses to direct
  corticospinal-tract stimulation did not. Spinal input-output gain increased for reticulospinal
  but not corticospinal inputs. The authors conclude there were adaptations "in the RST, as well as
  intracortical circuits within M1". "Reticulospinal but not corticospinal" is therefore true only
  for direct CST stimulation; the cortex did change.
- **glover-2022** is a force-coding study, not a training study.
- **tanel-2025 (full text).** Numbers confirmed, but the abstract and Results disagree on two P
  values. The Results give MEP area at 180% aMT P = 0.020 and the high-intensity AURC P = 0.048;
  the abstract (and the original record) swaps them. There was **no main group effect on reaction
  time** (P = 0.073). Only the 80 dB cue was faster in trained athletes (P = 0.016), and that
  produces the reticulospinal-gain difference (P = 0.003).
- **siddique-2026** (2 weeks, abstract; no control group described) and **akalu-2026** (single
  session, untrained) are indirect and short.
- The claim-level read_level "full-text" is wrong: the primate sources were read at abstract level.

**Corrected wording.** In two macaques, 8-9 weeks of weighted-pull training increased muscle
responses to motor-cortex and reticulospinal stimulation but not to direct corticospinal-tract
stimulation. Spinal gain rose for reticulospinal inputs only [@glover-2020]. Human evidence is
indirect, cross-sectional or acute. Long-term trained athletes benefit *less* from a startle cue,
mainly because they react faster to a quiet cue [@tanel-2025]. The direction of StartReact
differences can be read either way. Grade **speculative**. Read level abstract (primates); full text
for tanel-2025.

## Claim 5. Cross-education is consistent

**Verdict: corrected.**

**Evidence.**

- manca-2017 (abstract): +11.9% (9.1 to 14.8); eccentric 17.7%, isotonic-dynamic 15.9%,
  concentric 11.3%, isometric 8.2%; high risk of bias. Contraction types were not formally compared
  with one another.
- altheyab-2026 (full text):
  - 1RM SMD 0.59 (0.22 to 0.97), very low certainty, from only 6 studies.
  - MVC SMD 0.55 (0.16 to 0.94), low certainty.
  - In subgroups, only eccentric training significantly raised isometric torque (0.37 vs concentric
    0.33, -0.09 to 0.74). This shows a CI crossing zero, not a demonstrated difference.
  - Lower-limb muscle thickness SMD 0.01 (-0.44 to 0.46), 3 studies; pennation unchanged.
  - Concentric peak torque is 0.62 (0.38 to 0.86) in the Results vs 0.61 (0.39 to 0.84) in the
    abstract.
- hernando-garijo-2026 (abstract): MVIC 0.42, 1RM 0.36, muscle thickness 0.14 (-0.23 to 0.51),
  GRADE low to very low. "No hypertrophy" means none was detected; the CIs do not exclude a
  moderate effect.
- rutherford-1986 found no significant contralateral change after unilateral isometric training.
  Not every trial shows the effect.
- Claim-level read level should be mixed: manca-2017 and hernando-garijo-2026 are abstract only.

**Corrected wording.** Unilateral training raises strength in the untrained contralateral limb by
about 12% on average (SMD about 0.4-0.6 vs control), roughly half the trained-limb gain. No
contralateral change in muscle thickness was detected (SMD 0.01 lower limb, 0.14 upper limb, CIs up
to about 0.5) [@manca-2017; @altheyab-2026; @hernando-garijo-2026]. Eccentric training gives the
largest point estimates, but differences between contraction types have not been formally tested.
Grade **established** that cross-education occurs. Certainty about its size is low to very low.
Read levels: altheyab-2026 full text; manca-2017 and hernando-garijo-2026 abstract.

## Claim 6. Higher surface EMG in trained people largely reflects muscle size

**Verdict: confirmed, with wording qualifications.**

**Evidence.**

- skarabot-2021-emg (abstract): MVT +66-71%, size +54-56%, Mmax +29-60%. After Mmax normalisation
  there was no group difference for any muscle (P >= 0.652). However, **absolute EMG was higher
  only for the knee extensors** (P < 0.001); elbow-flexor EMG did not differ even before
  normalisation (P = 0.195). The authors say EMG "might be confounded" by morphology.
- casolo-2021 (abstract): identical recruitment and discharge at the same relative force, but only
  at **submaximal** forces (15-70% MViF).
- balshaw-2022 (full text): normalised explosive EMG did not differ (ES 0.03 at 0-50 ms).
- The exception that should travel with this claim: skarabot-2024 (full text) found higher initial
  discharge rates in rapid contractions in the same kind of trained men.
- All four studies come from overlapping Loughborough cohorts.

**Corrected wording.** In long-term trained men, higher absolute knee-extensor EMG disappears when
EMG is normalised to Mmax. Elbow-flexor EMG did not differ in the first place [@skarabot-2021-emg].
At the same relative submaximal force, their biceps motor units behave like untrained ones
[@casolo-2021]. The one documented difference is higher initial discharge rates in rapid
contractions [@skarabot-2024]. Grade **promising**; read level abstract (full text for
skarabot-2024 and balshaw-2022).

## Claim 7. Between people, muscle size is the main determinant of strength

**Verdict: corrected.**

**Evidence.**

- balshaw-2021 (abstract): in 52 recreationally active men, MRI volume r = 0.773 (59.8% of
  variance); effective PCSA r = 0.685, ACSAmax r = 0.697. Confirmed.
- maden-wilkinson-2020 (full text): MVT +60%, volume +56%, PCSA +41%, fascicle length +11%,
  specific tension +9% (abstract; **+8% in the Discussion**), moment arm +4%. Confirmed.
- **R2 = 0.81 is not within trained men.** It comes from a stepwise regression on the *pooled*
  cohort (16 trained + 52 untrained, n = 68; r = 0.90). The two-group spread inflates it. Within
  one population the comparable figure is about 0.60 (balshaw-2021).
- The 52 untrained men in maden-wilkinson-2020 are very probably the same 52 men as in
  balshaw-2021, so the two are not independent.
- The notes' section 2.2 heading grades this "established" while claim 7 says "promising". Use
  one grade.

**Corrected wording.** Among 52 recreationally active men, MRI quadriceps volume explained about 60%
of the variance in isometric knee-extension strength, more than architecture-based PCSA
[@balshaw-2021]. Long-term trained men were 60% stronger, with 56% larger quadriceps volume, against
only +8-9% specific tension and +4% moment arm. Across trained and untrained men pooled, volume alone
explained 81% of strength variance [@maden-wilkinson-2020]. Grade **promising** (cross-sectional,
men, isometric, one laboratory). Read level: maden-wilkinson-2020 full text, balshaw-2021 abstract.

## Claim 8. Within-person evidence on growth and individual gains is contested

**Verdict: confirmed.**

**Evidence.**

- marques-2025 (full text): rrm 0.92 (iMVT) and 0.89 (1RM); between-participant r 0.60 and 0.35;
  standardised beta 0.88-0.94 vs 0.13-0.17. All confirmed.
- **The researcher's two-time-point caveat is mathematically correct.**
  - With two time points the rrm equals the uncentred correlation of the change scores.
  - The verifier computed it from Table 1 (volume +12.7 +/- 7.1%, iMVT +21.6 +/- 9.2%, 1RM
    +28.6 +/- 12.9%). It gives about **0.80 even if the between-person correlation were zero**.
  - With the reported between-person r it gives 0.92 (iMVT) and 0.87 (1RM), reproducing the
    published rrm.
  - Script: the verifier's scratch folder, `scripts/rrm_check.py`.
- balshaw-2017 (abstract): 59.9% explained; agonist EMG 30.6%, volume 18.7%, baseline 10.6%; neural
  drive was the largest single predictor. Confirmed.
- vigotsky-2018 (variance explained 0-24.1%) and kassiano-2026-mediation (10.6% mediated, ACME
  0.74 kg) are confirmed at abstract level.
- marques-2025 uses the same 39 men as balshaw-2026 and was part-funded by the Collagen Research
  Institute.

**Corrected wording.** As written, with two additions. (1) The verifier reproduced the published
rrm from group means and SDs and showed rrm would be about 0.80 even with no between-person
association. (2) Read levels: marques-2025 full text; balshaw-2017, vigotsky-2018 and
kassiano-2026-mediation abstract (the claim says full-text for all four). Grade **contested**.

## Claim 9. Ultrasound muscle thickness underestimates MRI growth and does not track it

**Verdict: corrected.**

**Evidence (balshaw-2026, full text; record upgraded to full-text).**

- 39 untrained men, 15 weeks. The same participants as marques-2025.
- **Ultrasound thickness was measured at 11 sites (2-3 per muscle), not a single site.**
- The group-mean underestimate was significant for the whole quadriceps, VL and VM, but **not
  for VI or RF**. The quadriceps mean offset was -7.3% (vs ACSA) and -7.8% (vs volume), more than
  half the MRI change.
- Individual changes were uncorrelated: whole quadriceps r = -0.152 to -0.015; constituents up to
  r = 0.42, all NS. Pre-training thickness was still moderately related to MRI size (r = 0.455-0.525).
- Part of the percentage underestimate is geometric (thickness scales with radius, area with
  radius squared). The lack of individual correlation is the substantive finding.
- "Biases those trials toward the null" holds for **correlational and mediation** analyses
  (regression dilution). It does not straightforwardly hold for group-mean comparisons, where
  thickness did detect group differences (mattocks-2017, buckner-2021, schoenfeld-2019).
- Generalising from untrained quadriceps to the biceps used in the Buckner and Dankel trials is
  untested.
- buckner-2016 is a commentary; buckner-2021 used biceps thickness.

**Corrected wording.** In 39 untrained men over 15 weeks, quadriceps thickness change measured by
ultrasound at 11 sites underestimated MRI growth by more than half on average (significant for the
whole quadriceps, VL and VM, not for VI or RF). It was uncorrelated with each person's MRI growth
[@balshaw-2026]. Studies that correlate ultrasound-thickness growth with strength gain are therefore
biased toward finding no relation. Group comparisons are less affected. Grade **promising** (one
cohort, untrained men, quadriceps); read level full-text.

## Claim 10. Whether adding muscle causes additional 1RM in trained lifters is unresolved

**Verdict: confirmed.**

**Evidence.**

- mattocks-2017 (abstract): **untrained** adults, 8 weeks. The 1RM difference was -1.1 kg
  (90% CI -4.8 to 2.4) upper body and 1.0 kg (-0.7 to 2.8) lower body.
- buckner-2021 (abstract): trained adults, **within-subject biceps curl**. 1RM gains were
  equivalent; the hypertrophy-then-strength comparison was inconclusive (0.72 kg).
- schoenfeld-2019 (abstract): trained men, 8 weeks. Volume increased hypertrophy at 3 of 4 sites,
  not 1RM.
- appleby-2012: see claim 15.
- taber-2019, loenneke-2019-sportsmed and folland-2021 remain secondary (title and companion
  papers), as recorded.
- Searches for a long-term (6+ month) RCT in trained lifters with MRI volume and a competition-lift
  1RM found none. The closest is an 8-week trained-men trial of a strength block before a
  hypertrophy block (Carvalho et al. 2021, "Is stronger better?"; seen in search results only, not
  verified or recorded).

**Corrected wording.** As written, adding that the short-trial evidence comes from untrained adults
[@mattocks-2017-practice-test] and from one within-subject biceps-curl trial in trained people
[@buckner-2021]. Read level abstract/secondary. Grade **contested**.

## Claim 11. Strength is strongly task-specific

**Verdict: confirmed.**

**Evidence.**

- saeterbakken-2025 (full text): 43 studies, 1,660 participants, 72 interventions. Dynamic SMD
  0.98 (0.91 to 1.06; I2 = 67%) vs isometric 0.42 (0.35 to 0.49; I2 = 4%). Resistance-trained 0.75
  vs 0.29. Meta-regression P >= 0.222. All confirmed.
  - The SMDs are **within-group pre-to-post** effects, and the most common unmet quality criterion
    was the lack of a control group. Absolute SMDs are therefore inflated. The dynamic vs isometric
    contrast, within the same participants, is unaffected.
- heidel-2022 (abstract): free-weight test 0.655, machine test -0.784, neutral 0.128. Confirmed.
- kassiano-2025-unilateral (abstract): 9 studies; bilateral 0.56, unilateral -0.65, hypertrophy
  -0.21 (-3.56 to 3.13). Confirmed.
- rutherford-1986 (abstract): about 200% vs 15-20%. Confirmed.

**Corrected wording.** As written. Note that the SMDs are pre-to-post within-group values. Read
level: saeterbakken-2025 full text, the others abstract. Grade **established**.

## Claim 12. Heavy loads beat light loads for 1RM

**Verdict: corrected (mechanism sentence).**

**Evidence.**

- lopez-2021-load (full-text Table 2): high vs low 0.60 (0.38 to 0.82) / 0.63 best-quality;
  moderate vs low 0.34 / 0.35; high vs moderate 0.26 / 0.28 (P = 0.068). Confirmed.
  - The strength outcome was 1RM (23 studies, 39 comparisons), with funnel-plot asymmetry
    (P = 0.014).
  - 75% of studies were in untrained people; none in highly strength-trained people.
- hammert-2026 (full text): d = 0.322 (SE 0.17; 95% CI -0.08 to 0.72; P = 0.104; PI -0.45 to 1.1);
  10 studies, 245 participants, 9 of 10 untrained. Confirmed. The point estimate is still about half
  the 1RM advantage, and the CI includes a moderate effect: "shrinks and becomes uncertain" is fair.
- **jenkins-2017 (full text).** One trial, 13 per group, untrained men, leg extension.
  - VA during MVIC was higher with 80% than 30% loads at week 6, and maximal EMG rose only with 80%.
  - VA also rose in the 30% group at week 3.
  - The high-load advantage also appeared on its unpractised isometric test (MVIC +28.0% vs +13.4%).
  - One small trial cannot establish "the neural mechanism".
- cumming-2025 (abstract): in 14 **trained** lifters, multi-joint 1RM gains were equal (+21%) with
  low and high loads. Only single-joint 1RM favoured heavy loads. This qualifies the claim for the
  thesis population.

**Corrected wording.** With sets to failure, mostly in untrained adults, high loads beat low loads
for 1RM (SMD 0.60-0.63) while hypertrophy was load-independent [@lopez-2021-load]. On unpractised
isometric or isokinetic tests the advantage roughly halves and becomes uncertain (d = 0.32, 95% CI
-0.08 to 0.72) [@hammert-2026-nonspecific-strength], so part of it is practice with heavy loads. In
one small trial, only heavy training raised voluntary activation and maximal EMG [@jenkins-2017]. In
one small trial of trained lifters, low and high loads gave equal multi-joint 1RM gains
[@cumming-2025]. Grade **established** for the load-specific 1RM effect in mostly untrained people;
**speculative** for voluntary activation as the mechanism. Read level full-text (lopez, hammert,
jenkins), abstract (cumming).

## Claim 13. Strength and hypertrophy have different dose-response curves

**Verdict: confirmed (minor wording).**

**Evidence.**

- pelland-2026 (abstract re-read; the record holds a chapter 3 full-text check):
  - 67 studies, 2,058 participants.
  - Strength shows "considerably more pronounced" diminishing returns to volume.
  - Frequency (volume-adjusted) had a posterior probability of a positive slope of 100% for
    strength, but under 100% for hypertrophy (91.3% per the record): "compatibility with
    negligible effects", not "no effect".
  - The authors call the curves "unique". The practice or skill reading is an interpretation, not
    the authors' stated conclusion.
  - Meta-regression on between-study variation; the authors are coaches (declared).
- dankel-2020 (abstract): 1RM gain about 2.4 kg in both groups; contralateral 1RM rose only with 1RM
  practice. Confirmed.

**Corrected wording.** "...volume-adjusted frequency had a clear positive effect on strength but a
negligible, uncertain effect on hypertrophy [@pelland-2026-volume-frequency]. This pattern is
consistent with, but does not demonstrate, a practice component of 1RM." Grade **promising**. The
pelland-2026 record holds a full-text check from chapter 3; the chapter 2 claim was abstract-level.

## Claim 14. Long-term maximum-strength training produces bigger but relatively slower muscle

**Verdict: corrected.**

**Evidence.**

- balshaw-2022 (full text): absolute explosive torque +41 to +64% (25-150 ms); relative -11 to -16%
  from 100 ms; octet time to peak +8%; absolute EMG at MVT +42% but normalised explosive EMG similar
  (ES 0.03). Confirmed.
- skarabot-2024 (full text): biceps 74 [68, 80] vs 56 [50, 63] pps (d = 0.86); VL 102 vs 76 pps;
  relative RFD no different. Confirmed. Groups were small (13 vs 12 and 11 vs 10).
- **Causal wording.** Both studies are cross-sectional, so "training produces" cannot be shown.
  Selection is possible.
- **Conflicting evidence.** aagaard-2002 (cited in the claim) found the opposite short-term
  direction: after 14 weeks of heavy training, RFD *relative to MVC* increased 15% in the earliest
  phase. Short-term and long-term data disagree, and that should be stated rather than citing
  aagaard-2002 in support.
- All cohorts are Loughborough men.

**Corrected wording.** Long-term maximum-strength-trained men (cross-sectional) have 41-64% higher
absolute explosive torque but 11-16% lower explosive torque relative to their maximum, and slower
evoked contractile properties (octet time to peak +8%) [@balshaw-2022]. They also show higher
initial motor-unit discharge rates in rapid contractions without better relative RFD
[@skarabot-2024]. By contrast, 14 weeks of heavy training in untrained men raised early relative RFD
by 15% [@aagaard-2002]. Grade **promising** (cross-sectional). Read level full-text (balshaw-2022,
skarabot-2024), abstract (aagaard-2002).

## Claim 15. Training age caps gains

**Verdict: corrected.**

**Evidence.**

- ahtiainen-2003 (abstract): 8 strength athletes vs 8 non-athletes. Force +3.9% vs +20.9%; CSA
  -1.8% vs +5.6%. Confirmed.
- hakkinen-1988 (abstract): 9 elite weightlifters, total +2.8% over 2 years. Confirmed.
- appleby-2012 (abstract): 20 professional rugby players; 1RM +6.5-11.5%; gain vs initial strength
  r = -0.57 to -0.71; lower-body gain vs change in lean-mass index r = 0.69-0.88. Confirmed. But the
  **squat gains were not statistically significant** (P = 0.165-0.277); only bench press gains were.
- **rantila-2025 does not belong in this claim.** It studied untrained adults and shows that
  individual responses are reproducible, not that training age limits gains.
- All samples are very small and observational. "Caps" is stronger than the data; "gains are much
  smaller" is supported.

**Corrected wording.** Gains shrink with training age. Over 21 weeks, 8 strength athletes gained
3.9% isometric force and no quadriceps CSA, against 20.9% and 5.6% in non-athletes
[@ahtiainen-2003]. Nine elite weightlifters improved their total by 2.8% over 2 years
[@hakkinen-1988]. In 20 professional rugby players, 2-year 1RM gains were smaller in stronger players
(squat gains not significant), and lower-body gains tracked lean-mass gains (r = 0.69-0.88)
[@appleby-2012]. Drop rantila-2025 from this claim. Grade **promising**; read level abstract.

---

## Spot checks (numbers not in the claim list)

| # | Notes section | Number in notes | Source checked | Result |
|---|---|---|---|---|
| S1 | 1.4 | Aagaard 2002: MVC 291 to 339 N.m; RFD at 30 ms 1,601 to 2,020 N.m/s; EMG +22-143%; rate of EMG rise +41-106% | aagaard-2002 abstract | **Confirmed.** The notes omit relative RFD +15%, which matters for claim 14. |
| S2 | 1.5 | Nuzzo 2017: strength +12.8%, EMG +27.8%, VA +4.7 points, "in 21 adults" | nuzzo-2017 abstract | **Confirmed.** 21 randomised, but only 10 trained (7 women). |
| S3 | 2.1 | Seynnes 2007: CSA +3.5-5.2% at day 20, +6.5-7.4% at day 35; fascicle length +9.9%; pennation +7.7%; MVC +38.9%; n = 7 | seynnes-2007 abstract | **Confirmed** (flywheel training). |
| S4 | 1.8 | Carolan 1992: MVC +32.8%, hamstring coactivation about -20% in the first week, untrained leg -13% | carolan-1992 abstract | **Confirmed.** The untrained-leg change came after 2 weeks, with a 16.2% MVC gain the notes omit. |
| S5 | 1.3 | Casolo 2020: conduction velocity +3.0%, slope +32.6%, 4 weeks | casolo-2020 abstract | **Confirmed.** 12 vs 12 tibialis anterior, MVF +14.1%: very probably the del-vecchio-2019 cohort. |
| S6 | 1.3 | Olmos 2026: mCSA +21% vs +4% with similar 1RM and MVC | olmos-2026 abstract | **Confirmed** (untrained men; H n = 18, H+L n = 17, controls 11). |
| S7 | 1.7 | Tanel 2025: "larger high-intensity MEPs (P = 0.048)" | tanel-2025 full text | **Corrected.** The Results give MEP area at 180% aMT P = 0.020 and AURC 140-180% P = 0.048; the abstract swaps them. Record fixed. |

## Wider concerns about the notes

1. **Non-independent cohorts are presented as convergent evidence.** Three clusters account for
   much of the chapter:
   - *Rome/Imperial tibialis anterior cohort* (del-vecchio-2019, casolo-2020, del-vecchio-2026,
     with casolo-2026 reusing its young group).
   - *Loughborough men* (balshaw-2021, maden-wilkinson-2020, skarabot-2021-emg, balshaw-2022,
     casolo-2021, skarabot-2024).
   - *Loughborough 15-week collagen trial* (marques-2025 and balshaw-2026, the same 39 men).

   Agreement within a cluster is not replication. Section 1.3's "a second cohort" and RQ5's list of
   2020-2026 advances should say so.
2. **Claim-level read levels overstate what was read.**
   - Claims 4 and 5 are labelled full-text, but rest largely on abstract-only sources (glover-2020,
     glover-2022, manca-2017, hernando-garijo-2026).
   - Claim 8 labels kassiano-2026-mediation, balshaw-2017 and vigotsky-2018 full-text; they were
     abstract-level.
   - Claim 14's aagaard-2002 is abstract-level.

   A claim's read level should be the weakest of its load-bearing sources. Per the research
   conventions, only full-text numbers may be stated as verified.
3. **Population mismatch.** Almost all mechanistic evidence (claims 1-3 and 12-13) comes from
   untrained young men in single-joint isometric tasks. The thesis is about trained adults. The
   chapter should state the population in each sentence, not only in Gaps.
4. **The "dedicated 2025-2026 sweep" missed two TMS meta-analyses** (gomez-feria-2023,
   li-2026-corticospinal) that change claim 3. Both are now recorded at abstract level.
5. **Grade inconsistencies.**
   - Section 2.2 is headed "established" but claim 7 says "promising".
   - Claim 5 is "established" while its own sources rate certainty low to very low; split the
     phenomenon from the magnitude.
   - Claim 12's mechanism sentence carried the "established" grade.
6. **Wording in the summary and section 4.3.**
   - The summary sentence "That method a 2026 MRI study shows cannot track individual growth" is
     garbled.
   - Both the summary and section 4.3 say "single-site ultrasound", which is wrong for balshaw-2026.
     Its 11-site measurement makes the finding *stronger*, so correct it in both places.
7. **Internal inconsistencies in primary sources** that the chapter should not paper over:
   - elgueta-cancino-2022 reports P = 0.38 and 0.43 for the same pooled estimate.
   - tanel-2025's abstract swaps two P values.
   - maden-wilkinson-2020 reports specific tension as +9% and +8%.
   - altheyab-2026's concentric SMD differs slightly between the abstract and the Results.
8. **Access limits in this pass.**
   - The PubMed Central website (captcha) and Wiley were unreachable, so del-vecchio-2019 could not
     be read in full.
   - The open-access PDF of gomez-feria-2023 returned a browser check, so its effect sizes were not
     retrieved.
   - Europe PMC's REST service was intermittently slow; NCBI E-utilities served most full texts.
