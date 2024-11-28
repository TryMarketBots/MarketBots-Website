import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    strictPort: true,
    host: true,
    proxy: {
      '/privacy': {
        target: 'http://localhost:5173',
        changeOrigin: true,
        rewrite: () => '/',
      },
      '/terms': {
        target: 'http://localhost:5173',
        changeOrigin: true,
        rewrite: () => '/',
      },
    },
  },
  preview: {
    port: 5173,
    strictPort: true,
    host: true,
  },
  optimizeDeps: {
    exclude: ['fsevents']
  }
});