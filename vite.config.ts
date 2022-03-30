import { fileURLToPath, URL } from 'url'
const {resolve} = require('path')

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  //my code
  build: {
    // generate manifest.json in outDir
    manifest: true,
      // overwrite default .html entry
    outDir: resolve('./dist'),
    assetsDir: '',
    emptyOutDir: true,
    target: 'es2015',
    rollupOptions: {
      input: {
        main: resolve('./src/main.ts'),
      },
      output: {
        chunkFileNames: undefined,
      },
    },
  }
})
