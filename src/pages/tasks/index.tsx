import { Layout } from '@/components/Layout';
import { BackLink } from '@/components/TaskDetail/BackLink';
import { SaveButton } from '@/components/TaskDetail/SaveButton';
import { TaskForm } from '@/components/TaskDetail/TaskForm';
import { Task, TaskSchema } from '@/models/task';
import { zodResolver } from '@hookform/resolvers/zod';
import { NextPage } from 'next';
import { FormProvider, useForm } from 'react-hook-form';

const initialTask: Task = {
  id: '',
  title: '',
  body: '',
  priority: 'medium',
  status: 'todo',
};

const Page: NextPage = () => {
  const hookFormMethods = useForm<Task>({
    defaultValues: {
      ...initialTask,
    },
    resolver: zodResolver(TaskSchema),
  });
  const { watch } = hookFormMethods;
  return (
    <Layout pageTitle="タスク詳細">
      <FormProvider {...hookFormMethods}>
        <div className="flex justify-between">
          <BackLink href="/" />
          <SaveButton newTask="newTask" />
        </div>
        <TaskForm />
      </FormProvider>
    </Layout>
  );
};

export default Page;
