/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      /* 2024 colors */
      navorange: "#EAA501",
      main: "#F4AD04",
      text: "#000000",
      heading: "#222431",
      yellow: "#FFE6AA",
      blue: "#E7E7ED",
      green: "#C8AA65",
      gray: "#8E8E8E",
      /* 2025 colors */
      purple: "#AAAADA",
      plum: "#441752",
      peony: "#FFD0EC",
      grape: "#4C3D6F",
      cloud: "#FCF1FF",
      blueberry: "#5A639C",
    },
    screens: {
      xsm: "640px",
      sm: "740px", // Small devices (640px and up)
      md: "868px", // Medium devices (768px and up)
      lg: "1024px", // Large devices (1024px and up)
      xl: "1280px", // Extra large devices (1280px and up)
      "2xl": "1536px", // 2x large devices (1536px and up)
    },
    extend: {
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        "sans-bold": ["DM Sans", "sans-serif"], // Define a new font family for bold text
        serif: ["Playfair Display", "serif"],
        "serif-bold": ["Playfair Display", "serif"], // Define a new font family for bold serif text
      },
      fontWeight: {
        thin: "100",
        hairline: "100",
        extralight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        "extra-bold": "800",
        black: "900",
      },
      screens: {
        "custom-330": "330px",
        "custom-780": "780px",
        "custom-440": "440px",
        "custom-588": "588px",
        "custom-590": "590px",
        "custom-983": "983px",
        "custom-883": "883px",
        "custom-930": "930px",
        "custom-710": "710px",
        "custom-1020": "1020px",
        "custom-955": "955px",
        "custom-1120": "1200px",
        "custom-1150": "1150px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
