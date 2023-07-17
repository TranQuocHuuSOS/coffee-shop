/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fintFamily:{
        Karla:['Karla','sans-serif']
      },

      colors:{
        'coffee':{
          50:"#E8D6D0",
          200:"#C89F94",
          400:"#A24F4B",
          600:"#744838",
        }
      },
      keyframes: {
        slideDown: {'0%': { transform: 'translateY(-100%)' },'100%': { transform: 'translateY(0)' },},
        fadeIn:{from:{opacity:0},to:{opacity: 1},}
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

