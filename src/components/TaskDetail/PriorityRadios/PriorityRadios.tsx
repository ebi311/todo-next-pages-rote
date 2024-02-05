import { PriorityIcon } from '@/components/PriorityIcon';
import {
  RadioButtonList,
  RadioButtonListHook,
} from '@/components/RadioButtonList';
import { Task, TaskPriority } from '@/models/task';
import React from 'react';
import { Control, useForm } from 'react-hook-form';

type Props = {
  control: Control<Task>;
};

const lowLabel = (
  <span className="flex items-center">
    <PriorityIcon priority="low" />低
  </span>
);
const mediumLabel = (
  <span className="flex items-center">
    <PriorityIcon priority="medium" />中
  </span>
);
const highLabel = (
  <span className="flex items-center">
    <PriorityIcon priority="high" />高
  </span>
);

export const PriorityRadios: React.FC<Props> = ({ control }) => {
  return (
    <RadioButtonListHook
      options={[
        { label: lowLabel, value: 'low' },
        { label: mediumLabel, value: 'medium' },
        { label: highLabel, value: 'high' },
      ]}
      name="priority"
      property="priority"
      control={control}
    />
  );
};
