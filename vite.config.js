import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/Agency_landing_page/",
  plugins: [tailwindcss()],
});
