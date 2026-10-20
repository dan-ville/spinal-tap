import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: ['**/*.mdx', '!_template.mdx'], base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    track: z.enum([
      'anatomy',
      'biomechanics',
      'pain-science',
      'pathology',
      'rehab',
      'training-science',
      'self-coaching',
    ]),
    order: z.number(),
    kc: z.enum(['fact', 'concept', 'skill']),
    summary: z.string(),
    sources: z.array(z.string()).min(1),
    status: z.enum(['draft', 'published']),
  }),
});

const evidence = defineCollection({
  loader: glob({ pattern: '*.mdx', base: './src/content/evidence' }),
  schema: z.object({
    source: z.string(), // id in sources.yml; check-sources.mjs enforces existence + tier B
    claim: z.string(),
    design: z.string(),
    population: z.string(),
    effect: z.string(),
    certainty: z.enum(['high', 'moderate', 'low', 'very-low']),
    caveats: z.string(),
  }),
});

export const collections = { articles, evidence };
