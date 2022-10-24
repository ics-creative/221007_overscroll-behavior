import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  base: "./",
  root: "src",
  build: {
    outDir: "../docs",
    minify: false,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        top: resolve(__dirname, "src/index.html"),
        demo01: resolve(__dirname, "src/demo01/index.html"),
        demo02: resolve(__dirname, "src/demo02/index.html"),
        demo03: resolve(__dirname, "src/demo03/index.html"),
        iframe: resolve(__dirname, "src/iframe/iframe.html"),
      },
      output: {
        // JSの出力先
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        // CSSの出力先
        assetFileNames: `assets/[name].[ext]`,
      },
    },
  },
});
