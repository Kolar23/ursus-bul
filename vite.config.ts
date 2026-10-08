import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";

const githubPages = process.env.GITHUB_PAGES === "true";
const basePath = githubPages ? "/ursus-bul" : "";

export default defineConfig({
  base: `${basePath}/`,
  plugins: [
    tsConfigPaths(),
    tailwindcss(),
    tanstackStart({
      router: { basepath: basePath || undefined },
      server: { entry: "server" },
      prerender: { enabled: true, crawlLinks: true },
      sitemap: { enabled: false },
    }),
    viteReact(),
  ],
});
