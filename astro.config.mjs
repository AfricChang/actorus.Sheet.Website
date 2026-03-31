import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const site = process.env.PUBLIC_SITE_URL ?? "https://africchang.github.io";
const base = process.env.PUBLIC_SITE_BASE ?? "/actorus.Sheet.Website";

export default defineConfig({
  site,
  base,
  output: "static",
  trailingSlash: "always",
  integrations: [sitemap()],
});
