import { Meta, StoryObj } from '@storybook/react';

import { useForm } from 'react-hook-form';
import { MdBuild, MdHome } from 'react-icons/md';
import { RadioButtonList, RadioButtonListHook } from './RadioButtonList';

export default {
  title: 'components/RadioButtonList',
  component: RadioButtonList,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <form>
        <Story />
      </form>
    ),
  ],
} as Meta<typeof RadioButtonList>;

type Story = StoryObj<typeof RadioButtonList>;

export const Default: Story = {
  args: {
    options: [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
    ],
    selected: '1',
    name: 'radio',
  },
};

export const WithTheme: Story = {
  args: {
    options: [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
    ],
    selected: '1',
    name: 'radio',
    className: 'radio-primary',
  },
};

export const ElementLabel: Story = {
  args: {
    options: [
      { label: <MdHome />, value: '1' },
      { label: <MdBuild />, value: '2' },
    ],
    selected: '1',
    name: 'radio',
    className: 'radio-primary',
  },
};

export const Vertical: Story = {
  args: {
    options: [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
    ],
    selected: '1',
    name: 'radio',
    vertical: true,
  },
};

export const HookForm: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { control, watch } = useForm({
      defaultValues: {
        radio: '1',
      },
    });
    return (
      <div>
        <RadioButtonListHook
          options={[
            { label: 'Option 1', value: '1' },
            { label: 'Option 2', value: '2' },
          ]}
          control={control}
          property="radio"
          name="radio"
        />
        <span>Selected value: {watch('radio')}</span>
      </div>
    );
  },
};
