/** @type {import('tailwindcss').Config} */
module.exports = {
  // Enable class-based dark mode (toggled by JS adding 'dark' to <html>)
  darkMode: 'class',

  content: [
    './layouts/**/*.html',
    './content/**/*.md',
    './assets/**/*.js',
  ],

  theme: {
    extend: {
      fontFamily: {
        serif:  ['"Playfair Display"', 'Georgia', 'serif'],
        sans:   ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono:   ['"DM Mono"', '"Fira Code"', 'monospace'],
      },

      typography: (theme) => ({
        zinc: {
          css: {
            '--tw-prose-body':           theme('colors.zinc[700]'),
            '--tw-prose-headings':       theme('colors.zinc[900]'),
            '--tw-prose-lead':           theme('colors.zinc[600]'),
            '--tw-prose-links':          theme('colors.indigo[600]'),
            '--tw-prose-bold':           theme('colors.zinc[900]'),
            '--tw-prose-counters':       theme('colors.zinc[500]'),
            '--tw-prose-bullets':        theme('colors.zinc[400]'),
            '--tw-prose-hr':             theme('colors.zinc[200]'),
            '--tw-prose-quotes':         theme('colors.zinc[900]'),
            '--tw-prose-quote-borders':  theme('colors.zinc[300]'),
            '--tw-prose-captions':       theme('colors.zinc[500]'),
            '--tw-prose-code':           theme('colors.zinc[900]'),
            '--tw-prose-pre-code':       theme('colors.zinc[100]'),
            '--tw-prose-pre-bg':         theme('colors.zinc[900]'),
            '--tw-prose-th-borders':     theme('colors.zinc[300]'),
            '--tw-prose-td-borders':     theme('colors.zinc[200]'),
            // Dark mode
            '--tw-prose-invert-body':    theme('colors.zinc[300]'),
            '--tw-prose-invert-headings':theme('colors.zinc[50]'),
            '--tw-prose-invert-links':   theme('colors.indigo[400]'),
            '--tw-prose-invert-bold':    theme('colors.zinc[50]'),
            '--tw-prose-invert-hr':      theme('colors.zinc[700]'),
            '--tw-prose-invert-quotes':  theme('colors.zinc[100]'),
            '--tw-prose-invert-quote-borders': theme('colors.zinc[700]'),
            '--tw-prose-invert-code':    theme('colors.zinc[200]'),
            '--tw-prose-invert-pre-bg':  theme('colors.zinc[800]'),
          },
        },
      }),
    },
  },

  plugins: [
    require('@tailwindcss/typography'),
  ],
}
