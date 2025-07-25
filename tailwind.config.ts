import type { Config } from "tailwindcss";
import fontFamily from "tailwindcss/defaultTheme";

const config: Config = {
    content: [
        "./app/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./pages/**/*.{ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                // Use the CSS variable from next/font/google
                sans: ["var(--font-manrope)", ...fontFamily.fontFamily.sans],
            },
            colors: {
                primary: {
                    DEFAULT: "#FF0000",
                    light: "#FAFBFF",
                    orange: "#FF7600",
                    black: "#000000",
                },
                grayscale: {
                    cloud: "#EDEFF7",
                    smoke: "#D3D6E0",
                    steel: "#BCBFCC",
                    space: "#9DA2B3",
                    graphite: "#6E7180",
                    arsenic: "#1E1E24",
                    black: "#000000",
                },
            },
        },
    },
    plugins: [],
};

export default config;
