import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "@svgr/rollup";

export default defineConfig({
  plugins: [svgr(), react()],

  base: "/website_portfolio/",
  server: {
    proxy: {
      "/api/velog/rss": {
        target: "https://v2.velog.io",
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/api\/velog\/rss$/, "/rss/@int_1sy"),
      },
    },
  },
});
