/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'navorange':'#EAA501',
      'main':'#F4AD04',
      'text':'#000000',
      'heading':'#222431',
      'yellow': '#FFE6AA',
      'blue': '#E7E7ED',
      'green': '#C8AA65',
      'gray': '#8E8E8E',

    },
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        'sans-bold': ['DM Sans', 'sans-serif'], // Define a new font family for bold text
        serif: ['Playfair Display', 'serif'],
        'serif-bold': ['Playfair Display', 'serif'], // Define a new font family for bold serif text
      },
      fontWeight: {
         thin: '100',
         hairline: '100',
         extralight: '200',
         light: '300',
         normal: '400',
         medium: '500',
         semibold: '600',
         bold: '700',
         extrabold: '800',
        'extra-bold': '800',
         black: '900',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}

