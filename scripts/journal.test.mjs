// Assert-based self-check for src/lib/journal.ts. Run: node scripts/journal.test.mjs
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';

if (!process.features.typescript) {
  const r = spawnSync(process.execPath, ['--experimental-strip-types', '--no-warnings', ...process.argv.slice(1)], { stdio: 'inherit' });
  process.exit(r.status ?? 1);
}

const { toEntry, parseJournal, upsertEntry, deleteEntry, newestFirst, streak, makeBackup, readBackup } = await import('../src/lib/journal.ts');

// form values coerce; blanks become null; bad dates are rejected
const e = toEntry({ date: '2026-10-20', stiffness: '3', belowGlute: 'no', sleep: '7.5', stress: '', bodyweight: '92', walk: '30', note: '  fine ' });
assert.deepEqual(e, { date: '2026-10-20', stiffness: 3, belowGlute: false, sleep: 7.5, stress: null, bodyweight: 92, walk: 30, note: 'fine' });
assert.equal(toEntry({ date: '20/10/2026' }), null);

// parse drops junk; upsert replaces same day; delete removes
assert.deepEqual(parseJournal('not json'), {});
let j = parseJournal(JSON.stringify({ x: e, y: { date: 'nope' }, z: null }));
assert.deepEqual(Object.keys(j), ['2026-10-20']);
j = upsertEntry(j, { ...e, stiffness: 5 });
assert.equal(j['2026-10-20'].stiffness, 5);
j = upsertEntry(j, { ...e, date: '2026-10-18' });
assert.deepEqual(newestFirst(j).map((x) => x.date), ['2026-10-20', '2026-10-18']);
assert.deepEqual(Object.keys(deleteEntry(j, '2026-10-18')), ['2026-10-20']);

// streak: counts back from today, or from yesterday when today is not logged yet
const day = (d) => ({ ...e, date: d });
const run = { '2026-10-19': day('2026-10-19'), '2026-10-20': day('2026-10-20'), '2026-10-17': day('2026-10-17') };
assert.equal(streak(run, new Date(2026, 9, 20, 9)), 2);
assert.equal(streak(run, new Date(2026, 9, 21, 9)), 2);
assert.equal(streak(run, new Date(2026, 9, 22, 9)), 0);
assert.equal(streak({}, new Date(2026, 9, 22, 9)), 0);

// backup keeps site data only and round-trips; foreign files restore nothing
const b = makeBackup([['journal', '{}'], ['gate:p1-x', '1'], ['notes:anatomy/disc', 'hi'], ['theme', 'dark'], ['recall', '{}'], ['other', 'x']]);
assert.deepEqual(Object.keys(b.data).sort(), ['gate:p1-x', 'journal', 'notes:anatomy/disc', 'recall']);
assert.deepEqual(readBackup(JSON.stringify(b)).length, 4);
assert.deepEqual(readBackup('{"data":{"journal":"{}"}}'), []);
assert.deepEqual(readBackup('nope'), []);

console.log('journal: all assertions passed');
