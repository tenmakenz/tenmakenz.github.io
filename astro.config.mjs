import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://tenmakenz.github.io',
  vite: {
    plugins: [tailwindcss()],
  },
});
