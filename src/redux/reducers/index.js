import { combineReducers } from 'redux';
import sampleReducer from './sample';
import todosReducer, { addTodosEpic, deleteTodosEpic } from './todos';
import { combineEpics } from 'redux-observable';


export const rootEpic = combineEpics(addTodosEpic, deleteTodosEpic);
export const rootReducer = combineReducers({sampleReducer, todosReducer});
