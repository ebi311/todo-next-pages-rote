import React, { useCallback } from 'react';
import { SearchTaskNameTextbox } from '../SearchTaskNameTextbox';
import { HighPriorityCheckbox } from '../HighPriorityCheckbox';
import { IncludeDoneTasks } from '../IncludeDones';
import { useRouter } from 'next/router';
import type { QueryParams } from '@/pages';

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
