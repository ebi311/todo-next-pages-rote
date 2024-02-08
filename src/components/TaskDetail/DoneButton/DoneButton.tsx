import React from 'react';
import { MdCheckCircle } from 'react-icons/md';

type Props = {};

export const DoneButton: React.FC<Props> = (props) => {
  return (
    <button
      className="btn btn-success btn-sm flex items-center"
      aria-label="done"
    >
      <MdCheckCircle />
      完了
    </button>
  );
};
