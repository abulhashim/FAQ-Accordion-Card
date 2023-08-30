/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        KumbhSans: ["Kumbh Sans", "sans-serif"],
      },
      colors: {
        VeryDarkDesaturatedBlue: "hsl(238, 29%, 16%)",
        SoftRed: "hsl(14, 88%, 65%)",
        SoftViolet: "hsl(273, 75%, 66%)",
        SoftBlue: "hsl(240, 73%, 65%)",
        VerydarkGrayishBlue: "hsl(237, 12%, 33%)",
        DarkGrayishBlue: "hsl(240, 6%, 50%)",
        LightGrayishBlue: "hsl(240, 5%, 91%)",
      },
      backgroundImage: {
        arrow: "url('./images/icon-arrow-down.svg')",
        gradient:
          "linear-gradient(to bottom, hsl(273, 75%, 66%), hsl(240, 73%, 65%) )",
      },
    },
  },
  plugins: [],
};
