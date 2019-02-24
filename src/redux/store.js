import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import combineReducer from './reducers/rootReducer';

const initialState = {};

const store = createStore(combineReducer, initialState, applyMiddleware(thunk));

export default store;