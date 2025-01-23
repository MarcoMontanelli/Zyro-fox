/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Add this line to include all files in `src`
  ],
  theme: {
    extend: {
      colors: {
        'space-dark': '#0c0e1b', // Dark color for the background
        'void-purple': '#14011c',
      },
      boxShadow: {
        'glow': '0 0 15px rgba(255, 255, 255, 0.6)', // Glow effect for text
        'purple-glow': '0 0 30px 10px rgba(138,43,226,0.8)', // For purple hue
        'text-glow': '0 0 15px rgba(255,255,255,0.8)', // For text glow
        
      },
      dropShadow: {
        'white-hue': '0 0 15px rgba(255,255,255,0.8)', // For text white hue
        'white-glow': '0 0 15px rgba(255,255,255,0.8)', // Default glow
        'white-glow-hover': '0 0 25px rgba(255,255,255,1)', // Glow on hover
      },
      animation: {
        'gradient-scroll': 'gradient-scroll 3s linear infinite',
        'glow': 'glow 3s infinite ease-in-out',
      },
      keyframes: {
        'gradient-scroll': {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
        'glow': {
          '0%, 100%': { opacity: 0.3, transform: 'scale(1)' },
          '50%': { opacity: 0.4, transform: 'scale(1.05)' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
