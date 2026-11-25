# Verification: Chapter 4, "Programming, periodization and autoregulation"

Independent verification pass, 2026-11-24, of `notes/programming-and-periodization.md`. I checked each
load-bearing claim against the primary source, using the full text where I could get it, and searched
for newer or contradicting evidence. I updated the evidence records in `evidence/sources/`: filled
`checked`, set `read_level` to what this pass read, fixed wrong numbers and descriptions, and added
findings that change how a claim should be read. I added four new records for sources this report cites,
listed at the end.

**What this pass read.**
- Full text:
  - Williams 2017: a copy of the published PDF hosted on a third-party site
    (fisiologiadelejercicio.com). Springer's own page returns a JavaScript challenge.
  - Via Europe PMC: Afonso 2019, Zhang Z 2026, Grgic 2017, González-Ravé 2022, Kiely 2018,
    Anyadike-Danes 2023, Hickmott 2022, Zhang X 2021, Huang 2025, Helms 2018, Currier 2026 (ACSM),
    Wang 2026, Jukic 2023, Rogerson 2024 (methods and results), Coleman 2024, Pancar 2026,
    Bell 2023, Travis 2020 and Winwood 2026.
  - Graham & Cleather 2021: the accepted manuscript in the St Mary's repository.
- Abstracts (PubMed E-utilities):
  - Periodization: Moesgaard 2022, Rhea & Alderman 2004, Kataoka 2021, Kataoka 2022, Harries 2015.
  - VBT and velocity loss: Orange 2022, Liao 2021, Zhang M 2022, Pareja-Blanco 2020 and 2026.
  - RIR accuracy: Halperin 2022 (published version), Refalo 2024, Zourdos 2021, Steele 2017,
    Mansfield 2020, Hughes 2020 (retracted), Droguett 2025.
  - Tapering and surveys: Burke 2023, Travis 2021 survey, Pritchard 2016, Amdi 2026, Shaw 2022,
    Washif 2025, Swinton 2009, Colquhoun 2017, Rhea 2002.
  - New block-periodization trials: Micke 2026, Puschkasch-Möck 2026.
- **Not obtainable:** Moesgaard 2022 full text (Springer blocked; OpenAlex lists no open copy, and
  the KU and SDU repository pages have no file). Its subgroup, comparator and heterogeneity details
  therefore stay at abstract level.

**Verdict summary**

| # | Claim (short) | Verdict | Grade after check |
|---|---|---|---|
| 1 | Periodized > non-periodized for 1RM when volume-equated; Williams' larger ES reflects extra volume | corrected | contested |
| 2 | The periodized vs non-periodized literature cannot test periodization | confirmed (minor wording) | established |
| 3 | LP ≈ UP for strength and hypertrophy; trained-UP edge rests on one subgroup | corrected (subgroup contradicted) | promising |
| 4 | No support for block superiority; conjugate untested; reverse not superior | corrected (block) | speculative (block); convention (conjugate); promising (reverse) |
| 5 | Conceptual critique vs proponents; coaches reject fixed timelines | confirmed, wording corrected | contested |
| 6 | Autoregulation ≈ or slightly > percentage loading; positive syntheses flawed | corrected (critique applies to Hickmott too) | contested |
| 7 | Autoregulated groups won because they trained heavier | corrected (true for bench, not squat, in Helms) | promising (dose differed); speculative (mechanism) |
| 8 | VBT not reliably better for 1RM; may help jump/COD | confirmed | promising |
| 9 | Strength insensitive to velocity loss 0-40%; ≤25% equal or slightly better | corrected | promising (hypertrophy); contested (strength) |
| 10 | RIR underpredicted by ~1 rep; accurate enough for heavy low-rep work | confirmed, last sentence corrected | promising; speculative for >85% 1RM |
| 11 | Deloads near-universal; thin trial evidence | corrected (prevalence overstated) | convention (practice); promising (trial results) |
| 12 | Peaking: 30-60% volume cut, 1-2 wk taper, 2-4 days off | corrected (ranges) | promising |
| 13 | Tapering 87-99% in surveys; practice vs evidence | corrected (78-99%; one survey sample was tapering lifters only) | convention |
| 14 | ACSM 2026: periodization effect on strength undetermined, none on hypertrophy | confirmed | contested |

---

## Claim-by-claim

### 1. Volume-equated periodization gives slightly larger 1RM gains; Williams' larger estimate reflects extra volume

**Verdict: corrected.** The Moesgaard numbers are right. The contrast with Williams, and the inference
drawn from it, are wrong.

**Evidence.**
- Moesgaard 2022 (abstract re-read):
  - periodized vs non-periodized 1RM: ES 0.31 (95% CI 0.04-0.57), Z = 2.28, P = 0.02;
  - hypertrophy: ES 0.13 (-0.10 to 0.36), P = 0.27.
  - Both match. The full text is still unread.
- Williams 2017 (full text):
  - **Williams did not exclude volume-equated comparisons.** Volume was equated in 45 of 81
    effects (55.6%; 7 of 18 studies).
  - The authors state that "training volume was not a significant predictor of change in 1RM".
  - Pooled ES 0.43 (0.27-0.58) is correct. Adjusting for effects nested within studies gave ES 0.38
    (0.09-0.66).
  - Removing 14 outlying effects from 5 studies gave **ES 0.23 (0.13-0.33)** and removed the
    heterogeneity (I² 62.5% before; Q = 51.17, P = 0.91 after). Egger's test was significant
    (P = 0.006).
  - Sample: 612 participants, ages 15-71, 53% of effects from untrained participants.
- The two meta-analyses differ in study sets, eras and models. A difference between their point
  estimates cannot be attributed to volume. Williams' own volume moderator was null. Its bias-trimmed
  estimate (0.23) is *smaller* than Moesgaard's (0.31).
- No 2023-2026 periodized vs non-periodized meta-analysis was found (web and PubMed sweep).
- The ACSM 2026 overview counts one review in favour (n = 616), two null (n = 1,075) and one
  undetermined.

**Corrected wording.** "When volume is equated, periodized training gives slightly larger 1RM gains
than non-periodized training (ES 0.31, 95% CI 0.04-0.57), and no extra hypertrophy (ES 0.13, -0.10 to
0.36). The earlier meta-analysis was not restricted to volume-equated studies. Its pooled estimate
(ES 0.43, 0.27-0.58) falls to 0.38 when effects are nested within studies, and to 0.23 (0.13-0.33)
when outliers are removed. It found no moderating effect of volume equation and evidence of
publication bias. Across analyses, the advantage of periodized over constant programs is small."
Grade: contested. Read level: Moesgaard abstract; Williams full text.

### 2. The periodized vs non-periodized literature cannot test periodization

**Verdict: confirmed, with one wording correction.**

**Evidence.** Afonso 2019 (full text) confirms each part:
- 21 studies across the two meta-analyses (Rhea & Alderman's 11 and Williams' 18 overlap);
- none compared periodized programs with varied non-periodized programs;
- none tested predictions about the timing of adaptations;
- 8 of 21 compared other things (volume, single vs multiple sets, supervision);
- one was unpublished (McCarthy 1991);
- every study scored maximal risk of bias on Afonso's two-item instrument.

Afonso's term is "constant programs", meaning programs without planned variation, not "constant
load". Several of these comparator arms progress load at fixed sets × reps, so "constant-load"
overstates the point. Afonso audited only Rhea 2004 and Williams 2017. That Moesgaard 2022's
comparators are of the same kind is still an inference: the full text is unread, and the ACSM
definition of non-periodized is "not manipulating RTx during the program". The grade "established"
fits a documented audit of study designs.

**Corrected wording.** "...All 21 primary studies used constant (non-varied) comparators..." Keep
the rest.

### 3. Linear ≈ undulating for strength and hypertrophy; trained-lifter UP edge rests on one subgroup

**Verdict: corrected.** The pooled numbers are right. The "possible undulating advantage in trained
lifters" is not merely fragile: the newer, larger synthesis tested it directly and found nothing.

**Evidence.**
- **Zhang Z 2026** (full text): 29 studies, 704 participants, ages 14-80, search to July 2025.
  - Upper body SMD 0.08 (-0.15 to 0.31), I² 46.1%; squat SMD 0.08 (-0.10 to 0.26), I² 20.3%,
    Egger p < 0.05. Both match.
  - Its Table 3 subgroups by training experience, missed by the notes:
    - **trained participants:** upper body SMD 0.03 (-0.34 to 0.40), 12 studies; squat SMD
      -0.02 (-0.22 to 0.18), 15 studies;
    - not trained: upper 0.13 (-0.15 to 0.42); squat 0.25 (-0.09 to 0.59).
  - The authors write that they "observed similar strength improvements between LP and UP
    regardless of training experience", diverging from Moesgaard.
- Moesgaard's trained subgroup, ES 0.61 (0.00-1.22), P = 0.05, is confirmed at abstract level. It
  now stands against a larger null subgroup analysis. Its record grade is downgraded to speculative.
- Hypertrophy:
  - Grgic 2017 (full text) d = -0.02 (-0.25 to 0.21), confirmed. But 12 of its 13 studies used
    untrained participants (only Monteiro 2009 used trained), so it says little about trained lifters.
  - Zhang Z 2026 found no LP-UP difference in fat-free mass (7 studies) in mixed populations.
  - Moesgaard's ES 0.05 (-0.20 to 0.29) is abstract only.
- Harries 2015 (abstract): 17 studies, n = 510, no difference. Confirmed.

**Corrected wording.** "Linear and undulating periodization produce similar strength gains (2026
synthesis, 29 studies: upper body SMD 0.08, -0.15 to 0.31; squat SMD 0.08, -0.10 to 0.26), including in
trained participants (upper body 0.03, -0.34 to 0.40; squat -0.02, -0.22 to 0.18). An earlier
subgroup suggesting an undulating advantage in trained lifters (ES 0.61, 0.00-1.22) was not
reproduced. Hypertrophy also does not differ, though that evidence comes almost entirely from untrained
participants." Grade: promising.

### 4. No support for block superiority; conjugate untested; reverse not superior

**Verdict: corrected for block. Confirmed for conjugate and reverse.**

**Evidence.**
- **Block.**
  - There is still no meta-analysis of block periodization for maximal strength. The PubMed
    "block periodization AND meta-analysis" search returns only an endurance meta-analysis and an
    unrelated cluster-set review.
  - "No controlled-trial support" is too strong:
    - Bartolomei 2014 reported a possible upper-body advantage (MBI ~60%).
    - **Micke 2026** (Front Physiol; randomized crossover, n = 20 experienced HIFT athletes, two
      6-week load-matched phases) found concentrated "block" loading beat evenly distributed loading
      for deadlift 1RM (d = 0.85, p = 0.018), isometric mid-thigh pull (d = 0.82) and CrossFit Total
      (d = 0.78) (abstract).
  - Other trials favour neither model or the opposite:
    - Painter 2012: similar strength;
    - Bartolomei 2023: mixed sessions beat block for bench 1RM;
    - Puschkasch-Möck 2026 (n = 80, 14 weeks): no detectable superiority among programs.
  - Micke's "block" means concentrated high-intensity weeks, not the accumulation-transmutation-
    realization model. Its 6-week crossover phases also risk carryover.
- **Conjugate/Westside.** PubMed returns 0 hits for conjugate AND (periodization OR westside) AND
  strength. The web search found only practitioner material. Confirmed.
- **Reverse.** González-Ravé 2022 (full text): 11 studies, 200 athletes, mean PEDro 4.91; reverse
  was "no more effective" for maximal strength. Two studies reported larger 1RM gains with
  traditional periodization. Confirmed.
- **Grade.** "Convention" is the wrong grade for a claim about the *absence* of evidence. Convention
  describes practitioner practice without data. Block superiority is speculative (few small trials
  pointing both ways). Conjugate is convention. Reverse being not superior is promising.

**Corrected wording.** "No meta-analysis supports block periodization being superior for maximal
strength, and the few small trials conflict. One 2026 crossover in functional-fitness athletes
favoured concentrated loading for deadlift 1RM (d = 0.85, n = 20), whereas a 2023 trial favoured
mixed sessions over block for bench 1RM. Conjugate/Westside programming has no controlled trials.
Reverse linear periodization is not superior to other models (11 low-quality studies)."

### 5. Conceptual critique vs proponents; coaches use the label but reject fixed timelines

**Verdict: confirmed, with a wording correction on the coach survey and on read level.**

**Evidence.**
- Kiely 2018 (full text): Selye's GAS and Cannon's homeostasis as periodization's foundation;
  Mason's evidence that psychological factors shape stress responses; replacement by allostasis.
  Matches.
- Kataoka 2021 (abstract): "the inability to define periodization makes the statement of its
  superiority difficult to experimentally test". Matches.
- Buckner 2017, Cunanan 2018 and Stone 2021 were read only as abstracts, here and by the researcher.
  The claim's "read_level=full-text" applies only to Kiely and Anyadike-Danes.
- Anyadike-Danes 2023 (full text, n = 106):
  - 71% call their planning periodization; 33% agree adaptations are achievable in fixed
    timeframes; 37% agree capacities should be trained in sequence; 10% of all coaches (12% of
    periodization users) keep targets fixed. Confirmed.
  - But **40% disagreed and about 27% were neutral** on fixed timeframes, so "reject" overstates the
    result.
  - Coaches *did* endorse other periodization tenets: a season goal (85%), dividing the season into
    periods (73-74%) and general-to-specific progression (60%).
  - Respondents were 92% male, across mixed sports. Kiely is a co-author, so the survey comes from
    the critics' side.

**Corrected wording.** "Coaches mostly use the label (71%) and accept goal-setting and dividing the
season into periods, but only a minority endorse fixed adaptation timelines (33% agree, 40% disagree)
or fixed targets (10%)." Grade: contested.

### 6. Autoregulated vs percentage loading for 1RM

**Verdict: corrected.** The numbers are right. The methodological critique is applied one-sidedly.

**Evidence.**
- Hickmott 2022 (full text): MD 2.07 kg (-0.32 to 4.46), p = 0.09, SMD 0.21; subjective MD 3.15 kg,
  SMD 0.30; objective MD 0.88 kg, SMD 0.10; subgroup p = 0.35. All confirmed.
- Hickmott has the same weakness the claim attributes to the positive syntheses:
  - **it used a fixed-effect model on 247 comparisons from 133 participants** (and 457 comparisons
    from 308 participants for velocity loss), so its CIs are also too narrow;
  - its load-autoregulation set includes adolescents (female basketball players aged 15.8 y; rugby
    players aged 17 y). The record's "19-27 y" is corrected.
- Zhang X 2021 (full text):
  - SMD 0.64 (0.43-0.85), I² 0%, fixed effect, 17 reports from 8 studies;
  - designs: 4 RCTs, 2 non-randomised (Mann 2010; Mann 2011 thesis) and 2 matched-pairs;
  - APRE 0.78 (0.54-1.02). Confirmed.
- Huang 2025 (full text):
  - APRE SUCRA 93.0% (squat); PBT vs APRE bench SMD -0.83 (-1.22 to -0.44), squat -0.55 (-0.90 to
    -0.20). Confirmed.
  - Its discussion attributes the APRE advantage to sets to failure.
  - It reports "27 RCTs ... 428 participants" against 19 studies and 438 elsewhere. Confirmed.
  - It is a frequentist NMA, not fixed-effect pooling, so the "fixed-effect" criticism fits Zhang X
    2021, not Huang.
- ACSM 2026 (full text): autoregulation's effect on strength "cannot be determined". One review is
  positive (n = 308, QoE 75%; this is Hickmott's velocity-loss analysis). One shows no effect
  (n = 356, QoE 25%). The record had called the second "negative"; that is corrected.

**Corrected wording.** "...(MD 2.07 kg, -0.32 to 4.46; SMD 0.21; fixed-effect pooling of dependent
comparisons, so even this interval is optimistic). Syntheses claiming clear superiority (SMD 0.64;
APRE ranked first) lean on non-randomised APRE studies, protocols with sets to failure, and, in one
case, fixed-effect pooling of dependent outcomes." Grade: contested.

### 7. Autoregulated groups trained heavier; the advantage reflects dose, not readiness-matching

**Verdict: corrected.** The intensity numbers are right, but they come selectively from the lift
that fits.

**Evidence.**
- Helms 2018 (full text):
  - Bench: relative intensity 84.14% vs 78.70% 1RM (p < 0.001); RPE 7.3 vs 5.8. Confirmed.
  - **Squat average relative intensity did *not* differ: 79.73% vs 78.73% (p = 0.49).** Squat
    relative volume load also did not differ (p = 0.66). The RPE group's squat intensity was higher
    only in weeks 6-8.
  - Yet the largest effect size favouring RPE was for the squat (ES 0.50 +/- 0.63, 90% CL; +17.1 vs
    +13.9 kg), and the smaller one for the bench (0.28). So in Helms, "trained heavier" explains the
    bench but not the squat. Squat *effort* did differ (RPE 7.2 vs 6.5, p = 0.04).
- Graham & Cleather 2021 (accepted manuscript):
  - **front squat** intensity 83.2% vs 80.4% 1RM (back squat 83.6% vs 80.4%);
  - FS +11.7% vs +8.3% (p = 0.004); BS +10.8% vs +7.1% (p = 0.006). Confirmed.
  - The claim's "squat 83.2%" is the front-squat value.
  - The autoregulated group was stronger at baseline (BS 141.2 vs 129.1 kg).
- The dose interpretation (load tracking strength, equalised effort) is plausible. No trial isolates
  readiness-matching, which the notes correctly flag.

**Corrected wording.** "Where autoregulation beat fixed loading in trained lifters, the autoregulated
groups trained harder and usually heavier (bench 84.1% vs 78.7% 1RM in Helms 2018; front squat 83.2%
vs 80.4% in Graham 2021), though Helms' squat advantage arose with similar average loads (79.7% vs
78.7%) but higher RPE (7.2 vs 6.5). A better-matched dose (load tracking strength, effort equalised
across individuals) is the most plausible explanation; readiness-matching has not been isolated."
Grade: promising that dose differed; speculative for the mechanism.

### 8. VBT does not reliably beat percentage training for 1RM; may help jump and COD

**Verdict: confirmed.**

**Evidence.**
- Wang 2026 (full text now read):
  - 17 studies, 348 participants, aged ≥16 y with ≥6 months of RT experience;
  - strength SMD 0.21 (-0.01 to 0.43), p = 0.064, I² 0%;
  - jump 0.27 (0.03-0.51); COD 0.45 (0.17-0.73); sprint 0.14 (-0.11 to 0.39);
  - **GRADE moderate** for all four outcomes.
- Orange 2022 (abstract): SMD 0.06 (-0.51 to 0.63), 4 RCTs, 88 participants, low-quality evidence.
- Liao 2021 (abstract): squat MD 3.03 kg (-3.55 to 9.61).
- Zhang M 2022 (abstract): SMD 0.26 (0.03-0.49).
- All match.
- Nuance: Wang's point estimate (0.21) is similar to Zhang M's significant 0.26. The honest summary is
  "at most a small advantage that is not statistically reliable". The jump and COD advantages come
  from one meta-analysis; Orange found no power difference (0.11, -0.28 to 0.49).

**Wording.** Keep, adding "(GRADE moderate)" for Wang and "at most a small, statistically unreliable
advantage". Grade: promising. Wang read level is now full-text.

### 9. Strength largely insensitive to velocity-loss threshold; ≤25% equal or slightly better

**Verdict: corrected.**

**Evidence.**
- Jukic 2023 (full text):
  - the VL threshold "does not seem to affect strength and muscle endurance gains";
  - hypertrophy b = 0.006 per % VL (0.001-0.012); CMJ b = -0.040 (-0.079 to -0.001);
  - 846 participants fall to 735 (656 male) after removing duplicate datasets, mostly Smith-machine
    full squat;
  - confirmed.
- Hickmott 2022 (full text): ≤25% vs >25% VL, MD 2.32 kg (0.33-4.31), SMD 0.23, confirmed. But
  **the advantage was confined to studies that added other exercise**: with additional exercise
  SMD 0.62 (p = 0.002); without it SMD 0.13 (p = 0.25); subgroup difference p = 0.02. The notes omit
  this.
- **Pareja-Blanco 2026** (abstract; n = 158 trained men, bench, VL 0/15/25/50%) shows a significant
  VL × time interaction for 1RM. **VL25 gave the greatest 1RM gains**, above 0% and 15%. So strength
  was *not* insensitive to VL in the largest trial, and the lowest thresholds were not best. The trial
  also tested VL up to 50%, outside the claim's 0-40% range.
- Pareja-Blanco 2020 (abstract): **no between-group differences in jump or sprint**. The early-RFD
  decrease in VL40 is a within-group change (P = 0.04); no interaction is reported. "Better for
  jump/RFD" therefore rests on Jukic's barely significant meta-regression and Pareja-Blanco 2017
  (not re-checked here).

**Corrected wording.** "Across 0-40% velocity loss, meta-analyses find little effect of the threshold
on strength. A small advantage for ≤25% (MD 2.32 kg, 0.33-4.31) appears only in studies that added
other training. A 2026 bench trial (n = 158) found 25% VL beat 0% and 15%, so very low thresholds may
under-dose strength. Higher thresholds increase hypertrophy (b = 0.006 per % VL) and slightly impair
jump performance (b = -0.040). The evidence comes from a few laboratories, mostly Smith-machine work
in men." Grade: promising for hypertrophy and jump; contested for strength.

### 10. RIR underprediction by ~1 rep; accurate enough for heavy low-rep work

**Verdict: confirmed, except the final sentence, which extrapolates.**

**Evidence.**
- Halperin 2022 (published abstract):
  - 0.95 reps (0.17-1.73), I² 97.9%, 262 effects in 12 clusters, n = 414;
  - ≤12 reps β 0.06 vs >12 reps β 0.47; training status β -0.006 (-0.02 to 0.007);
  - between-person SD 1.45. Confirmed.
- Refalo 2024 (abstract): absolute error 0.65 +/- 0.78 reps for 1- and 3-RIR calls, n = 24. But the
  sets were taken to failure **at 75% 1RM**, a moderate load, not heavy low-rep work.
- Zourdos 2021 and Steele 2017 (abstracts) confirmed. Steele reports a "tendency towards improved
  accuracy with greater experience".
- Droguett 2025 (n = 16, back squat at 70%) found no difference between experienced and novice
  lifters, consistent with Halperin.
- Mansfield 2020 (n = 20 trained men, bench and row): RIR was *under*estimated in the first set at
  both 60% and **80% 1RM** (ES 1.30-2.89). Accuracy improved over sets.
- **Hughes, Peiffer & Scott 2020** ("Estimating RIR in four commonly used resistance exercises",
  JSCR) reported that 2-RIR estimates were most accurate at 85% 1RM. **It has been retracted**
  (JSCR 2021;35(3):585). The notes list it under "not retrieved". It must not be cited for heavy-load
  accuracy.

**Corrected wording.** "...Trained lifters called 1-3 RIR on the bench press at 75% 1RM to within about
0.65 reps. Accuracy is best close to failure and in short sets, so RIR is probably adequate for heavy,
low-rep strength work, but direct data above ~80% 1RM are sparse and first-set underprediction
persists even at 80%." Grade: promising for the pooled estimates; speculative for >85% 1RM.

### 11. Deloads near-universal; trial evidence thin

**Verdict: corrected.** The prevalence is overstated. The trial evidence is described correctly.

**Evidence.**
- Rogerson 2024 (full text, methods and results):
  - deload 6.4 +/- 1.7 days every 5.6 +/- 2.3 weeks, n = 246. Confirmed.
  - **Current deload use was an inclusion criterion.** Thirty-two respondents were excluded: 18 had
    never deloaded and 14 had stopped.
  - So "all 246 athletes deload" (notes, RQ4) and "~100% of athletes" (notes' practice table) are
    artefacts. About 88% of self-selected respondents currently deload.
  - Washif 2025: 95% of 58 Asian S&C practitioners use deloads.
  - "Near-universal" is too strong; "common (roughly 9 in 10 surveyed)" is defensible.
- Bell 2023 (full text): panel of 34, 29 and 21 coaches across rounds; consensus ≥70%; definition
  wording confirmed.
- Coleman 2024 (full text):
  - n = 39 completers of 50;
  - posterior probability favouring continuous training 0.851 (1RM) and 0.924 (isometric);
  - Smith squat -4.5 kg [95% CrI -10.4 to 2.8];
  - funded by Renaissance Periodization, which had a role in design and manuscript. Confirmed.
- Pancar 2026 (full text): 19 untrained men, within-subject limbs; no time × condition interaction
  (p = 0.239-0.955). Confirmed.
- Kataoka 2022 (abstract): "equivocal". Confirmed.
- No newer deload trial in trained lifters was found (PubMed 2024-2026 sweep, web search).

**Corrected wording.** "Deloads are common among strength and physique athletes (about 1 week every
5-6 weeks among the ~88% of surveyed athletes who deload)..." Keep the rest. Grade: convention for the
practice; promising for the two trial results; contested for fatigue accumulation.

### 12. Peaking: volume cut, step taper, high intensity, then 2-4 days off

**Verdict: corrected.** The ranges are narrower than the cited evidence gives.

**Evidence.**
- Travis 2020 (full text) recommends:
  - cut volume **~30-70%** (smaller cuts of ~30-50% looked better);
  - keep intensity ≥85% 1RM *or reduce it* in the final days;
  - use **either an exponential or a step** taper over 1-2 weeks;
  - then **2-7 days** of cessation.
- So "30-60%", "usually step" and "about 2-4 days" are practice-derived narrowings (Winwood 2026:
  1.5-4 days; Travis survey 2.8 days), not the review's evidence-based ranges.
- ≤7 days of cessation came with squat +1.7-4.9% and bench +1.4-4.9%. These are within-study
  pre-post changes after tapers, not isolated cessation effects.
- The >7-day "1-4%" loss is Travis' synthesis. One constituent (Hortobágyi, 14 days) was not
  statistically significant.
- The experimental base is two powerlifting taper studies (n = 33).
- Burke 2023 (abstract): all effects trivial (g ≈ 0.1). Confirmed.

**Corrected wording.** "Evidence and elite practice broadly converge: cut volume by roughly 30-70%
(smaller cuts of 30-50% looked better) over a 1-2-week step or exponential taper while keeping
intensity high, then stop training for 2-7 days (athletes typically choose 2-4). Strength was
maintained or improved after up to 7 days of cessation and fell by 1-4% after longer breaks; these
numbers come from a handful of small studies." Grade: promising.

### 13. Survey practice: tapering 87-99%; lift-specific timing; RPE 6-10

**Verdict: corrected.**

**Evidence.**
- Winwood 2026 (full text):
  - prevalence is 99% in weightlifting and CrossFit, 87% in strongman and **78% in Highland Games**,
    so the range is 78-99%, not 87-99%;
  - powerlifting's 100% is an artefact, because Travis 2021 surveyed only tapering lifters;
  - "87-99%" appears in Bell 2023's introduction, citing older surveys.
- Confirmed:
  - step tapers of 5-9 days; volume cut ~40-45%; deadlift 6-8 days, squat 5-6.5 days, bench 3-5
    days (Winwood 2026);
  - Travis 2021 survey: 7-10-day step taper, 41-50% cut, cessation 2.8 days (abstract);
  - Amdi 2026: 1-7 reps at RPE 6-10, 4.25 sessions/wk, >97.5% use varied practice (abstract);
  - Shaw 2022: 58.1% train 5-6 times/wk, most often at 71-80% 1RM (abstract).
- The "practice vs evidence" judgement stands, except that deload prevalence is overstated (claim 11).

**Corrected wording.** "Surveys show tapering is the norm in strength sports (78-99% across sports;
powerlifting figures come from samples of tapering lifters)..." Grade: convention.

### 14. ACSM 2026 on periodization and progression

**Verdict: confirmed.**

**Evidence** (Currier 2026, full text, Table 4 and discussion):
- **Strength: "?" (cannot determine).** One review is positive (n = 616, QoE 75%), one undetermined
  (QoE 50%) and two show no effect (n = 1,075, QoE 75%).
- **Hypertrophy: no effect**, 4 reviews, n = 1,414, QoE 63%.
- On periodization: "With appropriate progressive overload, periodization is not significantly
  superior to nonperiodized programs; thus, periodization is less important than previously
  hypothesized."
- On progression: increasing the stimulus "is likely a requirement only for those seeking continued
  longer term progress".
- Two caveats for the writer:
  - the panel's scope is "healthy adults", not trained strength athletes;
  - it concedes that "the ordering of variables ... is understudied" and that periodization and
    programming are conflated in the reviews.

Grade: contested (a panel judgement built on vote-counting of reviews).

---

## Spot checks (numbers not in the claim list)

| # | Number in notes | Source checked | Result |
|---|---|---|---|
| S1 | "Equating volume roughly halves Williams' estimate" (RQ1) | Williams full text; Moesgaard abstract | **Wrong.** 0.31 vs 0.43 is a ~28% reduction, not half. Williams was not a non-equated analysis (45/81 effects equated), and its outlier-trimmed ES (0.23) is below Moesgaard's. Delete the sentence. |
| S2 | Burke 2023: 2 days off raised bench (g 0.10) and total (g 0.11); 4 days raised deadlift (g 0.11), lowered bench (g -0.13) | PubMed abstract | Confirmed (n = 12). |
| S3 | Colquhoun 2017 flexible DUP: total +36.8 vs +40.4 kg | PubMed abstract | Confirmed (n = 25: 14 vs 11). |
| S4 | Swinton 2009: chains 57%, bands 39%, explosive intent 79-82%, Olympic derivatives 69% | PubMed abstract | Confirmed (28 of 32 elite British lifters). |
| S5 | Pritchard 2016: volume cut 58.9%, last session 3.7 days out | PubMed abstract | Confirmed (n = 11). |
| S6 | Emanuel 2022 coaches' absolute errors 4.8, 2.0, 1.2 reps | Europe PMC abstract and results | Confirmed (n = 259; trainees' sets averaged 13.9 reps). |
| S7 | Rogerson 2024: "All 246 surveyed ... athletes deload"; practice table "~100% of athletes" | Full text (methods, results) | **Wrong framing.** Current deload use was an inclusion criterion (32 excluded); ~88% of respondents. |
| S8 | Grgic 2017 LP vs DUP hypertrophy, 13 studies | Full text | Numbers confirmed; only 1 of 13 studies used trained participants (n = 417). |
| S9 | González-Ravé 2022: 11 studies, n = 200, mean PEDro 4.9 | Full text | Confirmed (4.91). |
| S10 | Travis 2021 survey: 7-10-day step tapers, 41-50% cut, final heavy squat and deadlift 7-10 days out, cessation 2.8 days | PubMed abstract | Confirmed (n = 364). |
| S11 | Rhea 2002 DUP trial n = 20 | PubMed abstract | Confirmed. |
| S12 | Pareja-Blanco 2020: "VL40 slowed contraction and lowered early RFD" | PubMed abstract | Partly. Slowed delay time has an interaction p = 0.05; the RFD decrease is within-group only, with no between-group jump or sprint difference. |

---

## Wider concerns about the notes

1. **Asymmetric scrutiny of the autoregulation syntheses.** The notes fault Zhang X 2021 for
   fixed-effect pooling of dependent outcomes, but Hickmott 2022 does the same (247 comparisons from
   133 participants), and the notes grade Hickmott "promising" without comment. Apply the same
   critique to both. The safest summary is "no clear difference; positive estimates come from
   APRE-to-failure protocols".
2. **A full text that was read but not mined.** Zhang Z 2026 was read in full, but its
   training-experience subgroups, which directly test the "trained lifters favour UP" idea, were not
   reported. RQ1's synthesis, mechanism ("Why UP might help trained lifters") and unknowns ("whether
   the UP-in-trained subgroup effect replicates") should be rewritten: the replication has been
   attempted and was null.
3. **Survey inclusion criteria inflate prevalence.** Rogerson 2024 (deloads) and Travis 2021
   (tapering) enrolled only athletes who use the practice. "All", "~100%" and "near-universal" should
   not be used. The same check is needed for every prevalence figure in RQ5 before the writer uses it.
4. **Retracted source on the reading list.** Hughes 2020 (JSCR, RIR in four exercises) is retracted.
   It appears in the notes' "not retrieved" list, and a web search surfaces it as evidence that RIR is
   most accurate at 85% 1RM. Keep it out of the chapter.
5. **Grade misuse.** "Convention" is used for claims about missing evidence (claim 4) and for mixed
   claims (claim 11). Convention should label practitioner practice. Absence-of-evidence statements
   need the grade of what evidence exists (here, speculative).
6. **Claim-level read levels overstate what was read.** Claim 5 is tagged full-text, but three of its
   five sources (Buckner, Cunanan, Stone) were abstract-only. Claim 12 cites Bosquet, Travis 2021 and
   Burke at abstract level. The writer should cite numbers as verified only where the record says
   `read_level: full-text`.
7. **Moesgaard 2022 is still unverified beyond its abstract.** That covers its comparator types,
   study durations, heterogeneity, risk of bias, and how "trained" was defined. The notes' statement
   that its non-periodized arms are constant-type is an inference. The writer should not present it as
   fact.
8. **Populations.** Several "trained-lifter" conclusions rest on syntheses containing adolescents
   (Hickmott, Huang, Zhang Z 2026), untrained participants (Grgic, Williams) or older and obese
   participants (Zhang Z 2026). The chapter's population caveat should name these.
9. **Not re-checked in this pass** (numbers taken on trust): Pareja-Blanco 2017 (CMJ +9.5% vs +3.5%,
   MHC IIX), Mattocks 2017, Zourdos 2016 (r = -0.88), Helms 2018 RPE-volume (74.6/88.4/114.4),
   Holmes 2026, Myrholt 2023, Ogasawara 2013, Bartolomei 2014/2023, Painter 2012 and Bosquet 2007.

## Records updated

- **Read level and contents corrected:**
  - `williams-2017-periodization`: read_level full-text; sample 612; volume-equated share; multilevel
    and outlier-trimmed estimates; null volume moderator; wrong "volume not equated" limitation
    removed.
  - `zhang-2026-lp-up`: training-experience subgroups, body composition, sample 704.
  - `grgic-2017-lp-dup-hypertrophy`: read_level full-text; population (1 of 13 trained); n = 417.
  - `gonzalez-rave-2022-reverse`: read_level full-text.
  - `anyadike-danes-2023-coaches-planning`: read_level full-text; claim reworded; disagreement
    percentages added.
  - `hickmott-2022-autoregulation`: population corrected (includes adolescents);
    additional-exercise subgroup; dependency limitation.
  - `helms-2018-rpe-percentage`: squat-intensity null added.
  - `currier-2026-acsm-position-stand`: periodization strength row detailed; autoregulation
    "negative" corrected to "no effect".
  - `wang-2026-vbt`: read_level full-text; GRADE moderate; population.
  - `pareja-blanco-2020-velocity-loss`: RFD effect marked within-group.
  - `pareja-blanco-2026-intensity-velocity-loss`: VL levels and the interaction stated.
  - `rogerson-2024-deload-survey`: read_level full-text; inclusion-criterion finding; claim reworded.
  - `travis-2020-taper-review`: cessation-effect limitation.
  - `winwood-2026-taper-sr`: prevalence range and powerlifting artefact.
  - `moesgaard-2022-periodization`: UP-in-trained finding downgraded to speculative; Zhang Z 2026
    contradiction added.
- **Checked and confirmed (checked filled, no number changes):**
  - Periodization and critique: rhea-2004-periodization-ma, afonso-2019-periodization-meta,
    kataoka-2021-periodization-definition, harries-2015-linear-undulating, kiely-2018-periodization.
  - Autoregulation and VBT: zhang-2021-autoregulation, huang-2025-autoregulation-nma,
    graham-2021-rir-autoregulation, orange-2022-vbt, liao-2021-vbt, zhang-2022-vbt-percentage,
    jukic-2023-velocity-loss.
  - RIR accuracy: halperin-2022-rir-accuracy, refalo-2024-rir-accuracy-bench,
    zourdos-2021-rir-accuracy, steele-2017-rir-experience, emanuel-2022-coaches-rir.
  - Deloads and fatigue: kataoka-2022-fatigue-accumulation, bell-2023-deload-delphi,
    coleman-2024-deload, pancar-2026-deload.
  - Tapering and surveys: burke-2023-cessation, travis-2021-taper-survey,
    pritchard-2016-taper-practices, amdi-2026-powerlifting-specificity,
    shaw-2022-norwegian-powerlifters, washif-2025-coaches-periodization,
    swinton-2009-powerlifters, colquhoun-2017-fdup.
  - Model trials: rhea-2002-dup.
- **New (abstract level):** `micke-2026-block-hift`, `puschkasch-mock-2026-power-phase`, `mansfield-2020-rir-accuracy`, `droguett-2025-rir-experience`. The retracted Hughes 2020 paper was deliberately given no record.
- Other chapters' findings, topics and `cited_in` entries in shared records (Currier, Jukic,
  Halperin, Wang, Orange) were preserved. Where an earlier verification note existed, this pass
  appended to it.
