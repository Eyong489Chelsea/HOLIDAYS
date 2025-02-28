/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      md: { min: "768px" },
      lg: { min: "1024px" },
      oxl: { min: "1200px" },
      xl: { min: "1280px" },
      "2xl": { min: "1536px" },
      "3xl": { min: "1920px" }
    },
    extend: {
      colors: {
        "black-100": "#2E353A",
        black: "#343A40",
        blue: "#236FFB",
        brown: "#D5E4FF",
        gray: "#6C757D",
        orange: "#F24B01",
        red: "#D32F2F",
        transparent: "transparent",
        white: "#FFFFFF"
      },
      fontFamily: {
        "montserrat-italic": ["Montserrat-Italic", "sans-serif"],
        "montserrat-thin": ["Montserrat-Thin", "sans-serif"],
        "montserrat-extralight": ["Montserrat-ExtraLight", "sans-serif"],
        "montserrat-light": ["Montserrat-Light", "sans-serif"],
        "montserrat-medium": ["Montserrat-Medium", "sans-serif"],
        "montserrat-regular": ["Montserrat-Regular", "sans-serif"],
        "montserrat-semiBold": ["Montserrat-SemiBold", "sans-serif"],
        "montserrat-extraBold": ["Montserrat-ExtraBold", "sans-serif"],
        "montserrat-bold": ["Montserrat-Bold", "sans-serif"],
        "montserrat-black": ["Montserrat-Black", "sans-serif"],
        "poppins-italic": ["Poppins-Italic", "sans-serif"],
        "poppins-thin": ["Poppins-Thin", "sans-serif"],
        "poppins-extralight": ["Poppins-ExtraLight", "sans-serif"],
        "poppins-light": ["Poppins-Light", "sans-serif"],
        "poppins-medium": ["Poppins-Medium", "sans-serif"],
        "poppins-regular": ["Poppins-Regular", "sans-serif"],
        "poppins-semiBold": ["Poppins-SemiBold", "sans-serif"],
        "poppins-extraBold": ["Poppins-ExtraBold", "sans-serif"],
        "poppins-bold": ["Poppins-Bold", "sans-serif"],
        "poppins-black": ["Poppins-Black", "sans-serif"]
      }
    }
  }
};
