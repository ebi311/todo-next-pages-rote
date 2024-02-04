import { Task, TaskSchema } from '@/models/task';
import dayjs from 'dayjs';
import fs from 'fs/promises';
import path from 'path';

export const copyInitFile = async () => {
  const initFilePath = path.join(process.cwd(), '_data.json');
  const distFilePath = path.join(process.cwd(), 'data.json');
  await fs.copyFile(initFilePath, distFilePath);
};

const jsonReviver = (_key: string, value: unknown) => {
  // 文字列で、ISO 8601 形式の日付文字列の場合、Date オブジェクトに変換する
  if (typeof value !== 'string') {
    return value;
  }
  if (!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/.test(value)) {
    return value;
  }
  return dayjs(value).toDate();
};

let globalTasks: Task[] | null = null;

export const getTasks = async () => {
  if (!!globalTasks) return globalTasks;
  const data = await fs.readFile(path.join(process.cwd(), 'data.json'));
  const sourceData = JSON.parse(data.toString(), jsonReviver);
  if (!Array.isArray(sourceData.tasks)) {
    throw new Error('No tasks found');
  }
  const tasks = (sourceData.tasks as Task[]).map((task: unknown) =>
    TaskSchema.parse(task),
  );
  globalTasks = tasks;
  return tasks;
};
