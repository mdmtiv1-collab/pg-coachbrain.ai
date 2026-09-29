module.exports = {
  content: ["./index.html", "./area-de-membros.html", "./members.html", "./*.html", "./js/**/*.js"],
  theme: {
    extend: {
      colors: {
        'sport-orange': '#ea580c',
        'sport-card': '#f8fafc',
        'sport-border': '#e2e8f0',
        'sport-gray': '#475569',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['Plus Jakarta Sans', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      }
    }
  },
  plugins: [],
}
