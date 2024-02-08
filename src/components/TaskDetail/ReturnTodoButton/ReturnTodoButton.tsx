import React from 'react';

type Props = {};

export const ReturnTodoButton: React.FC<Props> = (props) => {
  return (
    <button className="btn btn-ghost btn-xs" aria-label="return-todo">
      未完了に戻す
    </button>
  );
};
