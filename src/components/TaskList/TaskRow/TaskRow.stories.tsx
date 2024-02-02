import { Meta, StoryObj } from '@storybook/react';

import { TaskRow } from './TaskRow';
import { Task } from '@/models/task';

export default {
  title: 'components/TaskList/TaskRow',
  component: TaskRow,
  tags: ['autodocs'],
} as Meta<typeof TaskRow>;

type Story = StoryObj<typeof TaskRow>;

const task: Task = {
  id: '001',
  body: '本文',
  priority: 'medium',
  status: 'todo',
  title: 'タスクタイトル',
  deadline: new Date('2024-01-31'),
};

export const Default: Story = {
  args: {
    task,
  },
};
