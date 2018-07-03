/**
 * Create the store with dynamic reducers
 */

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createReducer, formInitialStatePrefilled } from './reducer';



const initialState = {
    form: formInitialStatePrefilled
};
export default createStore(
    createReducer(),
    initialState,
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);