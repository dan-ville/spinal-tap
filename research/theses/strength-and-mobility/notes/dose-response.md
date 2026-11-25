# Chapter 3 research notes: Dose (volume, load, effort, frequency and rest)

Researcher notes behind `chapters/03-dose-response.md`. Searched 2026-11-24 (Europe PMC, PubMed,
SportRxiv, medRxiv, bioRxiv, publisher pages, web search with a dedicated 2025-2026 sweep per question).
Every source has a record in `evidence/sources/<id>.yml` (53 records for this chapter).

**How to read the tags.** Each finding carries `[@id]`, a grade (established | promising | contested
| speculative | convention), and the read level of the number: **FT** = full text read, **ABS** =
abstract only, **SEC** = number quoted from another paper. Only FT numbers may be stated as verified.

**Full texts read (13):** Pelland 2026 (publisher PDF and preprint), Remmert 2025 (preprint), Robinson
2024 (preprint version), Refalo 2023 meta-analysis, Refalo 2023 fatigue study, Lopez 2021, Currier 2023,
ACSM 2026 position stand (Currier 2026), Swinton 2024, Hammert 2026, Singer 2024,
Androulakis-Korakakis 2021, Schoenfeld 2019 volume trial (results and discussion).

**Population caveat that runs through the whole chapter.** The dose-response literature is dominated
by young men, 6-12-week interventions, untrained or "recreationally trained" participants and novel 1RM
tests. Very few studies include competitive strength athletes. Pelland 2026: 28/67 studies untrained,
mean 10.4 wk, 79% male [@pelland-2026-volume-frequency]. Lopez 2021: 75% untrained, none highly
strength-trained [@lopez-2021-load]. Currier 2023 excluded elite athletes [@currier-2023-nma]. The
thesis targets trained adults, so every extrapolation upward in training age is an inference.

---

## Cross-cutting point: how "dose" is counted changes the answer

- **Set counting.** Pelland et al. classified every set as direct (the measured muscle is the prime
  mover; for strength, the tested exercise itself) or indirect (synergist work; for strength, other
  exercises that train the involved muscles). Counting indirect sets as 0.5 ("fractional") fitted the
  data better than counting them as 1 ("total") or 0 ("direct"), for both outcomes. Bayes factors were
  strong to very strong: 2 x log(BF) fractional vs total 9.48 (hypertrophy volume), 18.21 (strength
  volume); fractional vs direct 10.29 and 45.96 [@pelland-2026-volume-frequency] (promising, FT). The
  0.5 weight is a modelling convention that beat the alternatives, not a measured physiological
  constant.
- **Per-session vs weekly counting** gives different "plateaus" from the same 67 studies (see RQ1)
  [@remmert-2025-per-session-volume].
- **Volume load (sets x reps x load)** is a description of work, not a causal driver of growth. Similar
  volume-load progressions can yield different growth [@hammert-2024-volume-load-progression]
  (contested, ABS). Volume load is also rarely reported, so the ACSM overview could not use it
  [@currier-2026-acsm-position-stand] (FT).
- **"Failure" is defined inconsistently** (momentary, volitional, undefined). Percentage-based
  prescriptions put different people at very different RIR [@pelland-2022-proximity-methods]
  (established, ABS). Lifters underpredict reps to failure by ~1 rep (0.95, 95% CI 0.17-1.73), and
  are more accurate near failure and in sets of 12 or fewer reps [@halperin-2022-rir-accuracy]
  (promising, ABS). Volume dose-responses are therefore conditional on sets being "hard", which most
  studies only loosely control. In Pelland's data, 78% of effects used some failure definition, but
  only ~30% defined momentary failure clearly [@pelland-2026-volume-frequency] (FT).

---

## RQ1. Volume and frequency: what do the latest dose-response meta-regressions show, and where are the diminishing returns?

### Findings: volume and hypertrophy

- **Pelland et al. 2026** (Sports Med 56:481-505; Bayesian multilevel meta-regressions; 67 studies,
  2058 participants; hypertrophy models 35 studies, 220 effects, 1032 participants; direct
  site-specific size measures only):
  - Positive dose-response, 100% posterior probability that the slope exceeds zero. Best fit was a
    square-root model, i.e. diminishing returns, with no clear plateau. Marginal slope 0.24% gain per
    extra fractional weekly set (95% CrI 0.15-0.33) at the mean of ~12 sets. R2 marginal 22.3%,
    conditional 73.3% [@pelland-2026-volume-frequency] (established for direction, promising for
    shape; FT).
  - Efficiency tiers, measured against a smallest detectable effect size (SDES) of 2.05%: the minimum
    effective dose is 4 fractional sets/wk. Each further detectable increment then needs ~6 extra sets
    (5-10 sets), ~8.5 (11-18), ~10.75 (19-29) and ~12.5 (30-42). Above 43 sets the data are too sparse
    to say [@pelland-2026-volume-frequency] (promising, FT).
  - The point of undetectable outcome superiority (PUOS) for weekly hypertrophy volume is ~31
    fractional sets/wk. This comes from Pelland's OSF supplement as quoted by Remmert et al.; it is
    not in the paper body [@remmert-2025-per-session-volume] (speculative, SEC via FT preprint).
  - The authors themselves say the best-fit curve is still compatible with a plateau or an inverted-U
    at high volumes, because the credible intervals widen there [@pelland-2026-volume-frequency] (FT).
- **Earlier meta-analyses agree on direction:**
  - Schoenfeld 2017: +0.37% per weekly set, ES +0.023 per set (P = 0.002; 15 studies). Higher- vs
    lower-volume ES difference 0.241 (3.9 percentage points) [@schoenfeld-2017-volume] (established,
    ABS).
  - Krieger 2010: multiple sets give ~40% larger hypertrophy ES than single sets (difference 0.10,
    95% CI 0.02-0.19). ES 0.24 (1 set), 0.34 (2-3 sets), 0.44 (4-6 sets)
    [@krieger-2010-sets-hypertrophy] (established, ABS).
  - Baz-Valle 2022 (trained men only): >20 vs 12-20 weekly sets made no difference for quadriceps
    (p = 0.19) or biceps (p = 0.59) but helped triceps (p = 0.01). The authors recommend 12-20 sets
    [@baz-valle-2022-volume] (contested, ABS).
- **Network and umbrella evidence:**
  - Currier 2023 BJSM NMA (119 hypertrophy studies, n = 3364): multi-set prescriptions ranked highest
    for hypertrophy (HM2 vs control SMD 0.66, 95% CrI 0.47-0.85), but only 1/45 between-prescription
    contrasts excluded zero [@currier-2023-nma] (established, FT).
  - ACSM 2026 overview of 137 reviews: hypertrophy is enhanced by higher volume (>=10 sets/muscle/wk;
    5 reviews, n = 2267, QoE 50%) [@currier-2026-acsm-position-stand] (established, FT).
- **Trials in trained people (2019-2026), mixed:**
  - Schoenfeld 2019 (34 trained men, 8 wk, 1 vs 3 vs 5 sets/exercise, ~6-9 vs 18-27 vs 30-45 weekly
    sets): hypertrophy was greater with more volume at 3 of 4 sites [@schoenfeld-2019-volume-trained]
    (promising, FT).
  - Robinson 2025 preprint (16 recreationally trained, replicated within-participant design, ~8 vs ~16
    sets/wk): +1.8 cm2 vastus lateralis CSA for the higher volume (95% HDI 0.29-3.41; 98.8% posterior
    probability) [@robinson-2025-volume-individual] (promising, ABS).
  - Enes 2025 (trained women): adding +2 or +4 sets/fortnight above 22 sets gave more VL-CSA (4-set
    group only) but no difference in summed thickness [@enes-2025-set-progression] (contested, ABS).
  - Null trials when volume is raised above habitual levels:
    - Moreno 2025: no added elbow-flexor growth from raising sets above baseline; 50% site 0.022 cm,
      95% CI -0.096 to 0.140 [@moreno-2025-volume-baseline] (promising, ABS).
    - Barsuhn 2025: +30% or +60% sets did not add thigh mass vs maintenance
      [@barsuhn-2025-volume-increase] (promising, ABS).
    - Rantila & Ahtiainen 2026: 27 strength-trained athletes; 1.5x sets (toward ~60/wk) for 7 wk gave
      no hypertrophy gain and did not rescue non-responders [@rantila-2026-high-volume] (promising,
      ABS).

### Findings: volume and strength

- **Pelland 2026** (strength models 66 studies, 490 effects, 2020 participants): positive slope, 0.21%
  per fractional set (95% CrI 0.16-0.26). Best fit was a reciprocal model, meaning strongly diminishing
  returns and a functional plateau. Against an SDES of 3.96%, one fractional set/wk is already a
  minimum effective dose. Detectable increments stop at ~4 sets/wk, and 5+ sets "do not consistently
  enhance strength gains > SDES" [@pelland-2026-volume-frequency] (promising, FT). Weekly PUOS ~3
  fractional sets [@remmert-2025-per-session-volume] (SEC).
- **Ralston 2017:** high vs low weekly sets ES difference 0.18 (95% CI 0.06-0.30). For
  exercise-specific 1RM the difference was marginal: 0.14 (95% CI -0.01 to 0.29)
  [@ralston-2017-volume-strength] (established, ABS).
- **ACSM 2026:** strength is enhanced by more sets (7 reviews, n = 5633, QoE 71%)
  [@currier-2026-acsm-position-stand] (FT).
- **Swinton 2024** (295 studies, 6710 participants): average sets per session had a small positive
  coefficient, SMD 0.05 (95% CrI 0.03-0.07) [@swinton-2024-dose-response] (promising, FT).
- **Trials in trained people:**
  - Schoenfeld 2019: squat and bench 1RM gains identical for 1, 3 and 5 sets/exercise (squat P = 0.22;
    bench P = 0.15; BF10 < 1) [@schoenfeld-2019-volume-trained] (FT).
  - Robinson 2025: 1RM +3.48 kg for 16 vs 8 sets, 95% HDI -5.1 to 12.15, only 80% posterior
    probability [@robinson-2025-volume-individual] (ABS).
  - Barsuhn 2025: the group that kept its habitual volume had the greatest overall 1RM gain
    [@barsuhn-2025-volume-increase] (ABS).
  - Rantila 2026: extra volume favoured the lower-volume group for deadlift (P = 0.043)
    [@rantila-2026-high-volume] (speculative, ABS).

### Per-session volume (the "junk volume" question)

- Remmert 2025 preprint, same corpus: hypertrophy rose with per-session fractional sets (linear-log;
  0.393% per set, 95% CrI 0.202-0.583), with PUOS ~11 fractional sets per muscle per session (~8
  direct). Strength used direct sets of the tested lift (reciprocal model; 1.23% per set, 95% CrI
  0.941-1.52), with PUOS ~2 direct sets/session [@remmert-2025-per-session-volume] (speculative, FT
  preprint).
- The authors stress that the PUOS is not an upper limit beyond which sets are wasted. It is the point
  beyond which no increment has a >50% chance of exceeding the SDES. Data are sparse above ~10
  sets/session (12 studies).
- Rest interval and proximity to failure did not detectably moderate the per-session curve
  (hypothesis-generating only).
- Reconciliation offered by the authors: 11 sets/session x 2.33 sessions/wk ≈ 26 sets/wk, against the
  weekly PUOS of ~31. The gap is attributed to the different functional forms
  [@remmert-2025-per-session-volume].

### Findings: frequency

- **Hypertrophy, volume equated: no meaningful effect.**
  - Pelland 2026: marginal slope 0.32% per session (95% CrI -0.14 to 0.82), 91.3% probability of a
    positive slope, "compatible with negligible effects" [@pelland-2026-volume-frequency] (promising,
    FT).
  - Schoenfeld 2019 meta: no significant volume-equated difference; ES 0.07 (95% CI -0.08 to 0.21) for
    direct measures as quoted by Pelland [@schoenfeld-2019-frequency] (established, ABS/SEC).
  - Boutagy & McKean 2026 medRxiv (16 volume-equated trials, 380 participants, 1-3 sessions/wk):
    g = -0.06 (95% CI -0.24 to 0.13), I2 = 0%. For 1 vs 3 sessions, g = -0.23 (-0.57 to 0.10), so a
    small advantage for more sessions is not excluded. GRADE low to very low
    [@boutagy-2026-frequency-preprint] (promising, ABS).
  - Tao 2026 (47 studies, 1665 participants): frequency did not affect muscle mass (g = -0.13,
    p = 0.34; equal-volume subgroup g = 0.01 per Boutagy) [@tao-2026-frequency] (ABS).
  - ACSM 2026: frequency does not affect hypertrophy (4 reviews, n = 3177, QoE 63%)
    [@currier-2026-acsm-position-stand] (FT).
  - The older Schoenfeld 2016 result (2x > 1x/wk; ES 0.49 vs 0.30) was superseded by the 2019 update
    [@schoenfeld-2016-frequency] (contested, ABS).
- **Strength: frequency matters, partly independently of volume.**
  - Grgic 2018: ES 0.74 / 0.82 / 0.93 / 1.08 for 1 / 2 / 3 / 4+ sessions (p = 0.003). The effect was
    not significant when volume was equated (p = 0.421), so the authors attributed it to volume
    [@grgic-2018-frequency-strength] (ABS).
  - Pelland 2026, with non-linear models and fractional counting: frequency had a 100% posterior
    probability of a positive effect on strength, marginal slope 3.27% per session (95% CrI
    2.74-3.84). Control-adjusted gain rose from 12.72% (10.57-15.05) at 1 session/wk to 17.32%
    (14.34-20.56) at 2, with "accelerating diminishing returns" beyond that
    [@pelland-2026-volume-frequency] (promising, FT).
  - Tao 2026: higher frequency gave greater strength gains (g = -0.17 favouring higher frequency,
    I2 = 0%, p < 0.0001) [@tao-2026-frequency] (promising, ABS).
  - ACSM 2026: strength is enhanced by >=2 sessions/wk (4 reviews, n = 3531, QoE 69%), with "the
    impact ... diminished when volume [is equated]" [@currier-2026-acsm-position-stand] (FT).
  - Currier 2023: HM2 and HM3 both ranked top for strength (SMD 1.59 and 1.60 vs control). Threshold
    analysis moved the top rank from 3x to 2x/wk in most sensitive comparisons [@currier-2023-nma]
    (FT).
  - Swinton 2024: adding sessions/week did not improve prediction [@swinton-2024-dose-response] (FT).

### Mechanisms

- **Hypertrophy and volume.** Each hard set delivers mechanical tension to the fibres of high-threshold
  motor units; accumulated tension drives muscle protein synthesis and growth. Higher-volume protocols
  raise post-exercise MPS and anabolic signalling. In rats, MPS plateaus with more "sets" even while
  p70S6K signalling does not, which is a plausible basis for diminishing returns
  [@pelland-2026-volume-frequency] (FT, speculative).
- **Mechanical tension, not hormones.** Acute hormonal responses, metabolite accumulation and the
  "pump" do not explain growth [@morton-2016-load-trained] [@van-every-2025-hypertrophy-mechanisms]
  (established/promising, ABS).
- **Why diminishing returns.** Two candidate explanations:
  - A ceiling on the per-session anabolic response.
  - Rising fatigue and muscle damage, which consume recovery capacity and can depress the quality of
    later sets.
  Both are inferences; neither has been isolated longitudinally.
- **Why strength saturates sooner.** Early 1RM gains are dominated by task-specific skill and neural
  adaptation (learning the test lift). A few exposures capture most of this: practising only the 1RM
  test matched 4 sets to failure for 1RM in untrained people despite less growth
  [@mattocks-2017-practice-test] (promising, ABS). Pelland's authors explicitly suggest the large
  effect of the first weekly set reflects learning a novel test. They note that in well-trained
  powerlifters 1-3 direct sets/wk was insufficient while 3-9 was effective
  [@pelland-2026-volume-frequency] (FT, citing Androulakis-Korakakis). Strength also gains from
  hypertrophy over longer horizons, but the volume needed for further growth brings fatigue that
  masks strength at post-tests run without a taper (most studies had no taper).
- **Why frequency helps strength but not size.** Frequency adds practice exposures of the specific
  lift (motor learning, technique, load selection); hypertrophy depends on total tension, which weekly
  volume already captures. MPS after a bout returns towards baseline within ~48 h in trained people.
  The predicted advantage of frequent stimulation for hypertrophy has nonetheless not appeared in
  volume-equated trials; possible reasons are muscle-damage confounding of MPS time-courses and
  sub-optimal per-session volumes [@pelland-2026-volume-frequency] (FT).

### Disagreements

1. **Where hypertrophy volume "plateaus".** Three readings of the same evidence:
   - Pelland: no clear plateau, ~31-set PUOS, data too sparse above ~43 sets.
   - ACSM 2026, citing Pelland: "diminishing returns beyond ~2-3 sets/exercise for strength and ~18-20
     weekly sets for hypertrophy" [@currier-2026-acsm-position-stand].
   - Baz-Valle: 12-20 sets.

   The divergence is interpretive (what counts as "meaningful"), plus differences in set counting
   (fractional vs total).
2. **Whether volume matters as much as claimed in trained people.**
   - Buckner et al. argue that dose-response trials in trained people show implausibly large growth
     (0.6-0.72 cm quadriceps thickness vs a typical 0.1-0.25 cm) and that several trials find no
     difference [@buckner-2023-volume-doubts] (contested, ABS).
   - Hammert et al. argue that volume-load progression is not causal
     [@hammert-2024-volume-load-progression] (contested, ABS).
   - Supporting the sceptics: recent trials of raising volume above habitual levels are null
     (Moreno 2025, Barsuhn 2025, Rantila 2026).
   - Supporting the proponents: the replicated within-participant trial (Robinson 2025) and the
     meta-regressions.

   A plausible reconciliation (inference): returns are positive but small above ~10-20 sets, so
   underpowered trials (n ≈ 10-15/group, 7-12 wk) cannot detect them, while large single-trial effects
   may partly reflect edema or measurement artefacts at very high volumes. Pelland notes edema is
   unlikely to confound in trained people after ~8-set sessions, but data at very high volumes are
   lacking [@pelland-2026-volume-frequency].
3. **Frequency and strength.** Grgic 2018 (no volume-equated effect, linear models, direct counting)
   vs Pelland 2026 and Tao 2026 (independent effect). Differences come from the frequency definition
   (whether indirect training counts), functional form, and more data.

### Unknowns

- The dose-response above ~25-30 weekly sets per muscle, and whether an inverted-U exists.
- Dose-response in genuinely advanced lifters over months to years.
- How volume interacts with proximity to failure (does a set at 3 RIR count as a "set"?).
- Whether whole-body volume limits site-specific dose-responses.
- Individual-level dose-response. Robinson 2025 found little evidence of true volume-specific
  inter-individual variation (replicated-response correlation 0.04-0.06 vs 0.67-0.70 for general
  responsiveness) [@robinson-2025-volume-individual] (ABS).

---

## RQ2. How does load affect strength and hypertrophy, and why?

### Findings

- **Hypertrophy is largely load-independent when sets are taken to (or near) failure, across roughly
  30-85% 1RM.**
  - Lopez 2021 NMA (28 studies, 747 adults, all sets to volitional failure; low >15RM, moderate
    9-15RM, high <=8RM): high vs low SMD 0.12 (95% CI -0.06 to 0.29); moderate vs low 0.20 (-0.04 to
    0.44); high vs moderate -0.09 (-0.33 to 0.16); I2 = 0%. Results held in best-quality studies
    [@lopez-2021-load] (established, FT).
  - Schoenfeld 2017: same conclusion [@schoenfeld-2017-load] (established, ABS).
  - Morton 2016 (49 trained men, 30-50% vs 75-90% 1RM to failure, 12 wk): no differences in lean mass
    or type I/II fibre CSA [@morton-2016-load-trained] (promising, ABS).
  - Currier 2023: lower-load and higher-load prescriptions comparable for hypertrophy
    [@currier-2023-nma] (FT).
  - ACSM 2026: load (30-100% 1RM) does not affect hypertrophy (8 reviews, n = 5340, QoE 66%)
    [@currier-2026-acsm-position-stand] (FT).
- **The lower bound.** With volume load equated, 20% 1RM produced roughly half the growth of 40-80%
  (VL CSA +8.9% vs ~+20%) [@lasevicius-2018-intensity] (promising, ABS). Load-independence therefore
  holds above ~30-40% 1RM, not at trivially light loads.
- **Strength (1RM) is load-dependent, with a dose-response.**
  - Lopez 2021: high vs low SMD 0.60 (95% CI 0.38-0.82); moderate vs low 0.34 (0.05-0.62); high vs
    moderate 0.26 (-0.02 to 0.54), P = 0.068. 98.2% probability that high load is best
    [@lopez-2021-load] (established, FT).
  - Currier 2023: >=80% 1RM multi-set prescriptions ranked top. HM3 vs control SMD 1.60 (1.38-1.82)
    vs LM3 1.07 (0.89-1.25); HM3 vs LM3 difference 0.53 (0.31-0.74) [@currier-2023-nma]
    (established, FT).
  - Swinton 2024: strength rises monotonically with %1RM, with an inflection near ~70% 1RM beyond
    which gains per unit load slow [@swinton-2024-dose-response] (established, FT).
  - ACSM 2026: >=80% 1RM enhances strength (6 reviews, n = 6574, QoE 79%)
    [@currier-2026-acsm-position-stand] (FT).
  - Morton 2016: only bench 1RM favoured heavy loads in trained men (9 +/- 1 vs 14 +/- 1 kg)
    [@morton-2016-load-trained] (ABS).

### Mechanisms

- **Hypertrophy.** By Henneman's size principle, high-threshold motor units are recruited either by
  heavy loads early in a set, or by fatigue as a light-load set approaches failure. Once recruited,
  their fibres experience high tension at slow shortening velocities near failure, so the growth
  stimulus converges across loads [@robinson-2024-proximity-failure] (FT, mechanistic discussion).
  Systemic hormones are irrelevant [@morton-2016-load-trained].
- **Strength.** The principle of specificity:
  - Heavy training rehearses the high-force, slow-velocity, near-maximal motor pattern of a 1RM. That
    pattern differs from light loads in multi-joint lifts.
  - Neural adaptations follow: agonist activation, coordination, and confidence with heavy loads.
  - Lopez's authors attribute the strength difference to "specificity" plus combined neural and
    muscular adaptations [@lopez-2021-load] (FT).
  - Mattocks 2017 shows practice of the test alone yields 1RM gains equal to high-volume training
    [@mattocks-2017-practice-test] (ABS).
- **Test specificity is not the whole story.** On unpractised isometric/isokinetic tests, high load
  still tended to beat low load. Cohen's d 0.322 (95% CI -0.08 to 0.72; PI -0.45 to 1.1; 10 studies,
  245 participants), inconclusive but biased toward heavy loads [@hammert-2026-nonspecific-strength]
  (contested, FT). Schoenfeld 2017 found no significant isometric difference: ES 0.16 (-0.06 to 0.37)
  as quoted by Swinton [@schoenfeld-2017-load] (SEC).

  Interpretation (inference): most of the heavy-load 1RM advantage is task-specific, but a smaller
  general neural or contractile advantage may exist. It is hard to detect because non-specific tests
  are insensitive. Spitz et al. estimate ~326 per group would be needed (cited in Hammert 2026, FT).

### Disagreements

- How much of the load effect on strength is "real strength" vs skill at the test. The Loenneke/Buckner
  group emphasises specificity and measurement [@hammert-2026-nonspecific-strength]
  [@mattocks-2017-practice-test]; the McMaster and Schoenfeld groups emphasise load as a true driver.
- Whether trained lifters can rely on light loads for hypertrophy as fully as novices. Morton 2016 says
  yes; the meta-analyses are dominated by untrained people. Practical caveat: light-load sets to
  failure are more uncomfortable, take longer, and RIR is harder to judge in high-rep sets
  [@halperin-2022-rir-accuracy] [@lopez-2021-load].

### Unknowns

- Load-response in advanced strength athletes over periods longer than 12-14 weeks.
- The optimal distribution of heavy vs moderate work within a strength block. Lopez's high- vs
  moderate-load difference is borderline (P = 0.068).
- Whether repeated 1RM testing inside trials narrows load contrasts [@lopez-2021-load]
  [@hammert-2026-nonspecific-strength].

---

## RQ3. How close to failure must sets be, for strength vs hypertrophy?

### Findings

- **Strength: proximity to failure barely matters (within the range studied).**
  - Robinson 2024 meta-regressions (55 studies; 243 strength effects): estimated RIR had a negligible
    slope on strength. Standardised mean change model beta 0.003 (95% CI -0.012 to 0.018);
    response-ratio model -0.059 (-0.304 to 0.186). Sensitivity analyses gave the same answer
    [@robinson-2024-proximity-failure] (promising, FT preprint).
  - Grgic 2022: failure vs non-failure strength ES -0.09 (95% CI -0.22 to 0.05). Non-failure was
    better when volume was not equated: ES -0.32 (-0.57 to -0.07) [@grgic-2022-failure]
    (established, ABS).
  - Jukic 2023: the velocity-loss threshold did not affect strength gains [@jukic-2023-velocity-loss]
    (promising, ABS).
  - Wu 2026 (20 RCTs, 556 participants): non-failure gave slightly more dynamic strength, SMD 0.24
    (0.06-0.42) [@wu-2026-non-failure] (contested, ABS).
  - ACSM 2026: failure does not enhance strength (3 reviews, n = 1371, QoE 83%)
    [@currier-2026-acsm-position-stand] (FT).
  - Trials in trained people: 1-3 RIR matched failure for 1RM in elbow flexors (0.588 kg, 85% HDI
    -0.491 to 1.66) and knee extensors (0.198 kg, -1.87 to 2.6) [@vasconcelos-2026-elbow-failure]
    [@vasconcelos-2026-leg-extension-failure] (promising, ABS).
- **Hypertrophy: closer to failure helps, but the last reps add little.**
  - Robinson 2024 (26 studies, 140 hypertrophy effects): hypertrophy increased as RIR fell, roughly
    linearly. SMC slope -0.019 per RIR (95% CI -0.035 to -0.004); response ratio -0.48% per RIR
    (-0.78 to -0.179) [@robinson-2024-proximity-failure] (promising, FT preprint). RIR was estimated
    by the authors, not measured.
  - Refalo 2023 (15 studies):
    - Failure vs non-failure under any definition: ES 0.19 (95% CI 0.00-0.37), p = 0.045, fragile on
      sensitivity analysis.
    - Strict momentary failure vs non-failure: ES 0.12 (-0.13 to 0.37), p = 0.343.
    - >25% vs 20-25% velocity loss: ES 0.08 (-0.16 to 0.32).
    - Within-group growth: ES 0.20 (<20% VL), 0.39 (20-25%), 0.42 (>25%). This suggests a non-linear
      relation: stopping very far from failure (low VL) gives less growth, but going all the way to
      failure adds little.

    [@refalo-2023-failure-hypertrophy] (promising, FT).
  - Refalo 2024 trial (18 trained, within-participant legs): quadriceps thickness change at failure
    0.181 cm (HDI 0.119-0.243) vs 1-2 RIR 0.182 cm (0.115-0.247) [@refalo-2024-failure-rir-trial]
    (promising, ABS). Vasconcelos 2026 replicated this in elbow flexors and knee extensors.
  - Jukic 2023: higher VL increases hypertrophy (b = 0.006 per % VL, 95% CI 0.001-0.012)
    [@jukic-2023-velocity-loss] (ABS).
  - Grgic 2022: trained subgroup slightly favoured failure, ES 0.15 (0.03-0.26) [@grgic-2022-failure]
    (contested, ABS).
  - ACSM 2026: failure does not enhance hypertrophy (4 reviews, n = 800); "near-failure" or 2-3 RIR is
    a sufficient target [@currier-2026-acsm-position-stand] (promising, FT).
- **Costs of failure.**
  - Acute velocity loss 4 min after the session: -25% (failure) vs -13% (1 RIR) vs -8% (3 RIR).
  - Residual deficit at 24 h for failure and 1 RIR (-3%) but not 3 RIR (+2%); gone by 48 h.

  [@refalo-2023-failure-fatigue] (promising, FT).
  - More discomfort and RPE, and worse affect, with no extra growth: discomfort 5.1 vs 4.1, feeling
    scale 0.3 vs 1.2 [@refalo-2025-failure-perception] (promising, ABS).
  - Higher VL impairs jump and sprint adaptations (CMJ b = -0.040) [@jukic-2023-velocity-loss] (ABS).

### Mechanisms

- **Hypertrophy (Robinson's discussion).** Approaching failure progressively recruits high-threshold
  motor units, and slows contraction so that recruited fibres are exposed to high tension. Reps near
  failure are therefore the "effective" ones, especially at lighter loads. With heavier loads, high
  recruitment occurs earlier, which may explain the hint that heavier loads need less proximity
  (interaction meaningful only in one sensitivity model) [@robinson-2024-proximity-failure]
  (speculative). Why the curve flattens near 0 RIR (Refalo): the last 1-2 reps add little extra
  stimulus while adding disproportionate fatigue.
- **Strength (Robinson's discussion).** Two sets of effects may cancel out:
  - Against training to failure: force output falls within a set as fatigue accrues, so reps far from
    failure are the highest-force reps (specific to 1RM). Fatigue management (studies rarely taper)
    and rate-of-force-development adaptations also favour stopping short.
  - For training to failure: failure resembles the test; RIR judgements are more accurate near
    failure; and the extra hypertrophy may feed strength.

  Robinson also distinguishes load-mediated proximity from fatigue-mediated proximity. A single at
  95% 1RM is "close to failure" because of load, and load-mediated proximity does help strength
  [@robinson-2024-proximity-failure] (FT).

### Disagreements

- Fisher, Steele and colleagues frame effort as a continuous variable and question binary failure
  research. Refalo's 2023 "any definition" estimate became significant only marginally (p = 0.045) and
  is sensitive to the assumed pre-post correlation [@refalo-2023-failure-hypertrophy].
- Robinson's slope is linear; Refalo's data suggest a non-linear plateau near 0-2 RIR. The two are
  compatible if the linear fit is driven mainly by far-from-failure conditions (>4-5 RIR). RIR was
  estimated in Robinson, and true proximity is unknown in most non-failure arms.
- **Measurement problems.** RIR prediction error (~1 rep) and inconsistent failure definitions
  [@halperin-2022-rir-accuracy] [@pelland-2022-proximity-methods] limit the precision of any
  prescription below ~2 RIR.

### Unknowns

- The exact shape between 0 and ~5 RIR in trained lifters for hypertrophy.
- Whether proximity matters more for synergists or for small vs large muscles.
- Interaction with volume: are more sets at 3 RIR equivalent to fewer sets at 0-1 RIR?
- Long-term (>12 wk) and fatigue-adjusted (tapered) strength outcomes.

---

## RQ4. Minimum effective and maintenance doses for strength and muscle

### Findings: minimum effective dose (MED) to gain

- **Strength.**
  - Pelland 2026: 1 fractional set/wk exceeds the 3.96% SDES, and detectable increments stop at ~4
    sets/wk [@pelland-2026-volume-frequency] (promising, FT).
  - Androulakis-Korakakis 2020 (trained men; lowest-dose arms of 5 pooled studies): a single set of
    6-12 reps at ~70-85% 1RM to failure, 2-3x/wk for 8-12 wk, increased 1RM by 12.09 kg (95% CI
    8.16-16.03). Squat +17.48 kg (8.51-26.46); bench +8.25 kg (0.68-15.83). "Suboptimal yet
    significant" [@androulakis-korakakis-2020-minimum-dose] (promising, ABS).
  - Androulakis-Korakakis 2021 (powerlifters, mixed methods):
    - Coach and athlete consensus: ~3-6 working sets of 1-5 reps per lift per week at >80% 1RM and
      RPE 7.5-9.5, over 1-3 sessions, for 6-12 weeks (convention).
    - Two small trials (n = 25): daily-max singles at RPE 9-9.5 maintained or slightly raised 1RM.
      Adding two back-off triples at ~80% made meaningful gains likely. Pooled PL total +19.6 kg (95%
      HDI 10.7-31.6), 77% probability of exceeding a meaningful change elicited from athletes.

    [@androulakis-korakakis-2021-powerlifters] (speculative for the trial numbers, FT).
  - Schoenfeld 2019: ~13-min sessions (1 set/exercise, 3x/wk) gained as much strength as 5 sets in
    trained men over 8 wk [@schoenfeld-2019-volume-trained] (FT).
  - Steele 2023 (14,690 gym clients, 1x/wk single sets to failure): ~30-50% strength gains in year 1,
    ~50-60% above baseline by ~6 y, with a practical plateau after 1-2 years
    [@steele-2023-minimal-dose-longitudinal] (promising, ABS). This is evidence that minimal doses keep
    working long term in general populations, but also that they plateau.
- **Hypertrophy.**
  - Pelland MED ~4 fractional sets/wk [@pelland-2026-volume-frequency] (FT).
  - Iversen 2021 recommends >=4 weekly sets per muscle at 6-15RM [@iversen-2021-time-efficient]
    (convention, ABS).
  - Currier 2023: single-set and once-weekly prescriptions beat control, though some single-set CrIs
    were wide [@currier-2023-nma] (FT).
- ACSM 2026 explicitly notes that "minimal doses" produce substantial strength and hypertrophy gains
  and calls for more research [@currier-2026-acsm-position-stand] (FT).

### Findings: maintenance

- **Spiering 2021 (narrative review).** In younger people, strength and size can be maintained for up
  to 32 wk with 1 session/wk and 1 set/exercise, if relative load is maintained. Older adults need ~2
  sessions/wk and 2-3 sets. Intensity is "the key variable" [@spiering-2021-maintenance] (promising,
  ABS).
- **Bickel 2011** (70 adults; 16 wk training, then 32 wk): in young adults, 1/3 and 1/9 of the training
  dose preserved hypertrophy (1/3 even added fibre growth); older adults lost size. Strength was
  largely retained even with complete detraining [@bickel-2011-maintenance] (promising, ABS).
- **Mpampoulis 2025** (young women after 12 wk of upper-body power training):
  - Once every 7 days maintained bench 1RM; once every 14 days lost 5.9 +/- 4.9%.
  - Power declined in both conditions.
  - Every 14 days still preserved ~90-95% of strength/power gains and ~72% of muscle gains.

  [@mpampoulis-2025-reduced-frequency] (promising, ABS).
- **Androulakis-Korakakis 2021:** 1RM can be maintained, or slightly increased, with as little as a
  single heavy single per lift per week [@androulakis-korakakis-2021-powerlifters] (speculative, FT).
- **Indirect evidence.** Keeping habitual volume (rather than increasing it) produced equal or better
  outcomes in trained men and recreationally trained arms [@barsuhn-2025-volume-increase]
  [@moreno-2025-volume-baseline]. Those trials sat at maintenance of a moderate habitual volume, not a
  minimum dose.

### Mechanisms

- Strength is easier to retain than size: neural and skill adaptations persist, and a small amount of
  heavy practice preserves them. That is why load (intensity), not volume, is the variable that must
  be kept [@spiering-2021-maintenance]. Muscle proteins turn over continuously, so size needs some
  recurring tension stimulus; older muscle has anabolic resistance and needs more
  [@bickel-2011-maintenance] (inference from ABS).
- Minimum doses for strength in trained lifters are higher than in novices: Pelland reports that 1-3
  direct weekly sets were insufficient in well-trained powerlifters, whereas 3-9 were effective
  [@pelland-2026-volume-frequency].

### Disagreements

- "MED" depends on the definition of meaningful change: the SDES (statistical detectability) vs
  athlete-elicited thresholds (Androulakis-Korakakis) vs statistical significance.
- Most maintenance data come from previously untrained people after short training. How well they
  transfer to athletes holding years of adaptation is unknown [@spiering-2021-maintenance].

### Unknowns

- Maintenance doses for highly trained lifters across a whole season.
- How long a minimal dose sustains gains before a plateau (Steele's 1-2 years in the general
  population).
- Maintenance of hypertrophy in trained people specifically.
- Interaction with energy deficit and age.

---

## RQ5. Rest intervals for strength and hypertrophy

### Findings

- **Hypertrophy.**
  - Singer 2024 (Bayesian; 9 studies, 19 measurements; 6/9 untrained): rest >60 s gave a small
    advantage. Arm SMD 0.13 (95% CrI -0.27 to 0.51; P(>0) = 0.74); thigh 0.17 (-0.13 to 0.43;
    P(>0) = 0.88); whole body -0.08 (-0.45 to 0.29). No appreciable benefit beyond ~90 s. Failure
    status did not modify the effect. The authors call for reconsidering NSCA's 30-90 s
    recommendation [@singer-2024-rest] (promising, FT).
  - Mohan 2026 (40 trained adults): self-selected rest matched fixed ~2-min rest for hypertrophy
    (-0.1 SD, 95% CrI -0.2 to 0.0) and performance (0.0 SD, -0.3 to 0.3), but sessions took ~29% longer
    (78.5 vs 56.0 min) [@mohan-2026-self-selected-rest] (promising, ABS).
  - ACSM 2026: impact on hypertrophy cannot be determined (4 reviews, n = 265, QoE 44%)
    [@currier-2026-acsm-position-stand] (FT).
- **Strength.**
  - Schoenfeld 2016 (21 trained men, 3 sets of 8-12RM fixed, 8 wk): 3-min rest gave greater squat and
    bench 1RM and thigh growth than 1-min rest [@schoenfeld-2016-rest] (promising, ABS).
  - Grgic 2018 systematic review (23 studies, 491 participants): robust gains occur even with <60 s
    rest, but >2 min appears needed to maximise strength in trained individuals; 60-120 s suffices in
    untrained [@grgic-2018-rest-strength] (promising, ABS).
  - ACSM 2026: short (<1 min) vs long (>1 min) rest "did not affect" strength (2 reviews, n = 982,
    QoE 63%) [@currier-2026-acsm-position-stand] (contested, FT).
  - Davidson 2025 medRxiv (6 studies, trained men): longer rest modestly favoured strength (SMD -0.74,
    favouring longer rest by the authors' sign convention); hypertrophy difference trivial. Low quality
    [@davidson-2025-rest-preprint] (speculative, ABS).
  - No 2023-2026 meta-analysis of rest for strength in trained lifters was found.

### Mechanisms

- **Volume-load preservation.** Short rest lowers reps in subsequent sets (incomplete phosphocreatine
  resynthesis, metabolite accumulation, central fatigue), which reduces volume load and probably the
  number of "effective" reps per set.
  - Longo et al. (cited in Singer 2024): CSA +13.1% with 180 s vs +6.8% with 60 s rest when sets were
    fixed (reps across 3 sets 16.1 vs 9.8). Adding sets to equate volume load abolished the difference
    [@singer-2024-rest] (FT, SEC for Longo numbers).
  - Rep loss plateaus between 2 and 3 min.
- **Strength.** Longer rest preserves the load lifted and bar velocity on heavy sets. That keeps
  training intensity, which is the dominant variable for 1RM (RQ2), and the quality of technical
  practice.
- **Implication (inference).** Rest probably matters mostly through its effect on how much
  high-quality, high-tension work gets done. Equate volume load or set quality, and rest per se adds
  little.

### Disagreements

- ACSM 2026 (no effect on strength) vs Grgic 2018 and Schoenfeld 2016 (longer rest better for
  strength in trained people). The ACSM conclusion is a vote count of two reviews spanning mostly
  untrained participants with dichotomised <1 vs >1 min rest. The trained-specific evidence is a few
  small RCTs. Both can be true: rest length hardly matters for novices or with sets added, but matters
  for heavy multi-joint work in trained lifters when sets are fixed.
- NSCA's short-rest (30-90 s) hypertrophy guidance is contradicted by Singer 2024 (and by Mohan 2026
  efficiency data favouring ~2 min).

### Unknowns

- Rest effects on torso muscles.
- Rest effects at high weekly volumes and in advanced lifters.
- Strength-specific rest dose-response for very heavy (>85% 1RM) work.
- Whether rest interacts with proximity to failure. Acute data suggest yes; longitudinal data
  (Singer) suggest no.

---

## Integrated picture for the chapter writer (synthesis, with grades)

1. **Hypertrophy is driven mainly by the number of hard sets per muscle per week.**
   - Established for direction; promising for shape: diminishing but continuing returns to ~20-30
     sets, data-thin beyond.
   - Load (>~30% 1RM) and frequency (at equal volume) matter little.
   - Proximity to failure matters in that sets must be reasonably hard (roughly within ~0-3 RIR),
     with no clear benefit from absolute failure.
2. **Strength is driven mainly by load and specific practice.**
   - Heavy (>=80% 1RM) specific practice, 2+ exposures per week: established for load, promising for
     frequency.
   - Volume saturates quickly in the short term (a few direct sets per week; PUOS ~2 direct sets per
     session).
   - Proximity to failure is largely irrelevant except through load.
3. **Minimum doses are low.**
   - About 1-4 sets/wk can measurably raise strength in non-advanced trainees; ~4 fractional sets/wk
     can measurably raise muscle size.
   - Maintenance needs even less if load is kept (~1 session/wk, 1 set/exercise in younger people).
   - Advanced lifters likely need more (promising/speculative).
4. **Rest is a second-order variable** acting through set quality: ~2 min is a reasonable default;
   longer for heavy compound strength work (promising/contested).

## Gaps

1. **Trained-population gap.** Almost no dose-response data in competitive strength athletes or
   long-term (>6 months) trained cohorts. Most estimates come from 8-12-week studies in young men,
   with many untrained.
2. **High-volume region.** Few studies above ~25-30 fractional sets/muscle/wk, so the shape (plateau
   vs inverted-U) is unresolved. Recent trained-athlete trials at very high volumes are small and
   null.
3. **Measurement of hypertrophy.**
   - Ultrasound muscle thickness dominates.
   - Edema at high volumes is poorly characterised.
   - Agreement between measures is imperfect (Enes 2025: CSA vs summed MT disagree).
   - Buckner's critique of implausible effect sizes is unresolved.
4. **Measurement of effort.** RIR is mostly estimated or unreported; failure definitions vary. Robinson
   2024's RIR values were assigned by the authors. No trial has mapped 0-5 RIR finely in trained
   lifters with equated sets.
5. **Strength outcomes confounded by testing.** Novel 1RM tests, repeated testing and no taper
   inflate learning effects and mask fatigue-limited strength. Non-specific strength tests are
   underpowered.
6. **Frequency x per-session volume.** No trial isolates both variables. The per-session PUOS (Remmert
   2025) is a preprint and observational. Whether a Remmert paper was formally published by Nov 2026
   was not verified.
7. **Rest for strength.** No recent meta-analysis in trained lifters. ACSM's null rests on two reviews
   with coarse categories.
8. **Maintenance in athletes.** Maintenance dose data come from previously untrained people
   (Bickel, Spiering, Mpampoulis). There are no in-season or long-term maintenance trials in strength
   athletes.
9. **Women.** Underrepresented: ~21% of participants in Pelland. Some women-specific trials exist
   (Enes 2025/2026, Mpampoulis 2025), but sex as a moderator of dose-response is essentially untested.
10. **Individual response.** Gross variability is often mistaken for true inter-individual
    differences. Replicated designs (Robinson 2025) suggest little volume-specific individual
    response, but samples are tiny.
11. **Unread full texts.** These numbers are abstract-level only and should be verified before being
    stated as verified:
    - Robinson 2024 (published version; preprint was read).
    - Refalo 2024 trial; Grgic 2018 (frequency, rest); Schoenfeld 2016/2019 frequency meta-analyses.
    - Androulakis-Korakakis 2020; Spiering 2021; Bickel 2011; Tao 2026; Rantila 2026; Barsuhn 2025.
12. **Network limits hit.** jyx.jyu.fi (Rantila full text) returned 503. The IUSCA 2021 hypertrophy
    position stand (Schoenfeld et al.) was not retrieved, and NSCA rest guidance was not read
    directly. Longo 2022 rest trial numbers are taken from Singer 2024.
