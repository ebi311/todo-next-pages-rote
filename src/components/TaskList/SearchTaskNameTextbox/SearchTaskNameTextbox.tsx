import React, { ChangeEvent, useCallback, useRef } from 'react';

type Props = {
  defaultSearchString: string;
  search: (searchString: string) => Promise<void>;
};

export const SearchTaskNameTextbox: React.FC<Props> = ({
  defaultSearchString,
  search,
}) => {
  let timer = useRef(-1);
  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      if (timer.current !== -1) {
        window.clearTimeout(timer.current);
      }
      timer.current = window.setTimeout(() => {
        search(value);
      }, 500);
    },
    [search],
  );

  return (
    <input
      type="text"
      aria-label="search-task-name"
      defaultValue={defaultSearchString}
      onChange={onChange}
      className="input input-bordered"
      placeholder="Search task name..."
    />
  );
};
