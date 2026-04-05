import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({  
  // التعديل هنا: نضمن أن Vercel دائماً يستخدم المسار الرئيسي
  base: process.env.VERCEL || mode === 'production' ? '/' : '/', 
  // ملاحظة: إذا كنت ستعود لـ GitHub Pages لاحقاً، اجعلها '/a-eltyeb-portfolio/'
  
  server: {
    host: "::",
    port: 8080,
  },
  // ... بقية الكود كما هو
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
