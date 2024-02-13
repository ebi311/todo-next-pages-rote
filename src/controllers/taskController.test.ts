import { TaskList } from './taskController';

beforeAll(async () => {
  const instance = await TaskList.getInstance();
  await instance.testInitialize();
});

test('getTasks returns all tasks', async () => {
  const taskList = await TaskList.getInstance();
  const result = await taskList.queryTasks({
    includeDone: true,
  });
  expect(result).toHaveLength(5);
});

test('getTasks returns not include done tasks', async () => {
  const taskList = await TaskList.getInstance();
  const result = await taskList.queryTasks({});
  expect(result).toHaveLength(3);
});

test('getTasks returns only priority hight', async () => {
  const taskList = await TaskList.getInstance();
  const result = await taskList.queryTasks({
    highPriorityOnly: true,
  });
  expect(result).toHaveLength(2);
});

test('getTasks returns include "牛乳" in title', async () => {
  const taskList = await TaskList.getInstance();
  const result = await taskList.queryTasks({
    partialTitle: '牛乳',
  });
  expect(result).toHaveLength(1);
});

test('getTask "1"', async () => {
  const taskList = await TaskList.getInstance();
  const result = await taskList.getTask('1');
  expect(result?.title).toBe('牛乳を買う');
});

test('modify task "1"', async () => {
  const taskList = await TaskList.getInstance();
  const task = await taskList.getTask('1');
  if (task) {
    task.title = '豆乳を買う';
    task.deadline = new Date('2024-12-31');
    taskList.modifyTask('1', task);
  }
  const result = await taskList.getTask('1');
  expect(result?.title).toBe('豆乳を買う');
  expect(result?.deadline?.toISOString()).toBe('2024-12-31T00:00:00.000Z');
});
