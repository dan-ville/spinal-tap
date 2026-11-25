// Assert-based self-check for src/lib/recall.ts. Run: node scripts/recall.test.mjs
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';

if (!process.features.typescript) {
  const r = spawnSync(process.execPath, ['--experimental-strip-types', '--no-warnings', ...process.argv.slice(1)], { stdio: 'inherit' });
  process.exit(r.status ?? 1);
}

const { parseRecords, mergeRecord, serialise, importRecords } = await import('../src/lib/recall.ts');
const t0 = new Date('2026-10-20T10:00:00Z');

// new record
let set = mergeRecord({}, { id: 'a-1', confidence: 'low', grade: 'incorrect' }, t0);
assert.equal(set['a-1'].grade, 'incorrect');
assert.ok(Date.parse(set['a-1'].due) > t0.getTime());
assert.equal(set['a-1'].card.reps, 1);

// repeat review overwrites; other ids untouched
const t1 = new Date('2026-10-22T10:00:00Z');
set = mergeRecord(set, { id: 'b-1', grade: 'correct' }, t0);
set = mergeRecord(set, { id: 'a-1', confidence: 'high', grade: 'correct' }, t1);
assert.equal(Object.keys(set).length, 2);
assert.equal(set['a-1'].confidence, 'high');
assert.equal(set['a-1'].card.reps, 2); // card state carried over from the first review
assert.ok(Date.parse(set['a-1'].due) > t1.getTime());
assert.equal(set['b-1'].confidence, null);

// import: replace vs merge (newest reviewedAt wins)
const older = mergeRecord({}, { id: 'a-1', grade: 'incorrect' }, t0);
assert.deepEqual(Object.keys(importRecords(set, older, 'replace')), ['a-1']);
const merged = importRecords(set, { ...older, 'c-1': mergeRecord({}, { id: 'c-1', grade: 'correct' }, t0)['c-1'] }, 'merge');
assert.equal(merged['a-1'].reviewedAt, t1.toISOString());
assert.equal(Object.keys(merged).length, 3);

// serialise → parse round-trips
assert.deepEqual(parseRecords(serialise(set)), set);

// unknown keys ignored, malformed records and blobs dropped
const parsed = parseRecords(JSON.stringify({ 'a-1': { ...set['a-1'], foo: 1, streak: 9 }, junk: { id: 'x' }, nope: 3 }));
assert.deepEqual(Object.keys(parsed), ['a-1']);
assert.deepEqual(parsed['a-1'], set['a-1']);
assert.deepEqual(parseRecords(null), {});
assert.deepEqual(parseRecords('not json'), {});
assert.deepEqual(parseRecords('[1,2]'), {});

console.log('recall.test: ok');
