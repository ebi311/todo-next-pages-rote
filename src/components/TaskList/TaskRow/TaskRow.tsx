import { PriorityIcon } from '@/components/PriorityIcon';
import { Task } from '@/models/task';
import classNames from 'classnames';
import React from 'react';
import { Deadline } from '../Deadline';
import { TaskBody } from '../TaskBody';
import { TaskStatusCheckbox } from '../TaskStatusCheckbox';
import { TaskTitle } from '../TaskTitle';

type Props = {
  task: Task;
};

const className = classNames(
  'grid',
  'grid-cols-[auto,auto,1fr,auto]',
  'items-center',
  'gap-x-4',
  'gap-y-2',
  'border-b',
  'border-base-300',
  'm-2',
  'rounded',
  'p-2',
  'hover:bg-primary',
  'hover:bg-opacity-10',
);

const taskRow: React.FC<Props> = ({ task }) => {
  return (
    <li role="row" aria-label="task-list-row">
      <a className={className} href={`/tasks/${task.id}`}>
        <div
          role="cell"
          className="row-span-2 flex items-center content-center"
        >
          <TaskStatusCheckbox taskStatus={task.status} />
        </div>
        <PriorityIcon priority={task.priority} />
        <TaskTitle taskTitle={task.title} />
        <Deadline deadline={task.deadline} />
        <div role="cell" className="col-span-3">
          <TaskBody taskBody={task.body} />
        </div>
      </a>
    </li>
  );
};

export const TaskRow = React.memo(taskRow);
