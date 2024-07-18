import type { Config } from "tailwindcss";

const config: Config = {
  purge: {
    options: {
      safelist: ['text-[#10b981]','text-[#10b981]','bg-[#10b981]/10','border-[#10b981]/20','hover:bg-[#10b981]/10', 'bg-[#10b981]', 'text-[#0ea5e9]', 'bg-[#0ea5e9]/10', 'border-[#0ea5e9]/20', 'hover:bg-[#0ea5e9]/10', 'bg-[#0ea5e9]',
'text-[#ec4899]', 'bg-[#ec4899]/10', 'border-[#ec4899]/20', 'hover:bg-[#ec4899]/10', 'bg-[#ec4899]', 'text-[#eab308]', 'bg-[#eab308]/10', 'border-[#eab308]/20', 'hover:bg-[#eab308]/10', 'bg-[#eab308]']
    },
  },
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
    },
  },
  plugins: [],
};
export default config;
