import { call, put, takeEvery } from 'redux-saga/effects';

import API from '../services/api';
import * as types from '../actions/product';

function *saveProductAsync({ payload }) {
    try {
        const data = yield call(API.product.save, payload);

        yield put(types.saveProductSuccess(data));
    } catch (error) {
        yield put(types.saveProductFail(error.message));
    }
}

export default function *watchProductAsync() {
    yield [
        takeEvery(types.EVENT_SAVE_PRODUCT, saveProductAsync)
    ];
}
