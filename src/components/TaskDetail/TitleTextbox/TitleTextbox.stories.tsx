/* eslint-disable react-hooks/rules-of-hooks */
import { Meta, StoryObj } from '@storybook/react';

import { Task } from '@/models/task';
import { useForm } from 'react-hook-form';
import { TitleTextbox } from './TitleTextbox';

export default {
  title: 'components/TaskDetail/TitleTextbox',
  component: TitleTextbox,
  tags: ['autodocs'],
} as Meta<typeof TitleTextbox>;

type Story = StoryObj<typeof TitleTextbox>;

export const Default: Story = {
  render: (props) => {
    const form = useForm<Task>({
      defaultValues: {
        title: 'Task 1',
      },
    });
    return (
      <>
        <TitleTextbox {...props} register={form.register} />
        <span>input: {form.watch('title')}</span>
      </>
    );
  },
};
