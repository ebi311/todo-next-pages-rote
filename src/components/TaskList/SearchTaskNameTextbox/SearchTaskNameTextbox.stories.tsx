import { Meta, StoryObj } from '@storybook/react';

import { SearchTaskNameTextbox } from './SearchTaskNameTextbox';

export default {
  title: 'components/TaskList/SearchTaskNameTextbox',
  component: SearchTaskNameTextbox,
  tags: ['autodocs'],
} as Meta<typeof SearchTaskNameTextbox>;

type Story = StoryObj<typeof SearchTaskNameTextbox>;

export const Default: Story = {
  args: {},
};