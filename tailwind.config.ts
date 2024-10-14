import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      rotate: { "11": "11deg" },
      fontFamily: {
        display: ["Montserrat Variable", ...fontFamily.sans],
        sans: ["Inter", ...fontFamily.sans],
        gochi: ["Gochi Hand", ...fontFamily.sans],
      },
      colors: {
        carousel_grey: "#F6F6F680",
      },
    },
  },
  plugins: [require("tailwindcss-text-fill-stroke")],
} satisfies Config;
