/*
@ Store

1. reducer ,[initialState], [enhancer]
*/

import { createStore, applyMiddleware, compose } from 'redux';
// saga middleware
import createSagaMiddleware from 'redux-saga';
const sagaMiddleware = createSagaMiddleware();
import rootReducer from './reducer';

const middleware = [sagaMiddleware];

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));

export default store;
