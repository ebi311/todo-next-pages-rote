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
    selected: new Date('2024-02-04'),
  },
};
