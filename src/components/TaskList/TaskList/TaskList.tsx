import { Task } from '@/models/task';
import React, { useMemo } from 'react';
import { TaskRow } from '../TaskRow';

type Props = {
  tasks: Task[];
};

export const TaskList: React.FC<Props> = ({ tasks }) => {
  const taskList = tasks.map((task) => <TaskRow key={task.id} task={task} />);
  return <ul>{taskList}</ul>;
};
