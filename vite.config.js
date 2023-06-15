import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      // eslint-disable-next-line no-undef
      jsxRuntime: process.env.USE_CLASSIC === '1' ? 'classic' : 'automatic',
    }),
  ],
  build: {
    sourcemap: true,
    minify: true,
  },
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
})
