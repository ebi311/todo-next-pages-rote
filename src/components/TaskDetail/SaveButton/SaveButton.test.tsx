import { render as _render, screen } from '@testing-library/react';
import { ComponentProps } from 'react';
import { SaveButton } from './SaveButton';

const render = (props: ComponentProps<typeof SaveButton>) => {
  const { rerender, ...rest } = _render(<SaveButton {...props} />);
  return {
    ...rest,
    rerender: (newProps: Partial<typeof props>) =>
      rerender(<SaveButton {...props} {...newProps} />),
  };
};

test('renders', () => {
  render({});
  const saveButton = screen.getByRole('button', { name: 'save' });
  expect(saveButton).toBeInTheDocument();
});
