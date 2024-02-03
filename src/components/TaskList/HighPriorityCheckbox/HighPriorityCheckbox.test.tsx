import { render as _render, screen } from '@testing-library/react';
import { ComponentProps } from 'react';
import { HighPriorityCheckbox } from './HighPriorityCheckbox';

const render = (props: ComponentProps<typeof HighPriorityCheckbox>) => {
  const { rerender, ...rest } = _render(<HighPriorityCheckbox {...props} />);
  return {
    ...rest,
    rerender: (newProps: Partial<typeof props>) =>
      rerender(<HighPriorityCheckbox {...props} {...newProps} />),
  };
};

test('renders', () => {
  const { rerender } = render({
    onlyHighPriority: false,
  });
  const checkbox = screen.getByRole('checkbox', { name: 'high-priority' });
  expect(checkbox).not.toBeChecked();
  rerender({
    onlyHighPriority: true,
  });
  expect(checkbox).toBeChecked();
});
