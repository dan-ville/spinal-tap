# Verification: Chapter 10, "Recovery, sleep, nutrition and monitoring"

Independent verification pass, 2026-11-24, of `notes/recovery-and-nutrition.md`. I checked each
load-bearing claim against its primary sources, reading the full text wherever it was open access,
and searched for newer or contradicting evidence (web search plus Europe PMC queries limited to
2025-2026). Evidence records in `evidence/sources/` were updated as follows:

- `checked` filled in (2026-11-24, "verification pass") on 52 records. Earlier notes are kept
  after a `|`.
- `read_level` set to what this pass actually read. Nine records moved up to `full-text`: Borba
  2024, Tagawa 2021, Schoenfeld 2013, Refalo 2025, Wang 2026, Ashtary-Larky 2025, Prokopidis 2023,
  Xiao 2025, Dupuy 2018, Roberts 2015, Duignan 2020 and Manresa-Rocamora 2021. Records that this
  pass read only as abstracts are set to `abstract`.
- Numbers, populations and grades corrected in these records: `kong-2025-sleep-deprivation`,
  `lamon-2021-sleep-mps`, `borba-2024-habitual-sleep`, `nunes-2022-protein`, `wang-2026-creatine`,
  `xu-2024-creatine-cognition` (grade moved to contested), `lilja-2018-nsaid` (grade moved to
  contested) and `manresa-rocamora-2021-hrv-guided`.
- Three new records added: `mallinson-2025-nsaid`, `citherlet-2026-creatine-commentary` and
  `del-val-manzano-2026-sleep`.
- The chapter 11 content of the shared records (`morton-2018-protein`, `weakley-2021-devices`) is
  untouched.

**What this pass read.**
- **Full text, via Europe PMC XML:** Craven 2022, Kong 2025, Lamon 2021, Saner 2021, Borba 2024,
  Morton 2018 (and its 2020 correction), Nunes 2022, Tagawa 2021, Trommelen 2023, Schoenfeld 2013,
  Wang 2024, Wang 2026, Burke 2023, Ashtary-Larky 2025 (results and discussion), Kreider 2017
  (mechanism section), Prokopidis 2023, Xu 2024 (and its 2025 corrigendum), Citherlet 2026, Grgic
  2018, Guest 2021, Xiao 2025, Berjisian 2026, Fuchs 2020, Davis 2020, Dupuy 2018, Saw 2016,
  Weakley 2021 and Manresa-Rocamora 2021.
- **Full text, via NCBI PMC E-utilities:** Pinero 2024, Roberts 2015 and Duignan 2020.
- **Full text, from the AUT repository PDF:** Refalo 2025.
- **Abstracts, via PubMed E-utilities (48 PMIDs in one batch, all resolved to the intended
  paper):** Knowles 2018, Knowles 2022, Knowles 2024, Witard 2024, Tavares 2025, Murphy 2022,
  Longland 2016, Lanhers 2015 and 2017, McMorris 2024, Grgic 2020, Grgic 2023, Malta 2021, Brown
  2017, Lilja 2018, Morán-Navarro 2017, Plews 2013, Thorpe 2017, Claudino 2017, Yu 2026 and Helms
  2023. Newly found items: Mallinson 2025, Del Val-Manzano 2026, Easow 2025 and Tagawa 2022.
- **Not obtained:**
  - Murphy 2022: the Wiley page returned a bot-challenge page.
  - Knowles 2022: not open access.
  - The Prokopidis author reply (nuac111): academic.oup.com does not resolve in this environment.
  - The EFSA 2024 creatine-cognition opinion.

**Verdict summary**

| # | Claim (short) | Verdict | Grade after check |
|---|---|---|---|
| 1 | Acute sleep loss lowers strength ~3%; protocol and time-of-day effects | corrected (Kong contradicts Craven on total deprivation; late restriction not significant in Craven) | established (small pooled drop); contested (which protocol matters most); promising (PM worse than AM) |
| 2 | 9 nights of 5 h: quality falls more than quantity; one night cuts MPS 18% | confirmed, wording refined | promising |
| 3 | No RCT shows sleep restriction blunts training gains | confirmed | speculative |
| 4 | Extra protein adds little; 1.62 g/kg/day break point is imprecise | confirmed | promising (dose); established (small added effect) |
| 5 | 100 g > 25 g protein acutely; no hard per-meal ceiling; timing secondary | confirmed, two precisions | contested |
| 6 | Deficit impairs lean-mass gains, not strength; more protein helps | corrected ("not impaired" overstated) | promising; speculative (500 kcal threshold) |
| 7 | Creatine raises strength (+4.4 / +11.4 kg; g ~0.55) | corrected (bias-adjusted g ~0.35) | established (direction); promising (magnitude) |
| 8 | Creatine hypertrophy small; DXA overstates; PCr mechanism | corrected (imaging effect not distinguishable from zero; water share is inference) | promising (small effect); speculative (water share of FFM gain) |
| 9 | Creatine cognitive benefit unproven in healthy young adults | corrected (Xu 2024 has the same double-counting error) | contested overall; no credible benefit in healthy young adults |
| 10 | Caffeine: small strength gain, bar velocity +0.42 SD | confirmed | established (small strength effect); promising (velocity, habituation) |
| 11 | Regular CWI probably blunts hypertrophy and strength | confirmed | promising |
| 12 | Massage/compression: perception and acute recovery; ibuprofen halves hypertrophy | corrected (NSAID effect contested by a 2025 trial in trained men) | promising (massage, compression); contested (NSAIDs) |
| 13 | Wellness and bar velocity are the sensitive monitors | corrected (volume load did detect sleep restriction, trivially) | promising |
| 14 | HRV-guided training at most small; speculative for strength | corrected (HRV meta-analysis population was mixed, not endurance athletes) | speculative |

---

## Claim-by-claim

### 1. Acute sleep loss lowers maximal strength only modestly

**Verdict: corrected.**

**Evidence.**
- **Craven 2022 (full text, Table 2): every number confirmed.**
  - Strength -2.85% (95% CI -4.47 to -1.23); 25 studies, n = 289 (74% male), 66 outcomes, I2 62.2%.
  - Total deprivation -3.00% (-4.52 to -1.48). All restriction -2.77% (-6.75 to 1.21). Early
    restriction -1.16% (-2.57 to 0.25). Late restriction -4.45% (-9.30 to 0.41).
  - Lower body -3.42% (-5.54 to -1.31); upper body -1.63% (-3.30 to 0.04).
  - Time awake predicted the strength loss only after late restriction: -1.07%/h (-2.05 to -0.10).
  - PM tasks were consistently affected; AM tasks "were generally unaffected".
  - **Late restriction was not significant in Craven.** Its point estimate is larger, but on its
    own Craven does not show that waking early hurts more than going to bed late.
- **Kong 2025 (full text): numbers confirmed, but the notes leave out a direct conflict.**
  - Maximal force in athletes: SMD -0.35 (-0.56 to -0.14). PSDE (end-of-night loss): -0.57 (-0.94
    to -0.19). PM tests: -0.30 (-0.51 to -0.09). RPE in athletes: 0.39 (0.11 to 0.66).
  - **Total sleep deprivation did not significantly reduce maximal force** (SMD -0.16, -0.39 to
    0.06), and neither did PSDB (-0.19, NS). In Craven, total deprivation was the *only*
    significant protocol. So the two meta-analyses agree that end-of-night loss and afternoon
    testing matter. They **disagree on total deprivation**. The notes say that, "read this way, the
    two meta-analyses agree"; this is only half true.
  - Kong's overall maximal-force estimate is SMD -0.24 (-0.40 to -0.09), from 10 articles in a
    fixed-effect model. Non-athletes showed no effect (-0.10, NS). "Maximum force" here is mostly
    isometric MVC, handgrip and isometric leg or back strength, not 1RM. 42 of the 45 studies were
    crossovers.
  - The PSDE terminology trap is confirmed: the methods define PSDE as "partial sleep deprivation
    at the end of the night".
- **Knowles 2018 (abstract): confirmed.** One night without sleep had little effect;
  consecutive nights reduced multi-joint force.
- **Newer evidence (2025-2026).**
  - Easow 2025 (13 studies) reads the literature as inconsistent.
  - Del Val-Manzano 2026 (new record; abstract) is a crossover in 24 **resistance-trained** adults:
    4 h or 0 h of sleep reduced mean velocity at 50% 1RM by 7-13% in men, and endurance-set
    velocity in women. Effects at 90-100% 1RM were not reported as significant.
  - Nothing found overturns the "small effect" reading.

**Corrected wording.** "Acute sleep loss lowers maximal strength modestly: about -3% pooled across
protocols (Craven 2022: -2.85%, 95% CI -4.47 to -1.23), more for lower-body and afternoon tasks.
The two meta-analyses disagree about which protocol matters. In Craven, only total deprivation
reached significance (-3.00%); late restriction (early waking) had a larger but non-significant
point estimate (-4.45%, CI crossing zero). In Kong 2025, which tested mostly isometric force,
early waking (PSDE) reduced force (SMD -0.57) but total deprivation did not (-0.16, NS). Both find
afternoon testing more affected."

**Grade.** Established for a small pooled drop. Contested for which protocol matters most.
Promising for PM being worse than AM.

### 2. Sustained restriction degrades lifting quality more than volume; one night lowers MPS

**Verdict: confirmed, wording refined.**

**Evidence.**
- **Knowles 2022 (abstract only; not open access): every number confirmed.**
  - Volume load fell by less than 1%.
  - Lower-body mean concentric velocity was up to 15% slower; upper body was not affected.
  - Squat intraset velocity loss was up to 7% greater.
  - Cortisol AUC +42%, training distress +84%, session RPE +11%.
  - The volume-load fall was **statistically significant** (P < 0.05). The authors' conclusion
    is "reduces markers of resistance exercise quality more than quantity". Velocity and RPE were
    more sensitive, but volume load did not miss the restriction.
  - The "central and perceptual mechanism" reading is an inference from higher RPE at the same
    relative intensity. The study did not isolate it.
- **Lamon 2021 (full text).**
  - Mixed-muscle FSR 0.072 vs 0.059 %/h (-18%, p = .040). Cortisol +21% (p = .030). Testosterone
    AUC -24% (p = .029). Breakdown markers unchanged.
  - Precisions:
    - The sleep x time interaction for testosterone was not significant (p = .063).
    - Participants were "healthy male and female students" whose training status is not
      reported; the notes call them "untrained".
    - There was no exercise, and synthesis was measured for 2 h in the afternoon after breakfast.
  - The record's limitation line has been corrected.
- **Saner 2021 (full text): confirmed.** SarcPS 1.11 %/day with restriction vs 1.77 %/day with
  restriction plus HIIE. The measured fraction was sarcoplasmic, as the notes say.

**Corrected wording.** "Nine nights of 5 h in bed in 10 resistance-trained women barely reduced
volume load (<1%, although significant). It slowed lower-body compound lifts by up to 15% and
raised session RPE by 11%, so lifting quality degraded more than quantity. Higher effort at the
same relative load suggests a central or perceptual contribution, but this was not isolated. In
13 young adults who did not exercise, one night of total deprivation lowered postprandial
mixed-muscle protein synthesis by 18% and shifted cortisol (+21%) and testosterone AUC (-24%)."

**Grade.** Promising.

### 3. No RCT shows chronic sleep restriction blunts gains in trained lifters

**Verdict: confirmed.**

**Evidence.**
- **Borba 2024 (full text, now upgraded).** A sharper description than the notes give:
  - 36 men, 12 per group, about 40 y old. All were previously untrained: no regular resistance
    training or systematic exercise in the past year.
  - Short sleepers slept **5:47 h per night** (6:17 h per day including naps) by actigraphy.
  - Training was **elastic-band** exercise, 2 sets to failure, 16 sessions.
  - **"Arm muscle area" is an anthropometric estimate** from arm circumference and triceps
    skinfold, not imaging.
  - Groups were formed by habitual sleep, so the study is not randomised.
  - Both training groups improved, with no group difference.
- **Knowles 2024 (abstract): confirmed.** Sleep restriction alone did not change the
  transcriptome. About 3,000 transcripts responded to exercise in both conditions; only 39% of
  down-regulated and 18% of up-regulated genes were shared.
- **Searches to refute.** A web search and a Europe PMC query (sleep restriction or deprivation x
  strength, hypertrophy or resistance training, 2025-2026) found no RCT of chronic restriction on
  training adaptation in humans. The only adaptation-like datum is a rat study (Nosé 2026). A
  registered crossover (NCT06223776) tests acute restriction only.

**Corrected wording (minor).** "...and one small, non-randomised study in previously untrained
middle-aged men (about 5.8 h of sleep a night; elastic-band training; anthropometric arm muscle
area) that found no difference."

**Grade.** Speculative, as the notes have it.

### 4. Extra protein adds a small amount; the 1.62 g/kg/day break point is imprecise

**Verdict: confirmed.**

**Evidence.**
- **Morton 2018 (full text): confirmed.**
  - +2.49 kg 1RM (0.64 to 4.33), against a 27 +/- 22 kg training gain (the paper itself says 9%).
  - +0.30 kg FFM (0.09 to 0.52).
  - Break point 1.62 g/kg/day (1.03 to 2.20) from 42 arms and 723 participants. The segmental
    model was "not statistically significant (p = 0.079)" and is presented anyway.
  - The 2020 correction adds only a conflict-of-interest declaration (Schoenfeld, Dymatize
    advisory board).
- **Nunes 2022 (full text, Tables 2-4): confirmed.**
  - Under 65 y, lean body mass: 1.2-1.59 g/kg/day SMD 0.15 (-0.02 to 0.31) vs 1.6 g/kg/day or
    more 0.30 (0.17 to 0.43).
  - Lower-body strength at 1.6 g/kg/day or more: 0.40 (0.23 to 0.57), of which under 65 y 0.38
    (0.19 to 0.56). At 1.2-1.59 g/kg/day: 0.08 (NS; that row is not split by age).
  - The abstract misprints the lower-body CI; confirmed.
  - **Caveat:** the dose subgroups are between-study comparisons and are not consistent across
    outcomes. Bench press at 1.6 g/kg/day or more was 0.13 (-0.15 to 0.41, NS), and the
    meta-regression for bench press was flat. Added to the record.
- **Tagawa 2021 (full text, now upgraded): confirmed.**
  - +0.39 and +0.12 kg per 0.1 g/kg/day below and above 1.3 g/kg/day.
  - The authors say resistance training "markedly suppressed" the decline in efficiency above that
    intake.
  - Five authors are Meiji employees.
- **Searches to refute.**
  - Tagawa 2022 (Sports Med Open, abstract) is the strength counterpart: with RT, strength rose
    0.72% per 0.1 g/kg/day up to about 1.5 g/kg/day and then plateaued. This supports the range.
  - A 2026 whey network meta-analysis appeared in search results only and was not read.

**Corrected wording.** None needed. If space allows, add: "a spline meta-analysis of strength
(Tagawa 2022) also plateaus near 1.5 g/kg/day".

**Grade.** Promising for the dose range; established that the added effect is small next to
training.

### 5. 100 g vs 25 g milk protein; no hard per-meal ceiling; timing secondary

**Verdict: confirmed, with two precisions.**

**Evidence.**
- **Trommelen 2023 (full text): numbers confirmed.**
  - Myofibrillar synthesis was "~20% higher during the early 0- to 4-h period but ~40% higher
    during the subsequent 4- to 12-h period".
  - 18% of 25 g was incorporated by 12 h, against 13 g (13%) of 100 g, which was still rising
    linearly.
  - **Precision 1:** amino acid oxidation *did* rise with 100 g. The authors call the rise
    "negligible when compared to the whole-body protein synthetic response". "Negligible extra
    oxidation" is acceptable only with that qualifier.
  - **Precision 2:** participants were 36 *recreationally active* men who exercised 1-3 times a
    week. They were not resistance-trained, but "untrained" is loose.
  - One author is a FrieslandCampina (dairy) employee.
- **Witard and Mettler 2024 (abstract): confirmed as described.** The "resistance-trained young
  women" counter-evidence they cite was not located in this pass either.
- **Schoenfeld 2013 (full text, now upgraded).** In the unadjusted analysis, timing had a
  small-to-moderate effect on hypertrophy. It disappeared once total protein intake was entered as
  a covariate (difference 0.14 +/- 0.11, P = 0.19). So "timing does not matter once total protein
  is matched" is a cross-study statistical adjustment, not a finding of protein-matched trials.
- **Tavares 2025 (abstract): confirmed.** 18 of 32 completed; the trial was "randomized
  non-controlled".
- **Searches to refute.** A completed but apparently unpublished trial (ISRCTN 45165294, single
  bolus vs three meals after resistance exercise) may resolve this. No 2025-2026 replication with
  whey or with trained lifters was found.

**Corrected wording.** "...with oxidation rising only negligibly relative to synthesis. The study
was acute, used casein-rich milk protein and recruited recreationally active (not
resistance-trained) men... Protein timing around the session showed no effect on strength or
hypertrophy once total daily protein was accounted for statistically (Schoenfeld 2013)."

**Grade.** Contested, as the notes have it.

### 6. Training in a deficit impairs lean-mass gains but not strength; more protein helps

**Verdict: corrected (wording).**

**Evidence.**
- **Murphy 2022 (abstract only; full text blocked): numbers confirmed.**
  - Analysis A: lean mass ES -0.57 (p = 0.02); strength ES -0.31 (p = 0.28).
  - Analysis B: lean mass -0.11 vs 0.20; strength 0.84 vs 0.81.
  - Meta-regression threshold: about 500 kcal/day.
  - **The strength result is a non-significant negative point estimate from few directly
    controlled trials.** It shows that an impairment of strength gains was not detected, not that
    strength was spared. (A secondary source puts the whole review at 59 studies and 1,495
    participants; not verified.)
- **Longland 2016 (abstract): confirmed.** LBM +1.2 vs +0.1 kg; fat mass -4.8 vs -3.5 kg;
  performance improved similarly.
- **Refalo 2025 (full text from the AUT repository, now upgraded): confirmed.**
  - Scaled to body mass, the beta of 0.07 has a 95% HDI of -0.01 to 0.14, which crosses zero. Only
    the FFM-scaled beta (0.06, 0.01 to 0.12) excludes zero. That fits the claim's emphasis on
    FFM scaling.
  - The practical section suggests about 2.5 g/kg FFM/day or more (range 2.5-4.2).
- **Searches to refute.** No 2025-2026 meta-analysis of deficit size and RT outcomes was found.

**Corrected wording.** "Training in an energy deficit impaired lean-mass gains (ES -0.57) but did
not significantly impair strength gains (ES -0.31, p = 0.28, few trials)..."

**Grade.** Promising (lean mass impaired; strength not shown to be impaired). Speculative for the
500 kcal threshold.

### 7. Creatine increases strength beyond training

**Verdict: corrected.**

**Evidence.**
- **Wang 2024 (full text): every number confirmed.**
  - Upper body +4.43 kg (3.12 to 5.75), I2 0%. Lower body +11.35 kg (8.44 to 14.25), I2 0%.
  - Men: +4.95 and +11.68 kg.
  - Women: 1.54 (-1.81 to 4.89) and 8.03 (-0.83 to 16.90), from 2 female-only studies (40 women)
    plus 9 women in 1 mixed study.
  - Co-author Candow declares creatine-industry ties.
- **Wang 2026 (full text, now upgraded).**
  - Upper body g 0.54 (0.37 to 0.71); prediction interval -0.13 to 1.20; 31 studies.
  - **Lower body is g 0.66 (0.47 to 0.85) with all studies, and 0.55 (0.38 to 0.71) after
    removing one outlier** (g = 3.77).
  - **Egger tests were significant for both strength outcomes.** Trim-and-fill lowered them to
    **g 0.36 (upper) and 0.35 (lower)**. The notes omit this.
  - "Adults under 50" applies to Wang 2024, not to Wang 2026.
- **Lanhers 2015 and 2017 (abstract): numbers confirmed.** These compare creatine with placebo
  whether or not participants trained (training was a covariate), so they do not test "with
  resistance training" directly.
- **Searches to refute.** 2025-2026 reviews in women (active-female review 2025; a postmenopausal
  meta-analysis 2026, abstract seen in search only) still call female data sparse. Nothing
  contradicts the direction.

**Corrected wording.** "Creatine with resistance training increases strength beyond training
alone: +4.4 kg upper body and +11.4 kg lower body in adults under 50 (Wang 2024). In the 2026
three-level meta-analysis, g was about 0.55, falling to about 0.35 after adjustment for
small-study bias. The evidence is clear in men and sparse in women."

**Grade.** Established for direction; promising for magnitude.

### 8. Creatine's direct hypertrophy effect is small; DXA overstates it; PCr mechanism

**Verdict: corrected.**

**Evidence.**
- **Burke 2023 (full text): numbers confirmed, but the claim's framing is too strong.**
  - Pooled SMD 0.11 (CrI -0.02 to 0.25).
  - **Every site estimate (0.10-0.16 cm) has a credible interval that crosses zero**, for example
    elbow flexors 0.10 (-0.13 to 0.32) and knee extensors 0.13 (-0.07 to 0.37).
  - The young-adult ES of 0.23 (0.01 to 0.44) comes from 4 studies.
  - The authors still read it as "a small increase". "Real but small" should be "probably small,
    and not clearly distinguishable from zero".
  - **The notes call Burke an "independent replication"; it is not industry-independent.**
    Candow, Forbes and Schoenfeld (formerly on the Dymatize advisory board) declare
    creatine-related ties.
- **Ashtary-Larky 2025 (full text, now upgraded): numbers confirmed.**
  - FFM +1.39 kg (1.07 to 1.70); body mass +0.89 kg; trained 1.82 vs untrained 1.23 kg (NS).
  - The authors argue the opposite of the notes for trained people: FFM gains in trained people
    "likely reflect muscle accretion" and in untrained people water. Both sides concede that "no
    studies have directly quantified the relative contributions of water and muscle mass".
  - So "DXA/BIA overstates it because creatine adds intracellular water" is a plausible inference,
    not a measured finding.
- **Kreider 2017 (full text): confirmed with a precision.** "Increase muscle creatine and PCr by
  20-40%" refers to total creatine and PCr together.

**Corrected wording.** "Measured directly by imaging, creatine's added hypertrophy is probably
small: SMD 0.11 (95% CrI -0.02 to 0.25), with site estimates of +0.10 to 0.16 cm whose intervals
all include zero. DXA/BIA fat-free mass gains of about 1.4 kg are larger, plausibly partly because
of intracellular water, but no study has partitioned water from muscle. Supplementation raises
muscle total creatine and PCr by 20-40%, which plausibly allows more training work."

**Grade.** Promising for a small effect. Speculative for how much of the FFM gain is water.

### 9. Creatine's cognitive benefit in healthy young adults is unproven

**Verdict: corrected (the conclusion stands, and is stronger than the notes realise).**

**Evidence.**
- **Prokopidis 2023 (full text, now upgraded): numbers confirmed.**
  - Overall 0.29 (0.04 to 0.53); older adults 0.88 (0.22 to 1.55); young adults 0.03 (-0.14 to
    0.20).
  - The double-counting letter is confirmed (Eckert and Pascher, PMID 36644917).
  - The author reply (PMID 36644912) is still unread. Secondary sources (a search summary and
    Citherlet 2026) report that the reanalysis lost the overall effect but kept the older-adult
    effect, with a young-adult SMD of about 0.02 (-0.27 to 0.31).
- **Xu 2024 (full text): numbers confirmed, but the record was wrong to treat it as clean.**
  - **Citherlet 2026** (Front Nutr commentary; new record; full text) shows that Xu 2024 commits
    the same unit-of-analysis error. Multiple non-independent memory subtests per trial were
    pooled as independent; Alves 2013a/b alone contribute at least seven memory subtests each.
  - The commentary also reports that **EFSA's 2024 health-claim opinion** said no conclusions
    could be drawn from this meta-analysis for that reason. The EFSA opinion itself was not read.
  - The 2025 corrigendum fixed only wording.
  - The "GRADE moderate" for memory should therefore not be relied on. The `xu-2024` grade has
    been changed to contested.
- **McMorris 2024 (abstract): confirmed.**

**Corrected wording.** "There is no credible evidence of a cognitive benefit in healthy young
adults. Memory effects concentrate in older adults (Prokopidis 2023: young SMD 0.03). Both pooled
meta-analyses suffer from double counting of non-independent outcomes: Prokopidis 2023, whose
reanalysis reportedly lost the overall effect, and Xu 2024 (memory SMD 0.31, which also pooled
patients). EFSA reportedly drew no conclusions from the latter."

**Grade.** Contested overall. For healthy young adults, the benefit is unsupported.

### 10. Caffeine: small strength gain, higher bar velocity

**Verdict: confirmed.**

**Evidence.**
- **Grgic 2018 (full text): confirmed.** 10 strength studies; SMD 0.20 (0.03 to 0.36); upper
  body 0.21 (0.02 to 0.39); lower body 0.15 (-0.05 to 0.34), p = 0.147.
- **Grgic 2020 umbrella (abstract): confirmed.** Moderate GRADE for strength.
- **Guest 2021 (full text): confirmed.**
  - 3-6 mg/kg; possibly 2 mg/kg. "60 min pre-exercise" is described as "the most commonly used
    timing", which makes it a convention, not a tested optimum.
  - Adenosine antagonism is the stated central mechanism. Sleep disruption is noted.
- **Xiao 2025 (full text, now upgraded): confirmed.** Mean velocity SMD 0.42 (0.19 to 0.65),
  I2 85%. The low-habitual-user subgroup is 0.87 (0.72 to 1.02).
- **Searches to refute.** Nothing newer contradicts this.

**Corrected wording.** None needed. Optionally add "the 60-min timing is common practice rather
than a tested optimum".

**Grade.** Established for the small strength effect; promising for velocity and habituation.

### 11. Regular CWI probably blunts hypertrophy and strength gains

**Verdict: confirmed.**

**Evidence.**
- **Pinero 2024 (full text via NCBI): confirmed.**
  - cSMD -0.22 (-0.47 to 0.04); p(<0) 0.957; p(<-0.1) 0.834.
  - Training-status moderation was highly uncertain. Only 1 of 8 studies included women.
- **Grgic 2023 (abstract): confirmed.** -0.23 (-0.45 to -0.01); limb-only -0.31 (-0.61 to
  -0.01); whole-body -0.08 (-0.53 to 0.38).
- **Malta 2021 (abstract): confirmed.** Its endurance CI is printed inconsistently in the
  abstract.
- **Berjisian 2026 (full text): confirmed.** Soreness relief up to 96 h, CK at 24-72 h, faster
  power recovery; AMSTAR 2 and GRADE ratings low. Note that CWI "did not improve muscular strength
  performance" in acute recovery.
- **Mechanism.**
  - Fuchs 2020: 0.016 vs 0.021 MPE; 0.058 vs 0.072 %/h; 1.48 vs 1.67 %/day.
  - Roberts 2015 (full text via NCBI): +17% type II CSA and +26% myonuclei with active recovery
    only; blunted Pax7/NCAM satellite cells and p70S6K.
- **Searches to refute.** No 2025-2026 trial reversing the direction was found. Yu 2026 (network
  meta-analysis, abstract) agrees: passive recovery ranks best for RT strength.
- **One caveat.** The whole-body CWI subgroup (-0.08, NS) concerns strength only. A whole-body
  trial seen only in search results (Fyfe 2019) reports blunted type II fibre hypertrophy, so
  whole-body immersion should not be read as safe for hypertrophy.

**Corrected wording.** None needed.

**Grade.** Promising.

### 12. Massage and compression act on perception; high-dose ibuprofen halved hypertrophy

**Verdict: corrected.**

**Evidence.**
- **Davis 2020 (full text): confirmed.**
  - Strength SMD 0.17 (-0.08 to 0.42), NS.
  - DOMS 1.13 (0.44 to 1.82), I2 86%, which the authors attribute to one outlier.
- **Dupuy 2018 (full text): confirmed.**
- **Brown 2017 (abstract): confirmed.** Strength-recovery ES 0.62 (0.39 to 0.84). This
  describes recovery after a bout, up to and beyond 24 h.
- **Lilja 2018 (abstract).**
  - +7.5% vs +3.7% (34 cm3, P = 0.029), confirmed.
  - Strength gains were similar in the weight-stack leg (11-20% in both groups). Only the
    flywheel-leg gains were smaller with ibuprofen.
- **Contradicting evidence not in the notes: Mallinson 2025** (J Physiol; new record; abstract).
  - 17 **trained** men took diclofenac 75 mg/day or placebo for 12 weeks of unilateral isokinetic
    training.
  - The NSAID **increased** quadriceps CSA gain (8.6% vs 3.9%, P = 0.038) with no difference in
    strength.
  - Together with earlier null findings in search results (Krentz 2008; a 2023 Lilja-group
    follow-up), the direction of NSAID effects on hypertrophy is contested and may depend on drug,
    dose, training status and protocol.
  - The `lilja-2018-nsaid` grade is now contested.

**Corrected wording.** "Massage does not improve strength or other performance (SMD 0.17, -0.08
to 0.42) but reduces soreness. Compression aids strength recovery in the hours to days after a bout
(ES 0.62). Neither has been tested for long-term adaptation. The effect of high-dose NSAIDs is
contested. Ibuprofen 1,200 mg/day roughly halved quadriceps hypertrophy in young untrained adults
(+3.7% vs +7.5%; Lilja 2018). A 2025 trial in trained men found that diclofenac increased
hypertrophy without changing strength (Mallinson 2025)."

**Grade.** Promising for massage and compression; contested for NSAIDs.

### 13. Wellness and bar velocity are the most sensitive monitors

**Verdict: corrected (one phrase).**

**Evidence.**
- **Saw 2016 (full text): confirmed.** Subjective measures had "superior sensitivity and
  consistency". The evidence comes mostly from validated multi-item tools in endurance and team
  sports.
- **Duignan 2020 (full text via NCBI): confirmed.**
- **Weakley 2021 (full text): confirmed.**
- **Morán-Navarro 2017 (abstract).** Velocity against fixed loads tracked the 24-48 h recovery
  difference. Volume load was not a comparator in this study.
- **Knowles 2022.** As in claim 2, volume load *did* fall significantly (<1%). Velocity was the
  more sensitive marker, but volume load did not miss the effect.

**Corrected wording.** "...Bar velocity at a fixed load detects recovery and sleep-loss effects
more sensitively than volume load (which fell by less than 1% under sleep restriction)..."

**Grade.** Promising.

### 14. HRV-guided training gives at most small benefits; speculative for strength

**Verdict: corrected.**

**Evidence.**
- **Manresa-Rocamora 2021 (full text, now upgraded).**
  - The population was **sedentary, physically active and endurance-trained** participants
    (8 studies, 199 participants), not "endurance athletes". Two of the 8 interventions combined
    endurance and strength training.
  - VO2max 0.20 (-0.07 to 0.47); performance 0.20 (-0.09 to 0.48); vagal HRV 0.50 (0.09 to
    0.91). Confirmed.
  - An earlier meta-analysis (Granero-Gallegos 2020) reported a significant VO2max benefit. "At
    most small" rests on the better-specified 2021 analysis.
- **Plews 2013, Thorpe 2017, Claudino 2017 (abstracts): confirmed.**
- **Searches to refute.** No meta-analysis of HRV-guided *resistance* training was found through
  2026; a 2026 Frontiers review still describes the evidence as small, short trials. No trial
  found shows that a pre-session readiness tool beats in-session RPE/RIR for long-term strength.

**Corrected wording.** "HRV-guided training gives at most small, non-significant performance
benefits in mostly endurance-training trials in sedentary to trained people (SMD 0.20)..."

**Grade.** Speculative.

---

## Spot checks (numbers not in the claim list)

| # | Number in the notes | Source checked | Result |
|---|---|---|---|
| S1 | Fuchs 2020: incorporation 0.016 vs 0.021 MPE; MyoPS 0.058 vs 0.072 %/h; 2-wk 1.48 vs 1.67 %/day | Full text and abstract | Confirmed. 12 men; one leg at 8 C, the other at 30 C; 20 g milk protein. |
| S2 | Roberts 2015: type II fibre CSA +17%, myonuclei +26% with active recovery only | Full text (NCBI) | Confirmed. 21 physically active men; 12 wk at 2 d/wk. |
| S3 | Davis 2020: DOMS SMD 1.13 (0.44 to 1.82; I2 86%) | Full text | Confirmed. 10 studies, n = 311; heterogeneity driven by one outlier. |
| S4 | Yu 2026: CWI vs passive g 0.00 (-0.38 to 0.38), moderate certainty; perceived recovery g -0.66 | Abstract | Confirmed. 24 studies and 598 participants in the RT-strength network; 69-85% of comparisons indirect. |
| S5 | Helms 2023: 17 completers; biceps thickness BF10 = 1.4; bench 1RM rose more with the large surplus | Abstract | Confirmed. Bench BF10 9.9 and 14.5. |
| S6 | Saner 2021: SarcPS 1.11 vs 1.77 %/day | Full text and abstract | Confirmed. |
| S7 | Longland 2016: LBM +1.2 vs +0.1 kg | Abstract | Confirmed. Fat mass -4.8 vs -3.5 kg. |
| S8 | Nunes 2022: bench SMD 0.18 (0.04 to 0.32) | Full text, Table 3 | Confirmed for RE trials. All RCTs: 0.20 (0.06 to 0.34); the abstract's 0.18 (0.03 to 0.33) is the <65 y subgroup. |

No spot check found a wrong number.

---

## Wider concerns about the notes

1. **Two pieces of contradicting evidence were missed.**
   - **Mallinson 2025** (an NSAID increased hypertrophy in trained men) undercuts the notes'
     cross-cutting mechanism 2 ("high-dose NSAIDs damp prostaglandin signals... so faster
     recovery can mean smaller adaptation"). For NSAIDs this is now contested; it remains
     well-supported only for CWI.
   - **Citherlet 2026 and the EFSA opinion** show that Xu 2024 is no more reliable than
     Prokopidis 2023.
   - The 2025-2026 sweep described in the notes should have surfaced both: each was found here
     with a single search.
2. **The Craven-Kong reconciliation is overstated.** The notes say the two meta-analyses "agree",
   but they disagree on total deprivation. Kong's "maximum force" is largely isometric and handgrip,
   and its pooled model is fixed-effect.
3. **Industry ties are under-reported in the creatine and protein sections.**
   - The notes cite Burke 2023 as an "independent replication"; three of its authors have
     creatine-industry ties.
   - Ties also apply to Wang 2024 (Candow), Prokopidis 2023 (Forbes, Candow), Ashtary-Larky 2025
     (Forbes, Candow, Antonio), Tagawa 2021 (Meiji employees), Trommelen 2023 (FrieslandCampina
     employee) and Morton 2018 (Schoenfeld, per the 2020 correction).
   - The thesis should state this consistently, not only for Kreider and Antonio.
4. **Small-study bias in creatine strength.** Wang 2026 reports significant Egger tests for both
   strength outcomes, and its trim-and-fill estimates are about a third smaller. The notes quote
   the unadjusted g only.
5. **Read-level labels in the claim list were optimistic.**
   - Claims 7, 8, 10, 11, 12 and 13 were labelled full-text, but each leaned partly on
     abstract-only records (Lanhers, Wang 2026, Grgic 2020, Xiao, Grgic 2023, Malta, Roberts,
     Brown, Lilja, Dupuy, Duignan, Morán-Navarro).
   - This pass upgraded several to full text and set the rest to `abstract`.
   - **Still abstract-only and load-bearing:** Knowles 2022 (not open access), Murphy 2022 (full
     text blocked here), Lilja 2018, Brown 2017, Malta 2021, Grgic 2023 and Lanhers 2015/2017.
     The chapter must not present their effect sizes as verified.
6. **Population drift in descriptions.**
   - Lamon's participants are called "untrained", but training status is unreported.
   - Trommelen's are called "untrained", but they were recreationally active.
   - Borba's participants are untrained middle-aged men doing elastic-band work with anthropometric
     outcomes.
   - Manresa-Rocamora's are called "endurance athletes", but the sample was mixed.
   - In a thesis aimed at trained lifters, each of these matters.
7. **"Not significant" read as "no effect".** Murphy's strength result (ES -0.31, p = 0.28) and
   Grgic's whole-body CWI result (-0.08, wide CI) should be phrased as "not shown", not as
   "spared" or "safe".
8. **Sleep evidence in trained lifters is thin but growing.** Del Val-Manzano 2026 (n = 24,
   resistance-trained, velocity-based) is the closest match to the thesis population and should be
   read in full before the chapter is written. Its sex-specific pattern may bear on the notes'
   "sex differences" unknown.
9. **Environment notes.** WebFetch could not resolve pmc.ncbi.nlm.nih.gov or academic.oup.com in
   this session. Full texts came from the Europe PMC REST API, NCBI E-utilities and the AUT
   repository. Wiley full text was blocked by a bot challenge.
