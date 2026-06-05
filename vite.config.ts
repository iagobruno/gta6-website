import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/gta6-website/',
  plugins: [tailwindcss()],
});
