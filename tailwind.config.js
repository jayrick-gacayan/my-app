/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary': '#3B71CA',
        'success': '#14A44D',
        'danger': '#DC4C64',
        'warning': '#E4A11B',
        'info': '#54B4D3',
      },
      animation: {
        'slide-in': `slide-in 0.4s ease-in-out forwards`,
        'slide-out': `slide-out 0.4s ease-in-out forwards`
      },
      keyframes: {
        'slide-in': {
          '0%': { opacity: 0, transform: `translateX(100%)` },
          '100%': { opacity: 1, transform: `translate(0)` }
        },
        'slide-out': {
          '0%': { opacity: 1, transform: `translateX(0)` },
          '100%': { opacity: 0, transform: `translateX(100%)` }
        }
      }
    },
  },
  plugins: [],
}
