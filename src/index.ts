import { rawTaskData, tasks } from "./task.data";
import {
  calculateTotalEstimatedHours,
  createOpenTaskCallback,
  filterTasks,
  isTask,
  printTasks,
} from "./task.service";

console.log("=== ALL TASKS ===");
printTasks(tasks);

console.log("\n=== TODO TASKS ===");
const todoTasks = filterTasks(tasks, "todo");
printTasks(todoTasks);

console.log("\n=== TOTAL ESTIMATED HOURS ===");
const totalEstimatedHours = calculateTotalEstimatedHours(tasks);
console.log(totalEstimatedHours);

console.log("\n=== OPEN VALID TASK ===");
const openTask = createOpenTaskCallback(tasks);
openTask("T001");

console.log("\n=== OPEN MISSING TASK ===");
openTask("T999");

console.log("\n=== RAW TASK VALIDATION ===");
if (isTask(rawTaskData)) {
  console.log(`Valid raw task: [${rawTaskData.id}] ${rawTaskData.title}`);
} else {
  console.log("Invalid raw task data.");
}
