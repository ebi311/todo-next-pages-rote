import classNames from 'classnames';
import React, { useId } from 'react';
import { Label, LabelProps } from '../Label';

type Props = LabelProps & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const MultilineTextbox: React.FC<Props> = (props) => {
  const { label, supplementalText, className: _className, ...rest } = props;
  const className = classNames('textarea textarea-bordered', _className);
  const id = useId();
  return (
    <Label htmlFor={id} label={label} supplementalText={supplementalText}>
      <textarea id={id} className={className} {...rest} />
    </Label>
  );
};
