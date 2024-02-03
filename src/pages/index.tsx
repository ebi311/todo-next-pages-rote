import { Layout } from '@/components/Layout';
import { Conditions } from '@/components/TaskList/Conditions';
import { TaskList } from '@/components/TaskList/TaskList';
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
  return {
    props: {
      tasks: [
        {
          id: '1',
          title: '牛乳を買う',
          deadline: new Date('2021-04-01'),
          priority: 'high',
          body: '明日までに買う',
          status: 'todo',
        },
        {
          id: '2',
          title: '掃除をする',
          deadline: new Date('2021-04-02'),
          priority: 'low',
          body: '部屋を綺麗にする',
          status: 'done',
        },
        {
          id: '3',
          title: '請求書を支払う',
          deadline: new Date('2021-04-03'),
          priority: 'high',
          body: '振込先は○○銀行',
          status: 'todo',
        },
      ],
    },
  };
};

export default Page;
