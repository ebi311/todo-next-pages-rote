import { render as _render, screen } from '@testing-library/react';
import { ComponentProps } from 'react';
import { Label } from './Label';

const render = (props: ComponentProps<typeof Label>) => {
  const { rerender, ...rest } = _render(<Label {...props} />);
  return {
    ...rest,
    rerender: (newProps: Partial<typeof props>) =>
      rerender(<Label {...props} {...newProps} />),
  };
};

test('render text label', () => {
  render({
    label: 'ラベル',
    supplementalText: '補足テキスト',
    children: <input />,
    htmlFor: 'id',
  });
  const label = screen.getByText('ラベル');
  expect(label).toHaveClass('label-text');
  const supplementalText = screen.getByText('補足テキスト');
  expect(supplementalText).toHaveClass('label-text-alt');
  const input = screen.getByRole('textbox');
  expect(input).toBeInTheDocument();

  // error の表示
});

test('render element label', () => {
  const element = <span id="label">ラベル</span>;
  const supplementalElement = <span id="supplementalText">補足テキスト</span>;
  render({
    htmlFor: 'id',
    label: element,
    supplementalText: supplementalElement,
  });
  const label = screen.getByText('ラベル');
  expect(label).toHaveAttribute('id', 'label');
  const supplementalText = screen.getByText('補足テキスト');
  expect(supplementalText).toHaveAttribute('id', 'supplementalText');
});
