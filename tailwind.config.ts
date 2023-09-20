import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      violet: "#2C2D48",
      green: "#073C37",
      lime: "#339967",
      red: "#FF0000",
      dark: "#141414",
      white: "#FFFFFF"
    },
    fontFamily: {
      roboto: 'Roboto, sans-serif',
      inter: 'Inter, sans-serif',
      prompt: "Prompt, sans-serif"

    },
    fontSize: {
      '6xl': '80px',
      '5xl': '66px',
      '4xl': '58px',
      '3xl': '42px',
      '2xl': '36px',
      xl: '24px',
      lg: '18px',
      sm: '16px',
      xs: '13px',
    },
  },
  plugins: [],
}
export default config
