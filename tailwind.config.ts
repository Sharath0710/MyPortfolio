import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        deep: "#05070d",
        panel: "#0d1320",
        cyanSignal: "#38d9ff",
        amberSignal: "#f6c85f",
        mintSignal: "#6ee7b7",
        roseSignal: "#fb7185",
      },
      boxShadow: {
        holo: "0 0 38px rgba(56, 217, 255, 0.18)",
        amber: "0 0 34px rgba(246, 200, 95, 0.16)",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;

