module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,jade}", "./src/**/**/*.{js,ts,jsx,tsx,jade}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/line-clamp")],
};
