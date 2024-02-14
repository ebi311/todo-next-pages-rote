import { Task } from '@/models/task';
import { render as _render, screen } from '@testing-library/react';
import { FormProvider, useForm } from 'react-hook-form';
import { Actions } from './Actions';

jest.mock('next/router', () => ({
  useRouter: () => ({ push: jest.fn() }),
}));

const task: Task = {
  id: '123',
  title: 'title',
  body: 'body',
  priority: 'low',
  status: 'todo',
  deadline: new Date(),
};

const HF = (initTask: Task) => {
  const formMethods = useForm({
    defaultValues: task,
  });
  return (
    <FormProvider {...formMethods}>
      <Actions task={initTask} />
    </FormProvider>
  );
};

const render = (initTask: Task) => {
  return _render(<HF {...initTask} />);
};

test('renders at "todo"', () => {
  render(task);
  expect(screen.getByRole('link')).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'delete' })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'save' })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'done' })).toBeInTheDocument();
});

test('renders at "done"', () => {
  render({ ...task, status: 'done' });
  expect(screen.getByRole('link')).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'delete' })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'save' })).toBeInTheDocument();
  expect(
    screen.getByRole('button', { name: 'return-todo' }),
  ).toBeInTheDocument();
});
