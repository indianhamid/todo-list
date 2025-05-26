import { useState } from "react";
import Button from "./Button";

function AddTask({ onAddTask }) {
  const [task, setTask] = useState("");
  return (
    <div className="input-group">
      <input
        type="text"
        placeholder="Add task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <Button
        onclick={() => {
          onAddTask(task);
          setTask("");
        }}
      >
        Add
      </Button>
    </div>
  );
}

export default AddTask;
