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
        brand: {
          teal:       '#0d6e6e',
          tealDark:   '#085050',
          tealLight:  '#e8f5f5',
          navy:       '#0a1628',
          navyMid:    '#0f2240',
          emerald:    '#1a4a3a',
          gold:       '#c9a84c',
          goldLight:  '#f0e0a0',
          goldDark:   '#a07830',
          cream:      '#faf8f3',
          white:      '#ffffff',
          dark:       '#0a0e1a',
        }
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        inter:    ['Inter', 'sans-serif'],
        arabic:   ['Noto Naskh Arabic', 'serif'],
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'particle': 'particle 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        particle: {
          '0%': { transform: 'translateY(100vh) translateX(0)' },
          '100%': { transform: 'translateY(-100px) translateX(50px)' },
        }
      },
      backgroundImage: {
        'gradient-navy':    'linear-gradient(135deg, #0a1628 0%, #1a4a3a 100%)',
        'gradient-hero':    'linear-gradient(135deg, #0a1628 0%, #0f2240 50%, #1a4a3a 100%)',
        'gradient-teal':    'linear-gradient(135deg, #0d6e6e 0%, #0a1628 100%)',
        'gradient-gold':    'linear-gradient(135deg, #c9a84c 0%, #a07830 100%)',
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#0a1628',
            'h1, h2, h3, h4': {
              fontFamily: 'Playfair Display, serif',
              color: '#0a1628',
            },
            a: {
              color: '#0d6e6e',
              '&:hover': { color: '#085050' },
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

export default config
