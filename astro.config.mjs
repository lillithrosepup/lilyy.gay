// @ts-check
import { defineConfig, envField } from "astro/config";

import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://lilyy.gay",
  integrations: [sitemap()],
  env: {
    schema: {
      LASTFM_API_KEY: envField.string({
        context: "client",
        access: "public",
        optional: true,
      }),
      LASTFM_USER: envField.string({
        context: "client",
        access: "public",
        default: "imlvnaa",
      }),
    },
  },
});
