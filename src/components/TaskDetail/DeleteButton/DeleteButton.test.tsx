import { render as _render, screen } from '@testing-library/react';
import { ComponentProps } from 'react';
import { DeleteButton } from './DeleteButton';

const render = (props: ComponentProps<typeof DeleteButton>) => {
  const { rerender, ...rest } = _render(<DeleteButton {...props} />);
  return {
    ...rest,
    rerender: (newProps: Partial<typeof props>) =>
      rerender(<DeleteButton {...props} {...newProps} />),
  };
};

test('renders', () => {
  render({});
  const button = screen.getByRole('button', { name: 'delete' });
});
