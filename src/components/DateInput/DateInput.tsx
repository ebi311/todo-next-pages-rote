import React, { useCallback } from 'react';
import DatePicker from 'react-datepicker';
import { Control, Path, useController } from 'react-hook-form';
import { MdCalendarMonth } from 'react-icons/md';

type Props = {
  label: string;
} & React.ComponentProps<typeof DatePicker>;

const dateInput = (props: Props) => {
  const { label, ...rest } = props;
  return (
    <label className="flex flex-col gap-0 items-start label">
      <span className="label-text">{label}</span>
      <span className="relative">
        <DatePicker
          {...rest}
          dateFormat="yyyy/MM/dd"
          className="input input-bordered w-36"
        />
        <MdCalendarMonth
          size="1.5rem"
          className="opacity-50 inline-block ml-[-2.5rem] absolute top-1/2 transform -translate-y-1/2 right-2"
        />
      </span>
    </label>
  );
};

export const DateInput = React.memo(dateInput);

type HookProps<T extends Record<string, unknown>> = {
  control: Control<T>;
  property: Path<T>;
  label: string;
};

export const DateInputHook = <T extends Record<string, unknown>>(
  props: HookProps<T>,
) => {
  const { control, property, label, ...rest } = props;
  const { field } = useController({
    control,
    name: property,
  });
  const handleChange = useCallback(
    (date: Date) => {
      field.onChange(date);
    },
    [field],
  );

  return (
    <DateInput
      label={label}
      selected={field.value as Date}
      onChange={handleChange}
    />
  );
};
