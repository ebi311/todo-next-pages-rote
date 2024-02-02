import { Meta, StoryObj } from '@storybook/react';

import { TaskTitle } from './TaskTitle';

export default {
  title: 'components/TaskList/TaskTitle',
  component: TaskTitle,
  tags: ['autodocs'],
} as Meta<typeof TaskTitle>;

type Story = StoryObj<typeof TaskTitle>;

export const Default: Story = {
  args: {
    taskTitle: 'Task 1',
  },
};
