import { render as _render, screen } from '@testing-library/react';
import { ComponentProps } from 'react';
import { NewTaskLink } from './NewTaskLink';

const render = (props: ComponentProps<typeof NewTaskLink>) => {
  const {rerender, ...rest} = _render(<NewTaskLink {...props} />);
  return {
    ...rest,
    rerender: (newProps: Partial<typeof props>) =>
      rerender(<NewTaskLink {...props} {...newProps} />),
  };
};

test('renders', () => {
  render({});
  expect(screen.getByTestId('NewTaskLink-container')).toBeInTheDocument();
});