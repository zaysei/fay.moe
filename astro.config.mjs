import { defineConfig } from 'astro/config';
import preact from "@astrojs/preact";

import { defineConfig } from 'vite';


// https://astro.build/config
export default defineConfig({
  site: 'https://fay.moe',
  integrations: [preact()],
  resolve: {
    alias: {
      '@scripts': '/src/scripts',
    },
  },
});