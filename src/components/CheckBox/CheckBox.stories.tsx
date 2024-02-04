import { Meta, StoryObj } from '@storybook/react';

import { CheckBox } from './CheckBox';

export default {
  title: 'components/CheckBox',
  component: CheckBox,
  tags: ['autodocs'],
} as Meta<typeof CheckBox>;

type Story = StoryObj<typeof CheckBox>;

export const Default: Story = {
  args: {
    label: 'ラベル',
  },
};

export const Primary: Story = {
  args: {
    label: 'ラベル',
    className: 'checkbox-primary',
  },
};
