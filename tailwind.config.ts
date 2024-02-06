import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './.storybook/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'priority-high': '#f43f5e',
      'priority-medium': '#eab308',
      'priority-low': '#64748b',
      'over-deadline': '#f43f5e',
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        cw: {
          primary: '#F03748',
          secondary: '#F7AC00',
          accent: '#22B295',
          neutral: '#13202F',
          'base-100': '#FFFFFF',
          info: '#0099DC',
          success: '#6DD6C1',
          warning: '#FFCF60',
          error: '#FA8591',
        },
      },
    ],
  },
};

export default config;
