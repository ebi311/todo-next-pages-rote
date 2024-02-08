import { Task } from '@/models/task';
import { render as _render, fireEvent, screen } from '@testing-library/react';
import { ComponentProps } from 'react';
import { useForm } from 'react-hook-form';
import { DeadlineDateInput } from './DeadlineDateInput';

type OmitRegisterProps = Omit<
  ComponentProps<typeof DeadlineDateInput>,
  'control'
>;

const HookFormDateInput = (props: OmitRegisterProps) => {
  const { control, watch } = useForm<Task>({
    defaultValues: {
      deadline: new Date('2024-02-05'),
    },
  });
  return (
    <>
      <DeadlineDateInput {...props} control={control} />
      <span data-testid="deadline">{watch('deadline')?.toISOString()}</span>
    </>
  );
};

const render = (props: OmitRegisterProps) => {
  const { rerender, ...rest } = _render(<HookFormDateInput {...props} />);
  return {
    ...rest,
    rerender: (newProps: Partial<typeof props>) =>
      rerender(<HookFormDateInput {...props} {...newProps} />),
  };
};

test('renders', () => {
  render({
    deadline: new Date('2024-02-05'),
  });
  const dateInput = screen.getByLabelText('期限');
  expect(dateInput).toBeInTheDocument();
  expect(dateInput).toHaveValue('2024/02/05');
  const deadlineString = screen.getByTestId('deadline');
  expect(deadlineString).toHaveTextContent('2024-02-05T00:00:00.000Z');
  fireEvent.change(dateInput, { target: { value: '2024/02/06' } });
  fireEvent.blur(dateInput);
  expect(dateInput).toHaveValue('2024/02/06');
  expect(deadlineString).toHaveTextContent('2024-02-06T00:00:00.000Z');
});
