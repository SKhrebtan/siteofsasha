/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
 theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1250px',
        xs: "991px",
      '2xl': '1536px',
    },
    extend: {
      boxShadow: {
        custom: '0px 8px 44px 16px rgba(105, 71, 38, 0.05)',
        auth: '0px 4px 52px 24px rgba(37, 37, 37, 0.05)',
      },
      borderRadius: {
        'xl': '10px',
        'xxl': '16px',
      },
      padding: {
        '3.5': '14px',
        '5': '20px',
      },
      spacing: {
        '6': '24px',
        '16': '64px',
      },
      fontSize: {
        '32px': '32px',
      },
      lineHeight: {
        '40px': '40px',
        'custom-19': '19px',
        none: '32px',
      },
      borderWidth: {
        '2': '2px',
      },
      colors: {
        prices: '#E6E3E1',
        customGray: '#252525',
        customBorder: 'teal',
        secondBorder: '#E6E3E1',
        customFocusBorder: '#B37840',
        customFocusBg: 'green',
        redbull: '#FEE000',
        textDark: '#252525',
        lightGray: '#25252599',
        bgLight: '#F3F2F1',
        white: '#FFFFFF',
        brown: {
          500: '#B37840',
          600: '#936234'
        }
      },
      backgroundColor: {
        main: '#B37840',
        '50': '#F3F2F1',
        '75': '#EAE8E6',
        '200': '#D1C8B8',
        '300': '#BAA388',
      },
      textColor: {
        main: '#B37840',
        'light-grey': 'rgba(37, 37, 37, 0.60)',
        dark: '#252525',
        regular: 'rgba(37, 37, 37, 0.80)',
      },
      borderColor: {
        '75': '#EAE8E6',
        '100': '#E6E3E1',
        '200': '#D1C8B8',
        active: 'rgba(255, 255, 255, 0.15)',
        notActive: 'rgba(255, 255, 255, 0.20)'
      }
    },
    variants: {
      extend: {
        backgroundColor: ['focus'],
        borderColor: ['focus'],
      },
    },
  },
  plugins: [],
}