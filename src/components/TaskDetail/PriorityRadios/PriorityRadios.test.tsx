import { Task } from '@/models/task';
import { render as _render, fireEvent, screen } from '@testing-library/react';
import { ComponentProps } from 'react';
import { useForm } from 'react-hook-form';
import { PriorityRadios } from './PriorityRadios';

type Props = Omit<ComponentProps<typeof PriorityRadios>, 'control'>;

const HookFormWrapper = () => {
  const { control } = useForm<Task>({
    defaultValues: {
      priority: 'medium',
    },
  });
  return <PriorityRadios control={control} />;
};

const render = (props: Props) => {
  const { rerender, ...rest } = _render(<HookFormWrapper {...props} />);
  return {
    ...rest,
    rerender: (newProps: Partial<typeof props>) =>
      rerender(<HookFormWrapper {...props} {...newProps} />),
  };
};

test('renders', () => {
  render({});
  const lowRadio = screen.getByLabelText(/低/);
  expect(lowRadio).not.toBeChecked();
  const mediumRadio = screen.getByLabelText(/中/);
  expect(mediumRadio).toBeChecked();
  const highRadio = screen.getByLabelText(/高/);
  expect(highRadio).not.toBeChecked();
  fireEvent.click(highRadio);
  expect(highRadio).toBeChecked();
  expect(mediumRadio).not.toBeChecked();
  expect(lowRadio).not.toBeChecked();
});
