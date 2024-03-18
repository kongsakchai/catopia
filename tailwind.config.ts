import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        'primary': '#3fa8d0',
        'secondary' : '#e9f5fb',
        'error' : '#e50914',
        'black01' : '#2e2e2e',
        'textfield' : '#9e9e9e',
        'line' : '#ebebeb',
        'blue01' : '#1E2237',
        'blue02' : '#252A40'
      },
    },
  },
  plugins: [],
}
export default config
