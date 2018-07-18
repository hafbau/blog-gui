/**
 * Create the store with dynamic reducers
 */

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer';



const initialState = {
    articles: [],
    article: {}
};

export default createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);