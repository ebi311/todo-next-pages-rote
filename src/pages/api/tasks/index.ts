import { TaskList } from '@/controllers/taskController';
import { TaskSchema } from '@/models/task';
import { nanoid } from 'nanoid';
import type { NextApiRequest, NextApiResponse } from 'next';
import { createRouter } from 'next-connect';

const router = createRouter<NextApiRequest, NextApiResponse>();

router.post(async (req, res) => {
  const data = req.body;
  const task = TaskSchema.parse(data);
  const id = nanoid();
  const taskList = await TaskList.getInstance();
  await taskList.createTask(task);
  return res.status(200).json(task);
});

export default router.handler();
