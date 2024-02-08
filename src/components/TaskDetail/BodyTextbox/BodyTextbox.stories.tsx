import { Meta, StoryObj } from '@storybook/react';

import { BodyTextbox } from './BodyTextbox';

export default {
  title: 'components/TaskDetail/BodyTextbox',
  component: BodyTextbox,
  tags: ['autodocs'],
} as Meta<typeof BodyTextbox>;

type Story = StoryObj<typeof BodyTextbox>;

export const Default: Story = {
  args: {},
};
