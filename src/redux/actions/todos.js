import { ADD_TODO, DELETE_TODO, UPDATE_TODO, TOGGLE_TODO, ADD_TODO_DELAY } from "../actionTypes/todos";

export const addTodoDelay = (title, delay = 1000) => ({type: ADD_TODO_DELAY, title, delay })
export const addTodo = title => ({ type: ADD_TODO, title });
export const deleteTodo = (id) => ({ type: DELETE_TODO, id });
export const updateTodo = (id, payload) => ({ type: UPDATE_TODO, id, payload  });
export const toggleTodo = (id) => ({ type: TOGGLE_TODO, id });