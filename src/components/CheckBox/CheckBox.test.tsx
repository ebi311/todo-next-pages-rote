import { render as _render, screen } from '@testing-library/react';
import { ComponentProps } from 'react';
import { CheckBox } from './CheckBox';

const render = (props: ComponentProps<typeof CheckBox>) => {
  const { rerender, ...rest } = _render(<CheckBox {...props} />);
  return {
    ...rest,
    rerender: (newProps: Partial<typeof props>) =>
      rerender(<CheckBox {...props} {...newProps} />),
  };
};

test('renders', () => {
  render({
    label: 'label',
    className: 'additional-class',
  });
  const checkbox = screen.getByLabelText('label');
  expect(checkbox).toBeInTheDocument();
  expect(checkbox).toHaveClass('additional-class', 'checkbox');
});
