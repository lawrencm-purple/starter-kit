import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as tailwindcss from 'tailwindcss'
import * as autoprefixer from 'autoprefixer'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        tailwindcss,
        autoprefixer,
      ],
    }
  }
})
