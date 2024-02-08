import type { QueryParams } from '@/pages';
import { useRouter } from 'next/router';
import React, { useCallback } from 'react';
import { HighPriorityCheckbox } from '../HighPriorityCheckbox';
import { IncludeDoneTasks } from '../IncludeDones';
import { SearchTaskNameTextbox } from '../SearchTaskNameTextbox';

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
  const router = useRouter();
  const setQuery = useCallback(
    (conditions: Partial<QueryParams>) => {
      const query: QueryParams = {
        partialTitle: searchText,
        highPriorityOnly: highPriority,
        includeDone,
        ...conditions,
      };
      router.replace({ query });
    },
    [highPriority, includeDone, router, searchText],
  );

  return (
    <div className="flex gap-4 items-center">
      <SearchTaskNameTextbox
        defaultSearchTitle={searchText}
        onChange={setQuery}
      />
      <HighPriorityCheckbox
        onlyHighPriority={highPriority}
        onChange={setQuery}
      />
      <IncludeDoneTasks includeDoneTasks={includeDone} onChange={setQuery} />
    </div>
  );
};
