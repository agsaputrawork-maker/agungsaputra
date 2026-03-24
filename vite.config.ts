import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
// HAPUS IMPORT: viteSingleFile karena ini mematikan Code Splitting

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  // 1. Hapus viteSingleFile() dari array plugins
  plugins: [react(), tailwindcss()], 
  
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },

  // 2. Tambahkan Optimasi Build (Code Splitting)
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Memisahkan library utama (React Core) dari kode aplikasi Anda
          vendor: ['react', 'react-dom', 'react-router-dom'],
          
          // Memisahkan library UI yang berat (Icons & Animasi)
          ui: ['lucide-react', 'framer-motion'] 
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Supaya tidak muncul warning kuning saat build
  },
});