import isSaveOrAfter from 'dayjs/plugin/isSameOrAfter';
import dayjs from 'dayjs';
import React, { useMemo } from 'react';

dayjs.extend(isSaveOrAfter);

type Props = {
  deadline: Date;
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

  return (
    <p className="flex gap-2">
      <label>期日:</label>
      <time dateTime={dateTime} data-testid="deadline" className={className}>
        {deadlineString}
      </time>
    </p>
  );
};
