import { all, takeEvery } from 'redux-saga/effects';
import { NAVIGATE_TO_SCREEN } from '../actions/types';
import { history } from '../store';

function navigate(action) {
  switch (action.type) {
    case NAVIGATE_TO_SCREEN:
      history.push(action.path);
      break;
    default:
      break;
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery(NAVIGATE_TO_SCREEN, navigate)
  ]);
}