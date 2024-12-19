import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 5174, // Ganti dengan port yang diinginkan
  },
  plugins: [react()],
});
