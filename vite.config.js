import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/TP_SitioVentas/', // 👈 muy importante para GitHub Pages
  plugins: [react()],
})
