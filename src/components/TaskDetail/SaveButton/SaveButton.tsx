import React from 'react';
import { MdOutbox } from 'react-icons/md';

type Props = {};

export const SaveButton: React.FC<Props> = (props) => {
  return (
    <button
      className="btn btn-outline btn-sm btn-primary flex items-center"
      aria-label="save"
    >
      <MdOutbox />
      保存
    </button>
  );
};
