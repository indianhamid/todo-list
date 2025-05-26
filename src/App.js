import { useState } from "react";
import Button from "./components/Button";
import TodoList from "./components/TodoList";
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  const handleAddTask = (task) => {
    if (!task) return;
    const newTask = {
      id: crypto.randomUUID(),
      title: task,
      completed: false,
      createdAt: new Date().toLocaleString(),
      updatedAt: "",
    };
    setTasks([...tasks, newTask]);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  const handleDeleteTask = (id) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this task?"
    );
    confirm && setTasks(tasks.filter((task) => task.id !== id));
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  const handleCompletedTask = (id) => {
    const completedTask = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    localStorage.setItem("tasks", JSON.stringify(completedTask));
    setTasks(completedTask);
  };

  const handleEditTask = (id, title) => {
    const newTitle = prompt("Enter the new title for the task:", title);
    if (newTitle) {
      setTasks(
        tasks.map((task) =>
          task.id === id
            ? {
                ...task,
                title: newTitle,
                updatedAt: new Date().toLocaleString(),
              }
            : task
        )
      );
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  };

  const sortByDate = () => {
    console.log(tasks[0].createdAt);
    const sortedTasks = [...tasks]
      .slice()
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    setTasks(sortedTasks);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  const sortAlphabetically = () => {
    const sortedTasks = [...tasks]
      .slice()
      .sort((a, b) => a.title.localeCompare(b.title));
    setTasks(sortedTasks);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  return (
    <div className="todo-container">
      <h1>Todo List</h1>

      <AddTask onAddTask={handleAddTask} />

      {tasks.length !== 0 && (
        <div className="sort-buttons">
          <Button onclick={() => sortByDate()}>Sort by Date</Button>
          <Button onclick={() => sortAlphabetically()}>
            Sort Alphabetically
          </Button>
        </div>
      )}

      <TodoList
        tasks={tasks}
        onDeleteTask={handleDeleteTask}
        onCompletedTask={handleCompletedTask}
        onEditTask={handleEditTask}
      />

      {tasks.length === 0 && <p className="empty-msg">The list is empty.</p>}
    </div>
  );
}

export default App;
