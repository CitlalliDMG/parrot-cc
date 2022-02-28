import { fork } from 'redux-saga/effects'
import loginSaga from './SLogin';

export default function* rootSaga() {
  yield fork(loginSaga)
}