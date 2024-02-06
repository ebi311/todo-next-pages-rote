import { Meta, StoryObj } from '@storybook/react';

import { MultilineTextbox } from './MultilineTextbox';

export default {
  title: 'components/MultilineTextbox',
  component: MultilineTextbox,
  tags: ['autodocs'],
} as Meta<typeof MultilineTextbox>;

type Story = StoryObj<typeof MultilineTextbox>;

export const Default: Story = {
  args: {
    label: 'ラベル',
    value: '値・・・',
    supplementalText: '補足テキスト',
  },
};

export const AddStyle: Story = {
  args: {
    label: 'ラベル',
    value: '値・・・',
    className: 'textarea-primary w-full',
  },
};
