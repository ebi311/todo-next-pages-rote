import React from 'react';
import { IconType } from 'react-icons';
import { ImArrowDown, ImArrowRight, ImArrowUp } from 'react-icons/im';
import { TaskPriority } from '../../models/task';

type Props = {
  priority: TaskPriority;
};

const priorityValues: Record<
  TaskPriority,
  { className: string; icon: IconType }
> = {
  high: {
    className: 'text-priority-high rotate-45',
    icon: ImArrowUp,
  },
  medium: {
    className: 'text-priority-medium',
    icon: ImArrowRight,
  },
  low: {
    className: 'text-priority-low rotate-[315deg]',
    icon: ImArrowDown,
  },
};

export const PriorityIcon: React.FC<Props> = ({ priority }) => {
  const { className, icon: Icon } = priorityValues[priority];
  return (
    <div role="img" aria-label="priority-icon">
      <Icon className={className} />
    </div>
  );
};
