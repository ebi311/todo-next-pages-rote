import { render as _render, screen } from '@testing-library/react';
import { ComponentProps } from 'react';
import { DoneButton } from './DoneButton';

const render = (props: ComponentProps<typeof DoneButton>) => {
  const { rerender, ...rest } = _render(<DoneButton {...props} />);
  return {
    ...rest,
    rerender: (newProps: Partial<typeof props>) =>
      rerender(<DoneButton {...props} {...newProps} />),
  };
};

test('renders', () => {
  render({});
  const doneButton = screen.getByRole('button', { name: 'done' });
  expect(doneButton).toBeInTheDocument();
});
