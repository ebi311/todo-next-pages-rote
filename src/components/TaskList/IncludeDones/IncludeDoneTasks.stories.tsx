import { Meta, StoryObj } from '@storybook/react';

import { IncludeDoneTasks } from './IncludeDoneTasks';

export default {
  title: 'components/TaskList/IncludeDoneTasks',
  component: IncludeDoneTasks,
  tags: ['autodocs'],
} as Meta<typeof IncludeDoneTasks>;

type Story = StoryObj<typeof IncludeDoneTasks>;

export const Default: Story = {
  args: {
    includeDoneTasks: true,
  },
};
