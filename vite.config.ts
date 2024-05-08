import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['@emotion/styled'],
  },
});

//https://medium.com/@fael-atom/struggling-with-vite-and-mui-42f3f5e0658d