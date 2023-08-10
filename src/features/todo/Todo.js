import React, { useEffect } from "react";
import TodoAdd from "./TodoAdd.js";
import TodoList from "./TodoList";
import TodoFilterButtons from "./TodoFilterButtons";
import { useDispatch } from "react-redux";
import { getTodos } from "./actions.js";

function Todo() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  return (
    <div>
      <TodoAdd />
      <TodoList />
      <TodoFilterButtons />
    </div>
  );
}

export default Todo;
