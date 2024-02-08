import { Meta, StoryObj } from '@storybook/react';

import { SaveButton } from './SaveButton';

export default {
  title: 'components/TaskDetail/SaveButton',
  component: SaveButton,
  tags: ['autodocs'],
} as Meta<typeof SaveButton>;

type Story = StoryObj<typeof SaveButton>;

export const Default: Story = {
  args: {},
};
