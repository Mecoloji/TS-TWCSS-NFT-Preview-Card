/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Outfits: ["Outfit", "sans-serif"],
      },
      backgroundColor: {
        MBG: "hsl(217, 54%, 11%)",
        CBG: "hsl(216, 50%, 16%)",
      },
      colors: {
        Cyan: "hsl(178, 100%, 50%)",
        Cyanh: "rgba(0,255,247,0.5)",
        SBlue: "hsl(215, 51%, 70%)",
        Line: "hsl(215, 32%, 27%)",
        White: "hsl(0, 0%, 100%)",
      },
      fontSize: { Fixed: "18px" },
    },
  },
  plugins: [],
};
