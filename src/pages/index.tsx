import { Layout } from '@/components/Layout';
import { Conditions } from '@/components/TaskList/Conditions';
import { TaskList } from '@/components/TaskList/TaskList';
import { getTasks } from '@/controllers/taskController';
import { Task } from '@/models/task';
import { GetServerSideProps, NextPage } from 'next';

type Props = {
  tasks: Task[];
};

const Page: NextPage<Props> = ({ tasks }) => {
  return (
    <Layout pageTitle="タスク一覧">
      <Conditions
        highPriority={true}
        includeDone={true}
        searchText="検索文字列"
      />
      <TaskList tasks={tasks} />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const tasks = await getTasks();
  return {
    props: {
      tasks,
    },
  };
};

export default Page;
