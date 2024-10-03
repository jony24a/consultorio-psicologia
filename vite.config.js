import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Permite usar '@' como alias para 'src'
    },
  },
  server: {
    port: 3000, // Cambia el puerto si lo necesitas
  },
  build: {
    outDir: 'dist', // Directorio de salida para la build
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/variables.scss";`, // Si usas SCSS, puedes incluir variables globales
      },
    },
  },
});
