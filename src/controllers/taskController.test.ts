import { copyInitFile, getTasks } from './taskController';

beforeAll(async () => {
  await copyInitFile();
});

test('getTasks returns an empty array', async () => {
  const result = await getTasks();
  expect(result).toHaveLength(3);
});
