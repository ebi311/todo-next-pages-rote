import { Meta, StoryObj } from '@storybook/react';

import { TaskStatusCheckbox } from './TaskStatusCheckbox';

export default {
  title: 'components/TaskList/TaskStatusCheckbox',
  component: TaskStatusCheckbox,
  tags: ['autodocs'],
} as Meta<typeof TaskStatusCheckbox>;

type Story = StoryObj<typeof TaskStatusCheckbox>;

export const Todo: Story = {
  args: {
    taskStatus: 'todo',
  },
};

export const Done: Story = {
  args: {
    taskStatus: 'done',
  },
};
