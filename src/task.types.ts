export type TaskPriority = "low" | "medium" | "high";

export type TaskStatus = "todo" | "doing" | "done";

export interface Task {
  id: string;
  title: string;
  estimatedHours: number;
  priority: TaskPriority;
  status: TaskStatus;
  assignee: string | null;
  note?: string;
}

export type OpenTaskCallback = (taskId: string) => void;
