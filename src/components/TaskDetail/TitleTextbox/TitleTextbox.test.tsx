import { Task } from '@/models/task';
import { render as _render, fireEvent, screen } from '@testing-library/react';
import { ComponentProps } from 'react';
import { useForm } from 'react-hook-form';
import { TitleTextbox } from './TitleTextbox';

const FormedTitleTextbox = (
  props: Omit<ComponentProps<typeof TitleTextbox>, 'register'>,
) => {
  const { register, watch } = useForm<Task>({
    defaultValues: {
      title: 'Task 1',
    },
  });
  return (
    <>
      <TitleTextbox {...props} register={register} />
      <span data-testid="title">{watch('title')}</span>
    </>
  );
};

const render = (
  props: Omit<ComponentProps<typeof TitleTextbox>, 'register'>,
) => {
  const { rerender, ...rest } = _render(<FormedTitleTextbox {...props} />);
  return {
    ...rest,
    rerender: (newProps: Partial<typeof props>) =>
      rerender(<FormedTitleTextbox {...props} {...newProps} />),
  };
};

test('renders', () => {
  render({});
  const titleTextbox = screen.getByLabelText('タイトル');
  expect(titleTextbox).toHaveValue('Task 1');
  const title = screen.getByTestId('title');
  expect(title).toHaveTextContent('Task 1');
  fireEvent.change(titleTextbox, { target: { value: 'Task 2' } });
  expect(title).toHaveTextContent('Task 2');
});
