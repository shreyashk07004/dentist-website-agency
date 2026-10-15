/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: '#13294B', deep: '#0D1E38', soft: '#22406E' },
        clinic: { DEFAULT: '#1A9BD7', light: '#E3F3FB', dark: '#1281B5' },
        action: { DEFAULT: '#0B6FA8', hover: '#095C8C' },
        enamel: '#F4F8FB',
        slate: { DEFAULT: '#3B4758', soft: '#5E6B7D' },
        line: '#DCE5EE',
        mint: '#2FB37A',
      },
      fontFamily: {
        display: ['Urbanist', 'system-ui', 'sans-serif'],
        sans: ['Figtree', 'system-ui', 'sans-serif'],
        marathi: ['"Tiro Devanagari Marathi"', 'serif'],
      },
      maxWidth: { content: '1200px' },
      borderRadius: { DEFAULT: '4px', md: '6px' },
    },
  },
  plugins: [],
}
