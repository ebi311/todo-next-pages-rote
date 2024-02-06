import type { Preview } from '@storybook/react';
import React from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import '../src/styles/globals.css';

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
      <div data-theme="cw" className="bg-base-100">
        <Story />
      </div>
    ),
  ],
};

export default preview;
