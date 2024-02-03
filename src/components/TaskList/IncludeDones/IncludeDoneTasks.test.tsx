import { render as _render, screen } from '@testing-library/react';
import { ComponentProps } from 'react';
import { IncludeDoneTasks } from './IncludeDoneTasks';

const render = (props: ComponentProps<typeof IncludeDoneTasks>) => {
  const { rerender, ...rest } = _render(<IncludeDoneTasks {...props} />);
  return {
    ...rest,
    rerender: (newProps: Partial<typeof props>) =>
      rerender(<IncludeDoneTasks {...props} {...newProps} />),
  };
};

test('renders', () => {
  const { rerender } = render({
    includeDoneTasks: false,
  });
  const checkbox = screen.getByRole('checkbox', { name: 'include-done' });
  expect(checkbox).not.toBeChecked();
  rerender({
    includeDoneTasks: true,
  });
  expect(checkbox).toBeChecked();
});
