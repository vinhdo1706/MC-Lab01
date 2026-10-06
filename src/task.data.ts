import type { Task } from "./task.types";

export const tasks: Task[] = [
  {
    id: "T001",
    title: "Review TypeScript notes",
    estimatedHours: 2,
    priority: "high",
    status: "doing",
    assignee: "Vinh",
    note: "Focus on union types and narrowing",
  },
  {
    id: "T002",
    title: "Prepare lab screenshots",
    estimatedHours: 1.5,
    priority: "medium",
    status: "todo",
    assignee: null,
  },
  {
    id: "T003",
    title: "Organize course materials",
    estimatedHours: 1,
    priority: "low",
    status: "done",
    assignee: "Vinh",
    note: "Keep Lab01 files in the MC-Lab01 project",
  },
  {
    id: "T004",
    title: "Check GitHub repository",
    estimatedHours: 0.5,
    priority: "medium",
    status: "todo",
    assignee: null,
    note: "Verify branch and remote before pushing",
  },
  {
    id: "T005",
    title: "Run TypeScript type-check",
    estimatedHours: 0.5,
    priority: "high",
    status: "done",
    assignee: "Vinh",
  },
];

export const rawTaskData: unknown = {
  id: "T006",
  title: "Validate raw task data",
  estimatedHours: 1,
  priority: "high",
  status: "todo",
  assignee: null,
  note: "Validate this object with isTask before using it",
};
