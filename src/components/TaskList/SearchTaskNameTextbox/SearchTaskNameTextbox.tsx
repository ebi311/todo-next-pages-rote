import type, { QueryParams } from '@/pages';
import { set } from 'mockdate';
import React, { ChangeEvent, useCallback, useRef, useState } from 'react';

type Props = {
  defaultSearchTitle: string;
  onChange: (condition: Pick<QueryParams, 'partialTitle'>) => void;
};

export const SearchTaskNameTextbox: React.FC<Props> = ({
  defaultSearchTitle,
  onChange,
}) => {
  let timer = useRef(-1);
  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      // 値が変更して、500ms経過したらonChangeを実行する
      const { value } = e.target;
      if (timer.current !== -1) {
        window.clearTimeout(timer.current);
      }
      timer.current = window.setTimeout(() => {
        onChange({ partialTitle: value });
      }, 500);
    },
    [onChange],
  );

  return (
    <input
      type="text"
      aria-label="search-task-name"
      defaultValue={defaultSearchTitle}
      onChange={handleChange}
      className="input input-bordered"
      placeholder="Search task name..."
    />
  );
};
