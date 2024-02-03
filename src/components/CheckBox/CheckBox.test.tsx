import { render as _render, screen } from '@testing-library/react';
import { ComponentProps } from 'react';
import { CheckBox } from './CheckBox';

const render = (props: ComponentProps<typeof CheckBox>) => {
  const {rerender, ...rest} = _render(<CheckBox {...props} />);
  return {
    ...rest,
    rerender: (newProps: Partial<typeof props>) =>
      rerender(<CheckBox {...props} {...newProps} />),
  };
};

test('renders', () => {
  render({});
  expect(screen.getByTestId('CheckBox-container')).toBeInTheDocument();
});