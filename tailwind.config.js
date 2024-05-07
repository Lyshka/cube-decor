/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./thank.html", "./src/**/*.{ts,html}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: "Montserrat",
      },
      colors: {
        primary: {
          DEFAULT: "#0067C7",
        },
        secondary: {
          DEFAULT: "#F33232",
        },
        gray: {
          DEFAULT: "#868686F",
        },
      },
      screens: {
        custom: "1700px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
