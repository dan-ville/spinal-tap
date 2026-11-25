// Small, polite HTTP helpers shared by the networked checks. No API keys are read here: where a key
// is needed (OpenAlex), the environment's network proxy adds it, and every call also works without.

const USER_AGENT = 'evidence-checker/0.1 (open-source evidence base audit)';

export const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export interface Fetched {
  status: number;
  json?: unknown;
}

/** GET a JSON URL, retrying rate limits and server errors with backoff. Never throws on HTTP status. */
export async function getJson(url: string, tries = 4): Promise<Fetched> {
  let wait = 2000;
  for (let attempt = 1; ; attempt++) {
    let res: Response;
    try {
      res = await fetch(url, { headers: { 'User-Agent': USER_AGENT, Accept: 'application/json' } });
    } catch (e) {
      if (attempt >= tries) throw e;
      await sleep(wait);
      wait *= 2;
      continue;
    }
    if ((res.status === 429 || res.status >= 500) && attempt < tries) {
      const retryAfter = Number(res.headers.get('retry-after'));
      await sleep(Number.isFinite(retryAfter) && retryAfter > 0 ? retryAfter * 1000 : wait);
      wait *= 2;
      continue;
    }
    if (!res.ok) return { status: res.status };
    return { status: res.status, json: await res.json() };
  }
}

/** Runs `fn` over items one at a time, at most one start per `gapMs`. */
export async function paced<T, R>(items: T[], gapMs: number, fn: (item: T, i: number) => Promise<R>): Promise<R[]> {
  const out: R[] = [];
  for (let i = 0; i < items.length; i++) {
    const started = Date.now();
    out.push(await fn(items[i], i));
    const left = gapMs - (Date.now() - started);
    if (left > 0 && i < items.length - 1) await sleep(left);
  }
  return out;
}

/** Encodes a DOI or `doi:`/`pmid:` key for a URL path, keeping its slashes and colon readable. */
export const encodePath = (s: string) => encodeURIComponent(s).replace(/%2F/gi, '/').replace(/%3A/gi, ':');
