/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/**/**/*.{js,jsx}'],
  theme: {
    screens: {
      'xs': '320px',
      'sm': '640px',
      'md': '720px',
      'lg': '1080px',
      'xl': '1280px'
    },
    fontFamily: {
      Dancing: ['Dancing Script', 'cursive'],
      Kanit: ['Kanit', 'sans-serif'],
      Raleway: ['Raleway', 'sans-serif'],
      Lobster: ['Lobster Two', 'cursive'],
      Aboreto: ['Aboreto', 'cursive'],
      Roboto: ['Roboto', 'sans-serif'],
    },
    fontSize: {
      xxs: ['8px'],
      xs: ['10px'],
      sm: ['12px'],
      md: ['16px'],
      xl: ['24px'],
      xxl: ['32px'],
      max: ['48px'],
    },
    backgroundImage: {
      section1: ['url(https://i.postimg.cc/VsKHyGGp/black-diamonds.jpg)'],
    },
  },
  plugins: [],
};

