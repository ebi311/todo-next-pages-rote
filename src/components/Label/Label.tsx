import classNames from 'classnames';
import React, { PropsWithChildren, useId } from 'react';

export type LabelProps = {
  label: string | JSX.Element;
  supplementalText?: string | JSX.Element;
};

type Props = { htmlFor: string } & LabelProps & PropsWithChildren;

const className = classNames('flex', 'flex-col', 'items-start', 'gap-0');

export const Label: React.FC<Props> = ({
  label,
  supplementalText,
  htmlFor,
  children,
}) => {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="label pb-1">
        <span className="label-text">{label}</span>
      </label>
      {children}
      <div className="label pt-1">
        <span className="label-text-alt text-opacity-50">
          {supplementalText}
        </span>
      </div>
    </div>
  );
};
