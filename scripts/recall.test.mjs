// Assert-based self-check for src/lib/recall.ts. Run: node scripts/recall.test.mjs
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';

if (!process.features.typescript) {
  const r = spawnSync(process.execPath, ['--experimental-strip-types', '--no-warnings', ...process.argv.slice(1)], { stdio: 'inherit' });
  process.exit(r.status ?? 1);
}

const { parseRecords, mergeRecord, serialise, schedule } = await import('../src/lib/recall.ts');
const t0 = new Date('2026-10-20T10:00:00Z');

// new record
let set = mergeRecord({}, { id: 'a-1', confidence: 'low', grade: 'incorrect' }, t0);
assert.deepEqual(set['a-1'], { id: 'a-1', confidence: 'low', grade: 'incorrect', reviewedAt: t0.toISOString(), due: '2026-10-21T10:00:00.000Z' });

// repeat review overwrites; other ids untouched
const t1 = new Date('2026-10-22T10:00:00Z');
set = mergeRecord(set, { id: 'b-1', grade: 'correct' }, t0);
set = mergeRecord(set, { id: 'a-1', confidence: 'high', grade: 'correct' }, t1);
assert.equal(Object.keys(set).length, 2);
assert.deepEqual(set['a-1'], { id: 'a-1', confidence: 'high', grade: 'correct', reviewedAt: t1.toISOString(), due: '2026-10-25T10:00:00.000Z' });
assert.equal(set['b-1'].confidence, null);
assert.equal(schedule('correct', t0), '2026-10-23T10:00:00.000Z');

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
