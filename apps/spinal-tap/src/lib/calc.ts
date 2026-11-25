// Pure, deterministic calculators used by <Calc> and the plan page (docs/plan.md §2 "Deterministic numbers").
// Only erasable TypeScript syntax here: scripts/calc.test.mjs runs this file under node --experimental-strip-types.

export interface McgillHolds { flexor: number; extensor: number; bridgeL: number; bridgeR: number } // seconds

// McGill 1999 endurance ratios. Gates from docs/plan.md §4: flexor/extensor < 1.0,
// side bridge/extensor ≈ 0.75, L/R side bridge within 5%.
export function mcgillRatios(h: McgillHolds) {
  const bridge = (h.bridgeL + h.bridgeR) / 2;
  const asymmetryPct = (Math.abs(h.bridgeL - h.bridgeR) / Math.max(h.bridgeL, h.bridgeR)) * 100;
  return {
    flexorExtensor: h.flexor / h.extensor,
    bridgeExtensor: bridge / h.extensor,
    asymmetryPct,
    gates: {
      flexorExtensor: h.flexor / h.extensor < 1.0,
      bridgeExtensor: Math.abs(bridge / h.extensor - 0.75) <= 0.1,
      symmetry: asymmetryPct <= 5,
    },
  };
}

// Epley estimated 1RM: e1RM = w × (1 + reps/30). A true single is returned as-is
// (the raw formula would inflate it by 1/30).
export function e1rm(weight: number, reps: number) {
  return reps <= 1 ? weight : weight * (1 + reps / 30);
}

// Official DOTS (2019): points = total × 500 / (a + b·bw + c·bw² + d·bw³ + e·bw⁴), bodyweight in kg.
const DOTS = {
  male: [-307.75076, 24.0900756, -0.1918759221, 0.0007391293, -0.000001093],
  female: [-57.96288, 13.6175032, -0.1126655495, 0.0005158568, -0.0000010706],
};
export function dots(totalKg: number, bodyweightKg: number, sex: 'male' | 'female') {
  const denom = DOTS[sex].reduce((sum, k, i) => sum + k * bodyweightKg ** i, 0);
  return (totalKg * 500) / denom;
}

// Moment about a joint: M = F × d. Mass in kg is converted to newtons with g = 9.81 m/s²,
// horizontal moment arm in centimetres. Returns N·m. Used by the biomechanics track.
export function torque(massKg: number, armCm: number, g = 9.81) {
  return massKg * g * (armCm / 100);
}

// Weekly axial hard-set count (docs/plan.md §4 phase 2 "axial hard-set budget").
// A hard set is any set at RPE ≥ 7 (or RIR ≤ 3) in an axial-loading movement; sessions list sets as {axial, rpe}.
export interface CalcSet { axial: boolean; rpe: number }
export function hardSets(sessions: CalcSet[][], threshold = 7) {
  return sessions.flat().filter((s) => s.axial && s.rpe >= threshold).length;
}
