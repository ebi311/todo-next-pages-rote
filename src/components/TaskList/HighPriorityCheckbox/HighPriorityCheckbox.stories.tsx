import { Meta, StoryObj } from '@storybook/react';

import { HighPriorityCheckbox } from './HighPriorityCheckbox';

export default {
  title: 'components/TaskList/HighPriorityCheckbox',
  component: HighPriorityCheckbox,
  tags: ['autodocs'],
} as Meta<typeof HighPriorityCheckbox>;

type Story = StoryObj<typeof HighPriorityCheckbox>;

export const Default: Story = {
  args: {
    onlyHighPriority: true,
  },
};
