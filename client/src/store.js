import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

// setting up initialState
const initialState = {};

// setting up middleware with thunk, allows us to use our actions as functions
const middleware = [thunk];

// create store
const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //need this line to implement the chrome Redux extension
    )
);

export default store;