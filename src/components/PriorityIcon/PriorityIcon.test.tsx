import { render as _render, screen } from '@testing-library/react';
import { ComponentProps } from 'react';
import { PriorityIcon } from './PriorityIcon';

const render = (props: ComponentProps<typeof PriorityIcon>) => {
  const { rerender, ...rest } = _render(<PriorityIcon {...props} />);
  return {
    ...rest,
    rerender: (newProps: Partial<typeof props>) =>
      rerender(<PriorityIcon {...props} {...newProps} />),
  };
};

test('renders', () => {
  const { rerender } = render({
    priority: 'high',
  });
  const icon = screen.getByRole('img', { name: 'priority-icon' });
  expect(icon).toHaveClass('text-priority-high');
  rerender({ priority: 'low' });
  expect(icon).toHaveClass('text-priority-low');
  rerender({ priority: 'medium' });
  expect(icon).toHaveClass('text-priority-medium');
});
