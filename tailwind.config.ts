import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "coding": "url(/images/projects/coding.jpg)",
        "content": "url(/images/projects/content.jpg)",
      },
      colors:{
        main: "#B1D699",
        offwhite: '#f5f5f5',
        accent: '#b1d699',
      }
    },
  },
  plugins: [],
};
export default config;
