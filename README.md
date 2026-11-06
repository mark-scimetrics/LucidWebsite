# Lucid Website

Marketing site for Lucid Cashflow (lucidcashflow.co.uk). Astro, static output, deployed on Netlify.

## Commands

- `npm install`
- `npm run dev` — local dev server
- `npm run build` — static build to `dist/`
- `npm run preview` — serve the built site locally
- `npm run check` — Astro/TypeScript diagnostics

## Structure

- `src/pages/` — marketing pages
- `src/layouts/`, `src/components/` — shared shell (header, footer, …)
- `src/styles/brand.css` — brand tokens (colours, fonts, shape)
- `src/styles/site.css` — layout and component styles
- `src/consts.ts` — site URL, app URL, shared links
- `src/content/guides/` — guide articles as MDX, with frontmatter for the answer
  box, FAQs and related links (`src/content.config.ts` defines the schema)
- `public/` — favicons, logos, demo video

## Deploy

Netlify builds `npm run build` and publishes `dist/`. Redirects and headers live in `netlify.toml`.
