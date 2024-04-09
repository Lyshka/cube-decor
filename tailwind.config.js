/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,html}"],
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
    },
  },
  plugins: [],
};
