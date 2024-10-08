import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Montserrat Variable", ...fontFamily.sans],
        sans: ["Inter", ...fontFamily.sans],
        gochi: ["Gochi Hand", ...fontFamily.sans],
      },
    },
  },
  plugins: [require("tailwindcss-text-fill-stroke")],
} satisfies Config;
