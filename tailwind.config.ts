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
      },
      backgroundColor: {
        'main-bg': '#1f1f1f',
        // 'main-dark-bg': '#20232A',
        // 'secondary-dark-bg': '#33373E',
        // 'light-gray': '#F7F7F7',
        // 'half-transparent': 'rgba(0, 0, 0, 0.5)',
      },
      color: {
        border: {
          "light": "#d8dadd",
        }
      }
    },
  },
  plugins: [],
};
export default config;
