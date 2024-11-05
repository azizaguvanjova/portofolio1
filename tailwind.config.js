/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ffffff",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins"],
        paytone: ["Paytone One"],
        actor: ["Actor"],
        allerta: ["Allerta"],
      },
    },
  },
  plugins: [],
};
