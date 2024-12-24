import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import { nodePolyfills } from 'vite-plugin-node-polyfills'
// import sass from 'sass'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    nodePolyfills(),
    react(), 
    tsconfigPaths(), 
  ],
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: ["legacy-js-api"],
      },
    },
  },
})
