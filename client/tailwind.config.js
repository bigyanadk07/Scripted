/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'parallax': "url('/src/Images/about-pic1.jpg')",
        'parallax-home': "url('/src/Images/Background.png')",
        'parallax-blog': "url('/src/Images/blog-cover3.jpg')",
      },
      
      fontFamily: {
        monserrat: ['Montserrat', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
      },
      colors: {
        primary: '#0D1B2A',
        secondary: '#1B263B',
        accent: '#E0E1DD',
        highlight: '#778DA9',
        light: '#F4F4F9',
      },
    },
  },
  plugins: [],
}
