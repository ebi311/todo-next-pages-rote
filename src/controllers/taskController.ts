import { Task, TaskSchema } from '@/models/task';
import { randomUUID } from 'crypto';
import dayjs from 'dayjs';
import fs from 'fs/promises';
import Knex from 'knex';
import path from 'path';

export const jsonReviver = (_key: string, value: unknown) => {
  // 文字列で、ISO 8601 形式の日付文字列の場合、Date オブジェクトに変換する
  if (typeof value !== 'string') {
    return value;
  }
  if (!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/.test(value)) {
    return value;
  }
  return dayjs(value).toDate();
};

let taskList: TaskList;
const dbPath = `${process.cwd()}/_data.sqlite`;
export class TaskList {
  public id: string;
  private knex: Knex.Knex;

  private constructor(task?: Task[]) {
    this.id = randomUUID();
    this.knex = Knex({
      client: 'sqlite3',
      connection: {
        filename: dbPath,
        options: {
          nativeBinding: '/path/to/better_sqlite3.node',
        },
      },
    });
  }

  public static async getInstance() {
    if (taskList) return taskList;
    console.log('create instance');
    taskList = new TaskList();
    return taskList;
  }

  public async testInitialize() {
    const data = await fs.readFile(path.join(process.cwd(), '_data.json'));
    const sourceData = JSON.parse(data.toString());
    if (!Array.isArray(sourceData.tasks)) {
      throw new Error('No tasks found');
    }
    const tasks = (sourceData.tasks as Task[]).map((task: unknown) =>
      TaskSchema.parse(task),
    );
    await this.knex.schema.createTableIfNotExists('tasks', (table) => {
      table.string('id').primary();
      table.string('title');
      table.string('body');
      table.string('status');
      table.string('priority');
      table.timestamp('deadline');
    });
    return this.save(tasks);
  }

  public filterTitle(
    queryBuilder: Knex.Knex.QueryBuilder<Task>,
    partialTitle?: string,
  ) {
    if (!partialTitle) return queryBuilder;
    return queryBuilder.where('title', 'like', `%${partialTitle}%`);
  }

  private filterPriority(
    queryBuilder: Knex.Knex.QueryBuilder<Task>,
    highPriorityOnly?: boolean,
  ) {
    if (!highPriorityOnly) return queryBuilder;
    return queryBuilder.where('priority', 'high');
  }

  private filterStatus(
    query: Knex.Knex.QueryBuilder<Task>,
    includeDone?: boolean,
  ) {
    if (includeDone === true) return query;
    return query.where('status', '!=', 'done');
  }

  public async queryTasks(conditions: {
    partialTitle?: string;
    highPriorityOnly?: boolean;
    includeDone?: boolean;
  }) {
    let queryBuilder = this.knex<Task>('tasks');
    queryBuilder = this.filterStatus(queryBuilder, conditions.includeDone);
    queryBuilder = this.filterPriority(
      queryBuilder,
      conditions.highPriorityOnly,
    );
    queryBuilder = this.filterTitle(queryBuilder, conditions.partialTitle);
    const result = await queryBuilder.select('*');
    return result;
  }

  public async getTask(id: string) {
    const task = await this.knex<Task>('tasks').where('id', id).first();
    if (!task) return undefined;
    // オブジェクトのコピーを返す
    const parsedTask = TaskSchema.parse(task);
    return parsedTask;
  }

  public async modifyTask(id: string, task: Task) {
    const newTask: Partial<Omit<Task, 'deadline'>> & { deadline?: string } = {
      title: task.title,
      body: task.body,
      status: task.status,
      priority: task.priority,
    };
    if (task.deadline) {
      newTask.deadline = task.deadline.toISOString();
    }
    await this.knex('tasks').where('id', id).update(newTask);
  }

  public async createTask(task: Task) {
    const newTask = {
      ...task,
      id: randomUUID(),
      deadline: task.deadline?.toISOString(),
    };
    console.log(newTask);
    await this.knex('tasks').insert(newTask);
  }

  private async save(taskList: Task[]) {
    const _taskList = taskList.map((task) => {
      return {
        ...task,
        deadline: task.deadline?.toISOString(),
      };
    });
    await this.knex('tasks').delete();
    await this.knex('tasks').insert(_taskList);
  }
}
