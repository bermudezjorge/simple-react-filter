import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ViteFonts from "vite-plugin-fonts"
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteFonts({
      google: {
        families: ['Raleway']
      },
    })
  ],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
    ],
  },
})
