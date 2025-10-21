import { defineConfig } from "vitest/config";
import path from "path";
export default defineConfig({
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./setupTests.ts"],
    css: true,
    coverage: {
      reporter: ["text", "html"],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./app"),
      "@components": path.resolve(__dirname, "./app/components"),
      "@assets": path.resolve(__dirname, "./app/assets"),
      "@utils": path.resolve(__dirname, "./app/utils"),
      "@services": path.resolve(__dirname, "./app/services"),
    },
  },
});
