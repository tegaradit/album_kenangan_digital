/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-radial': 'linear-gradient( 179.7deg,  rgba(249,21,215,1) 1.1%, rgba(22,0,98,1) 99% );',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        bluetheme: {
          "primary": "#1e3a8a", // Blue for primary
          "secondary": "#3b82f6", // Light blue for secondary
          "accent": "#60a5fa", // Blue accent
          "neutral": "#3d4451",
          "base-100": "#ffffff", // White background
          "base-200": "#bfdbfe", // Light blue background
          "base-300": 'radial-gradient(circle farthest-corner at 3.2% 49.6%, rgba(80, 12, 139, 0.87) 0%, rgba(161, 10, 144, 0.72) 83.6%)', // Gradient for base-300
          "info": "#93c5fd",
          "success": "#22d3ee",
          "warning": "#fde047",
          "error": "#f43f5e",
        },
      },
    ],
  },
};
