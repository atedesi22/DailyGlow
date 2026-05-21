import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

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
  ],
})