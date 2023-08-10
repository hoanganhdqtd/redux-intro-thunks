import apiService from "../../app/apiService";
import { ADD_TODO, TOGGLE_TODO, SET_FILTER, GET_TODOS } from "./reducer";

let nextTodoId = 0;

export const addTodo = (text) => async (dispatch) => {
  try {
    const todo = { id: nextTodoId++, text, completed: false };
    // send data to the server
    const res = await apiService.post("/todos", todo);
    dispatch({ type: ADD_TODO, payload: { id: todo.id, text } });
  } catch (error) {
    console.log(error);
  }
};

export const getTodos = () => async (dispatch) => {
  try {
    // get data from the server
    const res = await apiService.get("/todos");
    console.log("res", res);
    dispatch({ type: GET_TODOS, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};

// export const toggleTodo = (id) => {
//   return { type: TOGGLE_TODO, payload: { id } };
// };

// put request to change state
export const toggleTodo = (todo) => async (dispatch) => {
  try {
    const res = await apiService.put(`/todos/${todo.id}`, {
      ...todo,
      completed: !todo.completed,
    });
    dispatch({
      type: TOGGLE_TODO,
      payload: { id: todo.id },
    });
  } catch (error) {
    console.log(error);
  }
};

export const setFilter = (filter) => {
  return { type: SET_FILTER, payload: filter };
};
