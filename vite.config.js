import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    // generate manifest.json in outDir
    manifest: true,
    rollupOptions: {
      // overwrite default .html entry
      input: '/src/main.js',
    },
  },
  define: {
    __VITE_IS_MODERN__: true,
  },
})
