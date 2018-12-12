import { ADD_TODO, DELETE_TODO, UPDATE_TODO, TOGGLE_TODO } from "../actionTypes/todos";
import counter from "../../helpers/counter";

const initialState = {
  todos: [],
  visibilityFilter: "SHOW_ALL"
};
const todosReducer = (state = initialState, action) => {
    const { todos } = state;
    switch (action.type) {
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
export default todosReducer;
