/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,scss}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['system-ui', 'ui-monospace']
      },
    },
  },
  plugins: [],
}
