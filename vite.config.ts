import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Thêm base: '/tên-repo/' 
export default defineConfig({
  base: '/sports-club-website/',
  plugins: [react()],
})
