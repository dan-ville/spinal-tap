// Assert-based self-check for src/lib/calc.ts. Run: node scripts/calc.test.mjs
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';

// ponytail: Node 22.16 only strips TS types behind a flag; re-exec once with it instead of compiling.
if (!process.features.typescript) {
  const r = spawnSync(process.execPath, ['--experimental-strip-types', '--no-warnings', ...process.argv.slice(1)], { stdio: 'inherit' });
  process.exit(r.status ?? 1);
}

const { mcgillRatios, e1rm, dots, hardSets, torque } = await import('../src/lib/calc.ts');
const near = (a, b, tol) => assert.ok(Math.abs(a - b) <= tol, `${a} not within ${tol} of ${b}`);

// mcgillRatios — plan.md §4 gates: flexor/extensor < 1.0, bridge/extensor ≈ 0.75, L/R within 5%
const pass = mcgillRatios({ flexor: 120, extensor: 150, bridgeL: 110, bridgeR: 108 });
near(pass.flexorExtensor, 0.8, 1e-9);
near(pass.bridgeExtensor, 0.7267, 1e-3);
near(pass.asymmetryPct, 1.818, 1e-2);
assert.deepEqual(pass.gates, { flexorExtensor: true, bridgeExtensor: true, symmetry: true });
const fail = mcgillRatios({ flexor: 160, extensor: 150, bridgeL: 60, bridgeR: 100 });
assert.deepEqual(fail.gates, { flexorExtensor: false, bridgeExtensor: false, symmetry: false });
near(fail.asymmetryPct, 40, 1e-9);

// e1rm — Epley
assert.equal(e1rm(100, 1), 100);
assert.equal(e1rm(100, 10), 100 * (1 + 10 / 30));
near(e1rm(143, 5), 166.83, 0.01); // 315 lb × 5 reps

// dots — official polynomial; 90 kg male with a 700 kg total is ≈ 452, the "around 450" marker in plan.md §4
near(dots(700, 90, 'male'), 452.6, 1);
near(dots(400, 60, 'female'), 443.4, 1);
assert.ok(dots(700, 90, 'female') > dots(700, 90, 'male'));

// hardSets — only axial sets at or above the RPE threshold count, across all sessions
const week = [
  [{ axial: true, rpe: 8 }, { axial: true, rpe: 6 }, { axial: false, rpe: 9 }],
  [{ axial: true, rpe: 7 }, { axial: true, rpe: 7.5 }],
];
assert.equal(hardSets(week), 3);
assert.equal(hardSets(week, 8), 1);
assert.equal(hardSets([]), 0);

// torque — 100 kg at 10 cm ≈ 98.1 N·m; doubling the arm doubles the moment, load constant
near(torque(100, 10), 98.1, 1e-9);
assert.equal(torque(100, 20), 2 * torque(100, 10));
assert.equal(torque(0, 50), 0);

console.log('calc.test: ok');
