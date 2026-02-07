/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        cosmic: {
          deep: '#0a0e27',
          mid: '#1a1040',
          light: '#0d1333',
        },
        bark: {
          DEFAULT: '#c8aa64',
          light: '#f0d080',
          dim: '#a09880',
        },
        parchment: {
          DEFAULT: '#e8e0d0',
          light: '#f0ece4',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      keyframes: {
        branchSway: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(1.5deg)' },
        },
        fireflyDrift: {
          '0%': { transform: 'translate(0, 0)', opacity: '0.2' },
          '25%': { transform: 'translate(8px, -12px)', opacity: '0.8' },
          '50%': { transform: 'translate(-4px, -20px)', opacity: '0.4' },
          '75%': { transform: 'translate(12px, -8px)', opacity: '0.9' },
          '100%': { transform: 'translate(0, 0)', opacity: '0.2' },
        },
      },
      animation: {
        branchSway: 'branchSway 4s ease-in-out infinite',
        fireflyDrift: 'fireflyDrift 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
