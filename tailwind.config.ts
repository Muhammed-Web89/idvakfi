import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Dark theme backgrounds
        'dark-bg': '#080C10',
        'dark-surface': '#0D1117',
        'dark-card': '#121820',
        'dark-card-hover': '#16202A',
        'dark-border': '#1F2937',

        // Primary Accent: Canlı Turkuaz (Turquoise)
        turquoise: {
          50: '#E6FAF7',
          100: '#CCF5EF',
          200: '#99EBDF',
          300: '#66E0CE',
          400: '#26D4BE',
          500: '#00D4B2', // Main primary accent
          600: '#00B395',
          700: '#008C75',
          800: '#006655',
          900: '#004035',
        },
        'primary-turquoise': '#00D4B2',
        'primary-turquoise-light': '#33DEC5',
        'primary-turquoise-dark': '#00A389',

        // Text colors
        'text-dark-primary': '#F0F6FC',
        'text-dark-secondary': '#94A3B8',
        'text-dark-muted': '#64748B',

        // Legacy compatibility
        'primary-green': '#00D4B2',
        'primary-green-light': '#33DEC5',
        'primary-green-dark': '#0D1117',
        'bg-cream': '#0D1117',
      },
      fontFamily: {
        amiri: ['var(--font-amiri)', 'Amiri', 'serif'],
        inter: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        arabic: ['var(--font-arabic)', 'Noto Naskh Arabic', 'serif'],
      },
      boxShadow: {
        'glow-turquoise': '0 0 25px rgba(0, 212, 178, 0.25)',
        'glow-turquoise-lg': '0 0 40px rgba(0, 212, 178, 0.35)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

export default config

