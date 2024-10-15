// vite.config.js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  define: {
    'process.env.BASE_URL': JSON.stringify('/'), // Define la variable BASE_URL
  },
});
