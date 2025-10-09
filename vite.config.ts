import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react-swc";
import viteSvgr from "vite-plugin-svgr";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), viteSvgr(), tailwindcss()],
  build: {
    outDir: "build",
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
  server: {
    port: 3000,
  },
});
