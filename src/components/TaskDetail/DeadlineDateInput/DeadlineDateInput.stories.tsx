import { Meta, StoryObj } from '@storybook/react';

import { DeadlineDateInput } from './DeadlineDateInput';
import { useForm } from 'react-hook-form';
import { Task } from '@/models/task';

export default {
  title: 'components/TaskDetail/DeadlineDateInput',
  component: DeadlineDateInput,
  tags: ['autodocs'],
} as Meta<typeof DeadlineDateInput>;

type Story = StoryObj<typeof DeadlineDateInput>;

export const Default: Story = {
  args: {},
  render: (props) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { control, watch } = useForm<Task>({
      defaultValues: {
        deadline: new Date('2024-02-05'),
      },
    });
    return <DeadlineDateInput {...props} control={control} />;
  },
};