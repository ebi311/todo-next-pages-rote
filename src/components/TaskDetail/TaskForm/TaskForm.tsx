import { Task } from '@/models/task';
import React from 'react';
import { useFormContext } from 'react-hook-form';
import { BodyTextbox } from '../BodyTextbox';
import { DeadlineDateInput } from '../DeadlineDateInput';
import { PriorityRadios } from '../PriorityRadios';
import { TitleTextbox } from '../TitleTextbox';

type Props = {};

export const TaskForm: React.FC<Props> = () => {
  const { control, register, formState } = useFormContext<Task>();

  return (
    <form className="form-control">
      <TitleTextbox register={register} hasError={!!formState.errors.title} />
      <DeadlineDateInput control={control} />
      <PriorityRadios control={control} />
      <BodyTextbox control={control} />
    </form>
  );
};
