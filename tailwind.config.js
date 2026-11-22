/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sunshine: '#FFE36C', // Pastel Yellow
        skyBlue: '#A2D2FF',  // Soft Sky Blue
        softPink: '#FFB7B2',  // Pastel Pink
        mintGreen: '#B7E4C7', // Mint Green
        warmOrange: '#FF9F67', // Soft Orange
        cream: '#FFF9E5',     // Very Light Cream
      },
      fontFamily: {
        rounded: ['"Quicksand"', 'sans-serif'],
        display: ['"Fredoka One"', 'cursive'],
      },
      borderRadius: {
        'xl': '1.5rem',
        '2xl': '2rem',
        '3xl': '2.5rem',
      },
    },
  },
  plugins: [],
}
