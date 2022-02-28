import {
    GET_STORE_REQUEST,
    GET_STORE_SUCCESS,
    GET_STORE_ERROR,
    GET_PRODUCTS_REQUEST,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_ERROR
} from './AActionTypes'

const getStoreRequest = () => {
    return {
        type: GET_STORE_REQUEST,
    }
}

const getStoreSuccess = (payload: {}) => {
    return {
        type: GET_STORE_SUCCESS,
        payload: payload,
    }
}

const getStoreError = ({ error }: any) => {
    return {
        type: GET_STORE_ERROR,
        payload: { error },
    }
}

const getProductsRequest = (payload: {}) => {
    return {
        type: GET_PRODUCTS_REQUEST,
        payload: payload,
    }
}

const getProductsSuccess = (payload: {}) => {
    return {
        type: GET_PRODUCTS_SUCCESS,
        payload: payload,
    }
}

const getProductsError = ({ error }: any) => {
    return {
        type: GET_PRODUCTS_ERROR,
        payload: { error },
    }
}

export {
    getStoreRequest,
    getStoreSuccess,
    getStoreError,
    getProductsRequest,
    getProductsSuccess,
    getProductsError
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getStoreRequest,
    getStoreSuccess,
    getStoreError,
    getProductsRequest,
    getProductsSuccess,
    getProductsError
}