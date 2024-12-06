import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'ui-essentials-react-docs': 'ui-essentials-react-docs',
    },
    dedupe: ['react', 'react-dom'],
  },
  server: {
    port: 8847,
    open: true,
    hmr: true,
    watch: {
      usePolling: true, // Enables polling for file changes
      interval: 100, // Polling interval in milliseconds
    },
  },
});
