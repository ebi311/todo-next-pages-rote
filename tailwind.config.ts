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
    },
  },
  plugins: [require('daisyui')],
};
export default config;
