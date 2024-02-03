import { Meta, StoryObj } from '@storybook/react';

import { Conditions } from './Conditions';

export default {
  title: 'components/TaskList/Conditions',
  component: Conditions,
  tags: ['autodocs'],
} as Meta<typeof Conditions>;

type Story = StoryObj<typeof Conditions>;

export const Default: Story = {
  args: {
    searchText: 'Search text',
    highPriority: true,
    includeDone: true,
  },
};
