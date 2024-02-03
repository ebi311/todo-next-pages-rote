import React from 'react';
import { SearchTaskNameTextbox } from '../SearchTaskNameTextbox';
import { HighPriorityCheckbox } from '../HighPriorityCheckbox';
import { IncludeDoneTasks } from '../IncludeDones';

type Props = {
  searchText: string;
  highPriority: boolean;
  includeDone: boolean;
};

export const Conditions: React.FC<Props> = ({
  searchText,
  highPriority,
  includeDone,
}) => {
  return (
    <div className="flex gap-4 items-center">
      <SearchTaskNameTextbox
        searchString={searchText}
        search={async () => {
          return;
        }}
      />
      <HighPriorityCheckbox onlyHighPriority={highPriority} />
      <IncludeDoneTasks includeDoneTasks={includeDone} />
    </div>
  );
};
