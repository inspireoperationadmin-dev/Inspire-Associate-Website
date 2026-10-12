import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App";
import "@fontsource-variable/plus-jakarta-sans";
import "@fontsource-variable/inter";
import "./index.css";

const root = document.getElementById("root")!;

// In production the HTML is prerendered (see scripts/prerender.mjs), so hydrate it.
// In `npm run dev` the root is empty, so render normally.
if (root.hasChildNodes()) {
  hydrateRoot(root, <App />);
} else {
  createRoot(root).render(<App />);
}
