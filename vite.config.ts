import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import sitemap from 'vite-plugin-sitemap'; // <-- 1. Import the plugin

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    sitemap({ // <-- 2. Add the sitemap plugin
      hostname: 'https://www.gradientlounge.com', // 3. Your full website address
      dynamicRoutes: [
        '/',
        '/experts', // 4. The /experts page you asked for

        // --- IMPORTANT ---
        // Edit this list to match all your real pages
        '/about',
        '/contact',
        '/services',
        '/faq',
        
      ]
    })
  ],
  optimizeDeps: {
    exclude: ['lucide-react'], // <-- 5. Kept your existing config
  },
});