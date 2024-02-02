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
  const iconHolder = screen.getByRole('img', { name: 'priority-icon' });
  expect(iconHolder.firstChild).toHaveClass('text-priority-high');
  rerender({ priority: 'low' });
  expect(iconHolder.firstChild).toHaveClass('text-priority-low');
  rerender({ priority: 'medium' });
  expect(iconHolder.firstChild).toHaveClass('text-priority-medium');
});
