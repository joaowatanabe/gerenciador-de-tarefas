import { useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar programação",
      description: "Estudar programação para se tornar um DEV full-stack.",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Estudar react",
      description: "Estudar react para se aperfeiçoar.",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Revisar Back-end",
      description: "Revisar Back-end para se aperfeiçoar.",
      isCompleted: false,
    },
  ]);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      //preciso atualizar a tarefa
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }

      // Não preciso atualizar essa tarefa
      return task;
    });

    setTasks(newTasks);
  }

  return (
    <div className="w-screen h-screen bg-cyan-800 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTask />
        <Tasks tasks={tasks} onTaskClick={onTaskClick}/>
      </div>
    </div>
  );
}

export default App;
