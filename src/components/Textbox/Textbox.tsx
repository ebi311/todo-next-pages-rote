import classNames from 'classnames';
import React, { useId } from 'react';
import { FieldPath, UseFormRegister } from 'react-hook-form';
import { Label } from '../Label';

type Props<T extends Record<string, unknown>> = {
  label: string;
  supplementalText?: string;
  hookFormProps?: {
    register: UseFormRegister<T>;
    property: FieldPath<T>;
  };
  hasError?: boolean;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'>;

export const Textbox = <T extends Record<string, unknown> = { '': unknown }>(
  props: Props<T>,
) => {
  const {
    label,
    className: _className,
    supplementalText,
    hookFormProps,
    hasError = false,
    ...rest
  } = props;
  const className = classNames('input', 'input-bordered', _className, {
    'input-error': hasError,
  });
  const id = useId();
  return (
    <Label
      htmlFor={id}
      label={label}
      supplementalText={supplementalText}
      hasError={hasError}
    >
      <input
        id={id}
        type="text"
        className={className}
        {...rest}
        {...(hookFormProps && hookFormProps.register(hookFormProps.property))}
      />
    </Label>
  );
};
