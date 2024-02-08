import { DateInputHook } from '@/components/DateInput';
import { Task } from '@/models/task';
import React from 'react';
import { Control } from 'react-hook-form';

type Props = {
  control: Control<Task>;
};

export const DeadlineDateInput: React.FC<Props> = ({ control }) => {
  return <DateInputHook label="期限" control={control} property="deadline" />;
};
