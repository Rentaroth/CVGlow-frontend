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
      section2: ['url(https://i.postimg.cc/0jQcwxTJ/depositphotos-12208904-stock-photo-diamonds-on-white-background-with.webp)'],
      tiny1: ['url(https://i.postimg.cc/Qt7HRbrF/Nueva-imagen-de-mapa-de-bits.png)'],
    },
    extend: {
      animation: {
        'auto-scroll-1': 'primary 10s linear infinite',
        'auto-scroll-2': 'secondary 10s linear infinite'
      },
      keyframes: {
        primary: {
          from: {
            left: '0%',
          },
          to: {
            left: '-100%'
          }
        },
        secondary: {
          from: {
            left: '100%',
          },
          to: {
            left: '0%'
          }
        }
      }
    }
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
};

