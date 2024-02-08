import { Task } from '@/models/task';
import { render as _render, screen } from '@testing-library/react';
import { ComponentProps } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { TaskForm } from './TaskForm';

const task: Task = {
  id: '1',
  title: 'title',
  body: 'body',
  status: 'todo',
  priority: 'low',
  deadline: new Date('2024-02-04'),
};

const HF = () => {
  const formMethods = useForm({
    defaultValues: task,
  });
  return (
    <FormProvider {...formMethods}>
      <TaskForm />
    </FormProvider>
  );
};

const render = (props: ComponentProps<typeof TaskForm>) => {
  const { rerender, ...rest } = _render(<HF {...props} />);
  return {
    ...rest,
    rerender: (newProps: Partial<typeof props>) =>
      rerender(<HF {...props} {...newProps} />),
  };
};

test('renders', () => {
  render({});
  const title = screen.getByLabelText(/タイトル/);
  expect(title).toHaveValue('title');
  const deadline = screen.getByLabelText(/期限/);
  expect(deadline).toHaveValue('2024/02/04');
  const lowPriority = screen.getByLabelText(/低/);
  expect(lowPriority).toBeChecked();
  const mediumPriority = screen.getByLabelText(/中/);
  expect(mediumPriority).not.toBeChecked();
  const highPriority = screen.getByLabelText(/高/);
  expect(highPriority).not.toBeChecked();
  const body = screen.getByLabelText(/内容/);
  expect(body).toHaveValue('body');
});
