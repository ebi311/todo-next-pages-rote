import { render as _render, screen } from '@testing-library/react';
import { ComponentProps } from 'react';
import { NewTaskLink } from './NewTaskLink';

const render = (props: ComponentProps<typeof NewTaskLink>) => {
  const { rerender, ...rest } = _render(<NewTaskLink {...props} />);
  return {
    ...rest,
    rerender: (newProps: Partial<typeof props>) =>
      rerender(<NewTaskLink {...props} {...newProps} />),
  };
};

test('renders', () => {
  render({});
  const link = screen.getByRole('button', { name: 'new-task' });
  expect(link).toHaveAttribute('href', '/tasks');
});
