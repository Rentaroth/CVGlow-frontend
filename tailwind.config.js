/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/**/**/*.{js,jsx}'],
  theme: {
    screens: {
      'xs': '320px',
      'sm': '640px',
      'md': '720px',
      'lg': '900px',
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
      xxs: ['25%'],
      xs: ['30%'],
      sm: ['40%'],
      md: ['50%'],
      xl: ['60%'],
      xxl: ['80%'],
      max: ['100%'],
    },
    backgroundImage: {
      section1: ['url(https://i.postimg.cc/VsKHyGGp/black-diamonds.jpg)'],
    },
  },
  plugins: [],
};

