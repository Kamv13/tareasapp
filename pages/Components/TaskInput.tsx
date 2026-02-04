import { useState, useContext } from "react";
import { TasksContext } from "../Context/taskContext";

export default function TaskInput() {
  const [task, setTask] = useState("");
  const context = useContext(TasksContext);

  const handleAddTask = () => {
    if (context && task.trim() !== "") {
      context.addTask(task);
      setTask("");
    }
  };

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Enter a task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button className="btn btn-primary" onClick={handleAddTask}>
        Agregar Tarea
      </button>
    </div>
  );
}