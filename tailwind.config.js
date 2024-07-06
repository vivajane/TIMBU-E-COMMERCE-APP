/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "sans": "DM Sans"
      },
      backgroundColor: {
        "grays": "F1F1F1",
        "whites": "FAFAFA"
      },
      backgroundImage: {
        "shirt": "url('./src/assets/bgshirt.png')"
      }
    },
  },
  plugins: [],
}