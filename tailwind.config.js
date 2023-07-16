/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fintFamily:{
        Karla:['Karla','sans-serif']
      },

      colors:{
        'light-coffee':"#C89F94"
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        }
      },
      animation: {
        slideDown: 'slideDown .4s ease-in-out ',
      },
      backgroundImage:{
        'slider-bg':"url('./img/slider-bg.jpeg') bg-cover bg-no-repeat bg-bottom" 
      }
    },
  },
  plugins: [],
}

