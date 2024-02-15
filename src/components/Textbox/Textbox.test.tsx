import { render as _render, screen } from '@testing-library/react';
import { ComponentProps } from 'react';
import { Textbox } from './Textbox';

const render = (props: ComponentProps<typeof Textbox>) => {
  const { rerender, ...rest } = _render(<Textbox {...props} />);
  return {
    ...rest,
    rerender: (newProps: Partial<typeof props>) =>
      rerender(<Textbox {...props} {...newProps} />),
  };
};

const props: ComponentProps<typeof Textbox> = {
  label: 'Title',
  value: 'Task 1',
  className: 'additional-class',
  supplementalText: 'Supplemental text',
};

test('renders', () => {
  const { rerender } = render(props);
  const textbox = screen.getByLabelText('Title');
  expect(textbox).toBeInTheDocument();
  expect(textbox).toHaveValue('Task 1');
  expect(textbox).toHaveClass('additional-class', 'input', 'input-bordered');
  const supplementalText = screen.getByText('Supplemental text');
  expect(supplementalText).toBeInTheDocument();
  // error の表示
  rerender({ ...props, hasError: true });
  expect(textbox).toHaveClass('input-error');
  expect(supplementalText).toHaveClass('text-error');
});
