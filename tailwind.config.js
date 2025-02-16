/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1rem'
    },
    screens: {
      sm: '576px',
      md: '768px',
      lg: '1024px',
      xl: '1180px'
    },
    extend: {},
    colors: {
      transparent: 'transparent',
      white: '#ffffff',
      black: '#000000',
      brown: '#3B322D',
      'dark-brown': '#251D1A',
      orange: '#FF6E40',
      light: '#EFE7E2',
      gray: '#b7aaa2'
    }
  },
  plugins: []
}
