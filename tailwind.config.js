/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
      },
      colors: {
        accent: '#F97316',
        'accent-light': '#FB923C',
        'accent-dark': '#EA580C',
        dark: '#080808',
        secondary: '#111111',
        'mid-dark': '#181818',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'radial-gradient(ellipse 80% 60% at 50% -20%, rgba(249,115,22,0.18) 0%, transparent 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite',
        'border-glow': 'borderGlow 3s ease-in-out infinite',
        'slide-right': 'slideRight 25s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        borderGlow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(249,115,22,0.3)' },
          '50%': { boxShadow: '0 0 20px rgba(249,115,22,0.5), 0 0 40px rgba(249,115,22,0.15)' },
        },
        slideRight: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
