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
        'color-title': '#091156',
        'slider-btn': '#EEEEEE',
        'slider-btn-active': '#414880',
        'color-default': '#8B8B8B',
        'transparent': 'transparent',
        'color-border': '#D9DDFE',
        'color-text-input': '#C5C5C5',
        'color-bgr-footer' : ' #0D165C',
        'footer-text': '#D7DBFF'
      },
      maxWidth: {
        '1140': '1140px'
      },
      backgroundImage: {
        'slider-background': "url('./src/assets/images/home1/Slide_Background.png ')",
        'about-background': "url('./src/assets/images/home1/Background Bubble.png')",
        'contact-background': "url('./src/assets/images/home1/Background BubbleLeft.png')",
        'footer-2-background' : "url('./src/assets/images/home1/Footer BG 2.png')",
        'footer-1-background' : "url('./src/assets/images/home1/Footer BG 1.png')"
      },
      fontSize: {
        '14': '14px',
        '16': '16px',
        '18': '18px',
        '36': '36px',
        '48': '48px'
      },
      letterSpacing: {
        '1.4': '1.4px',
        'tightest': '-.075em',
        'tighter': '-.05em',
        'tight': '-.025em',
        'normal': '0',
        'wide': '0.1375rem',
        'wider': '.05em',
        'widest': '.1em',
      },
      lineHeight: {
        '24': '24px',
        '21': '21px',
        '20': '20px',
        '22.5': '22.5px',
        '27': '27px',
        '45': '45px'
      }
    },
  plugins: [],
}