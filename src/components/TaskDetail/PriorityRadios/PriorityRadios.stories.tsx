import { Meta, StoryObj } from '@storybook/react';

import { Task } from '@/models/task';
import { useForm } from 'react-hook-form';
import { PriorityRadios } from './PriorityRadios';

export default {
  title: 'components/TaskDetail/PriorityRadios',
  component: PriorityRadios,
  tags: ['autodocs'],
} as Meta<typeof PriorityRadios>;

type Story = StoryObj<typeof PriorityRadios>;

export const Default: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { control } = useForm<Task>({
      defaultValues: {
        priority: 'medium',
      },
    });
    return <PriorityRadios control={control} />;
  },
};
