import { Meta, StoryObj } from '@storybook/react';

import { Deadline } from './Deadline';

export default {
  title: 'components/TaskList/Deadline',
  component: Deadline,
  tags: ['autodocs'],
} as Meta<typeof Deadline>;

type Story = StoryObj<typeof Deadline>;

export const Default: Story = {
  args: {
    deadline: new Date('2024-01-02T00:00:00+09:00'),
  },
};
