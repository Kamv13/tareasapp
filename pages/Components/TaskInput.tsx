import { useState, useContext } from "react";
import { TasksContext } from "../Context/taskContext";

type Props = {
  task: string;
  index: number;
};

export default function TaskItem({ task, index }: Props) {
  const context = useContext(TasksContext);
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(task);

  const handleSaveEdit = () => {
    if (context) {
      context.editTask(index, editValue);
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
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
          />
          <button className="btn btn-success btn-sm me-2" onClick={handleSaveEdit}>
            Guardar
          </button>
          <button className="btn btn-secondary btn-sm" onClick={() => setIsEditing(false)}>
            Cancelar
          </button>
        </div>
      ) : (
        <>
          {task}
          <div>
            <button className="btn btn-warning btn-sm me-2" onClick={() => setIsEditing(true)}>
              Editar
            </button>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => context && context.deleteTask(index)}
            >
              Eliminar
            </button>
          </div>
        </>
      )}
    </li>
  );
}