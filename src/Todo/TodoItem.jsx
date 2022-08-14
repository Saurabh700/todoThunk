import React from "react";
import { handleGet, toggleStatus } from "../Redux/action";
import { useDispatch } from "react-redux";

const TodoItem = ({ item }) => {
  // console.log(item);
  const dispatch = useDispatch();

  return (
    <div>
      <div>{item.title}</div>
      <div
        onClick={() =>
          toggleStatus(item.id, !item.status).then(() => handleGet(dispatch))
        }
      >
        {item.status ? "true" : "false"}
      </div>
      <hr />
    </div>
  );
};

export default TodoItem;
