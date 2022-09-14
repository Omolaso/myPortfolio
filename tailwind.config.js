/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
      sm: '468px',
      md: '786px',
      lg: '1024px'
    },
    extend: {
      fontFamily:{
        sans:['Poppins', 'sans-serif']
      },
      colors:{
        black: '#0A192F',
        grey: '#48B8A5',
        veryLightGrey: '#53D3B9',
        lightGrey: '#CCD6F6',
        deepGrey: '#8892B0',
      },
    },
  },
  plugins: [],
}
