import React, { useCallback, useId } from 'react';
import DatePicker from 'react-datepicker';
import { Control, Path, useController } from 'react-hook-form';
import { MdCalendarMonth } from 'react-icons/md';
import { Label, LabelProps } from '../Label';

type Props = LabelProps & React.ComponentProps<typeof DatePicker>;

const FcDateInput: React.FC<Props> = (props) => {
  const { label, supplementalText, ...rest } = props;
  const id = useId();
  return (
    <Label htmlFor={id} label={label} supplementalText={supplementalText}>
      <span className="relative">
        <DatePicker
          id={id}
          {...rest}
          dateFormat="yyyy/MM/dd"
          className="input input-bordered w-36"
        />
        <MdCalendarMonth
          size="1.5rem"
          className="opacity-50 inline-block ml-[-2.5rem] absolute top-1/2 transform -translate-y-1/2 right-2"
        />
      </span>
    </Label>
  );
};

export const DateInput = React.memo(FcDateInput);

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
