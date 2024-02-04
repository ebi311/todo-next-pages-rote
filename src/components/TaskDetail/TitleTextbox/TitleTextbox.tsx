import { Textbox } from '@/components/Textbox';
import { Task } from '@/models/task';
import React from 'react';
import { UseFormRegister } from 'react-hook-form';

type Props = {
  register: UseFormRegister<Task>;
};

export const TitleTextbox: React.FC<Props> = (props) => {
  return (
    <Textbox
      label="タイトル"
      className="w-full"
      supplementalText="必須 64文字以内"
      hookFormProps={{
        register: props.register,
        property: 'title',
      }}
    />
  );
};
