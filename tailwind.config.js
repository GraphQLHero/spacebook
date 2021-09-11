module.exports = {
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        starwars: '#FFE81F'
      },
      height: {
        112: '448px',
        144: '576px',
        192: '768px'
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
