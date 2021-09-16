import React from "react";
import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const task = useSelector((state) => state.taskReducer);

  return (
    <div>
      <h5>Here is your tasks:</h5>
      {task.map(({ id, text, completed }) => (
        <TaskItem key={id} id={id} text={text} completed={completed} />
      ))}
    </div>
  );
};

export default TaskList;
