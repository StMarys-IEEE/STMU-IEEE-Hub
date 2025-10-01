import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/STMU-IEEE-Hub/' : '/',
  build: {
    outDir: 'dist',
  },
  server: {
    port: 5173,
    open: true
  }
})


