/** @type {import('tailwindcss').Config} */
import { withTV } from "tailwind-variants/transformer"
import { animations, extraCSSClasses, keyframes } from "./src/libs/tailwindcss/index.ts"

export default withTV({
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        "4.5": "1.375rem",
        "7.5": "1.875rem"
      },
      fontFamily: {
        bigNumber: ["Sofia", "sans-serif"],
        title: ["Robert Pro", "sans-serif"],
        content: ["Roboto mono", "sans-serif"],
        style: ["Martian Mono", "sans-serif"]
      },
      zIndex: {
        header: 120,
        modal: 140,
        content: 10
      },
      space: {
        test: '20px'
      },
      colors: {
        subtitle: {
          DEFAULT: 'hsla(0, 0%, 0%, 0.7)'
        },
        foreground: {
          400: "hsl(var(--color-foreground-400))",
          DEFAULT: "hsl(var(--color-foreground))"
        },
        accent: {
          DEFAULT: "hsl(var(--color-accent))"
        },
        primary: {
          DEFAULT: "hsl(var(--color-primary))"
        },
        secondary: {
          400: 'hsl(var(--color-secondary-400))',
          DEFAULT: 'hsl(var(--color-secondary))',
          foreground: 'hsl(var(--color-secondary-foreground))'
        },
        background: {
          DEFAULT: 'hsl(var(--color-background))'
        },
        content: {
          DEFAULT: "hsl(var(--color-content))",
          600: "hsl(var(--color-content-600))"
        },
        content2: {
          DEFAULT: "hsl(var(--color-content2))"
        } 
      },
      animation: animations,
      keyframes: keyframes
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ...extraCSSClasses,
      })
    },
  ],
})

