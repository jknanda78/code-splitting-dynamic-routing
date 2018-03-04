import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import appReducer from './app';

export default combineReducers({
  appReducer,
  routing
});