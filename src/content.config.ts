import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const guides = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/guides' }),
  schema: z.object({
    /** <title> / og:title */
    metaTitle: z.string(),
    /** On-page h1 */
    title: z.string(),
    description: z.string(),
    published: z.string(),
    updatedLabel: z.string(),
    authorByline: z.string(),
    /** Card label on the guides index */
    tag: z.string(),
    /** Card description on the guides index */
    blurb: z.string(),
    /** Index ordering, low to high */
    order: z.number(),
    shortAnswer: z.string(),
    faqs: z.array(z.object({ q: z.string(), a: z.string() })),
    /** Slugs of related guides, rendered under "Keep reading" */
    related: z.array(z.string()),
  }),
});

export const collections = { guides };
