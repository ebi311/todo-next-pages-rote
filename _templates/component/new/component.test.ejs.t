---
to: src/<%= path %>/<%= name %>/<%= name %>.test.tsx
---
import '@testing-library/jest-dom';
import { render as _render, screen } from '@testing-library/react';
import { ComponentProps } from 'react';
import { <%= name %> } from './<%= name %>';

const render = (props: ComponentProps<typeof <%= name %>>) => {
  return _render(<<%= name %> {...props} />);
};

test('renders', () => {
  render({});
  expect(screen.getByTestId('<%= name %>-container')).toBeInTheDocument();
});