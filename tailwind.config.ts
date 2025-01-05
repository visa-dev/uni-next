import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        userCardColor1: "#C3EBFA",
        userCardColor2: "#FAE27C",
        girlIndicatorColor: "#FAE27C",
        boyIndicatorColor: "#9fcdf8",
        default1: '#C3EBFA',
        default2:'#FAE27C'
      },
    },
  },
  plugins: [],
} satisfies Config;
