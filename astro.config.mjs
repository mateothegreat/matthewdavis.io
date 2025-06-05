// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  image: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.amazonaws.com"
      },
      {
        protocol: "https",
        hostname: "www.notion.so"
      }
    ]
  }
});
