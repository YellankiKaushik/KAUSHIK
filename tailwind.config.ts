
import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
        'display': ['Playfair Display', 'serif']
      },
      colors: {
        background: {
          DEFAULT: '#0F0A0A',
          dark: '#130606'
        },
        primary: {
          light: '#FF8A50',
          DEFAULT: '#FF6B35',
          dark: '#E55527'
        },
        accent: {
          light: '#FFA64D',
          DEFAULT: '#FF8A50',
          dark: '#E55527'
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle at top left, rgba(255, 138, 80, 0.1), transparent 50%)',
        'gradient-dark': 'linear-gradient(to bottom right, rgba(255, 107, 53, 0.1), rgba(255, 138, 80, 0.1))'
      },
      boxShadow: {
        'neon': '0 0 15px rgba(255, 138, 80, 0.3)',
        'glow': '0 0 20px rgba(255, 107, 53, 0.2)'
      }
    }
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
