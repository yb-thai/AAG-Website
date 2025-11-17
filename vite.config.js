// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // ⬇️ Change "AAG-Website" to your repo name if different
  base: "/AAG-Website/",
});
