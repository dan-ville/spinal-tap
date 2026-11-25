# Verification: Chapter 9, "Concurrent training and conditioning"

Independent verification pass, 2026-11-24, of `notes/concurrent-training.md`. Each load-bearing claim
was checked against its primary sources, using the full text where open access allowed. For each
claim I also searched for newer or contradicting evidence. Evidence records in `evidence/sources/`
were updated: `checked` filled (the earlier entry is kept in the notes), `read_level` set to what
this pass read, and wrong numbers fixed.

**What this pass read.**
- Full text:
  - Via Europe PMC: Schumann 2022, Lundberg 2022, Chen 2024, Huiberts 2024 (plus the Springer ESM,
    Fig S3, and main Fig 6, read as images), Petré 2021, Fyfe 2016 (Front Physiol), Petré 2024,
    Lee 2020, Eddens 2018, Gao & Yu 2023, Baar 2014, Fyfe 2018 (Sci Rep), Mandsager 2018,
    Momma 2022, Lundberg 2024, Wong 2020 and Hindle 2019.
  - Via PMC HTML: Coffey & Hawley 2017.
  - Author-accepted PDF: Gomes 2025, J Sports Sci (fisiologiadelejercicio.com).
  - Submitted (peer-review) manuscript PDF: Ferraro-Farro 2026.
- Abstracts (PubMed E-utilities): every other source in the 14 claims, plus Ratamess 2014
  (PMID 24714546), Petré 2018 (PMID 29769816) and the Ferraro-Farro correction notice
  (PMID 41927039).
- Not accessible:
  - Held 2026 umbrella review (paywalled).
  - Apró 2015 (publisher returned 403; the DiVA repository host is outside this session's network).
  - Kikuchi 2026, Murlasits 2018, Wilson 2012 and Sabag 2018 (paywalled).

**Verdict summary**

| # | Claim (short) | Verdict | Grade after check |
|---|---|---|---|
| 1 | No whole-muscle hypertrophy penalty; small fibre penalty | confirmed (scope and fibre wording tightened) | established (short-term, mostly untrained); unknown for trained lifters |
| 2 | No average max-strength penalty in mixed samples | confirmed | promising |
| 3 | Penalties in men and trained; status disputed | corrected (Huiberts status result runs the other way; "trained" definition) | contested |
| 4 | Trained-lifter trial roughly halved gains, mainly late block | corrected (CMJ and neural deficits were in the *first* block; population, design and "only trial") | promising (one small trial) |
| 5 | Explosive strength/RFD most consistently blunted | confirmed, with qualifications | promising |
| 6 | Separating modes is the most consistent mitigation | corrected (recovery window 6 to >24 h; ≥3 h not shown sufficient for power) | promising |
| 7 | Lift first gives slightly better dynamic strength | confirmed, with population caveat | promising (small; mostly older adults and women) |
| 8 | Interference rises with endurance volume/frequency | corrected (best pooled test null; grade too high for typical doses) | promising at extreme doses; speculative within typical doses |
| 9 | Modality effects conflict; SIT spares strength | corrected ("longer HIIT" is short + long HIIT; VO2max SMD is SIT only; jump SMD discrepancy) | contested |
| 10 | AMPK-mTOR switch does not explain human interference | confirmed, with corrections (Apró MPS unverified; human acute data not uniformly null) | promising |
| 11 | Molecular specificity sharpens with training | confirmed (add the opposing basal finding) | speculative |
| 12 | CRF strongly associated with lower mortality | confirmed | established (association) |
| 13 | "Cardio improves between-set recovery" has little support | corrected (contrary Ratamess 2014 data; key null study underpowered) | contested |
| 14 | Strongman/circuit conditioning: comparable acute load, raises VO2max in untrained | corrected (populations and what each study measured) | promising (acute load); speculative (adaptation, comparison) |

Spot checks of numbers outside the 14 claims: 10 checked, 1 error found (Huiberts VO2max CI).

---

## Claim-by-claim

### 1. Whole-muscle hypertrophy not blunted; small fibre-level penalty

**Verdict: confirmed (scope and fibre wording tightened).**

**Evidence.**
- Schumann 2022 (FT): hypertrophy SMD −0.01 (95% CI −0.16 to 0.18), p = 0.919, 15 studies,
  201 CT vs 188 RT participants, Q(14) = 4.687, I² = 0.00%. The CI is printed asymmetrically in the
  paper too. Hypertrophy outcomes were quadriceps CSA, VL thickness or segmental DXA.
- Lundberg 2022 (FT): fibre SMD −0.23 (95% CI −0.46 to −0.00), p = 0.050, 15 studies, 300
  participants, I² = 58.6%. Type I −0.34 (−0.72 to 0.04, p = 0.078). Type II −0.13 (−0.39 to 0.12).
  "Between-group analyses comparing type I and II fiber hypertrophy within each subgroup revealed no
  statistically significant differences". So "mainly in type I" is the authors' reading of point
  estimates, not a tested difference. The type I estimate alone is not significant.
- Chen 2024 (FT): MCSA SMDs −0.08 to 0.15, all CIs spanning zero. Chen's "MCSA" pooled lean body
  mass and lean leg mass with CSA, so it is weaker support than Schumann's imaging-only analysis.
- Held 2026 (ABS): hypertrophy "comparable" CT vs RT. Monserdà-Vilaró 2023 (ABS): whole-muscle
  SMD < 0.03.
- No 2025-2026 meta-analysis contradicting this was found.

**Scope caveat for this thesis.** Every pooled estimate comes from short (mostly ≤ 12 wk) trials in
untrained or recreational people. In the only RT-controlled cohort with strength-qualified men,
CSA rose +17.0 ± 13.0% (R) vs +8.8 ± 9.4% (CT), both significant, with no between-group test
reported in the abstract [gomes-2026-trained-morphology] (ABS). That does not demonstrate
interference, but it is not reassuring either.

**Corrected wording.** "In short-term trials, mostly in untrained or recreationally active people,
concurrent training does not measurably blunt whole-muscle hypertrophy: SMD −0.01 (95% CI −0.16 to
0.18), 15 studies, I² = 0%. Chen's network MA and the 2026 umbrella review agree. At fibre level a
small, borderline penalty appears (SMD −0.23, 95% CI −0.46 to −0.00, p = 0.050). Its point estimate
is larger for type I fibres (−0.34, CI −0.72 to 0.04), but type I and type II did not differ
significantly. Whether this holds for trained lifters is unknown." Grade: established for the
studied populations; not transferable to competitive lifters without the caveat.

### 2. Maximal strength not blunted on average

**Verdict: confirmed.**

**Evidence.**
- Schumann 2022 (FT): SMD −0.06 (95% CI −0.20 to 0.09), p = 0.446, 37 studies, 525 CT vs 442 RT
  participants, I² = 0.00%, no outliers. The outcome hierarchy was leg press > squat > isometric
  knee extension > dynamic knee extension, so this is a lower-body estimate.
- Held 2026 (ABS): strength "comparable".
- Kikuchi 2026 (ABS), HIIT-based CT only: squat 1RM SMD −0.06 (p = 0.63).
- Ferraro-Farro 2026 (manuscript FT), SIT: lower-body strength SMD 0.01.

These two newer meta-analyses also support the claim. Grade promising is appropriate: zero
heterogeneity and many studies, but mean PEDro 4.3/10 and small arms. Non-significance is not
equivalence.

**Corrected wording.** No change needed. Optionally add "lower-body" and "short-term".

### 3. Maximal-strength penalties in men and trained individuals; status disputed

**Verdict: corrected.**

**Evidence.**
- Huiberts 2024 (FT), sex result confirmed: men −0.43 (95% CI −0.64 to −0.22), p < 0.001; women
  0.08 (−0.34 to 0.49), p = 0.72; sex difference p = 0.03; 20 studies. The female estimate rests on
  59 participants (ESM Table S5).
- Petré 2021 (FT), numbers confirmed: trained −0.35 (95% CI −0.59 to −0.11); moderately trained
  −0.20 (−0.42 to 0.02); untrained 0.03 (−0.29 to 0.35); 27 studies. But Petré's "trained" means
  "athletes or individuals who participated in regular structured training programmes for at least
  3 months", resistance or endurance. It does not mean strength-trained. 14/15 trained interventions
  used running and 11/15 used intervals.
- What the claim misses: Huiberts' strength-status analysis did not merely find "no status effect"
  (P = 1.00, 16 studies). Within strata, lower-body strength blunting reached significance in
  *strength-untrained* participants (p = 0.02) and *not* in strength-trained ones (p = 0.14). That
  is the opposite direction to Petré. Huiberts also found no highly strength-trained participants in
  any included study.

**Corrected wording.** "Maximal-strength penalties appear in men (lower body SMD −0.43, 95% CI
−0.64 to −0.22; women 0.08, from few studies) and in Petré's 'trained' subgroup (ES −0.35, 95% CI
−0.59 to −0.11). That subgroup was defined by ≥ 3 months of any structured training and was
dominated by running intervals. Whether training status moderates interference is disputed. Schumann
found no status effect. Huiberts, using a strength-training-status classification, found no
moderation, and the stratum-level penalty was significant only in strength-untrained participants.
No meta-analysis contains highly strength-trained people." Grade: contested (unchanged).

### 4. The trial in trained lifters: gains roughly halved

**Verdict: corrected.**

**Evidence.**
- Gomes 2025, J Sports Sci (FT, accepted PDF), numbers confirmed:
  - Back-squat 1RM +15.6 ± 3.7% (R) vs +8.1 ± 6.5% (CT), group × time F = 21.4, p = 0.003.
  - CMJ +10.5 ± 3.6% vs +5.4 ± 5.6%, F = 11.6, p < 0.001.
  - Baseline squat/BM 1.6 ± 0.2 to 1.7 ± 0.2; n = 10 per group; 11 wk; 3 sessions/wk.
- "Mainly in the later explosive block" is true for 1RM only. 1RM rose similarly in both groups in
  weeks 1-5 (R +9.6 ± 4.1%, CT +7.5 ± 5.9%) and only R kept rising in weeks 6-11. The *CMJ* deficit
  arose in the *first*, maximal-strength block: R improved in both blocks, CT only from mid to post
  (+5.0 ± 4.8%).
- The same cohort's neural paper [gomes-2025-neural-training] (ABS) is cited for "later block", but
  it says the opposite. CT "exhibited an interference effect during the first phase with no
  improvements in RTD or neuromuscular parameters", then improved in the second. Plantar-flexion MVIC
  rose similarly in R and CT.
- The morphology paper [gomes-2026-trained-morphology] (ABS) reports MVIC rising only in R, and peak
  RFD and CMJ positive impulse improving in both. Its authors conclude CT "does not hinder explosive
  performance when resistance training is oriented toward rapid-strength development".
- Design details the claim omits:
  - Participants had to meet endurance criteria as well: running ≥ 6 months, ≥ 2 sessions/wk,
    VO2max ≥ 50 mL/kg/min, plus ≥ 2 years of resistance training. They were hybrid-trained men,
    not lifters with low aerobic fitness.
  - CT was same-session, RT first, 20 min rest, then 30 min running in the moderate-heavy domain.
    That is the configuration the meta-analyses flag as worst.
  - In block 2, maximal-strength work fell to 1 session/wk.
  - The three Gomes papers report one 30-man trial, not three trials.
- "The only trial": it is the only RT-controlled trial found with an explicit squat ≥ 1.5 × BM
  criterion. It is not the only RT-controlled trial in trained athletes. Robineau 2016 had amateur
  rugby players with a strength-only arm (ABS). Petré 2018 (highly trained ice-hockey and rugby
  players, PMID 29769816) had no RT-only arm: squat gains were +12 ± 8% and +14 ± 10% with
  continuous or HIIT conditioning.

**Corrected wording.** "In the one RT-controlled trial with strength-qualified men (≥ 2 y
training, squat ≥ 1.5 × BM, mean 1.6-1.7; also endurance-trained, VO2max ≥ 50), adding 30 min of
running after lifting in the same session (3 ×/wk, 11 wk, n = 10/group) roughly halved gains. Squat
1RM rose +8.1 ± 6.5% vs +15.6 ± 3.7%; CMJ +5.4% vs +10.5%. The 1RM deficit arose in the later
explosive block. The CMJ and neuromuscular (RTD, V-wave) deficits arose in the earlier
maximal-strength block. Later reports from the same cohort show peak RFD and CMJ impulse still
improved with CT." Grade: promising for "same-session CT can halve strength gains in trained men".
It is a single small trial, so it could reasonably be graded speculative for generalisation.

### 5. Explosive strength and RFD most consistently blunted

**Verdict: confirmed, with qualifications.**

**Evidence.**
- Schumann (FT): explosive −0.28 (−0.48 to −0.08), 18 studies, I² 35.8%. The Mikkola study was a
  flagged outlier; without it I² fell to 0%. The paper does not report the pooled SMD without it.
- Huiberts (FT, ESM Fig S3): pooled power −0.35 (95% CI −0.58 to −0.11), 13 studies, I² 0%. This
  number is only in the supplement; the main text gives the sex-specific values.
- Häkkinen 2003 (ABS): 2 + 2 sessions/wk for 21 wk; 1RM +21% vs +22%; QF CSA rose in both; RFD rose
  in S only; early iEMG rose in S only. "Abolished RFD gains" is fair. The sample was middle-aged men
  (~38 y), n ≈ 11 per group.
- Fyfe 2016 (FT): CMJ RFD ES 0.72 in favour of RT vs HIT+RT. Wilson 2012 (ABS): power ES 0.91 vs
  0.55.
- Qualifications from newer data:
  - Kikuchi 2026 (ABS): overall CMJ −0.12 (n.s.) with HIIT-based CT.
  - Ferraro-Farro 2026: no jump penalty with SIT.
  - Chen 2024 (FT): only continuous running significantly reduced explosive strength (−0.37).
  - Gomes 2026 (ABS): peak RFD improved with CT in trained men, only later.
- "Most consistently" holds relative to hypertrophy and max strength, but the effect depends on
  conditioning type and scheduling.

**Corrected wording.** Keep, adding: "The penalty depends on conditioning type (absent with sprint
intervals in two 2026 meta-analyses) and on scheduling. The Häkkinen RFD result comes from a single
trial of 11 middle-aged men per group."

### 6. Separating the modes is the most consistent mitigation

**Verdict: corrected.**

**Evidence.**
- Schumann (FT): same session (≤ 20 min apart) explosive −0.31 (−0.62 to −0.01), p = 0.043;
  separated by ≥ 3 h, not significant. This is a subgroup non-significance, not a demonstrated
  absence of effect. The between-subgroup test was not significant ("Subgroup analyses showed no
  statistical differences (p > 0.05)").
- Petré 2021 (FT): trained same session −0.66 (−1.08 to −0.25) vs > 2 h −0.10 (−0.43 to 0.23).
  Confirmed.
- Lee 2020 (FT) contradicts "≥ 3 h is enough for power": with ~3 h separation, RT+HIIT attenuated
  CMJ displacement (−5.1 ± 4.3%, mean difference ± 90% CI), force and power vs RT.
- Robineau 2016 (ABS): C-0h was inferior for 1RM. C-6h was still inferior to C-24h and STR for
  isokinetic MVC at 180°/s and for VO2peak change. The authors recommend ≥ 6 h.
- Acute recovery:
  - Petré 2024 (FT): −7% peak force, −17% pRFD, −4% jump at 10 min; nothing at 6 h or 24 h after a
    very short HIIT (3 × 8 × 20 s). n = 15 elite women.
  - Sporer 2003 (ABS): leg-press repetitions reduced at 4 h and 8 h, recovered at 24 h.
  - Grammenou 2024 (ABS): isometric mid-thigh-pull peak force was still reduced at 24 h
    (p < 0.001) after both the strength and the HIIT session.

**Corrected wording.** "Separating the two modes is the most consistent mitigation. The
explosive-strength penalty was significant same-session (SMD −0.31) and not significant with ≥ 3 h
between modes, though the subgroups did not differ significantly. In Petré's 'trained' subgroup the
strength penalty was confined to same-session training (ES −0.66 vs −0.10 with > 2 h). A 3-h gap did
not prevent a CMJ penalty in one trial, and 6 h was still inferior to 24 h for some outcomes in rugby
players. After aerobic work, acute losses in force, RFD and repetitions resolved within 6 h after
very short HIIT, by 24 h after cycling, and not fully by 24 h in one IMTP study. Allow ≥ 6 h, and
ideally a separate day, before heavy or explosive lower-body work." Grade: promising (unchanged).

### 7. Lifting first: slightly better lower-body dynamic strength

**Verdict: confirmed, with a population caveat.**

**Evidence.**
- Eddens 2018 (FT): WMD 6.91% (95% CI 1.96 to 11.87), p = 0.006; hypertrophy 1.15% (−1.56 to 3.87);
  static −0.04% (−3.19 to 3.11).
- Murlasits 2018 (ABS): +3.96 kg (0.81 to 7.10); VO2max 0.39 mL/kg/min (−1.03 to 1.81).
- Gao & Yu 2023 (FT): SMD 0.19 (0.02 to 0.37), 19 RCTs, 482 participants. The benefit appeared
  in the elderly (p = 0.039), in women (p = 0.017), with > 8 wk and with 2 ×/wk. There was no order
  effect on VO2max (0.02) or power.
- Held 2026 (ABS): "no significant effects of training sequence". It also calls a strength SMD of
  1.69 with p < 0.001 a "trend", which is internally inconsistent; do not cite that number.
- The young-male subgroups in Gao & Yu do not show a clear order effect. For trained young lifters
  the benefit is unproven.

**Corrected wording.** Add: "The benefit is small and in Gao & Yu concentrated in older adults and
women. The 2026 umbrella review found no significant sequence effect." Grade: promising (small
effect).

### 8. Interference rises with endurance volume and frequency

**Verdict: corrected (grade and wording).**

**Evidence.**
- Hickson 1980 (ABS): 5 d/wk strength + 6 d/wk endurance (≈ 11 sessions), 40 min/day running and
  cycling intervals. Strength plateaued and declined in weeks 9-10. Confirmed.
- Jones 2013 (ABS): men with > 2 y RT, isolated-limb model, 6 wk, 24 men across 4 arms. A 1:1 ratio
  blunted MVC and limb girth; 3:1 did not. Confirmed.
- Wilson 2012 (ABS): frequency r −0.26 to −0.35, duration r −0.29 to −0.75. These are cross-study
  correlations of within-group ES, and Schumann criticises them.
- Häkkinen 2003 (ABS): low frequency spared 1RM and CSA.
- Against: Schumann 2022 (FT) found no frequency moderation for any outcome (> 5 vs < 5 weekly
  sessions). Lundberg 2022 (FT): session count explained 34.6% of type I heterogeneity, but the
  subgroup test was not significant.
- The supporting evidence is one extreme-dose classic, one small isolated-limb trial and confounded
  correlations. The best pooled moderator test is null.

**Corrected wording.** "Very high endurance loads clearly interfere (Hickson: ~11 sessions/wk). A
1:1 vs 3:1 strength:endurance ratio blunted strength in one small isolated-limb trial, and
cross-study correlations point the same way. But the largest meta-analysis found no frequency
moderation within typical doses, and no dose threshold has been defined." Grade: promising for
interference at extreme volumes; speculative for a dose-response within typical (2-3 sessions/wk)
doses. The record read levels are abstract, as stated.

### 9. Modality effects conflict; sprint intervals spare strength

**Verdict: corrected.**

**Evidence.**
- Wilson (ABS): running, not cycling, decremented hypertrophy and strength. Lundberg 2022 (FT):
  running type I −0.81 (−1.26 to −0.36), 3 studies. Both confirmed.
- Chen 2024 (FT): continuous cycling −0.38 (−0.62 to −0.14). Also confirmed: continuous running
  −0.25 (−0.46 to −0.05), HIIT cycling −0.18, HIIT running −0.08. Schumann (FT): no modality effect
  for any outcome once the influential Mikkola study was removed.
- Ferraro-Farro 2026 (submitted-manuscript FT + abstract):
  - VO2max SMD 0.78 (95% CI 0.31 to 1.24), p = 0.001, 9 RCTs, 177 participants (75 physically
    active, 112 non-elite athletes). This is a **sprint-interval-only** estimate. It does not cover
    repeated-sprint training.
  - **Discrepancy:** the manuscript body gives the overall jump effect as SMD 0.27 (95% CI −0.06 to
    0.60), p = 0.11, I² 37.4%. The published abstract says 0.11 (p = 0.11). The p-value fits 0.27.
    A correction was published in April 2026 (PMID 41927039); its content was not visible.
- Kikuchi 2026 (ABS): SIT/RST CMJ 0.14 (p = 0.40). The −0.53 (p = 0.006) estimate is for **short and
  long HIIT pooled**, i.e. all non-sprint HIIT, not "longer HIIT". Q-between 5.82, p = 0.016.

**Corrected wording.** "Modality effects conflict. Running looked worse in Wilson and for type I
fibres in Lundberg (3 studies), while continuous cycling was the most interfering mode for
lower-body strength in Chen's network MA (−0.38) and Schumann found no modality effect. Sprint-
interval and repeated-sprint work did not blunt strength or jumps (Kikuchi: CMJ SMD 0.14).
Sprint-interval work also raised VO2max (Ferraro-Farro: SMD 0.78). Non-sprint HIIT (short and long
intervals pooled) blunted CMJ (SMD −0.53)." Grade: contested (unchanged). The sprint-interval
exemption is promising for "no harm" in non-elite people.

### 10. The AMPK-mTOR switch does not explain human interference

**Verdict: confirmed, with corrections.**

**Evidence.**
- Atherton 2005 (ABS): isolated rat muscle; LFS raised AMPK Thr172 ~2-fold; HFS raised myofibrillar
  synthesis 5.3-fold. The authors named this the "AMPK-PKB switch". Confirmed.
- Apró 2015 (ABS): 8 trained men; AMPK ~+90%; S6K1 activity +55% at 90 min and +110% at 180 min,
  with no difference between trials; MuRF1 rose only with ER. Confirmed. **However**, the abstract
  does not report the fractional synthetic rate result. "Without reducing … protein synthesis"
  cannot be verified at the level read; the full text was blocked.
- Fyfe 2016 signalling (ABS): RE-induced p70S6K/rps6 phosphorylation was not blunted. But mTOR
  Ser2448 was lower at +1 h with MICT+RE, and three growth-related miRNAs fell with HIT+RE. So the
  data are mostly, not uniformly, null.
- Baar 2014 (FT) cites a human study in which ten 6-s sprints 15 min before resistance exercise
  "completely lost" the mTORC1 activation. Human acute data are therefore not uniformly null.
- Conceição 2026 (ABS): n = 19 previously untrained men, 16 wk. MPS, satellite cells, myonuclei and
  type II CSA were preserved; strength gains were smaller with CT (P = 0.016). Confirmed.
- Coffey & Hawley 2017 (now FT): "multiple integrated, rather than isolated, effectors". Fyfe 2014
  (ABS): no molecular interference seen after acute concurrent exercise in humans. Both confirmed.

**Corrected wording.** "In humans, prior interval cycling raised AMPK ~90% without reducing
post-lifting S6K1 activity (8 trained men). Most acute studies find mTORC1 signalling intact, though
some report blunted markers after prior sprints or continuous cycling. Sixteen weeks of
long-interval-HIIT concurrent training in untrained men preserved protein synthesis, satellite cells
and fibre growth while strength gains were smaller." Remove the protein-synthesis attribution to Apró
unless the full text is read. Grade: promising (unchanged). The record's read level remains
abstract.

### 11. Molecular specificity may sharpen with training

**Verdict: confirmed (add the opposing finding).**

**Evidence.**
- Fyfe 2018 (FT): in the final, training-accustomed session, only RT increased TIF-1A and UBF
  phosphorylation. RT p-UBF Ser388 was +125% at +3 h, ES 1.15 (Table 1), and p70S6K1/rps6 signalling
  was larger with RT.
- But basal post-training markers (45S pre-rRNA, 5.8S and 28S rRNA) rose *more* with CT.
- Participants had ≥ 1 y of recreational training; n = 7-8 per group. CT groups also had higher total
  training volume, which the authors note as a confounder.
- Coffey & Hawley 2017 (FT) frame "training history" as hypothesis.

**Corrected wording.** Add: "Basal ribosome-biogenesis markers rose more with concurrent training,
so the net effect on growth is unknown." Grade: speculative (unchanged).

### 12. CRF strongly associated with lower mortality

**Verdict: confirmed.**

**Evidence.**
- Kodama 2009 (ABS): 33 studies, 102,980 participants. Per MET RR 0.87 (0.84-0.90); CHD/CVD 0.85
  (0.82-0.88); low vs high 1.70 (1.51-1.92).
- Mandsager 2018 (FT): 122,007 patients; elite vs low adjusted HR 0.20 (0.16-0.24); no upper limit
  of benefit. The cohort was patients referred for treadmill testing at a tertiary centre.
- Momma 2022 (FT): combined muscle-strengthening and aerobic activity vs none was associated with
  lower all-cause, CVD and cancer mortality.

All three are observational. "Main justification" is an interpretive judgement, which is
reasonable but should be labelled as such.

**Corrected wording.** Add "(observational associations)". Mandsager's population should be named.
Grade: established for the association.

### 13. "Aerobic fitness improves between-set recovery" has little support

**Verdict: corrected.**

**Evidence.**
- Lundberg 2024 (FT): 28 resistance-trained adults (14 + 14); squats 3 × to failure at 70% 1RM with
  90 s rest, and isokinetic knee extension. P 0.312-0.998, R 0.005-0.604. With 14 per sex, a
  correlation of ~0.6 that is not significant reflects low power, not a demonstrated weak relation.
- Contrary evidence not in the notes: Ratamess 2014 (ABS, PMID 24714546). In 17 resistance-trained
  men, VO2max correlated with squat repetitions across 5 sets at 75% 1RM with short rests
  (r = 0.43-0.57) and inversely with 1RM.
- Vondrasek 2026 (ABS): 12 men, an *upper-body* session, 10 min of easy cycling. No change in
  next-day bar velocity, HRV or perceived recovery. This is a narrow test.
- Tomlin 2001 (ABS) and Grammenou 2024 (ABS) are described correctly.

**Corrected wording.** "Whether aerobic fitness improves recovery between sets in strength training
is unresolved. In resistance-trained adults, VO2max was not significantly related to between-set
recovery in one small study (n = 28). Another found it correlated with squat repetitions maintained
across short-rest sets (r = 0.43-0.57). Ten minutes of post-lift cycling did not aid next-day
recovery after an upper-body session. The link is better supported for repeated high-intensity
intermittent efforts." Grade: contested (unchanged).

### 14. Strongman and circuit conditioning

**Verdict: corrected (populations and what was measured).**

**Evidence.**
- Harris 2016 (ABS): 10 healthy men, crossover. Strongman session ≈ duration-matched heavy lifting
  for HR, energy expenditure and lactate. "Comparable to heavy lifting" is confirmed for acute load.
- Muñoz-Martínez 2017 (ABS): resistance circuit training raised VO2max (8 studies, 118 participants)
  and bench 1RM in healthy adults 18-65, mostly untrained.
- Wong 2020 (FT): 29 physically active men new to tyre flipping, light vs heavy tyre, **no
  non-training control** and **no VO2max measure**. Intermittent endurance ES 0.45/0.66.
- So "raise VO2max … in untrained people" holds for circuit training, not for strongman implements.
  Strongman evidence on VO2max is absent.
- Hindle 2019 (FT) and Winwood 2011 (ABS) are described correctly. No head-to-head trial against
  conventional aerobic work in strength athletes was found.

**Corrected wording.** "Strongman-style sessions produce acute heart-rate, energy-expenditure and
lactate responses comparable to heavy lifting (n = 10). Resistance circuit training raises VO2max in
healthy, mostly untrained adults. Tyre-flip training improved intermittent endurance in physically
active novices, in an uncontrolled study without a VO2max measure. None has been tested against
conventional aerobic training in strength athletes." Grade: promising (acute load); speculative
(training adaptation and the comparison).

---

## Spot checks (numbers not in the 14 claims)

| # | Number in notes | Source checked | Result |
|---|---|---|---|
| 1 | Huiberts VO2max blunted in untrained endurance athletes (−0.35), record CI −0.70 to −0.01 | Huiberts Fig 6 (FT) | **Error.** Subtotal −0.35 (95% CI −0.70 to **0.01**), Z = 1.92, p = 0.05, so the CI includes zero. The subgroup difference was p = 0.04. Notes (RQ4 "blunted slightly") and RQ5 item 2 should say "trended lower (not significant)". Record fixed. |
| 2 | Fyfe 2018: RT p-UBF Ser388 +125% at 3 h, ES 1.15 | Table 1 (FT) | Confirmed. |
| 3 | Baar: AMPK back to baseline within ~3 h; mTORC1 ≥ 18 h | Recommendations section (FT) | Confirmed. |
| 4 | Fyfe 2016: lean mass +1.8% (HIT+RT) vs +4.1% (RT); 1RM 38.5/28.7/27.5% | Abstract in FT | Confirmed. |
| 5 | Gomes 2025: RT VO2max −3.2 ± 1.8% | Accepted PDF | Confirmed. |
| 6 | Wong 2020: intermittent endurance ES 0.45-0.66 | FT | Confirmed. |
| 7 | Petré 2021: trained category 14/15 running, 11/15 interval | FT | Confirmed. |
| 8 | Lee 2020: CMJ −5.1 ± 4.3% | FT | Confirmed. The ± is a 90% CI of the mean difference, not an SD; the notes should say so. |
| 9 | Hickson: VO2max ~25% (cycle), ~20% (treadmill) | Abstract | Confirmed. |
| 10 | Mandsager: "no upper limit of benefit" | FT | Confirmed. |

---

## Wider concerns about the notes

1. **Gomes cohort mis-stated in several places.** RQ5 item 4 attributes "CT also blocked
   isometric strength gains and delayed early RFD, yet still allowed jump impulse and CSA gains" to
   `gomes-2025-load-velocity` (FT). Those findings are from `gomes-2026-trained-morphology` (ABS).
   Plantar-flexion MVIC rose similarly in R and CT in `gomes-2025-neural-training`. So "blocked
   isometric strength gains" holds for leg-press MVIC only. The "Periodise emphasis" bullet in RQ4
   ("interference … showed up mostly in the explosive or later block") is wrong for CMJ and neural
   measures. The three papers report one trial and should not be counted as "trials (Gomes
   2025/2026)".
2. **"Only trial in genuinely trained lifters" overreaches.** The participants were hybrid athletes
   (VO2max ≥ 50, running history) with a 1.6 × BM squat. That is intermediate rather than
   competitive strength. Robineau 2016 is a second RT-controlled trial in trained athletes.
3. **Huiberts strength-status result runs against Petré.** The notes' "no status effect" understates
   it (claim 3).
4. **Ferraro-Farro jump SMD.** The abstract (0.11) and the manuscript body (0.27, CI −0.06 to 0.60)
   disagree. The notes repeat 0.11 in RQ1 point 3 and RQ5 item 3.
5. **Kikuchi −0.53** is non-sprint HIIT (short and long pooled). It appears as "long HIIT" or "longer
   HIIT (1-4 min)" in RQ4 and in claim 9.
6. **Held 2026 is cited as agreeing on several points** from the abstract alone. The abstract
   itself contains the inconsistent "trend" with p < 0.001. Until the full text is read, use it only
   for direction ("comparable") and never for its sequence SMDs. The notes already say this; the
   load-bearing claims 1, 2 and 7 should not lean on it.
7. **Apró protein synthesis.** The notes (RQ3) state mixed-muscle protein synthesis "was not
   reduced", tagged ABS, but the abstract does not report it. Either read the full text or drop the
   phrase.
8. **Non-significance read as equivalence.** Several "no penalty" statements rest on non-significant
   subgroups: ≥ 3 h separation, women, trained strength status, SIT. Most trials have n ≤ 10 per arm.
   The notes acknowledge this in Gaps point 10, but the claims themselves do not carry the caveat.
9. **Recovery window.** RQ2 and the synthesis say neuromuscular fatigue recovers "over roughly
   6-24 h". Grammenou 2024 shows IMTP force still down at 24 h, so "6 to > 24 h depending on
   session" is safer.
10. **Ratamess 2014 is missing** from the recovery section and should get an evidence record before
    the chapter states that the aerobic-recovery link "has little support".
11. No 2025-2026 meta-analysis overturning the main pooled findings (claims 1, 2, 5) was found. The
    2026 SIT and HIIT meta-analyses support the claims, apart from the corrections above.
