import React from 'react';
import { TitleTextbox } from '../TitleTextbox';
import { Task } from '@/models/task';
import { useForm, useFormContext } from 'react-hook-form';
import { DeadlineDateInput } from '../DeadlineDateInput';
import { PriorityRadios } from '../PriorityRadios';
import { BodyTextbox } from '../BodyTextbox';

type Props = {};

export const TaskForm: React.FC<Props> = () => {
  const { control, register } = useFormContext<Task>();

  return (
    <form className="form-control">
      <TitleTextbox register={register} />
      <DeadlineDateInput control={control} />
      <PriorityRadios control={control} />
      <BodyTextbox control={control} />
    </form>
  );
};
