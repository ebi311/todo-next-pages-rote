import { Meta, StoryObj } from '@storybook/react';

import { NewTaskLink } from './NewTaskLink';

export default {
  title: 'components/TaskList/NewTaskLink',
  component: NewTaskLink,
  tags: ['autodocs'],
} as Meta<typeof NewTaskLink>;

type Story = StoryObj<typeof NewTaskLink>;

export const Default: Story = {
  args: {},
};