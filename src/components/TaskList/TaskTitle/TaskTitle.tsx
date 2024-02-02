import { Task } from '@/models/task';

type Props = {
  taskTitle: Task['title'];
};

export const TaskTitle: React.FC<Props> = ({ taskTitle }) => {
  return <span className="text-lg font-bold">{taskTitle}</span>;
};
