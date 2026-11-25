# Workstream checkpoint: Free Weights

**Updated:** 2026-11-25, end of the session that set up the suite design and phase 1.
**Read first:** [`docs/design/suite.md`](../../../docs/design/suite.md) (accepted design), then the open
issues listed below. This file says where the work stands and what to do next. It does not repeat
the design.

## Goal

Turn this repository into **Free Weights**, an open-source toolkit for evidence-based fitness and
health. It works like TanStack's suite: separate branded apps (Spinal Tap, Meatball Strong, later
ones) on one shared framework (design system, atlas viewer, site structure), one evidence base and
one research method.

## Decisions made with the owner (2026-11-25)

All are recorded in the design doc. In short:

- **Name:** Free Weights. Packages use the `@freeweights/` scope. The repository is still called
  `spinal-tap`; renaming it is the owner's call.
- **Separate apps, no hub.** A thin Free Weights bar across the top of every app links to the others.
- **Each app shows only its own content** and only the evidence its content cites.
- **Meatball Strong is built like Spinal Tap:** a plan document first, then sections of MDX
  articles written from the strength and mobility thesis. It is not a thesis reader.
- **Hosting:** Vercel, on `vercel.app` domains. The owner creates each Vercel project.
- **Research tooling:** OpenAlex (key saved as a network secret on the owner's Default cloud
  environment, sent automatically by the proxy) and Crossref (no key).

## Done

| PR | What |
|---|---|
| #5 | Fixed five evidence-record DOIs that pointed to other papers (looked up from PubMed IDs; confirmed in PubMed, OpenAlex and Crossref). |
| #13 | `docs/design/suite.md`, accepted, with the owner's decisions; root README renamed to Free Weights. |
| #14 | Phase 1 (closes #7): root npm workspace (`packages/*` only), `@freeweights/evidence` (zod 4 schema, loader, citation extraction, CLI `check` / `cite-index` / `doi-audit` / `oa-lookup`, 9 tests), generated `cited_in` (654 records regenerated), a `rantila-2025` YAML fix, CI `evidence` job, weekly `evidence-audit.yml` workflow. |

**Audit results from #14, all 662 records:**
- No DOI points to the wrong paper, and nothing has been retracted.
- 14 papers have published corrections that nobody has read yet.
- 238 of the 453 records not read in full have a legal open-access copy, 108 of them in PubMed
  Central.

## Open issues, in suggested order

| Issue | Phase | State | Notes |
|---|---|---|---|
| #8 | 2: merge Spinal Tap's 51 sources and 24 evidence cards into `evidence/` | **next**, not started | First Spinal Tap change. Spinal Tap joins the workspace here: check that its Vercel install still works. The Astro content loader was deferred from phase 1 to here. |
| #6 | 0: `research/METHODS.md` and the grading rubric | not started | Needs a focused literature pass on GRADE and PRISMA-style reporting first. Independent of #8. |
| #9 | 3: extract `packages/ui`, `packages/atlas`, `packages/kit` from Spinal Tap | blocked by #8 | Includes the Free Weights bar. No visible change to Spinal Tap except the bar. |
| #10 | 4: `apps/meatball-strong`, built like Spinal Tap | blocked by #9 | Plan document first, for the owner to review. |
| #11 | 5: spinal rehab research round under `METHODS.md` | blocked by #6, #8 | Protocol first, for the owner to approve before any search. |
| #12 | Evidence data gaps | items 1–2 can start now | Read the 14 corrections; find DOIs for 8 records; re-read the 238 open-access records. |

## How the owner likes to work

- **Ask before launching big or long-running work:** multi-agent workflows, scheduled research runs,
  anything that spends a lot of usage. Research rounds run as paced, scheduled steps, one at a time,
  so they don't use up a usage window. The owner approves the plan or script first.
- **Small, checked changes ship without asking:** branch, PR, merge once CI is green. Never merge on
  red or missing checks. Decision documents with open questions stay open for review.
- **Work is tracked in GitHub issues.** A known gap becomes an issue, and the PR links it.
- **Keep chat replies short and plain.** Findings go in the repo or in issues, not only in chat.

## Environment notes

- **Node 22.18 or newer.** The packages are TypeScript run directly by Node, with no build step.
  Install with `npm ci` at the root; `npx freeweights-evidence check` is what CI runs.
- **Proxy:** in cloud sessions, Node's `fetch` needs `NODE_USE_ENV_PROXY=1` (Node 22.21 or newer).
  The CLI sets it and re-runs itself when `HTTPS_PROXY` is set.
- **Spinal Tap** is still its own npm project (`apps/spinal-tap`, own lockfile), and its atlas has a
  separate install. Its Vercel project's Root Directory is `apps/spinal-tap`.
- **Branch:** sessions develop on `claude/affectionate-hypatia-newolb`, restarted from `main` after
  each merge.

## Resume

1. Read `docs/design/suite.md` and this file.
2. Check the open issues and PRs; this file may be behind them.
3. Start #8 unless the owner says otherwise, and update this checkpoint when a phase lands.
