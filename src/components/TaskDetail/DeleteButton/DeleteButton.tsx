import React from 'react';
import { MdDelete } from 'react-icons/md';

type Props = {};

export const DeleteButton: React.FC<Props> = (props) => {
  return (
    <button
      className="btn btn-ghost btn-xs text-error flex items-center"
      aria-label="delete"
    >
      <MdDelete />
      削除
    </button>
  );
};
