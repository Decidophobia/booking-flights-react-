import { combineReducers } from 'redux';
import { flightsReducer } from './flightsReducer';
import { signinReducer } from './signinReducer';
import { picReducer } from './picsReducer';

export const rootReducer = combineReducers({
  signin: signinReducer,
  pic: picReducer,
  flights: flightsReducer,
});
