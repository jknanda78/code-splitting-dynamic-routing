import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { routerReducer as routing, routerMiddleware } from 'react-router-redux';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const createReducer = asyncReducers =>
  combineReducers({
    routing,
    ...asyncReducers
  });

export const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL
});

export const injectReducers = (store, name, asyncReducer) => {
  store.asyncReducers[name] = asyncReducer;
  store.replaceReducer(createReducer(store.asyncReducers));
};

export default (() => {
  const store = createStore(
    createReducer(),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(createLogger(), routerMiddleware(history), sagaMiddleware)
  );

  store.asyncReducers = {};
  sagaMiddleware.run(rootSaga);
  return store;
})();
