import { render as _render, screen } from '@testing-library/react';
import { ComponentProps } from 'react';
import { DateInput } from './DateInput';

const render = (props: ComponentProps<typeof DateInput>) => {
  const { rerender, ...rest } = _render(<DateInput {...props} />);
  return {
    ...rest,
    rerender: (newProps: Partial<typeof props>) =>
      rerender(<DateInput {...props} {...newProps} />),
  };
};

test('renders', () => {
  const onChange = jest.fn();
  render({
    label: '日付',
    selected: new Date('2024-02-04'),
    onChange,
  });
  const dateInput = screen.getByLabelText('日付');
  expect(dateInput).toBeInTheDocument();
  expect(dateInput).toHaveValue('2024/02/04');
});
