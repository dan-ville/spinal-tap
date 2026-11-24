# Verification: Chapter 3, "Dose: volume, load, effort, frequency and rest"

Independent verification pass, 2026-11-24, of `notes/dose-response.md`. Each load-bearing claim was
checked against the primary source, with full text where open access allowed, and searched for newer
or contradicting evidence. Evidence records in `evidence/sources/` were updated: `checked` filled,
`read_level` set to what this pass read, and wrong numbers or descriptions fixed.

**What this pass read.**
- Full text:
  - Pelland 2026: SportRxiv preprint v2 and the published Sports Medicine PDF.
  - Boutagy 2026: medRxiv v1, v2, v3 and v4.
  - Currier 2026 (ACSM), Lopez 2021, Currier 2023, Swinton 2024, Hammert 2026, Refalo 2023
    meta-analysis, Refalo 2023 fatigue study, Androulakis-Korakakis 2021, Singer 2024, Jukic 2023 and
    Mpampoulis 2025, all via Europe PMC.
  - Robinson 2024: SportRxiv preprint.
- Abstracts:
  - PubMed: the 28 PMID-indexed sources.
  - Tao 2026: ECU repository.
  - Rantila 2026: Crossref; the article is CC-BY.
  - Buckner 2023: J-STAGE.
  - Robinson 2025 (bioRxiv) and Davidson 2025 (medRxiv): via the bioRxiv/medRxiv API.

**Verdict summary**

| # | Claim (short) | Verdict | Grade after check |
|---|---|---|---|
| 1 | Volume → hypertrophy, square-root, no clear plateau | confirmed (grade split) | established (direction); promising (shape) |
| 2 | Volume → strength, reciprocal, plateau ~4 sets | confirmed | promising |
| 3 | Fractional set counting fits best | confirmed | promising |
| 4 | Frequency (volume-adjusted) negligible for hypertrophy | confirmed, wording refined | established for "no large effect"; small benefit not excluded |
| 5 | Frequency independently raises strength | corrected | promising |
| 6 | Load-independent hypertrophy ~30-85% 1RM to failure | corrected (load range) | established (mostly untrained); promising in trained |
| 7 | 1RM strength is load-dependent | confirmed | established |
| 8 | Proximity to failure ~irrelevant for strength | confirmed | promising |
| 9 | Closer to failure → more hypertrophy; 1-2 RIR ≈ failure | corrected (non-linearity wording) | promising |
| 10 | Failure costs disproportionate fatigue | corrected | promising |
| 11 | Minimum effective doses are low | confirmed, with read-level caveat | promising |
| 12 | Maintenance on ~1 session/wk, 1 set | corrected | promising (young, previously untrained); speculative for athletes |
| 13 | Rest >60 s small hypertrophy benefit | corrected (overstated) | speculative-to-promising |
| 14 | Longer rest supports strength in trained; contested | confirmed | contested |
| 15 | Raising volume above habitual often null | confirmed | contested |

---

## Claim-by-claim

### 1. Weekly volume and hypertrophy: positive, diminishing, no clear plateau

**Verdict: confirmed (grade should be split).**

**Evidence.**
- Pelland 2026, published PDF and preprint agree:
  - Square-root best fit; 35 studies, 220 effects, 1032 participants.
  - Marginal slope β = 0.24% per fractional set (95% CrI 0.15-0.33) at the mean of 12.25 sets.
  - 100% posterior probability of a positive slope; R²marginal 22.3%.
  - The authors write that the tiers "indicate no clear plateau" but "caution is warranted as few
    studies have explored ~25+ 'fractional' weekly sets". They add that the best-fit curve "is still
    compatible with multiple functional forms (e.g., functional plateau, inverted-U)". The efficiency
    tiers run to 30-42 sets, with "insufficient data" at 43+.
- Schoenfeld 2017 (abstract): 15 studies, +0.023 ES and +0.37% per weekly set (P = 0.002).
- Krieger 2010 (abstract): multiple vs single sets, difference 0.10 (95% CI 0.02-0.19).
- ACSM 2026 (full text): volume enhances hypertrophy; 5 reviews, n = 2267, QoE 50%. One further
  review could not determine an effect and one found none.

**Refutation attempts.** No 2025-2026 meta-analysis contradicts the direction. The challenges are to
magnitude at high volume in trained people (see claim 15): Buckner 2023, Moreno 2025, Barsuhn 2025 and
Rantila 2026.

**Problems.**
- The claim is graded "established" as a whole, but only the direction is established. The shape
  (square-root, "no clear plateau") comes from one model-selection exercise that explains ~22% of the
  variance, and the authors say the shape is uncertain at high volumes.
- The read level is mixed: Schoenfeld 2017 and Krieger 2010 are abstract-only.

**Corrected wording.** "More weekly hard sets per muscle produce more hypertrophy (established).
The best current model (Pelland 2026) suggests diminishing returns without a clear plateau: about
0.24% extra growth per additional fractional set (95% CrI 0.15-0.33) at ~12 sets/wk (promising). Few
studies exceed ~25 fractional sets/wk, and the curve beyond that is compatible with a plateau or an
inverted U."

### 2. Weekly volume and strength: reciprocal, functional plateau, increments stop ~4 sets

**Verdict: confirmed.**

**Evidence.**
- Pelland 2026: 66 studies, 490 effects, 2020 participants. Reciprocal best fit; β = 0.21% per set
  (95% CrI 0.16-0.26); R²marginal 26.1%.
- Table 2B (preprint) / Table 4 (published):
  - Minimum effective dose (MED) = 1 set.
  - 2 sets: ~0.75 extra set per detectable gain.
  - 3-4 sets: ~2.25.
  - 5+: "do not consistently enhance strength gains > SDES".
- Ralston 2017 (abstract): high vs low weekly sets ES 0.18 (0.06-0.30).
- Schoenfeld 2019 (abstract): 1, 3 and 5 sets/exercise gave similar strength gains in 34 trained men.

**Qualifiers to keep with the claim.**
- The authors stress that the 3.96% SDES "may be greater than what some deem practically relevant".
  Extra sets beyond ~4 "may produce additional strength gains, albeit less than the SDES".
- The large effect of the first set may reflect learning a novel test.
- In well-trained powerlifters, 1-3 direct sets/wk were insufficient while 3-9 worked
  (Androulakis-Korakakis 2021, cited by Pelland).
- Mean strength-study volume was only 8.1 sets/wk, and most studies had no taper before testing.

**Corrected wording.** Add: "'Detectable' here means above a 3.96% threshold. Smaller gains from
more sets are not excluded, and the shape is driven by mostly short studies with novel 1RM tests."

### 3. Fractional counting predicts best

**Verdict: confirmed.**

**Evidence.** Pelland 2026 compared three set-counting schemes using 2 × log(BF):

| Comparison | Hypertrophy volume | Strength volume | Hypertrophy frequency | Strength frequency |
|---|---|---|---|---|
| Fractional vs total | 9.48 (strong) | 18.21 | 9.96 | 31.27 |
| Fractional vs direct | 10.29 | 45.96 | 10.82 | 54.84 |

**Caveat.** Only three weights were compared (0, 0.5 and 1). The 0.5 weight was not estimated, so it
is the best of three conventions, not a measured constant. The notes already say this.

### 4. Frequency (volume-adjusted) has negligible effect on hypertrophy

**Verdict: confirmed, with wording refined.**

**Evidence.**
- Pelland 2026:
  - β = 0.32% per session (95% CrI -0.14 to 0.82); 91.3% probability that the slope is positive.
  - The authors call this "compatible with negligible effects".
  - The models are volume-*adjusted* by covariate, not volume-*equated*.
  - Direct-effects-only models (15 studies) agree.
- Boutagy & McKean 2026, medRxiv:
  - v2, v3 and v4 (current version, posted 21 Nov 2026) all give g = -0.06 (95% CI -0.24 to 0.13),
    I² = 0%, PI -0.26 to 0.14. The 1 vs 3 sessions contrast is g = -0.23 (-0.57 to 0.10). GRADE
    certainty is low to very low.
  - **Version note: v1 (9 Oct 2026) reported g = -0.02 (-0.21 to 0.16).** The notes' numbers are
    correct for v2 onward. The record said "v3"; it now cites v4.
- Schoenfeld 2019 (abstract): no significant volume-equated difference.
- Tao 2026 (abstract): muscle mass g = -0.13 (p = 0.34, I² = 77%). Boutagy reports Tao's
  equal-volume subgroup as g = 0.01 (secondary).
- ACSM 2026: frequency did not affect hypertrophy; 4 reviews, n = 3177, QoE 63%.

**Discrepancy found.** The Schoenfeld 2019 volume-equated CI is quoted differently by two secondary
sources:
- Pelland: 0.07 (-0.08 to 0.21), direct measures.
- Boutagy: 0.07 (-0.02 to 0.17), 13 studies.

The primary paper is paywalled and was not read, so neither CI should appear in the thesis as
verified. This is now flagged in the record.

**Corrected wording.** "At equal weekly volume, 1-3 sessions per muscle per week give
indistinguishable hypertrophy (established for 'no large effect'). The data cannot exclude a small
advantage of 3 over 1 session (Boutagy 2026: g = -0.23, 95% CI -0.57 to 0.10), and certainty is low."

### 5. Frequency independently increases strength; "contradicts Grgic 2018"

**Verdict: corrected.**

**Numbers confirmed (Pelland 2026, both versions).**
- β = 3.27% per session (95% CrI 2.74-3.84).
- Control-adjusted gain 12.72% (10.57-15.05) at 1 session/wk vs 17.32% (14.34-20.56) at 2
  sessions/wk, "beyond this point, accelerating diminishing returns".

**Errors and qualifications.**
1. **"Contradicts Grgic 2018" is wrong framing.** Pelland's authors write: "instead of necessarily
   different findings, the present meta-regressions build on this analysis". They point out that
   Grgic's own volume-equated estimates also rose from 1 to 2 sessions: ES 0.53 (0.13-0.93) vs 0.80
   (-0.25 to 1.86). Grgic's null was a non-significant p = 0.421 with wide intervals, not evidence of
   no effect.
2. **Pelland's model is volume-adjusted, not volume-equated.** Its frequency effect is estimated
   across studies, with volume as a covariate.
3. **Tao 2026's g = -0.17** (I² = 0%, p < 0.0001) is the headline pooled strength estimate. The
   abstract does not say it is volume-equated. Boutagy quotes Tao's equal-volume strength subgroup as
   g = -0.24 (secondary). Boutagy also reports that Tao's extraction choices inflated per-trial SMDs.
4. **Not all evidence agrees.**
   - ACSM 2026 rates frequency positive for strength (4 reviews, n = 3531, QoE 69%), but 3 reviews
     (n = 608, QoE 75%) found no effect, and the panel notes the impact is diminished when volume is
     equated.
   - Swinton 2024 found that adding sessions/week did not improve prediction. This pass did not
     re-check that statement.
5. **The likely mechanism is practice of the tested lift,** which the Pelland authors name. That
   makes the effect partly test-specific.

**Corrected wording.** "With volume statistically adjusted, more sessions per week are associated
with larger 1RM gains: Pelland 2026, 3.27% per session (95% CrI 2.74-3.84), 12.7% at 1x vs 17.3% at
2x, with sharply diminishing returns beyond ~2x. This extends rather than overturns Grgic 2018,
whose volume-equated estimates pointed the same way but were imprecise. The effect probably reflects
practice of the tested lift. Volume-equated syntheses remain mixed (promising)."

### 6. Hypertrophy similar across loads ~30-85% 1RM when sets go to/near failure; ~20% inferior

**Verdict: corrected (load range wording), numbers confirmed.**

**Evidence.**
- Lopez 2021, Table 2 (full text):

  | Hypertrophy contrast | SMD (95% CI) |
  |---|---|
  | High vs low load | 0.12 (-0.06 to 0.29) |
  | Moderate vs low | 0.20 (-0.04 to 0.44) |
  | High vs moderate | -0.09 (-0.33 to 0.16) |

  I² = 0%; results held in best-quality studies. 21/28 studies were untrained, and none included
  highly strength-trained participants.
- Morton 2016 (abstract): 49 trained men, ~30-50% vs ~75-90% 1RM to failure; no lean-mass or
  fibre-CSA difference.
- Lasevicius 2018 (abstract): with volume load matched, VL CSA +8.9% at 20% 1RM vs +19.5-20.5% at
  40-80% 1RM.
- ACSM 2026: load (30-100% 1RM) had no effect on hypertrophy; 8 reviews, n = 5340, QoE 66%.

**Correction.**
- Lopez's load bins are RM-based: low >15RM, moderate 9-15RM, high ≤8RM. The ACSM range is
  30-100% 1RM. The "85%" upper bound is not from any source.
- Lopez's multivariate meta-regression found a training-status interaction (P = 0.033). Trained
  evidence rests mainly on Morton 2016.

**Corrected wording.** "When sets are taken to or near failure, hypertrophy is similar across a wide
load range, from roughly 30% 1RM to heavy (≤8RM) loads (established in mostly untrained samples;
supported in trained men by Morton 2016). Very light loads (~20% 1RM) produced about half the
growth."

### 7. 1RM strength gains are load-dependent

**Verdict: confirmed.**

**Evidence.**
- Lopez 2021 (full text): high vs low SMD 0.60 (0.38-0.82); moderate vs low 0.34 (0.05-0.62); high
  vs moderate 0.26 (-0.02 to 0.54), P = 0.068; 98.2% probability that high load is best.
- Currier 2023 (full text):

  | Prescription | SMD vs control (95% CrI) |
  |---|---|
  | HM3 | 1.60 (1.38-1.82) |
  | HM2 | 1.59 (1.28-1.90) |
  | LM3 | 1.07 (0.89-1.25) |
  | HM3 vs LM3 | 0.53 (0.31-0.74) |

- Swinton 2024 (full text): inflection near ~70% 1RM.
- Hammert 2026 (full text): non-specific strength d = 0.322 (95% CI -0.08 to 0.72; PI -0.45 to 1.1);
  10 studies, 245 participants; ~326 per group would be needed to detect the effect.
- Mattocks 2017 (abstract): untrained, n = 38.

**Caveat.** Lopez notes that several studies tested 1RM 3-5 times, which may *mask* load
differences. The wording "largely, but perhaps not wholly, task specificity" is fair.

### 8. Proximity to failure has negligible relationship with strength

**Verdict: confirmed.**

**Evidence.**
- Robinson 2024 (preprint full text; the published abstract matches):
  - Best fit for strength was a linear-log model; marginal slope β = 0.003 SMC (95% CI -0.012 to
    0.018; PI -0.675 to 0.682).
  - 243 effects, 55 studies.
  - RIR was estimated by the authors, not measured.
- Grgic 2022 (abstract): ES -0.09 (-0.22 to 0.05); non-failure was better when volume was not
  equated, -0.32 (-0.57 to -0.07).
- Jukic 2023 (full text): velocity-loss threshold did not affect strength.
- ACSM 2026: 3 reviews, n = 1371, QoE 83%, no effect; 1 review (n = 199) positive.
- Vasconcelos 2026 elbow-flexor trial: 0.588 kg; note the abstract gives an **85%** HDI (-0.491 to
  1.66).

**Refutation attempt.** Wu 2026 (in the notes, not re-checked) finds non-failure slightly better
(SMD 0.24). That direction is consistent with "failure does not help strength", so the claim stands.

### 9. Hypertrophy increases closer to failure; 1-2 RIR ≈ failure; non-linear near failure

**Verdict: corrected (non-linearity wording), numbers confirmed.**

**Evidence.**
- Robinson 2024: hypertrophy best fit was **linear**; β = -0.019 SMC per RIR (95% CI -0.035 to
  -0.004); 140 effects, 26 studies.
- Refalo 2023 (full text): momentary failure vs non-failure ES 0.12 (-0.13 to 0.37, p = 0.343); any
  definition 0.19 (0.00-0.37, p = 0.045).
- Trials confirmed at abstract level:
  - Refalo 2024: 18 trained, quadriceps; 0.181 vs 0.182 cm.
  - Vasconcelos 2026, elbow flexors: 19 trained; 0.032 cm.
  - Vasconcelos 2026, knee extensors: 19 trained; -0.019 cm.

**Correction.** "The relationship looks non-linear near failure" overstates the evidence. Robinson's
model comparison chose a linear form. The flattening near 0-2 RIR is inferred from categorical
contrasts (Refalo 2023) and three small 8-week within-participant trials (~56 people in total). These
are compatible with a flattening but do not establish it.

**Corrected wording.** "Hypertrophy rises as sets end closer to failure. Robinson 2024's best-fit
model was linear: -0.019 SMC per estimated RIR (95% CI -0.035 to -0.004). In small 8-week trials of
trained lifters, stopping at about 1-3 RIR gave growth indistinguishable from momentary failure. This
suggests, but does not establish, that the curve flattens close to failure (promising)."

### 10. Failure carries disproportionate acute fatigue without extra adaptation

**Verdict: corrected.**

**Numbers confirmed.** Refalo 2023 fatigue study (full text): 24 trained, six bench-press sets at 75%
1RM.

| Timepoint | Failure | 1 RIR | 3 RIR |
|---|---|---|---|
| Velocity loss at 4 min | -25% | -13% | -8% |
| Velocity change at 24 h | -3% | -3% | +2% |

Between-protocol differences diminished by 48 h. Refalo 2025 (abstract): discomfort 5.1 vs 4.1 and
feeling scale 0.3 vs 1.2 (failure vs RIR).

**Corrections.**
- The authors conclude "a **linear** relationship between proximity-to-failure and both acute
  neuromuscular fatigue and negative perceptual responses". They do not say "disproportionate".
  Per RIR, the last rep does cost more (-12 points from 1 RIR to failure vs -5 points from 3 to 1
  RIR), but that is our reading of three points from one session.
- At 24 h, failure and 1 RIR were equal. The residual cost separates 3 RIR from both, not failure
  from 1 RIR.
- "Without extra adaptation" comes from different studies (claim 9), not from the fatigue study.

**Corrected wording.** "Acute fatigue and discomfort rise as sets approach failure. After one bench
session, velocity at 4 min fell 25% (failure), 13% (1 RIR) and 8% (3 RIR). At 24 h, failure and 1 RIR
both showed a small residual deficit (-3%) that 3 RIR did not; all differences were gone by 48 h.
Combined with claim 9, this suggests the last reps buy fatigue rather than growth (promising)."

### 11. Minimum effective doses are low

**Verdict: confirmed, with a read-level caveat.**

**Evidence.**
- Pelland MED: 1 set for strength, 4 sets for hypertrophy (full text).
- Androulakis-Korakakis 2020 (abstract only): 1RM +12.09 kg (95% CI 8.16-16.03); 5 pooled studies of
  trained men; a single set of 6-12 reps at ~70-85% 1RM, 2-3x/wk, 8-12 wk.
- Androulakis-Korakakis 2021 (full text):
  - ~3-6 working sets of 1-5 reps per lift per week at >80% 1RM, RPE 7.5-9.5.
  - Pooled PL total +19.6 kg (95% HDI 10.7-31.6), 77.1% probability of exceeding the ROPE.
  - The daily-max-singles-only group gained +11.4 kg with only a 6.3% probability above the ROPE.
- Steele 2023 (abstract): 14,690 general-population clients, mean age 48; plateau at ~1-2 years.

**Caveats.**
- The claim is tagged full-text, but AK 2020 and Steele 2023 were read at abstract level.
- "~1-4 sets/wk measurably raise strength" applies to largely novice samples with novel tests. In
  powerlifters, 1-3 direct sets/wk were insufficient.
- "3-6 heavy sets per lift per week" is practitioner consensus (convention), not trial data.

### 12. Maintenance on ~1 session/wk and ~1 set/exercise; older adults need ~twice that

**Verdict: corrected.**

**Evidence (abstract level except Mpampoulis).**
- Spiering 2021: younger adults maintain strength and size for up to 32 wk on 1 session/wk and 1
  set/exercise if relative load is kept. Older adults may need up to 2 sessions/wk and 2-3 sets *to
  maintain muscle size*.
- Bickel 2011: in young adults both the 1/3 and 1/9 doses preserved hypertrophy; in older adults
  neither did. Strength was largely retained even with complete detraining, and older adults'
  strength was well preserved.
- Mpampoulis 2025 (now read in full text):
  - The population was 27 young women after 12 weeks of **concurrent ballistic upper-body and
    aerobic lower-body training**, not "upper-body power training" alone.
  - One session per week kept bench 1RM. Triceps thickness still fell significantly (-0.9%), which
    kept ~92% of the gain, and power fell ~10%.
  - One session every 14 days kept ~72% of the thickness gain. The abstract's "90-95% of
    power/strength" is not clearly a share of the *gain*.

**Corrections.**
1. "Older adults need about twice that" applies to **muscle size**, not strength. Bickel shows older
   adults' strength is preserved even with detraining. Bickel also shows that even the 1/3 dose,
   which is 3x the 1/9 dose, did not preserve older adults' myofibre size, so "twice" is Spiering's
   narrative figure, not a measured threshold.
2. All three sources involve previously untrained people after 12-16 weeks of training. None are
   trained athletes.
3. Power is not maintained at these doses (Mpampoulis).
4. Boutagy 2026 v4 cites a separate Mpampoulis 2024 paper (Sports 12:198) on quadriceps CSA. It
   corrects a similar misreading of that paper: the authors' 94% is the share of post-training CSA
   kept, not of the gain. That paper is not in the evidence base and could be added.

**Corrected wording.** "In previously untrained young adults, strength and most of the muscle gained
over a few months can be held for up to ~8 months on ~1 session/wk and ~1 set per exercise, provided
relative load is kept. Muscle thickness may still drift down slightly, and power is not maintained.
Older adults keep strength easily but may need ~2 sessions/wk and 2-3 sets to keep muscle size.
Whether this holds for trained athletes is untested (promising for young novices; speculative for
athletes)."

### 13. Rest >~60 s gives a small hypertrophy benefit; no gain beyond ~90 s; mediated by volume load

**Verdict: corrected (overstated).**

**Numbers confirmed (Singer 2024, full text).**

| Region | SMD (95% CrI) | P(>0) |
|---|---|---|
| Arm | 0.13 (-0.27 to 0.51) | 0.74 |
| Thigh | 0.17 (-0.13 to 0.43) | 0.88 |
| Whole body | -0.08 (-0.45 to 0.29) | — |

The authors conclude "a small hypertrophic benefit ... >60 s, perhaps mediated by reductions in volume
load" and "did not detect appreciable differences ... >90 s".

**Problems.**
1. All CrIs include zero, and the probability that the benefit exceeds a small effect is only 54%
   (thigh) and 45% (arm). Whole-body data point the other way.
2. Six of nine studies were in untrained people. The untrained subgroup alone gives thigh 0.17
   (-0.15 to 0.47), and there were insufficient data for a trained subgroup. For a thesis on trained
   adults this is indirect.
3. "Likely mediated by preserved volume load" upgrades the authors' "perhaps". The support is one
   trial (Longo 2022) where equating volume load removed the difference.
4. The ">90 s" conclusion is weak: the thigh network estimate for "very long" vs short rest was
   0.32 (-0.10 to 0.68), larger than "intermediate" at 0.13. The record grades this "speculative",
   which is right.
5. Mohan 2026 (abstract): self-selected ≈ fixed ~2-min rest. **The notes misstate the timing.** The
   abstract says fixed-rest sessions were ~29% *faster* (56.0 vs 78.5 min), so self-selected
   sessions took ~40% longer, not "~29% longer". The record has been corrected.

**Corrected wording.** "Rest periods longer than ~60 s may give a small hypertrophy advantage. In
Singer 2024 the thigh estimate was SMD 0.17 (95% CrI -0.13 to 0.43), but intervals include zero and
the data come mostly from untrained people. Any benefit is plausibly mediated by preserving reps and
volume load. There is little sign of further benefit beyond ~90-120 s, and self-selected rest matched
fixed ~2-min rest in trained adults (speculative to promising)."

### 14. Longer rest (>2-3 min) supports strength in trained lifters; ACSM finds no effect; contested

**Verdict: confirmed.**

**Evidence.**
- Schoenfeld 2016 (abstract): 21 trained men, 3 vs 1 min rest, 8 wk; greater squat and bench 1RM.
- Grgic 2018 rest review (abstract): 23 studies, 491 participants; ">2 min ... required to maximize
  strength gains in resistance-trained individuals". This is a systematic review without pooling.
- ACSM 2026 (full text): inter-set rest did not affect strength; 2 reviews, n = 982, QoE 63%.
- Davidson 2025 preprint (abstract): 6 studies in trained men; strength SMD -0.74 favouring longer
  rest; hypertrophy 0.08.
- An October 2026 OSF registration plans a network meta-analysis of rest for maximal strength (not
  yet reported).

"Contested" is the right grade. Read level is correctly abstract for the trained-specific sources.

### 15. Raising volume above habitual levels is often null in trained people; live dispute

**Verdict: confirmed (abstract level).**

**Evidence.**
- Moreno 2025: 42 adults with >6 months of elbow-flexion training; within-participant arms; 50% site
  0.022 cm (-0.096 to 0.140).
- Barsuhn 2025: +30% or +60% weekly sets; 55 randomised, **only 29 completed** (10/10/9). No
  difference in size; overall 1RM favoured maintenance (P < 0.0268).
- Rantila 2026: 27 strength-trained men; NOR n = 12 vs XTR 1.5x sets n = 15 for 7 wk. No size
  difference, including non-responders; deadlift favoured less volume (P = 0.043).
- Buckner 2023: 0.1-0.25 cm "common" vs 0.6-0.72 cm quadriceps gains in high-volume trials.
- Robinson 2025 preprint (16 recreationally trained, ~8 vs ~16 sets/wk):
  - VL CSA +1.8 cm² (95% HDI 0.29-3.41; 98.77%).
  - 1RM +3.48 kg (-5.1 to 12.15; 80.01%).

**Qualifiers.**
- These null trials are small and short, with large dropout (Barsuhn). That fits "underpowered"
  just as well as "no effect".
- Robinson 2025 shows a clear but modest benefit at 8 vs 16 sets, i.e. *below* the disputed high
  range.

The claim's wording is accurate; "contested" is correct.

---

## Spot checks (numbers not in the list above)

| Notes location | Number checked | Source read | Result |
|---|---|---|---|
| RQ5, Mohan 2026 | "sessions took ~29% longer (78.5 vs 56.0 min)" | PubMed abstract | **Wrong.** Abstract: fixed-rest sessions ~29% *faster*; self-selected took ~40% longer. Times are correct. Record fixed. |
| RQ3, Jukic 2023 | CMJ b = -0.040 | Europe PMC full text | Confirmed: b = -0.040 (95% CI -0.079 to -0.001). |
| Cross-cutting, Halperin 2022 | underprediction 0.95 reps (0.17-1.73) | PubMed abstract | Confirmed (414 participants, 262 effects). |
| RQ5, Davidson 2025 | strength SMD -0.74, hypertrophy 0.08 | medRxiv abstract v2 | Confirmed (6 studies, trained men; no CIs in abstract). |
| RQ2, Morton 2016 | bench 9 ± 1 vs 14 ± 1 kg | PubMed abstract | Confirmed (P = 0.012); 49 trained men. |
| RQ2, Lasevicius 2018 | VL CSA +8.9% vs ~+20% | PubMed abstract | Confirmed (20.5/20.4/19.5% at 40/60/80%). |
| RQ3, Grgic 2022 trained subgroup | ES 0.15 (0.03-0.26) | PubMed abstract | Confirmed. |
| Cross-cutting, Pelland | 78% failure, ~30% clear momentary failure | Published PDF | Confirmed (78.47% / 78.12%; "only ~30% had a clear definition"). |
| RQ1, Schoenfeld 2019 frequency | ES 0.07 (-0.08 to 0.21) "as quoted by Pelland" | Pelland PDF; Boutagy v4 | Pelland quote confirmed, but Boutagy quotes 0.07 (-0.02 to 0.17). **Unresolved**; primary not read. |

---

## Wider concerns about the notes

1. **Read levels are attached to claims, not numbers.**
   - The claims list tags 13 of 15 claims "full-text", but many of them lean on abstract-only
     sources: Schoenfeld 2017, Krieger 2010, Ralston 2017, Tao 2026, Schoenfeld 2019 frequency, the
     Refalo 2024 and Vasconcelos trials, AK 2020, Steele 2023 and Grgic 2022.
   - Under the repo convention, only numbers from `read_level: full-text` records may be stated as
     verified. The chapter writer should check each number's record, not the claim tag. Claim 12
     correctly says "abstract".
2. **Version control for preprints.** Boutagy 2026 has four versions with a changed pooled estimate
   between v1 and v2. The notes' numbers are right, but the record pointed at v3. Robinson 2024 was
   read as a preprint, though the published abstract matches. Remmert 2025 (the per-session PUOS)
   remains a preprint whose publication status was not verified, and this pass did not check its
   numbers.
3. **Grade inflation in three places.**
   - Claim 1 bundles the shape into "established".
   - Claim 13 calls a CrI-spanning-zero, mostly-untrained estimate a "small benefit" with "likely"
     mediation.
   - Claim 9 treats non-linearity as observed although the best-fit continuous model was linear.
4. **Framing errors.**
   - Claim 5 says Pelland "contradicts" Grgic 2018; the authors explicitly say otherwise.
   - Claim 10 calls fatigue "disproportionate" where the authors say "linear".
5. **Description errors in records.**
   - Mpampoulis 2025's population and the meaning of its percentages were wrong.
   - Mohan 2026's time comparison was inverted.
   - Both are fixed in the records. The notes (RQ4 and RQ5) still carry the old wording and should
     be corrected by the chapter writer.
6. **Trained-population gap is larger than the claims imply.** Every "trained" conclusion on effort
   (claims 9-10), rest (claims 13-14), maintenance (claim 12) and high volume (claim 15) rests on
   trials of 16-42 people over 7-12 weeks, or on reviews dominated by untrained samples. The notes
   acknowledge this in the population caveat, but the claim grades do not always carry it.
7. **Not checked in this pass:**
   - Remmert 2025 per-session numbers.
   - Wu 2026 (non-failure SMD 0.24).
   - Enes 2025.
   - Baz-Valle 2022.
   - Swinton's "sessions did not improve prediction".
   - Schoenfeld 2016 frequency.
   - Hammert 2024.
   - Iversen 2021.

   These should not be stated as verified until a record shows a full-text read.
8. **Possible addition.** Mpampoulis et al. 2024 (Sports 12:198), on quadriceps CSA under 7- vs 14-day
   maintenance in women, is cited and corrected in Boutagy v4. It is the more relevant size-maintenance
   paper and is not yet in the evidence base.
