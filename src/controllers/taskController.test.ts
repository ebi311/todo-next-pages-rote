import { copyInitFile, TaskList } from './taskController';

beforeAll(async () => {
  await copyInitFile();
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
