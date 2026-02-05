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
        white: "#FFF",
        black: "#000",
        primary: {
          10: "#0099FF",
          20: "#09F",
          30: "#ECF6FE",
          40: "#F5FBFF",
          50: "#F7FBFD",
          60: "#C9E9FF",
          65: "#97D6FB",
          70: "#8298A7",
          75: "#E0F3FF",
          80: "#BFE5FF",
          85: "#DBEAFE",
          90: "#253DAB05",
          95: "#D4D3D805",
          100: "#71AAFF",
          110: "#0A6CFF",
          115: "#9BC3FF",
        },
        secondary: {
          10: "#FF9900",
          15: "#FFB45C",
          20: "#253DAB",
        },
        neutral: {
          5 : '#000000',
          10: "#333",
          20: "#494949",
          25: "#717179",
          30: "#2B2B2B",
          35: "#D9D9D9",
          40: "#03253B",
          45: "#071540",
          50: "#022740",
          55: "#484848",
          60: "#393939de",
          65: "#D4D3D8",
          70: "#F0F1F3",
          80: "#F9F9F9",
          85: "#384152",
          90: "#303141",
          95: "#595C73",
          100: "#E4E3E8",
          105: "#5F5F65",
          110: "#253258",
          115: "#81818A",
          120: "#f4f5fa",
          125: "#F0F0F0",
          130: "#F5F5F5",
          135: "#fafbfd",
          140: "#F4F4F4",
          145: "#111",
          150: "#f2f3f5",
          155: "#f4f5f5",
          160: "#71717B",
          165: "#111111BF",
          170: "#253DAB40",
          175: "#ffffff99",
          180: "#E7F0FF",
          185: "#0D0D0D",
          190: "#DEDEDE",
          195: "#757575",
          196: "#ffffff3d",
        },
        error: {
          10: "#FC464663",
        },
      },
      fontFamily: {
        Inter: ["Inter", "serif"],
         Satoshi: ["Satoshi", "sans-serif"],
      },
      boxShadow: {
        "service-card": " 0px 0px 65px 0px rgba(0, 153, 255, 0.12)",
        "box-shadow": "0px 4px 8px 0px rgba(0, 0, 0, 0.10)",
        "faq-box-shadow": "0px 10px 20px 0px rgba(164, 217, 253, 0.15)",
        "training-card": "0px 10px 20px 0px rgba(164, 217, 253, 0.15)",
        "course-details": "0px 0px 70px 0px rgba(164, 217, 253, 0.20)",
      },
      backgroundImage: {
        "gradient-counters":
          "linear-gradient(180deg, rgba(219, 234, 254, 0.27) 0%, rgba(131, 140, 152, 0.00) 100%);",
        "gradient-threats": "linear-gradient(180deg, #FFF5F3 0%, #FFF 100%);",
        "gradient-threats-card":
          "linear-gradient(270deg, #FFF -0.6%, #FFB2B2 99.23%);",
        "gradient-key-features":
          "linear-gradient(180deg, #F0FAF4 0%, #FFF 100%);",
        "gradient-compliance":
          "linear-gradient(180deg, #FCF9F2 0%, #FFF 100%);",
        "gradient-compliance-card":
          "linear-gradient(270deg, #FFF -0.6%, #B2E0FF 99.23%);",
        "gradient-compliance-logo":
          "linear-gradient(96deg, #074CB3 0%, #010A18 100%);",
        "gradient-dynamic-pages":
          "linear-gradient(270deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.84) 50%);",
        "gradient-border":
          "linear-gradient(315deg, #FFF 0%, #064199 100%);",
        "circular-gradient":
          "linear-gradient(180deg, #074CB3 0%, #010A18 100%);",
      },
    },
  },
  plugins: [],
} satisfies Config;
