// Finds legal open-access full texts for records not yet read in full, through OpenAlex (which also
// powers Unpaywall). A hit means a researcher can read the paper and upgrade the record's read_level.
// Read-only: it reports and never edits records.
import type { EvidenceRecord } from './schema.ts';
import { encodePath, getJson, paced } from './net.ts';

export interface OaRow {
  id: string;
  read_level: string;
  status: 'open' | 'closed' | 'not-found' | 'error' | 'no-identifier';
  oaStatus: string | null;
  pmcid: string | null;
  url: string | null;
  pdfUrl: string | null;
  licence: string | null;
  version: string | null;
}

interface OpenAlexWork {
  ids?: { pmcid?: string };
  open_access?: { is_oa?: boolean; oa_status?: string; oa_url?: string | null };
  best_oa_location?: {
    pdf_url?: string | null;
    landing_page_url?: string | null;
    license?: string | null;
    version?: string | null;
  } | null;
}

export function oaRow(record: EvidenceRecord, work: OpenAlexWork): OaRow {
  const best = work.best_oa_location ?? null;
  const pmcid = work.ids?.pmcid?.replace(/^https?:\/\/[^/]+\/pmc\/articles\//, '').replace(/\/$/, '') ?? null;
  const open = Boolean(work.open_access?.is_oa);
  return {
    id: record.id,
    read_level: record.read_level,
    status: open ? 'open' : 'closed',
    oaStatus: work.open_access?.oa_status ?? null,
    pmcid,
    url: open ? (work.open_access?.oa_url ?? best?.landing_page_url ?? null) : null,
    pdfUrl: best?.pdf_url ?? null,
    licence: best?.license ?? null,
    version: best?.version ?? null,
  };
}

const FIELDS = 'ids,open_access,best_oa_location';

export async function oaLookup(
  records: EvidenceRecord[],
  onProgress?: (done: number, total: number) => void,
): Promise<OaRow[]> {
  // Single-work lookups are free on OpenAlex; 10 a second is far inside its limit.
  return paced(records, 100, async (record, i) => {
    onProgress?.(i + 1, records.length);
    const base = { id: record.id, read_level: record.read_level, oaStatus: null, pmcid: null, url: null, pdfUrl: null, licence: null, version: null };
    const key = record.doi ? `doi:${record.doi}` : record.pmid ? `pmid:${record.pmid}` : null;
    if (!key) return { ...base, status: 'no-identifier' as const };
    try {
      const res = await getJson(`https://api.openalex.org/works/${encodePath(key)}?select=${FIELDS}`);
      if (res.status === 404) return { ...base, status: 'not-found' as const };
      if (!res.json) return { ...base, status: 'error' as const };
      return oaRow(record, res.json as OpenAlexWork);
    } catch {
      return { ...base, status: 'error' as const };
    }
  });
}
