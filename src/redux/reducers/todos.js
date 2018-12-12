import { ADD_TODO,ADD_TODO_DELAY, DELETE_TODO, UPDATE_TODO, TOGGLE_TODO } from "../actionTypes/todos";
import counter from "../../helpers/counter";
import { ofType } from "redux-observable";
import { addTodo } from "../actions/todos";
import { pluck, delay, map, mergeMap, mapTo, tap } from 'rxjs/operators';
import { merge } from "rxjs";

const initialState = {
  todos: [],
  visibilityFilter: "SHOW_ALL"
};

export const todosReducer = (state = initialState, action) => {
    const { todos } = state;
    switch (action.type) {
    case ADD_TODO_DELAY: 
        return {...state};
    case ADD_TODO:
        const newList = { todos: [...todos, { title: action.title, id: counter(), completed: false }] };
        return { ...state, ...newList };
      case DELETE_TODO:
        return { todos: todos.filter(todo => todo.id !== action.id) };
      case UPDATE_TODO:
        return { todos: todos.map(todo => {
            if (todo.id !== action.id) return todo;
            return { ...todo, ...action.payload };
          }) };
      case TOGGLE_TODO:
        return { todos: todos.map(todo => {
            if (todo.id !== action.id) return todo;
            return { ...todo, completed: !todo.completed };
          }) };
      default:
        return state;
    }
};
export const addTodosEpic = (action$) => action$.pipe(
  ofType(ADD_TODO_DELAY),
  delay(1000),
  map(action => addTodo(action.title))
);
export default todosReducer;


