import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-green': '#1B4D4D',
        'primary-green-light': '#2D6A6A',
        'primary-green-dark': '#0F2E2E',
        'primary-green-muted': '#3D8B8B',
        'bg-cream': '#F7F5F0',
        'bg-white': '#FFFFFF',
        'bg-dark-section': '#1B4D4D',
        'text-primary': '#1A1A1A',
        'text-secondary': '#5C5C5C',
        'text-muted': '#8A8A8A',
        'border-light': '#E5E2DA',
        'border-green': '#2D6A6A',
        // Semantic aliases
        brand: {
          green: '#1B4D4D',
          greenLight: '#2D6A6A',
          greenDark: '#0F2E2E',
          greenMuted: '#3D8B8B',
          cream: '#F7F5F0',
        }
      },
      fontFamily: {
        amiri: ['var(--font-amiri)', 'Amiri', 'serif'],
        inter: ['var(--font-inter)', 'Inter', 'sans-serif'],
        sans: ['var(--font-inter)', 'Inter', 'sans-serif'],
        serif: ['var(--font-amiri)', 'Amiri', 'serif'],
        arabic: ['var(--font-arabic)', 'Noto Naskh Arabic', 'serif'],
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'spin-slow': 'spin 60s linear infinite',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0F2E2E 0%, #1B4D4D 50%, #2D6A6A 100%)',
        'cta-gradient': 'linear-gradient(135deg, #1B4D4D 0%, #0F2E2E 100%)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

export default config

