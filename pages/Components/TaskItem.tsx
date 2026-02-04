import { useState, useContext } from "react";
import { TasksContext } from "../Context/taskContext";

type TaskItemProps = {
  task: string;
  index: number;
};

export default function TaskItem({ task, index }: TaskItemProps) {
  const context = useContext(TasksContext);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  const handleSaveEditClick = () => {
    if (context) {
      context.editTask(index, editedTask);
      setIsEditing(false);
    }
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {isEditing ? (
        <div className="d-flex w-100">
          <input
            type="text"
            className="form-control me-2"
            value={editedTask}
            onChange={(e) => setEditedTask(e.target.value)}
          />
          <button
            className="btn btn-success btn-sm me-2"
            onClick={handleSaveEditClick}
          >
            Save
          </button>
          <button
            className="btn btn-secondary btn-sm"
            onClick={() => setIsEditing(false)}
          >
            Cancel
          </button>
        </div>
      ) : (
        <>
          {task}
          <div>
            <button
              className="btn btn-warning btn-sm me-2"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => context && context.deleteTask(index)} 
            >
              Delete
            </button>
          </div>
        </>
      )}
    </li>
  );
}