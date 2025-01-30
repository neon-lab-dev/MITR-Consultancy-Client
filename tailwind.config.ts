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
          40 : '#F5FBFF',
          50 : "#F7FBFD",
          60 : '#C9E9FF',
          65 : '#97D6FB',
        },
        secondary: {
          10: "#FF9900",
          15 : "#FFB45C",
        },
        neutral: {
          10: "#333",
          20 : "#494949",
          25 : "#717179",
          30 : "#2B2B2B",
          35 : '#D9D9D9',
          40 : "#03253B",
          45 : "#071540",
          50 : "#022740",
          55 : '#484848',
          60 : '#393939de',
          65 : "#D4D3D8",
          70 : "#F0F1F3",
          80 : '#F9F9F9',
          85 : '#384152',
          90 : '#303141',
          95 : '#595C73',
        },
      },
      fontFamily: {
        Inter: ['Inter', 'serif'],
      },
      boxShadow : {
        'service-card' : ' 0px 0px 65px 0px rgba(0, 153, 255, 0.12)',
        'box-shadow' : '0px 4px 8px 0px rgba(0, 0, 0, 0.10)',
        'faq-box-shadow' : '0px 10px 20px 0px rgba(164, 217, 253, 0.15)',
        'training-card' : '0px 10px 20px 0px rgba(164, 217, 253, 0.15)',
        'course-details' : '0px 0px 70px 0px rgba(164, 217, 253, 0.20)'
      }
    },
  },
  plugins: [],
} satisfies Config;