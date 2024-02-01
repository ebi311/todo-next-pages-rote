import type { Preview } from '@storybook/react';
import '../src/styles/globals.css';
import React from 'react';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <div data-theme="light" className="bg-base-100">
        <Story />
      </div>
    ),
  ],
};

export default preview;
