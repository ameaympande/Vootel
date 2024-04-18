/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#007bff",
          dark: "#6b46c1",
        },
        secondary: {
          light: "#6c757d",
          dark: "#6b7280",
        },
        background: {
          primary: "#3a3f46",
          secondary: "#0F4C75",
          darker: "#008DDA",
          lighter: "#1176ad",
        },
        color: {
          primary: "#13308e",
          secondary: "#ffff",
          darker: "#008DDA",
          lighter: "#1176ad",
        },
      },
      fontFamily: {
        inter: ["Inter"],
        pop: ["Poppins"],
      },
    },
  },
  plugins: [],
};
