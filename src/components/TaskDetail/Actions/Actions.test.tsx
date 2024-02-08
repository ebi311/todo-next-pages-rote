import { render as _render, screen } from '@testing-library/react';
import { ComponentProps } from 'react';
import { Actions } from './Actions';

const render = (props: ComponentProps<typeof Actions>) => {
  const { rerender, ...rest } = _render(<Actions {...props} />);
  return {
    ...rest,
    rerender: (newProps: Partial<typeof props>) =>
      rerender(<Actions {...props} {...newProps} />),
  };
};

test('renders', () => {
  const { rerender } = render({
    task: {
      id: '123',
      title: 'title',
      body: 'body',
      priority: 'low',
      status: 'todo',
      deadline: new Date(),
    },
  });
  expect(screen.getByRole('link')).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'delete' })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'save' })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'done' })).toBeInTheDocument();
  rerender({
    task: {
      id: '123',
      title: 'title',
      body: 'body',
      priority: 'low',
      status: 'done',
      deadline: new Date(),
    },
  });
  expect(
    screen.getByRole('button', { name: 'return-todo' }),
  ).toBeInTheDocument();
});
