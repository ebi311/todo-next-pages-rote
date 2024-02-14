import { Task } from '@/models/task';
import { useRouter } from 'next/router';
import React, { useCallback } from 'react';
import { useFormContext } from 'react-hook-form';
import { MdOutbox } from 'react-icons/md';

type Props = {
  newTask?: 'newTask' | 'modifiedTask';
};

const updateTask = (data: Task) => {
  const urlPath = `/api/tasks/${data.id}`;
  return fetch(urlPath, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
};

const createTask = (data: Task) => {
  const urlPath = '/api/tasks';
  return fetch(urlPath, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
};

const upsert = {
  newTask: createTask,
  modifiedTask: updateTask,
};

export const SaveButton: React.FC<Props> = ({ newTask = 'modifiedTask' }) => {
  const { getValues, trigger } = useFormContext<Task>();
  const router = useRouter();
  const handleClick = useCallback(async () => {
    const isValid = await trigger();
    if (!isValid) return;
    const data = getValues();
    await upsert[newTask](data);
    router.push('/');
  }, [getValues, newTask, router, trigger]);

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
