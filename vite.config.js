import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Illiaz_construciton/',
  server: {
    host: '0.0.0.0',
    port: 5000,
    allowedHosts: true,
  },
})
