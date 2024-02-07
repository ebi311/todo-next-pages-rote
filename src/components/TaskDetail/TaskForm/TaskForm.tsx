import React from 'react';
import { TitleTextbox } from '../TitleTextbox';
import { Task } from '@/models/task';
import { useForm } from 'react-hook-form';
import { DeadlineDateInput } from '../DeadlineDateInput';
import { PriorityRadios } from '../PriorityRadios';
import { BodyTextbox } from '../BodyTextbox';

type Props = {
  defaultValues: Task;
};

export const TaskForm: React.FC<Props> = ({ defaultValues }) => {
  const { control, register } = useForm({
    defaultValues,
  });

  return (
    <form>
      <TitleTextbox register={register} />
      <DeadlineDateInput control={control} />
      <PriorityRadios control={control} />
      <BodyTextbox control={control} />
    </form>
  );
};
