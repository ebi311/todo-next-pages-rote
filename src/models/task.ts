import { z } from 'zod';

/** タスクのステータスの値 */
export const TASK_STATUS = [
  /** 未完了 */
  'todo',
  /** 完了 */
  'done',
] as const;

/** タスクのステータス 型 */
export type TaskStatus = (typeof TASK_STATUS)[number];

/** タスクの優先度の値 */
export const TASK_PRIORITY = [
  /** 低 */
  'low',
  /** 中 */
  'medium',
  /** 高 */
  'high',
] as const;

/** タスクの優先度 型 */
export type TaskPriority = (typeof TASK_PRIORITY)[number];

/** タスク スキーマ */
export const TaskSchema = z.object({
  /** タスクID */
  id: z.string(),
  /** タスク名 */
  name: z.string().min(1).max(64),
  /** タスク内容 */
  body: z.string().max(1000),
  /** タスクのステータス */
  status: z.enum(TASK_STATUS),
  /** タスクの優先度 */
  priority: z.enum(TASK_PRIORITY),
  /** 期限 */
  deadline: z.date().optional(),
});

/** タスク 型 */
export type Task = z.infer<typeof TaskSchema>;
