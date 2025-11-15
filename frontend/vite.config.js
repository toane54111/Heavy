import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      // Chỉ xử lý CSS từ src, không xử lý CSS từ node_modules
      exclude: /node_modules/,
    },
  },
  server: {
    proxy: {
      '/api/timetable': {
        target: 'http://localhost:8000',
        changeOrigin: true,
      }
    }
  }
})
