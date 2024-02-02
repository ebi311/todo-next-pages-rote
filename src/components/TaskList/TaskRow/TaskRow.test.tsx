import { render as _render, screen } from '@testing-library/react';
import { ComponentProps } from 'react';
import { TaskRow } from './TaskRow';
import { Task } from '@/models/task';

const render = (props: ComponentProps<typeof TaskRow>) => {
  const { rerender, ...rest } = _render(<TaskRow {...props} />);
  return {
    ...rest,
    rerender: (newProps: Partial<typeof props>) =>
      rerender(<TaskRow {...props} {...newProps} />),
  };
};

const task: Task = {
  id: '001',
  body: '本文',
  priority: 'medium',
  status: 'todo',
  title: 'タスクタイトル',
  deadline: new Date('2024-01-31'),
};

test('renders', () => {
  render({
    task,
  });
  expect(screen.getByText('タスクタイトル')).toBeInTheDocument();
  expect(screen.getByRole('checkbox')).toBeInTheDocument();
  expect(screen.getByText('2024/01/31')).toBeInTheDocument();
  expect(screen.getByText('本文'));
});
