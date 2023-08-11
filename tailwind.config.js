/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#0156FF',
        'custom-green': '#78A962',
        'custom-red': '#C94D3F',
        'dark-gray': '#666666',
        'light-gray': '#A2A6B0',
        'star-gold': '#E9A426',
        'light-gold': '#FFB800',
      },
      backgroundImage: {
        'custom-builds': "url('@/assets/products/custom.png')",
        'msi-laptops': "url('@/assets/products/msi.png')",
        desktops: "url('@/assets/products/desktops.png')",
        monitors: "url('@/assets/products/monitors.png')",
      },
    },
  },
  plugins: [],
}
