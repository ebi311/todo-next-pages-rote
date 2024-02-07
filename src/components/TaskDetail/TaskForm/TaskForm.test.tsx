import { render as _render, screen } from '@testing-library/react';
import { ComponentProps } from 'react';
import { TaskForm } from './TaskForm';
import { Task } from '@/models/task';

const render = (props: ComponentProps<typeof TaskForm>) => {
  const { rerender, ...rest } = _render(<TaskForm {...props} />);
  return {
    ...rest,
    rerender: (newProps: Partial<typeof props>) =>
      rerender(<TaskForm {...props} {...newProps} />),
  };
};

const task: Task = {
  id: '1',
  title: 'title',
  body: 'body',
  status: 'todo',
  priority: 'low',
  deadline: new Date('2024-02-04'),
};

test('renders', () => {
  render({
    defaultValues: task,
  });
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
