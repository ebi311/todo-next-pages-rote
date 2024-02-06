import { Meta, StoryObj } from '@storybook/react';

import { Label } from './Label';

export default {
  title: 'components/Label',
  component: Label,
  tags: ['autodocs'],
} as Meta<typeof Label>;

type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    label: 'ラベル',
    supplementalText: '補足テキスト',
    children: <input className="input input-bordered" />,
  },
};
