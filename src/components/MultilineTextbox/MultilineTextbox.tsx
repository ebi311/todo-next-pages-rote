import classNames from 'classnames';
import React from 'react';

type Props = {
  label: string | JSX.Element;
  supplementalText?: string;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const MultilineTextbox: React.FC<Props> = (props) => {
  const { label, supplementalText, className: _className, ...rest } = props;
  const className = classNames('textarea textarea-bordered', _className);
  return (
    <label className="label flex flex-col items-start">
      <span className="label-text">{label}</span>
      <textarea className={className} {...rest} />
      <span className="label-text-alt text-opacity-50">{supplementalText}</span>
    </label>
  );
};
