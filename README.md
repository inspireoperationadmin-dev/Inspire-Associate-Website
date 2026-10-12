# Inspire Associates website

React + Vite + Tailwind CSS v4, **prerendered to static HTML** for SEO.

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Dev server (client-side rendering, hot reload) |
| `npm run build` | Production build **with prerendering** (use this to deploy) |
| `npm run build:spa` | Plain client-side build, no prerendering (for debugging) |
| `npm run serve` | Preview the production build locally |
| `npm run typecheck` | TypeScript check |

## How prerendering works

`npm run build` runs three steps:

1. `vite build` creates the browser bundle in `dist/`.
2. `vite build --ssr src/entry-server.tsx` creates a temporary server bundle in `dist-ssr/`.
3. `scripts/prerender.mjs` renders the page to HTML, writes it into `dist/index.html`, and creates
   `dist/404.html` (marked `noindex`). The server bundle is then deleted.

Search engines and visitors get the full page content immediately; React then "hydrates" it in the browser.

Rules for keeping prerendering working:

- Don't read `window`, `document`, or `localStorage` while a component renders. Use `useEffect`.
- Content must be visible in the first render. Scroll animations go through `<Reveal>` (it only hides
  content after hydration), never an initial `opacity: 0`.
- When adding a new route, add it to `scripts/prerender.mjs` and `public/sitemap.xml`.

## Deploy

Build command: `npm run build` — publish the `dist/` folder.
If you serve it with `npm run serve`, build first.

## Environment

Copy `.env.example` to `.env` and add your EmailJS keys. The contact form needs them.
