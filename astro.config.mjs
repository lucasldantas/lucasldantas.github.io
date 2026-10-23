import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://lucasldantas.github.io',
  output: 'static',
  prefetch: true,
  integrations: [sitemap()],
  build: {
    format: 'directory'
  }
});
