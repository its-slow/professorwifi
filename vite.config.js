import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: '.',
    emptyOutDir: false,
  },
  server: {
    port: 5173,
  },
  preview: {
    port: 4173,
    host: '0.0.0.0',
  },
});
