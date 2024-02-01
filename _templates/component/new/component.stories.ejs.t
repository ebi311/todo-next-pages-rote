---
to: src/<%= path %>/<%= name %>/<%= name %>.stories.tsx
---
import { Meta, StoryObj } from '@storybook/react';

import { <%= name %> } from './<%= name %>';

export default {
  title: '<%= path %>/<%= name %>',
  component: <%= name %>,
  tags: ['autodocs'],
} as Meta<typeof <%= name %>>;

type Story = StoryObj<typeof <%= name %>>;

export const Default: Story = {
  args: {},
};