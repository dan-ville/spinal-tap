"""Build public/templates/spinal-tap-tracker.xlsx, the downloadable progress tracker.

Run after changing src/data/gates.yml or the log fields:
    python3 scripts/templates/build-tracker.py
Needs openpyxl and PyYAML. The output is committed; CI does not run this script.
Formulas mirror src/lib/calc.ts (McGill ratios, Epley e1RM, DOTS, hard sets) so the
spreadsheet and the site never disagree.
"""
from datetime import date
from pathlib import Path

import yaml
from openpyxl import Workbook
from openpyxl.formatting.rule import FormulaRule
from openpyxl.styles import Alignment, Border, Font, PatternFill, Side
from openpyxl.worksheet.datavalidation import DataValidation

ROOT = Path(__file__).resolve().parents[2]
OUT = ROOT / "public" / "templates" / "spinal-tap-tracker.xlsx"
GATES = yaml.safe_load((ROOT / "src" / "data" / "gates.yml").read_text())
PHASES = ["Baseline", "Capacity floor", "Progressive loading", "Strength build", "Performance"]

FONT = "Arial"
F = Font(name=FONT, size=10)
F_BOLD = Font(name=FONT, size=10, bold=True)
F_HEAD = Font(name=FONT, size=10, bold=True, color="FFFFFF")
F_TITLE = Font(name=FONT, size=16, bold=True)
F_NOTE = Font(name=FONT, size=9, italic=True, color="666666")
INPUT = PatternFill("solid", fgColor="FFF6D5")  # cells the reader fills in
HEAD = PatternFill("solid", fgColor="0D0D0D")
CALC = PatternFill("solid", fgColor="F2F2F2")  # formula cells
GREEN = PatternFill("solid", fgColor="D4FAE8")
AMBER = PatternFill("solid", fgColor="FDE9C4")
RED = PatternFill("solid", fgColor="F8D4D4")
THIN = Border(bottom=Side(style="thin", color="E5E5E5"))
WRAP = Alignment(wrap_text=True, vertical="top")

wb = Workbook()


def sheet(title, widths):
    ws = wb.active if wb.active.title == "Sheet" else wb.create_sheet()
    ws.title = title
    for col, w in widths.items():
        ws.column_dimensions[col].width = w
    ws.sheet_view.showGridLines = False
    return ws


def header(ws, row, labels):
    for i, label in enumerate(labels, 1):
        c = ws.cell(row=row, column=i, value=label)
        c.font, c.fill = F_HEAD, HEAD
        c.alignment = Alignment(wrap_text=True, vertical="center")
    ws.row_dimensions[row].height = 30
    ws.freeze_panes = ws.cell(row=row + 1, column=2)


def title(ws, text, note):
    ws["A1"] = text
    ws["A1"].font = F_TITLE
    ws["A2"] = note
    ws["A2"].font = F_NOTE
    ws["A3"] = "Yellow cells are yours to fill in. Grey cells are formulas; leave them alone. Row 6 is an example: overwrite it."
    ws["A3"].font = F_NOTE


def style_rows(ws, first, last, ncols, inputs, fmt=None):
    for r in range(first, last + 1):
        for c in range(1, ncols + 1):
            cell = ws.cell(row=r, column=c)
            cell.font, cell.border = F, THIN
            cell.fill = INPUT if c in inputs else CALC
            if fmt and c in fmt:
                cell.number_format = fmt[c]


def choice(ws, rng, options, prompt):
    dv = DataValidation(type="list", formula1='"' + ",".join(options) + '"', allow_blank=True)
    dv.prompt, dv.showInputMessage = prompt, True
    ws.add_data_validation(dv)
    dv.add(rng)


def number(ws, rng, lo, hi, prompt):
    dv = DataValidation(type="decimal", operator="between", formula1=str(lo), formula2=str(hi), allow_blank=True)
    dv.prompt, dv.showInputMessage = prompt, True
    dv.error, dv.showErrorMessage = f"Enter a number from {lo} to {hi}.", True
    ws.add_data_validation(dv)
    dv.add(rng)


EX = date(2026, 1, 5)  # example rows start on a Monday
FIRST = 6  # first data row on every log sheet

# ---------------------------------------------------------------- Start here
ws = sheet("Start here", {"A": 4, "B": 100})
rows = [
    ("Spinal Tap progress tracker", F_TITLE),
    ("A free template for running the rehab-to-performance plan on your own. It stays on your device: nothing is sent anywhere.", F),
    ("", F),
    ("This template teaches and records. It does not diagnose, clear a symptom, or replace a clinician.", F_BOLD),
    ("Stop self-directed work and see a clinician the same day if you have any of: symptoms below the knee, numbness or weakness, "
     "saddle anaesthesia, bladder or bowel change, night pain, fever, unexplained weight loss, trauma.", F),
    ("", F),
    ("How to use it", F_BOLD),
    ("1. Daily log: one row a day, training day or not. Fill it in each morning, before coffee and before the walk.", F),
    ("2. Training log: one row per lift per session (load, sets, reps, RPE). Hard sets and e1RM are computed.", F),
    ("3. Weekly review: type the Monday of your first week in A6; everything else on that sheet is computed from the two logs.", F),
    ("4. McGill tests: the endurance battery, once a month. Ratios and gate verdicts are computed.", F),
    ("5. Gates: mark a gate met when the log shows it, not when you feel it is. Phase progress is counted at the top.", F),
    ("6. Calculators: DOTS, Epley e1RM and bodyweight multiples for the strength gates.", F),
    ("", F),
    ("Conventions", F_BOLD),
    ("Yellow cells are inputs. Grey cells are formulas. Drop-downs offer the allowed values. Each log sheet has an example row 6: overwrite it with your first day.", F),
    ("Weights are in kg. Every number in the plan is a labelled opening position ([proposed] or [heuristic]) for you to replace with your own data.", F),
    ("Never edit yesterday. A late or unusual reading gets a note, not a correction.", F),
    ("", F),
    ("Where the rules come from", F_BOLD),
    ("On the Spinal Tap site: the plan (/plan/), the log fields (/learn/self-coaching/the-log/) and the verdict (/learn/self-coaching/daily-decision-tree/).", F),
    ("Template licensed CC BY-SA 4.0, like the site's prose. Copy it, change it, share it.", F_NOTE),
]
for i, (text, font) in enumerate(rows, 1):
    c = ws.cell(row=i, column=2, value=text)
    c.font, c.alignment = font, Alignment(wrap_text=True, vertical="top")
ws.cell(row=4, column=2).fill = RED
ws.cell(row=5, column=2).fill = RED
ws.row_dimensions[5].height = 28

# ---------------------------------------------------------------- Daily log
N = 400  # a little over a year of days
ws = sheet("Daily log", {"A": 12, "B": 11, "C": 11, "D": 9, "E": 9, "F": 11, "G": 9, "H": 13, "I": 13, "J": 50})
title(ws, "Daily log", "Phase 0 check-in fields. One row per day, training or not. The stiffness change only appears once 14 earlier days are logged.")
header(ws, 5, ["Date", "Morning stiffness (0–10)", "Below the glute? (yes/no)", "Sleep (h)", "Stress (1–5)",
               "Bodyweight (kg)", "Walk (min)", "Verdict on yesterday", "Stiffness vs 14-day baseline", "Notes"])
last = FIRST + N - 1
style_rows(ws, FIRST, last, 10, {1, 2, 3, 4, 5, 6, 7, 8, 10}, {1: "yyyy-mm-dd", 6: "0.0", 9: "+0.0;-0.0;0.0"})
for r in range(FIRST, last + 1):
    ws.cell(row=r, column=10).alignment = WRAP
    if r >= FIRST + 14:  # baseline = mean of the previous 14 rows (one row per day)
        ws.cell(row=r, column=9, value=f'=IF(OR(B{r}="",COUNT(B{r-14}:B{r-1})<14),"",B{r}-AVERAGE(B{r-14}:B{r-1}))')
example = [EX, 2, "no", 7.5, 2, 82.4, 30, "Clean", None, "Example row: overwrite with your first day."]
for c, v in enumerate(example, 1):
    if v is not None:
        ws.cell(row=FIRST, column=c, value=v)
number(ws, f"B{FIRST}:B{last}", 0, 10, "Your own 0–10 score on the same morning test, same time, same way.")
choice(ws, f"C{FIRST}:C{last}", ["no", "yes"], "Anything below the gluteal fold, either leg, at any point. Yes = check the red flags first.")
number(ws, f"D{FIRST}:D{last}", 0, 24, "Time asleep, to the half hour.")
number(ws, f"E{FIRST}:E{last}", 1, 5, "Your own 1–5 scale.")
choice(ws, f"H{FIRST}:H{last}", ["Clean", "Yellow", "Bad"],
       "Clean: stiffness near baseline. Yellow: clearly above, settles with the walk. Bad: well above and does not settle, or below-glute yes.")
ws.conditional_formatting.add(f"C{FIRST}:C{last}", FormulaRule(formula=[f'$C{FIRST}="yes"'], fill=RED))
ws.conditional_formatting.add(f"H{FIRST}:H{last}", FormulaRule(formula=[f'$H{FIRST}="Bad"'], fill=RED))
ws.conditional_formatting.add(f"H{FIRST}:H{last}", FormulaRule(formula=[f'$H{FIRST}="Yellow"'], fill=AMBER))
ws.conditional_formatting.add(f"H{FIRST}:H{last}", FormulaRule(formula=[f'$H{FIRST}="Clean"'], fill=GREEN))
ws.conditional_formatting.add(f"I{FIRST}:I{last}", FormulaRule(formula=[f'AND(ISNUMBER($I{FIRST}),$I{FIRST}>=2)'], fill=AMBER))
ws["J4"] = "[heuristic] 2 points above your 14-day baseline is a common reading of 'clearly above'."
ws["J4"].font = F_NOTE

# ---------------------------------------------------------------- Training log
N = 1500
ws = sheet("Training log", {"A": 12, "B": 22, "C": 10, "D": 10, "E": 7, "F": 7, "G": 7, "H": 11, "I": 13, "J": 10, "K": 13, "L": 40})
title(ws, "Training log", "One row per lift per session: the working sets only. A hard set is an axial set at RPE 7 or above.")
header(ws, 5, ["Date", "Lift", "Axial? (yes/no)", "Load (kg)", "Sets", "Reps", "RPE",
               "e1RM (Epley)", "e1RM (RPE-adjusted)", "Axial hard sets", "Week starting (Mon)", "Notes"])
last = FIRST + N - 1
style_rows(ws, FIRST, last, 12, {1, 2, 3, 4, 5, 6, 7, 12}, {1: "yyyy-mm-dd", 8: "0.0", 9: "0.0", 11: "yyyy-mm-dd"})
for r in range(FIRST, last + 1):
    ws.cell(row=r, column=8, value=f'=IF(OR(D{r}="",F{r}=""),"",IF(F{r}<=1,D{r},D{r}*(1+F{r}/30)))')
    ws.cell(row=r, column=9, value=f'=IF(OR(D{r}="",F{r}="",G{r}=""),"",IF(F{r}+MAX(0,10-G{r})<=1,D{r},D{r}*(1+(F{r}+MAX(0,10-G{r}))/30)))')
    ws.cell(row=r, column=10, value=f'=IF(A{r}="","",IF(AND(C{r}="yes",N(G{r})>=7),N(E{r}),0))')
    ws.cell(row=r, column=11, value=f'=IF(A{r}="","",A{r}-WEEKDAY(A{r},3))')
for c, v in enumerate([EX, "Romanian deadlift", "yes", 80, 3, 8, 7], 1):
    ws.cell(row=FIRST, column=c, value=v)
ws.cell(row=FIRST, column=12, value="Example row: overwrite it.")
choice(ws, f"C{FIRST}:C{last}", ["yes", "no"], "Axial: the spine carries the load (squat, deadlift, RDL, carries, overhead press).")
number(ws, f"G{FIRST}:G{last}", 1, 10, "RPE 1–10 of the working sets. 10 - RPE = reps in reserve.")
ws["L4"] = "Epley: load × (1 + reps/30); a single is its own e1RM. RPE-adjusted adds reps in reserve (10 − RPE)."
ws["L4"].font = F_NOTE
TL_LAST = last

# ---------------------------------------------------------------- Weekly review
N = 104
ws = sheet("Weekly review", {"A": 14, "B": 12, "C": 11, "D": 11, "E": 11, "F": 14, "G": 16, "H": 50})
title(ws, "Weekly review", "Type the Monday of your first week in A6. The rest is computed from the Daily log and Training log.")
header(ws, 5, ["Week starting (Mon)", "Axial hard sets", "Days logged", "Yellow days", "Bad days",
               "Two bad days? (cut 40%)", "Hard-set cap after cut", "Review notes"])
last = FIRST + N - 1
style_rows(ws, FIRST, last, 8, {8}, {1: "yyyy-mm-dd"})
ws["A6"].fill = INPUT
ws["A6"] = EX
DL = "'Daily log'"
TL = "'Training log'"
for r in range(FIRST, last + 1):
    if r > FIRST:
        ws.cell(row=r, column=1, value=f"=A{r-1}+7")
    wk = f'{DL}!$A${FIRST}:$A$405,">="&A{r},{DL}!$A${FIRST}:$A$405,"<"&A{r}+7'
    ws.cell(row=r, column=2, value=f"=SUMIFS({TL}!$J${FIRST}:$J${TL_LAST},{TL}!$K${FIRST}:$K${TL_LAST},A{r})")
    ws.cell(row=r, column=3, value=f"=COUNTIFS({wk})")
    ws.cell(row=r, column=4, value=f'=COUNTIFS({wk},{DL}!$H${FIRST}:$H$405,"Yellow")')
    ws.cell(row=r, column=5, value=f'=COUNTIFS({wk},{DL}!$H${FIRST}:$H$405,"Bad")')
    ws.cell(row=r, column=6, value=f'=IF(E{r}>=2,"yes","no")')
    ws.cell(row=r, column=7, value=f'=IF(E{r}>=2,ROUNDDOWN(B{r}*0.6,0),"")')
    ws.cell(row=r, column=8).alignment = WRAP
ws.conditional_formatting.add(f"F{FIRST}:F{last}", FormulaRule(formula=[f'$F{FIRST}="yes"'], fill=RED))
ws["H4"] = "[heuristic] Two bad days in one week cut that week's axial hard sets by 40%; intensity is held."
ws["H4"].font = F_NOTE

# ---------------------------------------------------------------- McGill tests
N = 60
ws = sheet("McGill tests", {"A": 12, "B": 10, "C": 10, "D": 10, "E": 10, "F": 11, "G": 11, "H": 11, "I": 12, "J": 12, "K": 12, "L": 40})
title(ws, "McGill endurance tests", "Monthly. Hold times in seconds. Gates: flexor/extensor < 1.0; side bridge/extensor 0.75 ± 0.1; left/right within 5%.")
header(ws, 5, ["Date", "Flexor hold (s)", "Extensor hold (s)", "Side bridge L (s)", "Side bridge R (s)",
               "Flexor / extensor", "Side bridge / extensor", "L/R asymmetry (%)",
               "Gate: flex/ext", "Gate: bridge/ext", "Gate: symmetry", "Notes"])
last = FIRST + N - 1
style_rows(ws, FIRST, last, 12, {1, 2, 3, 4, 5, 12}, {1: "yyyy-mm-dd", 6: "0.00", 7: "0.00", 8: "0.0"})
for r in range(FIRST, last + 1):
    full = f'COUNT(B{r}:E{r})<4'
    ws.cell(row=r, column=6, value=f'=IF({full},"",B{r}/C{r})')
    ws.cell(row=r, column=7, value=f'=IF({full},"",AVERAGE(D{r}:E{r})/C{r})')
    ws.cell(row=r, column=8, value=f'=IF({full},"",ABS(D{r}-E{r})/MAX(D{r}:E{r})*100)')
    ws.cell(row=r, column=9, value=f'=IF(F{r}="","",IF(F{r}<1,"pass","not yet"))')
    ws.cell(row=r, column=10, value=f'=IF(G{r}="","",IF(ABS(G{r}-0.75)<=0.1,"pass","not yet"))')
    ws.cell(row=r, column=11, value=f'=IF(H{r}="","",IF(H{r}<=5,"pass","not yet"))')
for c, v in enumerate([EX, 95, 120, 85, 88], 1):
    ws.cell(row=FIRST, column=c, value=v)
ws.cell(row=FIRST, column=12, value="Example row: overwrite it.")
for col in "IJK":
    ws.conditional_formatting.add(f"{col}{FIRST}:{col}{last}", FormulaRule(formula=[f'{col}{FIRST}="pass"'], fill=GREEN))
    ws.conditional_formatting.add(f"{col}{FIRST}:{col}{last}", FormulaRule(formula=[f'{col}{FIRST}="not yet"'], fill=AMBER))
ws["L4"] = "Source: McGill et al. 1999 endurance norms (mcgill-1999-endurance-norms)."
ws["L4"].font = F_NOTE

# ---------------------------------------------------------------- Gates
ws = sheet("Gates", {"A": 9, "B": 62, "C": 30, "D": 10, "E": 12, "F": 44})
ws["A1"] = "Exit gates"
ws["A1"].font = F_TITLE
ws["A2"] = "Mark a gate met when your log shows it, not when you feel it is. The tag names where each number comes from."
ws["A2"].font = F_NOTE
for i, name in enumerate(PHASES):
    r = 4 + i
    ws.cell(row=r, column=1, value=f"Phase {i}").font = F_BOLD
    ws.cell(row=r, column=2, value=name).font = F
first_gate = 4 + len(PHASES) + 2
gate_last = first_gate + len(GATES)
for i in range(len(PHASES)):
    r = 4 + i
    c = ws.cell(row=r, column=3, value=f'=COUNTIFS($A${first_gate+1}:$A${gate_last},{i},$D${first_gate+1}:$D${gate_last},"yes")&" of "&COUNTIF($A${first_gate+1}:$A${gate_last},{i})&" met"')
    c.font, c.fill = F, CALC
header(ws, first_gate, ["Phase", "Gate", "Source or tag", "Met? (yes/no)", "Date met", "Where the log shows it"])
ws.freeze_panes = None
for i, g in enumerate(GATES, 1):
    r = first_gate + i
    tag = g.get("source") or g.get("tag")
    for c, v in enumerate([g["phase"], g["text"], f"[{tag}]", None, None, None], 1):
        cell = ws.cell(row=r, column=c, value=v)
        cell.font, cell.border = F, THIN
        cell.fill = INPUT if c >= 4 else PatternFill()
        cell.alignment = WRAP
    ws.cell(row=r, column=5).number_format = "yyyy-mm-dd"
choice(ws, f"D{first_gate+1}:D{gate_last}", ["no", "yes"], "Yes only when the log shows it.")
ws.conditional_formatting.add(f"A{first_gate+1}:F{gate_last}", FormulaRule(formula=[f'$D{first_gate+1}="yes"'], fill=GREEN))

# ---------------------------------------------------------------- Calculators
ws = sheet("Calculators", {"A": 34, "B": 14, "C": 60})
ws["A1"] = "Calculators"
ws["A1"].font = F_TITLE
ws["A2"] = "Type into the yellow cells. Same formulas as the calculators on the site."
ws["A2"].font = F_NOTE


def block(r, heading, inputs, outputs, note):
    ws.cell(row=r, column=1, value=heading).font = F_BOLD
    r += 1
    refs = {}
    for label, key, val in inputs:
        ws.cell(row=r, column=1, value=label).font = F
        c = ws.cell(row=r, column=2, value=val)
        c.font, c.fill = F, INPUT
        refs[key] = f"B{r}"
        r += 1
    for label, formula, fmt in outputs:
        ws.cell(row=r, column=1, value=label).font = F_BOLD
        c = ws.cell(row=r, column=2, value=formula(refs))
        c.font, c.fill, c.number_format = F_BOLD, CALC, fmt
        refs[label] = f"B{r}"
        r += 1
    ws.cell(row=r, column=1, value=note).font = F_NOTE
    return r + 2


r = block(4, "Estimated 1RM (Epley)", [("Load (kg)", "w", 100), ("Reps", "n", 5), ("RPE (optional)", "rpe", 8)], [
    ("Estimated 1RM", lambda x: f'=IF(OR({x["w"]}="",{x["n"]}=""),"",IF({x["n"]}<=1,{x["w"]},{x["w"]}*(1+{x["n"]}/30)))', "0.0"),
    ("RPE-adjusted 1RM", lambda x: f'=IF({x["rpe"]}="","",IF({x["n"]}+MAX(0,10-{x["rpe"]})<=1,{x["w"]},{x["w"]}*(1+({x["n"]}+MAX(0,10-{x["rpe"]}))/30)))', "0.0"),
], "Epley: load × (1 + reps/30). RPE-adjusted counts reps in reserve (10 − RPE) as reps.")
r = block(r, "Bodyweight multiple", [("Estimated 1RM or working load (kg)", "l", 150), ("Bodyweight (kg)", "bw", 82)], [
    ("Multiple of bodyweight", lambda x: f'=IF(OR({x["l"]}="",N({x["bw"]})=0),"",{x["l"]}/{x["bw"]})', '0.00"×"'),
], "Strength gates are read off an estimated 1RM from a recent working set, never a tested max [proposed].")
DOTS_M = [-307.75076, 24.0900756, -0.1918759221, 0.0007391293, -0.000001093]
DOTS_F = [-57.96288, 13.6175032, -0.1126655495, 0.0005158568, -0.0000010706]


def poly(k, bw):
    return "+".join(f"({c})*{bw}^{i}" for i, c in enumerate(k))


r = block(r, "DOTS", [("Total (kg)", "t", 500), ("Bodyweight (kg)", "bw", 82), ("Sex (male/female)", "s", "male")], [
    ("DOTS points", lambda x: f'=IF(OR({x["t"]}="",{x["bw"]}=""),"",{x["t"]}*500/IF({x["s"]}="female",{poly(DOTS_F, x["bw"])},{poly(DOTS_M, x["bw"])}))', "0.0"),
], "Official DOTS (2019) coefficients. Around 450 is roughly the top 1% of competitive open entries [heuristic]; a marker, not a gate.")
dv = DataValidation(type="list", formula1='"male,female"')
ws.add_data_validation(dv)
dv.add(f"B{r-4}")

OUT.parent.mkdir(parents=True, exist_ok=True)
wb.active = 0
wb.save(OUT)
print(f"wrote {OUT.relative_to(ROOT)}")
