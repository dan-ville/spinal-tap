// The evidence record format, as described in evidence/README.md. One record per source.
// Records are strict: an unknown key is an error, so a typo cannot silently drop a field.
import { z } from 'zod';

export const DESIGNS = [
  // studies
  'meta-analysis',
  'umbrella-review',
  'systematic-review',
  'rct',
  'crossover',
  'cohort',
  'cross-sectional',
  'mechanistic',
  'narrative-review',
  'consensus',
  'preprint',
  // sources that are not studies (added for Spinal Tap's registry, phase 2)
  'guideline',
  'textbook',
  'dataset',
  'media',
  'other',
] as const;

export const READ_LEVELS = ['full-text', 'abstract', 'secondary'] as const;

/** This project's verdict on a claim. Written criteria: research/METHODS.md (issue #6). */
export const GRADES = ['established', 'promising', 'contested', 'speculative', 'convention'] as const;

/** GRADE certainty, only when the source itself reports it (a guideline, a Cochrane review). */
export const CERTAINTIES = ['high', 'moderate', 'low', 'very-low'] as const;

/** What an app may do with the source's own text and figures. Replaces Spinal Tap's tiers A/B/C. */
export const REUSE = ['copy', 'summarise', 'link'] as const;

export const ID_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const DOI_PATTERN = /^10\.\d{4,9}\/\S+$/;
const TOPIC_PATTERN = /^[a-z0-9-]+\/[a-z0-9-]+$/;
const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;

// YAML parsers differ on whether 2026-11-24 is a string or a date; accept both, store the string.
const isoDate = z.preprocess(
  (v) => (v instanceof Date ? v.toISOString().slice(0, 10) : v),
  z.string().regex(DATE_PATTERN, 'expected YYYY-MM-DD'),
);

const text = z.string().trim().min(1);

export const findingSchema = z
  .object({
    claim: text,
    effect: z.string(),
    grade: z.enum(GRADES),
    certainty: z.enum(CERTAINTIES).optional(),
    caveats: z.string().optional(),
  })
  .strict();

export const recordSchema = z
  .object({
    id: z.string().regex(ID_PATTERN, 'ids are lowercase words joined by hyphens'),
    title: text,
    authors: z.array(text).min(1),
    year: z.number().int().min(1800).max(2100),
    venue: text,
    doi: z.string().regex(DOI_PATTERN, 'a DOI starts with 10.').nullable(),
    pmid: z.string().regex(/^\d+$/, 'a PubMed ID is digits').nullable(),
    url: z.string().url(),
    design: z.enum(DESIGNS),
    population: z.string(),
    sample: z
      .object({
        studies: z.number().int().nonnegative().nullable(),
        participants: z.number().int().nonnegative().nullable(),
      })
      .strict(),
    read_level: z.enum(READ_LEVELS),
    licence: z
      .object({ spdx: text, reuse: z.enum(REUSE) })
      .strict()
      .optional(),
    findings: z.array(findingSchema).min(1),
    limitations: z.array(z.string()),
    topics: z.array(z.string().regex(TOPIC_PATTERN, 'topics are <area>/<subtopic> slugs')).min(1),
    cited_in: z.array(z.string()),
    checked: z.object({ date: isoDate, by: text, notes: z.string() }).strict(),
  })
  .strict();

export type EvidenceRecord = z.infer<typeof recordSchema>;
export type Finding = z.infer<typeof findingSchema>;
export type Design = (typeof DESIGNS)[number];
export type Grade = (typeof GRADES)[number];
export type ReadLevel = (typeof READ_LEVELS)[number];
