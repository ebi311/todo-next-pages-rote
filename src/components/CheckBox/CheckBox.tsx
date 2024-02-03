import classNames from 'classnames';
import React from 'react';

type Props = {
  label: string;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'>;

export const CheckBox: React.FC<Props> = (props) => {
  const { label, className: _className, ...rest } = props;
  const className = classNames(_className, 'checkbox');
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <input type="checkbox" {...rest} className={className} />
      <span>{label}</span>
    </label>
  );
};
