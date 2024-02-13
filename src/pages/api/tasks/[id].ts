import { TaskList } from '@/controllers/taskController';
import { TaskSchema } from '@/models/task';
import type { NextApiRequest, NextApiResponse } from 'next';
import { createRouter } from 'next-connect';

const router = createRouter<NextApiRequest, NextApiResponse>();

router.put(async (req, res) => {
  const data = req.body;
  const task = TaskSchema.parse(data);
  const id = req.query.id as string;
  const taskList = await TaskList.getInstance();
  await taskList.modifyTask(id, task);
  return res.status(200).json(task);
});

export default router.handler();
