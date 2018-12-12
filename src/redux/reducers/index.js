import { combineReducers } from 'redux';
import sampleReducer from './sample';
import todosReducer from './todos';

const rootReducer = combineReducers({sampleReducer, todosReducer});
export default rootReducer;