import classNames from 'classnames';
import React, { useId } from 'react';
import {
  FieldPath,
  FieldValue,
  UnpackNestedValue,
  UseFormRegister,
} from 'react-hook-form';

type Props<T extends Record<string, unknown>> = {
  label: string;
  supplementalText?: string;
  containerClassName?: string;
  hookFormProps?: {
    register: UseFormRegister<T>;
    property: FieldPath<T>;
  };
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'>;

export const Textbox = <T extends Record<string, unknown> = { dummy: string }>(
  props: Props<T>,
) => {
  const {
    label,
    className: _className,
    containerClassName: _containerClassName,
    supplementalText,
    hookFormProps,
    ...rest
  } = props;
  const className = classNames('input', 'input-bordered', _className);
  const containerClassName = classNames(
    'flex',
    'flex-col',
    'gap-0',
    'items-start',
    _containerClassName,
  );
  const id = useId();
  return (
    <div className={containerClassName}>
      <label htmlFor={id} className="label pb-0">
        <span className="label-text">{label}</span>
      </label>
      <input
        id={id}
        type="text"
        className={className}
        {...rest}
        {...(hookFormProps && hookFormProps.register(hookFormProps.property))}
      />
      <p className="label pt-0">
        <span className="label-text-alt text-opacity-50">
          {supplementalText}
        </span>
      </p>
    </div>
  );
};
