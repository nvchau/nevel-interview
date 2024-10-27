/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/layouts/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/modules/**/*.{js,ts,jsx,tsx}',
  ],
  media: false,
  plugins: [],
  theme: {
    extend: {
      width: {
        '582px': '582px',
        '960px': '960px',
      },
      maxWidth: {
        xl: '1400px',
        lg: '1250px',
        md: '980px',
        sm: '769px',
        xs: '480px',
      },
      colors: {
        white: '#ffffff',
        primary: '#009efb',
        secondary: '#F3704D',
        dark: '#000000',
        third: '#604dcf',
        success: '#02B3A9',
        warning: '#ffbc34',
        danger: '#f62d51',
        black: '#000000',
        black1: '#000000B3',
        black2: '#00000099',
        gray: '#A59E9E',
        gray1: '#0000000F',
        gray2: '#EBEBEB',
        gray3: '#0000001A',
        gray4: '#00000005',
        gray5: '#9B9B9B',
        gray6: '#0000000D',
        yellow: '#C48F03',
        blue: '#5C6EFF',
        green: '#19796A',
      },
      fontSize: {
        sm: ['14px', '24px'],
      },
      fontFamily: {
        'ping-fang': ['PingFang SC', 'sans-serif'],
      },
      lineHeight: {
        150: '150%',
      },
    },
    screens: {
      xl: { max: '1367px' },
      lg: { max: '1023px' },
      md: { max: '980px' },
      sm: { max: '769px' },
      xs: { max: '480px' },
    },
  },
  corePlugins: {
    preflight: false,
  },
  mode: 'jit',
};
