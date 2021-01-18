import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import mySaga from './mySaga';
import { rootReducer } from './reducers/rootReducer';

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
  rootReducer,
  composeWithDevTools(sagaMiddleware)
);

sagaMiddleware.run(mySaga);
