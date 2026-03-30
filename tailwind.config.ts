import type { Config } from 'tailwindcss';

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './**/*.{tsx,ts}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'xs': '320px',
        'xss': '280px',
      },
      colors: {
        surface: 'var(--color-surface)',
        'surface-secondary': 'var(--color-surface-secondary)',
        content: 'var(--color-content)',
        'content-muted': 'var(--color-content-muted)',
        'content-faint': 'var(--color-content-faint)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
    },
  },
  plugins: [],
} satisfies Config;
