import { Meta, StoryObj } from '@storybook/react';

import { DoneButton } from './DoneButton';

export default {
  title: 'components/TaskDetail/DoneButton',
  component: DoneButton,
  tags: ['autodocs'],
} as Meta<typeof DoneButton>;

type Story = StoryObj<typeof DoneButton>;

export const Default: Story = {
  args: {},
};