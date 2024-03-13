/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
      sm: '468px',
      md: '768px',
      lg: '1024px'
    },
    extend: {
      fontFamily:{
        sans: ['Instrument Sans', 'sans-serif'],
      },
      colors:{
        lightBlack: '#112240',
        black: '#0A192F',
        lightGreen: '#48B8A5',
        veryLightGrey: '#53D3B9',
        lightGrey: '#CCD6F6',
        deepGrey: '#8892B0',
      },
    },
  },
  plugins: [],
}
