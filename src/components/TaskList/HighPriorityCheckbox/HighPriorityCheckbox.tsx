import { CheckBox } from '@/components/CheckBox';
import React from 'react';

type Props = {
  onlyHighPriority: boolean;
};

export const HighPriorityCheckbox: React.FC<Props> = ({ onlyHighPriority }) => {
  return (
    <CheckBox
      label='優先度 "高" のみ'
      checked={onlyHighPriority}
      aria-label="high-priority"
    />
  );
};
