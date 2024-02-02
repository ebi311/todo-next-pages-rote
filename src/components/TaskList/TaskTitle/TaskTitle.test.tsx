import { render as _render, screen } from '@testing-library/react';
import { ComponentProps } from 'react';
import { TaskTitle } from './TaskTitle';
import { Task } from '@/models/task';

const render = (props: ComponentProps<typeof TaskTitle>) => {
  const { rerender, ...rest } = _render(<TaskTitle {...props} />);
  return {
    ...rest,
    rerender: (newProps: Partial<typeof props>) =>
      rerender(<TaskTitle {...props} {...newProps} />),
  };
};

test('renders', () => {
  render({
    taskTitle: 'Task 1',
  });
  const title = screen.getByText('Task 1');
  expect(title).toBeInTheDocument();
});
