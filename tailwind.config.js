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
        'pink-btn': ' #FF64AE',
        'white-btn': '#FFFFFF',
        'hover-btn': '#091156'
      },
      maxWidth: {
        '1140': '1140px'
      }
    },
  plugins: [],
}