/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0f0',
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
