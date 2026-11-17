module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: { canvas: "#F4F4F0", ink: "#1F211C", sage: "#6B7260", mist: "#E8E9E3", leaf: "#E3EADB", leafink: "#3F5A33" },
      fontFamily: { sans: ["var(--font-sans)", "system-ui", "sans-serif"], serif: ["var(--font-serif)", "Georgia", "serif"] },
      letterSpacing: { label: "0.14em" },
    },
  },
  plugins: [],
};
