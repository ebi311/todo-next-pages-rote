import { Meta, StoryObj } from '@storybook/react';

import { useForm } from 'react-hook-form';
import { MultilineTextbox, MultilineTextboxHF } from './MultilineTextbox';

export default {
  title: 'components/MultilineTextbox',
  component: MultilineTextbox,
  tags: ['autodocs'],
} as Meta<typeof MultilineTextbox>;

type Story = StoryObj<typeof MultilineTextbox>;

export const Default: Story = {
  args: {
    label: 'ラベル',
    value: '値・・・',
    supplementalText: '補足テキスト',
  },
};

export const AddStyle: Story = {
  args: {
    label: 'ラベル',
    value: '値・・・',
    className: 'textarea-primary w-full',
  },
};

const HF = () => {
  const { control, watch } = useForm({
    defaultValues: {
      body: '内容・・・',
    },
  });
  return (
    <>
      <MultilineTextboxHF control={control} property="body" label="内容" />
      {watch('body')}
    </>
  );
};

export const WithHookForm: Story = {
  args: {},
  render: () => <HF />,
};
