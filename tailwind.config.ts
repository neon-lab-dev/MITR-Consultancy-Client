import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        white : "#FFF",
        primary: {
          10: "#0099FF",
          20 : "#09F",
          30 : "#ECF6FE",
          40 : '#F5FBFF'
        },
        secondary: {
          10: "#FF9900",
        },
        neutral: {
          10: "#333",
          20 : "#494949",
          30 : "#2B2B2B",
          40 : "#03253B",
          50 : "#022740",
        },
      },
      fontFamily: {
        Inter: ['Inter', 'serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;