import classNames from 'classnames';
import React, { useCallback, useMemo } from 'react';
import { Control, Path, useController } from 'react-hook-form';

type Props = {
  options: { label: string; value: string }[];
  selected: string;
  onChange?: (value: string) => void;
  name: string;
  vertical?: boolean;
} & Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'type' | 'value' | 'onChange' | 'name'
>;

export const RadioButtonList: React.FC<Props> = ({
  options,
  selected,
  onChange,
  name,
  className: _className,
  vertical,
  ...rest
}) => {
  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      onChange?.(value);
    },
    [onChange],
  );

  const className = classNames('radio', 'cursor-pointer', _className);

  const optionButtons = useMemo(() => {
    return options.map((option) => (
      <li key={option.value}>
        <label className="label justify-start gap-2">
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={option.value === selected}
            onChange={handleChange}
            className={className}
            {...rest}
          />
          <span className="label-text cursor-pointer">{option.label}</span>
        </label>
      </li>
    ));
  }, [className, handleChange, name, options, rest, selected]);

  const ulClassName = classNames(
    'flex',
    { 'gap-4': !vertical },
    { 'flex-col': vertical },
  );

  return <ul className={ulClassName}>{optionButtons}</ul>;
};

type HookProps<T extends Record<string, unknown>> = {
  control: Control<T>;
  property: Path<T>;
} & Omit<Props, 'onChange' | 'selected'>;

export const RadioButtonListHook = <T extends Record<string, unknown>>({
  control,
  property,
  ...rest
}: HookProps<T>) => {
  const { field } = useController({
    control,
    name: property,
  });
  return (
    <RadioButtonList
      {...rest}
      selected={field.value as string}
      onChange={field.onChange}
    />
  );
};
