// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  // Your live address. Used for link previews (LinkedIn, WhatsApp, X) and the sitemap.
  // If you move to your own domain later, change it here.
  site: "https://chisomlewise.vercel.app",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
