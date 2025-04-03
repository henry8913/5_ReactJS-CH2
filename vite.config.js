
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    allowedHosts: [
      "02c22678-a9c0-4a64-90cb-39c1c21c8cfd-00-1a0f5bxjyf4wf.picard.replit.dev",
    ],
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/tests/setup.js"
  }
});
