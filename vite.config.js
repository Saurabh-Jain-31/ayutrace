import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Ayu-Trace/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
