import type {
  OpenTaskCallback,
  Task,
  TaskStatus,
} from "./task.types";

export function printTasks(tasks: Task[]): void {
  for (const task of tasks) {
    const assignee = task.assignee ?? "Unassigned";
    const note = task.note ?? "No note";

    console.log(
      `[${task.id}] ${task.title} | ` +
        `Status: ${task.status} | ` +
        `Priority: ${task.priority} | ` +
        `Estimated hours: ${task.estimatedHours} | ` +
        `Assignee: ${assignee} | ` +
        `Note: ${note}`
    );
  }
}

export function filterTasks(
  tasks: Task[],
  status: TaskStatus | "all"
): Task[] {
  if (status === "all") {
    return tasks;
  }

  return tasks.filter((task) => task.status === status);
}

export function calculateTotalEstimatedHours(tasks: Task[]): number {
  return tasks.reduce((total, task) => total + task.estimatedHours, 0);
}

export function findTaskById(tasks: Task[], taskId: string): Task | null {
  return tasks.find((task) => task.id === taskId) ?? null;
}

export function createOpenTaskCallback(tasks: Task[]): OpenTaskCallback {
  return (taskId: string): void => {
    const task = findTaskById(tasks, taskId);

    if (task === null) {
      console.log(`Task not found: ${taskId}`);
      return;
    }

    console.log(`Opening task: [${task.id}] ${task.title}`);
  };
}
