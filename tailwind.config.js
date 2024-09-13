/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        circle: "50%"
      }},
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
      colors: {
        'color-pink': ' #FF64AE',
        'color-white': '#FFFFFF',
        'hover-btn': '#091156',
        'color-title': '#091156'
      },
      maxWidth: {
        '1140': '1140px'
      },
      backgroundImage: {
        'slider-background': "url('./src/assets/images/home1/Slide_Background.png ')"
      }
    },
  plugins: [],
}