import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://partner-revenue-labs.pages.dev",
  integrations: [sitemap()],
  build: { inlineStylesheets: "auto" },
});