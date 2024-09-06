/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container:{
        center: true,
        padding:"2rem",
        screens:{
          DEFAULT:"100%",
          sm:"640px",
          md:"768px",
          lg:"1024px",
          xl:"1208px"
        }
      },
      backgroundImage:{
        "banner":"url('./src/assets/banner.png')",
        "featuresint":"url('./src/assets/inti.png')",
        "serviceImg":"url('./src/assets/servicebg.png')",
        "footerimg":"url('./src/assets/footerHad.png')"
      },
      fontFamily:{
        chivo:["Chivo", "sans-serif"],
        DM_sans:["Chivo", "sans-serif"]
      }
    },
  },
  plugins: [],
}
