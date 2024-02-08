import { Meta, StoryObj } from '@storybook/react';

import { BackLink } from './BackLink';

export default {
  title: 'components/TaskDetail/BackLink',
  component: BackLink,
  tags: ['autodocs'],
} as Meta<typeof BackLink>;

type Story = StoryObj<typeof BackLink>;

export const Default: Story = {
  args: {
    href: '/list',
  },
};
