import {
    call, put, takeLatest
} from 'redux-saga/effects'
import jwt_decode from 'jwt-decode';
import * as actionTypes from '../actions/AActionTypes'
import * as actionsLogin from '../actions/ALogin'
import { fetchToken } from '../../services/login';
import { IToken } from '../../interfaces/IToken';

export function* login({ payload }: any) {
    const { password, email, navigate } = payload
    try {
        const data: { access: string; refresh: string; } = yield call(fetchToken, { email, password })
        const { access: token } = data
        const decodedToken: IToken = jwt_decode(token)
        const expirationDate = new Date(decodedToken.exp * 1000)
        const actualDate = new Date()
        if (expirationDate > actualDate) {
            yield put(actionsLogin.getLoginSuccess(data))
            navigate('/menu');
        }
    } catch (error) {
        yield put(actionsLogin.getLoginError({ status: true }))
    }
}

export default function* loginSaga() {
    yield takeLatest(actionTypes.GET_LOGIN_REQUEST, login)
}
