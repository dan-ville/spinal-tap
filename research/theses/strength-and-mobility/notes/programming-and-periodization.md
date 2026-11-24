# Chapter 4 research notes: Programming, periodization and autoregulation

Researcher notes behind `chapters/04-programming-and-periodization.md`. Searched 2026-11-24 (PubMed
E-utilities, PubMed Central full texts, SportRxiv, publisher and repository pages, web search with a
dedicated 2025-2026 sweep per question). Europe PMC's API was down (HTTP 500/503) during the session and
Springer's site (link.springer.com) was unreachable, so the Springer-only papers (Moesgaard 2022,
Williams 2017, Kataoka 2021/2022, Kiely 2012) stay at abstract level.

Every source has a record in `evidence/sources/<id>.yml`: 72 new records for this chapter, 3 shared
records extended (`halperin-2022-rir-accuracy`, `jukic-2023-velocity-loss`,
`currier-2026-acsm-position-stand`) and 7 chapter 3 records reused (cited_in added).

**Tags.** Each finding carries `[@id]`, a grade (established | promising | contested | speculative |
convention), and the read level of the number: **FT** = full text read, **ABS** = abstract only,
**SEC** = number quoted from another paper. Only FT numbers may be stated as verified.

**Full texts read (16):** Kiely 2018; Afonso 2019; Zhang Z 2026 (LP vs UP); Hickmott 2022; Zhang X 2021;
Huang 2025 NMA; Helms 2018 (RPE vs %1RM); Graham & Cleather 2021 (accepted manuscript); Halperin 2022
(SportRxiv preprint); Jukic 2023 (methods and participants); Currier 2026 ACSM (periodization,
autoregulation and progression rows); Bell 2023 Delphi; Coleman 2024; Pancar 2026; Travis 2020;
Winwood 2026.

**Population caveat that runs through the whole chapter.** Almost every trial here is 6-12 weeks long,
uses young men (often "resistance-trained" with 1-3 years' experience, sometimes college athletes), and
tests 1RM in the trained lifts. Trials in competitive powerlifters or strongman athletes have 8-25
participants. Periodization claims concern months to years, but no trial lasts longer than about 6
months. Treat every model-versus-model statement as short-term and underpowered.

**A definitional point the writer must keep straight.** *Periodization* is the planned sequencing of
training periods across a season or macrocycle. *Programming* is the session-to-session prescription
(sets, reps, load, exercise). Most "periodization" trials actually compare programming schemes over a
single 6-12-week block ([@kataoka-2021-periodization-definition], [@afonso-2020-nonlinear-periodization];
the ACSM 2026 panel concedes the conflation [@currier-2026-acsm-position-stand]). "Linear", "undulating"
and "block" are labels for how load and volume vary within that block.

---

## RQ1. What do meta-analyses show for periodized vs non-periodized training and for model vs model, and how valid is that literature?

### Findings: periodized vs non-periodized

- **Williams et al. 2017** (18 studies, 81 effects, 1988-2015; volume *not* equated): periodized RT
  produced larger 1RM gains than non-periodized RT, **ES 0.43 (95% CI 0.27-0.58)**. Moderators: undulating
  models (beta 0.51), *untrained* status (larger effect), longer studies (beta 0.03 per week) and higher
  frequency [@williams-2017-periodization] (contested, ABS). Two published comments disputed it.
- **Moesgaard et al. 2022** (35 studies; volume *equated* from pre to post): periodized > non-periodized for
  1RM, **ES 0.31 (95% CI 0.04-0.57), P = 0.02**. There was **no difference for hypertrophy**, ES 0.13
  (-0.10 to 0.36) [@moesgaard-2022-periodization] (contested for strength, promising for the null on
  hypertrophy; ABS). Equating volume roughly halves Williams' estimate, which suggests part of the earlier
  "periodization effect" was extra volume.
- **Rhea & Alderman 2004**: overall ES 0.84 (+/- 1.41) favouring periodized programs, but the effect
  attributable to *variation itself*, once volume, frequency and intensity were controlled, was **ES 0.25**
  [@rhea-2004-periodization-ma] (contested, ABS).
- **ACSM 2026 overview of reviews**: for strength, the effect of periodization **"cannot be determined"**
  (reviews point in both directions, QoE 50-75%). For hypertrophy it is judged to have **no effect** (4
  reviews, n = 1414, QoE 63%). The panel concludes that "with appropriate progressive overload,
  periodization is not significantly superior to nonperiodized programs; thus, periodization is less
  important than previously hypothesized" [@currier-2026-acsm-position-stand] (contested, FT).

### Findings: model vs model

- **Linear vs undulating, strength.**
  - Harries 2015 (17 studies, n = 510) found no LP-UP difference for upper- or lower-body strength
    [@harries-2015-linear-undulating] (promising, ABS).
  - Moesgaard 2022 found UP > LP overall, ES 0.31 (0.02-0.61). The advantage held **only in trained
    participants**, ES 0.61 (0.00-1.22), P = 0.05; in untrained participants ES 0.06 (-0.20 to 0.31)
    [@moesgaard-2022-periodization] (contested, ABS).
  - The newest synthesis (Zhang Z 2026; 29 studies, search to July 2025, mixed populations) again finds
    **no difference**: upper-body SMD 0.08 (-0.15 to 0.31), I2 46%; squat SMD 0.08 (-0.10 to 0.26), I2
    20%, with Egger's test suggesting publication bias [@zhang-2026-lp-up] (promising, FT).
  - Net: LP and UP are roughly equivalent for strength. A possible small UP edge in trained lifters
    rests on one subgroup whose CI touches zero.
- **Linear vs undulating, hypertrophy.** No difference: Grgic 2017, d = -0.02 (-0.25 to 0.21), 13
  studies [@grgic-2017-lp-dup-hypertrophy] (promising, ABS); Moesgaard 2022, ES 0.05 (-0.20 to 0.29)
  [@moesgaard-2022-periodization].
- **Classic DUP trial.** Rhea 2002 (n = 20, 12 weeks) found DUP > LP for bench and leg-press 1RM
  [@rhea-2002-dup] (speculative, ABS). It is still widely cited but is small, and the pooled literature
  does not reproduce a reliable DUP advantage.
- **Within-week order.** In powerlifters (n = 18, 6 weeks), a hypertrophy-power-strength order produced
  more volume and larger bench gains than hypertrophy-strength-power [@zourdos-2016-dup-powerlifters]
  (speculative, ABS). **Letting lifters choose the day's session** (flexible DUP) gave the same results
  as fixed DUP: total +36.8 kg vs +40.4 kg, with no difference in motivation [@colquhoun-2017-fdup]
  (promising, ABS).
- **Block periodization.** There is no meta-analysis for strength; Moesgaard could not pool it. Trials
  are small and conflicting:
  - Painter 2012 (track and field, n = 31): similar strength, but block reached it with less volume load
    [@painter-2012-block-dup] (speculative, ABS).
  - Bartolomei 2014 (n = 24, 15 weeks): block possibly better for upper-body strength and power
    [@bartolomei-2014-block] (speculative, ABS).
  - The same group's 2023 trial (n = 22, 10 weeks): *mixed sessions* beat block for bench 1RM (+8.6% vs
    +2%) and muscle thickness, while block beat mixed for jump [@bartolomei-2023-mixed-block]
    (speculative, ABS).
- **Reverse linear.** Not superior to traditional or block periodization: a systematic review of 11
  studies (n = 200, mean PEDro 4.9) [@gonzalez-rave-2022-reverse] (promising, ABS). In trained women, LP
  beat reverse LP for strength [@prestes-2009-reverse] (speculative, ABS).
- **Conjugate / Westside** (rotating max-effort and dynamic-effort days): **no controlled trial or
  meta-analysis was found** in PubMed or the web sweep. It is described in practitioner literature and in
  surveys of accommodating-resistance use (bands and chains: 39-57% of elite British powerlifters,
  38-56% of strongman athletes) [@swinton-2009-powerlifters; @winwood-2011-strongman-practices]
  (convention).

### Validity of the literature

1. **The comparator problem.** Afonso et al. audited the primary studies in both periodized vs
   non-periodized meta-analyses (Rhea & Alderman 2004; Williams 2017; 21 studies):
   - **every study compared periodized with *constant* programs**; none compared it with varied but
     non-periodized programs;
   - **none tested the timing predictions** that periodization makes;
   - **8 of 21 were not about periodization at all** (volume, single vs multiple sets, supervision), and
     one was unpublished [@afonso-2019-periodization-meta] (established, FT).

   The meta-analytic effect is therefore best read as "variation beats monotony", not "a pre-planned
   macrocycle beats flexible planning". Moesgaard's non-periodized arms are of the same constant type
   (inference from its design; full text not read).
2. **Short duration.** Studies run for weeks, while periodization claims concern months. Williams' moderator
   (larger effects in longer studies) is a cross-study association, not evidence.
3. **Test specificity.** 1RM is tested in the trained lift. Periodized and undulating arms usually reach
   heavier, more test-like loads more often or later in the block, so they rehearse the test. Practising
   the test alone matches high-volume training for 1RM [@mattocks-2017-practice-test] (promising, ABS).
4. **Unit-of-analysis and small-study problems.** Multiple effects come from the same participants
   (Williams: 81 effects from 18 studies). Pooled CIs touch zero, and Egger asymmetry appears in the
   newest LP vs UP squat analysis [@zhang-2026-lp-up].
5. **Population.** Mostly untrained or recreationally trained participants. Williams found *larger* effects
   in the untrained, Moesgaard found the UP edge *only* in the trained, and these are not reconciled.

### Mechanisms

- **Why periodization (variation) helps strength but not hypertrophy.** Hypertrophy depends mainly on
  volume of hard sets. Once volume is equated, how load is sequenced leaves the growth stimulus unchanged
  (Moesgaard's null). Moesgaard attributes the strength effect to neurophysiological adaptation
  [@moesgaard-2022-periodization]. The plausible concrete mechanisms are:
  - more exposure to heavy, test-specific loads (skill and neural drive);
  - load progression that keeps pace with rising strength, whereas constant programs drift lighter
    relative to the new 1RM;
  - reduced monotony.

  These mechanisms are about the *content* of training (specificity, relative intensity), not about a
  macrocycle's timing.
- **Why UP might help trained lifters.** Trained lifters have little hypertrophy headroom in 8-12 weeks.
  UP puts a heavy day into every week, giving frequent near-maximal practice. LP concentrates heavy work at
  the end. This is an inference consistent with the test-specificity point; untested.

### Disagreements

- **Proponents** (Stone 2021; Cunanan 2018) define periodization as phasic management of fitness and
  recovery. They argue that periodized training "can produce superior athletic enhancement" and that
  block models suit strength-power athletes [@stone-2021-block-periodization; @cunanan-2018-gas]
  (contested, ABS).
- **Critics** argue the evidence they cite consists of the same short, constant-comparator trials
  [@afonso-2019-periodization-meta; @kataoka-2021-periodization-definition].
- **ACSM 2026** sides with the sceptics on outcomes, but notes that "the ordering of variables ... is
  understudied" [@currier-2026-acsm-position-stand].

### Unknowns

- Is periodized planning better than flexible, unplanned variation of equal volume? This has never been
  tested.
- Effects over a season or longer, in competitive lifters.
- Block and conjugate models for maximal strength.
- Whether the UP-in-trained subgroup effect replicates.

---

## RQ2. What is the conceptual critique of periodization, and how should it change practice?

### The critique

1. **The theoretical foundation is outdated** (Kiely). Periodization theory leans on Selye's general
   adaptation syndrome (GAS) and Cannon's homeostasis. Stress science has since moved on:
   - stress responses are individual and context-specific, and are mediated by cognitive and emotional
     appraisal (Mason showed GAS-type responses dissipate when the psychological component is removed);
   - allostasis replaced fixed set-points.

   Training stress therefore does not translate into a predictable, dose-driven adaptation that can be
   scheduled weeks ahead [@kiely-2018-periodization] (contested, FT). Kiely explains the persistence of
   periodization doctrine as **path dependence** (cultural inheritance) rather than evidence
   [@kiely-2018-periodization] (speculative, FT). He also argues it suits 20th-century central-planning
   models, while large inter-individual variability calls for responsive planning
   [@kiely-2012-periodization] (contested, ABS).
2. **GAS was misapplied** (Buckner et al.). Selye studied responses to toxic doses of noxious agents.
   Extending that to resistance exercise is "loosely based" [@buckner-2017-gas] (contested, ABS).
   Cunanan et al. reply that critics ignore the evolution of Selye's model and that GAS remains a valid
   framework [@cunanan-2018-gas] (contested, ABS). The exchange is an interpretive dispute with no data.
3. **The definition is unworkable** (Kataoka, Buckner et al.). Periodization has many definitions. It
   claims to manage the annual plan, but research studies single blocks. It is conflated with
   programming. It is studied without the sport it should be periodized around. Its superiority
   therefore cannot be tested as defined [@kataoka-2021-periodization-definition] (established, ABS).
4. **The empirical base cannot test the theory** (Afonso). There are constant comparators, no tests of
   timing predictions, and off-topic studies [@afonso-2019-periodization-meta] (established, FT).
   "Nonlinear periodization" is really nonlinear *programming* inside a fixed plan; a genuine nonlinear
   periodization would let the sequence of periods emerge from monitoring
   [@afonso-2020-nonlinear-periodization] (speculative, ABS).
5. **Fatigue may not "accumulate" as the models assume** (Kataoka 2022):
   - peripheral metabolic disturbances resolve;
   - central fatigue has not been shown to build across sessions;
   - prolonged strength loss may be muscle damage rather than "accumulated fatigue".

   The evidence is called "equivocal" [@kataoka-2022-fatigue-accumulation] (contested, ABS). Acute
   neuromuscular fatigue even from sets to failure is largely gone by 48 h
   [@refalo-2023-failure-fatigue] (promising, FT per ch3).

### How practitioners actually think

Coaches have partly absorbed the critique. In an international survey (n = 106), 71% describe their
planning as periodization, but:

- only 33% agree that adaptations occur in fixed timeframes;
- only 37% agree that capacities should be trained in sequence;
- only 10% keep targets fixed [@anyadike-danes-2023-coaches-planning] (convention, ABS).

Asian S&C practitioners mostly use hybrid models and flexible programming, and adjust on athlete feedback
(90%) [@washif-2025-coaches-periodization] (convention, ABS).

### What should change in practice (synthesis; inference unless tagged)

- **Keep what has evidence:**
  - progressive overload, and enough variation to avoid monotony (variation > constant; small ES);
  - heavy, specific practice of the competition lifts;
  - a planned peak before competition (RQ4).
- **Drop what lacks evidence:**
  - fixed multi-month timetables that predict when adaptations will appear;
  - the belief that one named model (linear, DUP, block) is reliably superior;
  - GAS as a justification.
- **Plan in short horizons and adjust.** Use a coarse season plan anchored to competitions. Program in
  2-6-week blocks. Use autoregulation (RQ3) and monitoring to decide progression, deloads and when to
  change emphasis. This is close to what coaches already report doing
  [@anyadike-danes-2023-coaches-planning; @washif-2025-coaches-periodization] and to Afonso's "de facto
  nonlinear periodization".

### Disagreements and unknowns

- Proponents argue that critics conflate the concept with poor implementations, and that block
  periodization's sequencing (accumulation, transmutation, realization) is supported by elite practice
  [@stone-2021-block-periodization].
- Neither side has longitudinal comparative data. **No trial has compared a periodized plan with an
  equally varied, responsive, unplanned approach.** That is the decisive missing experiment.

---

## RQ3. Do autoregulated approaches outperform fixed loading, and how accurate are effort estimates?

### Findings: autoregulated vs fixed (percentage) loading

- **Hickmott 2022** (15 studies; resistance-trained, mostly men; fixed-effect pooling):
  - autoregulated (RPE/RIR or VBT) vs percentage-based load prescription gave similar 1RM gains: **MD
    2.07 kg (95% CI -0.32 to 4.46), p = 0.09, SMD 0.21** [@hickmott-2022-autoregulation] (promising, FT);
  - subjective (RPE/RIR) autoregulation: MD 3.15 kg (-0.14 to 6.45), p = 0.06, SMD 0.30;
  - objective (velocity) autoregulation: MD 0.88 kg (-2.59 to 4.34), SMD 0.10;
  - the subgroup difference was not significant (p = 0.35) (speculative, FT).
- **Zhang X 2021** (athletes; 8 studies, 17 "reports"): autoregulation > fixed loading, **SMD 0.64 (0.43-0.85),
  I2 0%**. Only APRE separated: SMD 0.78 (0.54-1.02). RPE (0.17, -0.33 to 0.67) and VBT (0.43, -0.24 to
  1.10) did not [@zhang-2021-autoregulation] (contested, FT). Validity problems:
  - only 4 of 8 studies were RCTs;
  - the APRE result rests on two non-randomised Mann studies;
  - multiple outcomes from the same people were pooled as independent with a fixed-effect model;
  - there was no blinding.
- **Huang 2025 network meta-analysis** (19 trials, n = 438, ages 10-30):
  - APRE ranked first (squat SUCRA 93%; bench 97%);
  - PBT vs APRE: bench SMD -0.83 (-1.22 to -0.44), squat -0.55 (-0.90 to -0.20)
    [@huang-2025-autoregulation-nma] (contested, FT).

  Its APRE protocols include sets to failure, so the "autoregulation" contrast is confounded with effort
  and volume. It also includes youth participants and has internal count inconsistencies.
- **APRE origin trial:** college footballers, 6 weeks, non-randomised across two preseasons. APRE beat LP
  for bench (+93 N vs -0.4 N) and estimated squat [@mann-2010-apre] (speculative, ABS).
- **Key RCTs in trained lifters:**
  - **Helms 2018** (n = 21 trained men, 8-week DUP): RPE-based vs %1RM loading showed no significant
    differences, but small ES favoured RPE (squat ES 0.50 +/- 0.63 90% CL; total 0.48 +/- 0.68; squat
    +17.1 vs +13.9 kg) [@helms-2018-rpe-percentage] (promising, FT). **The RPE group self-selected heavier
    loads:** bench RPE 7.3 vs 5.8 and relative intensity 84.1% vs 78.7% 1RM (both p < 0.001).
  - **Graham & Cleather 2021** (n = 31 trained men, 12 weeks): RIR-autoregulated squat training beat fixed
    %1RM, front squat **+11.7% vs +8.3%** (p = 0.004) and back squat +10.8% vs +7.1% (p = 0.006)
    [@graham-2021-rir-autoregulation] (promising, FT). Again the AR group trained heavier: average 83.2%
    vs 80.4% 1RM (p < 0.001).
  - **Flexible DUP** = fixed DUP [@colquhoun-2017-fdup].
  - **"Daily max"** single-set RPE training was comparable to periodized training for some lifters and
    worse for others (pilot, n = 10) [@androulakis-korakakis-2018-daily-max] (speculative, ABS).
- **Volume autoregulation with RPE stops.** Back-off sets after a top set until a target RPE is reached
  regulate volume; larger load drops yield more volume (relative volume load 74.6 / 88.4 / 114.4 for 2 /
  4 / 6% drops) [@helms-2018-rpe-volume] (promising, ABS).
- **Narrative SR** (14 studies, n = 356): every autoregulation method increased 1RM; there was no
  superiority test [@larsen-2021-autoregulation] (promising, ABS).

### Findings: velocity-based training (VBT)

- **VBT vs percentage-based training, strength.** The syntheses disagree at the margin but converge on
  "no clear difference":
  - Orange 2022 (4 RCTs, n = 88, GRADE low): SMD 0.06 (-0.51 to 0.63) [@orange-2022-vbt] (promising, ABS);
  - Liao 2021: squat MD 3.03 kg (-3.55 to 9.61) [@liao-2021-vbt] (promising, ABS);
  - Zhang M 2022: SMD 0.26 (0.03-0.49), athletes only 0.35 (0.06-0.64) [@zhang-2022-vbt-percentage]
    (contested, ABS);
  - most recent, Wang 2026 (17 studies, n = 348): strength SMD 0.21 (-0.01 to 0.43), p = 0.064, but jump
    SMD 0.27 (0.03-0.51) and change of direction 0.45 (0.17-0.73) favour VBT
    [@wang-2026-vbt] (promising, ABS);
  - Held 2022 NMA ranks velocity-loss-based methods above generic VBT, %1RM and RIR training, but P-score
    rankings overstate small, imprecise differences [@held-2022-vbt-nma] (speculative, ABS).
- **Velocity-loss (VL) thresholds** within the set; these govern proximity to failure.
  - **Strength is insensitive to VL across 0-40%**:
    - Pareja-Blanco 2020 (n = 64 trained men; VL 0/10/20/40%) found no between-group strength differences
      [@pareja-blanco-2020-velocity-loss] (promising, ABS);
    - Jukic 2023 (19 longitudinal studies): VL "did not influence muscle strength and endurance gains"
      [@jukic-2023-velocity-loss] (promising, FT).
  - Hickmott found a small edge for **<=25% VL**: MD 2.32 kg (0.33-4.31), SMD 0.23
    [@hickmott-2022-autoregulation] (promising, FT).
  - The 2026 bench trial (n = 158 trained men, 12 cells) found **25% VL** gave the largest 1RM gains and
    70-85% 1RM loads were best for both strength and size [@pareja-blanco-2026-intensity-velocity-loss]
    (promising, ABS).
  - **Higher VL increases hypertrophy:**
    - Jukic: b = 0.006 per % VL (0.001-0.012) [@jukic-2023-velocity-loss];
    - Hickmott: >25% vs <=20% MD 0.64 cm2 (0.07-1.20) [@hickmott-2022-autoregulation];
    - Myrholt 2023: a small vastus thickness edge for high VL in strength-trained lifters, with similar
      1RM [@myrholt-2023-velocity-loss] (promising, ABS).
  - **Higher VL harms speed-strength:**
    - jump b = -0.040 (-0.079 to -0.001) [@jukic-2023-velocity-loss];
    - VL20 vs VL40: CMJ +9.5% vs +3.5% with similar 1RM and 40% fewer reps, and VL40 lost type IIX fibres
      [@pareja-blanco-2017-velocity-loss] (promising, ABS);
    - VL40 slowed contraction and lowered early RFD [@pareja-blanco-2020-velocity-loss].
- **Evidence base of the VL literature.** Jukic found 846 pooled participants fall to 735 (656 male)
  once duplicate datasets are removed. The studies come from a few laboratories, mainly Smith-machine
  squat or bench [@jukic-2023-velocity-loss] (established, FT).

### Findings: accuracy of effort estimates (RIR/RPE)

- **Halperin 2022** (12 studies, 262 effects, n = 414):
  - lifters **underpredict** reps to failure by **0.95 reps (95% CI 0.17-1.73)**, but I2 = 97.9%;
  - accuracy is better in sets with **<=12 reps to failure** (beta 0.06 vs 0.47 per rep beyond 12),
    slightly better closer to failure (beta -0.025) and in later sets (beta -0.07);
  - **training status did not matter** (beta -0.006, -0.02 to 0.007);
  - between-person SD was 1.45 reps [@halperin-2022-rir-accuracy] (promising, FT preprint).
- **Within-set calls:**
  - Zourdos 2021 (16-rep squat sets at 70%): error 2.05 reps at "RPE 9", 3.65 at "RPE 7" and 5.15 at
    "RPE 5"; reps per set, not training age, predicted error [@zourdos-2021-rir-accuracy] (promising, ABS);
  - Refalo 2024 (bench, 75% 1RM, trained men and women): absolute error **0.65 +/- 0.78 reps** for 1- and
    3-RIR calls, with no effect of sex, experience or strength [@refalo-2024-rir-accuracy-bench]
    (promising, ABS);
  - Holmes 2026 (n = 32): "2 RIR" and "Borg RPE 8" were equally accurate (MD -0.03 and 0.16 reps)
    [@holmes-2026-rir-rpe-accuracy] (promising, ABS).
- **Experience.** Steele 2017 (n = 141) found underprediction with a *trend* toward better accuracy with
  experience (SEM 2.6-3.4 reps) [@steele-2017-rir-experience] (promising, ABS). This conflicts with
  Halperin's null for training status.
- **Coaches watching lifters.** Their absolute errors were 4.8, 2.0 and 1.2 reps at 33%, 66% and 90% of
  the set. Experience barely helped (-0.02 reps per year); heavier loads helped
  [@emanuel-2022-coaches-rir] (promising, ABS).
- **Scale validity.** RIR-based RPE correlates strongly with bar velocity (r = -0.88 in experienced
  squatters) [@zourdos-2016-rpe-scale] (established, ABS). Fixed %1RM prescriptions put individuals at
  widely different RIR [@pelland-2022-proximity-methods] (established, ABS per ch3).

### Mechanisms

- **Why autoregulation sometimes wins: dose, not magic.** In both trained-lifter RCTs that favoured it,
  the autoregulated group lifted heavier loads (Helms bench 84% vs 79% 1RM; Graham 83% vs 80%). Two
  mechanisms produce this:
  - **load-tracking:** percentages of a *pre-test* 1RM become relatively lighter as strength rises over
    8-12 weeks, so fixed loading under-doses late in the block;
  - **inter-individual RIR-%1RM variation:** the same % is RPE 6 for one lifter and RPE 9 for another
    [@pelland-2022-proximity-methods].

  Autoregulation equalises effort and lets load rise with fitness. Day-to-day readiness matching, the
  usual rationale, has not been isolated experimentally. APRE's advantage additionally includes sets to
  failure (more effort and volume).
- **Why VL thresholds matter for hypertrophy and speed but not 1RM.** Velocity loss within a set indexes
  proximity to failure and accumulated fatigue:
  - higher VL means more reps and more effective volume, hence growth;
  - it also brings more fatigue, slower contraction, a shift from type IIX toward IIA, and lower RFD;
  - 1RM gains at 70-85% loads are insensitive to proximity to failure across a wide range. This agrees
    with the ch3 proximity meta-regression: strength slope beta 0.003 (-0.012 to 0.018)
    [@robinson-2024-proximity-failure] (promising, FT per ch3).
- **Why RIR is more accurate near failure and in short sets.** Close to failure the perceptual cues
  (bar slowing, effort) are salient and the distance to extrapolate is short. In long sets,
  metabolite-driven discomfort inflates perceived effort early, so people underpredict. Heavy 1-6-rep
  sets typical of strength sport sit in the accurate zone. This is an inference from Halperin and Zourdos
  2021.

### Disagreements

- Zhang 2021 and Huang 2025 ("autoregulation superior") vs Hickmott 2022, Orange 2022 and the ACSM 2026
  overview (no clear difference; ACSM: autoregulation effect on strength "cannot be determined"
  [@currier-2026-acsm-position-stand]). The split tracks methods:
  - the positive syntheses include non-randomised APRE studies and youth;
  - they use fixed-effect pooling of dependent outcomes;
  - they do not separate method from dose.
- Whether experience improves RIR accuracy: Steele 2017 says yes (trend); Halperin 2022 and Zourdos 2021
  say no.

### Unknowns

- No trial matches load *and* effort while varying only the decision rule. This would isolate the
  readiness-matching effect.
- No trial lasts more than 12 weeks in competitive lifters.
- RIR accuracy for the deadlift and for strongman implements (no data found).
- Whether VBT beats RPE in trained powerlifters (one trial cited by Huang; not retrieved).

---

## RQ4. What is known about deloads and about tapering and peaking for strength sport?

### Deloads: definition and consensus

- **Delphi** (strength and physique coaches; 34 to 21 panellists; consensus >=70%). Proposed definition:
  *"a period of reduced training stress designed to mitigate physiological and psychological fatigue,
  promote recovery, and enhance preparedness for subsequent training."* Coaches agreed that:
  - a deload is distinct from a taper (not intended to raise performance; can sit anywhere in the plan);
  - volume should fall; intensity may fall, stay or rise;
  - deloads can be pre-planned or autoregulated;
  - there is no standard method [@bell-2023-deload-delphi] (convention, FT).

  The coaches *believe* deloads lower the risk of overreaching, overtraining and injury. The authors note
  that NFOR incidence in strength sports is low and the injury link is unproven (speculative, FT).
- **Practice.** Coaches' interviews (n = 18): deloads of 5-7 days every 4-6 weeks, cutting volume and
  effort [@bell-2022-deload-coaches] (convention, ABS). **All 246 surveyed competitive strength and
  physique athletes deload**, for 6.4 +/- 1.7 days every 5.6 +/- 2.3 weeks. Most deloads are pre-planned;
  athletes cut reps, sets, load and effort while keeping frequency and exercises
  [@rogerson-2024-deload-survey] (convention, ABS). 95% of Asian S&C practitioners use deloads
  [@washif-2025-coaches-periodization]. Team-sport coaches cut RT volume by 0-25% during "deload"
  periods [@de-marco-2024-deload-coaches] (convention, ABS).

### Deloads: experimental evidence (very thin)

- **Coleman 2024** (n = 39 trained adults; 9-week high-volume program to failure; RCT): **a one-week
  complete break** at week 5
  - did not change hypertrophy, power or endurance;
  - produced somewhat **smaller lower-body strength gains**: Smith squat 1RM difference -4.5 kg [95% CrI
    -10.4 to 2.8]; posterior probability favouring continuous training 0.851 for 1RM and 0.924 for
    isometric strength [@coleman-2024-deload] (promising, FT).

  Note that the "deload" was **cessation**, not the reduced-load week athletes use. The study was funded
  by Renaissance Periodization, which had a role in the design. It found no evidence of "re-sensitisation".
- **Pancar 2026** (n = 19 untrained men; within-subject; 8 weeks): reduced-volume deload weeks (sets cut
  ~66-75%, frequency halved) at weeks 4 and 8 gave **the same hypertrophy and 10RM gains** as continuous
  training (leg extension 10RM paired difference +0.79 kg, -0.66 to 2.24) [@pancar-2026-deload]
  (promising, FT).
- **Periodic vs continuous training** (untrained men, 24 weeks): three 6-week blocks separated by
  **3-week breaks** matched continuous training for CSA and bench 1RM. Retraining after a break progressed
  faster [@ogasawara-2013-periodic] (promising, ABS).
- **Minimal doses maintain strength and size.** One session and one set per exercise per week, with
  relative load kept, maintained strength for up to 32 weeks in younger adults
  [@spiering-2021-maintenance] (promising, ABS per ch3). In powerlifters, ~3-6 heavy sets per lift per
  week is proposed as a minimum dose [@androulakis-korakakis-2021-powerlifters] (convention, FT per ch3).
  A reduced-volume deload is therefore unlikely to cost adaptations.

### Tapering and peaking

- **Evidence-based recommendation** (Travis 2020 review): for powerlifting,
  - cut volume **~30-70%** (smaller cuts of ~30-50% looked better for squat and bench);
  - keep intensity **>=85% 1RM** (or lower it in the final days);
  - use a **1-2-week step or exponential taper**, then **2-7 days of training cessation**;
  - <=7 days of cessation maintained or raised squat (+1.7-4.9%) and bench (+1.4-4.9%); >7 days cost 1-4%
    [@travis-2020-taper-review] (promising, FT).

  The evidence base is tiny: two powerlifter taper studies, n = 33.
- **Endurance-derived anchor:** the optimal taper is ~2 weeks with volume cut 41-60% exponentially and
  intensity and frequency unchanged (effect 0.72 +/- 0.36 for the volume cut) [@bosquet-2007-taper]
  (established for endurance athletes; transfer to strength is inference; ABS).
- **Strength-specific trials (all small):**
  - Travis 2021 (n = 16 powerlifters, overreach week then a 1-week step taper or 3-week exponential
    taper): both raised squat, bench, deadlift and total. Type IIA fibre CSA rose only after the step
    taper [@travis-2021-step-exponential] (promising, ABS);
  - Pritchard 2019 (n = 11): a 1-week taper with ~70% volume cut improved CMJ; higher- vs lower-intensity
    tapers did not differ significantly, with small-effect advantages for higher intensity
    [@pritchard-2019-taper-intensity] (speculative, ABS);
  - Pritchard 2018 (n = 8): 3.5 or 5.5 days off after training raised CMJ and isometric bench force (ES
    0.21-0.30) [@pritchard-2018-training-cessation] (speculative, ABS);
  - Burke 2023 (n = 12): after a 1-week step taper, 2 days off raised bench and total, while 4 days off
    raised deadlift but lowered bench. All effects were trivial (g ~0.1) [@burke-2023-cessation]
    (speculative, ABS).
- **Practice** (Winwood 2026 systematic review of 7 surveys and interview studies; CrossFit, Highland
  Games, powerlifting, strongman, weightlifting):
  - athletes peak volume 4-6 weeks out and intensity 2-3 weeks out;
  - they mostly use step tapers of 5-9 days (longer in powerlifting), cut volume ~40-45% (range 34-59%)
    and stop training 1.5-4 days out;
  - deadlifts are last trained heavy 6-8 days out, squats 5-6.5 days and bench 3-5 days;
  - prevalence: 99% of weightlifters and CrossFit athletes, 87% of strongman, 78% of Highland Games
    [@winwood-2026-taper-sr] (convention, FT).

  Constituent studies:
  - elite NZ powerlifters cut volume 58.9%, keep intensity and finish 3.7 days out
    [@pritchard-2016-taper-practices];
  - Croatian champions cut volume 50.5% and stop 3 days out [@grgic-2017-taper-croatia];
  - North American raw powerlifters (n = 364) use 7-10-day step tapers with 41-50% cuts, final heavy
    squat and deadlift 7-10 days out, and cessation 2.8 days [@travis-2021-taper-survey];
  - strongman athletes (n = 454) use 8.6-day tapers, cut volume 45.5% and stop 3.9 days out; deadlift,
    yoke and stones need longest [@winwood-2018-strongman-taper] (all convention, ABS).

### Mechanisms

- **Fitness-fatigue logic.** Fatigue (neuromuscular fatigue, muscle damage, perceived fatigue) decays
  faster than fitness (neural and morphological adaptations). Cutting volume while keeping intensity
  removes fatigue but preserves the heavy-load neural stimulus. Strength begins to detrain only after
  ~1 week of complete rest [@travis-2020-taper-review].
- **Observed taper mechanisms:**
  - increased quadriceps EMG and force per unit CSA after a 1-week 50% volume cut in national
    powerlifters (Häkkinen, SEC via [@travis-2020-taper-review]);
  - type IIA fibre growth after a step taper following an overreach [@travis-2021-step-exponential].
- **Why lift-specific timing.** Deadlifts and strongman pulls and carries are reported to need the most
  recovery [@pritchard-2016-taper-practices; @winwood-2018-strongman-taper]. A plausible reason is their
  high whole-body force demand and heavy spinal and grip loading; this is athlete testimony, not data.
- **Deload vs continuous.** If fatigue does not accumulate much across RT sessions
  [@kataoka-2022-fatigue-accumulation], routine deloads offer little performance benefit. A full week off
  costs a little strength through lost practice and neural specificity (Coleman). Reduced-volume deloads
  maintain adaptations (Pancar; minimal-dose data). The likely value of deloads is psychological and
  logistic (adherence, joint aches, life stress), which is untested.

### Disagreements

- Coaches and athletes treat routine deloads as essential, while the only trial in trained lifters found
  a small *cost* (of cessation). Coleman's authors and the Delphi panel both call for trials of
  reduced-load deloads.
- **Taper intensity.** Endurance meta-analysis and Travis say maintain it. Practitioners often drop
  intensity in the final days (strongman ~50% in the last week). Pritchard 2019 could not separate
  higher from lower intensity.

### Unknowns

- Reduced-load deloads in trained or competitive lifters, on strength.
- Autoregulated vs fixed-interval deloads.
- Whether deloads reduce injury.
- Taper studies with competition 1RM as the outcome and n > 20.
- Women-specific taper data (females report keeping volume higher closer to competition
  [@winwood-2026-taper-sr]).

---

## RQ5. What do surveys of elite strength athletes and coaches show about practice versus evidence?

### Findings

- **Periodization is near-universal in name, flexible in practice:**
  - 80% of strongman competitors use some form of periodization [@winwood-2011-strongman-practices]
    (convention, ABS);
  - 71% of coaches call their approach periodization, but most reject its core tenets
    [@anyadike-danes-2023-coaches-planning];
  - practitioners prefer hybrid models and flexible programming [@washif-2025-coaches-periodization].
- **Powerlifters train frequently with submaximal loads and RPE:**
  - Norwegian powerlifters: 58% train 5-6 times a week, most commonly at 71-80% 1RM
    [@shaw-2022-norwegian-powerlifters] (convention, ABS);
  - 548 surveyed powerlifters train ~4.25 times a week, competition lifts 1.4-2.5 times a week at 1-7
    reps and **RPE 6-10**; >97.5% use variations and accessories; 88% change programming as competition
    nears [@amdi-2026-powerlifting-specificity] (convention, ABS).
- **Explosive intent and accommodating resistance are common:** elite British powerlifters lift with
  explosive intent (79-82%), use chains (57%) and bands (39%), and 69% use Olympic-lift derivatives
  [@swinton-2009-powerlifters]; strongman athletes use bands (56%) and chains (38%)
  [@winwood-2011-strongman-practices] (convention, ABS).
- **Tapering and deloading are near-universal** (RQ4).
- **Monitoring is mostly conversational:** pretraining readiness via conversation (71%), wellness tools
  (46%), velocity devices (23%) [@washif-2025-coaches-periodization].

### Practice vs evidence (synthesis)

| Practice | Prevalence | Evidence | Verdict |
|---|---|---|---|
| Named periodization model | 71-80% | Variation > constant (small, short-term); no model reliably superior | Practice runs ahead of evidence; harmless if flexible |
| Flexible, feedback-driven programming | Common | FDUP = DUP; autoregulation >= fixed % | Consistent with evidence |
| RPE/RIR prescription (RPE 6-10) | Ubiquitous in powerlifting | RIR accurate to ~1 rep in heavy, low-rep sets; strength insensitive to RIR 0-4 | Consistent with evidence |
| VBT | ~23% of coaches | No clear 1RM advantage; small jump/COD advantage | Appropriate as optional |
| Pre-planned deload every 4-6 weeks | ~100% of athletes | 2 small trials; cessation slightly costly, reduced load neutral | Practice far ahead of evidence (convention) |
| Taper 1-2 weeks, ~40-60% volume cut, 2-4 days off | 87-99% | Matches the endurance MA and small strength trials | Practice and evidence converge |
| High frequency, submaximal loads | Norwegian and survey data | Frequency helps strength (ch3); heavy loads best for 1RM | Mostly consistent; very heavy exposures still needed near competition |

Practice often *precedes* evidence. Tapering parameters were largely codified from athlete practice and
then partly confirmed.

### Unknowns

- No survey links practices to outcomes (competition progress).
- Self-selection and self-report bias.
- Little data from elite female and masters lifters.

---

## Progression models (cuts across RQ1 and RQ3)

### Findings

- **Is progression required?** ACSM 2026 states that "progression is not necessary to achieve beneficial
  outcomes". It adds that increasing the stimulus "is likely a requirement only for those seeking
  continued longer term progress" and can be done by keeping relative load constant via retesting or
  RPE [@currier-2026-acsm-position-stand] (convention: a panel judgement, FT).
- **Load progression rules used in trials:**
  - fixed linear %1RM steps with a completion criterion (e.g., +2.5% 1RM only if all reps were completed
    the previous week; -4% per missed rep) [@helms-2018-rpe-percentage];
  - RPE-based self-selection, with automatic +/-2% load adjustments per 0.5 RPE outside the target
    [@helms-2018-rpe-percentage];
  - APRE, in which reps achieved in a to-failure set set the next load [@mann-2010-apre];
  - velocity targets and velocity-loss caps [@hickmott-2022-autoregulation].

  The autoregulated rules let load climb with strength. That is the most plausible reason they match or
  slightly beat fixed rules (RQ3 mechanisms).
- **Volume progression:**
  - adding sets every fortnight beyond 22 weekly sets gave more leg-press 1RM than holding volume constant
    in trained women [@enes-2025-set-progression] (contested, ABS per ch3);
  - progressing by 2 sets every 2 vs every 4 weeks made no difference over 12 weeks
    [@enes-2026-volume-progression] (promising, ABS).

  Volume load (sets x reps x load) is a descriptor rather than a driver (ch3).
- **Practitioner progression schemes** (double progression, wave loading, "add 2.5 kg when all sets are
  completed") have no comparative trials (convention).

### Unknowns

- Optimal rate and trigger of load progression in advanced lifters.
- Whether rule-based progression beats RPE-guided progression once effort is matched.

---

## Cross-cutting synthesis for the chapter writer

1. The strongest generalisations are about **training content**:
   - enough heavy, specific practice;
   - progressive load increases;
   - hard-enough sets;
   - avoiding monotony.

   Variations in *how* that content is sequenced (LP, DUP, block) matter little in 6-12-week trials.
2. **Autoregulation is best framed as a tool to get the dose right** (effort and load tracking strength
   gains) rather than a superior "system". RIR/RPE is accurate enough for heavy, low-rep work.
3. **Peaking is the one planning element with consistent practice and modest supporting data.** Deloads
   are the clearest case of convention outrunning evidence.
4. **The periodization debate is conceptual as much as empirical.** The decisive experiment (planned
   periodization vs equally varied responsive planning, over a season, in competitive lifters) has not
   been done.

## Gaps

- **Periodization vs varied non-periodized training:** no trial (Afonso 2019's central point remains
  unanswered as of Nov 2026).
- **Block and conjugate/Westside models:** no meta-analysis; conjugate has no controlled trial at all.
  Grade as convention.
- **Long-term data:** no trial in competitive strength athletes longer than ~6 months; no career-scale
  data.
- **Moesgaard 2022 and Williams 2017 full texts not read** (Springer unreachable): heterogeneity, risk of
  bias, the durations of included studies and the exact comparator types are unverified. A verifier with
  Springer access should check the trained-subgroup analysis and comparator composition.
- **Autoregulation:** no study isolates readiness-matching from dose. Trials are <=12 weeks, mostly men,
  with almost no women and none in strongman.
- **APRE:** the evidence depends on non-randomised studies and to-failure sets.
- **VBT:** the velocity-loss evidence comes from a few laboratories, mostly Smith-machine, mostly men. The
  2026 MSSE bench trial was read only as an abstract.
- **RIR accuracy:** few data for deadlifts, strongman implements, very heavy singles (RPE at >90% 1RM),
  or women. It is unresolved whether experience improves accuracy.
- **Deloads:** only two trials (one of cessation in trained lifters, one of reduced volume in untrained
  men). There are no strength-athlete trials of reduced-load deloads, no autoregulated-vs-scheduled
  comparison and no injury data.
- **Tapering:** fewer than 100 strength athletes in all experimental taper studies combined. There are no
  sex-specific data, strongman tapering has no experimental data, and step vs exponential has one small
  trial.
- **Not retrieved:**
  - Weakley 2021 VBT review (Strength Cond J 43(2):31-49), cited as context only (no record);
  - Hughes 2020 and Mansfield 2020 RIR factor studies;
  - Dorrell 2020 VBT vs PBT RCT;
  - Caldas 2016 (UP > LP for strength, cited secondarily by Zhang Z 2026; not located in PubMed).
- **Preprint sweep:** SportRxiv searches found no 2025-2026 deload or periodization preprints beyond
  those published (Coleman 2024 preprint, Bell 2022 preprint). No 2025-2026 periodized vs non-periodized
  meta-analysis exists beyond the LP vs UP synthesis (Zhang Z 2026).
