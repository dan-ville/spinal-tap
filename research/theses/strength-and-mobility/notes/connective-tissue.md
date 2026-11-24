# Chapter 8 research notes: Connective tissue (tendon, ligament, bone, cartilage and disc)

Researcher notes behind `chapters/08-connective-tissue.md`. Searched 2026-11-24 (PubMed E-utilities,
PubMed Central full text via E-utilities, web search; Europe PMC returned HTTP 500 throughout the
session, and PMC HTML pages and some publisher pages were blocked, so a few key papers stay
abstract-level). A dedicated 2025-2026 sweep was run for each question. Every source has a record in
`evidence/sources/<id>.yml` (72 new records for this chapter plus an extended
`lauersen-2014-injury-prevention`).

**How to read the tags.** Each finding carries `[@id]`, a grade (established | promising | contested
| speculative | convention) and the read level of the number: **FT** = full text read, **ABS** =
abstract only, **SEC** = number taken from another paper. Only FT numbers may be stated as verified.

**Full texts read (15):** Bohm 2015 MA, Lazarczuk 2022 MA, Pang 2026 MA, Tsai 2024 RCT, Heinemeier
2013 (14C), Weidlich 2023, Lee 2025 and Nulty 2025 middle-aged (collagen RCTs, results and funding),
Bischof 2024 MA, Clifford 2020 MA, Grzelak 2012, Warden 2021, Belavy 2017, Samanna 2026 disc MA,
Gabbett 2016. (Fu 2026, Challoumas 2023, Buchalski 2026, Weidlich 2024, Mersmann 2023, Lee 2024 and
Aussieker 2023 were retrieved in full but only their abstracts were used for numbers, so they are
tagged ABS; funding statements for Lee 2024 were checked in the full text.)

**Not retrievable as full text this session (abstract only):** Shaw 2017 (AJCN; the gelatin study the
whole "collagen before loading" practice rests on), Paxton 2012 (engineered ligament refractory
period), Magnusson & Kjaer 2019 review, Eckstein 2006, Rio 2015, Holden 2020, LIFTMOR (Watson 2018),
ASTEROID primary paper and its 2026 disc secondary analysis.

**Population caveat that runs through the chapter.** In vivo tendon training studies use small groups
(6-15), mostly untrained or recreational young men, for 8-16 weeks. Lazarczuk 2022: 615 of 763
participants male, all but one study n<=15, only one study longer than 14 weeks, and the three studies
of well-trained athletes found **no change** in patellar tendon stiffness even after high-intensity
training [@lazarczuk-2022-tendon-meta] (FT). Bone, cartilage and disc evidence in trained adults is
almost entirely cross-sectional. The thesis targets trained adults, so most transfers upward in
training age are inferences.

**Where the numbers come from.** Tendon "SMDs" in the big meta-analyses are pre-post within-group
effects, not control-adjusted treatment effects. Tendon stiffness, modulus and strain are derived from
ultrasound elongation plus estimated tendon force (moment arm, antagonist co-activation, ramp
contractions). Shear-wave elastography "stiffness" (used in some collagen trials) is a different
quantity. Blood PINP is a marker of whole-body type I collagen synthesis, dominated by bone, not a
tendon measure.

---

## RQ1. Which loading parameters drive tendon adaptation, and on what time course?

### Findings

**What adapts: material first, size little.**
- Chronic loading raises tendon stiffness and Young's modulus with only small CSA gains: stiffness SMD
  0.70 (95% CI 0.51 to 0.88), modulus 0.69 (0.36 to 1.03), CSA 0.24 (0.07 to 0.42); 27 studies, 37
  interventions, 264 participants [@bohm-2015-tendon-meta] (established, FT). The 2022 update (61
  studies, 763 participants) agrees: stiffness 0.74 (0.62 to 0.86), modulus 0.82 (0.58 to 1.07), CSA
  0.22 (0.12 to 0.33), and meta-regression identified modulus, not CSA, as the main moderator of
  stiffness change [@lazarczuk-2022-tendon-meta] (established, FT).
- Resistance training is the only training type that clearly increases stiffness, modulus and CSA
  (stiffness SMD 0.80, 0.67 to 0.94); jump training gives smaller stiffness gains (0.49, 0.22 to 0.77)
  and concurrent training none (0.03, -1.03 to 1.10; 2 groups) [@lazarczuk-2022-tendon-meta]
  (established, FT). A 2026 network meta-analysis of 31 RCTs (1388 participants) ranked long-term
  isometric plantar-flexion training highest for Achilles stiffness (SUCRA 89.3%) and short-term
  plyometrics highest for Achilles CSA (SMD 1.33 vs control; SUCRA 95.6%); stretching ranked low;
  networks sparse [@fu-2026-achilles-nma] (promising, ABS).

**Strain magnitude is the key dose variable; %1RM is a poor proxy for it.**
- High intensity (>70% MVC/RM) gave stiffness SMD 0.90 (0.71 to 1.08; I2 0%) vs 0.04 (-0.46 to
  0.53) at lower intensity (5 interventions), p<0.00001 [@bohm-2015-tendon-meta] (promising, FT).
- Within-person trial: only the leg trained at ~4.6% Achilles strain gained stiffness, modulus and
  regional CSA; the leg at ~2.9% strain (same frequency and volume) did not, suggesting a strain
  threshold [@arampatzis-2007-strain-magnitude] (promising, ABS).
- Lazarczuk's pooled contrast: high-strain (~5%) protocols stiffness SMD 1.04 (0.65 to 1.43) and
  modulus 0.82 (0.44 to 1.20), low-strain (~3%) protocols no significant change; p=0.006 and 0.009,
  but only 3 high-strain groups [@lazarczuk-2022-tendon-meta] (promising, FT).
- **Disagreement.** Lazarczuk found **no** clear difference between >=70% and <70% 1RM/MVC protocols
  (stiffness SMD 0.86 vs 0.74), contradicting Bohm 2015. Their explanation, which I find convincing:
  relative load does not index tendon strain; exercise, range of motion, joint angle and velocity
  differ between studies [@lazarczuk-2022-tendon-meta] (contested, FT). Direct evidence: in 13
  strength-trained athletes, patellar tendon strain in back squats rose from 4.7% at 40% 1RM to 8.2%
  at 80% 1RM, so moderate squats already reach the 4.5-6.5% "adaptive" band, but individual
  variability was too large to prescribe by %1RM; strain was well predicted from maximal isometric
  strain plus %1RM (R2 = 0.858) [@weidlich-2023-squat-tendon-strain] (promising, FT).
- **Contraction type does not matter at matched high intensity**: isometric SMD 0.95, concentric-
  eccentric 0.82, eccentric 1.04, p>0.5 [@bohm-2015-tendon-meta] (promising, FT); same in matched
  comparisons in Lazarczuk; eccentric's apparent CSA effect vanished in matched analysis
  [@lazarczuk-2022-tendon-meta] (promising, FT).

**Strain duration and rate.**
- With strain magnitude (~6.5%) and volume matched, 3-s contractions (0.17 Hz, 3 s on/3 s off)
  raised stiffness +57% and modulus +51%; 12-s contractions +25% and +17%; high-rate hopping only
  trends (stiffness P=0.08) [@bohm-2014-strain-rate-duration] (promising, ABS). Interpretation: an
  intermediate strain duration repeated cyclically beats both long holds and brief high-rate strains;
  plyometric outcomes in the meta-analyses are inconsistent (+28% to -9% across five plyometric
  interventions) [@bohm-2015-tendon-meta] (FT).

**Volume and frequency: a low dose is enough.**
- The only human trial that systematically varied loading frequency and volume at high strain (90%
  MVC isometric, ~4.5-6.5% strain, 16 weeks; 4 x 3 s per set): 2.5 vs 5 sessions per week (48-96 h vs
  24-48 h between sessions) and 180 vs 300 s per week of high-strain loading made no systematic
  difference. Low-volume protocols were at least as good; pooled low-volume vs high-volume favoured low
  volume (p=0.04). Normalised stiffness d (95% CI): 5x/wk low volume 1.31 (0.73 to 1.89), 2.5x/wk low
  volume 0.85 (0.33 to 1.38), reference 4x/wk 0.90 (0.34 to 1.45), high-volume arms 0.49 to 0.61,
  control -0.12 [@tsai-2024-tendon-loading-frequency] (promising, FT). Reference protocol: +34%
  normalised stiffness, matching the group's earlier 36-54%.
- Lazarczuk found low- and high-volume resistance training gave similar stiffness gains (SMD 0.81 vs
  0.85) [@lazarczuk-2022-tendon-meta] (promising, FT).
- A practical "minimum effective dose" from this group: ~4-5 sets x 4 reps x 3 s at ~90% MVC
  (~180 s/wk at high strain), 2.5-4 sessions/week (promising for untrained/recreational men; untested in
  strength athletes).

**Time course of the acute response (single bout).**
- Tendon collagen synthesis rises by 6 h, peaks at ~24 h (0.077%/h) and is still elevated at 72 h
  after one bout of kicking exercise, a time course parallel to myofibrillar synthesis
  [@miller-2005-tendon-collagen-synthesis] (established, ABS).
- Collagen degradation also rises after loading but peaks earlier, implying an early net-catabolic
  window followed by net synthesis (often drawn as roughly the first 36 h; the abstract gives no
  number) [@magnusson-2010-tendinopathy-loading]
  (promising, ABS); supported by peritendinous microdialysis in runners: PICP fell immediately after a
  36-km run, then rose threefold by 72 h (55 to 165 ug/L) [@langberg-1999-peritendinous-collagen]
  (promising, ABS). The exact net-balance curve has never been measured in tendon proper.
- Women's resting and post-exercise tendon collagen synthesis was about half of men's (rest 0.025 vs
  0.045%/h; 72 h 0.027 vs 0.058%/h), with no menstrual-phase effect and no sustained post-exercise
  rise [@miller-2007-tendon-collagen-women] (promising, ABS). (Sex differences belong mainly to
  chapter 11.)

**Time course of chronic adaptation and turnover.**
- **The core collagen of the adult Achilles tendon is essentially never replaced.** Its 14C content
  reflects the atmosphere during roughly the first 17 years of life; muscle reflects the last ~2 years
  [@heinemeier-2013-tendon-14c] (established, FT). The authors reconcile this with tracer studies
  suggesting ~1%/day synthesis (half-life ~2 months) by (a) newly made protein that is degraded before
  incorporation into fibrils and (b) probably higher turnover in the periphery than the core
  [@heinemeier-2013-tendon-14c] (promising, FT). Tendinopathic tendons, by contrast, show years of
  abnormally high turnover before symptoms [@heinemeier-2018-tendinopathy-14c] (promising, ABS).
- In vivo deuterium labelling over 14 days (older adults before knee replacement): patellar tendon
  protein FSR 0.20%/d vs muscle 1.17%/d (about six times slower) [@houtvast-2026-tissue-protein-synthesis] (promising, ABS). Not a trained population.
- Mechanical change is fast relative to turnover: stiffness rises within 4-8 weeks and most of the
  16-week gain occurs in the first 8 weeks, mostly material rather than size
  [@tsai-2024-tendon-loading-frequency] (promising, FT); Lazarczuk reports stiffness changes notable
  between 4 and 8 weeks [@lazarczuk-2022-tendon-meta] (FT); 9 weeks of knee extension gave patellar
  tendon stiffness +24% and modulus +20% [@seynnes-2009-patellar-tendon] (promising, ABS).
- **Counter-evidence on timing**: with monthly measures, strength (+29.6% at 2 months) and neural
  drive rose first; tendon stiffness and muscle CSA became significant only at 3 months; after
  stopping, tendon stiffness returned to baseline within 2 months while strength was retained
  [@kubo-2010-time-course] (promising, ABS; n=8).
- **Size needs years, and perhaps youth.** Four years of heavy resistance training in young men
  produced no patellar tendon hypertrophy despite large muscle gains; high-force stiffness/modulus
  were similarly raised after 12 weeks (+25/22%) and 4 years (+17/23%), but only years of training
  lowered strain across the whole force range [@massey-2018-tendinous-long-term] (promising, ABS).
  Sport-induced side-to-side differences in elite fencers/badminton players: lead-leg proximal CSA
  106 vs 83 mm2, distal 139 vs 116 mm2, stiffness 4766 vs 3494 N/mm, modulus unchanged
  [@couppe-2008-habitual-loading] (promising, ABS) - plausibly loading during growth.
- **Strength and stiffness in parallel?** A 2026 multilevel meta-analysis pairing outcomes within the
  same cohorts: strength +16.1% (lnRR 0.150, 0.121 to 0.178), stiffness +24.1% (0.216, 0.164 to 0.267);
  stiffness rose proportionally slightly more (contrast -0.066, -0.119 to -0.013), but controlled-
  design restriction made the interval include zero; maximal tendon strain showed no clear change
  (-4.8%, -11.5% to +2.4%) [@pang-2026-strength-stiffness] (promising, FT; unregistered review).

**Trained athletes and muscle-tendon imbalance.**
- Adult male volleyball players continuing normal training: maximal patellar tendon strain rose over 9
  months (strength outpaced stiffness; p=0.010); a group given personalised strain-targeted (4.5-6.5%)
  loading 3x/week showed no strain rise and reduced imbalance (p=0.007), strength +8% in both
  [@weidlich-2024-personalized-tendon] (speculative, ABS; non-randomised, n=10 vs 12).
- In adolescents, athletes who later developed patellar tendon pain had higher strain beforehand; strain
  >=9% carried a risk ratio of 2.3 (p=0.026) [@mersmann-2023-tendon-strain-risk] (speculative, ABS;
  adolescents, 14 cases).

### Mechanisms
- Tenocytes sense matrix strain; a "homeostatic set point" model proposes a band of strain (roughly
  4.5-6.5% whole-tendon strain in the Berlin group's work) that is net-anabolic, with lower strain
  insufficient and very high strain causing sub-rupture fatigue damage and catabolic signalling
  [@weidlich-2023-squat-tendon-strain; @mersmann-2023-tendon-strain-risk] (promising/speculative, FT/ABS).
- Because the core collagen does not turn over, stiffening with training must come mainly from changes
  in material properties (modulus) that do not require replacing fibrils (plausibly cross-linking,
  fibril packing, non-collagenous matrix and water content; not directly measured in humans) and from
  slow peripheral addition (speculative). This fits modulus driving stiffness while CSA lags
  [@lazarczuk-2022-tendon-meta; @heinemeier-2013-tendon-14c].
- Low-volume sufficiency fits a saturating acute anabolic response (a "ceiling" after brief loading,
  as in bone and engineered ligament) plus increasing fatigue damage with more cycles; the Tsai authors
  propose exactly this but found no micromorphology damage at any volume
  [@tsai-2024-tendon-loading-frequency] (speculative, FT).

### Disagreements
- Relative intensity as moderator: Bohm 2015 yes; Lazarczuk 2022 no. Resolution: the causal variable
  is tendon strain, which %1RM indexes poorly and individually.
- "Tendon lags muscle": supported by monthly time-course data [@kubo-2010-time-course], long-term
  strain trends [@weidlich-2024-personalized-tendon] and long-term trained men [@massey-2018-tendinous-long-term]; challenged on average in short trials [@pang-2026-strength-stiffness]. Both can be true:
  stiffness keeps pace in the first months of a new stimulus in untrained people, while size and
  whole-range strain adapt over years.

### Unknown
- Dose-response in already trained or strength athletes (the three trained-athlete studies were null).
- Whether loading strain or tendon stiffness measured in the lab predicts injury in adults.
- Long-term (>14 weeks) and multi-year intervention data; female athletes.

---

## RQ2. How do ligament, bone, cartilage and the intervertebral disc respond to loading in humans?

### Ligament
- Human ligament training data are almost absent. In a retrospective MRI series, high-performance
  weightlifters had larger ACL (71.7 vs 40.6 mm2) and PCL (64.5 vs 45.0 mm2) midsubstance areas than
  controls; size correlated with earlier training onset (rho -0.56 ACL, -0.71 PCL) more than with
  years of training [@grzelak-2012-cruciate] (speculative, FT; the paper reports 9 athletes in the
  abstract but 16 in its table).
- Cruciate ligament protein FSR ~0.45%/d (ACL) and 0.46%/d (PCL) vs muscle 1.17%/d in older surgical
  patients [@houtvast-2026-tissue-protein-synthesis] (promising, ABS).
- Most "ligament loading" programming ideas come from engineered-ligament work: signalling peaks
  within ~10 min of stretch and cells are refractory for up to 6 h; 10 min every 6 h raised collagen
  content more than continuous stretch (5.9% vs 4.8% vs control 3.1%) [@paxton-2012-intermittent-stretch] (speculative for humans, ABS).
- Grade overall: speculative. Ligament adaptation to resistance training in adult humans is an open
  question.

### Bone
- **Effective stimulus**: high strain magnitude and rate, novel/varied direction, few cycles. Bone
  cells lose ~95% of mechanosensitivity after ~20 consecutive cycles and recover >90% after 4-8 h
  (animal data) [@warden-2021-bone-workload] (promising, FT). Splitting 360 daily cycles into 4 x 90
  (3 h apart) beat 1 x 360 in rats: ultimate force +87% vs +64%, energy to failure +165% vs +94%, with
  only 5-12% BMD change [@robling-2002-short-bouts] (promising, ABS) - bone strength gains come from
  geometry at the right sites more than from density.
- **Trials**: In postmenopausal women with low bone mass, 8 months of supervised heavy resistance plus
  impact training (5 x 5 at >85% 1RM, 2x/wk) raised lumbar BMD +2.9% vs -1.2% and femoral neck +0.3%
  vs -1.9%, cortical thickness +13.6% vs +6.3%, one minor adverse event [@watson-2018-liftmor]
  (established for that population, ABS). In premenopausal women, high-intensity resistance training
  raised lumbar BMD ~1% (WMD 0.014 g/cm2, 0.009 to 0.019) but not femoral neck (0.001, -0.006 to
  0.008) [@martyn-st-james-2006-rt-bmd] (promising, ABS); a 2026 meta-analysis found significant effects
  only postmenopausally (FN 0.47, LS 0.36) and none in the two premenopausal RCTs (n=112)
  [@jones-2026-bmd-women] (promising, ABS). In men, exercise gave LS SMD 0.38 (0.14 to 0.61) and FN
  0.25 (0.00 to 0.49) [@mages-2021-bmd-men] (promising, ABS).
- **Strength athletes (cross-sectional)**: young male powerlifters had higher lumbar and whole-body BMD
  but not proximal femur BMD, and spine BMD tracked performance [@tsuzuku-1998-powerlifters]
  (speculative, ABS); female weightlifters had bigger bones at bending-loaded sites (forearm strength
  index +41-43%) and denser trabecular bone (+11%) at the compressively loaded distal femur, without
  higher cortical density [@heinonen-2002-female-weightlifters] (promising, ABS).
- **Time course**: osteoclastic resorption ~4 weeks, refilling ~3 months, full mineralisation up to a
  year; resorption transiently adds porosity that lowers fatigue resistance
  [@warden-2021-bone-workload] (established, FT). So BMD changes take 6-12 months to measure and the
  first months of a new heavy stimulus may be a period of transiently reduced bone fatigue resistance
  (inferred).
- **Fatigue**: microdamage accumulation rises steeply with strain (exponent ~17 in vitro; ~10% more
  strain roughly halves cycles to failure), so increases in intensity or impact are costlier to bone
  than increases in repetitions [@warden-2021-bone-workload] (promising, FT; cited estimates).

### Articular cartilage
- **Collagen matrix is essentially permanent after skeletal maturity**, with or without OA (14C,
  n=23) [@heinemeier-2016-cartilage-14c] (established, ABS). Femoral cartilage protein FSR ~0.19%/d
  [@houtvast-2026-tissue-protein-synthesis] (ABS).
- Cartilage deforms little during physiological loading and recovers within ~90 minutes; it thins with
  unloading, but there is little evidence that more loading thickens it; twin data point to strong
  genetic control [@eckstein-2006-cartilage] (promising, ABS).
- Professional weightlifters and bobsled sprinters had thicker patellar cartilage (+14%, 95% CI 6 to
  22%; +17%, 9 to 26%) but no other differences [@gratzke-2007-cartilage-weightlifters] (speculative,
  ABS; n=7 per group).
- Loading exercise did not harm cartilage in people at risk of or with knee OA (9 RCTs; mostly null,
  a few positive compositional findings, one negative) [@bricca-2019-exercise-cartilage] (promising,
  ABS).
- Running shows a U-shaped association with hip/knee OA: prevalence 3.5% in recreational runners vs
  10.2% in controls and 13.3% in competitive runners [@alentorn-geli-2017-running-oa] (promising, ABS;
  observational).

### Intervertebral disc
- Cross-sectional: long-distance runners and joggers had lumbar disc T2 +11.4% and +9.2% vs
  non-athletes (n=79, 25-35 y), strongest in the nucleus; disc T2 associated with accelerations of fast
  walking/slow running (~2 m/s), not high-impact loading [@belavy-2017-running-disc] (promising, FT).
- 2026 meta-analysis (39 studies, 4152 people; mostly observational): upright bipedal loading (mostly
  running) g 0.31 (0.12 to 0.50), GRADE very low; "explosive end-range" sports including weightlifting
  g -0.10 (-1.03 to 0.83), very low; combined loading had higher odds of reduced disc signal (OR 2.80,
  1.53 to 5.11; low); prospective data null (g -0.16, -1.24 to 0.93; 2 studies)
  [@samanna-2026-disc-meta] (speculative/contested, FT). The authors note individual studies with
  more degeneration in weightlifters, gymnasts, wrestlers and cricketers, and that omitting one
  weightlifting and one rowing study turned the combined-loading estimate favourable.
- Former elite weightlifters had the most lumbar disc degeneration and bulging on MRI (n=19), yet
  former athletes overall reported less back pain than controls and no more back-related
  hospitalisation or disability [@videman-1995-athletes-spine] (promising, ABS).
- Young athletes (n=308): basketball and soccer associated with disc hypertrophy or hydration; training
  volume explained <1% of variance [@owen-2021-athletes-disc] (speculative, ABS).
- RCTs (both in chronic low back pain, so indirect for healthy lifters): 6 months of progressive
  aerobic + resistance exercise did not change whole-disc T2 (94.1 vs 96.5 ms, p=0.549)
  [@owen-2020-disc-rct] (promising, ABS). The ASTEROID 12-week run-walk trial (n=40) improved pain
  (-19.35 points, -32.01 to -6.69) and disability vs waitlist; 9 non-serious adverse events, mostly
  lower limb [@neason-2025-asteroid] (promising, ABS); a pre-planned secondary analysis found
  favourable disc T2 change only in subgroups (e.g. cumulative 28.6-46.1 km: +4.80 ms, 2.51 to 7.10)
  [@samanna-2026-asteroid-disc] (speculative, ABS; hypothesis-generating).
- There is **no trial of heavy resistance training with disc outcomes** in healthy adults.

### Mechanisms (RQ2)
- Bone: osteocyte mechanosensing of fluid-flow shear; desensitisation and resensitisation explain why
  few, varied, high-rate loads with rest between bouts are osteogenic [@warden-2021-bone-workload;
  @robling-2002-short-bouts].
- Cartilage and disc: largely avascular, low-cell tissues with collagen that does not turn over in
  adulthood [@heinemeier-2016-cartilage-14c]; they depend on load-driven fluid flow for nutrition,
  hence a hypothesised U-shaped load-health relationship. A modelled "anabolic window" for the disc of
  dynamic 0.2-0.8 MPa at 0.1-1 Hz is extrapolated from animal and tissue models
  [@belavy-2017-running-disc] (speculative, FT). Adaptation, where it happens, is probably in
  proteoglycan/water content (T2) and geometry rather than collagen (speculative).

### Disagreements (RQ2)
- Weightlifting and the disc: more imaging degeneration in some cohorts [@videman-1995-athletes-spine;
  @samanna-2026-disc-meta] vs no pooled difference and lower back pain in former athletes. Imaging
  degeneration is weakly linked to symptoms; no causal data.
- Bone gains from resistance training in young adults: ~1% at the spine and none at the hip
  [@martyn-st-james-2006-rt-bmd; @jones-2026-bmd-women] vs larger site-specific differences in lifters
  [@heinonen-2002-female-weightlifters] (selection or decades of exposure, including during growth).

---

## RQ3. Collagen/gelatin plus vitamin C, short-bout loading, and isometrics for tendon pain

### Collagen or gelatin with vitamin C: acute marker studies
- Original study: 8 men, crossover; 15 g vitamin-C-enriched gelatin 1 h before 6 min rope skipping
  (3x/day, >=6 h apart, 3 days) approximately doubled blood PINP; serum after gelatin increased
  collagen content of engineered ligaments [@shaw-2017-gelatin] (speculative, ABS; full text not
  retrieved).
- Same-lab replication: 10 men, 15 g gelatin or hydrolysed collagen before jump rope: PINP "tended to
  increase ~20%", not significant [@lis-2019-collagen-derivatives] (contested, ABS).
- Independent dose study in resistance-trained men (n=10): 30 g hydrolysed collagen + 50 mg vitamin C
  1 h before 4 x 10RM squats raised PINP AUC over 6 h vs 15 g (267 vs 235 ug/L/h, P=0.013) and 0 g
  (219, P=0.002); 15 g did not differ from 0 g (P=0.225) [@lee-2024-collagen-dose] (promising, ABS; no
  funding, no conflicts per full text).
- Tracer study (n=45): 30 g collagen after resistance exercise did not raise muscle connective
  protein synthesis above placebo over 5 h (0.068 vs 0.058%/h, P=0.09) although it raised plasma
  glycine and proline [@aussieker-2023-collagen-mps] (promising, ABS; muscle connective tissue, not
  tendon; taken after exercise).
- 14 days of 40 g/day whey did not change synthesis in tendon, ligament, cartilage, meniscus or bone
  [@houtvast-2026-tissue-protein-synthesis] (promising, ABS; whey, older adults, no training).
- Functional: 3 weeks of 20 g collagen + 50 mg vitamin C before training let RFD recover to baseline
  (p=0.036) while placebo stayed depressed; no maximal-force effect [@lis-2022-collagen-rfd]
  (speculative, ABS).

### Collagen with training: chronic tendon RCTs (2022-2025)
| Trial | Population, n | Dose, timing | Result |
|---|---|---|---|
| [@jerger-2022-collagen-achilles] | active men, 40, 14 wk | 5 g/d | Achilles CSA +11.0% vs +4.7% (p=0.002); stiffness, strength no diff (ABS) |
| [@jerger-2023-collagen-patellar] | active men, 50, 14 wk | 5 g/d | regional PT CSA larger; stiffness, strength no diff (ABS) |
| [@balshaw-2023-collagen-peptides] | rec. men, 39, 15 wk, MRI | 15 g/d | **no effect** on any tendon outcome (P 0.365-0.877); stiffness +17.3% vs +20.9% (ABS) |
| [@lee-2025-collagen-female-soccer] | pro female soccer, 11, 10 wk | 30 g + 500 mg vit C pre-session | stiffness +15.4% vs +4.6% (P=0.002), modulus +14.2% vs +3.4% (FT) |
| [@nulty-2025-collagen-middle-aged] | men 47 y, 20, 12 wk | 30 g + 50 mg vit C post-session | CSA +6.8 vs +1.2 mm2, stiffness +661 vs +247 N/mm, modulus +0.21 vs +0.09 GPa (FT) |
| [@nulty-2025-collagen-female-masters] | female masters hockey, 22, 8 wk | 30 g + 500 mg vit C pre-session | PT CSA and pRFD (10.1 vs 9.6 kN/s, p=0.039) favoured collagen (ABS) |
| [@miyamoto-2025-collagen-stiffness] | sedentary men, 50, 16 wk, **no training** | 10 g/d | shear-wave Achilles stiffness d 0.378 within-group; no CSA or MVC change (ABS; 5/6 authors from a food company) |

- Meta-analysis (search Dec 2023): tendon CSA SMD 0.67 (0.16 to 1.19; 4 studies, 114) but tendon
  stiffness/modulus SMD 0.05 (-0.38 to 0.48; 4 studies, 111; Egger p=0.01); GRADE **very low** for both
  [@bischof-2024-collagen-meta] (contested, FT). A 2026 narrative systematic review (8 RCTs, n=257)
  calls the evidence for tendon CSA and stiffness "GRADE A strong", which overstates certainty
  [@buchalski-2026-collagen-review] (contested, ABS).
- Strength: no added effect of collagen on strength in any tendon trial above; Bischof pooled a small
  maximal-strength SMD of 0.19 (low certainty).
- **Overall grade: contested.** Positive tendon results come from small trials, often with ultrasound
  CSA, regional outcomes, within-group statistics, or industry-linked or single-lab programmes (four
  positive trials from one UK lab; the Jerger programme includes a manufacturer-affiliated co-author).
  The largest independent MRI trial at 15 g/day was null. Dose and timing (30 g pre-session with
  vitamin C) differ between positive and null trials, so the null may reflect dose/timing rather than
  disproving the idea.

### Mechanisms (collagen)
- Collagen/gelatin supplies glycine, proline and hydroxyproline (rate-limiting amino acids for
  collagen synthesis); vitamin C is a cofactor for prolyl and lysyl hydroxylases; timing ~1 h before
  loading aims to coincide peak plasma amino acids with the loading-induced synthesis response
  [@shaw-2017-gelatin; @lee-2024-collagen-dose] (speculative).
- PINP is a whole-body marker dominated by bone; no human study has shown increased **tendon**
  collagen synthesis from ingested collagen (no tendon tracer study found). If tendon core collagen is
  not replaced [@heinemeier-2013-tendon-14c], any supplement effect must act on peripheral growth or
  matrix properties (speculative).

### Short-bout loading (Baar's "10 minutes, 6 hours")
- The rule comes from engineered ligaments (refractory up to 6 h after 10 min of stretch)
  [@paxton-2012-intermittent-stretch] (speculative, ABS) and rat bone (short bouts with 3-8 h rest
  beat continuous loading) [@robling-2002-short-bouts; @warden-2021-bone-workload] (promising for bone).
- The only human tendon test of loading-recovery timing found no effect of 24-48 h vs 48-96 h between
  sessions, and less volume was as good or better [@tsai-2024-tendon-loading-frequency] (promising,
  FT). Within-day spacing (e.g. two short bouts 6 h apart) has **not** been tested in human tendon.
- Grade: promising for bone, speculative for tendon and ligament. Disclosure context: Baar (senior
  author of the gelatin and engineered-ligament work) declares research grants and fees from nutrition
  companies including PepsiCo and GelTor [@houtvast-2026-tissue-protein-synthesis] (ABS, disclosure
  statement).

### Isometrics for tendon pain (tendinopathy, so outside the healthy-athlete core)
- Original: 6 volleyball players; one bout of 5 x 45 s isometrics at 70% MVC reduced decline-squat
  pain from 7.0 to 0.17/10 vs 6.33 to 3.75 after isotonics, lasting 45 min, with reduced cortical
  inhibition and +18.7% MVIC [@rio-2015-isometric] (contested, ABS).
- Same group, in-season RCT (n=20, 4 weeks): both programmes reduced pain; isometrics gave greater
  immediate analgesia (P<0.002) [@rio-2017-in-season] (contested, ABS).
- Independent pre-registered crossover (n=21): small pain reduction after either mode (0.9/10, 95% CI
  0.1 to 1.7), gone by 45 min, **no difference** between isometric and dynamic exercise
  [@holden-2020-isometric] (established, ABS).
- Meta-analysis (10 RCTs, mixed tendons): isometrics not superior to isotonic exercise immediately or
  over 12 weeks (pooled p=0.19; limited evidence) [@clifford-2020-isometric-meta] (promising, FT). A
  living NMA of 68 RCTs found no exercise type with a clinically important advantage supported by
  better than low/very-low evidence [@challoumas-2023-tendinopathy-nma] (promising, ABS).
- Mechanism debate: Rio proposed cortical disinhibition; later data fit a general, small and
  mode-independent exercise-induced hypoalgesia.

---

## RQ4. Training load and injury risk after the ACWR critiques

### Findings
- **The original model.** High chronic load was proposed to protect and spikes to harm; ACWR 0.8-1.3
  a "sweet spot", >=1.5 a "danger zone", from cricket, Australian football and rugby league cohorts
  [@gabbett-2016-paradox] (contested, FT).
- **Supportive syntheses.** A systematic review (20 studies, 1234 elite male team-sport athletes,
  2375 injuries) found most studies linked higher ACWR to time-loss injury, but used 14 different
  binning methods, limiting recommendations [@andrade-2020-acwr-review] (contested, ABS). A 2026
  multilevel meta-analysis (16 studies, 797 athletes): g 0.35 (0.16 to 0.54), I2 95.8%, not significant
  for time-loss injuries; authors reject ACWR as a stand-alone causal or predictive model
  [@ding-2026-acwr-meta] (contested, ABS).
- **Critiques.** Coupled ACWR (acute week inside the chronic average) is mathematically coupled to its
  numerator, producing spurious correlation [@lolli-2019-coupling] (established, SEC). No study has
  estimated a causal effect; the ratio is inaccurate, ambiguous and not consistently related to injury
  [@impellizzeri-2020-acwr] (established, ABS). Replacing chronic load with fixed or random numbers
  reproduced the association (original OR 2.45, 1.28 to 4.71; fixed denominator 1.95, 1.18 to 3.52;
  random 1.16 to 2.07), and neither ACWR nor acute load beat an intercept-only model for prediction
  [@impellizzeri-2021-chronic-workload] (established, ABS).
- **Causal frameworks.** Injury follows from tissue-level mechanical load vs capacity (fatigue damage vs
  repair) and psycho-physiological pathways; session-RPE and similar internal-load metrics are too far
  from tissue mechanics to predict injury, and no external-load metric has been validated against
  tissue load [@kalkhoven-2021-load-causal] (promising, ABS). Overuse injury can be modelled as
  mechanical fatigue in which damage depends on load magnitude and cycles, offset by repair
  [@edwards-2018-mechanical-fatigue] (promising, ABS); for bone, magnitude dominates (above)
  [@warden-2021-bone-workload] (FT).
- **What is supported.** Strength training reduces sports injuries: RR 0.315 (0.207 to 0.480) for
  strength programmes [@lauersen-2014-injury-prevention] (established, ABS; few trials) and RR 0.338
  (0.238 to 0.480; 6 RCTs, 7738 athletes, 177 injuries) with a dose-response
  [@lauersen-2018-strength-injury] (promising, ABS). Strength sports themselves have low injury rates:
  weightlifting 2.4-3.3 and powerlifting 1.0-4.4 injuries per 1000 h, mostly spine, shoulder and knee,
  with almost no risk-factor data [@aasa-2017-weightlifting-injuries] (promising, ABS).

### Mechanisms
- Ratios rescale and shrink the variance of acute load, inflating odds ratios; coupling creates
  correlation by construction [@impellizzeri-2021-chronic-workload; @lolli-2019-coupling].
- Tissue damage depends on the tissue's own strain history and capacity (stiffness, size, remodelling
  state), which whole-body load metrics do not capture [@kalkhoven-2021-load-causal].

### Disagreements
- Proponents (Gabbett; Andrade et al., with Gabbett as co-author) read the associations as
  actionable; critics (Impellizzeri, Lolli, Kalkhoven) regard them as artefacts without causal or
  predictive value. The 2026 meta-analysis sits between: small association, huge heterogeneity, not
  usable alone. None of this evidence comes from strength sports.

### Unknown
- Any validated load-injury model for strength athletes; whether gradual progression rules (e.g. "10%
  per week") reduce injury (convention).

---

## RQ5. How should connective-tissue time courses shape progression in strength training?

### Synthesis of time constants (with grades)
| Tissue / property | Responds within | Basis |
|---|---|---|
| Strength (neural) | weeks | [@kubo-2010-time-course] (ABS) |
| Tendon collagen synthesis after a bout | peak ~24 h, elevated to ~72 h; early net catabolism | [@miller-2005-tendon-collagen-synthesis; @magnusson-2010-tendinopathy-loading] (ABS) |
| Tendon stiffness/modulus | 4-8 wk detectable; most of a 16-wk gain by wk 8 | [@tsai-2024-tendon-loading-frequency] (FT), [@lazarczuk-2022-tendon-meta] (FT) |
| Tendon stiffness on detraining | lost within ~2 months | [@kubo-2010-time-course] (ABS) |
| Tendon CSA | small, regional; little after 4 y RT in adults | [@massey-2018-tendinous-long-term] (ABS), [@couppe-2008-habitual-loading] (ABS) |
| Tendon core collagen | not replaced after ~17 y | [@heinemeier-2013-tendon-14c] (FT) |
| Bone remodelling cycle | resorption ~4 wk, refill ~3 mo, mineralisation to 1 y | [@warden-2021-bone-workload] (FT) |
| Cartilage collagen | essentially none after maturity | [@heinemeier-2016-cartilage-14c] (ABS) |
| Disc (T2/hydration) | possible change in 12 wk in subgroups only | [@samanna-2026-asteroid-disc] (ABS) |

### Implications (graded)
- Heavy compound lifting already delivers tendon strains in the adaptive band (squats at 40-80% 1RM:
  4.7-8.2% patellar strain) [@weidlich-2023-squat-tendon-strain]; dedicated extra tendon work is mostly
  relevant where training does not load a tendon heavily, or when strength is rising fast (promising).
- A small dose suffices: ~180 s/week of high-strain loading (e.g. 4-5 sets of 4 x 3-s contractions at
  ~90% MVC, 2-4 days/week) produced the same tendon stiffening as more volume
  [@tsai-2024-tendon-loading-frequency] (promising for untrained men; untested in strength athletes).
- Because strength can outrun tendon stiffness over a season [@weidlich-2024-personalized-tendon] and
  tendon stiffness detrains within ~2 months while strength persists [@kubo-2010-time-course], the
  periods of highest tendon strain are likely rapid strength phases and returns after layoffs; ramping
  load more conservatively in those periods is a reasoned inference (speculative; no outcome trials).
- Bone: few high-magnitude, varied or impact loads, short bouts, and rest between bouts; increases in
  load magnitude cost more fatigue life than added repetitions; new heavy or impact stimuli may
  transiently raise porosity for months [@warden-2021-bone-workload; @robling-2002-short-bouts]
  (promising, mostly animal and runner data).
- Cartilage and disc: no evidence that heavy lifting builds them; no causal evidence that it harms
  them in healthy adults; running at moderate volumes is associated with better disc and joint status
  (speculative). The safest statement is that these tissues have little capacity to "train up", so
  long careers depend on not exceeding their capacity rather than on building it (speculative).
- Collagen plus vitamin C before loading: low cost, low risk; evidence for tendon benefit contested;
  if used, the protocol with positive trials is 15-30 g with vitamin C ~30-60 min before the session
  [@lee-2024-collagen-dose; @lee-2025-collagen-female-soccer] (contested).
- Load monitoring: do not use ACWR thresholds; monitor tissue-specific symptoms and avoid large, abrupt
  increases in high-strain or impact loading (convention, consistent with
  [@kalkhoven-2021-load-causal; @impellizzeri-2020-acwr]).

---

## Gaps

1. **No connective-tissue dose-response data in trained strength athletes.** Three trained-athlete
   studies in Lazarczuk 2022 were null; no study manipulates load in competitive lifters with tendon,
   ligament, bone, cartilage or disc outcomes.
2. **No human tendon tracer study of ingested collagen.** All "collagen synthesis" evidence is blood
   PINP (whole body, mainly bone) or muscle connective tissue; COL-TEN-type biopsy results were not
   found. JUMPFOOD (collagen in patellar tendinopathy) results not located.
3. **Within-day short-bout loading** (e.g. 10 min, 6 h apart) is untested in human tendon or ligament;
   only between-session spacing has been tested (null).
4. **Ligament adaptation** to resistance training in adults: only one retrospective MRI series.
5. **Heavy resistance training and the disc:** no prospective trial; observational evidence mixed and
   very low certainty.
6. **Cartilage compositional MRI (T2, dGEMRIC, T1rho) in strength athletes** was not searched in depth;
   proteoglycan adaptation, unlike collagen, may be possible.
7. **Bone in young trained adults:** few RCTs; most bone trials are in postmenopausal women or older
   men. No trial measured bone fatigue or stress injury risk across a strength-training progression.
8. **Sex and hormonal effects** (oestrogen and ligament laxity, lower tendon collagen synthesis in
   women) were only touched; chapter 11 should cover them.
9. **Full texts not obtained** for Shaw 2017, Rio 2015, Holden 2020, LIFTMOR, ASTEROID (primary and
   disc analysis), Magnusson & Kjaer 2019 and Eckstein 2006; numbers from these are abstract-level.
   Lolli 2019 (letter) is summarised second-hand.
10. **Validated tissue-load monitoring:** no external-load metric validated against tendon or bone
    strain in lifting; whether lab-measured tendon strain predicts injury in adults is unknown.
11. **Funding audit incomplete:** funding of Jerger 2022/2023 and Balshaw 2023 was not checked in full
    text; the Jerger 2022 author list includes a collagen-manufacturer research-institute affiliation.
