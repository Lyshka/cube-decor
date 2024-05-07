import { defineConfig } from "vite";
import injectHTML from "vite-plugin-html-inject";
import { resolve } from "path";

export default defineConfig({
  plugins: [injectHTML()],
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
        thank: resolve(__dirname, "thank.html"),
      },
    },
  },
});
