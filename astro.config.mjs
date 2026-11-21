import { defineConfig } from 'astro/config';

export default defineConfig({
  // 배포 주소가 정해지면 바꾸세요. (예: https://taebinchoi.com)
  site: 'https://example.com',
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
});
