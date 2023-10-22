import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': '/src/components',
      '@layouts': '/src/components/layouts',
      '@forms': '/src/components/forms',
      '@assets': '/src/assets',
      '@hooks': '/src/hooks',
      '@services': '/src/services',
      '@lib': '/src/lib',
      '@router': '/src/router',
      '@web': '/src/pages/web',
      '@dashboard': '/src/pages/dashboard',
      '@auth': '/src/auth',
      '@context': '/src/context',
      '@utils': '/src/utils',
      '@dto': '/src/dto'
    }
  }
})
