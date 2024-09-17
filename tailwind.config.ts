import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'my-black': '#101010',
        'my-gray': '#00725E',
        'my-green': '#4B9AB8',
        'my-white': '#FDFDFD',
      },
      screens: {
        sm: '375px', // default is 640px
        md: '768px', // default is 768px
        lg: '1280px', // default is 1024px
        xl: '1440px',
        '2xl': '1920px',
      },
      maxWidth: {
        landing: '1320px',
      },
      boxShadow: {
        'my-white': '0px 4px 12px 0px #00C89C',
      },
    },
  },
  plugins: [],
};
export default config;
