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
      colors: {
        'body-light': '#0A0908',
        'accent': '#3066BE',
        'papaya': '#FFEECF',
        'body-dark': '#FFF8EBB3',
        'body-dark-emphasized': '#FFF8EB',
        'gray': '#1E293B',
        'borders': '#E5E7EB',
        'background': '#0A0D14',
        'background-light': '#F5F5F7',
        "background-light-emphasized": "#FFFFFF",
        "purple": "#4F00D6",
        "blue": "#1D50DD",
        "blue-two": "#0F5BEE",
        "blue-three": "#0066FF",
        "orange": "CA8F2E",
        "orange-two": "#DF9318",
        "orange-three": "#F59500"
      }
    },
  },
  plugins: [],
}
export default config
