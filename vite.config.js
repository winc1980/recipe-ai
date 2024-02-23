import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://winc1980.github.io/recipe-ai/',
  plugins: [vue()],
});
