# Verification: Chapter 5, "Hypertrophy: mechanisms, muscle length and contraction type"

Independent verification pass, 2026-11-24, of `notes/hypertrophy-methods.md`. Each load-bearing
claim was checked against its primary sources, using the full text wherever it was open access. I
also searched for newer or contradicting evidence. Evidence records in `evidence/sources/` were
updated as follows:

- `checked` filled in (2026-11-24, "verification pass"), keeping earlier notes.
- `read_level` set to full-text where this pass read the full text. Where only the researcher read
  the full text, the record keeps that level and the note says so.
- Wrong numbers, descriptions and DOIs fixed.
- Two new records added: `morton-2019-fibre-activation` and `muddle-2018-motor-units`.

**What this pass read.**
- **Full text:**
  - Wolf 2023, IUSCA PDF.
  - Varovic 2025, SportRxiv preprint v1 (2024-10-07) and v3 (2024-10-12).
  - Via Europe PMC: Kataoka 2026, Wolf 2025, Geng 2024, Oborn 2025, Petré 2018, Maeo 2021, Maeo 2024
    (trained fibres), Maeo 2024 (Nordic), Kinoshita 2023, Kinoshita 2026, Havers 2025, Wolf 2026,
    Walker 2016 and Patterson 2019.
  - Cowley 2026 and Zhong 2025: hypertrophy sections only.
- **Abstracts:** every other cited source, through PubMed E-utilities (68 PMIDs fetched in one batch;
  every PMID resolved to the intended paper). Strey 2026 came from the Ulster University repository,
  because its full text is embargoed until 2027-01-05.
- **Not open access, abstract only:** McMahon 2026, da Silva 2025, Schoenfeld 2017, Maroto-Izquierdo
  2017, Lixandrão 2018, Kubo 2019, Kobayashi 2026, Enes 2025, McKee 2026, Maeo 2023, Larsen 2025,
  Varovic 2025 (isometric) and Cumming 2024.

**Verdict summary**

| # | Claim (short) | Verdict | Grade after check |
|---|---|---|---|
| 1 | Mechanical tension is the primary stimulus; effort decides light-load growth | corrected (Lasevicius misdescribed; grade split) | established (loading primary; load-independence ≥~30% 1RM near failure); promising (recruitment explanation); speculative (specific sensors) |
| 2 | Hormones, metabolites, damage not independent drivers | confirmed, grade refined | established (acute hormones); promising (metabolites not independently anabolic); speculative (recruitment route); promising (damage) |
| 3 | Sarcoplasmic hypertrophy contested; trained muscle has more myofibrils | confirmed | contested |
| 4 | Muscle memory: cellular basis unresolved | confirmed | contested |
| 5 | Short partials inferior; full vs partial trivial for size overall | confirmed, wording refined | promising |
| 6 | Muscle-length meta-analyses agree on direction, not size | confirmed, framing corrected | promising (direction); contested (magnitude) |
| 7 | Biarticular muscles grow more trained long (untrained) | confirmed, one number corrected | promising |
| 8 | Lengthened partials ≈ full ROM in trained lifters | confirmed, wording softened | promising |
| 9 | Longitudinal growth; SSN never measured in humans | corrected | promising (fascicle length, ultrasound); speculative (serial sarcomeres) |
| 10 | Eccentric ≈ concentric for size; tempo barely matters | confirmed | contested (size advantage); promising (architecture, tempo) |
| 11 | AEL and flywheel: no consistent hypertrophy advantage | confirmed, one phrase corrected | promising |
| 12 | Low-load BFR ≈ high load for size, less strength | confirmed | established (equal size, less strength); speculative (advantage in trained); promising (recruitment mechanism) |
| 13 | Hypertrophy is regional and exercise-specific | corrected (glutes "need deep hip flexion" overstated) | established (non-uniformity); promising (specific selections) |
| 14 | Hypertrophy measures are not interchangeable | corrected (fCSA correlation not significant; oedema evidence weaker) | established (methods disagree); promising (each specific validity figure and the oedema effect) |

---

## Claim-by-claim

### 1. Mechanical tension is the primary stimulus; effort decides how much a light load grows muscle

**Verdict: corrected.**

**Evidence.**
- **Wackerhage 2019 (abstract).** An mTORC1-mediated rise in protein synthesis is "the key, but not
  sole" mechanism. Mechanical signals are the "prime hypertrophy stimuli candidates". The
  filamin-C/BAG3 sensor is "plausible albeit still incompletely characterized". So the source
  supports tension as the leading candidate stimulus. It does not establish the sensing chain.
- **Roberts 2023 (abstract).** Lists mTORC1, ribosome biogenesis, satellite cells with myonuclear
  accretion, and post-exercise MPS. Confirmed. The record's DOI pointed to an unrelated paper; it is
  now corrected to 10.1152/physrev.00039.2022.
- **Greyvenstein 2026 (abstract).** "Resistance exercise is the primary driver, with protein playing
  a minor supporting role." Confirmed, but it speaks to loading in general, not to tension on fibres.
- **Morton 2016 (abstract).** 49 trained men. Loads were **~30-50% 1RM** (20-25 reps), not "~30%".
  Lean mass (DXA) and biopsy fibre CSA did not differ between loads when sets went to failure.
- **Lasevicius 2018 (abstract): misdescribed in the notes.**
  - The notes say "volume-load-matched training at 20% 1RM without high effort roughly halves
    growth". In fact the **20% 1RM limb trained to failure** (3 sets). The 40%, 60% and 80% limbs
    were matched to its volume load, so they stopped short of failure.
  - 20% to failure gave about half the growth: VL +8.9% vs +19.5-20.5%; elbow flexors +11.4% vs
    +25.0-25.3%.
  - The study therefore shows a **load floor**: very light loads are suboptimal even when taken to
    failure. It does not show that low effort halves growth. It argues *against* the unqualified
    phrase "effort decides how much a light load grows muscle".
- **Kataoka 2026 (full text).**
  - 144 randomised participants, all **untrained**. Elbow flexion at 30% 1RM for 6 weeks; muscle
    thickness by ultrasound.
  - Muscle-thickness gains: LL 0.06 cm, LL+BFR 0.14 cm, LL-failure 0.17 cm. The best-supported
    Bayesian hypothesis was LL+BFR = LL-failure > LL > CON.
  - The record's DOI was wrong; it is now corrected to 10.1007/s00421-025-05949-1.

**Refutation search.** The recruitment explanation for load-independent growth is debated directly:
- **Morton 2019** (abstract; new record): when sets went to task failure, type I and type II fibre
  glycogen depletion and anabolic signalling did not differ between heavier and lighter loads (n =
  10). This supports the claim.
- **Muddle 2018** (abstract; new record): 18 trained men. Low-torque contractions to failure did
  recruit higher-threshold units, but high-torque contractions still used larger units throughout,
  and full recruitment at low torque "may be dependent on the subject". This qualifies the claim.

The mechanism is reasonable but not settled.

**Grade.** "Established" holds for "loading, not hormones or protein, is the primary driver" and for
"growth is similar across loads from about 30% 1RM upward when sets are near failure". The
recruitment-and-tension explanation is **promising**. The specific mechanosensors are
**speculative** in humans.

**Corrected wording.** "Mechanical loading is the primary hypertrophy stimulus. The leading model is
that tension on recruited fibres is sensed by still poorly characterised mechanosensors and
transduced, largely through mTORC1, into protein synthesis, ribosome biogenesis and myonuclear
accretion (established that loading is primary; sensors speculative). From about 30% 1RM upward,
load matters little when sets are taken close to failure (established, mostly in untrained people;
promising in trained). The usual explanation is fatigue-driven recruitment of high-threshold motor
units (promising; recruitment at low loads may be incomplete in some people). Very light loads (~20%
1RM) grow about half as much even when taken to failure. In untrained people, sets at 30% 1RM stopped
well short of failure grew less than sets taken to failure."

### 2. Hormones, metabolites and damage are not independent drivers

**Verdict: confirmed; grade refined.**

**Evidence.**
- **West 2010 (abstract).** 12 young men, within-subject. CSA +12% in the low-hormone arm vs +10% in
  the high-hormone arm; condition × training P = 0.25. Fibre CSA and strength did not differ either.
- **Morton 2016.** No correlation between acute hormone rises and gains in trained men.
- **Dankel 2017 (abstract).** An opinion-led review ("it is our opinion"). It notes that the only
  human test of post-exercise metabolite pooling found no added benefit. The recruitment route is the
  authors' hypothesis.
- **Damas 2016 MyoPS (abstract).**
  - 10 untrained men; fibre CSA rose only by week 10.
  - The MyoPS change at weeks 3 and 10 correlated with hypertrophy (r ≈ 0.9); week 1, when damage
    peaked, did not.
  - "Spent on repair" is the authors' interpretation ("not directed to support muscle hypertrophy").

**Grade.** Hormones: **established**, but only for *transient, exercise-induced rises within the
physiological range*. The chapter should say so; chronic androgen status is a separate question.
"Metabolites are not independently anabolic": **promising**, because there is no evidence of an
independent effect. "Metabolites work through recruitment": **speculative**. Damage: **promising**
(n = 10).

**Corrected wording.** Keep the claim. Add "acute, exercise-induced" to the hormone sentence. Grade
the recruitment route for metabolites as speculative.

### 3. Sarcoplasmic hypertrophy is contested; trained muscle has more myofibrils

**Verdict: confirmed.**

**Evidence.**
- **Maeo 2024 (full text).**
  - Biceps of 16 long-term trained vs 13 untrained men.
  - Trained men had: ACSAmax +70%, fibre area +29%, fibre number +34%, myofibrils per fibre +49%,
    total myofibrils +105%, and myosin spacing −7% (P = 0.004).
  - Fibre and myofibril numbers were **estimated by division**, not counted. The design is
    cross-sectional.
- **Haun 2019 (abstract).**
  - The analysed group was the 15 highest fCSA responders out of 30 trained men. They gained +23%
    fCSA.
  - Actin and myosin *concentrations* fell ~30%, but only in forced post hoc tests after ANOVA
    p-values of 0.052 and 0.055.
- **Haun 2019 measurement review and Roberts 2020 (abstracts).** Both frame sarcoplasmic hypertrophy
  as an open question. The records' DOIs were wrong; they are now corrected.

**Refutation search.**
- Van Every 2025 (already cited in the notes) argues against sarcoplasmic hypertrophy as a
  meaningful contributor.
- Libardi 2024 (Front Physiol, PMID 38444764; not read beyond its title, no record) reports that
  early low-load BFR adaptations look like conventional hypertrophy.

No new trial in trained lifters supports dilution. "Contested" remains fair, given the competing
reviews and the weak primary data on both sides.

**Corrected wording.** As written. Add "(cross-sectional; fibre and myofibril numbers estimated by
division)" after the Maeo numbers, and "(selected high responders; borderline statistics)" after
Haun.

### 4. Muscle memory in humans has an unresolved cellular basis

**Verdict: confirmed.**

**Evidence.** All from abstracts.
- **Cumming 2024.** 12 untrained participants. Type 2 myonuclei rose +33 ± 23% and were maintained
  through 16 weeks of detraining. The previously trained arm had larger type 2 fCSA after retraining
  (P = 0.035), but the *change* did not differ, and the authors call the benefit "unclear". Note:
  mixed fCSA growth in the first block was itself non-significant (+30%, P = 0.069).
- **Psilander 2019.** No myonuclear accretion, so the study could not test the hypothesis.
- **Murach 2020 (mice).** Myonuclei were lost within 6 months in gastrocnemius and plantaris; soleus
  resisted.
- **Seaborne 2018.** Hypomethylation was retained through unloading.
- **Hulmi 2025.** CBR1 and CAPN2 were retained after 10 weeks off.
- **Horwath 2025.** No myonuclear loss after 6 weeks of immobilisation in n = 6 Achilles-rupture
  patients. This is disuse, not detraining after training, and the notes describe it correctly.

**Corrected wording.** None needed. One supporting detail is unverified: the notes say "~60% of the
strength gain retained". Psilander's abstract says only that strength "remained elevated (~60%)",
which does not specify 60% *of the gain*. Use the abstract's wording.

### 5. Short partials produce less hypertrophy; full vs partial differs trivially overall

**Verdict: confirmed; wording refined.**

**Evidence.**
- **Wolf 2023 (full text, every number checked).**
  - All outcomes: SMD 0.12 (−0.02, 0.26). Muscle size: 0.04 (−0.17, 0.25).
  - Long partial vs full: −0.28 (−0.81, 0.16). Short partial vs full: **0.08 (−0.24, 0.42)**.
  - Studies: 19 of 23 used short-length partials and 6 of 23 used long-length partials.
- **Pallarés 2021 (abstract).** 16 studies. Lower-limb hypertrophy ES 0.88 (p = 0.027) favouring full
  ROM; the partials were mostly short.
- **Pedrosa 2022 (abstract).** 45 untrained women. FINAL partials grew no more than control at
  60-70% of femur length.
- **Pedrosa 2025 (abstract).** 50 untrained women. INITIAL, FULL and VARIED ROM grew 13.2-17%, all
  more than FINAL.
- **Kassiano 2023 review (abstract).** ES 0.20-0.90. It also found that mid-range partials beat full
  ROM for the triceps (ES 1.21). This finding goes unmentioned in the notes.
- **Strey 2026.** See claim 6.

**Nuance.** The meta-analytic estimate for short partials vs full ROM is itself trivial and
imprecise. The inferiority of short partials rests mainly on individual trials and on comparisons
with long partials.

**Corrected wording.** "Partial ROM confined to short muscle lengths produces less hypertrophy than
long-length partials in several trials, and less than full ROM in some (e.g. Pedrosa 2022, 2025). The
pooled short-partial vs full-ROM estimate is small and imprecise (SMD 0.08, 95% CI −0.24 to 0.42).
Overall, full and partial ROM differ only trivially for muscle size (SMD 0.04, 95% CI −0.17 to 0.25)."

### 6. Muscle-length meta-analyses agree on direction but not size

**Verdict: confirmed; framing corrected.**

**Evidence.**
- **Varovic 2025, published abstract.**
  - SMD: proximal 0.05 (−0.07, 0.16), mid 0.07 (−0.02, 0.15), distal 0.09 (−0.01, 0.19).
  - lnRR distal +1.88% (−0.44%, 4.34%).
  - Average length contrast 21.8%.
  - All confirmed.
- **Varovic 2025, preprint v3** (2024-10-12, full text).
  - % of posterior within the ROPE: 82.7, 77.68 and 59.02.
  - 11 of the 12 studies used untrained participants.
  - Both confirmed.
- **Varovic 2025, preprint v1** (2024-10-07). This version scaled the same length slope to a **50%**
  difference in muscle length. It reported:
  - SMD 0.10 / 0.15 / 0.20 (proximal / mid / distal);
  - % within the ROPE of 42.7 / 29.4 / 18.6;
  - an 80.75% probability of a meaningful distal effect.

  The published "trivial" result is therefore a per-21.8%-contrast estimate, not evidence that length
  does not matter. Larger contrasts are extrapolated to larger effects.
- **Strey 2026** (Ulster repository abstract).
  - 8 studies. Muscles: VL 5, RF 3, VM 2, VI 2, gastrocnemius 1, biceps/brachialis 1.
  - Overall ES 0.283 (p = 0.036). Distal 0.433 (0.01-0.85, p = 0.048). Central 0.276 (0.01-0.48, p =
    0.028).
  - The overall 95% CI of 0.04-0.52 appears in the publisher abstract as quoted by a search result. I
    did not open that page, so treat the CI as secondary.

**Refutation search.** No newer muscle-length meta-analysis was found. A 2026 review argues that long
lengths are "necessary but not sufficient" (PMC12951042, not read; likely the Pedrosa 2026 review
already in the notes).

**Corrected wording.** Replace "mostly within the equivalence region, at an average length contrast
of only 21.8%" with: "mostly within the equivalence region **per 21.8% difference in mean muscle
length**, the average contrast in the included studies. An earlier preprint version that scaled the
same model to a 50% contrast gave SMD ~0.20 distally." Add the Strey CI, flagged as secondary. Keep
the grades.

### 7. Lengthened-position training of biarticular muscles produces substantially more growth (untrained)

**Verdict: confirmed; one number corrected.**

**Evidence.**
- **Maeo 2021 (full text).** Whole hamstrings +14.1% vs +9.3% (ANCOVA-adjusted); BFsh +10% vs +9%.
- **Maeo 2023 (abstract).** Whole triceps +19.9% vs +13.9% (d = 0.54); long head +28.5% vs +19.6%.
  But the **monoarticular heads also grew 1.4-fold more** (+14.6% vs +10.5%). Length alone does not
  explain the whole effect.
- **Kinoshita 2023 (full text, 14 untrained).**
  - Seated gastrocnemius growth was +1.7% (lateral) and **+0.6%** (medial), not significant. "+1-2%"
    should read "+0.6-1.7%".
  - Lateral gastrocnemius +12.4% vs +1.7%; medial +9.2% vs +0.6%.
- **Maeo 2024 Nordic (full text).** Young men with no systematic training for 18 months; 14 per
  group. Hamstrings +18% vs +11%. This trial compares two different eccentric exercises, so it is not
  a pure length contrast.

**Qualifier.** Kobayashi 2026 (abstract): incline vs preacher curls shifted growth between the biceps
and the brachialis/brachioradialis. Total elbow-flexor growth did not differ (+17.6% vs +19.2%).

**Corrected wording.** "...standing vs seated calf raise (gastrocnemius +9-12% vs +0.6-1.7%, the
latter not significant)." Add that in Maeo 2023 the monoarticular heads also grew more. Add that
whole-group growth can be unchanged when growth shifts between synergists (Kobayashi 2026).

### 8. In trained lifters, lengthened partials ≈ full ROM

**Verdict: confirmed; wording softened.**

**Evidence.**
- **Wolf 2025 (full text, Table).**
  - 30 trained participants; ultrasound; 8 weeks.
  - Muscle-thickness differences −0.23 to 0.82 mm, with BF 0.16-0.39 (the 0.39 is "anecdotal").
    The abstract gives 0.16-0.3 because it covers all outcomes.
- **Havers 2025 (full text).** 13 trained participants. Distal SMD 0.10 with **BF 4.87 favouring
  partials**, i.e. moderate evidence *for* a trivial distal advantage.
- **Larsen 2025 (abstract).** 23 lifters with 7.2 years of training. ~100° vs ~154° knee flexion
  gave the same growth: BF 0.14-0.22, multivariate BF < 0.01. This is "full vs deeper", not partials.
- **Varovic 2025 isometric (abstract).** Proximal −0.11 cm (−0.24, 0.02). The summed anterior thigh
  was −0.20 cm (−0.54, 0.16), with pd 87% and 75% of the posterior outside the ROPE, favouring
  long-length isometrics.

**Refutation search.** No trial in trained lifters shows lengthened partials beating full ROM. A
search found secondary reports of 2026 trials, including a large cluster trial, that could not be
traced to primary papers. They are not used here.

**Corrected wording.** "In resistance-trained lifters, lengthened partials and full ROM have produced
equivalent hypertrophy over 6-8 weeks (ultrasound), with at most trivial regional differences (e.g.
distal SMD 0.10 favouring partials in Havers 2025). Bayes factors in Wolf 2025 were 0.16-0.39
favouring no difference. Extra knee flexion beyond ~100° in the leg press added no quadriceps growth."

### 9. Longitudinal growth; serial sarcomere number never measured in humans

**Verdict: corrected.**

**Evidence.**
- **Wolf 2026 (full text).** 8 studies, n = 120. "No studies to date have attempted to estimate
  serial sarcomere number changes from LML versus SML-RT, and all but one study used linear
  extrapolation." Confirmed *for long- vs short-length training*.
- **McMahon 2026 (abstract).** n = 45. Fascicle length increased most with lengthened partials.
- **Franchi 2014 (abstract).** Only **6 per group**. Fascicle length +12% (eccentric) vs +5%
  (concentric).
- **Rilling 2026 (rats).** SSN +17% (soleus) with eccentric overload.
- **van der Pijl 2026 (abstract).** MARP knockout **enhanced** longitudinal hypertrophy; MARPs
  constrain it. Rapamycin suppressed it.

**Refutation search.** For *eccentric* training, one human study has estimated serial sarcomere
number: Pincheira 2022 (record `pincheira-2022-sarcomere`, PubMed abstract read).
- 3 weeks of Nordic training, n = 10.
- Distal fascicle length increased 21% because **sarcomere length increased 17%**. Estimated serial
  sarcomere number did **not** change.

So the one direct human estimate contradicts the assumption that longer fascicles mean added
sarcomeres.

**Corrected wording.** "Long-length and eccentric training increase ultrasound-estimated fascicle
length more than short-length or concentric training (promising; mostly extrapolated). Whether this is
serial sarcomere addition is unknown. No study has estimated serial sarcomere number after long- vs
short-length training. The one human estimate after eccentric (Nordic) training found longer
sarcomeres, not more of them (Pincheira 2022) (speculative). Titin-based mechanosensing is the leading
mechanism but comes from animal models."

### 10. Eccentric ≈ concentric for size; tempo barely matters

**Verdict: confirmed.**

**Evidence.**
- **da Silva 2025 (abstract).** 26 studies, 682 participants. SMD 0.285 (−0.131, 0.701), p = 0.179,
  I² 84.4%, GRADE very low. The subgroups favouring eccentric work (upper limb, ≤8 weeks, thickness,
  isokinetic) are confirmed.
- **Schoenfeld 2017.** 15 studies. 0.25 (−0.03, 0.52), p = 0.076; growth 10.0% vs 6.8%.
- **Enes 2025.** 14 studies. 0.09 (−0.04, 0.22). The "slower" tempos were 1.7-4.5 s (mean ~3.5 s);
  the "faster" were 0.3-2 s (mean ~1 s).
- **Maeo 2018.** Work-matched; ACSA and volume +4% in the eccentric leg only.
- **Franchi 2014.** Architecture differences, but n = 6 per group.

**Corrected wording.** None needed. Add "(n = 6 per group)" wherever Franchi 2014 carries the
architecture claim.

### 11. AEL and flywheel training: no consistent hypertrophy advantage

**Verdict: confirmed; one phrase corrected.**

**Evidence.**
- **Walker 2016 (full text).** VL and VM CSA rose ~11-16% in both groups; "similar increases in
  muscle mass".
- **Zhong 2025 (full text).** Hypertrophy section: "short-term muscle hypertrophy does not
  consistently exceed that observed with traditional resistance training".
- **Cowley 2026 (full text, hypertrophy section).** 13 of 17 hypertrophy studies found no difference.
  This was a narrative synthesis, not a network meta-analysis. Participants were untrained to
  moderately trained.
- **Petré 2018 (full text).** "One of the studies included a control group performing conventional
  resistance training." Its effect sizes are pre-post. Confirmed.
- **Vicens-Bordas 2018 and Hu 2024.** Abstract numbers confirmed.

**Correction.** "Early claims that flywheels are superior rest on small studies without matched
comparators" is only half right. Maroto-Izquierdo 2017 pooled 9 RCTs **against weight-stack
training**. Its weakness is few small trials, 92 effect sizes from mixed outcomes pooled in one model,
and comparators not matched for volume or effort. The "no comparator" criticism applies to Petré
2018.

**Corrected wording.** "...Early claims of flywheel superiority rest on a meta-analysis of 9 small
trials that pooled mixed outcomes against unmatched weight-stack training (Maroto-Izquierdo 2017),
and on pre-post effect sizes without conventional comparators (Petré 2018)."

### 12. Low-load BFR ≈ high load for size, less strength

**Verdict: confirmed.**

**Evidence.**
- **Geng 2024 (full text).**
  - Hypertrophy ESdiff −0.067 (−0.205, 0.071), 34 effects.
  - Trained subgroup, hypertrophy: 0.695 from **3 effects**.
  - Trained subgroup, strength: 0.491 from 14 effects.
- **Oborn 2025 (full text, Table).**
  - BFR vs high load, hypertrophy: −0.13 (−0.30, 0.05), from 7 meta-analytic effects.
  - BFR vs high load, strength: −0.28 (−0.41, −0.15).
- **McKee 2026 (abstract).** Size g 0.08 (−0.18, 0.34), 8 studies, very low certainty.
- **Bjørnsen 2019 (abstract).** 17 powerlifters (9 vs 8). VL CSA +7.7% vs +0.5%.
- **Patterson 2019 (full text).** Prescription table confirmed: 20-40% 1RM, 30-15-15-15, 40-80% AOP,
  30-60 s rest.
- **Kataoka 2026.** Participants were **untrained**; the chapter should say so.

**Grade.** The recruitment mechanism is better graded **promising** than implied, because Muddle 2018
shows that recruitment during low-load fatigue may be incomplete in some people.

**Corrected wording.** As written. Add "in untrained adults" to the Kataoka sentence.

### 13. Hypertrophy is regional and exercise-specific

**Verdict: corrected.**

**Evidence.**
- **Kinoshita 2026 (full text).** 17 untrained participants. RF +13.2% vs +1.1%. Gluteus maximus
  +15.4% and adductor magnus +6.2% grew with the leg press only.
- **Kubo 2019 (abstract).** Full squats grew the gluteus maximus (+6.7% vs +2.2%) and adductors
  (+6.2% vs +2.7%) more. Neither squat depth grew the RF.
- **Earp 2015 (abstract).** No RF growth with squats; non-strength-trained men; ultrasound.
- **Plotkin 2023 (abstract).** In untrained participants, **hip thrusts grew the glutes as much as
  back squats**. The hip thrust does not reach deep hip flexion. Squats grew the quadriceps (+3.6 cm²)
  and adductors (+2.5 cm²) more.
- **Kobayashi 2026.** Numbers confirmed.

**Correction.** "The glutes and adductors need deep hip flexion" is overstated for the glutes:
- half squats still grew the gluteus maximus (+2.2%);
- hip thrusts matched squats;
- the leg press grew the gluteus maximus +15.4%.

For the adductors, the claim holds better.

**Corrected wording.** "...The rectus femoris grows with knee extension but barely with leg press or
squat (+13.2% vs +1.1%; untrained). Within the squat, greater depth grows the gluteus maximus and
adductors more. Hip thrusts, which do not reach deep hip flexion, grew the glutes as much as squats,
while squats grew the adductors and quadriceps more. Hamstring heads respond according to hip
position. Total muscle-group growth often stays similar while its distribution among heads shifts."

### 14. Hypertrophy measures are not interchangeable

**Verdict: corrected.**

**Evidence.**
- **Franchi 2018 (abstract).** n = 9. Thickness change vs ACSA change r = 0.69; vs volume change r =
  0.33 (ns).
- **Scott 2017 (abstract).** Gastrocnemius CCC 0.37 and hypertrophy specificity 33%. The setting was
  **70-day bed rest** with or without exercise, not a hypertrophy training study.
- **Ruple 2022 (abstract).** 12 untrained men; biopsy 72 h after the last session.
  - DXA vs MRI change: r = 0.58 (P = 0.048).
  - **fCSA vs MRI change: r = −0.57 with P = 0.054 (not significant).** The notes present this as a
    finding.
  - Ultrasound CSA change agreed well with MRI (CCC 0.70).
- **Fukumitsu 2026 (abstract).** ICC 0.996, SDC 2.35 cm², change r = 0.92 (n = 11). Confirmed.
- **Damas 2016 (abstract).** Oedema was inferred from **ultrasound echo intensity**, raised only at
  week 3 after normalisation. It did not use MRI T2, although the notes say "echo intensity and T2".
- **Maeo 2018 (abstract): contradicts the general oedema claim.** In work-matched training, MRI ACSA
  rose from week 4 with **no T2 change throughout**.

**Grade.** The general claim (methods disagree; hypertrophy is regional) stays **established**. Each
validation figure comes from a small study (n = 9-27): **promising**. The oedema effect is
**promising** and not universal.

**Corrected wording.** "...DXA tracks MRI change only moderately (r = 0.58), and biopsy fibre CSA
change did not track it at all in one small study (r = −0.57, P = 0.054, n = 12). Early CSA gains
*may* include oedema: one ultrasound study found raised echo intensity at week 3, but an MRI study of
work-matched training found no T2 change while CSA rose from week 4."

---

## Spot checks (numbers not in the claim list)

| Note | Source | Check | Result |
|---|---|---|---|
| Myonuclei added with ≤10% fibre growth; more consistent above ~22%; classic threshold ~26%; 27 studies, 903 participants | Conceição 2018 (abstract) | 27 studies, 62 groups, 903 subjects; ≤10%; ~22%; ≥26% | confirmed |
| Static stretching hypertrophy d = 0.20 overall, 0.26-0.28 at higher doses; 42 studies, 1318 participants | Warneke 2024 (abstract) | identical | confirmed |
| Calf raise: initial partials +15.2% MG vs full +6.7% vs final +3.4%; "clearest case of long partials beating full ROM" | Kassiano 2023 calf (abstract) | numbers identical; but the lateral gastrocnemius did **not** differ from full ROM (+14.9% vs +7.3%, p = 0.060); ultrasound thickness | numbers confirmed; "clearest case" applies to the medial head only |
| Cable vs dumbbell lateral raise, BF 0.22-0.27 | Larsen 2025 lateral raise (abstract) | BF 0.27 distal, 0.22 proximal, multivariate < 0.01; n = 24 trained | confirmed (record DOI was wrong; fixed) |
| Satellite cells +108.6% vs +48.9% in repetition-progression responders | Scarpelli 2025 (abstract) | +108.6 ± 77.0% vs +48.9 ± 63.1%, p = 0.015 | confirmed |
| Isometrics at long lengths 0.86-1.69%/week vs short 0.08-0.83%/week | Oranchuk 2019 (abstract) | identical | confirmed |
| ~60% of strength gain retained after detraining | Psilander 2019 (abstract) | abstract says strength "remained elevated (~60%)" | unverifiable as phrased; use the abstract's wording |

---

## Wider concerns about the notes

1. **Wrong DOIs in 20 of the chapter's evidence records.** In each case the PMID was right but the DOI
   belonged to an unrelated paper. Examples: Kataoka 2026 pointed to a 2010 Clin Physiol Funct
   Imaging article; Haun 2019 to a 1983 J Mol Biol paper; Patterson 2019 to a 2012 Chest article.
   All 20 are fixed against PubMed:
   - roberts-2023-mechanisms, kataoka-2026, roberts-2020-sarcoplasmic, haun-2019-measurement,
     murach-2020-muscle-memory;
   - seaborne-2018, kinoshita-2023, van-der-pijl-2018, walker-2016, zhong-2025-ael;
   - cowley-2026-advanced-nma, petre-2018, hu-2024-flywheel, geng-2024, oborn-2025;
   - patterson-2019, plotkin-2023-hip-thrust, franchi-2018-mt, fukumitsu-2026,
     larsen-2025-lateral-raise.

   The pattern suggests DOIs were written from memory rather than looked up. **Records created for
   other chapters should be audited the same way.** This pass checked only the records cited for
   Chapter 5.
2. **A study described as showing the opposite of what it found.** The notes say Lasevicius 2018
   shows "without high effort" growth halves. In that study the low-load arm was the *to-failure* arm.
   This error sits in the chapter's central argument about effort and load (claim 1).
3. **Population labels drift.** Kataoka 2026 (untrained) is presented beside trained-lifter evidence
   without a label. Morton 2016's loads are given as "~30%" rather than 30-50%. The chapter's own
   population caveat (line 27 of the notes) should be applied claim by claim.
4. **"Trivial" vs "small" depends on the contrast.** Varovic's estimates are per 21.8% length
   difference. Cite them as contrast-specific, not as evidence that length does not matter.
5. **Oedema and measurement claims overreach their sources.** The notes attribute a T2 finding to
   Damas 2016, which measured echo intensity. They also present a non-significant correlation (Ruple
   fCSA, P = 0.054) as a finding.
6. **"Never measured in humans" needs a narrower scope.** Serial sarcomere number has been estimated
   once after eccentric training (Pincheira 2022), with a result that cuts against the
   sarcomerogenesis story. The muscle-length mechanism section should cite it.
7. **Unverified details still in the notes:**
   - Varovic "184 effects, 22 arms" (not in the abstract; not checked in the preprint);
   - Kataoka's "BFR closed most of that gap": fair, but its abstract gives LL 0.06 vs LL-failure 0.17
     cm without a direct significance statement; the Bayesian ranking supports it;
   - Strey's overall CI (secondary).
8. **Mechanism grades.** Claims 1, 2 and 12 all lean on "recruitment" as the shared mechanism. The
   direct evidence is mixed: Morton 2019 supports it and Muddle 2018 qualifies it. Grade it promising
   at most, and say so once in the chapter rather than implying it in three places.
9. **Leads not followed up (no records created):**
   - Libardi 2024 (BFR and myofibrillar area; PMID 38444764);
   - the 2026 review "The interplay between muscle length, range of motion, and exercise selection"
     (PMC12951042; check whether it is the Pedrosa 2026 review already cited);
   - secondary reports of 2026 trained-lifter lengthened-partial trials, including a large cluster
     trial, that could not be traced to a primary paper.

**Records updated (76):** the 70 sources cited in the 14 claims, plus the 6 spot-check sources
(conceicao-2018, warneke-2024-stretch, kassiano-2023-calf, larsen-2025-lateral-raise,
scarpelli-2025 and oranchuk-2019).

**New records (2):** morton-2019-fibre-activation and muddle-2018-motor-units.
