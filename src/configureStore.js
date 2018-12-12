import { createStore, applyMiddleware } from "redux";
import reducers from './redux/reducers';

const store = createStore(
    reducers
);
export default store;