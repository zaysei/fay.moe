import { defineConfig } from 'astro/config';
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: 'https://fay.moe',
  integrations: [preact()]
});