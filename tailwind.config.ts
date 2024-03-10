import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      lexend: ["var(--font-lexend)"],
      paytone: ["var(--font-paytone)"],
    },
    extend: {
      backgroundImage: {
        "login-background": "url('../public/images/login-bg.png')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "cooky-red": "#CB4036",
        "cooky-yellow": "#FFC327",
        "delete-red": "#FF1100",
        "cooky-black": "#1E1E1E",
        "cooky-gray": "#EFEFEF",
        "cooky-gray-2": "#929292",
      },
      aspectRatio: {
        "16/9": "16 / 9",
      },
    },
  },
  plugins: [],
};
export default config;
