import { Task } from '@/models/task';
import classNames from 'classnames';
import React from 'react';

type Props = {
  taskStatus: Task['status'];
};

export const TaskStatusCheckbox: React.FC<Props> = (props) => {
  const className = classNames('checkbox', 'checkbox-lg', {
    'checkbox-primary': props.taskStatus === 'done',
  });
  return (
    <input
      type="checkbox"
      checked={props.taskStatus === 'done'}
      aria-label="todo-status"
      className={className}
      readOnly
    />
  );
};
