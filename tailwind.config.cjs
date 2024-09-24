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
          100: "#167237",
          200: "#2199D4",
          300: "#dbab83",
          400: "#ea222d",
          500: "#3d9fc6",
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