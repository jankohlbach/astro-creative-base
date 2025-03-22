// @ts-check
import { defineConfig } from 'astro/config';

import robotsTxt from 'astro-robots-txt';
import sitemap from '@astrojs/sitemap';
import glsl from 'vite-plugin-glsl'

// https://astro.build/config
export default defineConfig({
  // TODO: change to final domain
  site: 'https://astro-creative-base.vercel.app',
  integrations: [
    robotsTxt({
      sitemapBaseFileName: 'sitemap-index',
      // TODO: remove when going live
      // policy: [
      //   {
      //     userAgent: '*',
      //     disallow: '/',
      //   },
      // ],
    }),
    sitemap(),
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "/src/styles/functions" as *; @use "/src/styles/mixins" as *;',
        },
      },
    },
    plugins: [glsl()],
  }
});
