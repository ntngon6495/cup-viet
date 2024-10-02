/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
    "./node_modules/flowbite-svelte-icons/**/*.{html,js,svelte,ts}"
  ],
  theme: {
    extend: {
      colors: {
        // flowbite-svelte
        category: {
          100: "#F2B71A",
          200: "#2199D4",
          300: "#137D3F",
          400: "#FED576",
          500: "#ea222d",
          600: "#2593bf",
          700: "#0D87B8",
          800: "#0c7aa6",
          900: "#0a6c93"
        },
        secondary: "#30B9F0",
        DEFAULT: "#D5D5D5",
        header: "#E0E0E0"
      }
    }
  },
  plugins: []
};