import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({  
  // هذا السطر يكتشف إذا كان الموقع مرفوعاً على GitHub Pages أم Netlify تلقائياً
  base: process.env.VITE_BASE_PATH ? "/" : "/a-eltyeb-portfolio/",  
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));  