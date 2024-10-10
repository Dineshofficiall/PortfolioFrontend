import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Specify the port for the development server
  },
  build: {
    outDir: 'dist', // Output directory for built files
    rollupOptions: {
      external: ['some-external-library'], // List of external libraries (if any)
    },
  },
  resolve: {
    alias: {
      '@': '/src', // Alias for the src directory
    },
  },
});
