import type { Config } from "tailwindcss";
import { theme } from "tailwindcss/defaultConfig";
import colors from "tailwindcss/colors";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...(theme?.fontFamily?.sans ?? [])],
      },
      colors: {
        orange: colors.orange,
        sky: colors.sky,
      },
      screens: {
        print: { raw: "print" },
      },
    },
  },
  plugins: [],
} satisfies Config;
