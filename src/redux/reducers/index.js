import { combineReducers } from 'redux';
import sampleReducer from './sample';
import todosReducer, { addTodosEpic } from './todos';
import { combineEpics } from 'redux-observable';


export const rootEpic = combineEpics(addTodosEpic);
export const rootReducer = combineReducers({sampleReducer, todosReducer});
