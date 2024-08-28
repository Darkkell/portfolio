import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.dev1992.com/',
  base: '/portfolio',
  integrations: [tailwind({
    nesting:true,
  })]
});
