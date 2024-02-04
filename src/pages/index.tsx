import { Layout } from '@/components/Layout';
import { Conditions } from '@/components/TaskList/Conditions';
import { TaskList } from '@/components/TaskList/TaskList';
import { TaskList as TaskListClass } from '@/controllers/taskController';
import { Task } from '@/models/task';
import {
  parseQueryValueBoolean,
  parseQueryValueToString,
} from '@/utils/parseQueryValue';
import { GetServerSideProps, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';

export type QueryParams = {
  highPriorityOnly: boolean;
  includeDone: boolean;
  partialTitle: string;
};

type Props = {
  tasks: Task[];
  conditions: QueryParams;
};

const Page: NextPage<Props> = ({ tasks, conditions }) => {
  return (
    <Layout pageTitle="タスク一覧">
      <Conditions
        highPriority={conditions.highPriorityOnly}
        includeDone={conditions.includeDone}
        searchText={conditions.partialTitle}
      />
      <TaskList tasks={tasks} />
    </Layout>
  );
};

const parseQueryToConditions = (query: ParsedUrlQuery): QueryParams => {
  return {
    highPriorityOnly: parseQueryValueBoolean(query.highPriorityOnly, false),
    includeDone: parseQueryValueBoolean(query.includeDone, false),
    partialTitle: parseQueryValueToString(query.partialTitle, ''),
  };
};

export const getServerSideProps: GetServerSideProps<Props> = async (
  context,
) => {
  const { query } = context;
  const conditions = parseQueryToConditions(query);
  const taskList = await TaskListClass.getInstance();
  console.log(conditions);
  const tasks = taskList.queryTasks(conditions);
  console.log(tasks);
  return {
    props: {
      tasks,
      conditions,
    },
  };
};

export default Page;
