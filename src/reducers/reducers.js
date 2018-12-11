import { combineReducers } from 'redux';
import sampleReducer from './sample';
import todosReducer from './todos';

const reducers = combineReducers(sampleReducer, todosReducer);
export default reducers;