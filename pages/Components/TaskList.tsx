import { useContext } from "react";
import { TasksContext } from "../Context/taskContext";
import TaskItem from "./TaskItem";

export default function TaskList() {
  const context = useContext(TasksContext);

  if (!context) {
    return null;    
  }

  return (
    <ul className="list-group">
      {context.tasks.map((task, index) => (
        <TaskItem key={index} task={task} index={index} />
      ))}
    </ul>
  );
}