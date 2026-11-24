# Chapter 3. Dose: volume, load, effort, frequency and rest

## Abstract

Resistance training behaves less like a recipe than like a drug: its effects depend on how much is
given, how hard, how often and with what spacing. This chapter examines the five dose variables that dominate the training literature (volume, load, effort,
frequency and rest) and asks, for each, what the dose-response relationship looks like for muscle
size and for maximal strength in healthy adults, and how far it can be trusted for trained lifters.
The central argument is that the two outcomes have different dose-response curves because partly
different processes build them. Hypertrophy follows the accumulated number of hard sets per muscle.
Its returns diminish but have not been shown to stop within the range studied, while load (above
roughly 30% of the one-repetition maximum) and frequency (at equal weekly volume) matter little, and
sets need to be reasonably close to failure rather than all the way to it. Maximal strength follows
heavy, specific practice. Load and how often the lift is practised matter, extra volume stops
producing detectable gains within a few sets per week, and proximity to failure is largely
irrelevant. Minimum effective and maintenance doses are low. Rest acts mainly through the quality of
the work it allows. These conclusions rest on short studies of mostly young, often untrained men,
with imperfect measures of both effort and muscle size. The chapter grades each claim accordingly
and identifies the high-volume region, advanced athletes and the measurement of effort as the most
important open problems.

## How to read the numbers in this chapter

Citations use evidence-record keys, such as [@pelland-2026-volume-frequency]. Only numbers read in
full text may be presented as verified. **Unmarked numbers** were read in the full text of the
source. A **dagger (†)** marks a number read only in the abstract. A **double dagger (‡)** marks a
number quoted from a different paper (secondary) and not checked against the original. Preprints are
named as such, because their numbers can change between versions and have not been peer reviewed.

Grades: **established** (consistent evidence from several good syntheses), **promising** (good but
limited or indirect evidence), **contested** (credible evidence points different ways),
**speculative** (plausible but thinly supported) and **convention** (practitioner practice with no
direct data). Intervals are 95% confidence intervals (CI), credible intervals (CrI) or
highest-density intervals (HDI) unless another level is stated.

---

## 3.1 Introduction: why dose is the hard problem

Pharmacology offers a useful picture. Plot the response to a drug against its dose and you usually
see a threshold below which nothing measurable happens (the **minimum effective dose**), a rising
slope, a ceiling where more drug adds little, and sometimes a point beyond which more does harm (an
"inverted U"). Resistance training invites the same picture, and most of the modern literature is an
attempt to draw it. But training is a stubborn drug. The person giving it is usually the person
taking it. The active ingredient is not the weight on the bar but a mechanical and neural event in
the muscle whose size depends on effort, which is hard to measure. The outcomes are measured with
error comparable to the effects being studied. And the patient changes: a dose that transforms a
novice may barely register after ten years of training.

The questions have shifted in three phases. The first was whether more than a single set was needed
at all; an influential school of thought held that one hard set per exercise captured most of the
benefit. Krieger's 2010 meta-analysis found that multiple sets gave hypertrophy effect sizes about
40% larger than single sets, a difference of 0.10† (95% CI 0.02 to 0.19†), graded from one set
(0.24†) through two to three (0.34†) to four to six (0.44†) [@krieger-2010-sets-hypertrophy]. The
direction of the volume effect has not been seriously challenged since.

The second phase replaced dichotomies with curves. Meta-regressions began to treat weekly sets as a
continuous variable [@schoenfeld-2017-volume] [@ralston-2017-volume-strength], and in the 2020s
Bayesian multilevel meta-regressions began testing which *shape* of curve (linear, logarithmic,
square-root, reciprocal) best fits the data [@pelland-2026-volume-frequency]
[@robinson-2024-proximity-failure] [@swinton-2024-dose-response]. This is real progress, and it is
also the source of much present disagreement: different shapes fitted to the same data imply
different "optimal" doses.

The third phase was a change of explanation. The acute rise in circulating hormones, the
accumulation of metabolites and the "pump" were long thought to drive growth, and heavy loads were
thought necessary for it. Both beliefs have largely given way to a view in which **mechanical
tension** on the fibres of recruited motor units is the primary stimulus. Acute hormone responses do
not predict growth [@morton-2016-load-trained], and current mechanistic reviews treat metabolites and
cell swelling as minor contributors at most [@van-every-2025-hypertrophy-mechanisms]. That change
reorganised the questions about load and effort (Sections 3.5 and 3.6).

One caveat runs through everything that follows. This thesis is about trained adults, but the
dose-response literature is dominated by young men, interventions of six to twelve weeks, untrained
or "recreationally trained" participants and one-repetition-maximum (1RM) tests that are new to the
participants. In the largest volume meta-regression, 28 of 67 studies used untrained participants,
interventions averaged 10.4 weeks and 79% of participants were men [@pelland-2026-volume-frequency].
In the main network meta-analysis of load, 75% of studies were in untrained people and none in
highly strength-trained ones [@lopez-2021-load]; a large network meta-analysis of prescriptions
excluded elite athletes [@currier-2023-nma]. Every step up in training age is therefore an
inference. The machinery these doses act on is described in Chapter 2; how doses are arranged over
time is the subject of Chapter 4; hypertrophy mechanisms are treated in Chapter 5 and recovery in
Chapter 10.

---

## 3.2 Counting the dose

Before a curve can be drawn, the dose has to be counted. Three counting problems recur, and each
changes the answers.

### 3.2.1 What counts as a set for a muscle?

A bench press trains the pectorals, but also the triceps and the front of the shoulder. Pelland and
colleagues classified each set as **direct** (the measured muscle is the prime mover; for strength,
the tested exercise itself) or **indirect** (the muscle works as a synergist; for strength, other
exercises using the involved muscles). They then counted volume three ways: **direct** counting
ignores indirect sets, **total** counting gives them full weight, and **fractional** counting gives
each a weight of 0.5. Fractional counting fitted best for both outcomes, with strong to very strong
Bayes factors [@pelland-2026-volume-frequency]:

| Comparison (2 × log Bayes factor) | Hypertrophy, volume | Strength, volume | Hypertrophy, frequency | Strength, frequency |
|---|---|---|---|---|
| Fractional vs total | 9.48 | 18.21 | 9.96 | 31.27 |
| Fractional vs direct | 10.29 | 45.96 | 10.82 | 54.84 |

Only three weights were compared, and 0.5 was not estimated from the data. Fractional counting is
the best of three conventions, not a measured physiological constant (promising). It is still the
most defensible rule available, and "sets per week" in this chapter means fractional sets unless
stated otherwise.

**Worked example.** A week of 4 sets of bench press, 3 of overhead press and 3 of triceps pushdowns
gives the triceps 3 direct sets plus 7 indirect sets × 0.5, or 6.5 fractional sets. Direct counting
says 3 and total counting says 10. The same week yields doses that differ threefold, so any claim
that "the optimum is *X* sets per muscle" is uninterpretable until we know which rule produced *X*.

### 3.2.2 Volume load is a description, not a cause

**Volume load** (sets × repetitions × load) is the traditional tally of work, but it is a poor
candidate for the causal dose of hypertrophy: loads from about 30% of 1RM upward produce similar
growth when sets are hard (Section 3.5) while differing several-fold in volume load. Hammert and
colleagues argue that rising volume load describes what a person was able to do, not what made the
muscle grow; similar volume-load progressions can come with different growth
[@hammert-2024-volume-load-progression] (contested; opinion paper, abstract level). Volume load is
also rarely reported, so the 2026 American College of Sports Medicine (ACSM) overview could not
analyse it [@currier-2026-acsm-position-stand]. This chapter therefore counts **hard sets**: sets
taken reasonably close to failure.

### 3.2.3 Effort: the variable that is hardest to see

A set's stimulus depends on how close it ends to **momentary muscular failure**, the point at which
another full repetition cannot be completed despite maximal effort. Closeness is usually expressed as
**repetitions in reserve (RIR)**: a set ended at 2 RIR could have continued for two more repetitions.
Three problems blur this variable. "Failure" is defined inconsistently (momentary, volitional or not
at all), and percentage-of-1RM prescriptions put different people at very different RIR
[@pelland-2022-proximity-methods] (established; abstract level). Lifters are imperfect judges: they
underpredict repetitions to failure by about one on average (0.95, 95% CI 0.17 to 1.73), more
accurately near failure and in sets of 12 or fewer, regardless of training status
[@halperin-2022-rir-accuracy] (promising). And studies rarely measure effort: in Pelland's corpus
about 78% of effects used some failure definition but only about 30% defined momentary failure
clearly [@pelland-2026-volume-frequency]. Every volume dose-response below is therefore conditional on
sets being hard, a condition most studies control only loosely.

### 3.2.4 Reading the outcome side

The **smallest detectable effect size (SDES)** is the threshold below which a difference cannot be
reliably separated from measurement noise; Pelland set it at 2.05% for hypertrophy and 3.96% for
strength [@pelland-2026-volume-frequency]. The **point of undetectable outcome superiority (PUOS)**
is the dose beyond which no further increment has more than a 50% chance of exceeding the SDES
[@remmert-2025-per-session-volume]. Neither is a ceiling: a PUOS says further gains are too small to
detect reliably, not that they are zero.

These models are **meta-regressions** that relate outcomes to doses mostly *across* studies. A study
using more sets may also differ in population, exercise, measurement or duration, so slopes are
associations, and the fixed effects explained only about 22% to 26% of the variance (marginal R²)
[@pelland-2026-volume-frequency]. Randomised trials that manipulate dose within one population carry
more causal weight but far less precision. That tension recurs throughout the chapter.

---

## 3.3 Volume and hypertrophy

### 3.3.1 The direction is settled

Schoenfeld and colleagues' 2017 meta-regression (15 studies) associated each additional weekly set
with an effect size increase of 0.023†, about 0.37† percentage points of growth (P = 0.002)
[@schoenfeld-2017-volume]. A Bayesian network meta-analysis of 119 hypertrophy studies (3,364
participants) ranked multi-set prescriptions highest, its top prescription giving a standardised
mean difference (SMD) against no training of 0.66 (95% CrI 0.47 to 0.85) [@currier-2023-nma]. The
2026 ACSM position stand, an overview of 137 systematic reviews, judged hypertrophy enhanced by
higher volume, at least 10 sets per muscle per week (5 reviews, n = 2,267, quality-of-evidence score
50%) [@currier-2026-acsm-position-stand]. The direction is **established**.

### 3.3.2 The shape is not

The most detailed answer to "how much more, per set?" comes from Pelland and colleagues' 2026
meta-regressions (hypertrophy: 35 studies, 220 effects, 1,032 participants; direct site-specific
measures; fractional counting) [@pelland-2026-volume-frequency]. The posterior probability of a
positive slope was 100%. A **square-root** model fitted best: each extra set adds less than the one
before, but the curve keeps rising. At the mean of about 12 sets per week, the marginal slope was
0.24 percentage points of extra growth per additional set (95% CrI 0.15 to 0.33). The authors
translated the curve into efficiency tiers, the extra weekly sets needed for each further detectable
increment (2.05%):

| Starting volume (fractional sets/week) | Extra sets per detectable increment |
|---|---|
| 0 to 4 | 4 sets is the minimum effective dose |
| 5 to 10 | about 6 |
| 11 to 18 | about 8.5 |
| 19 to 29 | about 10.75 |
| 30 to 42 | about 12.5 |
| 43 and above | too few data to say |

The authors read these tiers as "no clear plateau", but caution in the same breath that few studies
have explored about 25 or more weekly sets and that the curve "is still compatible with multiple
functional forms (e.g., functional plateau, inverted-U)". The weekly PUOS of about 31 sets‡ is not in
the paper; it comes from the authors' supplement as quoted by a companion preprint
[@remmert-2025-per-session-volume]. The verification pass therefore split the grade: the direction
is established; the shape, diminishing returns without a clear plateau, is **promising**, since it
rests on one model-selection exercise explaining about 22% of the variance.

**Worked example.** A lifter at 12 sets per week considers 20. At 12 sets the slope is about 0.24
percentage points per set and falling, so eight more sets buy a little under two percentage points
of extra growth over a study of about ten weeks (our illustrative arithmetic). That is roughly one
detectable increment, consistent with the "about 8.5" tier. Whether it is worth the time and fatigue
is a judgement, not a finding, and this is why careful people read the same curve as "keep adding
sets" or "you are near the point of small returns".

### 3.3.3 Three readings of the same curve

Pelland's own reading is no clear plateau within the data and nothing knowable above about 43 sets.
The ACSM panel, citing Pelland, reads "diminishing returns beyond ~2-3 sets/exercise for strength and
~18-20 weekly sets for hypertrophy" [@currier-2026-acsm-position-stand] (contested as a reading).
Baz-Valle and colleagues, reviewing trained men only, found that more than 20 weekly sets did not
beat 12 to 20 for the quadriceps (p = 0.19†) or biceps (p = 0.59†) but did for the triceps
(p = 0.01†), and recommend 12 to 20 [@baz-valle-2022-volume] (contested). The divergence is mainly
interpretive (what counts as a "meaningful" return) plus differences in set counting; the triceps
exception may itself reflect uncounted indirect pressing. None of the readings is wrong about the
data. They disagree about where on a flattening curve to draw a line.

### 3.3.4 Trials in trained people: a mixed picture

Several trials support continuing benefit. Schoenfeld and colleagues randomised 34 trained men to 1,
3 or 5 sets per exercise for eight weeks (roughly 6 to 9, 18 to 27 and 30 to 45 weekly sets);
hypertrophy was significantly greater with more volume at three of four sites
[@schoenfeld-2019-volume-trained] (promising). A 2025 preprint by Robinson and colleagues trained one
leg of each of 16 recreationally trained people at about 8 and the other at about 16 weekly sets,
through two 11-week phases separated by washout. The higher volume added 1.8 cm²† of vastus lateralis
cross-sectional area (95% HDI 0.29 to 3.41†; 98.8%† posterior probability)
[@robinson-2025-volume-individual] (promising; preprint). In trained women, adding sets above a base
of 22 per week increased vastus lateralis cross-sectional area in one group but not summed muscle
thickness [@enes-2025-set-progression] (contested; abstract level), a reminder that two measures of
the same muscle can disagree.

Another group of recent trials finds nothing when volume is raised above what trained people already
do. Among 42 people with more than six months of elbow-flexion training, raising sets above habitual
volume added no growth (0.022 cm† at the 50% site, 95% CI −0.096 to 0.140†)
[@moreno-2025-volume-baseline]. Raising weekly sets by 30% or 60% added no thigh growth over
maintenance, though only 29 of 55 randomised participants finished [@barsuhn-2025-volume-increase].
In 27 strength-trained male athletes, 1.5 times normal volume (toward about 60 sets per week) for
seven weeks neither increased muscle thickness nor "rescued" earlier poor responders
[@rantila-2026-high-volume] (all promising; abstract level). Buckner and colleagues give these nulls
an intellectual home, arguing that trials showing a volume effect in trained people report
implausibly large growth (quadriceps thickness gains of 0.6 to 0.72 cm† against a typical 0.1 to
0.25 cm†) [@buckner-2023-volume-doubts] (contested).

The verification pass graded the sceptical claim **contested**, and that is the honest grade. A
reconciliation is possible but inferential. If returns above about 10 to 20 sets per week are
positive but small, as the square-root curve implies, trials of 10 to 15 people per group over 7 to
12 weeks cannot detect them, and their nulls are expected. Large single-trial effects may partly
reflect swelling (edema) or other artefacts at very high volumes; Pelland's authors judge edema
unlikely to confound measurements in trained people after sessions of about eight sets, but data at
very high volumes are lacking [@pelland-2026-volume-frequency]. And the clearest positive trial
compared 8 with 16 sets, *below* the disputed range. The evidence fits a firm benefit from low to
moderate volume and an uncertain, probably small benefit from moderate to very high volume.

### 3.3.5 Per session or per week?

Gym folklore holds that sets beyond some number in one session are "junk volume". Re-analysing the
Pelland corpus per session, a preprint by Remmert and colleagues (numbers read in full but not
independently re-checked) found hypertrophy rising with per-session sets (0.393 percentage points per
set, 95% CrI 0.202 to 0.583) with a PUOS of about 11 fractional sets per muscle per session (about 8
direct), and a strength PUOS of about 2 direct sets of the tested lift per session
[@remmert-2025-per-session-volume] (speculative). The authors stress that the PUOS is not a limit
beyond which sets are wasted, that only 12 studies exceeded about 10 sets per session, and that
per-session volume is confounded with weekly volume and frequency across studies. It is a hypothesis,
not a rule.

### 3.3.6 Why returns diminish

Each hard set delivers mechanical tension to the fibres of high-threshold motor units; tension
accumulated across sets drives muscle protein synthesis (MPS) and, over weeks, growth. Higher-volume
protocols produce larger post-exercise MPS and signalling responses, and in rats MPS plateaus with
more "sets" even while one signalling marker (p70S6K) keeps rising, a plausible basis for diminishing
returns [@pelland-2026-volume-frequency] (speculative). Two explanations for the flattening are
usually offered: a ceiling on the anabolic response to a session, and rising fatigue and damage that
use up recovery capacity and degrade later sets. Neither has been isolated in a long-term study.

Some lifters claim to be "high-volume responders". Robinson's replicated design tested this. General
responsiveness was consistent across the two phases (correlation 0.67 to 0.70†), but the
person-specific benefit from higher volume was not (0.04 to 0.06†) [@robinson-2025-volume-individual]
(promising; preprint, n = 16). Apparent individual differences in response to volume look mostly
like noise plus general responsiveness (Chapter 11).

---

## 3.4 Volume and strength

### 3.4.1 A curve that bends early

In Pelland's strength models (66 studies, 490 effects, 2,020 participants) the volume slope was
again certainly positive, 0.21 percentage points of extra 1RM gain per additional set at the mean
(95% CrI 0.16 to 0.26), but the best-fitting shape was **reciprocal**: steep, then flattening hard
[@pelland-2026-volume-frequency]. Against the 3.96% threshold, one set per week was already a minimum
effective dose; the second needed about 0.75 extra sets per detectable gain and the third and fourth
about 2.25; from five onward, additional sets "do not consistently enhance strength gains > SDES".
The weekly PUOS was about 3 sets‡ [@remmert-2025-per-session-volume].

Older syntheses agree in direction and modesty. High weekly set volume gave slightly larger strength
gains than low (effect size difference 0.18†, 95% CI 0.06 to 0.30†), but for 1RM in the trained
exercise only 0.14† (−0.01 to 0.29†), with the split at about five sets per exercise per week
[@ralston-2017-volume-strength]. Across 295 studies, average sets per session had a small positive
coefficient (SMD 0.05, 95% CrI 0.03 to 0.07) [@swinton-2024-dose-response]. The ACSM panel judged
strength enhanced by more sets (7 reviews, n = 5,633, quality score 71%)
[@currier-2026-acsm-position-stand].

Trials in trained people show the flatness directly. Squat and bench press 1RM gains did not differ
between 1, 3 and 5 sets per exercise (P = 0.22 and 0.15; Bayes factors favouring no difference), so
13-minute sessions gained as much strength as sessions five times longer
[@schoenfeld-2019-volume-trained]. Doubling volume in Robinson's trial added 3.48 kg† (95% HDI −5.1 to
12.15†), only an 80% probability of any benefit [@robinson-2025-volume-individual]. The group that
kept its habitual volume had the greatest overall 1RM gain in Barsuhn's trial†
[@barsuhn-2025-volume-increase], and in Rantila's athletes deadlift strength favoured the *lower*
volume (P = 0.043†) [@rantila-2026-high-volume] (speculative).

Two author qualifications belong with the headline. The 3.96% threshold "may be greater than what
some deem practically relevant", and sets beyond about four "may produce additional strength gains,
albeit less than the SDES"; a competitive lifter who values a 1% gain is asking a question the
threshold cannot answer. And the curve comes from studies averaging only 8.1 sets per week, mostly
without a taper (a planned reduction in training before testing) and often with an unfamiliar 1RM
test. The reciprocal shape is **promising**, with those limits attached.

### 3.4.2 Why strength saturates sooner

The leading explanation is that early 1RM gains are dominated by learning. A 1RM is a skill, and a
few exposures capture much of it. In untrained people, practising only the 1RM test produced 1RM
gains not different from four sets to failure (difference −1.1 kg† upper body, 90% CI −4.8 to 2.4†;
1.0 kg† lower body, 90% CI −0.7 to 2.8†), even though the training group grew more
[@mattocks-2017-practice-test] (promising). Pelland's authors suggest that the large effect of the
first weekly set reflects learning a novel test. If so, the curve should differ in people who have
already learned the lift, and there is a hint that it does: in well-trained powerlifters, 1 to 3
direct sets per week were insufficient while 3 to 9 were effective [@pelland-2026-volume-frequency]
[@androulakis-korakakis-2021-powerlifters]. Over longer horizons strength also gains from added
muscle, but the volume needed to keep adding muscle brings fatigue that masks strength at untapered
post-tests, so short studies may understate the long-run value of volume for strength (speculative).

---

## 3.5 Load

### 3.5.1 Hypertrophy is largely load-independent when sets are hard

It was long assumed that growth required heavy loads. The past decade has overturned that
assumption, provided sets are taken to or near failure. Lopez and colleagues' network meta-analysis
(28 studies, 747 adults, all sets to volitional failure) compared low loads (more than 15 repetitions
maximum, RM), moderate (9 to 15RM) and high (8RM or fewer) [@lopez-2021-load]:

| Hypertrophy contrast | SMD (95% CI) |
|---|---|
| High vs low load | 0.12 (−0.06 to 0.29) |
| Moderate vs low load | 0.20 (−0.04 to 0.44) |
| High vs moderate load | −0.09 (−0.33 to 0.16) |

Heterogeneity was nil (I² = 0%) and the results held in the best-quality studies. Earlier and later
syntheses agree [@schoenfeld-2017-load] [@currier-2023-nma], and the ACSM panel concluded that load
across 30% to 100% of 1RM does not affect hypertrophy (8 reviews, n = 5,340, quality score 66%)
[@currier-2026-acsm-position-stand]. Two corrections from verification matter. Lopez's categories
are repetition-maximum bins, and the often-quoted "30-85% 1RM" range has no source. And Lopez found an
interaction with training status (P = 0.033) in a corpus where 21 of 28 studies were untrained. In
trained people the case rests mainly on Morton and colleagues' trial: 49 trained men training to
failure for 12 weeks at about 30% to 50% or 75% to 90% of 1RM showed no difference in lean mass or in
type I or type II fibre growth [@morton-2016-load-trained]†. The claim is **established** for mostly
untrained samples and **promising** for trained ones.

### 3.5.2 There is a floor

Lasevicius and colleagues trained each limb of untrained men at a different load. The 20% of 1RM
condition went to failure, and the 40%, 60% and 80% conditions were matched to its volume load (and
so did not go to failure). The 20% condition produced roughly half the growth: vastus lateralis
cross-sectional area rose 8.9%† against 19.5% to 20.5%† [@lasevicius-2018-intensity] (promising).
This shows a load floor, not that low effort halves growth. Load-independence holds from roughly 30%
to 40% of 1RM upward.

### 3.5.3 Strength is load-dependent

For maximal strength the picture reverses. High loads beat low (SMD 0.60, 95% CI 0.38 to 0.82),
moderate beat low (0.34, 0.05 to 0.62), and high edged moderate (0.26, −0.02 to 0.54; P = 0.068),
with a 98.2% probability that high load ranked best [@lopez-2021-load]. Currier's network, using
different categories, ranked heavier-load (at least 80% of 1RM) multi-set prescriptions top
[@currier-2023-nma]:

| Prescription | SMD vs no training (95% CrI) |
|---|---|
| Heavy load, multiple sets, ≥3 sessions/week | 1.60 (1.38 to 1.82) |
| Heavy load, multiple sets, 2 sessions/week | 1.59 (1.28 to 1.90) |
| Light load, multiple sets, ≥3 sessions/week | 1.07 (0.89 to 1.25) |
| Heavy vs light (≥3 sessions/week) | 0.53 (0.31 to 0.74) |

Across 295 studies, strength rose monotonically with percentage of 1RM, with an inflection near 70%
beyond which each extra unit of load added less [@swinton-2024-dose-response]. The ACSM panel judged
loads of at least 80% of 1RM to enhance strength (6 reviews, n = 6,574, quality score 79%)
[@currier-2026-acsm-position-stand]. Even in Morton's trained men, bench press 1RM rose more with
heavy loads (14 ± 1† vs 9 ± 1† kg) [@morton-2016-load-trained]. Load-dependence of 1RM gains is
**established**.

### 3.5.4 Why load matters for strength but not for size

The hypertrophy result follows from **Henneman's size principle**: motor units are recruited in
order of size, from small low-threshold units to large high-threshold ones. A heavy load recruits the
high-threshold units from the first repetition; a light load recruits them progressively as smaller
units fatigue. Near failure contraction is slow, and by the force-velocity relationship slowly
shortening fibres experience high tension. The stimulus on the fibres that matter therefore converges
across loads, provided the set ends near failure [@robinson-2024-proximity-failure].

Strength follows the **principle of specificity**. Heavy training rehearses the high-force,
slow-velocity pattern a 1RM demands and drives neural adaptations in agonist activation, coordination
and confidence under load; Lopez's authors attribute the strength difference to specificity plus
combined neural and muscular adaptations [@lopez-2021-load]. How much of the heavy-load advantage is
general strength rather than skill at the test is disputed. The Loenneke and Buckner group, whose
stated position emphasises specificity, meta-analysed strength on *unpractised* isometric or
isokinetic tasks: high loads still tended to win, Cohen's d 0.322 (95% CI −0.08 to 0.72; prediction
interval −0.45 to 1.1; 10 studies, 245 participants), which the authors call inconclusive
[@hammert-2026-nonspecific-strength] (contested). An earlier analysis found no significant isometric
difference (0.16‡, 95% CI −0.06 to 0.37‡) [@schoenfeld-2017-load]. The reasonable inference is that
most of the heavy-load 1RM advantage is task-specific, with a smaller general advantage that is hard
to detect because non-specific tests are insensitive (about 326 participants per group would be
needed, by an estimate the Hammert authors cite). Repeated 1RM testing within trials may also narrow
load contrasts, because light-load groups practise heavy lifting at every test [@lopez-2021-load].

Whether trained lifters can rely on light loads for growth as fully as novices is unknown, and light
sets to failure carry practical costs: more discomfort, more time, and poorer RIR judgement above 12
repetitions [@halperin-2022-rir-accuracy].

---

## 3.6 Effort: how close to failure?

### 3.6.1 Strength: proximity barely matters

Robinson and colleagues estimated the RIR of every condition in 55 studies and modelled strength
against it (243 effects). The slope was essentially flat: 0.003 standardised mean change per RIR
(95% CI −0.012 to 0.018), with a response-ratio model and sensitivity analyses agreeing
[@robinson-2024-proximity-failure] (read from the preprint, whose conclusions match the published
abstract). Failure and non-failure training gave similar strength (effect size −0.09†, 95% CI −0.22
to 0.05†), and when volume was not equated, non-failure was *better* (−0.32†, −0.57 to −0.07†)
[@grgic-2022-failure]. In velocity-based training, where a set ends once bar speed has fallen by a
chosen percentage (the **velocity-loss threshold**), the threshold did not affect strength gains
[@jukic-2023-velocity-loss]. A 2026 meta-analysis of 20 trials found slightly more dynamic strength
with non-failure training (SMD 0.24†, 95% CI 0.06 to 0.42†) [@wu-2026-non-failure] (contested; not
re-checked). The ACSM panel found failure did not enhance strength (3 reviews, n = 1,371, quality
score 83%) [@currier-2026-acsm-position-stand]. In two small within-participant trials in trained
people, 1 to 3 RIR matched failure for 1RM: 0.588 kg† (85% HDI −0.491 to 1.66†) for the elbow flexors
and 0.198 kg† (−1.87 to 2.6†) for the knee extensors [@vasconcelos-2026-elbow-failure]
[@vasconcelos-2026-leg-extension-failure].

Robinson's discussion explains why a flat slope is plausible: opposing effects may cancel. Against
failure, force falls as fatigue builds, so repetitions far from failure are the highest-force and
most 1RM-like; fatigue management (few studies taper) and rate-of-force-development adaptations also
favour stopping short. For failure, it resembles the test, RIR judgements are more accurate near it,
and extra hypertrophy may feed strength. Robinson also separates **load-mediated** from
**fatigue-mediated** proximity: a single at 95% of 1RM is "close to failure" because of its load, and
that kind of proximity does help strength [@robinson-2024-proximity-failure]. So "proximity does not
matter for strength" means fatigue-driven proximity, not heaviness (**promising**).

### 3.6.2 Hypertrophy: closer helps, but the last repetitions add little

For hypertrophy the slope is real but modest. In Robinson's analysis (26 studies, 140 effects) the
best-fitting model was **linear**: −0.019 standardised mean change per RIR (95% CI −0.035 to −0.004),
or about 0.48 percentage points less growth per extra repetition in reserve (95% CI 0.18 to 0.78)
[@robinson-2024-proximity-failure] (promising). RIR was estimated by the authors, not measured.

Refalo and colleagues approached the question categorically [@refalo-2023-failure-hypertrophy].
Across any definition of failure, failure training had a trivial, borderline advantage (effect size
0.19, 95% CI 0.00 to 0.37; p = 0.045), fragile to the assumed pre-post correlation. With a strict
momentary-failure definition it vanished (0.12, −0.13 to 0.37; p = 0.343). Velocity-loss thresholds
above 25% did not beat 20% to 25% (0.08, −0.16 to 0.32), and within-group effects were 0.20, 0.39 and
0.42 for velocity loss below 20%, 20% to 25% and above 25%: stopping far from failure gave less
growth, but pushing all the way added little. A velocity-loss meta-analysis agrees in direction (b =
0.006 per percentage point of velocity loss, 95% CI 0.001 to 0.012) [@jukic-2023-velocity-loss].

Trials in trained people are small but consistent. Eighteen lifters trained one leg to momentary
failure and the other to 1 to 2 RIR for eight weeks; quadriceps thickness rose 0.181 cm† (HDI 0.119
to 0.243†) and 0.182 cm† (0.115 to 0.247†) [@refalo-2024-failure-rir-trial]. The null was replicated
in the elbow flexors (difference 0.032 cm†, −0.044 to 0.113†) and knee extensors (−0.019 cm†, −0.094
to 0.054†) [@vasconcelos-2026-elbow-failure] [@vasconcelos-2026-leg-extension-failure]. A trained
subgroup in one meta-analysis slightly favoured failure (0.15†, 0.03 to 0.26†) [@grgic-2022-failure]
(contested). The ACSM panel concluded that failure does not enhance hypertrophy (4 reviews, n = 800)
and proposed "near failure", or 2 to 3 RIR, as sufficient [@currier-2026-acsm-position-stand].

Here the verification pass corrected the research notes. It is tempting to say the curve "flattens
near failure", but Robinson's formal model comparison chose a *linear* form; the flattening is
inferred from categorical contrasts and three 8-week trials totalling about 56 people. These are
compatible with flattening without establishing it. The two can be reconciled if the linear slope is
driven mainly by conditions far from failure (more than 4 or 5 RIR), where all sources agree growth
is smaller. With true proximity unknown in most non-failure arms and RIR misjudged by about a
repetition, no prescription finer than about 2 RIR can be justified [@halperin-2022-rir-accuracy]
[@pelland-2022-proximity-methods]. The defensible statement: growth rises as sets end closer to
failure, and in trained lifters stopping at about 1 to 3 RIR has matched failure (promising); that
the curve truly flattens is speculative.

### 3.6.3 The costs of failure

If the last repetitions add little growth, what do they cost? Twenty-four trained men and women
performed six sets of bench press at 75% of 1RM, ending sets at failure, 1 RIR or 3 RIR
[@refalo-2023-failure-fatigue]:

| Change in bar velocity | Failure | 1 RIR | 3 RIR |
|---|---|---|---|
| 4 min after session | −25% | −13% | −8% |
| 24 h after session | −3% | −3% | +2% |
| 48 h after session | no differences | | |

Two details are often misreported. The authors describe the relationship between proximity and acute
fatigue as **linear**, not "disproportionate" (the step from 1 RIR to failure did cost more than from
3 to 1 RIR, but that is a reading of three points from one session). And at 24 hours failure and
1 RIR were equal; only 3 RIR was clear of a residual deficit. Failure training was also more
uncomfortable (perceived discomfort 5.1† vs 4.1†) and less pleasant (feeling scale 0.3† vs 1.2†) for
the same growth [@refalo-2025-failure-perception], and higher velocity-loss thresholds impaired jump
performance (countermovement jump b = −0.040, 95% CI −0.079 to −0.001) [@jukic-2023-velocity-loss].
Combining these with Section 3.6.2, the final repetitions before failure appear to buy fatigue and
discomfort rather than growth (promising). How RIR and velocity are used to regulate training is
taken up in Chapter 4.

---

## 3.7 Frequency

**Frequency** means sessions per week in which a muscle or lift is trained. In **volume-equated**
comparisons weekly sets are held constant and only their distribution changes; in others, more
sessions also mean more sets. Meta-regressions add a third category, **volume-adjusted**, in which
frequency effects are estimated across studies with weekly volume as a covariate. Mixing these
categories is the main source of confusion in this literature.

### 3.7.1 Hypertrophy: at equal volume, frequency matters little

The history is a cautionary tale. A 2016 meta-analysis found training a muscle twice rather than
once weekly gave more growth (effect size 0.49† vs 0.30†) [@schoenfeld-2016-frequency], and the
"twice a week" heuristic spread. The same group's 2019 update found no meaningful volume-equated
difference [@schoenfeld-2019-frequency]†, and the 2016 result is now graded contested. (Two later
papers quote the 2019 volume-equated estimate as 0.07 with different intervals, −0.08 to 0.21‡ and
−0.02 to 0.17‡; the primary paper was not read, so neither is reported as verified.)

Current evidence agrees. Pelland's volume-adjusted slope was 0.32 percentage points per extra session
(95% CrI −0.14 to 0.82; 91.3% probability positive), "compatible with negligible effects"
[@pelland-2026-volume-frequency]. A 2026 preprint meta-analysis restricted to volume-equated trials
(16 trials, 380 participants) found g = −0.06 (95% CI −0.24 to 0.13; I² = 0%); for one against three
sessions g = −0.23 (−0.57 to 0.10), so a small advantage for three sessions cannot be excluded, and
certainty was low to very low [@boutagy-2026-frequency-preprint] (promising; preprint). Its first
version reported g = −0.02; the figures here are from the corrected current version. Another
meta-analysis (47 studies, 1,665 participants) found no effect on muscle mass (g = −0.13†, p = 0.34†)
[@tao-2026-frequency], and the ACSM panel judged frequency not to affect hypertrophy (4 reviews, n =
3,177, quality score 63%) [@currier-2026-acsm-position-stand]. At equal weekly volume, one to three
sessions per muscle give indistinguishable hypertrophy: **established** for "no large effect", with
a small benefit not excluded.

The null is interesting because mechanism predicted the opposite. MPS returns toward baseline within
about 48 hours of a bout in trained people, which suggests more frequent stimulation should yield more
growth. Pelland's authors suggest muscle damage may confound early MPS time-courses, and that
per-session volumes in frequent-training arms may be too low to matter
[@pelland-2026-volume-frequency].

### 3.7.2 Strength: frequency helps, probably through practice

Grgic and colleagues found strength rising with frequency when volume could vary (effect sizes 0.74†,
0.82†, 0.93† and 1.08† for one, two, three and four or more sessions; p = 0.003†), but not
significantly in volume-equated studies (p = 0.421†), and attributed the effect to volume
[@grgic-2018-frequency-strength]. Pelland's meta-regressions, with non-linear models and fractional
counting, found a volume-adjusted frequency effect: 3.27 percentage points of 1RM gain per extra
session (95% CrI 2.74 to 3.84), with the control-adjusted gain rising from 12.72% (10.57 to 15.05) at
one session per week to 17.32% (14.34 to 20.56) at two and "accelerating diminishing returns" beyond
[@pelland-2026-volume-frequency]. Tao's pooled strength estimate also favoured more sessions (g =
−0.17†; I² = 0%), though the abstract does not say whether it is volume-equated
[@tao-2026-frequency].

It is tempting to frame this as Pelland overturning Grgic. The authors reject that framing: their
analyses "build on" the earlier one "instead of necessarily different findings". Grgic's own
volume-equated estimates also rose from one to two sessions, from 0.53‡ (95% CI 0.13 to 0.93‡) to
0.80‡ (−0.25 to 1.86‡) [@grgic-2018-frequency-strength]. A non-significant result in a small subgroup
is absence of evidence, not evidence of absence.

Not all evidence agrees. The ACSM panel rated frequency positive for strength (4 reviews, n = 3,531,
quality score 69%), but three reviews (n = 608) found no effect, and the panel notes the effect is
diminished when volume is equated [@currier-2026-acsm-position-stand]. In Currier's network the top
rank moved from three sessions to two in most sensitive comparisons [@currier-2023-nma], and in
Swinton's model adding sessions per week did not improve prediction [@swinton-2024-dose-response].
The mechanism Pelland's authors propose is practice of the tested lift: more sessions mean more
rehearsal, technical refinement and experience choosing loads. That fits the volume and load
findings, explains why frequency helps strength but not size, and implies the effect is partly
test-specific. With volume adjusted, more sessions are associated with larger 1RM gains, with sharply
diminishing returns beyond about two (**promising**).

---

## 3.8 Rest between sets

### 3.8.1 Hypertrophy: little sign that rest matters, beyond avoiding very short rest

Short rest intervals of 30 to 90 seconds have long been recommended for hypertrophy by the National
Strength and Conditioning Association. Singer and colleagues' Bayesian meta-analysis (9 studies, 19
measurements) found a small advantage for rest longer than 60 seconds and called for that guidance to
be reconsidered [@singer-2024-rest]:

| Region | SMD favouring >60 s (95% CrI) | Probability > 0 |
|---|---|---|
| Arm | 0.13 (−0.27 to 0.51) | 0.74 |
| Thigh | 0.17 (−0.13 to 0.43) | 0.88 |
| Whole body | −0.08 (−0.45 to 0.29) | not reported |

The verification pass judged the usual summary overstated. Every interval includes zero; the
authors' probability that the benefit exceeds a *small* effect was only 54% (thigh) and 45% (arm);
the whole-body estimate points the other way. Six of nine studies were in untrained people, with too
few data for a trained subgroup. And the "no appreciable benefit beyond about 90 seconds" conclusion
is weak, since the thigh estimate for very long against short rest (0.32, −0.10 to 0.68) exceeded
that for intermediate rest (0.13). In 40 trained adults, self-selected rest matched fixed rest of
about two minutes for hypertrophy (−0.1 SD†, 95% CrI −0.2 to 0.0†) and performance (0.0 SD†, −0.3 to
0.3†), but fixed-rest sessions were about 29% shorter (56.0† vs 78.5† minutes), so self-selected rest
took about 40% longer for nothing [@mohan-2026-self-selected-rest] (the research notes inverted this
comparison; verification corrected it). The ACSM panel could not determine an effect on hypertrophy
(4 reviews, n = 265, quality score 44%) [@currier-2026-acsm-position-stand]. That rest longer than
about 60 seconds may give a small hypertrophy advantage is **speculative to promising**.

### 3.8.2 Strength: probably longer for heavy work, and contested

Trained-specific evidence favours longer rest. In 21 trained men performing three sets of 8 to 12RM
of seven exercises, three times a week for eight weeks, three-minute rest gave more squat and bench
press 1RM and more anterior-thigh growth than one-minute rest† [@schoenfeld-2016-rest] (promising).
A systematic review of 23 studies (491 participants, no pooled estimate) concluded that rests longer
than two minutes appear necessary to maximise strength in trained people, while 60 to 120 seconds
suffices for the untrained [@grgic-2018-rest-strength] (promising). A 2025 preprint of six studies
in trained men favoured longer rest for strength (SMD −0.74† by the authors' sign convention; no CI
in the abstract) [@davidson-2025-rest-preprint] (speculative). Against this, the ACSM panel found
short (under one minute) against long (over one minute) rest did not affect strength (2 reviews,
n = 982, quality score 63%) [@currier-2026-acsm-position-stand]. Both can be true: the ACSM judgement
is a vote count of two reviews dominated by untrained participants with rest split crudely at one
minute, whereas the trained-specific evidence is a few small trials with a fixed number of sets.
Rest length probably matters little for novices or when extra sets compensate, but matters for heavy
multi-joint work in trained lifters when sets are fixed. No recent meta-analysis in trained lifters
exists. The grade is **contested**.

### 3.8.3 Mechanism: rest buys set quality

Short rest reduces repetitions in later sets, through incomplete phosphocreatine resynthesis,
metabolite accumulation and central fatigue, and so reduces volume load and probably the number of
high-tension repetitions near the end of each set. In a trial by Longo and colleagues, as reported by
Singer, fixed sets with 180-second rest gave 13.1%‡ growth against 6.8%‡ with 60 seconds (repetitions
across three sets 16.1‡ vs 9.8‡), and adding sets to equate volume load removed the difference
[@singer-2024-rest]. For strength, longer rest preserves the load and bar velocity of heavy sets,
protecting intensity (the dominant strength variable) and the quality of technical practice. The
inference is that rest matters mainly through how much high-quality work it allows; this is
consistent with rest not moderating the per-session volume curve [@remmert-2025-per-session-volume],
but it rests on one trial.

---

## 3.9 Minimum effective and maintenance doses

The bottom of every curve above is steep: small doses buy most of the early benefit, and smaller
doses can keep it.

### 3.9.1 How little is enough to gain?

For strength, Pelland's minimum effective dose is one set per week, with detectable increments ending
around four [@pelland-2026-volume-frequency]. Pooling the lowest-dose arms of five trials in trained
men, a single set of 6 to 12 repetitions at about 70% to 85% of 1RM to failure, two or three times a
week for 8 to 12 weeks, raised 1RM by 12.09 kg† (95% CI 8.16 to 16.03†): "suboptimal yet
significant" [@androulakis-korakakis-2020-minimum-dose] (promising). Among 14,690 commercial-gym
clients (mean age 48, 60% women) training once weekly with single sets to failure, strength rose about
30% to 50%† in year one and about 50% to 60%† above baseline by around six years, with a practical
plateau after one to two years [@steele-2023-minimal-dose-longitudinal] (promising). Minimal doses
keep working for years, but they also stop working. For hypertrophy, Pelland's minimum effective dose
is about four sets per week; a narrative review recommends at least four weekly sets per muscle at 6
to 15RM [@iversen-2021-time-efficient] (convention); and single-set and once-weekly prescriptions
beat no training in Currier's network [@currier-2023-nma]. The ACSM panel explicitly notes that
minimal doses produce substantial gains [@currier-2026-acsm-position-stand].

Advanced lifters are the exception, because "one set is enough" comes from largely novice samples
tested on unfamiliar lifts. Triangulating interviews, surveys and two small trials in powerlifters,
Androulakis-Korakakis and colleagues report a coach and athlete consensus of about three to six
working sets of one to five repetitions per lift per week at more than 80% of 1RM and RPE 7.5 to 9.5
as a minimum effective dose (convention) [@androulakis-korakakis-2021-powerlifters]. In their trials
(25 lifters, six weeks), daily maximal singles alone gained 11.4 kg on the powerlifting total, with
only a 6.3% probability of exceeding the meaningful change the athletes had specified, whereas adding
two back-off triples at about 80% gave a pooled gain of 19.6 kg (95% HDI 10.7 to 31.6) and a 77.1%
probability (speculative; tiny, unregistered trials). The minimum dose thus depends on how
"meaningful" is defined: statistical detectability, significance or the athlete's own threshold.

### 3.9.2 How little is enough to keep?

Maintenance is better studied than one might expect, but in the wrong population. A narrative review
concludes that younger people maintain strength and size for up to 32 weeks with one session per week
and one set per exercise, *provided relative load is kept*, while older adults may need about two
sessions and two to three sets to maintain size; intensity is "the key variable"
[@spiering-2021-maintenance]† (promising). In Bickel's trial, 70 young and older adults trained for 16
weeks, then stopped or continued on one-third or one-ninth of the dose for 32 weeks. In young adults
both reduced doses preserved the hypertrophy gained; older adults lost size on both; strength was
largely retained even with complete detraining [@bickel-2011-maintenance]† (promising). In 27 young
women after 12 weeks of concurrent upper-body ballistic and lower-body aerobic training, one session
a week kept bench press 1RM while one every two weeks let it fall 5.9 ± 4.9%; power fell about 10% in
both; triceps thickness fell slightly even with weekly training, keeping about 92% of the gain
against about 72% for fortnightly training [@mpampoulis-2025-reduced-frequency] (promising).

Verification corrected three overstatements. "Older adults need about twice the dose" applies to
muscle size, not strength, and is a narrative figure rather than a measured threshold (in Bickel's
trial even the one-third dose did not preserve older adults' fibre size). Power is not maintained at
these doses. And every participant was previously untrained and had trained for 12 to 16 weeks.
Mechanistically, neural and skill adaptations persist and a little heavy practice preserves them,
which is why load rather than volume must be kept, whereas muscle proteins turn over continuously and
size needs a recurring tension stimulus, more so in older muscle (speculative as mechanism). The
graded statement: in previously untrained young adults, strength and most of the muscle gained over a
few months can be held for up to about eight months on roughly one session per week and one set per
exercise if relative load is kept, though thickness may drift down slightly and power is not kept
(**promising** for young novices; **speculative** for trained athletes). For powerlifters,
Androulakis-Korakakis and colleagues conclude that 1RM can be maintained or slightly increased with
as little as one heavy single per lift per week [@androulakis-korakakis-2021-powerlifters]
(speculative). Trained people who simply kept their habitual volume did as well as those who raised
it [@barsuhn-2025-volume-increase] [@moreno-2025-volume-baseline], but that was maintenance of a
moderate volume, not a minimum dose.

---

## 3.10 Critical appraisal of the evidence base

The conclusions above are only as good as the studies beneath them, and this literature shares
weaknesses that a reader should weigh before acting on any number.

**Who was studied.** The populations are young, mostly male and often untrained: 79% men and 28 of
67 studies untrained in the volume meta-regressions [@pelland-2026-volume-frequency], 75% untrained in
the load network [@lopez-2021-load], and only 12% of groups female-only in Swinton's corpus
[@swinton-2024-dose-response]. Competitive strength athletes appear almost only in a handful of small
trials [@rantila-2026-high-volume] [@androulakis-korakakis-2021-powerlifters]. Training status
moderated the load-hypertrophy relationship where it could be tested [@lopez-2021-load], which is a
warning that curves may change shape with experience. Sex as a moderator of dose-response is
essentially untested (Chapter 11).

**How many, and for how long.** Trials typically enrol 10 to 20 people per group for 6 to 12 weeks.
The trained-population trials that carry most of this chapter's practical weight enrolled 16 to 42
people over 7 to 12 weeks, and one lost nearly half its sample [@barsuhn-2025-volume-increase]. Such
trials can detect large differences but not the small ones the meta-regressions predict at moderate
to high doses, so their nulls are uninformative about small effects. Short durations also favour
skill over muscle as the source of strength gains, and say nothing about the years over which trained
lifters actually progress; the one multi-year dataset is retrospective and uncontrolled
[@steele-2023-minimal-dose-longitudinal].

**Measurement of the outcome.** Hypertrophy is usually measured by ultrasound muscle thickness at one
or two sites. Different measures of the same muscle can disagree [@enes-2025-set-progression], edema
after hard sessions is poorly characterised at high volumes, and implausibly large effects in some
trials remain unexplained [@buckner-2023-volume-doubts]. Strength is usually a 1RM in the trained
exercise, often unfamiliar to participants, tested repeatedly and rarely after a taper. This inflates
learning effects, may narrow load contrasts, and masks strength in high-volume or near-failure groups
still carrying fatigue [@lopez-2021-load] [@pelland-2026-volume-frequency]
[@robinson-2024-proximity-failure]. Non-specific strength tests avoid the learning problem but are
too insensitive for available sample sizes [@hammert-2026-nonspecific-strength].

**Measurement of the dose.** Effort is mostly unmeasured. Robinson's RIR values were assigned by the
authors, only about 30% of Pelland's effects defined momentary failure clearly, and self-reported RIR
errs by about a repetition [@robinson-2024-proximity-failure] [@pelland-2026-volume-frequency]
[@halperin-2022-rir-accuracy]. Set-counting rules change the dose threefold (Section 3.2.1), and
volume load is rarely reported.

**Inference from meta-regression.** The dose-response curves come from between-study variation,
explain a minority of it (marginal R² about 12% to 29% across the Pelland and Robinson models), and
are confounded by whatever else differs between high- and low-dose studies. The choice of curve shape
is a model-selection exercise whose answer is least certain exactly where practitioners most want it,
at high doses. Umbrella reviews have their own limits: the ACSM overview reaches its judgements by
counting reviews that overlap in primary studies, using a bespoke quality score rather than formal
GRADE [@currier-2026-acsm-position-stand].

**Risk of bias and publication bias.** In Currier's network, 22% of strength studies were at high and
67% at moderate risk of bias [@currier-2023-nma]. In Lopez's network most studies raised some concerns,
strength testers were never blinded, and the funnel plot for strength was asymmetric (P = 0.014), a
possible sign of small-study or publication bias [@lopez-2021-load].

**Preprints, versions and secondary quotation.** Several important estimates are preprints
[@remmert-2025-per-session-volume] [@robinson-2025-volume-individual]
[@boutagy-2026-frequency-preprint] [@davidson-2025-rest-preprint]. One changed its pooled estimate
between versions, and one widely quoted interval exists in two incompatible secondary versions
[@schoenfeld-2019-frequency]. Many numbers in this chapter were read only in abstracts, as marked.

**Allegiance.** The field is small, and the main volume, effort and frequency analyses come from one
collaborating group of coach-researchers [@pelland-2026-volume-frequency]
[@robinson-2024-proximity-failure], while the main sceptical arguments come from another group with a
stated position [@buckner-2023-volume-doubts] [@hammert-2026-nonspecific-strength]. Neither fact
impugns the work, but readers should notice when a conclusion has been reached only by authors with a
prior commitment to it.

---

## 3.11 Open questions and promising directions

**The high-volume region.** Whether hypertrophy keeps rising, plateaus or turns down above about 25
to 30 sets per muscle per week is unresolved, and the most recent trained-athlete trials at very high
volumes are small and null. Adequately powered trials in trained lifters, with edema-controlled
measurement (repeated scans after several days of rest), are the single most useful next step.

**Advanced lifters over long horizons.** We need dose-response data in competitive athletes over
months to years, with tapered strength tests on practised lifts, to separate skill, fatigue and
muscle as sources of strength change. Replicated within-participant designs [@robinson-2025-volume-individual]
offer a way to get individual-level answers from small samples.

**The effort curve between 0 and 5 RIR.** No trial has mapped this range finely in trained lifters
with sets equated. Closely linked is the volume-effort trade-off: are more sets at 3 RIR equivalent
to fewer sets at 0 to 1 RIR? Velocity monitoring could measure proximity objectively.

**Frequency and per-session volume together.** No trial has manipulated both, and the per-session
PUOS is an observational preprint finding [@remmert-2025-per-session-volume].

**Rest in trained lifters.** There is no recent meta-analysis of rest for strength in trained
lifters, and no data for torso muscles, very heavy work or high weekly volumes.

**Maintenance in athletes.** Maintenance doses come from previously untrained people. In-season and
long-term maintenance trials in strength athletes, and studies of maintenance under energy deficit
and ageing, are absent.

**Counting rules and whole-body load.** Whether the 0.5 weight for indirect sets is near the truth,
and whether total-body volume limits muscle-specific dose-responses, could be tested by estimating
the weight rather than choosing it.

**Women.** Women made up about 21% of participants in the main volume analyses. Sex-specific
dose-response work is needed before sex-specific advice can be given (Chapter 11).

---

## 3.12 Practical implications for trained lifters

These implications translate the evidence into defaults for healthy trained adults. Each carries the
grade of the evidence behind it, and each is a starting point for the individual adjustment described
in Chapter 4, not a rule.

**Count hard sets per muscle, and count indirect work as half** (promising). Track weekly sets taken
to roughly 0 to 3 RIR, with synergist sets counted as half. This is the dose that best predicts
growth, and the counting rule matters as much as the number.

**For muscle size, more weekly sets help, with diminishing returns** (established for direction;
promising for shape). About 4 sets per muscle per week is a minimum effective dose; moving from low
volumes toward 10 to 20 sets reliably adds growth; beyond about 20, each detectable increment needs
roughly 10 or more extra sets, and above 25 to 30 the evidence is thin and trials in trained people
are null (contested). If extra volume costs recovery, sleep or joint comfort, the expected return is
small.

**Load can be chosen for convenience when training for size** (established in untrained samples;
promising in trained). Anything from about 30% of 1RM to heavy loads works if sets are taken close to
failure; very light loads (about 20%) do not. Moderate loads keep RIR judgements accurate and sessions
shorter.

**Take hypertrophy sets close to failure but not necessarily to it** (promising). Stopping at about 1
to 3 RIR has produced the same growth as failure in trained lifters while causing less fatigue and
discomfort. Sets ending far from failure (more than about 4 RIR) are probably less effective.
Occasional sets to failure to calibrate RIR estimates, which err by about a repetition, are a
sensible habit (convention).

**For maximal strength, lift heavy and practise often** (established for load; promising for
frequency). Most strength-oriented work should be at or above about 80% of 1RM in the lift to be
improved, spread over at least two sessions per week for that lift. A third session adds less.

**For maximal strength, a few hard sets of the lift go a long way, but advanced lifters need more
than novices** (promising for the shape; convention for the powerlifting figure). Detectable strength
gains from additional direct sets flatten after about four per week in mostly novice data. Coaches
and powerlifters converge on about three to six heavy working sets per lift per week as a minimum.
Extra volume is better justified by its hypertrophy and long-term value than by short-term 1RM.

**Do not grind strength sets to failure** (promising). Proximity to failure does not drive strength;
heaviness does. Leaving a repetition or two in reserve preserves bar speed, technique and recovery.

**Frequency for size is a scheduling choice** (established for "no large effect"). At equal weekly
volume, one to three sessions per muscle give similar growth; distribute sets so each session's work
stays high quality.

**Rest long enough to keep set quality** (speculative to promising for size; contested for
strength). About two minutes is a sensible default for hypertrophy work; resting less than about a
minute costs repetitions. For heavy compound strength work, rests of two to three minutes or more are
reasonable. If time is short, shorter rest plus an extra set to restore the lost repetitions looks
like an acceptable trade for hypertrophy work (speculative; one trial).

**Maintenance needs little, if load is kept** (promising for young novices; speculative for trained
athletes). During busy periods, about one session per week with one to a few heavy sets per lift or
muscle probably holds most strength and much muscle for a few months. Power and some thickness may
fade, and the data come from previously untrained people.

**Worked example: a time-limited block for an intermediate lifter.** A lifter with three hours per
week who wants to build size while keeping squat and bench strength might train three full-body
sessions. Each muscle receives about 10 to 14 fractional sets per week at 1 to 3 RIR with moderate
loads; squat and bench are practised in each session, each with two or three working sets above 80%
of 1RM; rest is about two minutes on accessories and three on the heavy lifts. Every element sits on
the steep part of its curve: the minimum effective doses are comfortably exceeded, and the expensive
flat parts (very high volume, failure training, a fourth weekly practice session) are avoided. The
example is illustrative, not tested as a whole.

---

## 3.13 Concluding summary

The dose-response literature supports a simple picture with a complicated pedigree. Muscle size is
built by accumulated hard sets. Returns diminish with volume but have not been shown to stop within
the range studied, and the high-volume region remains genuinely unresolved, both because data are
sparse and because the best trials in trained people are too small to see small effects. Load barely
matters for size above a floor of roughly 30% of 1RM, and effort matters up to a point, with the last
repetitions before failure buying fatigue more clearly than growth. Maximal strength is built by
heavy, specific and frequent practice. Its response to volume saturates early and its response to
proximity to failure is flat, at least in the short, mostly novice studies we have. Minimum effective
and maintenance doses are low enough to change how one should think about busy periods. Rest matters
mainly as a means of preserving set quality.

The deeper lesson is about evidence. Most disagreements in this field are not about data but about
counting rules, thresholds of meaningfulness, curve shapes and which population a result is allowed
to describe. A reader who asks of every number "counted how, compared with what, detected against
which threshold, in whom and for how long?" will be able to judge the next meta-regression as well as
the last.

---

## Key claims

| # | Claim | Grade | Sources |
|---|---|---|---|
| 1 | More weekly hard sets per muscle produce more hypertrophy | established | [@krieger-2010-sets-hypertrophy] [@schoenfeld-2017-volume] [@pelland-2026-volume-frequency] [@currier-2026-acsm-position-stand] |
| 2 | Hypertrophy returns diminish (square-root) without a clear plateau up to ~25 sets; shape unknown beyond | promising | [@pelland-2026-volume-frequency] |
| 3 | Raising volume above habitual moderate-to-high levels adds little or nothing in trained people | contested | [@moreno-2025-volume-baseline] [@barsuhn-2025-volume-increase] [@rantila-2026-high-volume] [@buckner-2023-volume-doubts] [@robinson-2025-volume-individual] |
| 4 | Counting indirect sets as half predicts outcomes best | promising | [@pelland-2026-volume-frequency] |
| 5 | Strength gains from volume flatten early (reciprocal; ~4 sets/wk detectable limit) | promising | [@pelland-2026-volume-frequency] [@ralston-2017-volume-strength] [@schoenfeld-2019-volume-trained] |
| 6 | Per-session PUOS ~11 fractional sets (size), ~2 direct sets (strength) | speculative | [@remmert-2025-per-session-volume] |
| 7 | Hypertrophy is similar across loads from ~30% 1RM to heavy when sets are near failure | established (untrained); promising (trained) | [@lopez-2021-load] [@morton-2016-load-trained] [@currier-2026-acsm-position-stand] |
| 8 | Very light loads (~20% 1RM) give less growth | promising | [@lasevicius-2018-intensity] |
| 9 | 1RM gains are load-dependent | established | [@lopez-2021-load] [@currier-2023-nma] [@swinton-2024-dose-response] |
| 10 | The heavy-load advantage is mostly, perhaps not wholly, task-specific | contested | [@hammert-2026-nonspecific-strength] [@mattocks-2017-practice-test] |
| 11 | Proximity to failure is largely irrelevant for strength | promising | [@robinson-2024-proximity-failure] [@grgic-2022-failure] [@jukic-2023-velocity-loss] |
| 12 | Hypertrophy rises as sets end closer to failure; 1-3 RIR matches failure in trained lifters | promising | [@robinson-2024-proximity-failure] [@refalo-2023-failure-hypertrophy] [@refalo-2024-failure-rir-trial] [@vasconcelos-2026-elbow-failure] |
| 13 | Fatigue and discomfort rise (linearly) toward failure | promising | [@refalo-2023-failure-fatigue] [@refalo-2025-failure-perception] |
| 14 | At equal volume, frequency has no large effect on hypertrophy | established | [@pelland-2026-volume-frequency] [@boutagy-2026-frequency-preprint] [@currier-2026-acsm-position-stand] |
| 15 | Higher frequency raises 1RM gains with volume adjusted, mainly up to 2x/wk | promising | [@pelland-2026-volume-frequency] [@grgic-2018-frequency-strength] [@tao-2026-frequency] |
| 16 | Rest >60 s may give a small hypertrophy advantage | speculative to promising | [@singer-2024-rest] [@mohan-2026-self-selected-rest] |
| 17 | Longer rest (>2 min) supports strength in trained lifters | contested | [@schoenfeld-2016-rest] [@grgic-2018-rest-strength] [@currier-2026-acsm-position-stand] |
| 18 | Minimum effective doses are low (~1 set/wk strength, ~4 sets/wk size) in mostly novice data | promising | [@pelland-2026-volume-frequency] [@androulakis-korakakis-2020-minimum-dose] [@steele-2023-minimal-dose-longitudinal] |
| 19 | Powerlifters need ~3-6 heavy sets per lift per week | convention | [@androulakis-korakakis-2021-powerlifters] |
| 20 | ~1 session/wk at maintained load holds strength and most size for months | promising (young novices); speculative (athletes) | [@spiering-2021-maintenance] [@bickel-2011-maintenance] [@mpampoulis-2025-reduced-frequency] |
