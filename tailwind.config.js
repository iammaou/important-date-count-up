/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gradient-start": "hsl(244.94, 100%, 50%)",
        "gradient-end": "hsl(244.94, 100%, 50%)",
      },
    },
  },
  plugins: [],
};
