/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  content: [
    './app/views/layouts/application.html.erb',
    './app/frontend/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

