# Verification: Chapter 8, "Connective tissue: tendon, ligament, bone and cartilage"

Independent verification pass, 2026-11-24, of `notes/connective-tissue.md`. Each of the 14
load-bearing claims was checked against its primary sources, using full text where open access
allowed. I also searched for newer or contradicting evidence. The evidence records in
`evidence/sources/` were updated: `checked` was filled in, `read_level` was set to what this pass
read, and wrong numbers, grades or descriptions were fixed. Other chapters' notes in shared records
were kept.

**What this pass read.**
- **Full text**, via the Europe PMC full-text XML, PMC E-utilities or the PMC article page:
  - Bohm 2015, Lazarczuk 2022, Weidlich 2023, Tsai 2024, Heinemeier 2013 and Pang 2026.
  - Houtvast 2026 (results and disclosures).
  - Weidlich 2024.
  - Shaw 2017, from the PMC HTML page. The researcher listed it as unobtainable.
  - Lee 2024 (methods, results and funding), Lee 2025, Nulty 2025 (middle-aged) and Bischof 2024.
  - Warden 2021, Clifford 2020, Challoumas 2023, Samanna 2026 (disc meta-analysis), Ding 2026 and
    Gabbett 2016.
  - Belavy 2017 (partly).
  - Holden 2020, from the authors' accepted manuscript in the Aalborg University repository.
- **Abstract only**, from PubMed:
  - Arampatzis 2007, Bohm 2014, Heinemeier 2016, Miller 2005, Magnusson 2010 and Langberg 1999.
    Langberg 2000 (PMID 10908411) was added for context.
  - Kubo 2010, Massey 2018, Balshaw 2023, Jerger 2022, Paxton 2012 and Robling 2002.
  - Rio 2015, Martyn-St James 2006, Jones 2026, LIFTMOR, Heinonen 2002 and Videman 1995.
  - Owen 2020, Samanna 2026 (ASTEROID disc analysis), Impellizzeri 2020 and 2021, Lauersen 2014 and
    2018, and Aasa 2017.
  - Miyamoto 2025 and Qin 2025, found while trying to refute claims.
- **Not obtainable:**
  - PMC article pages for Miller 2005 and Langberg 1999 returned a browser check.
  - BMJ hosts and Norwegian repository PDFs (Lauersen) did not resolve from this session.
  - The Bohm 2014 publisher PDF returned an HTML page.
  - Lolli 2019 is a letter with no abstract.

**Verdict summary**

| # | Claim (short) | Verdict | Grade after check |
|---|---|---|---|
| 1 | Stiffness and modulus rise far more than CSA; material, not size | confirmed | established (untrained/recreational adults, ≤14 wk) |
| 2 | Strain magnitude, not contraction type; %1RM a poor proxy | corrected (Weidlich sample and population) | promising |
| 3 | ~180 s/wk of high-strain loading suffices; frequency irrelevant | confirmed (wording fix) | promising |
| 4 | 3-s cyclic contractions beat 12-s holds and hopping | confirmed (abstract only) | promising (single unreplicated trial) |
| 5 | Adult tendon core and cartilage collagen essentially not replaced | confirmed with qualifications | established (14C); promising (Houtvast FSR) |
| 6 | Synthesis peaks ~24 h, raised to ~72 h; early net catabolism | corrected | promising (synthesis curve); speculative (net-catabolic window) |
| 7 | Tendon lags muscle; detrains faster; strength can outrun stiffness | confirmed with corrections | contested |
| 8 | Collagen + vitamin C: PINP up at 30 g; tendon effects inconsistent | corrected | contested |
| 9 | "10 min every 6 h" rests on engineered ligament and animal bone | confirmed | speculative (tendon/ligament); promising (animal bone) |
| 10 | Isometrics not uniquely analgesic for tendinopathy | corrected (grade) | promising |
| 11 | Bone adapts slowly and modestly to RT and impact in adults | confirmed with corrections | promising |
| 12 | Running linked to better disc; weightlifting to more degeneration; no RT trial | confirmed | speculative |
| 13 | ACWR should not guide load management | corrected (overstated mechanism wording) | established (no causal or predictive support); promising (artefact explanation) |
| 14 | Strength training cuts sports injuries; strength sports low injury rates | corrected (non-independent estimates) | promising |

---

## Claim-by-claim

### 1. Material, not size, drives tendon stiffening

**Verdict: confirmed.**

**Evidence.**
- Bohm 2015 (full text):
  - 27 studies, 37 interventions, 264 participants.
  - Stiffness SMD 0.70 (95% CI 0.51-0.88; N=37), modulus 0.69 (0.36-1.03; N=17), CSA 0.24
    (0.07-0.42; N=33).
- Lazarczuk 2022 (full text):
  - 61 studies, 763 participants.
  - Stiffness 0.74 (0.62-0.86; 81 groups), modulus 0.82 (0.58-1.07; 38 groups), CSA 0.22
    (0.12-0.33; 68 groups).
  - Meta-regression on the 20 studies that measured all three outcomes: modulus moderated
    stiffness (p<0.001), CSA did not (p=0.19).

**Refutation attempts.** No newer pooled analysis contradicts this. Tsai 2024 (full text) agrees:
over 16 weeks, CSA rose 4.3% while normalised stiffness rose about 33%.

**Qualifications that must travel with the claim.**
- **The SMDs are pre-post within-group changes**, not control-adjusted effects.
- **The interventions were short** (mean 12.9 ± 4.5 weeks in Bohm 2015). Bohm et al. themselves say
  the small CSA effect may reflect short durations.
- **Lazarczuk: 615 of 763 participants were male, and all but one study had n ≤ 15.** The three
  well-trained cohorts showed no stiffness change: strength-trained men, female endurance athletes
  and highly trained runners.

**Corrected wording.** "In mostly untrained or recreational adults, 8-16 weeks of loading raise
tendon stiffness (pooled within-group SMD ~0.70-0.74) and Young's modulus (~0.69-0.82) far more
than CSA (~0.22-0.24). Meta-regression attributes stiffening to modulus, not CSA (established for
this population). Whether trained athletes respond the same way is unknown: the three trained
cohorts showed no change."

### 2. Strain magnitude is the dose; %1RM indexes it poorly

**Verdict: corrected.** The direction stands, but one supporting study is misdescribed.

**Evidence.**
- Arampatzis 2007 (abstract):
  - 11 participants each trained one leg at 4.55 ± 1.38% strain and the other at
    2.85 ± 0.99% strain, for 14 weeks.
  - Only the high-strain leg adapted.
- Lazarczuk 2022 (full text):
  - High strain (~5%): stiffness SMD 1.04 (0.65-1.43), from three intervention groups.
  - Low strain (~3%): no significant change. The strain contrast spans 7 groups (p=0.006).
  - All high-strain groups come from the Berlin group.
  - Matched contraction-mode comparisons did not differ.
- Bohm 2015 (full text): isometric 0.95, concentric-eccentric 0.82, eccentric 1.04, not
  significantly different.

**Weidlich 2023 (full text) does not match the notes.**
- **Sample:** 13 athletes were recruited, but **10 were analysed** (5 men, 5 women; 3 were excluded
  for ultrasound artefacts).
- **Population:** mixed sports (basketball, gymnastics, track and field, soccer, weightlifting),
  with ≥2 years of strength training. These are not "strength-trained athletes" in the
  strength-sport sense.
- **Exercise:** the squats were **partial**, reversing at ~60° knee flexion, with a 1RM specific to
  that range.
- **Strain:**
  - Means rose from 4.7 ± 0.9% (40% 1RM) to 8.22 ± 1.46% (80% 1RM).
  - Individual values ran from 2.6-5.8% at 40% 1RM to 5.1-10.2% at 80% 1RM.
  - Recommending 40-60% 1RM would have overloaded 5 participants (>6.5%) and underloaded 2.
- **Prediction:** R² = 0.858 is agreement within the same 10 people, with no external validation.

**Refutation attempts.**
- No study contradicts the strain-threshold idea.
- No trial has tested the 6.5% upper bound in adults. The ≥9% risk signal comes from adolescents
  (Mersmann 2023).

**Corrected wording.** "Tendon strain magnitude, not contraction type, appears to drive adaptation.
In within-person trials from one Berlin group, ~4.5-6.5% strain stiffened the Achilles tendon and
~3% did not. The pooled high-strain estimate rests on three intervention groups. Relative load
indexes strain poorly. In 10 mixed-sport athletes doing partial back squats (to ~60° knee
flexion), mean patellar tendon strain rose from 4.7% at 40% 1RM to 8.2% at 80% 1RM. Individual
values ranged from 2.6% to 10.2%. (promising)"

### 3. A low weekly dose suffices; frequency does not matter

**Verdict: confirmed** (Tsai 2024, full text). One wording fix is needed.

**Evidence.**
- **Protocols:**
  - One set = 4 × 3 s at 90% MVC, with 3 s relaxation and 2 min between sets.
  - High frequency (HF) = 5 sessions/week, 24-48 h apart. Low frequency (LF) = 2.5/week, 48-96 h
    apart.
  - Low volume = 180 s/week, which is 15 sets/week: 3 sets × 5 sessions or 6 sets × 2.5 sessions.
  - High volume = 300 s/week. The reference protocol (REF) = 5 sets × 4 sessions = 240 s/week.
- **Results:**
  - No systematic effect of frequency or volume. Pooled low volume beat high volume (p=0.04).
  - Normalised stiffness d: HF low volume 1.31 (0.73-1.89), LF low volume 0.85 (0.33-1.38), REF
    0.90 (0.34-1.45), high-volume arms 0.49-0.61, control -0.12.
  - Stiffness was significant at 8 weeks in all arms except HF high volume, and "the major changes
    … occurred within the first 8 weeks".
  - The first 3 weeks were a 70% MVC habituation phase.

**Problems.**
- **Mapping:** the claim pairs "2.5 or 5 times a week" with "(24-48 h vs 48-96 h)", which reverses
  the order. 5×/week is 24-48 h apart; 2.5×/week is 48-96 h apart.
- **Prescription arithmetic:** the notes' practical dose (RQ1 and RQ5: "4-5 sets x 4 reps x 3 s …
  ~180 s/wk, 2-4 sessions/week") does not add up. 4-5 sets × 2-4 sessions = 8-20 sets = 96-240 s.
  The tested 180 s/week dose is 15 sets/week.
- **Material change is inferred.** The authors infer "material" change from stiffness vs CSA;
  modulus was not reported.
- **Design caveats:**
  - Legs were the units: each participant trained two protocols, one per leg.
  - Training used a home device.
  - 20.9% of legs dropped out.
  - Participants were recreationally active young men (6-8 h/week of vigorous activity).

**Corrected wording.** "About 180 s/week of high-strain isometric loading (15 sets/week of 4 × 3 s
at 90% MVC) stiffened the Achilles tendon at least as much as 240-300 s/week. Spreading it over 5
sessions (24-48 h apart) or 2.5 sessions (48-96 h apart) made no systematic difference. Most of the
16-week gain came in the first 8 weeks. (promising; recreationally active young men; untested in
strength athletes)"

### 4. 3-s cyclic contractions beat 12-s holds and hopping

**Verdict: confirmed** (abstract only; the full text was not retrievable).

**Evidence.**
- **Design:**
  - Bohm 2014: groups of N = 14 and 12, controls 13.
  - 14 weeks, 4×/week.
  - Strain ~6.5%, with strain magnitude and volume matched.
- **Results:**
  - The 3-s protocol raised stiffness +57%, modulus +51% and CSA +4.2%.
  - The 12-s protocol raised stiffness +25%, modulus +17% and CSA **+5.3%**.
  - The stiffness and modulus increases were higher with 3-s contractions.
  - Hopping produced only trends: stiffness P = 0.08, CSA P = 0.09.

**Problems.**
- **One unreplicated trial from one lab**, comparing legs within people.
- **The 12-s holds gave slightly more CSA**, so "better" applies to stiffness and modulus only.
- **No newer study found** that tests rate or duration at matched strain.

**Corrected wording.** "At matched strain (~6.5%) and volume, repeated 3-s contractions raised
Achilles stiffness and modulus more than 12-s holds (stiffness +57% vs +25%). One-legged hopping
produced only non-significant trends. CSA gains were small and similar. (promising; one trial,
n=12-14 per comparison, not replicated)"

### 5. Adult tendon core and cartilage collagen are essentially not replaced

**Verdict: confirmed, with qualifications.**

**Evidence.**
- Heinemeier 2013 (full text):
  - 28 forensic Achilles core samples.
  - Tendon 14C matched the atmosphere a **median 8 years after birth**.
  - The "first ~17 years" figure is the authors' formation model (a 0-17-year moving average
    matched to height growth), not a measured age.
  - The authors say core tissue is "practically inert during adult life". Three samples deviated,
    possibly through high turnover.
- Heinemeier 2016 (abstract): 23 people, "virtually no replacement of the collagen matrix after
  skeletal maturity", with or without osteoarthritis.
- Houtvast 2026 (full text):
  - Mixed-protein fractional synthesis rate (FSR), %/day, over 14 days: patellar tendon 0.20 ± 0.10
    vs muscle 1.17 ± 0.23, about sixfold slower.
  - Participants were **68 ± 7-year-olds undergoing knee arthroplasty**, so the tissue came from
    osteoarthritic knees.

**Refutation attempts.**
- No human study contradicts the core finding.
- Animal proteomics (rat Achilles; eLife 2020) shows much faster turnover in the interfascicular
  matrix than in collagen fascicles. This fits the authors' "periphery or non-collagenous matrix"
  explanation.
- No 2023-2026 human deuterium study measuring tendon collagen specifically was found.

**Corrected wording.** "In adults, the collagen of the Achilles tendon core shows almost no renewal
after growth. Bomb-pulse 14C in 28 donors matched levels from childhood, consistent with formation
during the first ~17 years. Articular cartilage collagen is essentially not replaced after skeletal
maturity (established). Whole-tissue protein synthesis in patellar tendon is about sixfold slower
than in muscle (0.20 vs 1.17 %/day), measured in older adults with knee osteoarthritis (promising).
Faster-turning non-collagenous and peripheral pools probably account for the measurable synthesis."

### 6. Acute collagen-synthesis time course and an early net-catabolic window

**Verdict: corrected.**

**Evidence.**
- Miller 2005 (abstract):
  - n = 8 and 6 young men, after **1 h of one-legged kicking at 67% Wmax**, not resistance
    exercise.
  - Synthesis rates were elevated at 6 h and peaked at 24 h; tendon collagen FSR was 0.077%/h.
  - Tendon collagen synthesis was still elevated at 72 h.
- Magnusson 2010 (abstract), a review: synthesis "peaks around 24 h … elevated for about 3 days";
  degradation "seems to peak earlier". It gives no data.
- Langberg 1999 (abstract), 7 runners after 36 km:
  - Peritendinous PICP fell immediately, then rose threefold by 72 h (55 → 165 µg/L).
  - **The degradation marker ICTP fell transiently** in peritendinous tissue.
- Langberg 2000 (abstract), 17 men after a marathon, **plasma** markers: PICP dipped and then
  peaked at 72 h; ICTP rose only briefly immediately after the run.

**Problems.**
- **Langberg 1999 does not support an early degradation peak.** It shows an early dip in
  synthesis, with degradation down, not up.
- **The "net-catabolic window" has never been measured in tendon proper.** It rests on a review
  statement whose underlying data are whole-body or peritendinous markers after prolonged
  endurance running.
- **The 24-72 h synthesis curve comes from one small study** using a non-resistance exercise.
- **Grade:** the notes call the synthesis curve "established"; it should be promising.

**Corrected wording.** "After one bout of prolonged kicking exercise, patellar tendon collagen
synthesis rose by 6 h, peaked at ~24 h and was still elevated at 72 h (one study, n=14; promising).
Reviews describe an earlier rise in degradation and hence an early net-catabolic window. This rests
on circulating and peritendinous markers after endurance running, where the early change is mainly
a dip in synthesis. It has not been measured in tendon proper (speculative)."

### 7. Tendon and muscle adapt on different timescales

**Verdict: confirmed, with corrections.**

**Evidence.**
- **Kubo 2010** (abstract), **n = 8**, isometric knee-extension training, no control group:
  - Strength rose 29.6% at 2 months; tendon stiffness was significant only at 3 months.
  - During detraining, stiffness returned to baseline by 2 months while strength did not change.
- **Massey 2018** (abstract):
  - **Cross-sectional:** men with 4 years of training (n = 16) were compared with untrained men and
    with a 12-week group.
  - Tendon CSA did not differ between groups.
- **Pang 2026** (full text):
  - Strength rose 16.1% and stiffness 24.1%; contrast -0.066 (-0.119 to -0.013).
  - Restricted to controlled designs, the contrast was -0.040 (-0.097 to 0.017).
  - The authors write that the analysis "cannot determine which tissue adapts faster", because it
    compares endpoints, not rates.
- **Weidlich 2024** (full text):
  - Two **non-randomised** teams of adult male volleyball players (10 vs 12).
  - In controls, maximal strain rose over 9 months (p = 0.010), with strength up ~8% and no
    stiffness change.
  - The intervention group's personalised loads averaged 62-68% MVC.

**Corrections.**
- **"Years of heavy training did not enlarge the patellar tendon"** comes from a cross-sectional
  comparison, not a 4-year trial.
- **"Short trials show stiffness keeping pace with strength"** should read: "on average, stiffness
  rose proportionally at least as much as strength by the end of training. Rates cannot be
  compared."
- **The grade stays contested.**

**Corrected wording.** "In 8 people training isometrically, strength rose before tendon stiffness,
and stiffness was lost within 2 months of detraining while strength persisted. Long-term-trained
men did not have larger patellar tendons than untrained men (cross-sectional). Across trials,
stiffness rose at least as much as strength by the end of training, though the comparison cannot
establish rates. In one non-randomised season-long study, strength rose without stiffness and
maximal tendon strain increased. (contested)"

### 8. Collagen or gelatin with vitamin C

**Verdict: corrected.**

**Evidence.**
- **Shaw 2017** (full text, which the notes said was unavailable):
  - 8 men, crossover, 4-day washout, 48 mg vitamin C in all arms.
  - At 4 h, PINP rose 53.9% with placebo, 59.2% with 5 g and **153% with 15 g gelatin**. The 15 g
    arm doubled PINP AUC vs placebo.
  - The authors state the PINP rise is "highly unlikely" to come from tendon or ligament.
- **Lee 2024** (full text): n = 10 resistance-trained men, 50 mg vitamin C.
  - PINP AUC was 267 (30 g) vs 235 (15 g; P = 0.013) vs 219 (0 g; P = 0.002).
  - 15 g vs 0 g: P = 0.225.
  - No funding.
- **Lis 2019** (same lab as Shaw; abstract per notes): 15 g raised PINP ~20%, not significant.
- **Aussieker 2023** (cited in Lee 2024): 30 g collagen **after** exercise did not raise PINP more
  than the comparator.
- **Bischof 2024** (full text):
  - Tendon CSA SMD 0.67 (0.16-1.19; 4 studies, n = 114). Excluding Jerger 2023 makes it
    non-significant (p = 0.058).
  - **"Tendon mechanical properties" (stiffness and modulus pooled together) SMD 0.05 (-0.38 to
    0.48; 4 studies, n = 111)**, Egger p = 0.011, GRADE very low.
  - The search ran to December 2023, so it predates Lee 2025 and Nulty 2025 (both positive).
- **Balshaw 2023** (abstract): 15 g/day, n = 39, MRI, no tendon effect. This is the largest trial
  that combined training with MRI-measured tendon size. Miyamoto 2025 (n = 50, MRI) was larger but
  had no training; it found a shear-wave stiffness rise and no CSA change.
- **Lee 2025** (full text): n = 11, stiffness +15.4% vs +4.6%. A placebo modulus statistic is
  reported inconsistently: t(4) = 0.020 with P = 0.039.
- **Nulty 2025** (full text): n = 20, numbers confirmed.
- **Newer syntheses:**
  - A 2026 systematic review (preprint) found stiffness gains only with 15-30 g/day.
  - No newer pooled tendon-stiffness meta-analysis was found.

**Problems.**
- **"15 g did not" applies to hydrolysed collagen before squats** (Lee 2024). With gelatin before
  rope skipping (Shaw 2017), 15 g doubled PINP; the same lab's replication was null.
- **The SMD 0.05 is not a pure stiffness estimate.** It pools stiffness and modulus.
- **"Largest MRI trial" needs the qualifier "with training".**

**Corrected wording.** "Taking collagen or gelatin with vitamin C about 1 h before loading raises
blood PINP, a marker of whole-body collagen synthesis that is dominated by bone. 15 g gelatin
doubled it in one 8-man crossover, but a same-lab replication was null. In resistance-trained men,
30 g hydrolysed collagen raised it and 15 g did not. Chronic tendon trials are inconsistent. Small
trials, several from one UK lab using 30 g before or after sessions, report larger gains in tendon
stiffness or CSA. The largest training trial with MRI (15 g/day, n=39) was null. The only
meta-analysis (search to December 2023) pooled tendon stiffness and modulus at SMD 0.05 (-0.38 to
0.48), with very low certainty. (contested)"

### 9. The "10 minutes, 6 hours apart" rule

**Verdict: confirmed.**

**Evidence.**
- **Paxton 2012** (abstract), engineered ligament:
  - ERK1/2 signalling was maximal at 10 min of stretch, and cells stayed refractory for up to 6 h.
  - 10 min every 6 h for 7 days gave collagen 5.9% vs 4.8% (continuous stretch) vs 3.1% (control).
- **Robling 2002** (abstract), rats: 4 × 90 cycles 3 h apart beat 1 × 360 cycles (ultimate force
  +87% vs +64%).
- **Warden 2021** (full text): bone cells lose 95% of mechanosensitivity after 20 cycles; more than
  90% is restored after 4-8 h.
- **Tsai 2024** (full text): only between-session spacing was tested (24-48 h vs 48-96 h), with no
  effect.
- **No human study of within-day spacing in tendon or ligament** was found.

**Corrected wording.** As in the notes. Add that the engineered-ligament outcome was guided by a
signalling marker (ERK1/2).

### 10. Isometrics are not uniquely analgesic for tendinopathy

**Verdict: corrected.** The conclusion stands, but the grade is too high.

**Evidence.**
- **Rio 2015** (abstract): 6 volleyball players, pain 7.0 → 0.17 vs 6.33 → 3.75.
- **Holden 2020** (full text, accepted manuscript):
  - Pre-registered crossover, n = 21, powered to detect a 2-point difference.
  - The **0.9-point (0.1-1.7) reduction is the pooled main effect of time across both modes**. It
    was gone by 45 min (0.4, -0.1 to 0.8).
  - No mode × time interaction; responders 4 vs 6.
- **Clifford 2020** (full text): 10 RCTs, 7 of poor quality; immediate pain isometric vs isotonic
  p = 0.19; "limited evidence (level 3)".
- **Challoumas 2023** (full text): pairwise immediate pain in patellar tendinopathy, MD ~1 VAS point
  favouring isometrics, 95% CI -2.57 to 0.5, I² 70%, 3 studies, low strength of evidence.
- **Rio 2017** (Rio's own in-season RCT, per notes): isometrics gave greater immediate analgesia.
- **No 2024-2026 meta-analysis** changing this was found.

**Problem.** "Established" overstates the evidence. The evidence against superiority comes from one
independent crossover and low-certainty pooled analyses. Those analyses still have a point estimate
of about 1 point favouring isometrics, with wide intervals.

**Corrected wording.** "Isometrics are probably not uniquely pain-relieving for tendinopathy. The
large effect in 6 volleyball players did not replicate in an independent pre-registered crossover
(n=21). There, pain fell by 0.9/10 after either isometric or dynamic exercise, with no difference
between modes, and was gone by 45 min. Pooled analyses find no significant superiority (low
certainty; point estimate ~1/10 favouring isometrics). (promising; clinical populations, outside the
healthy-athlete focus)"

### 11. Bone adapts slowly and modestly

**Verdict: confirmed, with corrections.**

**Evidence.**
- **Martyn-St James 2006** (abstract), premenopausal women:
  - Lumbar spine WMD 0.014 g/cm² (0.009-0.019), 0.98%. Femoral neck 0.001 (-0.006 to 0.008).
  - Funnel asymmetry; low methodological quality of all included studies.
- **Jones 2026** (abstract):
  - Two premenopausal RCTs (n = 112), no significant effect at either site.
  - Postmenopausal: FN 0.47, LS 0.36.
- **LIFTMOR** (abstract):
  - **Postmenopausal women with low bone mass**, 65 ± 5 years, n = 101.
  - LS +2.9% vs -1.2%, FN +0.3% vs -1.9%.
- **Warden 2021** (full text): remodelling time course and fatigue figures confirmed.
- **Heinonen 2002** (abstract): 14 vs 14, cross-sectional.

**Problems.**
- **"Older women" should be "postmenopausal women with osteopenia or osteoporosis"**: one trial,
  graded promising, not established.
- **The premenopausal ~1% spine gain comes from an older, bias-prone pool.** The 2026 analysis found
  no significant premenopausal effect, though it had only 2 trials.
- **No RCT data in young trained men or women** were found.

**Corrected wording.** "In adults, resistance and impact training change bone slowly and modestly.
In premenopausal women, an older meta-analysis found ~1% lumbar BMD gain and no femoral-neck
change, with signs of small-study bias. A 2026 analysis of two recent premenopausal RCTs found no
significant effect. In postmenopausal women with low bone mass, 8 months of heavy resistance and
impact training (LIFTMOR) gave +2.9% vs -1.2% lumbar BMD. Remodelling cycles take months, and bone
fatigue life falls steeply with strain magnitude (in vitro and modelling data). (promising)"

### 12. The intervertebral disc

**Verdict: confirmed.**

**Evidence.**
- **Samanna 2026** (full text):
  - 39 studies, 4152 participants.
  - Upright bipedal loading: g 0.31 (0.12-0.50), very low certainty.
  - Combined loading: OR 2.80 for reduced disc signal, low certainty.
  - Leaving out one weightlifting study (Vadalà) gave a combined g of 0.41 (0.01-0.81).
  - The "explosive end-range" subgroup mixes weightlifting, martial arts, baseball and gymnastics.
- **Videman 1995** (abstract):
  - Weightlifters had the most disc degeneration (MRI on 19 weightlifters).
  - Former athletes had less back pain overall. The difference was significant for endurance,
    sprint, game sports, wrestling and boxing; the abstract gives no significant difference for
    weightlifters.
- **Owen 2020** (abstract): no T2 change in chronic low back pain.
- **No resistance-training trial with disc outcomes** in healthy adults was found.

**Corrected wording.** As in the notes. Add that weightlifters' back pain was not shown to be lower.
The supported statement is "not more".

### 13. ACWR

**Verdict: corrected.** The conclusion is right, but the causal wording overreaches.

**Evidence.**
- **Impellizzeri 2020** (abstract): no study has estimated a causal effect, and "no evidence
  supporting the use of ACWR".
- **Impellizzeri 2021** (abstract):
  - Original OR 2.45 (1.28-4.71); fixed chronic load 1.95 (1.18-3.52).
  - Random chronic loads gave ORs of 1.16-2.07, with **mean 1.53**. The record's "mean 1.89" is
    actually the mean OR for random ACWRs (1.42-2.70); now fixed.
  - c-statistic 0.574 (ACWR) and 0.544 (acute load) vs 0.5.
  - **This is a re-analysis of a single dataset.**
- **Ding 2026** (full text):
  - g 0.35 (0.16-0.54), I² 95.8%; 16 studies, 797 athletes.
  - The association was as large for **contact** injuries (g 0.54) as for non-contact (0.55), and
    near-null for time-loss injuries (0.01).
  - The authors reject stand-alone causal or predictive use. This is not a "supportive"
    meta-analysis.
- **Qin 2025** (abstract): a single-arm meta-analysis that adds nothing causal.
- **Uncoupled ACWR:** in a cricket cohort (Windt & Gabbett 2019; seen via search, secondary), it
  gave associations similar to the coupled version. So coupling alone does not explain the
  association; rescaling of acute load does.

**Problem.** "Mathematical coupling and rescaling create the association" states as proven what one
re-analysis showed is possible.

**Corrected wording.** "ACWR should not guide load management or injury prediction. No study has
estimated a causal effect (established). In one re-analysis, dividing acute load by fixed or random
numbers reproduced the ACWR-injury association, and neither ACWR nor acute load predicted injury
meaningfully better than chance (c-statistic 0.57 vs 0.50). This suggests the association largely
reflects rescaled acute load (promising). The latest meta-analysis finds a small, extremely
heterogeneous association (g 0.35, I² 96%). It is as strong for contact injuries as for non-contact
ones and near zero for time-loss injuries, which points to exposure rather than tissue overload.
None of this evidence comes from strength sports."

### 14. Strength training and injury; injury rates in strength sports

**Verdict: corrected.**

**Evidence.**
- **Lauersen 2014** (abstract): strength training RR 0.315 (0.207-0.480).
- **Lauersen 2018** (abstract):
  - 6 RCTs, 7738 participants aged 12-40, 177 injuries; RR 0.338 (0.238-0.480).
  - "10% more volume, >4 percentage points less risk."
  - Per Lauersen 2018 (seen via search snippet), the 2014 strength stratum contained **four trials,
    which are four of the six in 2018**.
- **Aasa 2017** (abstract):
  - 9 studies, mostly of low quality.
  - Weightlifting 2.4-3.3 and powerlifting 1.0-4.4 injuries per 1000 h of training.
  - Rates were similar to other non-contact strength or power sports and lower than contact sports.

**Refutation attempts.**
- Newer syntheses (seen via search, not verified) report smaller effects:
  - Contact-sport strength programmes RR ~0.70 (2025).
  - Youth team-sport programmes about one-third reduction (2024).
- A small 2022 meta-analysis found no strength-training effect.

**Problems.**
- **The two RRs are not independent replications.**
- **The dose-response is a post-hoc meta-regression across 6 trials.**
- **The trials are mostly team sports and youth**, not strength athletes.

**Corrected wording.** "Strength-training programmes reduced sports injuries in a small set of
largely overlapping trials (RR 0.34, 95% CI 0.24-0.48; 6 RCTs, 177 injuries). A post-hoc
meta-regression suggested more volume gave more protection. Newer and broader syntheses suggest
smaller effects (roughly 25-35% fewer injuries). Weightlifting and powerlifting have low reported
injury rates (1.0-4.4 per 1000 training hours), from mostly low-quality studies. (promising)"

---

## Spot checks (numbers not in the claim list)

| # | Number in notes | Source checked | Result |
|---|---|---|---|
| S1 | Resistance training stiffness SMD 0.80 (0.67-0.94); jump 0.49 (0.22-0.77); concurrent 0.03 (-1.03 to 1.10) [@lazarczuk-2022-tendon-meta] | Full text | **Confirmed** (68, 11 and 2 intervention groups). |
| S2 | High (>70%) vs low intensity stiffness 0.90 (0.71-1.08; I² 0%) vs 0.04 (-0.46 to 0.53) [@bohm-2015-tendon-meta] | Full text | **Confirmed**. N = 27 vs 5 interventions; p < 0.00001. |
| S3 | Collagen tendon CSA SMD 0.67 (0.16-1.19; 4 studies, 114) [@bischof-2024-collagen-meta] | Full text | **Confirmed, but fragile**: excluding Jerger 2023 makes it p = 0.058. The notes omit this. |
| S4 | Random chronic loads ORs "1.16 to 2.07" [@impellizzeri-2021-chronic-workload], record "mean 1.89" | Abstract | **Corrected in record.** Mean for random chronic loads is 1.53. 1.89 (1.42-2.70) is the mean for random ACWRs. |
| S5 | Langberg 1999 PICP 55 → 165 µg/L "supports" early net catabolism | Abstract | **Number confirmed, interpretation wrong.** ICTP (degradation) fell early in peritendinous tissue. See claim 6. |
| S6 | Shaw 2017 "approximately doubled" PINP; full text "not retrievable" | Full text (PMC HTML) | **Confirmed and made precise**: +153% at 4 h vs +53.9% placebo; AUC doubled. The full text is retrievable. |
| S7 | Houtvast cruciate ligament FSR 0.45 (ACL) and 0.46 (PCL) %/day | Full text | **Confirmed.** Older osteoarthritic knee-replacement patients. |
| S8 | Massey 2018 high-force stiffness/modulus short-term +25/22%, long-term +17/23% | Abstract | **Confirmed.** The comparison is cross-sectional. |
| S9 | Tsai minimum dose "4-5 sets x 4 reps x 3 s … ~180 s/wk, 2.5-4 sessions/week" | Full text | **Arithmetic inconsistent.** 180 s/week = 15 sets/week (6 × 2.5 or 3 × 5). |

---

## Wider concerns about the notes

1. **Misdescribed samples.**
   - Weidlich 2023 analysed 10 mixed-sport athletes doing partial squats, not "13 strength-trained
     athletes".
   - Massey 2018's 4-year group is cross-sectional.
   - These matter because the thesis targets trained lifters. Apart from Weidlich 2023/2024, which
     are small, no tendon-loading study in the chapter used strength-sport athletes.
2. **Read-level bookkeeping.** Several "not retrievable" items were retrievable: Shaw 2017 via the
   PMC HTML page, Holden 2020 via the authors' repository, Ding 2026 and Challoumas 2023 via Europe
   PMC. Records were updated accordingly. Lolli 2019 remains secondary.
3. **Grade inflation in single-study findings.**
   - Miller 2005 was graded "established" as a single study (n = 14, kicking).
   - LIFTMOR was graded "established" as a single RCT.
   - Holden 2020 was graded "established" as a single crossover.
   - All three were lowered to promising in the records.
4. **Single-lab dependence.**
   - The strain-threshold, strain-duration and frequency/volume evidence comes almost entirely from
     the Arampatzis/Mersmann group in Berlin.
   - The positive chronic collagen trials (Lee 2025, both Nulty 2025 trials) and the dose study
     (Lee 2024) come from the Erskine group in Liverpool.
   - The notes say "four positive trials from one UK lab". Three chronic trials plus the acute dose
     study fit that description; the writer should say which four.
5. **Non-independent evidence presented as convergent.** Lauersen 2014 and 2018 share four trials.
   Bohm 2015 and Lazarczuk 2022 also overlap heavily: Lazarczuk is an update that includes most of
   Bohm's studies.
6. **Mechanism language.**
   - The notes say stiffening "must come mainly from changes in material properties". That is an
     inference from stiffness vs CSA and from 14C data. Modulus is itself derived from stiffness,
     CSA and length, so the two are not independent measurements.
   - The chapter should keep this inference in the speculative tier, as the notes partly do.
7. **Collagen practical recommendation (RQ5).** "15-30 g with vitamin C ~30-60 min before the
   session" mixes protocols.
   - The tested pre-session timing was ~1 h (Shaw, Lee 2024, Lee 2025).
   - Nulty 2025's positive trial dosed **after** sessions.
   - 15 g hydrolysed collagen was null for PINP in Lee 2024.
8. **Out-of-scope framing.** Claims 10 and 12 lean on clinical populations: tendinopathy and
   chronic low back pain. The thesis is not about rehabilitation. The writer should keep these as
   brief, clearly bounded asides.

**Records updated in this pass (47):**
- **Tendon loading:** bohm-2015-tendon-meta, lazarczuk-2022-tendon-meta,
  arampatzis-2007-strain-magnitude, weidlich-2023-squat-tendon-strain,
  tsai-2024-tendon-loading-frequency, bohm-2014-strain-rate-duration.
- **Turnover and time course:** heinemeier-2013-tendon-14c, heinemeier-2016-cartilage-14c,
  houtvast-2026-tissue-protein-synthesis, miller-2005-tendon-collagen-synthesis,
  magnusson-2010-tendinopathy-loading, langberg-1999-peritendinous-collagen, kubo-2010-time-course,
  massey-2018-tendinous-long-term, pang-2026-strength-stiffness,
  weidlich-2024-personalized-tendon.
- **Collagen supplements:** shaw-2017-gelatin, lee-2024-collagen-dose,
  balshaw-2023-collagen-peptides, bischof-2024-collagen-meta, lee-2025-collagen-female-soccer,
  nulty-2025-collagen-middle-aged, jerger-2022-collagen-achilles.
- **Short-bout loading:** paxton-2012-intermittent-stretch, robling-2002-short-bouts,
  warden-2021-bone-workload.
- **Isometrics and tendinopathy:** rio-2015-isometric, holden-2020-isometric,
  clifford-2020-isometric-meta, challoumas-2023-tendinopathy-nma.
- **Bone:** martyn-st-james-2006-rt-bmd, jones-2026-bmd-women, watson-2018-liftmor,
  heinonen-2002-female-weightlifters.
- **Disc:** belavy-2017-running-disc, samanna-2026-disc-meta, videman-1995-athletes-spine,
  owen-2020-disc-rct, samanna-2026-asteroid-disc.
- **Load and injury:** impellizzeri-2020-acwr, impellizzeri-2021-chronic-workload,
  lolli-2019-coupling, ding-2026-acwr-meta, gabbett-2016-paradox,
  lauersen-2014-injury-prevention (shared with chapter 6; chapter 6 notes kept),
  lauersen-2018-strength-injury, aasa-2017-weightlifting-injuries.
