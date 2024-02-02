import { Task } from '@/models/task';
import classNames from 'classnames';
import React from 'react';

type Props = {
  taskBody: Task['body'];
};

const className = classNames(
  'text-sm',
  'text-base-content',
  'opacity-50',
  'whitespace-nowrap',
  'overflow-hidden',
  'text-ellipsis',
);

export const TaskBody: React.FC<Props> = ({ taskBody }) => {
  return <p className={className}>{taskBody}</p>;
};
