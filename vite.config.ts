// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/yalla/',
  build: {
    rollupOptions: {
      // Add any needed external modules here
    },
  },
});