import {
    call, put, select, takeLatest, fork, spawn, delay,
} from 'redux-saga/effects'
import * as actionTypes from '../actions/AActionTypes'
import * as actionsLogin from '../actions/ALogin'
import { fetchToken } from '../../services/login';
import { IResponseGenerator } from '../../interfaces/IResponseGenerator';

// import { createGrowSession } from 'services/session'
// import Cookies from 'universal-cookie'
// // import timestampToMiliseconds from 'utils/timestamp-to-miliseconds'
// // import getLogoutUrl from 'utils/get-logout-url'
// function getLogoutUrl(path) {
//     const loginUrl = '/login'
//     const location = path !== '/' ? `${loginUrl}?l=${path}` : loginUrl
//     return location
// }

// const jwt = require('jsonwebtoken')

// export const getLastLocation = state => state.getIn(['nav', 'lastLocation'])
// const cookies = new Cookies()
// type fetchTokenProps = {
//     payload: {
//         email: string;
//         password: string;
//     }
// }
export function* login({ payload }: any) {
    const { password, email, navigate } = payload
    // yield fork(NProgress.start)
    try {
        const data: IResponseGenerator = yield call(fetchToken, { email, password })
        // { jwt_token: token }
        // const decodedToken = jwt.decode(token)
        // const { exp: expiration, roles } = decodedToken
        console.log(data)
        yield put(actionsLogin.getLoginSuccess(data))
        navigate('/menu');
        // yield put(setSessionExpiration(timestampToMiliseconds(expiration)))

        // cookies.set('token', token, {
        //     // expires: new Date(timestampToMiliseconds(expiration)),
        // })
        // const params = new URLSearchParams(window.location.search)
        // if (params.has('l')) {
        //     Router.push(params.get('l'))
        // } else {
        //     Router.push('/users')
        // }
        // // yield delay(3000)
        // // yield fork(document.location.reload())
        // yield fork(NProgress.done)
    } catch (error) {
        yield put(actionsLogin.getLoginError(error))
    }
}

// export function* logout() {
//     // yield fork(NProgress.start)
//     cookies.remove('token')
//     cookies.remove('expiration')
//     navigate('/');
//     yield call(actionsLogout.getLogoutSuccess)
//     // yield fork(NProgress.done)
// }

export default function* loginSaga() {
    yield takeLatest(actionTypes.GET_LOGIN_REQUEST, login)
    // yield takeLatest(actionTypes.GET_LOGOUT_REQUEST, logout)
}
