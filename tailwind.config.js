/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        circle: "50%"
      },
      screens: {
        'x': '1400px',
      },
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif']
    },
    colors: {
      'color-black': "#000000",
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
      'footer-text': '#D7DBFF',
      'color-describe-2': 'rgba(216, 220, 255, 1)',
      'color-rgb-white': 'rgba(255, 255, 255, 1)',
      'color-tip-other': 'rgba(171, 180, 255, 1)'
    },
    maxWidth: {
      '1140': '1140px'
    },
    fontSize: {
      '12': '12px',
      '14': '14px',
      '16': '16px',
      '18': '18px',
      '24': '24px',
      '36': '36px',
      '48': '48px',
      '50': '50px'
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
      '17.5': '17.5px',
      '18': '18px',
      '20': '20px',
      '21': '21px',
      '22.5': '22.5px',
      '24': '24px',
      '27': '27px',
      '35': '35px',
      '45': '45px',
      '60': '60px',
    },
  },
  important:true,
  plugins: [],
}