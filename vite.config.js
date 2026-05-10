import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'glow-nude': '#FFFDFB',      // Fond principal
        'glow-rose': '#FDF2F0',      // Accents doux
        'glow-gold': '#D4AF37',      // Titres et boutons (Or)
        'glow-gold-light': '#F9F1D0', // Hover Or
        'glow-black': '#1A1A1A',     // Textes profonds
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg', 'pwa-192x192.png'],
      manifest: {
        name: 'DailyGlow - Excellence & Prestige',
        short_name: 'DailyGlow',
        description: 'Boutique de luxe - Montres et Bijoux',
        theme_color: '#FFFDFB',
        background_color: '#FFFDFB',
        display: 'standalone',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ],
})