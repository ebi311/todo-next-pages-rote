import { DateInput, DateInputHook } from '@/components/DateInput';
import { Task } from '@/models/task';
import React from 'react';
import DatePicker from 'react-datepicker';
import { Control, UseFormRegister, useController } from 'react-hook-form';
import { MdCalendarMonth } from 'react-icons/md';

type Props = {
  control: Control<Task>;
};

export const DeadlineDateInput: React.FC<Props> = ({ control }) => {
  return <DateInputHook label="期限" control={control} property="deadline" />;
};
