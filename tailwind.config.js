const colors = require('tailwindcss/colors');

/**
 * @type { import('tailwindcss').Config }
 */
module.exports = {
  content: ['./theme/**/*.ftl'],
  experimental: {
    optimizeUniversalDefaults: true,
  },
  plugins: [require('@tailwindcss/forms')],
  theme: {
    extend: {
      colors: {
        secondary: colors.gray,

        // Currently only the shades 200, 300, 500, 600, 700 are implemented
        // because these are used across the theme, the rest is not.
        bevy: {
          // 50: '#F9F9FA',
          // 100: '#F3F4F5',
          200: '#e7fff4',
          300: '#cfffe8',
          // 400: '#C0C4C8',
          500: '#75b386',
          600: '#487454',
          700: '#325143',
          // 800: '#59626F',
          // 900: '#3F4859',
          // 950: '#2F3640',
        },

        provider: {
          bitbucket: '#0052CC',
          discord: '#5865F2',
          facebook: '#1877F2',
          github: '#181717',
          gitlab: '#FC6D26',
          google: '#4285F4',
          instagram: '#E4405F',
          linkedin: '#0A66C2',
          microsoft: '#5E5E5E',
          oidc: '#F78C40',
          openshift: '#EE0000',
          paypal: '#00457C',
          slack: '#4A154B',
          stackoverflow: '#F58025',
          twitter: '#1DA1F2',
        },
      },
    },
  },
};
