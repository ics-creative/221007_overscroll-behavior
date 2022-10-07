import {defineConfig} from "vite";

export default defineConfig({
  base: "./",
  build: {
    outDir: "docs",
    minify: false,
    emptyOutDir: true,
  },
});
