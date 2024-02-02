import { Meta, StoryObj } from '@storybook/react';

import { TaskBody } from './TaskBody';

export default {
  title: 'components/TaskList/TaskBody',
  component: TaskBody,
  tags: ['autodocs'],
} as Meta<typeof TaskBody>;

type Story = StoryObj<typeof TaskBody>;

export const Default: Story = {
  args: {
    taskBody:
      'タスクの内容・・・・・・・・・・・・・・・・・・・・・・・・・・・・',
  },
};
