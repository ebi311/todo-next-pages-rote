import { Task, TaskStatus } from '@/models/task';
import React from 'react';
import { BackLink } from '../BackLink';
import { DeleteButton } from '../DeleteButton';
import { DoneButton } from '../DoneButton';
import { ReturnTodoButton } from '../ReturnTodoButton';
import { SaveButton } from '../SaveButton';

type Props = {
  task: Task;
};

const doneButton: Record<TaskStatus, JSX.Element> = {
  todo: <DoneButton />,
  done: <ReturnTodoButton />,
};

export const Actions: React.FC<Props> = (props) => {
  return (
    <div className="flex justify-between">
      <BackLink href="/" />
      <div className="flex items-baseline gap-2">
        <DeleteButton />
        <SaveButton />
        {doneButton[props.task.status]}
      </div>
    </div>
  );
};
