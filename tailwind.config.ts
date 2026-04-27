import type { Config } from 'tailwindcss'

/* ── Color Palette ───────────────────────────────────
 *  Edit the `brand` colors to match your company identity.
 *  The default palette is a professional mint / navy scheme.
 * ──────────────────────────────────────────────────── */
const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fefcf0',
          100: '#fdf7d6',
          200: '#fbed9d',
          300: '#f7de5d',
          400: '#f2cd2d',
          500: '#e5b814',
          600: '#c5920d',
          700: '#9d6d0f',
          800: '#815711',
          900: '#6d4913',
          950: '#402706',
        },
        neutral: {
          50: '#f9f8f6',
          100: '#f2f0eb',
          200: '#e5e1d6',
          300: '#cfc8b7',
          400: '#b0a690',
          500: '#92856e',
          600: '#7a6d59',
          700: '#665b4b',
          800: '#554c40',
          900: '#463f36',
          950: '#25211d',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'serif'],
      },
    },
  },
  plugins: [],
}

export default config
