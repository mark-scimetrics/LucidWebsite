// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://lucidcashflow.co.uk',
  integrations: [
    mdx(),
    sitemap({
      // Netlify serves these pages without a trailing slash (and 301s the
      // slash form), so list the canonical no-slash URLs.
      serialize: (item) => {
        if (new URL(item.url).pathname !== '/') item.url = item.url.replace(/\/$/, '');
        return item;
      },
    }),
  ],
});
