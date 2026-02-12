/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Green theme (default)
        'cyber-green': '#00ff41',
        'cyber-dark': '#0a0e0d',
        'cyber-green-dark': '#003d19',
        'cyber-green-light': '#39ff14',
        // Blue theme
        'cyber-blue': '#00d9ff',
        'cyber-blue-dark': '#003d4d',
        'cyber-blue-light': '#33e0ff',
        // Red theme
        'cyber-red': '#ff0055',
        'cyber-red-dark': '#4d0019',
        'cyber-red-light': '#ff3377',
      },
      fontFamily: {
        'mono': ['JetBrains Mono', 'Courier New', 'monospace'],
        'display': ['Orbitron', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'scan': 'scan 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'glitch': 'glitch 1s linear infinite',
        'theme-shift': 'theme-shift 0.8s ease-in-out',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px var(--glow-color), 0 0 10px var(--glow-color)' },
          '100%': { boxShadow: '0 0 20px var(--glow-color), 0 0 30px var(--glow-color), 0 0 40px var(--glow-color)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        'theme-shift': {
          '0%': { opacity: 0.5 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}
