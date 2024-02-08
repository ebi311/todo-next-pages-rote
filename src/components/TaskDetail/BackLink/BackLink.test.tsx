import { render as _render, screen } from '@testing-library/react';
import { ComponentProps } from 'react';
import { BackLink } from './BackLink';

const render = (props: ComponentProps<typeof BackLink>) => {
  const { rerender, ...rest } = _render(<BackLink {...props} />);
  return {
    ...rest,
    rerender: (newProps: Partial<typeof props>) =>
      rerender(<BackLink {...props} {...newProps} />),
  };
};

test('renders', () => {
  render({
    href: '/list',
  });
  const link = screen.getByText(/一覧に戻る/);
  expect(link).toHaveAttribute('href', '/list');
});
