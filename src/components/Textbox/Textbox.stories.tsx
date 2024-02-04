import { Meta, StoryObj } from '@storybook/react';

import { Textbox } from './Textbox';
import { useForm } from 'react-hook-form';

export default {
  title: 'components/Textbox',
  component: Textbox,
  tags: ['autodocs'],
} as Meta<typeof Textbox>;

type Story = StoryObj<typeof Textbox>;

export const Default: Story = {
  args: {
    label: 'タイトル',
    supplementalText: '補足テキスト',
  },
};
