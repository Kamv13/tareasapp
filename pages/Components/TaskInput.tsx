import { useState, useContext } from "react";
import { TasksContext } from "../Context/taskContext";

export default function taskInput() {
    const [task, setTask] = useState("")
    const context = useContext(TasksContext);

    const handleAddTaskClick = () => {
        if (context) {
            context.addTask(task);
            setTask("");
        }
}
return (
    <div className="input-group mb-3">
        <input
            type="text"
            className="form-control"
            placeholder="Nueva tarea"
            value={task}
            onChange={(e) => setTask(e.target.value)}
        />
        <button className="btn btn-primary" onClick={handleAddTaskClick}>
            Agregar Tarea
        </button>
    </div>
)
}