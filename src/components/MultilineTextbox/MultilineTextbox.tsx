import classNames from 'classnames';
import React, { useId } from 'react';
import { Label, LabelProps } from '../Label';
import { Control, Path, useController } from 'react-hook-form';

type Props = LabelProps & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const FcMultilineTextbox: React.FC<Props> = (props) => {
  const { label, supplementalText, className: _className, ...rest } = props;
  const className = classNames('textarea textarea-bordered', _className);
  const id = useId();
  return (
    <Label htmlFor={id} label={label} supplementalText={supplementalText}>
      <textarea id={id} className={className} {...rest} />
    </Label>
  );
};

export const MultilineTextbox = React.memo(FcMultilineTextbox);

type PropsHF<T extends Record<string, unknown>> = {
  control: Control<T>;
  property: Path<T>;
} & Omit<Props, 'value' | 'onChange'>;

export const MultilineTextboxHF = <T extends Record<string, unknown>>({
  control,
  property,
  ...rest
}: PropsHF<T>) => {
  const { field } = useController({
    control,
    name: property,
  });
  return (
    <MultilineTextbox
      {...rest}
      value={field.value as string}
      onChange={field.onChange}
    />
  );
};
