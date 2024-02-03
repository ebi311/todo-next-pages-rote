import React from 'react';

type Props = {
  onlyHighPriority: boolean;
};

export const HighPriorityCheckbox: React.FC<Props> = ({ onlyHighPriority }) => {
  return (
    <label className="flex items-center gap-2">
      <input
        type="checkbox"
        checked={onlyHighPriority}
        aria-label="high-priority"
        className="checkbox"
      />
      <span>優先度 &quot;高&quot; のみ</span>
    </label>
  );
};
