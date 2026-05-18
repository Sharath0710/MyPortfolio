import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        deep: "#03040b",
        panel: "#0a1020",
        cyanSignal: "#14f1ff",
        amberSignal: "#f8ff6a",
        orangeSignal: "#ff9f1c",
        mintSignal: "#7cffc4",
        roseSignal: "#b86bff",
      },
      boxShadow: {
        holo: "0 0 46px rgba(20, 241, 255, 0.22)",
        amber: "0 0 34px rgba(248, 255, 106, 0.16)",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
