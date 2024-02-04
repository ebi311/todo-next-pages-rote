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

test('renders', () => {
  render({
    label: 'Title',
    value: 'Task 1',
    className: 'additional-class',
    supplementalText: 'Supplemental text',
    containerClassName: 'add-container-class',
  });
  const textbox = screen.getByLabelText('Title');
  expect(textbox).toBeInTheDocument();
  expect(textbox).toHaveValue('Task 1');
  expect(textbox).toHaveClass('additional-class', 'input', 'input-bordered');
  expect(screen.getByText('Supplemental text')).toBeInTheDocument();
  const container = textbox.parentElement;
  expect(container).toHaveClass('add-container-class');
});
