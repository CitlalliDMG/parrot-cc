import {
    call, put, takeLatest, select, takeEvery
} from 'redux-saga/effects';
import * as actionTypes from '../actions/AActionTypes';
import * as actionsData from '../actions/AData';
import * as actionsError from '../actions/AError';
import { fetchStoreData, fetchProductsData } from '../../services/data';
import { IResponseStoresData } from '../../interfaces/IResponseData';

export const getToken = (state: any) => state.login.data.access;

export function* fetchStore({ payload }: any) {
    const { navigate, refresh } = payload
    const token: string = yield select(getToken);
    try {
        const data: IResponseStoresData = yield call(fetchStoreData, { token })
        yield put(actionsData.getStoreSuccess(data))
        yield put(actionsData.getProductsRequest({ storeId: data.result.stores[0].uuid, navigate, refresh }))
        // TODO: Dispatch products request for each store
        // data.result.stores.map(store => {
        //     yield put(actionsData.getProductsRequest(store.uuid))
        // })
    } catch (error) {
        yield put(actionsError.showError({}))
    }
}

export function* fetchProducts({ payload }: any) {
    const { storeId, navigate, refresh } = payload

    const token: string = yield select(getToken);
    const payloadData = {
        token,
        storeId
    }
    try {
        const data: {} = yield call(fetchProductsData, payloadData)
        yield put(actionsData.getProductsSuccess(data))
        !refresh && navigate('/menu')
    } catch (error) {
        yield put(actionsError.showError({}))
    }
}

export default function* dataSaga() {
    yield takeLatest(actionTypes.GET_STORE_REQUEST, fetchStore);
    yield takeEvery(actionTypes.GET_PRODUCTS_REQUEST, fetchProducts);
}
