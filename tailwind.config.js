/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(-20px, 0)' },
        }
      },
      animation: {
        'shake': 'shake .82s cubic-bezier(.36,.07,.19,.97) both',
      }
    },
  },
  plugins: [],
}

