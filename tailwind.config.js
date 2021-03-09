module.exports = {
  purge: {
    content: ["./public/**/*.html"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: "Karla, sans-serif",
      mono: "Courgette, cursive",
    },
    extend: {
      colors: {
        cyan: "hsl(179, 62%, 43%)",
        "cyan-light": "#00c4c0",
        "bright-yellow": "hsl(71, 73%, 54%)",
        "light-gray": "hsl(204, 43%, 93%)",
        "grayish-blue": "hsl(218, 22%, 67%)",
      },
      spacing: {
        77: "19.4375rem",
        55: "14.25rem",
        18: "4.5rem",
        156: "39.6875rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
