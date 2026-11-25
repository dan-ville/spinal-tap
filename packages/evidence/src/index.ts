// @freeweights/evidence: the record format, loader and checks for evidence/sources/*.yml.
export * from './schema.ts';
export { findRepoRoot, loadRecords, SOURCES_DIR, type LoadResult, type Problem } from './load.ts';
export { citationsIn, citedIn, markdownCitations, mdxCitations, scanCitations, stripCode, CITATION_ROOTS } from './citations.ts';
export { rewriteCitedIn } from './cited-in.ts';
export { checkEvidence, type CheckResult } from './check.ts';
export { doiAudit, titleSimilarity, needsAction, type DoiAuditRow } from './doi-audit.ts';
export { oaLookup, type OaRow } from './oa-lookup.ts';
