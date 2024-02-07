import { render as _render, screen } from '@testing-library/react';
import { ComponentProps } from 'react';
import { BodyTextbox } from './BodyTextbox';
import { useForm } from 'react-hook-form';
import { Task } from '@/models/task';

const HF = () => {
  const { control } = useForm<Task>({
    defaultValues: {
      body: '内容・・・',
    },
  });
  return <BodyTextbox control={control} />;
};

const render = () => {
  const { rerender, ...rest } = _render(<HF />);
  return {
    ...rest,
    rerender: () => rerender(<HF />),
  };
};

test('renders', () => {
  render();
  const body = screen.getByLabelText(/内容/);
  expect(body).toHaveValue('内容・・・');
});
