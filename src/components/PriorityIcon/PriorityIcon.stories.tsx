import { Meta, StoryObj } from '@storybook/react';

import { PriorityIcon } from './PriorityIcon';

export default {
  title: 'components/PriorityIcon',
  component: PriorityIcon,
  tags: ['autodocs'],
} as Meta<typeof PriorityIcon>;

type Story = StoryObj<typeof PriorityIcon>;

export const Hight: Story = {
  args: {
    priority: 'high',
  },
};

export const Medium: Story = {
  args: {
    priority: 'medium',
  },
};

export const Low: Story = {
  args: {
    priority: 'low',
  },
};
