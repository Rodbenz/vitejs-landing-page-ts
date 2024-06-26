import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/web-page/",
  build: {
    chunkSizeWarningLimit: 3000,
    // minify: "terser",
  },
  // esbuild: {
  //   drop: ['console', 'debugger'],
  // },
})
