import { Layout } from '@/components/Layout';
import { Actions } from '@/components/TaskDetail/Actions';
import { TaskForm } from '@/components/TaskDetail/TaskForm';
import { Task } from '@/models/task';
import { NextPage } from 'next';

const task: Task = {
  id: '123',
  title: 'title',
  body: 'body',
  priority: 'low',
  status: 'todo',
  deadline: new Date(),
};

const Page: NextPage = () => {
  return (
    <Layout pageTitle="タスク詳細">
      <Actions task={task} />
      <TaskForm defaultValues={task} />
    </Layout>
  );
};

export default Page;
