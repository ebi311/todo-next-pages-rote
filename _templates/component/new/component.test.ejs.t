---
to: src/<%= path %>/<%= name %>/<%= name %>.test.tsx
---
import { render as _render, screen } from '@testing-library/react';
import { ComponentProps } from 'react';
import { <%= name %> } from './<%= name %>';

const render = (props: ComponentProps<typeof <%= name %>>) => {
  const {rerender, _rest} = _render(<<%= name %> {...props} />);
  return {
    ...rest,
    rerender: (newProps: Partial<typeof props>) =>
      rerender(<<%= name %> {...props} {...newProps} />),
  };
};

test('renders', () => {
  render({});
  expect(screen.getByTestId('<%= name %>-container')).toBeInTheDocument();
});