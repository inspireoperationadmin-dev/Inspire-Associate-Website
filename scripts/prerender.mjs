// Prerenders the app to static HTML so search engines (and visitors on slow connections)
// receive the full page content without needing to run JavaScript.
//
// Runs automatically as part of `npm run build`:
//   1. vite build                                 -> dist/            (browser bundle)
//   2. vite build --ssr src/entry-server.tsx      -> dist-ssr/        (server bundle)
//   3. node scripts/prerender.mjs                 -> injects HTML into dist/index.html (+ 404.html)

import { readFile, writeFile, rm } from "node:fs/promises";
import { pathToFileURL } from "node:url";
import path from "node:path";

const root = process.cwd();
const dist = path.join(root, "dist");
const ssrDir = path.join(root, "dist-ssr");

const template = await readFile(path.join(dist, "index.html"), "utf8");
const MARKER = '<div id="root"></div>';
if (!template.includes(MARKER)) {
  throw new Error(`Prerender: could not find ${MARKER} in dist/index.html`);
}

const { render } = await import(pathToFileURL(path.join(ssrDir, "entry-server.js")).href);

function inject(html) {
  return template.replace(MARKER, `<div id="root">${html}</div>`);
}

// --- Home page
const home = render("/");
if (!home.includes("<h1")) throw new Error("Prerender: home page rendered without an <h1>");
await writeFile(path.join(dist, "index.html"), inject(home));

// --- 404 page (for hosts that serve /404.html). Must never be indexed.
let notFound = inject(render("/404-not-found"))
  .replace(/<title>[\s\S]*?<\/title>/, "<title>Page not found | Inspire Associates</title>")
  .replace(/<meta\s+name="robots"[^>]*>/, '<meta name="robots" content="noindex, nofollow" />')
  .replace(/<link\s+rel="canonical"[^>]*>/, "");
await writeFile(path.join(dist, "404.html"), notFound);

await rm(ssrDir, { recursive: true, force: true });

const kb = (Buffer.byteLength(home) / 1024).toFixed(1);
console.log(`Prerendered / (${kb} kB of HTML) and 404.html`);
