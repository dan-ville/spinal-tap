import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/articles' }),
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

export const collections = { articles };
