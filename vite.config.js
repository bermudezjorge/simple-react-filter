import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ViteFonts from "vite-plugin-fonts"
import path from 'path'

const Fonts = () => ViteFonts({
  google: {
    families: [
      {
        name: 'Raleway',
        styles: 'wght@400;500;700',
      }
    ]
  },
})

export default defineConfig({
  plugins: [
    react(),
    Fonts()
  ],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
    ],
  },
})
