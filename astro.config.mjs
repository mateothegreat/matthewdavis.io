import { rehypeHeadingIds } from "@astrojs/markdown-remark";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/static";
import { pluginCollapsibleSections } from "@expressive-code/plugin-collapsible-sections";
import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers";
import sectionize from '@hbsnow/rehype-sectionize';
import astroExpressiveCode from "astro-expressive-code";
import { defineConfig } from 'astro/config';
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis';
import remarkToc from 'remark-toc';


/** @type {import('astro').AstroUserConfig} */
export default defineConfig({
  site: "https://matthewdavis.io",
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
  markdown: {
    // Applied to .md and .mdx files
    remarkPlugins: [ [remarkToc, { heading: "contents"} ] ],
    rehypePlugins: [sectionize,rehypeHeadingIds,rehypeAccessibleEmojis],
    
  },
  output: "static",
  adapter: vercel(),
  vite: {
    logLevel: "info",
    ssr: {
      noExternal: ["astro-imagetools", "astro-imagetools/components"]
    },
    resolve: {
      extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.astro'] // Ensure .astro files are recognized
    },
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