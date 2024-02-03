import { render as _render, screen } from '@testing-library/react';
import { ComponentProps } from 'react';
import { Conditions } from './Conditions';

const render = (props: ComponentProps<typeof Conditions>) => {
  const { rerender, ...rest } = _render(<Conditions {...props} />);
  return {
    ...rest,
    rerender: (newProps: Partial<typeof props>) =>
      rerender(<Conditions {...props} {...newProps} />),
  };
};

test('renders', () => {
  const { rerender } = render({
    searchText: 'Search text',
    highPriority: true,
    includeDone: false,
  });
  const textBox = screen.getByRole('textbox', { name: 'search-task-name' });
  expect(textBox).toHaveValue('Search text');
  const highPriorityCheckbox = screen.getByRole('checkbox', {
    name: 'high-priority',
  });
  expect(highPriorityCheckbox).toBeChecked();
  const includeDoneCheckbox = screen.getByRole('checkbox', {
    name: 'include-done',
  });
  expect(includeDoneCheckbox).not.toBeChecked();

  rerender({
    searchText: 'New search text',
    highPriority: false,
    includeDone: true,
  });
  expect(textBox).toHaveValue('New search text');
  expect(highPriorityCheckbox).not.toBeChecked();
  expect(includeDoneCheckbox).toBeChecked();
});
