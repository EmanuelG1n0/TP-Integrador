<<<<<<< HEAD
// vite.config.js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  define: {
    'process.env.BASE_URL': JSON.stringify('/'), // Define la variable BASE_URL
  },
});
=======
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    port: 8000,
    proxy: {
      '/api': {
        target: 'http://localhost:8001', // URL de tu backend
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
});
>>>>>>> EmanuelG1n0
