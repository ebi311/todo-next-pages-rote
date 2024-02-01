import { render as _render, screen } from '@testing-library/react';
import { ComponentProps } from 'react';
import { Layout } from './Layout';

const render = (props: ComponentProps<typeof Layout>) => {
  const { rerender, ...rest } = _render(<Layout {...props} />);
  return {
    ...rest,
    rerender: (newProps: Partial<typeof props>) =>
      rerender(<Layout {...props} {...newProps} />),
  };
};

test('renders', () => {
  const { rerender } = render({
    pageTitle: 'タイトル',
    children: <p>コンテンツ</p>,
  });
  expect(screen.getByText('コンテンツ')).toBeInTheDocument();
  let header = screen.getByRole('heading', { name: 'page-title' });
  expect(header).toHaveTextContent('タイトル');
  rerender({ pageTitle: '新しいタイトル' });
  expect(header).toHaveTextContent('新しいタイトル');
});
