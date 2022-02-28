import {
    takeLatest, put
} from 'redux-saga/effects'

import * as actionTypes from '../actions/AActionTypes'
import * as actionsLogout from '../actions/ALogout'

export function* logout({ payload }: any) {
    const { navigate } = payload
    yield put(actionsLogout.getLogoutSuccess({}))
    navigate('/');
}

export default function* loginSaga() {
    yield takeLatest(actionTypes.GET_LOGOUT_REQUEST, logout)
}
