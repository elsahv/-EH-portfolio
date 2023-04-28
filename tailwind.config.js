/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lavender: "#CDD1E2",
        teal: "#008080",
        munsell: "#0792a5",
        platinum: "#E5E5E5",
        emerald: "#7FD599",
        seasalt: "#f9f9f9",
        test: "red",
      },
    },
  },
  plugins: [],
};
