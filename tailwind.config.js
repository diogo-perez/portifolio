/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px',
    },
    extend: {
      colors: {
        white: '#fff',
        secondary: '#0c0',
        dark: '#000',
        light: '#fff',
        customGreen: '#00ff00',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
