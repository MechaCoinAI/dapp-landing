import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'linear-voice': 'linear-gradient(180deg, rgba(103, 93, 81, 0.08) 0%, #1E1B18 100%)',
        checked: "url('../public/images/edit/checked.png')",
        nft_hover: 'linear-gradient(180deg, rgba(243, 109, 11, 0.00) 61.73%, rgba(243, 109, 11, 0.30) 94.5%), rgba(10, 9, 5, 0.50)'
      },
      fontFamily: {
        pixelmix: ['Pixelmix', 'sans-serif'],
        pixelbold: ['PixelmixBold'],
        'creative-block': ['CreativeBlock'],
        'chakra-petch': ['ChakraPetch', 'sans-serif'],
        clashDisplay: ['Clash Display', 'sans-serif'],
        superMario: ['SuperMario256', 'sans-serif'],
        inter: ['Inter Variable', 'sans-serif']
      },
      animation: {
        spin: 'rotate 2.5s linear infinite',
        'spin-reverse': 'rotate-reverse 3s linear infinite',
        wiggle: 'wiggle 1s infinite'
      },
      keyframes: {
        rotate: {
          '0%, 100%': { transform: 'rotate(360deg)' }
        },
        'rotate-reverse': {
          '0%, 100%': { transform: 'rotate(-360deg)' }
        },
        wiggle: {
          '0%, 100%': {
            transform: 'scale(1.2) rotate(2deg)'
          },
          '50%': {
            transform: 'scale(0.8) rotate(-2deg)'
          }
        }
      },
      screens: {
        '3xl': '1920px'
      }
    }
  },
  plugins: []
}
export default config
