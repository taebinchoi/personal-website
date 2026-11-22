import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://taebinchoi.com',
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
});
