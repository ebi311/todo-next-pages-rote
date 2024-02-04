import { CheckBox } from '@/components/CheckBox';
import type { QueryParams } from '@/pages';
import React, { useCallback } from 'react';

type Props = {
  includeDoneTasks: boolean;
  onChange: (condition: Pick<QueryParams, 'includeDone'>) => void;
};

export const IncludeDoneTasks: React.FC<Props> = ({
  includeDoneTasks,
  onChange,
}) => {
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange({ includeDone: e.target.checked });
    },
    [onChange],
  );

  return (
    <CheckBox
      label='"完了" を含む'
      checked={includeDoneTasks}
      aria-label="include-done"
      onChange={handleChange}
    />
  );
};
