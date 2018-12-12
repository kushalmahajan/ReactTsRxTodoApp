import { ADD_TODO, DELETE_TODO, UPDATE_TODO, TOGGLE_TODO } from "../actionTypes/todos";

export const addTodo = title => ({ type: ADD_TODO, title });
export const deleteTodo = (id) => ({ type: DELETE_TODO, id });
export const updateTodo = (id, payload) => ({ type: UPDATE_TODO, id, payload  });
export const toggleTodo = (id) => ({ type: TOGGLE_TODO, id });