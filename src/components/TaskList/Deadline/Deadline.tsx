import { Task } from '@/models/task';
import dayjs from 'dayjs';
import isSaveOrAfter from 'dayjs/plugin/isSameOrAfter';
import React, { useMemo } from 'react';

dayjs.extend(isSaveOrAfter);

type Props = {
  deadline: Task['deadline'];
};

export const Deadline: React.FC<Props> = ({ deadline }) => {
  const { deadlineString, dateTime, className } = useMemo(
    () => ({
      deadlineString: dayjs(deadline).format('YYYY/MM/DD'),
      dateTime: dayjs(deadline).toISOString(),
      className: dayjs().isSameOrAfter(deadline, 'day')
        ? 'text-over-deadline'
        : '',
    }),
    [deadline],
  );

  if (!deadline) return null;

  return (
    <p className="flex gap-2">
      <label>期日:</label>
      <time dateTime={dateTime} data-testid="deadline" className={className}>
        {deadlineString}
      </time>
    </p>
  );
};
