import { render as _render, screen } from '@testing-library/react';
import { ComponentProps } from 'react';
import { TaskList } from './TaskList';
import { Task } from '@/models/task';

const render = (props: ComponentProps<typeof TaskList>) => {
  const { rerender, ...rest } = _render(<TaskList {...props} />);
  return {
    ...rest,
    rerender: (newProps: Partial<typeof props>) =>
      rerender(<TaskList {...props} {...newProps} />),
  };
};

const taskList: Task[] = [...Array(3)].map((_, i) => ({
  id: i.toString(),
  title: `Task ${i}`,
  body: `Task ${i} body`,
  priority: 'medium',
  status: 'todo',
  deadline: new Date(),
}));

test('renders', () => {
  render({
    tasks: taskList,
  });
  const rows = screen.getAllByRole('row', { name: 'task-list-row' });
  expect(rows).toHaveLength(3);
});
