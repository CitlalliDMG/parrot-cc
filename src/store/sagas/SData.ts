import {
    call, put, takeLatest, select, takeEvery
} from 'redux-saga/effects';
import * as actionTypes from '../actions/AActionTypes';
import * as actionsData from '../actions/AData';
import * as actionsError from '../actions/AError';
import { fetchStoreData, fetchProductsData } from '../../services/data';
import { IResponseStoresData } from '../../interfaces/IResponseData';

export const getToken = (state: any) => state.login.data.access;

export function* fetchStore() {
    const token: string = yield select(getToken);
    try {
        const data: IResponseStoresData = yield call(fetchStoreData, { token })
        yield put(actionsData.getStoreSuccess(data))
        yield put(actionsData.getProductsRequest(data.result.stores[0].uuid))
        // TODO: Dispatch products request for each store
        // data.result.stores.map(store => {
        //     yield put(actionsData.getProductsRequest(store.uuid))
        // })
    } catch (error) {
        yield put(actionsError.showError({}))
    }
}

export function* fetchProducts({ payload }: any) {
    const token: string = yield select(getToken);
    const payloadData = {
        token,
        storeId: payload
    }
    try {
        const data: {} = yield call(fetchProductsData, payloadData)
        yield put(actionsData.getProductsSuccess(data))
    } catch (error) {
        yield put(actionsError.showError({}))
    }
}

export default function* dataSaga() {
    yield takeLatest(actionTypes.GET_STORE_REQUEST, fetchStore);
    yield takeEvery(actionTypes.GET_PRODUCTS_REQUEST, fetchProducts);
}
