module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        'laptop': '1366px',
        'desktop': '1600px',
      },
      colors: {
        BrownDark: "#351309",
        BrownMid: "#AA6142",
        defaultColor: "#000000",
        textColor: "#FFFFFF",
        footerColor: "#170500",
        BlackDark: "#0D0D0D",
        MidDark: "#2C2C2C",
        MidYellow: "#FFB700",
        DarkYellow: "#C28D05",
      },
      fontFamily: {
        grandiflora: ["Grandiflora One"],
        garamond: ["'EB Garamond'", "serif"],
        monomakh: ["Monomakh", "serif"],
        mulish: ['Mulish', 'sans-serif'],
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(10px)" },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
