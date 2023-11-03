import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  root: 'web',
  base: process.env.IS_DEV !== 'true' ? './' : '/',
  build: {
    outDir: '../dist',
  },
});
