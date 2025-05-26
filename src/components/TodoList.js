import TodoItem from "./TodoItem";

function TodoList({ tasks, onDeleteTask, onCompletedTask, onEditTask }) {
  return (
    <div>
      <ul>
        <TodoItem
          tasks={tasks}
          onDeleteTask={onDeleteTask}
          onCompletedTask={onCompletedTask}
          onEditTask={onEditTask}
        />
      </ul>
    </div>
  );
}

export default TodoList;
