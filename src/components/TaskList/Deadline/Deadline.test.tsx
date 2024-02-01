import { render as _render, screen } from '@testing-library/react';
import { ComponentProps } from 'react';
import { Deadline } from './Deadline';
import MockDate from 'mockdate';

MockDate.set('2024-01-01T00:00:00+09:00');

const render = (props: ComponentProps<typeof Deadline>) => {
  const { rerender, ...rest } = _render(<Deadline {...props} />);
  return {
    ...rest,
    rerender: (newProps: Partial<typeof props>) =>
      rerender(<Deadline {...props} {...newProps} />),
  };
};

test('renders', () => {
  const { rerender } = render({
    deadline: new Date('2024-01-02T00:00:00+09:00'),
  });
  const deadline = screen.getByTestId('deadline');
  expect(deadline).toHaveTextContent('2024/01/02');
  expect(deadline).toHaveAttribute('datetime', '2024-01-01T15:00:00.000Z');
  expect(deadline).not.toHaveClass('text-over-deadline');

  rerender({
    deadline: new Date('2024-01-01T00:00:00+09:00'),
  });
  expect(deadline).toHaveTextContent('2024/01/01');
  expect(deadline).toHaveAttribute('datetime', '2023-12-31T15:00:00.000Z');
  expect(deadline).toHaveClass('text-over-deadline');

  rerender({
    deadline: new Date('2024-01-01T23:59:59+09:00'),
  });
  expect(deadline).toHaveTextContent('2024/01/01');
  expect(deadline).toHaveAttribute('datetime', '2024-01-01T14:59:59.000Z');
  expect(deadline).toHaveClass('text-over-deadline');
});
