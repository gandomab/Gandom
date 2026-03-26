/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lexend: ['Lexend', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        santa: ['Santa Catalina', 'cursive'],
        inter: ['Inter', 'sans-serif'],
        merriweather: ['Merriweather', 'serif'],
      },
      colors: {
        // Primary colors
        primary: "#E6B220",
        primaryHover: "#DEA401",
        secondary: "#6A8358",
        green: "#426B1F",

        // Accent colors
        accentYellow: "#FFC943",
        accentOrange: "#E9610C",
        accentPink: "#EA3FB8",
        accentBlue: "#0C8CE9",
        accentCyan: "#00C8B3",

        // Neutral colors
        black: "#000000",
        white: "#FAFAF5",
        grayLight: "#F2EDE0",
        grayMedium: "#D9D9D9",
        grayDark: "#1E1E1E",
        grayBorder: "#E6E6E6",
        beigebg: "#F7F3EB",
        orangeHome: "#E6B220",

        // Button colors
        buttonBg: "#E8A302",
        buttonHover: "#DE7D02",

        // Optional extended colors
        darkGray: "#6D6D6D",
        warning: "#DE7D02",
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
}
