/* eslint-disable react-hooks/rules-of-hooks */
import { Meta, StoryObj } from '@storybook/react';

import { TitleTextbox } from './TitleTextbox';
import { use } from 'react';
import { useForm } from 'react-hook-form';
import { Task } from '@/models/task';

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
