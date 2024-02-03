import { CheckBox } from '@/components/CheckBox';
import React from 'react';

type Props = {
  includeDoneTasks: boolean;
};

export const IncludeDoneTasks: React.FC<Props> = ({ includeDoneTasks }) => {
  return (
    <CheckBox
      label='"完了" を含む'
      checked={includeDoneTasks}
      aria-label="include-done"
    />
  );
};
