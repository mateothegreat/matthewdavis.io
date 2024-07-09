import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import { pluginCollapsibleSections } from "@expressive-code/plugin-collapsible-sections";
import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers";
import astroExpressiveCode from "astro-expressive-code";
import { defineConfig } from "astro/config";

import vercel from "@astrojs/vercel/static";
/** @type {import('astro').AstroUserConfig} */
export default defineConfig({
  site: "https://matthewdavis.io",
  renderers: ["@astrojs/renderer-svelte"],
  devToolbar: {
    enabled: false
  },
  integrations: [
    sitemap(),
    svelte(),
    tailwind({
      applyBaseStyles: false
    }),
    astroExpressiveCode({
      themes: ["dracula", "solarized-light"],
      defaultTheme: "solarized-light",
      defaultProps: {
        frame: "terminal",
        wrap: true,
        preserveIndent: true
      },
      plugins: [
        pluginLineNumbers(),
        pluginCollapsibleSections()
      ]
    }),
    mdx()
  ],
  output: "static",
  adapter: vercel(),
  vite: {
    logLevel: "info",
    define: {
      __DATE__: `'${new Date().toISOString()}'`
    },
    server: {
      fs: {
        // Allow serving files from hoisted root node_modules
        allow: ["../.."]
      }
    }
  }
});
