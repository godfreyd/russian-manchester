import { call, put, takeEvery } from 'redux-saga/effects';

import API from '../services/api';
import * as types from '../actions/my-products';

function *fetchMyProductsAsync() {
    try {
        const data = yield call(API.myProducts.fetch);

        yield put(types.fetchMyProductsSuccess(data));
    } catch (error) {
        yield put(types.fetchMyProductsFail(error.message));
    }
}

export default function *watchMyProductsAsync() {
    yield [
        takeEvery(types.EVENT_FETCH_MYPRODUCTS, fetchMyProductsAsync)
    ];
}
