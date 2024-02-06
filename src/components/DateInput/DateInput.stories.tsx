import { Meta, StoryObj } from '@storybook/react';

import { DateInput } from './DateInput';

export default {
  title: 'components/DateInput',
  component: DateInput,
  tags: ['autodocs'],
} as Meta<typeof DateInput>;

type Story = StoryObj<typeof DateInput>;

export const Default: Story = {
  args: {
    label: '日付',
    supplementalText: '補足テキスト',
    selected: new Date('2024-02-04'),
  },
};
