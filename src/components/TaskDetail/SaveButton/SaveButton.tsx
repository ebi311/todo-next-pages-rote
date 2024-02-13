import { Task } from '@/models/task';
import React, { useCallback } from 'react';
import { useFormContext } from 'react-hook-form';
import { MdOutbox } from 'react-icons/md';

type Props = {};

export const SaveButton: React.FC<Props> = (props) => {
  const { getValues, trigger } = useFormContext<Task>();
  const handleClick = useCallback(async () => {
    const isValid = await trigger();
    if (!isValid) return;
    const data = getValues();
    const id = data.id;
    const urlPath = `/api/tasks/${id}`;
    await fetch(urlPath, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  }, [getValues, trigger]);

  return (
    <button
      className="btn btn-outline btn-sm btn-primary flex items-center"
      aria-label="save"
      onClick={handleClick}
    >
      <MdOutbox />
      保存
    </button>
  );
};
