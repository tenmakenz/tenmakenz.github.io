import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://raphaelblessing.fr',
  vite: {
    plugins: [tailwindcss()],
  },
});
