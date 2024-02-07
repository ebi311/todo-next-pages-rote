import { render as _render, fireEvent, screen } from '@testing-library/react';
import { ComponentProps } from 'react';
import { MultilineTextbox, MultilineTextboxHF } from './MultilineTextbox';
import { useForm } from 'react-hook-form';
import { Task } from '@/models/task';

const render = (props: ComponentProps<typeof MultilineTextbox>) => {
  const { rerender, ...rest } = _render(<MultilineTextbox {...props} />);
  return {
    ...rest,
    rerender: (newProps: Partial<typeof props>) =>
      rerender(<MultilineTextbox {...props} {...newProps} />),
  };
};

test('renders', () => {
  render({
    value: '値・・・',
    label: 'ラベル',
    className: 'additionalClassName',
  });
  const textArea = screen.getByLabelText('ラベル');
  expect(textArea).toHaveValue('値・・・');
  expect(textArea).toHaveClass(
    'additionalClassName',
    'textarea',
    'textarea-bordered',
  );
});

const HF = () => {
  const { control } = useForm({
    defaultValues: {
      body: '内容・・・',
    },
  });
  return <MultilineTextboxHF control={control} property="body" label="内容" />;
};

test('rendersHF', () => {
  _render(<HF />);
  const textArea = screen.getByLabelText('内容');
  expect(textArea).toHaveValue('内容・・・');
  fireEvent.change(textArea, { target: { value: '新しい値' } });
  expect(textArea).toHaveValue('新しい値');
});
