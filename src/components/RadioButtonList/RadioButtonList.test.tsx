import { render as _render, fireEvent, screen } from '@testing-library/react';
import { ComponentProps } from 'react';
import { RadioButtonList, RadioButtonListHook } from './RadioButtonList';
import { useForm } from 'react-hook-form';

const render = (props: ComponentProps<typeof RadioButtonList>) => {
  const { rerender, ...rest } = _render(<RadioButtonList {...props} />);
  return {
    ...rest,
    rerender: (newProps: Partial<typeof props>) =>
      rerender(<RadioButtonList {...props} {...newProps} />),
  };
};

test('renders', () => {
  const onChange = jest.fn();
  render({
    options: [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
    ],
    selected: '1',
    name: 'radio',
    onChange,
  });
  const radioButtons = screen.getAllByRole('radio');
  expect(radioButtons).toHaveLength(2);
  const option1 = screen.getByLabelText('Option 1');
  expect(option1).toBeChecked();
  const option2 = screen.getByLabelText('Option 2');
  expect(option2).not.toBeChecked();
  fireEvent.click(option2);
  expect(onChange).toHaveBeenCalledWith('2');
});

const HookComponent = () => {
  const { control } = useForm({
    defaultValues: {
      radio: '1',
    },
  });
  return (
    <RadioButtonListHook
      control={control}
      property="radio"
      options={[
        { label: 'Option 1', value: '1' },
        { label: 'Option 2', value: '2' },
      ]}
      name="radio"
    />
  );
};

test('hook form', () => {
  _render(<HookComponent />);
  const radio1 = screen.getByLabelText('Option 1');
  expect(radio1).toBeChecked();
  const radio2 = screen.getByLabelText('Option 2');
  expect(radio2).not.toBeChecked();
  fireEvent.click(radio2);
  expect(radio2).toBeChecked();
  expect(radio1).not.toBeChecked();
});
