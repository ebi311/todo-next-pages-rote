import { render as _render, fireEvent, screen } from '@testing-library/react';
import { ComponentProps } from 'react';
import { SearchTaskNameTextbox } from './SearchTaskNameTextbox';

const render = (props: ComponentProps<typeof SearchTaskNameTextbox>) => {
  const { rerender, ...rest } = _render(<SearchTaskNameTextbox {...props} />);
  return {
    ...rest,
    rerender: (newProps: Partial<typeof props>) =>
      rerender(<SearchTaskNameTextbox {...props} {...newProps} />),
  };
};

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

test('renders', async () => {
  const search = jest.fn();
  render({
    searchString: 'たすく',
    search,
  });
  const textBox = screen.getByRole('textbox', { name: 'search-task-name' });
  expect(textBox).toHaveValue('たすく');
});

test('onChange', async () => {
  const search = jest.fn();
  render({
    searchString: 'たすく',
    search,
  });
  const textBox = screen.getByRole('textbox', { name: 'search-task-name' });
  // テキストを変更した直後には、search が呼ばれない
  fireEvent.change(textBox, { target: { value: 'たすく1' } });
  expect(search).not.toHaveBeenCalled();
  // 500ms 後に search が呼ばれる
  await sleep(500);
  expect(search).toHaveBeenCalledWith('たすく1');
  // 500ms 以内にテキストを変更した場合、search が呼ばれない
  search.mockClear();
  fireEvent.change(textBox, { target: { value: 'たすく2' } });
  await sleep(100);
  expect(search).not.toHaveBeenCalled();
  fireEvent.change(textBox, { target: { value: 'たすく3' } });
  await sleep(400);
  expect(search).not.toHaveBeenCalled();
  await sleep(100);
  expect(search).toHaveBeenCalledWith('たすく3');
});
