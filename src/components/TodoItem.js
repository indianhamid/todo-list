import Button from "./Button";

function TodoItem({ tasks, onDeleteTask, onCompletedTask, onEditTask }) {
  return tasks.map((task) => (
    <li className={task.completed ? "completed" : ""} key={task.id}>
      <div className="task-info" onClick={() => onCompletedTask(task.id)}>
        <span>{task.title}</span>
        <span>Updated At : {task.updatedAt}</span>
        <span>Created At : {task.createdAt}</span>
      </div>
      <div className="task-buttons">
        <Button
          className="edit-btn"
          onclick={() => onEditTask(task.id, task.title)}
        >
          Edit
        </Button>
        <Button className="delete-btn" onclick={() => onDeleteTask(task.id)}>
          Delete
        </Button>
      </div>
    </li>
  ));
}

export default TodoItem;
