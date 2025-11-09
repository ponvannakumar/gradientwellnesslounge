import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    // Enable automatic code splitting for better performance
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Split vendor libraries into separate chunks
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) {
              return 'react-vendor';
            }
            if (id.includes('framer-motion') || id.includes('gsap')) {
              return 'animation-vendor';
            }
            if (id.includes('lucide-react')) {
              return 'ui-vendor';
            }
            return 'vendor';
          }
        },
      },
    },
    // Optimize chunk size warnings
    chunkSizeWarningLimit: 1000,
    // Enable CSS code splitting (transparent - doesn't affect appearance)
    cssCodeSplit: true,
    // Remove console and debugger in production (transparent)
    minify: 'esbuild',
    // Optimize CSS
    cssMinify: true,
  },
  // Disable source maps in production for smaller bundle
  css: {
    devSourcemap: false,
  },
});
