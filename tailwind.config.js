/**
 * ============================================================================================
 * File: taiwind.config.js                                                                    *
 * Author: Andrew Scott Zimmerman                                                             *
 * Copyright: Copyright © Andrew Zimmerman 2026                                               *
 * Description: The JavaScript Tailwind Config file. The design system for the website.       *
 * Design Notes: The design of the site uses three colors, three font families, and on type   *
 * scale.                                                                                     *
 * ============================================================================================
 * @type {import('tailwindcss').Config}
 */
export default {
  content: [
    './app/**/*.{js,ts,vue}'
  ],

  theme: {
    extend: {
      colors: {
        // Backgrounds
        bg: {
          primary: '#FAF7F2',  // Warm off-white, page background
          muted:   '#E8E4DC'   // Muted accent, used in cards and footer
        },
        // Text colors
        ink: {
          primary:   '#1F1F1F', // Warm charcoal, body text
          secondary: '#5A5A5A'  // Metadata, captions, muted labels
        },
        // Accent
        accent: {
          navy: '#1B2A4E'       // Headings, links, accents
        }
      },

      fontFamily: {
        serif: ['"Source Serif 4"', 'Georgia', 'serif'], // Headings and body.
        sans:  ['Inter', 'system-ui', 'sans-serif'], // UI
        mono:  ['"JetBrains Mono"', 'ui-monospace', 'monospace'] // Tech tags.
      },

      // A custom type scale.
      fontSize: {
        h1:    ['3rem',      { lineHeight: '1.1',  fontWeight: '600' }],
        h2:    ['2rem',      { lineHeight: '1.2',  fontWeight: '600' }],
        h3:    ['1.5rem',    { lineHeight: '1.3',  fontWeight: '500' }],
        body:  ['1.0625rem', { lineHeight: '1.65', fontWeight: '400' }],
        small: ['0.875rem',  { lineHeight: '1.5'                    }],
        micro: ['0.75rem',   { lineHeight: '1.4'                    }]
      },

      maxWidth: {
        prose: '680px',  // Reading column width
        grid:  '1200px'  // Outer page container
      },

      letterSpacing: {
        // Used for section numbers and tech tags
        'wider-caps': '0.08em'
      }
    }
  },

  plugins: []
}
