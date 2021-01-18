import { all, call, put, takeEvery } from 'redux-saga/effects'




export default function* mySaga() {
  yield all([watcher()]);
}
