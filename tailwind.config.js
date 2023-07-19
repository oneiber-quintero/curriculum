/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        textPrimary: '#000',
        textSecondary: '#fff',
        bgPrimary: 'rgb(2 124 199)', // 124 199
        bgSecondary: 'rgb(125 211 252)',
        bgTertiary: 'rgb(255 255 255)'
      },
      gridTemplateColumns: {
        'auto-fit-200': 'repeat(auto-fit, minmax(200px, 1fr))',
        'auto-fit-300': 'repeat(auto-fit, minmax(300px, 1fr))'
      },
      backgroundOpacity: ['active'],
      backgroundImage: {
        fondo: "url('./assets/images/background-code.webp')"
      }
    }
  },
  plugins: []
}
