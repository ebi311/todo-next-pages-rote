import { Meta, StoryObj } from '@storybook/react';

import { DeleteButton } from './DeleteButton';

export default {
  title: 'components/TaskDetail/DeleteButton',
  component: DeleteButton,
  tags: ['autodocs'],
} as Meta<typeof DeleteButton>;

type Story = StoryObj<typeof DeleteButton>;

export const Default: Story = {
  args: {},
};
