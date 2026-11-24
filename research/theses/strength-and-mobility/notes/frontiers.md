# Research notes: Chapter 11, Frontiers: individual response, sex, age and technology

Researcher notes for `chapters/11-frontiers.md`. Population of the thesis: healthy, trained adults
(recreational to competitive strength athletes). Evidence searched through 2026-11-24 (PubMed
E-utilities, Europe PMC, PMC full texts, SportRxiv, bioRxiv API, web search).

Every source cited here has a record in `evidence/sources/<id>.yml`. Each finding carries its grade
(established, promising, contested, speculative, convention) and the read level of the record its
numbers came from: **FT** full text, **Abs** abstract, **Sec** secondary. A chapter may state an
effect size as verified only where the record says FT.

Two warnings apply to the whole chapter:

1. **Most of this literature is on untrained people.** Response heterogeneity, sex comparisons,
   menstrual-cycle trials and older-adult trials are dominated by novices over 6-24 weeks. Where a
   trained-population result exists it is flagged. Extrapolating to trained lifters is the main
   inferential leap of this chapter.
2. **Several "frontier" claims are commercial.** Genetic tests, phase-based ("cycle-syncing")
   programming, readiness scores and AI coaching apps are sold ahead of the evidence. The chapter
   should separate what has validation data from what is marketed.

---

## RQ1. How real is inter-individual variability in strength and hypertrophy responses, and how should it be measured?

### 1.1 The gross variability is enormous, but gross variability is not true variability

- An identical 12-week elbow-flexor programme in 585 untrained adults (FAMuSS) produced biceps CSA
  changes from -2% to +59% and 1RM changes from 0% to +250% [@hubal-2005]. *Established
  (as a description of observed spread); Abs.* There was no control group, so this range mixes
  true response, measurement error and day-to-day biology.
- Pooled Finnish data (n = 287 trained, 72 controls, 19-78 y): size +4.8 +/- 6.1% (range -11 to
  +30%), strength +21.1 +/- 11.5% (range -8 to +60%); age and sex did not change mean response
  [@ahtiainen-2016]. *Promising; Abs.* Its responder counts (29% low responders for size, 7% for
  strength, using the control group's upper 95% CI) are *contested*, because responder counts from
  a single period are biased (below).
- Methodological consensus: observed individual change = true response + measurement error +
  biological (within-subject) variation + within-subject variation in the response itself
  [@hecksteden-2015; @atkinson-2015]. *Established; Abs.* Plots of individual change lines and
  responder counts can show large "individual differences" when every person's true response is
  identical; regression to the mean adds to the illusion [@atkinson-2015]. *Established; Abs.*
- The correct first test is whether the SD of change in the trained arm exceeds the SD of change
  in a time-matched control arm: SD_IR = sqrt(SD_train^2 - SD_control^2) [@atkinson-2015;
  @atkinson-2019]. Only if SD_IR is meaningfully above zero is it logical to look for moderators,
  genes or "non-responders." *Established (methodology); Abs.*
- Responder counts are biased: samples differ in within-subject random variability, and two
  samples with identical true heterogeneity can show different counts purely because their mean
  responses differ; the bias persists even if the threshold is set from test-retest error
  [@atkinson-2019]. A better quantity is the probability that a new person from the population
  responds, derived from SD_IR. *Established; Abs.*
- Classification methods (percentile ranks, SD-from-mean, cluster analysis) create responders and
  non-responders even with no intervention [@dankel-2020-differential-responders]. *Contested
  method; Abs.* Dankel and Loenneke propose classifying only beyond control-group random error; the
  method was itself criticised in a published exchange (not read here).
- Practitioner framework: judge an individual's change with a true-score confidence interval built
  from the typical error of the test and compare with a pre-set smallest worthwhile change
  [@swinton-2018-individual-response]. *Established; FT.*
- Different published classification approaches applied to the same trial agreed on only 11 of
  20 trainees (endurance, VO2max) [@hecksteden-2018]. *Promising; Abs.* Analytical choice alone
  changes who is called a responder.

### 1.2 Evidence that true heterogeneity exists for resistance training

- **Replicated-period trial (best direct evidence).** Untrained adults (n = 20 trained, 27
  controls; 32 +/- 5 y) did two identical 10-week programmes (2 sessions/wk, 4 x 8-10 reps on
  machines) separated by 10 weeks of detraining [@rantila-2025]. *All promising; FT.*
  - SD_IR exceeded zero with confidence limits excluding zero for every outcome (VL CSA
    SD_IR^2 5.114, 95% CL 0.947 to 9.281; leg-press 1RM/BM 0.041, 0.014 to 0.07).
  - Responses were reproducible across periods: VL CSA r = 0.697, biceps CSA r = 0.761, leg press
    1RM r = 0.671 (all p <= 0.001); biceps curl 1RM r = 0.393 (p = 0.095).
  - Non-response below the minimal detectable change was rare and specific: 4 of ~20 (~20%)
    were below MDC in both periods, all on strength outcomes, and no one was a non-responder on
    more than one variable. No repeated size non-responders.
  - Bigger gainers lost more in detraining (biceps CSA r = -0.673; leg press r = -0.488).
- **Replicated within-participant volume trial.** 16 recreationally trained adults, legs
  randomised to ~8 vs ~16 sets/week in two 11-week phases [@robinson-2025-volume-individual].
  *Promising; Abs (bioRxiv preprint, still unpublished per bioRxiv API 2026-11-24).* Higher volume
  gave a modest group-level hypertrophy advantage (1.8 cm2, 95% HDI 0.29 to 3.41) but not 1RM
  (3.48 kg, -5.1 to 12.15). General responsiveness repeated across phases (r 0.67-0.70) but the
  person-specific *benefit of higher volume* did not (r 0.04-0.06). The authors "failed to detect
  irrefutable evidence of meaningful IRV." This is the only replicated design in trained people.
- **Within-subject unilateral design in trained men.** Between-subject variability in CSA change
  (CV 37.8%) was about 40-fold larger than between-leg variability caused by switching training
  variables (0.9%), and nobody responded better to the varied protocol [@damas-2019]. *Promising;
  Abs.* Who you are matters more than which reasonable programme you do.

### 1.3 The contrarian case: much of the "heterogeneity" may be a mean-variance artefact

- A meta-analysis of variation across RT RCTs with controls found more change-score variance in
  training arms than controls on absolute statistics (strength SD_IR 0.91, 95% CI 0.36 to 1.47;
  lnVR 0.9, 0.77 to 1.02; hypertrophy SD_IR 0.42, 0.33 to 0.5; lnVR 0.5, 0.4 to 0.6)
  [@steele-2023-variation]. *Contested; FT (SportRxiv preprint version).*
- But change-score SD rises with the mean change. On the coefficient-of-variation ratio, which
  adjusts for this, training *reduced* relative variation (strength lnCVR -0.61, -0.76 to -0.47;
  hypertrophy lnCVR -0.45, -0.61 to -0.29) [@steele-2023-variation]. *Contested; FT.* The extra
  variance in trained groups could be explained by the larger mean change alone.
- Reconciling the two camps: Rantila's replicated design is the stronger test of *existence*
  (repeatability within people cannot be produced by a mean-variance relationship), while Steele's
  analysis and Robinson's trial argue that *magnitude* is smaller than raw ranges suggest and that
  heterogeneity in response to a *specific variable* (volume, protocol) is not yet demonstrated.
  Defensible synthesis: real, partly stable, person-level differences in general trainability
  exist (*promising*); person-specific optimal programmes are not demonstrated (*speculative*).

### 1.4 "Non-responders" are mostly a dose, duration and outcome problem

- In 110 older adults, every participant improved on at least one outcome and non-response fell
  from 12 to 24 weeks [@churchward-venne-2015]. *Promising; Abs.* (Lenient criterion; no control.)
- In 85 older adults (68 y), 51 showed no hypertrophy beyond 2 x typical error on a 1-set leg,
  yet these same people grew and gained strength on the contralateral 4-set leg [@lixandrao-2024-volume-nonresponders].
  *Promising; Abs.* (Classification and comparison in the same data invite regression to the
  mean; still the strongest RT evidence that raising dose rescues low response.)
- Non-response is better described as "did not respond to this dose on this outcome"; longer
  duration, higher volume or intensity and more outcomes reduce it [@pickering-2019-nonresponders].
  *Promising; FT.* (First author employed by a genetic-testing company, declared.)
- Expert consensus 2026: before attributing low response to biology, check adherence, progressive
  overload, effort, sleep and diet; use multivariate composite responder scores rather than one
  outcome [@roberts-2026-heterogeneity-conference]. *Convention; FT.*

### 1.5 Mechanisms of response heterogeneity

- **Ribosome biogenesis and satellite cells** are the mechanisms most consistently linked to high
  hypertrophic response across laboratories [@roberts-2026-heterogeneity-conference]. *Promising;
  FT.* Supporting primary data: extreme responders (myofibre growth 58%) had more satellite cells
  at baseline, expanded them by 117% and added 26% more myonuclei, while non-responders (0%)
  did not [@petrella-2008-satellite]; MGF and myogenin mRNA rose only in responders
  [@bamman-2007-cluster]. *Promising; Abs.* (Cluster-based classification: groups are forced
  even from noise.)
- **Factors that did not separate responders** in recent work: rDNA copy number, extracellular
  matrix proteins, muscle androgen-receptor content and physiological circulating hormones in
  young adults [@roberts-2026-heterogeneity-conference]. *Promising; FT.*
- **Omics:** in older adults, high responders up-regulated protein-turnover pathways, medium
  responders (growth only at 4 sets) down-regulated proteasome/spliceosome pathways, and low
  responders showed no molecular change at either volume [@lixandrao-2025-molecular].
  *Speculative; Abs.* Proteomic and epigenetic "memory" of prior training exists
  [@hulmi-2025-proteomic; @seaborne-2018], and myonuclei added in training were retained over 16
  weeks of detraining [@cumming-2024]; these are candidate contributors to between-person
  differences in training history rather than innate trainability. *Promising/speculative; Abs.*
- **Fibre typology:** "fast twitchers" (high carnosine by MRS) did not hypertrophy more than "slow
  twitchers" but did fewer reps at a given %1RM and recovered more slowly (conference report,
  Derave data) [@roberts-2026-heterogeneity-conference]. *Speculative; FT (secondary report of
  primary data).*
- **Body build:** baseline mesomorphy predicted little of the response in 40 untrained men
  (effects within the region of practical equivalence) [@parnell-2026-somatotype]. *Speculative;
  Abs (preprint).*

### 1.6 Genetics and polygenic prediction

- Heritability of exercise adaptation is estimated at ~30-70%, yet candidate-gene and GWAS work
  has found few robust variants: in FAMuSS only 2 of ~500 SNPs (MSTN, SPP1) associated with
  hypertrophy; one study found 1 of >315,000 SNPs in 119 men [@roberts-2026-heterogeneity-conference].
  *Established (that robust predictors are lacking); FT.*
- Even baseline grip strength needed 195,180 people to find 16 genome-wide loci
  [@willems-2017-grip-gwas]. *Established; Abs.* Training response, measured in hundreds, is far
  underpowered by comparison; a useful polygenic score would likely need >100,000 trained and
  measured participants [@roberts-2026-heterogeneity-conference].
- A 2024 GWAS (n = 440 inactive adults) built an 11-SNP score said to explain 47.2% of rectus
  femoris response variance, with a combined model AUC 0.809 (95% CI 0.669 to 0.949)
  [@yang-2024-gwas]. *Speculative; Abs.* Liberal threshold (P < 1e-5), score derived and tested
  in the same small cohort, no external replication: a textbook overfitting risk.
- Direct-to-consumer genetic tests have no role in individualised training prescription
  [@webborn-2015-genetic-testing] and the 2026 expert group explicitly told practitioners not to
  weigh genetic tests [@roberts-2026-heterogeneity-conference]. *Established; Abs/FT.*

### 1.7 How to measure individual response (design hierarchy for the chapter)

1. Replicated identical training periods with washout [@rantila-2025; @robinson-2025-volume-individual;
   @hecksteden-2015] (best; muscle memory and incomplete reversibility are the caveats
   [@cumming-2024]).
2. Unilateral within-subject designs with an untrained contralateral control limb to estimate each
   person's biological drift [@chaves-2025-within-individual] (cross-education contaminates the
   control limb; single-muscle isolation lowers ecological validity). *Promising; FT.*
3. Parallel RCT with SD_IR [@atkinson-2015; @atkinson-2019] (population-level only).
4. Repeated testing during training to estimate individual trajectories [@hecksteden-2018].
5. Meta-analysis of variation with lnCVR [@steele-2023-variation].
For coaches: typical error + smallest worthwhile change, repeated measurements, multiple outcomes
[@swinton-2018-individual-response].

### 1.8 What remains unknown (RQ1)

- Whether *trained* lifters show stable person-level differences in rate of gain (only n = 16
  replicated data, null for volume-specific response).
- Whether any variable other than total dose (volume, frequency, load) has a person-specific
  optimum. No replicated evidence yet.
- Whether a replicable polygenic or multi-omic predictor of response exists. None validated.

---

## RQ2. Do men and women respond differently to resistance training, and does the menstrual cycle matter?

### 2.1 Relative hypertrophy is similar; absolute gains slightly favour men

- **Refalo et al. Bayesian MA** (preprinted 2023, published 2025; the "Refalo 2023" lead), 29
  studies, adults 18-45 y [@refalo-2025-sex]. *FT.*
  - Absolute size gains slightly favoured males: SMD 0.19 (95% HDI 0.11 to 0.28), pd 100%.
    *Established.*
  - Relative (percentage) gains were the same: exponentiated lnRR 0.69% (95% HDI -1.50% to
    2.88%). *Established.*
  - Upper-body absolute advantage larger (SMD 0.30, 0.14 to 0.44) than lower body (0.17, 0.056 to
    0.29); relative gains equal in both regions. *Promising.*
  - Training status did not moderate the difference (trained SMD 0.20, 0.01 to 0.38, from only
    13 observations). *Promising for trained people; data sparse.*
  - Type I fibre hypertrophy may favour males (SMD 0.39, -0.03 to 0.81; pd 97%), type II similar
    (0.10, -0.33 to 0.52). *Speculative (8 observations each).*
- Earlier MA: hypertrophy ES 0.07 +/- 0.06 (P = 0.31, I2 = 0; 10 studies); females gained more
  relative upper-body strength (ES -0.60 +/- 0.16, P = 0.002, 17 studies), lower-body strength
  similar (ES -0.21 +/- 0.16, P = 0.20) [@roberts-2020-sex]. *Promising; Abs.*
- Older adults (>50 y, 30 studies, n = 1410): males gained more absolute strength and size (size
  g 0.45, 0.23 to 0.66; lower-body strength g 0.33, 0.19 to 0.47) but relative size gains did not
  differ (g 0.10, -0.04 to 0.23) and women gained more relative lower-body strength (g -0.21,
  -0.33 to -0.10) [@jones-2021-sex-older]. *Promising; Abs.*
- FAMuSS: men 2.5% greater relative CSA gain; women larger relative strength gains [@hubal-2005].
  *Promising; Abs.*
- Large dose-response modelling: adding sex did not improve prediction of strength or hypertrophy
  outcomes across 295 studies [@swinton-2024-dose-response]. *Promising; FT (record by chapter 3).*
- Hypertrophy time-course MA (480 studies, preprint): studies with more males showed larger
  effects [@roberts-2026-hypertrophy-trajectory]. *Speculative; Abs; ecological, scale (absolute vs
  relative) not stated.* This is the one 2025-2026 signal pointing the other way and should be
  presented as unresolved until the full text is available.
- 2026 expert conference: relative hypertrophy similar in untrained; responder distributions show
  no clear sex difference; male advantages emerge with advanced training and absolute measures
  [@roberts-2026-heterogeneity-conference]. *Promising; FT.*
- Competitive powerlifters: women progressed faster (lower baseline), and female masters lifters
  over 59 still gained 2.5-5.0% [@latella-2024-powerlifting-age]. *Promising; Abs.*

**Interpretation for the chapter.** Whether "men respond more" depends on the scale. On percentage
change the sexes are equivalent; on absolute change men gain slightly more because they start
with more muscle. Upper-body absolute differences are larger because the baseline sex gap is
larger in the upper body. Women's larger relative strength gains, especially upper body, likely
reflect lower baseline strength and more room for neural and skill learning, not superior
adaptation per se; no trial has isolated the mechanism [@roberts-2020-sex; @nuzzo-2023-sex-review].

### 2.2 Mechanisms of sex differences

- Baseline sex differences in strength emerge around age 15, are larger in upper than lower body
  and in concentric than eccentric actions, and stem from muscle mass and type II fibre area, not
  voluntary activation [@nuzzo-2023-sex-review]. *Established; Abs.*
- Circulating testosterone, ~10-fold higher in men, does not explain the near-identical relative
  hypertrophy: within the physiological range in young adults, hormone levels and muscle
  androgen-receptor content did not separate high and low responders in men or women
  [@roberts-2026-heterogeneity-conference]. *Promising; FT.*
- Women are usually less fatigable in similar-intensity isometric tasks, but the difference is
  task-specific [@hunter-2014-fatigability]. *Promising; Abs.* Yet repetitions-to-failure at a
  given %1RM showed little moderation by sex in 269 studies [@nuzzo-2024-reps-1rm]. *Promising;
  Abs.* Implication: sex-specific rep tables are not supported; individual testing is.
- Concurrent training blunted lower-body strength gains in men (SMD -0.43, -0.64 to -0.22) but
  not in women (0.08, -0.34 to 0.49) [@huiberts-2024-concurrent-sex]. *Promising; FT (chapter 9
  record).* A sex difference in *interference*, not in resistance-training response itself.

### 2.3 Menstrual cycle: acute performance

- 78 studies: performance trivially lower in the early follicular phase (ES0.5 -0.06, 95% CrI
  -0.16 to 0.04); largest contrast early vs late follicular (-0.14, -0.26 to -0.03); evidence
  quality mostly low; authors: no general guidelines can be formed, individualise instead
  [@mcnulty-2020-menstrual]. *Promising (trivial effect); FT.*
- Resistance-trained women (n = 28, phases verified by LH tests and serum hormones, two
  mesocycles): bar velocities deviated from predicted values by only ~0.01-0.02 m/s across six
  phases; motivation (beta 0.0004, p = 0.021) predicted performance better than phase
  [@munteanu-2026-menstrual-vbt]. *Promising; FT.* The best 2026 data in trained women.
- Umbrella review: no high-quality evidence that phase affects acute strength
  [@colenso-semple-2023-menstrual]. *Promising; FT.*

### 2.4 Menstrual cycle: training adaptation and "phase-based" programming

- The claim that follicular-phase-loaded training is superior [@kissow-2022-phase-based]
  (*contested; Abs*) rests mainly on two small trials (Sung 2014; Wikstrom-Frisen 2017) that used
  basal-body-temperature phase detection, unsupervised sessions and unequal volume
  [@colenso-semple-2023-menstrual]. *Promising (critique); FT.*
- Mechanistic test: myofibrillar protein synthesis responded identically to exercise in late
  follicular (1.33 vs 1.52 %/d, control vs exercised leg) and mid-luteal phases (1.28 vs 1.46
  %/d); phase P = 0.213, interaction P = 0.299; no phase effect on breakdown or metabolome
  [@colenso-semple-2025-mps]. *Promising; FT.* (n = 12; 6-day windows.)
- **Practice-changing 2026 RCT:** 24 eumenorrheic women, within-participant unilateral design over
  three cycles (~12 weeks); high volume concentrated in follicular or luteal phase vs continuous
  training. All training beat control (p < 0.001) for thigh lean mass, VL CSA, FFM, 1RM; no
  differences among training conditions (all p >= 0.17); volume-load, not phase, related to
  adaptation [@dsouza-2026-menstrual-rct]. *Promising; Abs.* Shares authors with the
  Colenso-Semple papers (same McMaster group), so independent replication is still needed.
- Mechanistic reason the cycle probably matters little: oestradiol and progesterone fluctuations
  last days, while hypertrophy integrates weeks of protein balance; cycle and phase lengths vary
  within women by more than 7 days and ovulation is not guaranteed each cycle, so calendar
  "phase" prescriptions often target the wrong hormonal state [@colenso-semple-2023-menstrual].
  *Established (variability); FT.*
- Disagreement: the Copenhagen group (Kissow, Hostrup) argues an oestrogen-mediated anabolic and
  recovery advantage in the follicular phase; McMaster-led authors (Colenso-Semple, D'Souza, Phillips,
  with Elliott-Sale on the 2023 review) find no effect on MPS or adaptation. The weight of
  2025-2026 direct evidence favours the null, but samples are small and largely untrained.

### 2.5 Hormonal contraception

- Oral contraceptive use did not alter hypertrophy (0.01, 95% CI -0.11 to 0.13), strength (0.10,
  -0.08 to 0.28) or power (-0.04, -0.93 to 0.84) adaptations; 8 studies, 325 women; no data on
  non-oral methods [@nolan-2024-contraceptive]. *Promising; FT.*
- Acute performance: OCP users might perform slightly worse than naturally menstruating women but
  any effect is most likely trivial (probability of >= small effect favouring natural cycles 0.19-0.40);
  83% of studies moderate to very low quality [@elliott-sale-2020-ocp]. *Promising; FT.*

### 2.6 What remains unknown (RQ2)

- Sex differences in *highly trained* lifters' rate of hypertrophy: 13 observations in the main MA.
- Whether the type I fibre sex difference is real (8 observations).
- Phase-based training in trained women and in athletes with symptomatic cycles; effects of
  progestin-only, implant, IUD and injectable contraception on adaptation (no data).
- Peri- and post-menopausal transitions in trained women: only indirect data
  [@nunes-2024-volume-older-women; @latella-2024-powerlifting-age].

---

## RQ3. What changes with age, and what is the minimum effective training for older adults?

### 3.1 Older adults remain highly trainable

- Very elderly (>= 75 y; 22 RCTs): strength ES 0.97 (95% CI 0.50 to 1.44); >= 80 y 1.28 (0.28 to
  2.29); whole-muscle hypertrophy 0.30 (0.10 to 0.50); fibre hypertrophy and handgrip not
  significant; few adverse events [@grgic-2020-very-elderly]. *Established (strength), promising
  (size); Abs.*
- Healthy older adults (25 RCTs): strength SMD 1.57 but morphology only 0.42 [@borde-2015-older-dose].
  *Established; Abs.* Strength gains outpace size gains with age, consistent with large neural
  contributions in deconditioned muscle.
- Age did not change mean responses in a 19-78 y pooled cohort [@ahtiainen-2016] and the 2026
  hypertrophy-trajectory MA found no consistent age interaction [@roberts-2026-hypertrophy-trajectory].
  *Promising; Abs.* Chronological age does not guarantee blunted response
  [@roberts-2026-heterogeneity-conference]. *Promising; FT.*
- Competitive powerlifters retain or still gain strength into their 60s; only male lifters over 69
  showed slight losses (~0.35%/y) [@latella-2024-powerlifting-age]. *Promising; Abs;
  survivor bias.* This is the trained-population evidence most relevant to the thesis.
- Gains are lost on cessation: detraining d -0.83 (-1.30 to -0.36), larger after 31-52 weeks
  (d -1.11) than 12-24 weeks (d -0.60, n.s.) [@grgic-2022-detraining-older]. *Promising; Abs.*

### 3.2 Mechanisms of age-related differences

- "Anabolic resistance": blunted MPS and ribosome biogenesis after exercise, possibly altered
  mTORC1 sensitivity; dietary protein insufficiency does not appear to be the key feature; lower
  testosterone may matter in older men (testosterone replacement augments training in hypogonadal
  older men); metformin blunted hypertrophy in the MASTERS trial [@roberts-2026-heterogeneity-conference].
  *Promising; FT (secondary account of primary trials).*
- Protein supplementation's benefit for FFM falls with age (-0.01 kg per year, -0.02 to -0.00)
  [@morton-2018-protein]. *Promising; FT (chapter 10 record); between-study regression.*
- Strength and power decline up to eight times faster than muscle mass and predict function and
  mortality better, so programmes for ageing lifters should prioritise strength and power
  [@fyfe-2022-minimal-dose]. *Promising; Abs.*

### 3.3 Dose for older adults: intensity, volume, minimum

- Higher intensity (>= 70% 1RM) beat lower intensity for leg-press (SMD 0.95, 0.48 to 1.43) and
  leg-extension strength (0.63, 0.09 to 1.17); no differences in BMD, falls or adverse events
  (adverse-event RR 2.42, 0.66 to 8.88) [@shen-2026-intensity-older]. *Promising; Abs.*
- Volume: postmenopausal/older women gained more lean mass with higher-volume programmes (g 0.52,
  0.27 to 0.77) than lower-volume (0.34, 0.14 to 0.53); GRADE low [@nunes-2024-volume-older-women].
  *Promising; Abs.* Four sets rescued hypertrophy in older adults who did not respond to one set
  [@lixandrao-2024-volume-nonresponders]. *Promising; Abs.*
- Classic dose-response (healthy older adults): best strength effects with 50-53 week programmes,
  70-79% 1RM, 2-3 sets of 7-9 reps, 2 sessions/week [@borde-2015-older-dose]. *Promising; Abs.*
- Minimum effective dose: low-volume high-load or frequent low-load "exercise snacks" improve
  strength and function in younger and older adults [@fyfe-2022-minimal-dose] (*promising; Abs*);
  trained men gain 1RM from a single set of 6-12 reps to failure 2-3x/week
  [@androulakis-korakakis-2020-minimum-dose] (*promising; Abs, chapter 3 record*); once-weekly
  single-set training produced long-term strength gains with a plateau after 1-2 years
  [@steele-2023-minimal-dose-longitudinal] (*promising; Abs*). For strength, one fractional set
  per week already exceeds the smallest detectable effect [@pelland-2026-volume-frequency]
  (*promising; FT, chapter 3 record*).
- Guidelines: individualised, progressive training including power for older adults
  [@fragala-2019-nsca]; exercise prescribed like medicine with dose control [@izquierdo-2021-icfsr].
  *Established (as consensus); Abs.*

Synthesis: for maintenance and strength in older lifters, the minimum is roughly 1-3 hard sets per
major movement, 1-2x/week, with heavy loading (>= 70% 1RM) for strength; more volume buys more
hypertrophy and rescues low responders. *Promising.* The thesis should not present a single
"minimum" number as established: trials are short and mostly in untrained or clinical older
adults.

### 3.4 Youth and adolescents

- Youth athletes (6-18 y, 43 studies): strength and jump SMDwm 0.8-1.09; sprint, agility and
  sport performance 0.58-0.75; largest strength effects with >23 weeks, 5 sets, 6-8 reps at
  80-89% 1RM, 3-4 min rest [@lesinski-2016-youth]. *Established (effectiveness), promising (dose);
  Abs.*
- Supervised resistance training is safe and effective for children and adolescents (international
  consensus) [@lloyd-2014-youth-consensus]. *Established; Sec.*
- Sex differences in strength appear around age 15 [@nuzzo-2023-sex-review], which is when the
  adult pattern of absolute differences begins.

### 3.5 What remains unknown (RQ3)

- Dose-response in *trained* masters lifters (most data are untrained or sarcopenic).
- Whether minimal-dose maintenance holds over years in older adults; retention of myonuclei and
  "muscle memory" in older people [@cumming-2024 is young adults].
- 2025-2026 sarcopenia NMAs exist but concern clinical populations, outside this thesis.

---

## RQ4. Which technologies (VBT devices, wearables, AI programming) have validation evidence?

### 4.1 Velocity-tracking devices

- Linear position transducers are more accurate and reliable than accelerometer/IMU, smartphone
  and optical devices; most validation studies lack a gold-standard criterion and do not separate
  device from biological error [@weakley-2021-devices]. *Promising (LPT superiority),
  established (methodological weakness); FT.*
- 2026 MA (63 sensor studies, 38 prediction studies): pooled validity/agreement ICC 0.91-0.92 and
  reliability ICC 0.90-0.91, LPT more consistent than IMU, but ICCs hide absolute error and
  heterogeneity is large [@claassen-2026-load-velocity]. *Promising; FT.*

### 4.2 Predicting 1RM from load-velocity profiles

- IPD meta-analysis (26 studies, 434 participants): standard error of estimate ~10% of 1RM
  (SEE% 9.8, 95% CI 7.4 to 12.2); predictions systematically overestimate (4.5 kg, 1.5 to 7.4;
  3.7% of 1RM); number of loads and group vs individual minimum velocity threshold made little
  difference; error grows with relative strength (+0.98 kg per 0.1 increase in 1RM/BM in bench)
  [@greig-2023-load-velocity]. *Promising; FT.* Practical reading: useful for tracking trends,
  not a substitute for testing a strong lifter's 1RM.
- Free-weight back squat (15 M, 15 F trained): only individually optimised minimum velocity
  thresholds avoided systematic overestimation; sex did not affect accuracy; limits of agreement
  wide for all methods [@huang-2026-squat-1rm]. *Promising; Abs.*
- 2026 MA: 1RM prediction validity ICC 0.91 (0.72-0.98) from only 9 effects; high relative
  validity but too little absolute-agreement data [@claassen-2026-load-velocity]. *Contested; FT.*
  The two meta-analyses disagree in tone because one reports ICC (ranking) and the other kg error.

### 4.3 Does training with velocity feedback produce better adaptations?

- VBT vs percentage-based training in trained people: strength SMD 0.21 (-0.01 to 0.43), small
  advantages for jump (0.27) and change of direction (0.45) [@wang-2026-vbt]. *Promising; Abs
  (chapter 4 record).*
- Velocity-feedback load regulation did not change strength vs traditional training; low GRADE
  certainty [@orange-2022-vbt]. *Promising; Abs.*
- Velocity-loss-based training ranked above other methods in a network MA [@held-2022-vbt-nma];
  velocity-loss threshold did not change strength but higher thresholds increased hypertrophy and
  impaired jump/sprint, and the literature rests on few labs, mostly Smith-machine work in young
  men [@jukic-2023-velocity-loss]. *Promising/contested; Abs/FT.*
- Mechanism: velocity loss within a set indexes proximity to failure and fatigue; velocity at a
  given load indexes daily readiness. The tool's value is autoregulation and fatigue control, not a
  unique adaptive stimulus.

### 4.4 Wearables and readiness tools

- A smartwatch app recognised exercises in 88.4% of 363 sets, counted squat and deadlift reps
  acceptably but bench poorly, and produced a usable 1RM prediction in only 8.9% of attempts
  [@oberhofer-2021-smartwatch]. *Promising; Abs.*
- HRV-guided training (wearables) improved submaximal physiology slightly in endurance training
  (g 0.296, 0.031 to 0.562) without changing performance (g 0.079) [@duking-2021-hrv]. *Promising
  for endurance; Abs.* No equivalent controlled evidence for HRV-guided *resistance* training was
  found. Commercial "recovery/readiness" scores for strength training: *speculative*.

### 4.5 AI and large-language-model coaching

- ChatGPT (GPT-3.5/4) produced plausible periodised 12-week programmes broadly consistent with NSCA
  guidance, but nearly identical for men and women and in need of expert adjustment
  [@washif-2024-chatgpt]. *Promising; FT.*
- GPT-4 programmes for five profiles were safe but generic, under-individualised and overly
  cautious [@dergaa-2024-gpt4]. *Promising; Abs.*
- Ten coaches rated GPT-3.5 and Gemini hypertrophy/strength plans as moderate; plans barely
  differed between goals; inter-rater agreement was essentially zero (Fleiss' kappa -0.051 to
  0.001) [@havers-2025-ai-plans]. *Promising; FT.*
- Newer versions scored better (ChatGPT-3.5: 2.37; 4o: 3.61; 4.1: 4.14 of 5; seven raters) but
  still required human oversight [@genc-2025-chatgpt-versions]. *Promising; FT.*
- **No randomised trial was found comparing outcomes of AI-generated vs coach-designed or
  template programmes in strength-trained people.** Every study rates programme text, with
  unvalidated rubrics, single prompts and superseded models. Claims that AI coaching improves
  strength or hypertrophy: *speculative*.

### 4.6 What remains unknown (RQ4)

- Outcome trials of AI or app-based adaptive programming.
- Validity of current-generation IMU and camera systems for free-weight lifts at heavy loads.
- Whether any wearable readiness metric improves resistance-training outcomes.

---

## RQ5. 2025-2026 trials, preprints and meta-analyses most likely to change practice

Ranked by likely impact on how trained adults are coached.

1. **Menstrual-cycle phase-based training is unnecessary** [@dsouza-2026-menstrual-rct] (RCT,
   Abs), supported by [@colenso-semple-2025-mps] (FT) and in trained women by
   [@munteanu-2026-menstrual-vbt] (FT). Practice change: train consistently across the cycle;
   adjust for symptoms and motivation, not calendar phase.
2. **Individual response is real but mostly general, not variable-specific**
   [@rantila-2025] (FT), [@robinson-2025-volume-individual] (preprint, Abs), with the 2026 expert
   consensus [@roberts-2026-heterogeneity-conference] (FT). Practice change: do not label anyone a
   non-responder from one block or one outcome; raise dose and check adherence first; ignore
   genetic tests.
3. **Sex: relative hypertrophy equal; train women with the same principles**
   [@refalo-2025-sex] (FT). Practice change: no sex-specific hypertrophy programming.
4. **Dose-response meta-regressions** [@pelland-2026-volume-frequency] (FT, chapter 3) and the
   2026 ACSM position stand [@currier-2026-acsm-position-stand] (FT, chapter 3): set the
   population defaults (volume with diminishing returns; >= 80% 1RM for strength) against which
   individual variation is judged.
5. **Load-velocity validity syntheses** [@greig-2023-load-velocity; @claassen-2026-load-velocity]
   (FT): velocity-based 1RM estimates overestimate by ~4% with ~10% error; use for trends.
6. **Older adults: heavier is better for strength, more volume for size**
   [@shen-2026-intensity-older; @nunes-2024-volume-older-women] (Abs).
7. **Hypertrophy is curvilinear over time** (~7% at 10 weeks; diminishing returns)
   [@roberts-2026-hypertrophy-trajectory] (preprint, Abs). Sets realistic expectations for
   trained lifters and for interpreting "non-response."
8. **AI programme generation improving but unvalidated on outcomes** [@genc-2025-chatgpt-versions;
   @havers-2025-ai-plans] (FT).

Preprints and trials to watch: Robinson et al. replicated volume trial (bioRxiv 2025, unpublished);
SportRxiv hypertrophy-trajectory MA and somatotype study [@parnell-2026-somatotype]; registered
trial NCT06679491 (phase-varied intensity in female athletes, started 2025; no results found).

---

## Cross-cutting disagreements to present in the chapter

| Question | Position A | Position B | Current weight |
|---|---|---|---|
| Is response heterogeneity large and real? | Yes: SD_IR > 0, replicated responses [@rantila-2025] | Largely mean-variance artefact; lnCVR negative [@steele-2023-variation]; no volume-specific IRV [@robinson-2025-volume-individual] | Real but smaller than raw ranges; general not variable-specific |
| Do non-responders exist? | Low responders ~29% for size [@ahtiainen-2016] | None when dose/duration/outcomes increase [@churchward-venne-2015; @lixandrao-2024-volume-nonresponders] | Non-response is outcome- and dose-specific |
| Can genes predict response? | PGS explains 47% [@yang-2024-gwas] | Overfit; GWAS hopelessly underpowered [@roberts-2026-heterogeneity-conference; @willems-2017-grip-gwas] | No validated predictor |
| Do men respond more? | Absolute gains favour men [@refalo-2025-sex; @jones-2021-sex-older]; male-heavy studies larger [@roberts-2026-hypertrophy-trajectory] | Relative gains equal [@refalo-2025-sex; @roberts-2020-sex] | Scale-dependent; equal relative response |
| Should training follow the cycle? | Follicular advantage [@kissow-2022-phase-based] | No MPS or adaptation difference [@colenso-semple-2025-mps; @dsouza-2026-menstrual-rct] | Null favoured, small samples |
| Is VBT 1RM prediction valid? | ICC ~0.91 [@claassen-2026-load-velocity] | ~10% SEE, systematic overestimate [@greig-2023-load-velocity] | Good for ranking/trends, not exact 1RM |

---

## Gaps

1. **Trained populations.** Almost all heterogeneity, sex and menstrual data come from untrained
   adults over 6-24 weeks. Only one replicated-design study includes trained participants
   (n = 16, preprint) and only 13 trained observations inform the sex MA.
2. **Replication of the phase-based training null.** One within-participant RCT (n = 24) from a
   single research group; no trained or athlete sample; no data on symptomatic cycles.
3. **Non-oral hormonal contraception.** No adaptation studies of implants, IUDs, injections or
   progestin-only pills [@nolan-2024-contraceptive].
4. **Peri-/post-menopause in trained women.** Only indirect evidence.
5. **Predictors of response.** No validated genetic, omic or phenotypic predictor; polygenic
   scores would need cohorts orders of magnitude larger than exist.
6. **Person-specific optimal programming.** No replicated evidence that any variable (volume,
   load, frequency, exercise selection) has an individual optimum different from the population
   dose-response.
7. **Older trained lifters.** Dose-response and minimal-dose data in trained masters athletes are
   missing; masters evidence is retrospective competition data with survivor bias.
8. **AI/app coaching outcome trials.** None found; evaluations rate programme text only, with
   poor inter-rater agreement.
9. **Wearable readiness metrics for resistance training.** No controlled trials found; HRV-guided
   evidence is endurance-only.
10. **Current-generation device validation.** Validation lags product cycles; few studies use
    gold-standard criteria at heavy free-weight loads.
11. **Access limitations of this review.** Abstract-only for several load-bearing items
    (dsouza-2026-menstrual-rct, robinson-2025-volume-individual, roberts-2020-sex, jones-2021-sex-older,
    shen-2026-intensity-older, lixandrao-2024-volume-nonresponders, grgic-2020-very-elderly); the
    Steele et al. variance MA was read as its SportRxiv preprint; the published Tenan et al.
    critique of the Dankel-Loenneke method was not read.
