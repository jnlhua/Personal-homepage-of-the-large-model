import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return undefined
          if (id.includes('/react/') || id.includes('/react-dom/')) return 'react'
          if (id.includes('/gsap/') || id.includes('/@gsap/react/')) return 'gsap'
          if (id.includes('/lenis/')) return 'smooth-scroll'
          if (id.includes('/motion')) return 'motion'
          if (id.includes('/three/')) return 'three'
          return 'vendor'
        },
      },
    },
  },
})
