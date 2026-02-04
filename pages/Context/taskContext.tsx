import { createContext, useState, ReactNode } from "react";

type TasksContextType = {
  tasks: string[];
  addTask: (task: string) => void;
  deleteTask: (index: number) => void;
  editTask: (index: number, newTask: string) => void;
};

export const TasksContext = createContext<TasksContextType | undefined>(undefined);

export const TasksProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<string[]>([]);

  const addTask = (task: string) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const editTask = (index: number, newTask: string) => {
    const updated = [...tasks];
    updated[index] = newTask;
    setTasks(updated);
  };

  return (
    <TasksContext.Provider value={{ tasks, addTask, deleteTask, editTask }}>
      {children}
    </TasksContext.Provider>
  );
};