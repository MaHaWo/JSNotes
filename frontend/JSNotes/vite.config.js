import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import { configDefaults } from "vitest/config";

export default defineConfig({
  plugins: [sveltekit()],
  base: "./", // or your desired base path
  publicDir: "src", // or your desired public directory
  build: {
    outDir: "dist", // or your desired output directory
  },
  server: {
    open: true, // open the browser on server start
  },
  test: {
    globals: true,
    environment: "jsdom",
    exclude: [...configDefaults.exclude, "tests/e2e/*"],
  },
});
