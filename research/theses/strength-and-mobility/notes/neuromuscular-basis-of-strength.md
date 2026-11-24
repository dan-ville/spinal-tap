# Research notes: the neuromuscular basis of strength (Chapter 2)

Researcher notes for `chapters/02-neuromuscular-basis-of-strength.md`. Population of interest: healthy,
trained adults (recreational to competitive strength athletes). Evidence searched to 24 November 2026
(Europe PMC, PubMed, web search; a dedicated 2025-2026 sweep on every question). Every source has a
record in `/evidence/sources/<id>.yml`; cite as `[@id]`.

**Read levels.** `FT` = number read in the full text; `AB` = abstract only; `SEC` = secondary
(title and companion papers only). Only `FT` numbers may be stated as verified. Twelve sources were
read in full text by this researcher: del-vecchio-2019, skarabot-2021-review, casolo-2026,
elgueta-cancino-2022, tanel-2025, altheyab-2026, marques-2025, maden-wilkinson-2020, balshaw-2022,
jenkins-2017, lopez-2021-load, saeterbakken-2025.

**Grades.** established | promising | contested | speculative | convention.

**One-paragraph summary for the writer.** Maximal strength is the force a person can express in a
specific task. It is set by how much contractile tissue is arranged to pull on the skeleton (muscle
volume, physiological cross-sectional area, architecture, moment arms, specific tension) and by how
fully and how well the nervous system drives that tissue and its synergists while restraining
antagonists and stabilising the body. In the first weeks of training, strength rises faster than
muscle size, and that excess is neural: motor units are recruited earlier and discharge faster,
intracortical inhibition falls, and the lifter learns the task. Over years, between-person
differences in strength are mostly differences in muscle size (about 60% of variance from MRI muscle
volume; trained men's 60% strength advantage matches their 56% larger quadriceps). Whether adding
muscle *causes* more strength in already-trained people is still argued: the "size and strength are
separate" camp (Loenneke, Buckner, Dankel) rests on short trials, single-joint lifts and ultrasound
thickness. That method a 2026 MRI study shows cannot track individual growth. The opposing camp
(Folland, Balshaw, Taber) rests on MRI cross-sectional and within-person data, mostly in untrained
men. Strength is strongly task-specific. Dynamic training improves the trained lift about twice as
much as an untrained isometric test (SMD 0.98 vs 0.42), and the specificity holds for load, mode
(machine vs free weight), limb configuration (unilateral vs bilateral), range, velocity and
contraction type. Transfer from accessory and hypertrophy work to a competition 1RM is therefore
partial, slow and mediated by size. That transfer has hardly been studied directly in trained
lifters.

---

## RQ1. Neural adaptations: what they are, how they are measured, how strong the evidence is

### 1.1 The behavioural case that neural adaptation exists (established)

- **Strength outpaces size early.** Classic EMG/force partitioning put most of the first 3-5 weeks'
  gain down to neural factors, with hypertrophy dominant thereafter [@moritani-1979] (AB; method
  indirect, grade **contested** for the partition, **established** for the phenomenon). Modern
  examples: 4 weeks of isometric training raises MVF about 14% with no meaningful muscle change
  [@del-vecchio-2019] (FT), and 6 weeks of 80% 1RM training raises 1RM 27.7% versus 9.5% at 30% 1RM
  despite *equal* muscle-thickness gains [@jenkins-2017] (FT).
- **Task specificity without hypertrophy.** Dynamic leg-extension training increased the weight
  lifted about 200% but isometric force only 15-20% [@rutherford-1986] (AB, **established**).
- **Cross-education.** Training one limb strengthens the other without contralateral hypertrophy
  (see 1.6) [@manca-2017; @hernando-garijo-2026].
- **Integrated reviews.** [@folland-2007] (AB) and [@skarabot-2021-review] (FT) agree that these
  behavioural signs are robust. Both also agree that the *site* of the adaptation is unresolved
  (**established** that neural adaptation occurs; **contested** where).

### 1.2 Measurement methods and what each can and cannot show

| Method | What it indexes | Main limitation | Key sources |
|---|---|---|---|
| Surface EMG amplitude (interference) | Gross neural drive | Cancellation; confounded by muscle size, fat, fibre membrane properties; normalisation choices change conclusions | [@skarabot-2021-emg] (AB); [@del-vecchio-2026] (AB) |
| Interpolated twitch / central activation ratio | Voluntary activation (VA) | Ceiling near 90-100% in healthy people; small changes | [@nuzzo-2017] (AB); [@jenkins-2017] (FT) |
| H-reflex, V-wave | Spinal reflex excitability; descending drive to motoneurons during MVC | Presynaptic inhibition, axonal excitability, polysynaptic contributions; task dependence | [@siddique-2020] (AB); [@skarabot-2021-review] (FT) |
| TMS (MEP, SICI, silent period) | Corticospinal excitability, intracortical inhibition | Cannot separate cortical from spinal sites alone; weakly linked to behaviour; test task rarely matches the training task | [@kidgell-2017]; [@siddique-2020] (AB) |
| Cervicomedullary / lumbar stimulation | Corticospinal-axon to motoneuron transmission | Few studies; usually at rest or low force | [@nuzzo-2017] (AB) |
| HD-sEMG / intramuscular decomposition | Individual motor unit recruitment thresholds, discharge rates, persistent inward currents (delta-F), conduction velocity | Mostly submaximal isometric single-joint tasks; tracking at MVC only from 2026; cannot identify the input source | [@del-vecchio-2019] (FT); [@skarabot-2021-review] (FT); [@lecce-2026-preprint] (AB) |
| StartReact / startle, ipsilateral MEPs | Indirect reticulospinal contribution | Corticospinal tract also contributes; direction of effects ambiguous | [@tanel-2025] (FT) |

Methodological points the writer should carry:

- **Surface EMG in trained people is confounded by muscle size.** Long-term trained men had
  +66-71% MVT, +54-56% muscle size and +29-60% larger maximal M-waves. Their higher absolute
  voluntary EMG vanished when normalised to Mmax (P >= 0.652) [@skarabot-2021-emg] (AB, **promising**).
  So the long-standing belief that trained lifters "activate more" partly reflects bigger muscle
  under the electrode.
- **Conversely, within a person over short interventions, absolute HD-EMG amplitude tracks
  motor-unit changes**: rrm = 0.56 with discharge rate and -0.55 with recruitment threshold.
  MVC-normalised EMG does not track them [@del-vecchio-2026] (AB, **promising**). The two findings
  are compatible: absolute EMG is usable within a person when muscle morphology and membrane
  properties do not change, and misleading between people of different muscle size.
- **Measured neuroplasticity and performance are often uncoupled** across activation, stimulation and
  imaging studies, so neural "adaptations" cannot yet be shown to *cause* the strength gain
  [@hortobagyi-2021] (AB, **promising** as a critique).

### 1.3 Motor unit recruitment and rate coding (promising for short-term; contested in pooled data)

- **Best direct evidence.** In 28 recreationally active men, 4 weeks of isometric dorsiflexion
  training increased MVF from 289 +/- 64 to 329 +/- 61 N (time x group P = 0.006, partial eta2 = 0.280).
  Tracked motor units discharged faster, +3.3 +/- 2.5 pps at the plateau (P = 0.0008, partial
  eta2 = 0.419). Relative recruitment threshold fell from 26 +/- 5 to 21 +/- 5 %MVF (P = 0.003). Motor
  neuron input-output gain was unchanged [@del-vecchio-2019] (FT). The authors themselves note
  that absolute threshold changes may sit within measurement error.
- **Replications and extensions.** A second cohort gave MVF +14%, discharge rate about +11% and
  recruitment threshold about -10% [@del-vecchio-2026] (AB). Older adults (13 trained vs 10 controls)
  gained MVF +17.6% with discharge rate +8.2-11.3%, but *no* change in recruitment threshold. Estimated
  persistent inward currents (delta-F) rose by 1.0 pps and tracked the discharge-rate rise, which in
  turn tracked force gains (rrm = 0.54-0.57) [@casolo-2026] (FT). Unilateral training: the trained and
  untrained arms both showed lower thresholds and higher net discharge rates [@lecce-2024] (AB).
- **New in 2026: motor units tracked during maximal contractions.** A 4-week unilateral elbow-flexor
  study gave the trained limb +16% and the untrained limb +8%. Higher discharge rates and faster
  conduction velocity in both limbs were strongly associated with force gains (R2 > 0.7). The largest
  discharge-rate increases were in high-threshold units [@lecce-2026-preprint] (AB, preprint,
  **speculative** until peer reviewed). This is the first direct look at rate coding at MVC, the
  condition that actually defines maximal strength.
- **Peripheral change in the same units.** Motor unit conduction velocity rose 3.0%, most in
  high-threshold units (slope +32.6%), after 4 weeks [@casolo-2020] (AB). This is a membrane
  adaptation that also inflates surface EMG.
- **Pooled evidence is weak.** The only meta-analysis (7 studies, 167 participants, searched to June
  2021) found no significant pooled change in discharge rate (P = 0.43, I2 = 91%). GRADE certainty was
  very low for discharge rate and recruitment threshold [@elgueta-cancino-2022] (FT). It predates
  most longitudinal tracking studies, and it mixed intramuscular and surface methods (**contested** at
  the pooled level).
- **Load and proximity-to-failure modulate the motor-unit response.** Untrained men: high-load
  training raised firing rates of lower-threshold units. Combined high+low-load training enlarged
  higher-threshold unit action potentials (hypertrophy) and lowered their firing rates, yet 1RM and
  MVC gains were similar despite mCSA +21% vs +4% [@olmos-2026] (AB). Trained lifters: training at
  0-1 vs 4-6 RIR gave equal 1RM gains but shifted the firing-rate/threshold relation toward higher
  low-threshold firing [@ruple-2023] (AB; n = 19, **speculative**).
- **Mechanism.** Force rises with recruitment of more and larger units and with discharge rate
  along the sigmoidal force-frequency relation; high-threshold units contribute the most force per
  unit. A higher discharge rate at the same relative force means more net excitatory or
  neuromodulatory input, and greater persistent inward currents amplify synaptic input
  monoaminergically from the brainstem. Lower recruitment thresholds bring large units in earlier.
  Where that extra input comes from (cortex, reticulospinal tract, serotonergic or noradrenergic
  drive, reduced inhibition, afferent feedback) cannot be decided from motor-unit data
  [@skarabot-2021-review] (FT).

### 1.4 Rate of force development and doublets (promising)

- Fourteen weeks of heavy training raised MVC (291 to 339 N.m) and RFD in 0-200 ms (for example
  1,601 to 2,020 N.m/s at 30 ms). Early-phase EMG rose 22-143% and rate of EMG rise rose 41-106%
  [@aagaard-2002] (AB). The neural interpretation rests on surface EMG.
- Chronically trained men show higher *initial* motor-unit discharge rates in rapid contractions:
  biceps 74 [68, 80] vs 56 [50, 63] pps; vastus lateralis 102 [90, 115] vs 76 [63, 90] pps. Yet
  relative RFD is no better [@skarabot-2024] (AB). Long-term maximum-strength-trained men have
  higher absolute explosive torque, but *lower* relative explosive torque (-11 to -16% at
  100-150 ms) and slower evoked contractile properties (octet time to peak +8%). Normalised explosive
  EMG did not differ (ES 0.03 at 0-50 ms) [@balshaw-2022] (FT). Interpretation: heavy-strength
  training makes the muscle bigger but slower-contracting relative to its maximum. Any extra
  early-phase neural drive offsets rather than exceeds this.

### 1.5 Corticospinal, intracortical and spinal changes (promising for reduced inhibition; contested for excitability)

- Meta-analysis of 19 studies (untrained): strength SMD 0.84 (0.55 to 1.13). SICI fell (SMD -1.00,
  -1.84 to -0.17) and the silent period shortened (SMD -0.66, -1.00 to -0.32). Corticospinal
  excitability rose only borderline (SMD 0.27, 0.00 to 0.54), and motor threshold did not change
  [@kidgell-2017] (AB).
- Meta-analysis of 30 RCTs (n = 623): MEPs rose during contraction (SMD 0.55, 0.27 to 0.84) but not at
  rest. The silent period fell (SMD 0.65, 0.29 to 1.01). Active SICI fell (SMD 0.68, 0.14 to 1.23).
  V-wave rose (SMD 0.62, 0.14 to 1.10). The H-reflex did not change, at rest or active (SMD 0.15,
  -0.18 to 0.48), and neither did TMS-assessed VA (MD 1.41, -4.37 to 7.20) [@siddique-2020] (AB; an
  earlier version was retracted and republished).
- **Direct test of the corticomotoneuronal pathway.** In 21 adults, isometric elbow-flexor training
  raised strength 12.8%, EMG 27.8% and VA 4.7 percentage points. Cervicomedullary MEPs were
  unchanged, so neither corticospinal transmission nor motoneuron excitability changed; the gain lies
  upstream or in other pathways [@nuzzo-2017] (AB, **promising**).
- **Interpretation.** The most reproducible central change is *reduced intracortical (GABAergic)
  inhibition*, seen mainly when tested during contraction. Reduced inhibition is also seen after
  aerobic exercise, so it may not be specific to strength training [@skarabot-2021-review] (FT).
  Measures taken during contraction reveal changes that resting measures miss, which fits task
  specificity. Acute single-bout responses are larger than chronic ones (Mason 2019 meta-analysis, corticospinal
  excitability SMD 1.26, abstract only and not recorded; see Gaps).

### 1.6 Cross-education (established)

- 31 RCTs (785 participants): contralateral strength rose +11.9% (95% CI 9.1 to 14.8). Upper limb
  gained 9.4% and lower limb 16.4%. By mode: eccentric 17.7%, isotonic-dynamic 15.9%, concentric
  11.3%, isometric 8.2%. Risk of bias was high [@manca-2017] (AB).
- Lower limb, 29 RCTs vs control: 1RM SMD 0.59 (0.22 to 0.97, very low certainty) and MVC SMD 0.55
  (0.16 to 0.94, low certainty). Only eccentric training raised contralateral isometric torque in
  subgroup analysis (SMD 0.37, 0.13 to 0.61) [@altheyab-2026] (FT).
- Upper limb, 31 RCTs (1,214 participants): MVIC SMD 0.42 (0.12 to 0.72) and 1RM SMD 0.36 (0.04 to
  0.69). **No contralateral hypertrophy** (MT SMD 0.14, -0.23 to 0.51). GRADE low to very low
  [@hernando-garijo-2026] (AB).
- Delphi consensus: high-intensity and eccentric contractions maximise transfer, and at least 13-18
  sessions are needed. Mechanisms are debated (bilateral access versus cross-activation)
  [@manca-2021] (AB, **convention** for the dosing advice).
- Motor-unit mechanism: the untrained arm gained +7-10% with lower recruitment thresholds and higher
  net discharge rates [@lecce-2024] (AB). In the 2026 preprint the untrained limb gained +8% with
  higher discharge rates at MVC [@lecce-2026-preprint] (AB). Only the 1RM-practice group, not the
  traditional-training group, increased untrained-arm 1RM (+1.5 kg) [@dankel-2020] (AB). That suggests
  the transfer is load- or skill-dependent.
- **Why it matters for the chapter.** Cross-education is the cleanest demonstration that strength
  can rise through the nervous system alone. The contralateral gain is about half the ipsilateral
  gain. Bilateral descending systems (the reticulospinal tract) and cortical cross-activation are the
  candidate mechanisms.

### 1.7 Reticulospinal tract (speculative in humans; promising in primates)

- **Primate evidence.** Two macaques trained a weighted pull up to about 6 kg for 8-9 weeks.
  Responses to M1 and reticulospinal-tract stimulation increased, and responses to direct
  corticospinal-tract stimulation did not. After 3 more months, spinal input-output gain was higher on
  the trained side for reticulospinal but not corticospinal inputs [@glover-2020] (AB). Single-unit
  recordings show reticular-formation cells increase firing monotonically with force (20 of 21
  force-correlated cells positive). Pyramidal-tract neurons were heterogeneous (22 positive, 21
  negative) [@glover-2022] (AB). Reading: the reticulospinal tract carries a gross, bilateral "how hard"
  signal well suited to maximal, multi-muscle efforts, while the corticospinal tract fine-tunes.
- **Human evidence 2025-2026, all indirect.**
  - In 15 long-term strength-trained vs 18 untrained adults, the untrained benefited *more* from a
    startle cue (reticulospinal gain P = 0.003). The trained had faster reactions to a quiet cue,
    larger high-intensity MEPs (P = 0.048) and shorter silent periods (P = 0.035). The authors read
    this as a cortico-reticulospinal system already primed. They also note that the StartReact
    effect has corticospinal contributions [@tanel-2025] (FT).
  - In 2 weeks of training in young and older adults, startle-cued reaction time and RFD improved,
    more so in older adults [@siddique-2026] (AB).
  - A single self-paced (not metronome-paced) session raised startle-cued early RFD by 60%
    [@akalu-2026] (AB).
  - Strength-trained men differ in muscle-specific startle responses in a standing curl
    [@inubashiri-2026] (AB).
- **Assessment.** It is plausible, and mechanistically attractive, that strength training up-regulates
  reticulospinal drive. It would explain bilateral transfer, whole-body coordination and the "gross
  effort" character of maximal lifts. But human evidence is indirect, cross-sectional or acute, and
  the direction of StartReact differences is interpretable either way. Grade: **speculative**.

### 1.8 Antagonist coactivation (promising, small)

- After 8 weeks of isometric knee-extension training, MVC rose 32.8% without any change in agonist
  maximal EMG. Hamstring coactivation fell about 20% *within the first week*, and the untrained leg
  showed -13% [@carolan-1992] (AB). Cross-sectional synthesis: trained people show lower antagonist
  co-contraction, depending on background [@santos-2023] (AB, **contested** because of EMG methods).
  In long-term trained men, hamstring EMG during explosive efforts was 32-38% lower in mid and late
  phases (P = 0.026 at 100-150 ms) [@balshaw-2022] (FT). Over 12 weeks, change in antagonist EMG did
  *not* predict individual strength gain (r = 0.298, P = 0.123) [@balshaw-2017] (AB). Net: a real but
  small contributor to *net* joint torque.

### 1.9 Motor unit synchronisation (contested)

- Trained men showed more synchronisation by one index (CIS) but not by two others [@fling-2009]
  (AB). Synchronisation does not increase maximal force in models and may matter more for rapid
  force (narrative in [@behm-1993], AB). Not a load-bearing mechanism for 1RM.

### 1.10 Intermuscular coordination and skill (established as a phenomenon; mechanism unmeasured)

- Neural adaptation is partly motor learning: the trainee learns to coordinate prime movers,
  synergists and stabilisers in the trained task [@carroll-2001; @rutherford-1986] (AB). The large
  gap between gains in the lifted load and in isometric force [@rutherford-1986], and the
  "practise the test" findings (RQ3), are its behavioural signature. It is rarely measured directly
  in multi-joint lifts.

---

## RQ2. Hypertrophy versus neural factors over the training career

### 2.1 Time course (promising)

- Whole-muscle CSA is detectable after about 3 weeks: quadriceps +3.5-5.2% at day 20, +6.5-7.4% at
  day 35, with fascicle length +9.9% and pennation +7.7%; MVC rose 38.9% [@seynnes-2007] (AB, n = 7).
  But early CSA increases coincide with oedema and damage markers: CSA was +2.7% at week 3 versus
  +10.4% at week 10, and echo intensity was raised at week 3 [@damas-2016] (AB). So "hypertrophy" in
  the first 3-4 weeks is partly swelling, which strengthens the case that early strength gains are
  mostly neural. Hypertrophy nonetheless begins early, and the old neural-then-muscular split
  [@moritani-1979] is a simplification [@folland-2007].
- **Reconsidering the "neural only early" model.** Pearcey and colleagues argue, from cross-sectional
  data, that neural plasticity continues with chronic training [@pearcey-2021] (AB,
  **speculative**). Against this, Loughborough MRI and HD-EMG work shows trained-untrained
  differences are mostly morphological [@maden-wilkinson-2020; @casolo-2021; @skarabot-2021-emg].
  The exception is higher discharge rates in rapid contractions [@skarabot-2024].

### 2.2 What explains between-person strength (established)

- Among 52 recreationally active men, MRI quadriceps volume explained about 60% of the variance in
  isometric strength (r = 0.773). Effective PCSA did *not* improve prediction (r = 0.685), and
  single-slice ACSA depended strongly on location (r = -0.04 to 0.72) [@balshaw-2021] (AB,
  **established** for the size-strength cross-sectional relation).
- Long-term trained men (4.0 +/- 0.8 y) vs untrained: MVT +60%, quadriceps volume +56%, PCSA +41%,
  fascicle length +11%, specific tension +9% and patellar-tendon moment arm +4%. In a stepwise model
  volume alone explained R2 = 0.81. The extra size came mainly from sarcomeres in parallel
  [@maden-wilkinson-2020] (FT, **promising**).
- Biceps of trained athletes: MViF +64.8%, ACSA +71.9%. Motor-unit recruitment and discharge at the
  same relative force were identical to untrained men. Trained muscle gave about 67% more absolute
  force per unit change in discharge rate [@casolo-2021] (AB). Mechanism: the same neural command
  drives more contractile tissue.

### 2.3 What explains within-person strength *gains* (contested)

- **12 weeks, untrained, isometric:** about 60% of the variance in individual MVT gains was explained,
  with agonist EMG change 30.6%, volume change 18.7% and baseline strength 10.6%. Neural drive was the
  biggest single predictor [@balshaw-2017] (AB).
- **15 weeks, untrained, the same lab, reanalysed within participants:** repeated-measures
  correlations of volume growth with gains were rrm = 0.92 (isometric) and 0.89 (1RM). EMG/Mmax gave
  rrm = 0.56-0.58. Mixed models gave standardised beta 0.88-0.94 for growth versus 0.13-0.17 for
  activation. The *between-participant* correlations in the same data were weaker: volume vs iMVT
  r = 0.60 and vs 1RM r = 0.35 [@marques-2025] (FT).
  - **Critical caveat (this researcher's analysis, not the authors').** With only two time points per
    person, a repeated-measures correlation reduces to the uncentred association of the change
    scores. When nearly everyone gains both size and strength, it is dominated by the shared mean
    increase. It does not show that those who grew more gained more strength; the between-person
    r = 0.35-0.60 answers that. The study therefore supports "muscle growth and strength gain go
    together", which nobody disputes, more than "growth explains individual differences in gains".
    Grade: **contested**.
- **Mediation in a large RCT (older untrained women, n = 175):** 10.6% of the 1RM gain was mediated
  by anterior-thigh growth (ACME 0.74 kg, 0.20 to 1.35); the lateral-thigh model was not significant
  [@kassiano-2026-mediation] (AB). Ultrasound-based, so the mediated share is likely underestimated
  (see 4.3).
- **Training-age ceiling.** Over 21 weeks, strength athletes gained +3.9% force and -1.8% CSA, versus
  +20.9% and +5.6% in non-athletes [@ahtiainen-2003] (AB). Over two years, elite weightlifters
  improved their total 2.8% with non-significant ~4-6% changes in IEMG, force and fibre area
  [@hakkinen-1988] (AB, n = 9). In professional rugby players, two-year 1RM gains of 6.5-11.5% were
  smaller in the stronger players (r = -0.57 to -0.71). Lower-body gains tracked change in lean mass
  index (r = 0.69-0.88) [@appleby-2012] (AB). Individual gains in size and 1RM are reproducible across
  repeated training periods (r = 0.67-0.76) [@rantila-2025] (AB), so responsiveness is biological.
- **Synthesis for RQ2.**
  1. Early (weeks): neural and skill factors dominate the *excess* of strength over size
     (**established**).
  2. Medium term (months): both contribute. Individual-differences models give roughly comparable
     shares to activation and size in untrained people (**promising**).
  3. Long term (years): cross-sectional data say accumulated muscle accounts for most of the strength
     difference between trained and untrained people, with only small differences in specific
     tension, moment arm and normalised activation (**promising**).
  4. In advanced lifters gains are small, and when they come they track lean mass (**promising**,
     observational).
  The intuitive model that neural factors are exhausted early and size then carries all further gain
  is broadly supported for *between-person* strength. Two things are not settled by data: whether
  continuing neural or skill gains in the specific lift matter in advanced lifters, and how much
  each kilogram of new muscle adds to a trained lifter's 1RM.

### 2.4 Morphological determinants other than size

- **Architecture.** Pennation and fascicle length change early [@seynnes-2007]. In long-term trained
  men, extra size is mainly parallel (PCSA +41%) rather than series (fascicle length +11%)
  [@maden-wilkinson-2020] (FT). Adding architecture did not improve the size-strength relation
  [@balshaw-2021].
- **Specific tension.** After 9 weeks it rose about 20% (MVC +31%, PCSA +6%) [@erskine-2010] (AB). It
  was +17% in vivo with no change in single-fibre specific tension. The fall in MyHC IIX did not
  explain it, and the authors favour enhanced lateral force transmission [@erskine-2011] (AB,
  **speculative** mechanism). Yet after about 4 years trained men differ by only +8-9%
  [@maden-wilkinson-2020] (FT). Interpretation: an early rise in apparent specific tension partly
  reflects residual activation and measurement artefacts, and it does not accumulate (**promising**).
- **Fibre type.** Resistance training shifts IIx toward IIa and hybrid fibres. Slow-to-fast shifts
  are inconsistent and method-dependent [@plotkin-2021] (AB). In trained lifters, 9 weeks of high-
  or low-load training changed neither fibre CSA nor fibre type [@cumming-2025] (AB). A larger type
  II area contributes to force mainly through size. Single-fibre specific tension is similar across
  types in humans (from [@erskine-2011]).
- **Quality of hypertrophy.** In trained men, 6 weeks of very high volume increased fibre CSA 23%
  while actin and myosin concentrations fell about 30% (borderline statistics). This suggests
  sarcoplasmic expansion that would add little force [@haun-2019] (AB, **contested**). Some growth is
  non-contractile, so hypertrophy does not translate 1:1 into force [@reggiani-2020] (AB).

---

## RQ3. Specificity of strength and what transfers

### 3.1 Test or task specificity (established)

- **Dynamic vs isometric.** In 43 studies (1,660 participants, 72 interventions), dynamic training
  improved dynamic strength SMD 0.98 (0.91 to 1.06; I2 = 67%) but untrained isometric strength only
  0.42 (0.35 to 0.49; I2 = 4%). The gap held in resistance-trained participants (dynamic SMD 0.75,
  isometric 0.29). Neither hypertrophy nor muscle-activity change predicted either outcome in
  meta-regression (P >= 0.222) [@saeterbakken-2025] (FT, **established** for the specificity gap;
  the null meta-regression is **contested** because study-level regression is a weak test of
  mechanism).
- **Machine vs free weight.** Free-weight training won on free-weight tests (ES 0.655, 0.269 to
  1.041). Machine training won on machine tests (ES -0.784, -1.223 to -0.344). There was no
  difference on neutral tests (ES 0.128) or in hypertrophy [@heidel-2022] (AB, **established**).
- **Unilateral vs bilateral.** Hypertrophy was equal (ES -0.21, -3.56 to 3.13). Bilateral training was
  better for bilateral strength (ES 0.56, 0.16 to 0.96) and unilateral training for unilateral
  strength (ES -0.65, -0.93 to -0.37) [@kassiano-2025-unilateral] (AB, **promising**).
- **Load specificity.** Hypertrophy was load-independent with sets to failure. Strength gains were
  greater with high and moderate than with low loads: high vs low SMD 0.60-0.63, moderate vs low
  0.34-0.35, high vs moderate 0.26-0.28 (P = 0.068) [@lopez-2021-load] (FT, **established**; RoB 2
  showed "some concerns" in most studies).
  - But when strength is tested on an *unpractised* isometric or isokinetic task, the high-load
    advantage shrinks to d = 0.32 (95% CI -0.08 to 0.72; prediction interval -0.45 to 1.1)
    [@hammert-2026-nonspecific-strength] (AB, **contested**). So much of the high-load advantage on
    1RM is practice with heavy loads, not a better muscle. The neural mechanism is that only heavy
    training raised VA and maximal EMG [@jenkins-2017] (FT).
  - In trained lifters, low (20-25RM) and high (3-5RM) loads gave equal multi-joint 1RM gains (+21%)
    and equal growth, but only heavy training raised single-joint 1RM (+9% vs -3%) [@cumming-2025]
    (AB, n = 14; the multi-joint result is surprising and may reflect cross-limb transfer in the
    within-subject design).
- **Range of motion.** Full-ROM training beat partial ROM for strength (ES 0.56) and lower-limb
  hypertrophy (ES 0.88) [@pallares-2021] (AB). Strength tests were usually at full ROM. Joint-angle
  specificity of isometric training is greater at short muscle lengths, and long-length isometrics
  transfer better to dynamic performance [@oranchuk-2019] (AB, **promising**).
- **Velocity and intent.** Gains are greatest near the training velocity. Intent to move fast may
  drive velocity-specific adaptation [@behm-1993] (AB, **promising**; old evidence).
- **Contraction type.** Eccentric training gives more mode- and velocity-specific gains
  [@roig-2009] (AB, **promising**).

### 3.2 The skill component of 1RM (promising in untrained; plausible in trained)

- In untrained adults over 8 weeks, doing only 1RM attempts matched 4 sets to failure for 1RM: upper
  body -1.1 kg (90% CI -4.8 to 2.4), lower body 1.0 kg (-0.7 to 2.8). Isometric and isokinetic
  changes were also similar, despite less growth [@mattocks-2017-practice-test] (AB). In 151
  untrained adults over 6 weeks, both arms of the comparison gained 1RM equally (~2.4 kg). True
  individual variability was present in 1RM gains but not in hypertrophy [@dankel-2020] (AB).
- Trained participants (n = 25, biceps curl, 8 weeks): 1RM practice equalled traditional training for
  1RM while traditional training grew more (MT +0.14-0.17 cm). A prior hypertrophy phase did not
  clearly raise 1RM after a 4-week strength phase; Bayesian evidence was inconclusive, with a
  0.72 kg difference [@buckner-2021] (AB, **contested** for the "growth does not raise potential"
  inference).
- Frequency affects strength (volume-adjusted) but not hypertrophy. Strength shows sharper
  diminishing returns to volume [@pelland-2026-volume-frequency] (AB). Both findings fit a practice
  component: exposures to the task matter beyond total work.
- Higher volume raised hypertrophy but not squat or bench 1RM in trained men over 8 weeks
  [@schoenfeld-2019-volume-trained] (AB). This is often cited for "size does not equal strength", but
  8 weeks is too short for size-driven gains in the trained lift to show.
- **Mechanism.** Maximal lifts are coordination tasks. Bracing, sequencing of hip and knee
  extensors, bar path, stabiliser activation and inhibition of antagonists all have to be learned
  at maximal intensity. Tested strength therefore contains a task-specific learned component that
  practice improves without any change in muscle.

### 3.3 Transfer from accessories and hypertrophy work to 1RM (speculative to promising; under-studied)

- Direct evidence in trained lifters is scarce. A practitioner review describes a 10 kg back-squat
  1RM gain from rear-foot-elevated split-squat training alone in untrained people over 5 weeks, and
  notes the trained lift still improved most. That review was not retrieved or recorded; a web-search
  summary only, so it is not cited. The writer should treat transfer as real but partial.
- Mechanistic reasoning: accessory and hypertrophy work transfers through added cross-sectional area
  of the prime movers. Saeterbakken's untrained-test SMDs give a rough estimate of how much
  non-specific strength comes from general muscular adaptation versus task learning. Accessory
  strength itself does not transfer: the neural and coordination component of the accessory stays
  with the accessory [@saeterbakken-2025; @heidel-2022]. Grade: **promising** for the principle;
  **convention** for any programming ratio of main to accessory work.

---

## RQ4. Does adding muscle cause additional strength in trained lifters?

### 4.1 The "separate phenomena" position (Buckner, Loenneke, Dankel, Mattocks)

- The claims: changes in size correlate weakly with changes in strength; strength is maintained while
  size is lost during detraining; and low- and high-load training grow muscle equally but give
  divergent strength [@buckner-2016] (AB). The same group says there is "no experimental evidence"
  that exercise-induced hypertrophy is a mechanism for strength gain [@loenneke-2019-mehy] (AB).
  The point argument appears in the Sports Medicine debate [@loenneke-2019-sportsmed] (SEC).
- Supporting experiments: [@mattocks-2017-practice-test], [@dankel-2020], [@buckner-2021],
  [@hammert-2026-nonspecific-strength], and [@olmos-2026] (independent lab: H+L grew 5x more with
  equal strength).
- **Their best point.** Most "size causes strength" evidence is correlational and confounded by
  specificity. Programmes that grow more muscle usually also differ in load and task practice.

### 4.2 The "contributory cause" position (Taber, Vigotsky, Nuckols, Haun; Folland, Balshaw)

- Myofibrillar hypertrophy is argued to be a contributory cause; non-contractile (sarcoplasmic)
  growth weakens whole-muscle correlations [@taber-2019] (SEC; [@haun-2019]).
- The variance explained ranged from 0 to 24% depending on the size measure and statistical model;
  between-subject correlations underestimate within-person relations [@vigotsky-2018] (AB).
- MRI evidence: cross-sectional R2 = 0.81 for volume in trained vs untrained men
  [@maden-wilkinson-2020] (FT). In within-person data, volume growth carries most of the predictive
  weight [@marques-2025] (FT, with the caveat in 2.3) [@folland-2021] (SEC). The same neural input
  yields more force in bigger trained muscle [@casolo-2021] (AB).
- Causal mediation found about 11% of the 1RM gain mediated by growth in older women
  [@kassiano-2026-mediation] (AB).

### 4.3 Adjudication (contested; leaning toward a real but delayed and diluted contribution)

1. **Measurement.** Most negative trials used single-site ultrasound muscle thickness. In 39 men over
   15 weeks, ultrasound thickness change underestimated MRI growth by more than half on average, and
   it was *uncorrelated* with MRI growth at the individual level (r = -0.15 to -0.02 for the whole
   quadriceps) [@balshaw-2026] (AB, **promising**). With a predictor that noisy, any study using
   ultrasound to correlate growth with strength gain is biased toward the null. This is the most
   important new fact in the debate.
2. **Time scale.** Hypertrophy effects on a specific 1RM need time and practice to be expressed. 8-week
   trials of trained people [@schoenfeld-2019-volume-trained; @buckner-2021] are too short to see
   them. Cross-sectional, career-scale data favour size [@maden-wilkinson-2020; @balshaw-2021].
3. **Specificity confound.** Low-load or 1RM-only comparisons pit size against practice. When test
   specificity is removed, differences shrink (Hammert, Saeterbakken). That cuts both ways: high-load
   "strength" advantages are partly practice, and hypertrophy shows best on non-specific tests.
4. **What remains unknown.** No trial has randomised trained lifters to added hypertrophy versus a
   matched control while holding specific practice constant, run it over 6-12+ months, and measured
   MRI volume with a competition-lift 1RM. Mediation analyses in trained populations are absent.

**Defensible statement for the chapter.** In trained lifters, muscle size is the main
*between-person* determinant of strength. Added muscle very probably raises the ceiling for the
specific 1RM, but the gain appears only once the new tissue is trained in the specific task. Its
size per unit of hypertrophy is unquantified and smaller than 1:1, because of non-contractile growth,
architecture and moment-arm limits, and the fixed neural and skill component. Grade:
**contested** (direction promising; magnitude speculative).

---

## RQ5. What 2020-2026 adds

1. **Longitudinally tracked motor units (HD-sEMG).** Short-term training raises discharge rate and
   lowers recruitment threshold [@del-vecchio-2019; @del-vecchio-2026]. Delta-F rises in older adults
   [@casolo-2026]. Cross-education goes through the same motor-unit changes [@lecce-2024]. In 2026,
   the first tracking during MVCs found that rate coding of high-threshold units carries the force
   gain [@lecce-2026-preprint]. Pooled meta-analysis remains very low certainty
   [@elgueta-cancino-2022].
2. **The size confound in EMG.** Normalising EMG to Mmax removes apparent trained-untrained activation
   differences [@skarabot-2021-emg]. Trained athletes' motor units behave like untrained ones at
   submaximal forces [@casolo-2021]. The exception is higher discharge rates in rapid efforts
   [@skarabot-2024].
3. **Reticulospinal tract.** Primate training evidence [@glover-2020; @glover-2022] spawned human
   StartReact studies [@tanel-2025; @siddique-2026; @akalu-2026; @inubashiri-2026]. All are indirect.
4. **Size-strength debate, statistics and imaging.** Within-person analyses [@marques-2025] and
   mediation [@kassiano-2026-mediation]. MRI shows ultrasound thickness is a poor index of growth
   [@balshaw-2026]. Reproducibility of individual responses [@rantila-2025].
5. **Specificity meta-analyses.** Dynamic vs isometric [@saeterbakken-2025]; non-specific strength
   under high vs low load [@hammert-2026-nonspecific-strength]; unilateral vs bilateral
   [@kassiano-2025-unilateral]; dose-response showing strength and hypertrophy curves differ
   [@pelland-2026-volume-frequency].
6. **Cross-education meta-analyses with GRADE** [@altheyab-2026; @hernando-garijo-2026]: the effect is
   consistent and certainty is low.

---

## Disagreements and their reasons (summary table)

| Dispute | Side A | Side B | Why they disagree |
|---|---|---|---|
| Does hypertrophy cause strength gain? | No or unproven [@buckner-2016; @loenneke-2019-mehy; @buckner-2021] | Yes, contributory [@taber-2019; @folland-2021; @marques-2025] | Size measure (ultrasound vs MRI), time scale, task specificity, statistics (between vs within person) |
| Are neural adaptations only early? | Classic yes [@moritani-1979; @folland-2007] | Continue chronically [@pearcey-2021; @skarabot-2024] | Cross-sectional selection; EMG size confound [@skarabot-2021-emg] |
| Do motor-unit discharge rates rise with training? | Yes [@del-vecchio-2019; @casolo-2026] | Pooled null, very low certainty [@elgueta-cancino-2022] | Method heterogeneity; pre-2021 search; submaximal tasks |
| Site of neural adaptation | Cortical, reduced inhibition [@kidgell-2017] | Reticulospinal or subcortical [@glover-2020; @tanel-2025] | Indirect human methods; task mismatch in testing [@skarabot-2021-review] |
| Is heavy load needed for strength? | Yes for 1RM [@lopez-2021-load; @jenkins-2017] | Advantage mainly on the practised test [@hammert-2026-nonspecific-strength; @cumming-2025] | Test specificity |

---

## Gaps

1. **No long-term (6-12+ months) RCT in trained lifters** that manipulates hypertrophy while holding
   specific practice constant and measures MRI volume plus competition-lift 1RM. This is the
   decisive test of RQ4.
2. **Motor-unit data in multi-joint, dynamic, maximal lifts are absent.** Nearly all decomposition
   work is isometric, single-joint and submaximal (tibialis anterior, biceps, vastus lateralis). MVC
   tracking exists only as a 2026 preprint [@lecce-2026-preprint].
3. **Reticulospinal involvement in humans is unproven.** No direct method exists. StartReact is
   ambiguous, and there is no longitudinal study in trained lifters.
4. **Neural adaptations in advanced lifters are measured only cross-sectionally**, so selection and
   genetics are confounded with training.
5. **Accessory-to-1RM transfer in trained lifters** has essentially no controlled data. Reviews are
   practitioner-level (practice is **convention**).
6. **Individual-response mechanisms.** Responses are reproducible [@rantila-2025], but what makes a
   high strength responder (neural vs morphological) is unknown in trained people.
7. **Women and older trained lifters** are under-represented. Most mechanistic samples are young men.
8. **Two-time-point within-person statistics** [@marques-2025] need replication with several time
   points or proper mediation designs.
9. **Not recorded here, possibly worth a record.** Mason 2019 meta-analysis of acute corticospinal
   responses (PMID 30864400; corticospinal excitability SMD 1.26, AB). Häkkinen 1998 coactivation.
   Aagaard 2001 architecture. A Strength & Conditioning Journal 2022 review "Transfer between lifts"
   (not retrieved).
10. **Access limits.** The frontiersin.org and strongerbyscience.com hosts were blocked by the session
    network. Several key papers (Aagaard 2002, the 2019 Sports Medicine debate pieces, Folland and
    Balshaw 2021) were read only at abstract or secondary level.
