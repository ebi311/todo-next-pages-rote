import { CheckBox } from '@/components/CheckBox';
import React from 'react';

type Props = {
  onlyHighPriority: boolean;
  onChange: (value: { highPriorityOnly: boolean }) => void;
};

export const HighPriorityCheckbox: React.FC<Props> = ({
  onlyHighPriority,
  onChange: _onChange,
}) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isOnlyHighPriority = e.target.checked;
    _onChange({ highPriorityOnly: isOnlyHighPriority });
  };
  return (
    <CheckBox
      label='優先度 "高" のみ'
      checked={onlyHighPriority}
      aria-label="high-priority"
      onChange={onChange}
    />
  );
};
