/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./**/*.html"],
  theme: {
    extend: {
      colors: ({ colors }) => ({
        vdarkblue: "#090e11",
        trblue: "#5362f1f0",
        primary: "#5362f1",
        secondary: "#ff2d75"
      }),
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      keyframes: {
        footerWave1: {
          '0%': {
            backgroundPosition: '1000px 0'
          },
          '100%': {
            backgroundPosition: '0px 0'
          }
        },
        footerWave2: {
          '0%': {
            backgroundPosition: '0px 0'
          },
          '100%': {
            backgroundPosition: '1000px 0'
          }
        },
        lsmLite: {
          '0%, 18%, 20%, 50.1%, 60%, 65.1%, 80%, 90.1%, 92%': {
            color: '#1085ed8f',
            'text-shadow': 'none',
          },
          '18.1%, 20.1%, 30%, 50%, 60.1%, 65%, 80.1%, 90.1%, 92.1%': {
            color: '#fff',
            'text-shadow': '0 0 10px #1091ed, 0 0 20px #1098ed, 0 0 40px #1098ed, 0 0 80px #108ded',
          }
        }
      }
    },
  },
  plugins: [],
}

