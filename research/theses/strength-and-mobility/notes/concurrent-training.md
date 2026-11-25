# Chapter 9 research notes: Concurrent training and conditioning

Researcher notes behind `chapters/09-concurrent-training.md`. Searched 2026-11-24 (PubMed E-utilities,
Europe PMC search until it returned 503s, PubMed Central full texts, publisher and author PDFs, web
search including an extended sweep for 2025-2026 papers and SportRxiv preprints). Every source has a
record in `evidence/sources/<id>.yml` (58 new records, plus chapter 9 findings added to the existing
`winwood-2011-strongman-practices`).

**Tags.** Each finding carries `[@id]`, a grade (established | promising | contested | speculative |
convention) and the read level of the number: **FT** = full text read, **ABS** = abstract only, **SEC**
= number quoted from another paper. Only FT numbers may be stated as verified.

**Full texts read (20):** Schumann 2022, Lundberg 2022, Petré 2021, Huiberts 2024, Eddens 2018, Gao &
Yu 2023, Chen 2024 (network MA), Mikkonen 2024, Baar 2014, Fyfe 2016 (Front Physiol), Fyfe 2018 (Sci
Rep), Lee 2020, Shamim 2018, Petré 2023, Petré 2024, Gomes 2025 (J Sports Sci, accepted PDF),
Tundidor-Duque 2026, Lundberg 2024 (VO2max and set recovery), Wang 2026 (elite HIRT review),
Pistilli 2026 (model). **Not accessible (abstract only), but load-bearing:** Held 2026 umbrella review
(paywalled), Wilson 2012, Sabag 2018, Murlasits 2018, Conceição 2026, Kikuchi 2026, Ferraro-Farro
2026, Coffey & Hawley 2017 (PMC copy returned no body text).

**Population caveat that runs through the chapter.** The concurrent literature is dominated by
untrained or "recreationally active" young men, 6-12-week interventions and lower-limb tests.
Schumann 2022 could only split "untrained" vs "active" because reporting was too poor to identify
well-trained people [@schumann-2022-concurrent] (FT). Huiberts 2024 found highly strength-trained
athletes essentially absent and only four hypertrophy studies [@huiberts-2024-concurrent-sex] (FT).
The umbrella review concludes that data in highly trained and elite athletes "remain scarce"
[@held-2026-concurrent-umbrella] (ABS). The one recent trial in genuinely trained lifters (squat
1RM at least 1.5 x body mass) found clear interference [@gomes-2025-load-velocity] (FT). Every
statement about competitive strength athletes is therefore an extrapolation, and the extrapolation
runs against the reassuring pooled averages.

---

## RQ1. Does concurrent training blunt maximal strength, hypertrophy or explosive strength?

### The founding observation

- **Hickson 1980:** heavy leg strength training 5 d/wk plus very high-volume endurance training
  6 d/wk (cycling intervals at VO2max and runs "as fast as possible" for up to 40 min). Strength rose
  in step with strength-only training for ~7 weeks, then plateaued and fell in weeks 9-10. VO2max rose
  ~25% (cycle) and ~20% (treadmill) in both endurance groups [@hickson-1980] (established as a
  historical observation; ABS). Baar's retelling of the study's design: about 11 sessions a week,
  order not standardised, 15 min to 2 h between modes [@baar-2014-concurrent] (FT). The dose was
  extreme, and the result is about what happens at very high combined loads in untrained people. It
  does not describe a typical lifter adding two or three conditioning sessions.
- **Sale 1990:** with moderate, "hybrid" protocols (3 d/wk; high-rep leg press; 3-min intervals at
  90-100% VO2max), concurrent training did not interfere with strength or endurance [@sale-1990-concurrent]
  (promising, ABS). The early literature split on dose from the start.

### Meta-analytic outcomes (pooled average, mostly untrained or recreational)

| Outcome | Best estimate | Source | Grade, read level |
|---|---|---|---|
| Maximal strength (lower body) | SMD -0.06 (95% CI -0.20 to 0.09), 37 studies, I2 = 0% | [@schumann-2022-concurrent] | promising, FT |
| Whole-muscle hypertrophy | SMD -0.01 (95% CI -0.16 to 0.18), 15 studies, I2 = 0% | [@schumann-2022-concurrent] | established, FT |
| Explosive strength (jump, RFD, leg-press power) | SMD -0.28 (95% CI -0.48 to -0.08), 18 studies, I2 = 35.8% | [@schumann-2022-concurrent] | promising, FT |
| Fibre hypertrophy (type I + II) | SMD -0.23 (95% CI -0.46 to -0.00), p = 0.050, 15 studies, I2 = 58.6% | [@lundberg-2022-fiber-concurrent] | promising, FT |
| Type I fibres / type II fibres | -0.34 (-0.72 to 0.04) / -0.13 (-0.39 to 0.12) | [@lundberg-2022-fiber-concurrent] | promising, FT |
| Lower-body strength, men vs women | Men -0.43 (-0.64 to -0.22); women 0.08 (-0.34 to 0.49); difference p = 0.03 | [@huiberts-2024-concurrent-sex] | promising, FT |
| Power, pooled | SMD -0.35; men -0.27 (-0.55 to 0.01), women -0.52 (-0.98 to -0.06) | [@huiberts-2024-concurrent-sex] | promising, FT |
| Lower-body 1RM by training status | Trained -0.35 (-0.59 to -0.11); moderately trained -0.20 (-0.42 to 0.02); untrained 0.03 (-0.29 to 0.35) | [@petre-2021-concurrent] | contested, FT |
| HIIT + RT vs RT, lower-body strength | ES -0.248, p = 0.049; no effect on hypertrophy or upper body | [@sabag-2018-hiit-concurrent] | promising, ABS |
| Umbrella (17 MAs, 144 studies, 1492 participants) | CT vs RT: strength, power, hypertrophy "comparable"; aerobic capacity SMD 0.77 in favour of CT | [@held-2026-concurrent-umbrella] | promising, ABS |
| Wilson 2012 (21 studies, 422 within-group ES) | Within-group ES ST vs CT: hypertrophy 1.23 vs 0.85; strength 1.76 vs 1.44; power 0.91 vs 0.55 (only power significantly different) | [@wilson-2012-concurrent] | promising, ABS |

**How to read this together.**

1. **Whole-muscle hypertrophy is the most robust "no interference" finding.** Zero heterogeneity
   in Schumann; no CT type differed from RT in Chen's network MA (SMDs -0.08 to 0.15, all CIs
   spanning zero) [@chen-2024-concurrent-nma] (FT); no comparison differed in Monserdà-Vilaró
   (SMD < 0.03) [@monserda-vilaro-2023-hiit-hypertrophy] (ABS); comparable in the umbrella review.
   Some trials show more growth with added cycling (quadriceps volume +14% vs +8% in a within-subject
   design) [@lundberg-2013-aerobic-hypertrophy] (ABS), and cycle training alone can grow muscle in
   untrained people [@konopka-2014-aerobic-hypertrophy] (ABS). Caveat: this holds for short studies
   in mostly untrained people, at modest aerobic doses, measured with imaging. Fibre-level data hint
   at a small cost (Lundberg 2022), and in trained men the CSA gain was +17.0 +/- 13.0% (R) vs
   +8.8 +/- 9.4% (CT), with no interaction test reported in the abstract
   [@gomes-2026-trained-morphology] (ABS).
2. **Maximal strength: no detectable average penalty, but the average hides the subgroups that matter
   here.** Schumann's null (I2 = 0%) sits beside Petré's trained-subgroup penalty, Huiberts' male
   penalty of -0.43, and Sabag's -0.25 for HIIT. Fyfe 2016 found leg-press 1RM gains of 38.5% (RT) vs
   28.7% (HIT+RT) and 27.5% (MICT+RT), an ES of 0.40-0.60 favouring RT [@fyfe-2016-intensity] (FT).
   Gomes 2025, in trained men (squat >= 1.5 x BW, 11 wk), found squat 1RM +15.6 +/- 3.7% (R) vs
   +8.1 +/- 6.5% (CT), group x time p = 0.003 [@gomes-2025-load-velocity] (FT). Conceição 2026 found
   smaller strength gains with CT in untrained men despite intact protein synthesis and hypertrophy
   [@conceicao-2026-hiit-mps] (ABS). Grade for "concurrent training does not blunt maximal strength":
   promising for untrained and recreational people; **contested** for trained men and same-session
   designs.
3. **Explosive strength and RFD are the most consistently blunted quality.** It is blunted in Wilson
   (power), Schumann (-0.28), Huiberts (-0.35 pooled) and Fyfe 2016 (CMJ RFD ES 0.72), and Häkkinen
   2003 found no RFD gain with concurrent training even at low frequency (2+2 d/wk), while 1RM (+21% vs
   +22%) and CSA rose equally [@hakkinen-2003-concurrent] (promising, ABS). Shamim 2018: Wingate peak
   power 10.8 vs 12.5 W/kg, p = 0.053, despite equal 1RM and hypertrophy [@shamim-2018-protein-concurrent]
   (speculative, FT). Two 2026 meta-analyses qualify this for sprint-type intervals: SIT did not blunt
   jump (SMD 0.11) [@ferraro-farro-2026-sit] (ABS), and in Kikuchi 2026 SIT/repeated sprints did not
   blunt CMJ (SMD 0.14) whereas short and long HIIT did (SMD -0.53, p = 0.006)
   [@kikuchi-2026-hiit-concurrent] (ABS). Grade: promising that typical aerobic or HIIT work blunts
   explosive-strength gains by a small amount (SMD ~0.3); speculative that sprint-type conditioning is
   exempt.

### Mechanisms for the outcome pattern (why size survives but speed and maximal force can suffer)

- **Neural and quality-of-training mechanisms fit the data better than a molecular block on growth.**
  The RFD deficit in Häkkinen 2003 came with no rise in early (0-500 ms) EMG, i.e. an impaired rate
  of motor-unit recruitment and discharge rather than impaired maximal activation. Schumann 2022
  argues that residual fatigue from aerobic work reduces the *quality* (velocity, intent) rather than
  the *quantity* of strength work, which would spare hypertrophy (volume-driven) but cost explosive
  and maximal strength (quality-driven) [@schumann-2022-concurrent] (FT; mechanism speculative).
  Acutely, endurance and concurrent sessions reduced spinal motoneuron responsiveness (H-reflex) and
  twitch properties, and endurance work reduced rate of torque development more than resistance work
  [@gomes-2025-acute-neural] (speculative, ABS). Over 11 weeks in trained men, CT blocked the RTD,
  EMG and V-wave gains during a maximal-strength block but allowed them during a later
  explosive-strength block [@gomes-2025-neural-training] (speculative, ABS).
- **Strength is more sensitive to interference than hypertrophy, partly for measurement reasons.**
  Strength changes are larger and more specific than hypertrophy changes in most trials, so studies
  are better powered to detect interference in strength; measure specificity and training status
  shape the result [@fyfe-2018-methodology] (promising, ABS).
- **Fibre-type logic.** Low-to-moderate-intensity aerobic work mainly recruits type I fibres, which
  is where Lundberg found the fibre-level penalty (SMD -0.34, running -0.81). Running adds eccentric
  and stretch-shortening load and more inflammatory stress than cycling [@lundberg-2022-fiber-concurrent]
  (FT; speculative mechanism). Other proposed contributors to the RFD deficit include changes in
  pennation angle and fascicle length and in patellar tendon CSA (cited within Schumann 2022, SEC).
- **Sex.** Men may show more interference because they have larger, more type II-dominant fibres and
  greater fatigability, and because of the inverse relationship between fibre size and oxidative
  capacity [@huiberts-2024-concurrent-sex] (FT; speculative mechanism). Mikkonen 2024 found no study
  designed to test interference in women [@mikkonen-2024-females-concurrent] (FT).

### Disagreements

- **Is there an interference effect at all?** The "contrary evidence" view
  [@murach-2016-concurrent-hypertrophy] (ABS) and the Conceição 2026 title ("little evidence of an
  'interference effect'") hold for hypertrophy and molecular markers. Coffey & Hawley 2017 still state
  that "chronic training studies provide robust evidence that endurance exercise can attenuate muscle
  hypertrophy and strength" [@coffey-2017-concurrent-review] (ABS). Both camps are partly right: the
  disagreement dissolves once outcome (size vs strength vs speed), dose and training status are
  specified.
- **Wilson 2012 vs Schumann 2022 on hypertrophy.** Wilson found hypertrophy ES lower with CT (0.85 vs
  1.23) and negative correlations with endurance frequency and duration. Schumann attributes the
  difference to Wilson's analysis of 72 separate within-group effects (inflating n), inclusion of fibre
  CSA and uncontrolled studies, and correlational moderators [@schumann-2022-concurrent] (FT). Read
  Wilson's moderator correlations as hypothesis-generating.
- **Petré 2021 vs Schumann 2022 on training status.** Petré found a trained-only penalty. Schumann did
  not, but could not separate well-trained from "active". Schumann notes Petré entered multi-arm
  studies more than once and that the direction of the training-status effect was similar in both
  [@schumann-2022-concurrent] (FT). Petré's trained category was also 14/15 running and 11/15
  interval-based [@petre-2021-concurrent] (FT), so status is confounded with modality and intensity.
  Huiberts, using a physiological classification, found no strength-status moderation
  [@huiberts-2024-concurrent-sex] (FT). Status remains **contested**.
- **The umbrella review's precision.** Held 2026 reports "comparable" strength, but a secondary web
  summary (unverified) says the CT vs RT strength estimate moves from 0.17 to -0.12 when one meta-
  analysis is dropped. The reported sequence SMD of 1.69, described as a "trend", is implausibly large
  [@held-2026-concurrent-umbrella] (ABS). Treat umbrella numbers as provisional until the full text is
  read.

### Unknown

- Long-term (> 6 months) effects in competitive strength athletes; no trial exists.
- Whether small per-block deficits (e.g. Gomes 2025: -7.5 percentage points of 1RM over 11 wk)
  accumulate across years or are recovered in later specific blocks.
- Upper-body interference is rarely studied and appears negligible (Sabag; Fyfe 2016 bench press), but
  most data are lower-body with lower-body aerobic modes.

---

## RQ2. Which moderators matter?

### Same session vs separated sessions (time between modes): the most consistent moderator

- Explosive strength: blunted when modes are <= 20 min apart (SMD -0.31, 95% CI -0.62 to -0.01) but
  not when separated by >= 3 h [@schumann-2022-concurrent] (promising, FT).
- Maximal strength in trained individuals: same session ES -0.66 (95% CI -1.08 to -0.25) vs separate
  sessions (> 2 h) -0.10 (95% CI -0.43 to 0.23) [@petre-2021-concurrent] (promising, FT).
- Rugby players, 7 wk, strength always first: 1RM gains were lower with 0 h than with 6 h or 24 h
  between modes, and 24 h gave the best VO2peak gain [@robineau-2016-recovery] (promising, ABS).
- Acute: leg-press repetitions at ~75% 1RM were reduced 4 h and 8 h after cycling but not at 24 h
  [@sporer-2003-aerobic-recovery] (ABS). In elite female hockey players, 10 min after very intense
  intervals peak force fell 7%, peak RFD 17% and jump height 4%; there was no impairment at 6 h or
  24 h [@petre-2024-hiit-recovery] (promising, FT). Strength and HIIT sessions each depressed
  isometric mid-thigh-pull force for 6-24 h [@grammenou-2024-fitness-recovery] (ABS).
- With ~3 h between modes, both orders matched RT for 1RM (+24-28%) and lean mass (+3-4%)
  [@lee-2020-order] (FT).
- Mechanism (convention/speculative): Baar's rule of >= 3 h between high-intensity endurance and
  lifting rests on AMPK returning to baseline within ~3 h while mTORC1 activity after lifting can last
  >= 18 h [@baar-2014-concurrent] (FT). The behavioural data point to residual neuromuscular fatigue,
  which recovers over roughly 6-24 h depending on intensity and muscle overlap, as the more practical
  constraint.
- **Synthesis grade: promising.** Separating modes by at least ~3 h (better 6 h or more, or different
  days for hard lower-body work) removes most measurable interference for strength and power.

### Order within a session

- Lower-body dynamic strength favours resistance first: WMD 6.91% change (95% CI 1.96 to 11.87), 10
  studies, 245 participants; no order effect for static strength (-0.04%), hypertrophy (1.15%) or
  VO2max [@eddens-2018-sequence] (promising, FT). Murlasits: +3.96 kg (95% CI 0.81 to 7.10) for
  strength first; VO2max unaffected (0.39 ml/kg/min, -1.03 to 1.81) [@murlasits-2018-sequence]
  (promising, ABS). Gao & Yu: SMD 0.19 (0.02 to 0.37), 19 RCTs, with the benefit concentrated in older
  adults, women and programmes > 8 wk; no order effect on power or VO2max [@gao-2023-sequence]
  (promising, FT).
- Umbrella: "no significant effect" of sequence, with a trend favouring RT first
  [@held-2026-concurrent-umbrella] (ABS). Schumann found the explosive-strength penalty regardless of
  order [@schumann-2022-concurrent] (FT).
- Elite bandy players: HIIT before flywheel RT reduced power output during lifting; 7-week gains did
  not differ, but the largest isometric squat gain was with RT first and the training-quality penalty
  grew in later weeks [@petre-2023-flywheel-hiit-order] (speculative, FT).
- Counterpoint: with ~3 h separation, RT followed by HIIT attenuated CMJ displacement (-5.1 +/- 4.3%),
  force and power compared with RT alone [@lee-2020-order] (speculative, FT). Order may matter
  differently for power than for 1RM.
- Mechanism: the order effect appears for dynamic 1RM (a skilled, fatigue-sensitive test) and not for
  isometric strength or size, consistent with prior endurance work degrading the quality of the
  lifting session rather than with a structural block. Glycogen and PCr depletion from prior endurance
  work are also proposed [@chen-2024-concurrent-nma] (FT, narrative).
- **Synthesis grade: promising (small effect).** If one session must contain both, lift first. The
  advantage is a few percent of 1RM and matters most when strength is the priority.

### Modality (cycling vs running) and intensity (HIIT vs continuous vs sprint intervals)

The evidence conflicts. Grade: **contested**.

- Running worse: Wilson 2012 (running, not cycling, produced decrements in hypertrophy and strength)
  [@wilson-2012-concurrent] (ABS). Lundberg 2022: running vs type I fibre growth, SMD -0.81 (3
  studies) [@lundberg-2022-fiber-concurrent] (FT).
- Cycling worse or no difference: Sabag 2018, cycling HIIT -0.377 (p = 0.074) vs running HIIT -0.176
  [@sabag-2018-hiit-concurrent] (ABS). Chen 2024 network MA, lower-body strength: HIIT running -0.08,
  HIIT cycling -0.18, continuous running -0.25, **continuous cycling -0.38 (-0.62 to -0.14)**
  [@chen-2024-concurrent-nma] (FT). Schumann 2022: no modality effect once one influential study was
  removed [@schumann-2022-concurrent] (FT).
- Intensity: in a work-matched comparison, HIIT and continuous cycling caused similar 1RM interference;
  HIIT blunted lean-mass gain more (+1.8% vs +4.1% RT) [@fyfe-2016-intensity] (FT). Monserdà-Vilaró:
  fibre hypertrophy was reduced only when HIIT was included (SMD > 0.33) [@monserda-vilaro-2023-hiit-hypertrophy]
  (ABS). Sprint intervals (<= 30 s all-out) do not appear to interfere with strength or jumps and
  raise VO2max (SMD 0.78) [@ferraro-farro-2026-sit; @kikuchi-2026-hiit-concurrent] (ABS).
- Mechanisms proposed on each side: running carries eccentric and impact load, causing more damage and
  soreness; cycling is concentric but highly specific to quadriceps (direct local fatigue and glycogen
  depletion in the muscles being trained for strength). HIIT recruits high-threshold motor units
  shared with lifting [@petre-2021-concurrent] (FT), but is short. Sprint intervals are brief, highly
  neural and low-volume, much like a power stimulus.
- Practical reading (convention): what likely matters is how much **local** fatigue and glycogen
  depletion the conditioning imposes on the muscles being trained for strength, and how close it is to
  the lifting. Modality labels proxy for this inconsistently across studies.

### Frequency and volume of endurance training

- Negative correlations between endurance frequency (r -0.26 to -0.35) or duration (r -0.29 to -0.75)
  and strength, power and hypertrophy ES [@wilson-2012-concurrent] (contested, ABS; correlational).
- Trained men, isolated limb: a 1:1 strength:endurance ratio blunted strength and limb girth, a 3:1
  ratio did not [@jones-2013-ratio] (promising, ABS).
- Schumann 2022 found no frequency moderation (> 5 vs < 5 total weekly sessions) [@schumann-2022-concurrent]
  (FT). Low frequency (2+2/wk) preserved 1RM and CSA but not RFD [@hakkinen-2003-concurrent] (ABS).
- Hickson's 11 sessions/wk is the clearest high-dose interference [@hickson-1980] (ABS).
- **Synthesis grade: promising** that interference scales with endurance volume and frequency;
  thresholds are unknown. Two to three moderate sessions a week appear compatible with maximal
  strength and size gains in non-elite people.

### Training status

Contested (see RQ1 disagreements). Coffey & Hawley's hypothesis is that molecular responses become more
mode-specific with training, so trained people may be more sensitive to interference
[@coffey-2017-concurrent-review] (ABS). Fyfe 2018 supports this mechanistically: in a
training-accustomed state, RT alone produced larger mTORC1 and ribosome-biogenesis signalling than CT
[@fyfe-2018-ribosome] (speculative, FT). The trained-lifter trial (Gomes 2025) shows interference
[@gomes-2025-load-velocity] (FT), while Huiberts found no strength-status effect
[@huiberts-2024-concurrent-sex] (FT).

### Sex

Men: lower-body strength penalty -0.43; women: none detected (0.08), difference p = 0.03, but few
female studies [@huiberts-2024-concurrent-sex] (promising, FT). There are no dedicated interference
trials in women [@mikkonen-2024-females-concurrent] (FT).

### Nutrition and energy availability (moderator, brief; chapter 10 covers nutrition)

High protein (2 g/kg/d) during 12 wk, 6 sessions/wk of CT: 1RM, lean mass and VL volume matched RT
[@shamim-2018-protein-concurrent] (FT). There was no low-protein arm, so protein's causal role is
inferred. Baar recommends refuelling between sessions because low glycogen activates AMPK and
restriction activates SIRT1 [@baar-2014-concurrent] (convention, FT).

### Fatigue runs both ways

Resistance work also degrades subsequent endurance-session quality for hours to days
[@doma-2017-alternate] (ABS). In CT, more fatiguing sets (40% velocity loss) gave the most hypertrophy
but the smallest aerobic-speed gains, and lower velocity loss favoured endurance adaptation
[@tundidor-duque-2026-velocity-loss] (speculative, FT).

---

## RQ3. How has the molecular interference model changed?

### The original model: an AMPK-mTOR "switch" (2005-2010)

- Isolated rat muscle: endurance-like low-frequency stimulation activated AMPK (Thr172 ~2-fold) and
  PGC-1alpha without raising protein synthesis. Resistance-like high-frequency stimulation activated
  PKB-TSC2-mTOR, with myofibrillar protein synthesis up 5.3-fold at 3 h. The authors named this the
  "AMPK-PKB switch" [@atherton-2005-ampk-switch] (promising for rodents, ABS).
- Nader proposed that AMPK activated by endurance exercise inhibits mTOR and protein synthesis,
  explaining Hickson-type interference [@nader-2006-concurrent] (speculative, ABS).
- Cell biology: AMPK phosphorylates TSC2 and raptor, and metabolic stress blocks mTORC1
  [@baar-2014-concurrent] (FT, review).

### The revision: human acute studies do not show the switch

- Trained men: interval cycling before resistance exercise raised AMPK activity ~90%, yet S6K1
  activity after the lifting rose ~55% (90 min) and ~110% (180 min) with no difference vs lifting
  alone, and mixed muscle protein synthesis was not reduced. MuRF1 (a breakdown marker) did rise
  [@apro-2015-ampk] (promising, ABS).
- Prior HIIT or continuous cycling did not compromise mTORC1 signalling after resistance exercise,
  though HIIT lowered some growth-related microRNAs (miR-133a, -378, -486) [@fyfe-2016-signalling]
  (ABS).
- Reviews converge: human studies have not observed molecular interference after acute concurrent
  exercise [@fyfe-2014-interference-review] (ABS); "multiple integrated, rather than isolated,
  effectors" are more likely [@coffey-2017-concurrent-review] (ABS); AMPK alone cannot explain the
  effect, and SIRT1 (NAD+/lactate-sensitive, intensity-dependent) and ER stress / the unfolded protein
  response are candidates [@baar-2014-concurrent] (FT).
- Schumann 2022 notes the rodent and cell basis and the failure of human studies (AMPK, metabolic
  stress, protein synthesis) to confirm it, consistent with finding no whole-muscle hypertrophy
  interference [@schumann-2022-concurrent] (FT).

### Newer chronic and integrated measures (2018-2026)

- **Ribosome biogenesis (translational capacity).** After 8 wk, basal markers (45S pre-rRNA, 5.8S and
  28S rRNA) rose more with CT than RT. But in the final, training-accustomed session, RT alone
  produced larger mTORC1 and rRNA-transcription signalling (e.g. RT p-UBF Ser388 +125% at 3 h, ES
  1.15) [@fyfe-2018-ribosome] (speculative, FT). Interpretation: acute signalling studies in untrained
  people may miss interference that appears once responses become mode-specific with training, but
  the net effect on growth is unclear.
- **Integrated protein synthesis and myonuclei.** Sixteen weeks of long-interval HIIT plus RT in
  untrained men: deuterium-oxide MPS rose 48 h post-exercise at weeks 4 and 16 with no group
  difference; satellite cells (type II), myonuclear number and type II fibre CSA rose similarly; MYOD1
  rose post-exercise only in CT. **Strength gains were nonetheless smaller with CT (P = 0.016)**
  [@conceicao-2026-hiit-mps] (promising, ABS).
- Fibre hypertrophy without satellite-cell expansion has also been reported after CT (Shamim 2021,
  Front Physiol; seen in search, not recorded).

### Current model (synthesis)

1. Acute AMPK activation does not measurably block mTORC1 or protein synthesis after a subsequent
   resistance bout in humans. The simple switch is **not supported** (grade: established that the
   rodent switch does not translate directly; ABS-level primary data, FT reviews).
2. Hypertrophy machinery (MPS, satellite cells, myonuclei) is largely preserved with typical CT doses
   (promising).
3. Interference, where it appears, falls mainly on strength and rate of force development. That
   points to **neural, fatigue and training-quality mechanisms** (residual fatigue, reduced
   velocity and intent, spinal excitability), plus possible fibre-type-specific effects in type I
   fibres and catabolic signalling (MuRF1), rather than a single molecular switch (promising).
4. Molecular specificity may sharpen with training, so trained athletes may be more susceptible
   (speculative).

### Disagreements

Coffey & Hawley (2017) still treat interference of hypertrophy as robust, while Murach & Bagley (2016)
and Conceição/Hawley et al. (2026) argue the reverse for hypertrophy. Hawley co-authors both 2017 and
2026, so the 2026 paper is the more current view from that group. Baar (2014) proposes SIRT1 and ER
stress, which are largely untested in human chronic designs.

### Unknown

Mechanisms in highly trained strength athletes; whether chronic molecular differences (ribosome
signalling, miRNA) cause measurable growth differences over months; whether the fibre-type effect is
real or noise.

---

## RQ4. Aerobic and conditioning approaches for strength athletes: what fits, and what are the benefits?

No trial has tested conditioning methods head-to-head in competitive powerlifters, weightlifters or
strongmen. Everything here is extrapolated from the concurrent literature, from acute studies and from
practice surveys. Grades are set accordingly.

### Which approaches fit best (synthesis of RQ1-2)

- **Low-to-moderate continuous work on separate days or >= 3-6 h from lifting, at modest weekly
  volume (2-3 sessions):** compatible with maximal strength and size in the pooled data
  [@schumann-2022-concurrent; @held-2026-concurrent-umbrella; @lee-2020-order] (promising). Baar
  suggests that low-intensity, non-depleting sessions can immediately precede lifting without
  affecting strength signalling [@baar-2014-concurrent] (convention). That conflicts with the
  same-session penalties for explosive strength [@schumann-2022-concurrent], so it is better reserved
  for blocks where explosive qualities are not the priority.
- **Sprint-interval and repeated-sprint work** improves VO2max (SMD 0.78) without blunting strength,
  jump or sprint performance and may even help jumps when sprints are <= 10 s [@ferraro-farro-2026-sit;
  @kikuchi-2026-hiit-concurrent] (promising for no harm; speculative for benefit; ABS). It is
  time-efficient but carries hamstring-injury risk with running sprints, so cycling or sled sprints
  are a convention-level alternative.
- **Longer HIIT intervals (1-4 min)** can blunt jump gains (SMD -0.53) [@kikuchi-2026-hiit-concurrent]
  (ABS) and lean-mass gains [@fyfe-2016-intensity] (FT). Use them sparingly near power or peaking
  blocks (convention).
- **Choose modalities that spare the prime movers being trained** (e.g. upper-body ergometry, rowing,
  sled pushes in moderation, walking or incline walking): convention, consistent with the "local
  fatigue" reading of the modality literature, but not directly tested.
- **Schedule:** hard conditioning after lifting, or >= 6 h before it, or on a different day; avoid hard
  lower-body intervals within ~24 h of heavy or explosive lower-body sessions
  [@petre-2024-hiit-recovery; @robineau-2016-recovery; @sporer-2003-aerobic-recovery] (promising).
- **Periodise emphasis.** Interference in trained men showed up mostly in the explosive or later
  block [@gomes-2025-load-velocity; @gomes-2025-neural-training], and Baar suggests reserving
  off-season blocks for size and strength [@baar-2014-concurrent]. Raise conditioning in general
  preparation and cut it in peaking or power phases (convention).
- **Elite athletes whose sports need large aerobic loads** still gained maximal strength and power
  when heavy resistance training was added [@wang-2026-hirt-elite] (promising, FT; low-moderate
  certainty per authors).

### Strongman-style and resistance-based conditioning

- A strongman session (sled drag, farmer's walk, one-arm dumbbell clean and press, tyre flip, ~30 s
  near-maximal sets) produced heart-rate, energy-expenditure and lactate responses equivalent to a
  duration-matched heavy lifting session; the authors speculate it could provide cardiovascular
  conditioning [@harris-2016-strongman-acute] (promising for acute load, speculative for adaptation;
  ABS). Web-search summaries of the related AUT thesis cite lactate ~7.5-8.5 mmol/L after both sessions
  (SEC; not verified).
- 8 weeks of tyre flips (light or heavy) improved intermittent endurance (ES 0.45-0.66), 6RM bench,
  jumps and agility within groups, with no control group [@wong-2020-tyre-flip] (speculative, ABS).
- Strongman competitors' training centres on maximal strength, power and event practice; farmer's walk,
  log and stones are the most used implements [@winwood-2011-strongman-practices] (convention, ABS).
- The strongman evidence base is biomechanical and descriptive; training adaptations are largely
  unstudied [@hindle-2019-strongman-biomechanics] (established that evidence is thin; ABS).
- Resistance circuit training raises VO2max and bench-press 1RM versus no-exercise controls. Large
  VO2max effects needed ~14-30 sessions over 6-12 weeks, >= 20-30 min per session at ~60-90% 1RM
  [@munoz-martinez-2017-circuit] (promising, ABS; untrained populations).
- Interpretation: implement medleys, sled work and loaded carries are high-intensity intermittent
  efforts. For a strength athlete they build sport-specific work capacity and some aerobic fitness, but
  they add the same local-fatigue cost as HIIT and probably do not substitute for low-intensity work
  for central cardiovascular adaptation (speculative). No trial has compared them with conventional
  aerobic training in lifters.

### Benefits

- **Aerobic capacity itself.** CT improves aerobic capacity relative to RT (umbrella SMD 0.77)
  [@held-2026-concurrent-umbrella] (ABS). VO2max gains are similar to endurance-only training in trained
  and highly trained endurance athletes, blunted slightly in untrained people (-0.35)
  [@huiberts-2024-concurrent-sex] (FT). RT alone can slightly reduce VO2max in trained men (-3.2 +/-
  1.8% over 11 wk) [@gomes-2025-load-velocity] (speculative, FT).
- **Recovery between sets and sessions: weaker than practitioners assume.** In resistance-trained men
  and women, VO2max was only weakly related to within-set fatigue and between-set recovery (P
  0.312-0.998) [@lundberg-2024-vo2max-recovery] (promising, FT). Aerobic fitness does relate to power
  recovery across repeated high-intensity intermittent bouts (larger aerobic contribution, faster PCr
  resynthesis), more for large-muscle-mass efforts [@tomlin-2001-aerobic-recovery] (promising, ABS),
  which fits strongman medleys and high-density hypertrophy work better than heavy singles with long
  rests. Fitter (grip + aerobic power) individuals recovered CMJ at the same rate despite doing more
  work [@grammenou-2024-fitness-recovery] (speculative, ABS). Ten minutes of easy cycling after lifting
  did not change next-day bar velocity, HRV or perceived recovery [@vondrasek-2026-post-cycling]
  (promising for "no effect", ABS). **Grade for "cardio improves recovery for lifters": contested to
  speculative.** The claim is plausible for dense, high-volume or intermittent work and unsupported
  for typical low-density maximal-strength training.
- **Work capacity.** Circuit and strongman-type work raises VO2max and intermittent endurance
  [@munoz-martinez-2017-circuit; @wong-2020-tyre-flip] (promising/speculative). Whether that lets
  lifters tolerate more productive training volume is untested (speculative).
- **Health and longevity (the strongest reason).** Each 1-MET higher cardiorespiratory fitness:
  all-cause mortality RR 0.87 (95% CI 0.84 to 0.90), CHD/CVD RR 0.85 (0.82 to 0.88); low (< 7.9 METs)
  vs high fitness RR 1.70 (1.51 to 1.92) [@kodama-2009-crf] (established, ABS). In 122,007 adults
  tested on treadmills, elite vs low fitness adjusted HR 0.20 (0.16 to 0.24), with no upper limit of
  benefit observed [@mandsager-2018-crf] (established, ABS; observational). Muscle-strengthening
  activity is associated with 10-17% lower mortality, with a J-shape peaking at ~30-60 min/wk;
  **combined** muscle-strengthening and aerobic activity is associated with lower all-cause, CVD and
  cancer mortality than none [@momma-2022-msa] (promising, ABS; observational). For strength athletes,
  who often have high muscle mass but modest aerobic fitness, maintaining CRF is the most defensible
  reason to condition. The interference cost at moderate doses is small by comparison.
- **Hypertrophy co-benefit (untrained only).** Aerobic cycle training can itself grow muscle in
  untrained or older people [@konopka-2014-aerobic-hypertrophy] (ABS). This is unlikely to matter for
  trained lifters.

### Disagreements and unknowns

- Practitioners widely recommend "cardio for recovery"; direct data in lifters are weak or null
  (Lundberg 2024; Vondrasek 2026).
- Optimal minimum dose of aerobic work to maintain or raise CRF in strength athletes without
  measurable interference: unknown.
- Whether strongman medleys are better or worse than conventional aerobic work for lifters: unknown.

---

## RQ5. What does the newest (2024-2026) evidence add?

1. **Umbrella review (Held 2026, 17 MAs, 144 studies):** CT matches RT for strength, power and size,
   improves aerobic capacity (SMD 0.77) and beats ET for strength (SMD 0.59). Sequence is not
   significant, with a trend for RT first. Data in elite athletes are scarce
   [@held-2026-concurrent-umbrella] (ABS). This consolidates the "small or no average interference"
   view, but its estimates may be fragile.
2. **Sex as a moderator (Huiberts 2024):** men -0.43 for lower-body strength, women no penalty;
   untrained but not trained endurance athletes show blunted VO2max with CT
   [@huiberts-2024-concurrent-sex] (FT).
3. **Sprint-type conditioning appears interference-free (2026):** SIT MA (9 RCTs) and HIIT-type MA (21
   studies) agree that SIT and repeated sprints do not blunt strength or jumps, while longer HIIT can
   blunt jumps [@ferraro-farro-2026-sit; @kikuchi-2026-hiit-concurrent] (ABS).
4. **Trained-lifter trials (Gomes 2025/2026):** in men squatting >= 1.5 x BW, CT roughly halved 1RM
   (+8.1% vs +15.6%) and CMJ (+5.4% vs +10.5%) gains over 11 wk, mainly in the later explosive block.
   CT also blocked isometric strength gains and delayed early RFD, yet still allowed jump impulse and
   CSA gains [@gomes-2025-load-velocity] (FT); [@gomes-2026-trained-morphology; @gomes-2025-neural-training]
   (ABS). These are the most relevant data for the thesis population, and they lean toward
   interference.
5. **Molecular (Conceição 2026):** 16 wk of CT with long-interval HIIT left integrated MPS, satellite
   cells, myonuclei and fibre growth intact, yet strength gains were smaller [@conceicao-2026-hiit-mps]
   (ABS). The size/strength dissociation strengthens the neural and quality-of-training explanation.
6. **Neural mechanisms (Gomes 2025 JAP):** acute endurance and concurrent exercise reduced H-reflex
   excitability and contractile function more than resistance work [@gomes-2025-acute-neural] (ABS).
7. **Fatigue management within CT (Tundidor-Duque 2026):** RT velocity-loss threshold trades
   hypertrophy against aerobic adaptation [@tundidor-duque-2026-velocity-loss] (FT).
8. **Recovery claims tested (Lundberg 2024; Vondrasek 2026):** VO2max is weakly related to between-set
   recovery, and brief post-lift cycling did not aid next-day recovery
   [@lundberg-2024-vo2max-recovery; @vondrasek-2026-post-cycling].
9. **Elite athletes (Wang 2026):** heavy RT within concurrent sport programmes improves strength and
   power in elite athletes, at low-moderate certainty [@wang-2026-hirt-elite] (FT).
10. **Modelling (Pistilli 2026):** a theoretical model predicts ~70-80% acute RFD loss after aerobic
    exercise in weightlifters [@pistilli-2026-rfd-model] (speculative, FT). That far exceeds measured
    acute losses (~17% peak RFD at 10 min post-HIIT) [@petre-2024-hiit-recovery], so the model should
    not be cited as evidence of magnitude.
11. **Network MA of modality (Chen 2024):** continuous cycling was the most interfering mode for
    lower-body strength (-0.38) and HIIT running the least (-0.08) [@chen-2024-concurrent-nma] (FT).
    This contradicts the older "running is worse" view.

Preprint sweep: no 2025-2026 SportRxiv/medRxiv concurrent-training preprint relevant to trained
lifters was found beyond the published papers above. The SportRxiv hit was the 2021 preprint of
Schumann 2022.

---

## Load-bearing conclusions for the chapter (with grades)

1. Whole-muscle hypertrophy is not measurably blunted by concurrent training at typical doses
   (established for untrained and recreational populations; unknown for elite lifters).
2. On average, maximal strength is not blunted in mixed populations (promising), but penalties appear
   in men, trained individuals, same-session designs and high endurance volumes (contested to
   promising). The single trial in trained lifters shows a meaningful penalty.
3. Explosive strength and RFD are the most vulnerable qualities (SMD ~-0.3) (promising).
4. Separating modes (>= 3 h, ideally >= 6 h or different days) is the most effective mitigation
   (promising).
5. If in one session, lift first (small benefit for dynamic strength) (promising).
6. Endurance volume and frequency drive interference (promising), with no defined threshold.
7. Modality and intensity effects are inconsistent (contested). Sprint-type intervals appear least
   interfering (promising/speculative).
8. The AMPK-mTOR switch does not explain human interference. Neural, fatigue and quality mechanisms
   fit the outcome pattern better (promising).
9. Aerobic fitness has strong, dose-related associations with mortality (established, observational).
   This is the main reason strength athletes should maintain conditioning.
10. "Cardio improves recovery between sets" is weakly supported for typical strength training
    (contested/speculative).
11. Strongman and circuit conditioning raise work capacity and VO2max in untrained people
    (promising/speculative), but are untested against conventional aerobic training in lifters.

---

## Gaps

1. **No long-term trials in competitive strength athletes** (powerlifters, weightlifters, strongmen)
   comparing strength-only with strength plus defined conditioning doses. The highest-trained cohort
   is men squatting ~1.6 x BW for 11 weeks [@gomes-2025-load-velocity].
2. **Dose-response for interference**: no study maps weekly aerobic minutes or intensity
   distribution against strength or power cost in trained lifters. Wilson's correlations are
   cross-study and confounded.
3. **Women**: no interference trials designed for women; menstrual status rarely reported
   [@mikkonen-2024-females-concurrent; @huiberts-2024-concurrent-sex].
4. **Modality conflict** (running vs cycling) remains unresolved; head-to-head trials that match local
   muscle load are needed.
5. **Strongman and implement conditioning**: only acute and novice data; no trials of medleys, sled
   or carries as aerobic conditioning in trained lifters.
6. **Recovery and work capacity**: the claim that aerobic fitness improves recovery for lifters has
   one null cross-sectional study and one null acute trial. Randomised trials raising VO2max in lifters
   and measuring training volume tolerance are absent.
7. **Upper-body interference** and upper-body conditioning modes (arm ergometry, rowing) are almost
   unstudied.
8. **Mechanisms in trained muscle**: chronic molecular studies (ribosome biogenesis, myonuclei)
   exist only in untrained or recreational men; the fibre-type-specific (type I) penalty needs
   confirmation.
9. **Umbrella review full text** (Held 2026) not read; its strength estimate and the anomalous
   sequence SMD (1.69) need verification.
10. **Methodological quality**: mean PEDro 4.3/10 in the largest MA [@schumann-2022-concurrent]; no
    meta-analysis applied GRADE; most trials have n <= 10 per arm, so non-inferiority claims are
    underpowered. "No significant difference" should not be read as "equivalent".
11. **Periodisation of concurrent training** (block vs mixed emphasis) in strength athletes is
    supported only by mechanism and convention [@baar-2014-concurrent].
12. **Health trade-offs in strength athletes** (e.g. how much CRF is needed to offset cardiometabolic
    risk at high body mass) are not addressed by any direct study.
