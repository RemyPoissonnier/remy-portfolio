/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./public/index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        night: {
          DEFAULT: "#050816",
          soft: "#0b1020",
          blue: "#101a3a"
        },
        accent: "#f5c046",
        ink: {
          DEFAULT: "#e4e7ff",
          muted: "#a1a7c4"
        }
      },
      fontFamily: {
        sans: ['"Montserrat"', "system-ui", "-apple-system", "BlinkMacSystemFont", "sans-serif"]
      },
      boxShadow: {
        soft: "0 18px 40px rgba(0, 0, 0, 0.55)",
        glow: "0 22px 60px rgba(0, 0, 0, 0.85)"
      },
      borderRadius: {
        xl: "18px"
      }
    },
  },
  plugins: [],
};
