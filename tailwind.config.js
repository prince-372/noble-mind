/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        btn: "linear-gradient(130.88deg, #A854E9 -9.14%, #4F91FC 283.16%)",
        hero: "url('/assets/image/header-img.webp')",
        input:"url('/assets/image/input-img.webp')",
      },
      fontFamily: {
        Montserrat: "Montserrat, sans-serif",
        Outfit: "Outfit, sans-serif",
        Exo: "Exo 2, sans-serif",
      },
    },
  },
  plugins: [],
};
