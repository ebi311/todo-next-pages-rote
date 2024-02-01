import { Meta, StoryObj } from '@storybook/react';

import { Layout } from './Layout';

export default {
  title: 'components/Layout',
  component: Layout,
} as Meta<typeof Layout>;

type Story = StoryObj<typeof Layout>;

export const Default: Story = {
  args: {
    pageTitle: 'ページタイトル',
    children: <p>コンテンツ</p>,
  },
};
