import { Meta, StoryObj } from '@storybook/react';

import { Task, TaskSchema } from '@/models/task';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import { TaskForm } from './TaskForm';

export default {
  title: 'components/TaskDetail/TaskForm',
  component: TaskForm,
  tags: ['autodocs'],
} as Meta<typeof TaskForm>;

type Story = StoryObj<typeof TaskForm>;

const task: Task = {
  id: '1',
  title: 'title',
  body: 'body',
  status: 'todo',
  priority: 'low',
  deadline: new Date('2024-02-04'),
};

export const Default: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const formMethods = useForm({
      defaultValues: task,
      mode: 'onBlur',
      resolver: zodResolver(TaskSchema),
    });
    return (
      <FormProvider {...formMethods}>
        <TaskForm />
        <pre>{JSON.stringify(formMethods.watch(), null, 2)}</pre>
        {formMethods.formState.errors.title?.message}
        {formMethods.formState.errors.body?.message}
      </FormProvider>
    );
  },
};
