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

export class TaskList {
  private tasks: Task[] = [];
  private static instance: TaskList;

  private constructor(task?: Task[]) {
    this.tasks = task || [];
  }

  public static async getInstance() {
    if (TaskList.instance) return TaskList.instance;
    TaskList.instance = new TaskList();
    await TaskList.instance.load();
    return TaskList.instance;
  }

  async load() {
    const data = await fs.readFile(path.join(process.cwd(), 'data.json'));
    const sourceData = JSON.parse(data.toString(), jsonReviver);
    if (!Array.isArray(sourceData.tasks)) {
      throw new Error('No tasks found');
    }
    this.tasks = (sourceData.tasks as Task[]).map((task: unknown) =>
      TaskSchema.parse(task),
    );
  }

  public filterTitle(partialTitle?: string) {
    if (!partialTitle) return new TaskList(this.tasks);
    const tasks = this.tasks.filter((task) =>
      task.title.includes(partialTitle),
    );
    return new TaskList(tasks);
  }

  public filterPriority(highPriorityOnly?: boolean) {
    if (!highPriorityOnly) return new TaskList(this.tasks);
    const tasks = this.tasks.filter((task) => task.priority === 'high');
    return new TaskList(tasks);
  }

  public filterStatus(includeDone?: boolean) {
    if (includeDone === true) return new TaskList(this.tasks);
    const tasks = this.tasks.filter((task) => task.status !== 'done');
    return new TaskList(tasks);
  }

  public queryTasks(conditions: {
    partialTitle?: string;
    highPriorityOnly?: boolean;
    includeDone?: boolean;
  }) {
    return this.filterPriority(conditions.highPriorityOnly)
      .filterStatus(conditions.includeDone)
      .filterTitle(conditions.partialTitle).tasks;
  }

  public getTask(id: string) {
    const task = this.tasks.find((task) => task.id === id);
    if (!task) return undefined;
    // オブジェクトのコピーを返す
    return { ...task };
  }

  public async modifyTask(id: string, task: Task) {
    const existTask = this.getTask(id);
    if (!existTask) throw new Error('Task not found');
    const newTask = { ...existTask, ...task, id };
    const index = this.tasks.findIndex((task) => task.id === id);
    this.tasks.splice(index, 1, newTask);
    // JSON ファイルに書き出す
    await this.save();
  }

  private async save() {
    const data = JSON.stringify({ tasks: this.tasks }, null, 2);
    await fs.writeFile(path.join(process.cwd(), 'data.json'), data);
  }
}
