import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

const TaskItem = ({ id, text, completed }) => {
  const history = useHistory();

  function clickHandler() {
    history.push("/edit");
  }
  return (
    <div className="task">
      <div>id:{id}</div>
      <div>text:{text}</div>
      <div>
        <input type="checkbox" checked={completed} />
      </div>
      <button onClick={clickHandler}>
        Edit
        {/* <Link to="/edit">Edit</Link> */}
      </button>
      <button>Delete</button>
    </div>
  );
};

export default TaskItem;
