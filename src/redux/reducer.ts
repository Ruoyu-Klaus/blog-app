/*
Used for saga and thunk reducers
*/
import { combineReducers } from 'redux';
import sagaReducer from './saga/reducers/index';

const rootReducer = combineReducers({
  ...sagaReducer,
});

export default rootReducer;
