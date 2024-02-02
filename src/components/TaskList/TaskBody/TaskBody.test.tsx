import { render as _render, screen } from '@testing-library/react';
import { ComponentProps } from 'react';
import { TaskBody } from './TaskBody';

const render = (props: ComponentProps<typeof TaskBody>) => {
  const { rerender, ...rest } = _render(<TaskBody {...props} />);
  return {
    ...rest,
    rerender: (newProps: Partial<typeof props>) =>
      rerender(<TaskBody {...props} {...newProps} />),
  };
};

test('renders', () => {
  render({
    taskBody: 'task body .. .. ..',
  });
  const body = screen.getByText('task body .. .. ..');
  expect(body).toBeInTheDocument();
});
