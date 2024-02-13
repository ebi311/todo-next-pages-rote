import { Layout } from '@/components/Layout';
import { Actions } from '@/components/TaskDetail/Actions';
import { TaskForm } from '@/components/TaskDetail/TaskForm';
import { TaskList } from '@/controllers/taskController';
import { Task, TaskSchema } from '@/models/task';
import { zodResolver } from '@hookform/resolvers/zod';
import { GetServerSideProps, NextPage } from 'next';
import { FormProvider, useForm } from 'react-hook-form';

type Props = {
  task: Task;
};

const Page: NextPage<Props> = ({ task }) => {
  const hookFormMethods = useForm<Task>({
    defaultValues: task,
    resolver: zodResolver(TaskSchema),
  });
  const { watch } = hookFormMethods;
  return (
    <Layout pageTitle="タスク詳細">
      <FormProvider {...hookFormMethods}>
        <Actions task={task} />
        <TaskForm />
      </FormProvider>
      <pre>{JSON.stringify(watch(), null, 2)}</pre>
    </Layout>
  );
};

export default Page;

export const getServerSideProps: GetServerSideProps<
  Props,
  { id: string }
> = async (context) => {
  const { params } = context;
  if (!params?.id) {
    return { notFound: true };
  }
  const taskList = await TaskList.getInstance();
  const task = await taskList.getTask(params.id);
  if (!task) {
    return { notFound: true };
  }
  return { props: { task } };
};
