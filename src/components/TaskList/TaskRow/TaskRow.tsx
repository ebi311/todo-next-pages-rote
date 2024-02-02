import React from 'react';
import { TaskStatusCheckbox } from '../TaskStatusCheckbox';
import { TaskTitle } from '../TaskTitle';
import { Deadline } from '../Deadline';
import { TaskBody } from '../TaskBody';
import { Task } from '@/models/task';
import classNames from 'classnames';

type Props = {
  task: Task;
};

const className = classNames(
  'grid',
  'grid-cols-[auto,1fr,auto]',
  'gap-x-4',
  'gap-y-2',
  'border-b',
  'border-base-300',
  'pb-2',
  'm-2',
);

const taskRow: React.FC<Props> = ({ task }) => {
  return (
    <li className={className} role="row" aria-label="task-list-row">
      <div role="cell" className="row-span-2 flex items-center content-center">
        <TaskStatusCheckbox taskStatus={task.status} />
      </div>
      <TaskTitle taskTitle={task.title} />
      <Deadline deadline={task.deadline} />
      <div role="cell" className="col-span-2">
        <TaskBody taskBody={task.body} />
      </div>
    </li>
  );
};

export const TaskRow = React.memo(taskRow);