import { Meta, StoryObj } from '@storybook/react';

import { TaskForm } from './TaskForm';
import { Task } from '@/models/task';

export default {
  title: 'components/TaskDetail/TaskForm',
  component: TaskForm,
  tags: ['autodocs'],
} as Meta<typeof TaskForm>;

type Story = StoryObj<typeof TaskForm>;

const task: Task = {
  id: '1',
  title: 'title',
  body: 'body',
  status: 'todo',
  priority: 'low',
  deadline: new Date('2024-02-04'),
};

export const Default: Story = {
  args: {
    defaultValues: task,
  },
};
