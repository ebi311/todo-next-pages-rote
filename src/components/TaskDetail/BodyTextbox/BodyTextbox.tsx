import {
  MultilineTextbox,
  MultilineTextboxHF,
} from '@/components/MultilineTextbox';
import { Task } from '@/models/task';
import React from 'react';
import { Control } from 'react-hook-form';

type Props = {
  control: Control<Task>;
};

export const BodyTextbox: React.FC<Props> = ({ control }) => {
  return (
    <MultilineTextboxHF
      control={control}
      property="body"
      label="内容"
      className="w-full"
      rows={5}
    />
  );
};
