import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';
import { copyFile } from 'node:fs/promises';

// Set SITE_URL only after the canonical deployment hostname is confirmed.
export default defineConfig({
  site: process.env.SITE_URL || undefined,
  output: 'static',
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', { path: 'zh', codes: ['zh-CN'] }],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [mdx(), {
    name: 'localized-static-404',
    hooks: {
      // Pages looks for the closest 404.html, including under /zh/.
      'astro:build:done': async ({ dir }) => {
        await copyFile(new URL('zh/404/index.html', dir), new URL('zh/404.html', dir));
      },
    },
  }],
  vite: { plugins: [tailwindcss()] },
});
