import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleAdd, handleGet, reqTodo } from "../Redux/action";
import TodoItem from "./TodoItem";

const Todo = () => {
  const [task, setTask] = useState("");

  const dispatch = useDispatch();

  const { todos, isLoading, isError } = useSelector((store) => store);
  console.log(todos, isLoading, isError, "IKJ");

  useEffect(() => {
    dispatch(reqTodo());
    setTimeout(() => {
      // handleGet(dispatch);
      dispatch(handleGet);
    }, 2000);
  }, []);

  return (
    <div>
      <h1>Todo</h1>
      <div>
        {isLoading && (
          <img src="https://img.icons8.com/material-sharp/24/000000/spinner-frame-7.png" />
        )}
      </div>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={() => handleAdd(task).then(() => handleGet(dispatch))}>
        ADD
      </button>
      {todos.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Todo;
