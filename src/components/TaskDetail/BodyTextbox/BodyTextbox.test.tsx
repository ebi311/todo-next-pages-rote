import { Task } from '@/models/task';
import { render as _render, screen } from '@testing-library/react';
import { useForm } from 'react-hook-form';
import { BodyTextbox } from './BodyTextbox';

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
