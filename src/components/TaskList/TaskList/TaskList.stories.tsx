import { Meta, StoryObj } from '@storybook/react';

import { TaskList } from './TaskList';
import { Task } from '@/models/task';

export default {
  title: 'components/TaskList/TaskList',
  component: TaskList,
  tags: ['autodocs'],
} as Meta<typeof TaskList>;

type Story = StoryObj<typeof TaskList>;

const tasks: Task[] = [...Array(3)].map((_, i) => ({
  id: i.toString(),
  title: `Task ${i}`,
  body: `Task ${i} body`,
  priority: 'medium',
  status: 'todo',
  deadline: new Date(),
}));

export const Default: Story = {
  args: {
    tasks: tasks,
  },
};
