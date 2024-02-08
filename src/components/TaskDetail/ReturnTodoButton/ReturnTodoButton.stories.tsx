import { Meta, StoryObj } from '@storybook/react';

import { ReturnTodoButton } from './ReturnTodoButton';

export default {
  title: 'components/TaskDetail/ReturnTodoButton',
  component: ReturnTodoButton,
  tags: ['autodocs'],
} as Meta<typeof ReturnTodoButton>;

type Story = StoryObj<typeof ReturnTodoButton>;

export const Default: Story = {
  args: {},
};
