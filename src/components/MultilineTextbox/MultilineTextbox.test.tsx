import { render as _render, screen } from '@testing-library/react';
import { ComponentProps } from 'react';
import { MultilineTextbox } from './MultilineTextbox';

const render = (props: ComponentProps<typeof MultilineTextbox>) => {
  const { rerender, ...rest } = _render(<MultilineTextbox {...props} />);
  return {
    ...rest,
    rerender: (newProps: Partial<typeof props>) =>
      rerender(<MultilineTextbox {...props} {...newProps} />),
  };
};

test('renders', () => {
  render({
    value: '値・・・',
    label: 'ラベル',
    className: 'additionalClassName',
  });
  const textArea = screen.getByLabelText('ラベル');
  expect(textArea).toHaveValue('値・・・');
  expect(textArea).toHaveClass(
    'additionalClassName',
    'textarea',
    'textarea-bordered',
  );
});
