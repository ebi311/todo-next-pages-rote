import { render as _render, fireEvent, screen } from '@testing-library/react';
import { ComponentProps } from 'react';
import { Conditions } from './Conditions';

const replace = jest.fn();
jest.mock('next/router', () => ({
  useRouter: () => ({
    replace,
  }),
}));

const render = (props: ComponentProps<typeof Conditions>) => {
  const { rerender, ...rest } = _render(<Conditions {...props} />);
  return {
    ...rest,
    rerender: (newProps: Partial<typeof props>) =>
      rerender(<Conditions {...props} {...newProps} />),
  };
};

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

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
});

test('change high priority', async () => {
  render({
    searchText: 'Search text',
    highPriority: true,
    includeDone: false,
  });
  const highPriorityCheckbox = screen.getByRole('checkbox', {
    name: 'high-priority',
  });
  fireEvent.click(highPriorityCheckbox);
  expect(replace).toHaveBeenCalledWith({
    query: {
      partialTitle: 'Search text',
      highPriorityOnly: false,
      includeDone: false,
    },
  });
});

test('change include done', async () => {
  render({
    searchText: 'Search text',
    highPriority: true,
    includeDone: false,
  });
  const includeDoneCheckbox = screen.getByRole('checkbox', {
    name: 'include-done',
  });
  fireEvent.click(includeDoneCheckbox);
  expect(replace).toHaveBeenCalledWith({
    query: {
      partialTitle: 'Search text',
      highPriorityOnly: true,
      includeDone: true,
    },
  });
});

test('change search text', async () => {
  render({
    searchText: 'Search text',
    highPriority: true,
    includeDone: false,
  });
  const textBox = screen.getByRole('textbox', { name: 'search-task-name' });
  fireEvent.change(textBox, { target: { value: 'New search text' } });
  expect(textBox).toHaveValue('New search text');
  await sleep(500);
  expect(replace).toHaveBeenCalledWith({
    query: {
      partialTitle: 'New search text',
      highPriorityOnly: true,
      includeDone: false,
    },
  });
});
