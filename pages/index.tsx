import 'bootstrap/dist/css/bootstrap.min.css';
import { TasksProvider } from "./Context/taskContext";
import TaskInput from "./Components/TaskInput";
import TaskList from "./Components/TaskList";




export default function Home() {
 return (
    <TasksProvider>
      <div className="container mt-5">
        <h1 className="text-center mb-4">Administrador de Tareas</h1>
        <TaskInput />
        <TaskList />
      </div>
    </TasksProvider>
  );

}
