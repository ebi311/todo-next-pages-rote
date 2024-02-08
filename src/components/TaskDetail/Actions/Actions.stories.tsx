import { Meta, StoryObj } from '@storybook/react';

import { Actions } from './Actions';

export default {
  title: 'components/TaskDetail/Actions',
  component: Actions,
  tags: ['autodocs'],
} as Meta<typeof Actions>;

type Story = StoryObj<typeof Actions>;

export const Default: Story = {
  args: {
    task: {
      id: '123',
      title: 'title',
      body: 'body',
      priority: 'low',
      status: 'todo',
      deadline: new Date(),
    },
  },
};
