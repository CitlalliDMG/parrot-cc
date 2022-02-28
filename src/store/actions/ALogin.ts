import { 
    GET_LOGIN_REQUEST,
    GET_LOGIN_SUCCESS,
    GET_LOGIN_ERROR,
} from './AActionTypes'

const getLoginRequest = (payload: {}) => {
    return {
        type: GET_LOGIN_REQUEST,
        payload: payload,
    }
}

const getLoginSuccess = (payload: {}) => {
    return {
        type: GET_LOGIN_SUCCESS,
        payload: payload,
    }
}

const getLoginError = ({error}: any) => {
    return {
        type: GET_LOGIN_ERROR,
        payload: {error},
    }
}

export {
    getLoginRequest,
    getLoginSuccess,
    getLoginError
}

export default {
    getLoginRequest,
    getLoginSuccess,
    getLoginError
}