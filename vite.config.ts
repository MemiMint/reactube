import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/test/setup.ts",
  },
  resolve: {
    alias: {
      "@modules": "/src/modules",
      "@shared": "/src/modules/shared",
    },
  },
  plugins: [react(), tailwindcss()],
});
