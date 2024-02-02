import { render as _render, screen } from '@testing-library/react';
import { ComponentProps } from 'react';
import { TaskStatusCheckbox } from './TaskStatusCheckbox';

const render = (props: ComponentProps<typeof TaskStatusCheckbox>) => {
  const { rerender, ...rest } = _render(<TaskStatusCheckbox {...props} />);
  return {
    ...rest,
    rerender: (newProps: Partial<typeof props>) =>
      rerender(<TaskStatusCheckbox {...props} {...newProps} />),
  };
};

test('renders', () => {
  const { rerender } = render({
    taskStatus: 'todo',
  });
  const checkbox = screen.getByRole('checkbox', { name: 'todo-status' });
  expect(checkbox).not.toBeChecked();
  rerender({ taskStatus: 'done' });
  expect(checkbox).toBeChecked();
});
