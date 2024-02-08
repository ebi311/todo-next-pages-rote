import { render as _render, screen } from '@testing-library/react';
import { ComponentProps } from 'react';
import { ReturnTodoButton } from './ReturnTodoButton';

const render = (props: ComponentProps<typeof ReturnTodoButton>) => {
  const { rerender, ...rest } = _render(<ReturnTodoButton {...props} />);
  return {
    ...rest,
    rerender: (newProps: Partial<typeof props>) =>
      rerender(<ReturnTodoButton {...props} {...newProps} />),
  };
};

test('renders', () => {
  render({});
  const button = screen.getByRole('button', { name: 'return-todo' });
  expect(button).toBeInTheDocument();
});
