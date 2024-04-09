/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'bgColorDark': '#1A1A2E',
      'btnColor' : '#E23E57',
      'btnColorHover' : '#f1ff5c',
    },
    extend: {},
  },
  plugins: [],
}

// #242424;
// https://colorhunt.co/palette/e23e5788304e522546311d3f
// https://colorhunt.co/palette/1a1a2e16213e0f3460e94560
// https://tailwindcss.com/docs/dark-mode
// https://ui.shadcn.com/
// https://analytics.google.com/analytics/web/#/a267743380p374924568/admin/streams/table/