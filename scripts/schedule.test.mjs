// Assert-based self-check for src/lib/schedule.ts. Run: node scripts/schedule.test.mjs
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';

if (!process.features.typescript) {
  const r = spawnSync(process.execPath, ['--experimental-strip-types', '--no-warnings', ...process.argv.slice(1)], { stdio: 'inherit' });
  process.exit(r.status ?? 1);
}

const { toRating, nextDue, nextCard, dueQueue, recallByDelay } = await import('../src/lib/schedule.ts');
const { mergeRecord } = await import('../src/lib/recall.ts');
const now = new Date('2026-10-20T10:00:00Z');

// correct today → due strictly later than the review time, for every confidence
for (const c of ['low', 'med', 'high', null]) assert.ok(Date.parse(nextDue(null, c, 'correct', now)) > now.getTime(), `conf ${c}`);
// wrong is Again; certain-correct is Easy and gets a longer interval than guessing-correct
assert.equal(toRating('high', 'incorrect'), 1);
assert.ok(Date.parse(nextDue(null, 'high', 'correct', now)) > Date.parse(nextDue(null, 'low', 'correct', now)));
// state carries: second review bumps reps
assert.equal(nextCard(nextCard(null, 'med', 'correct', now), 'med', 'correct', new Date('2026-10-25T10:00Z')).reps, 2);

// due queue: confidently-wrong ahead of unconfident-wrong ahead of correct; not-yet-due excluded; corrupt skipped
const past = new Date('2026-10-01T10:00:00Z');
let set = mergeRecord({}, { id: 'guess-wrong', confidence: 'low', grade: 'incorrect' }, past);
set = mergeRecord(set, { id: 'sure-wrong', confidence: 'high', grade: 'incorrect' }, past);
set = mergeRecord(set, { id: 'right', confidence: 'high', grade: 'correct' }, past);
set = mergeRecord(set, { id: 'later', confidence: 'high', grade: 'correct' }, now); // due in the future
set.corrupt = { id: 'corrupt', grade: 'incorrect', due: 'not a date' };
set.junk = { foo: 1 };
assert.deepEqual(dueQueue(set, now).map((r) => r.id), ['sure-wrong', 'guess-wrong', 'right']);
assert.deepEqual(dueQueue(null, now), []);
assert.deepEqual(dueQueue({ x: null, y: 'str' }, now), []);

// delayed recall buckets count by elapsed days at the last review
const stats = recallByDelay(set);
assert.equal(stats.reduce((n, b) => n + b.total, 0), 4);
assert.equal(stats[0].label, 'same day');

console.log('schedule.test: ok');
