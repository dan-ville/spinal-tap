// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  integrations: [mdx()],
  // /review/ was the spaced-review queue; its data export moved to /settings/.
  redirects: { '/review/': '/settings/' },
});
