import { call, put, takeEvery } from 'redux-saga/effects';

import API from '../services/api';
import * as types from '../actions/products';

function *fetchProductsAsync({ payload }) {
    try {
        const data = yield call(API.products.fetch, { payload });

        yield put(types.fetchProductsSuccess(data));
    } catch (error) {
        yield put(types.fetchProductsFail(error.message));
    }
}

function *fetchProductsSuggestAsync({ payload }) {
    try {
        const data = yield call(API.products.suggest, [{ text: payload.text }, ...payload.tesseracts]);

        yield put(types.fetchProductsSuggestSuccess(data));
    } catch (error) {
        yield put(types.fetchProductsSuggestFail(error.message));
    }
}

export default function *watchProductsAsync() {
    yield [
        takeEvery(types.EVENT_FETCH_PRODUCTS, fetchProductsAsync),
        takeEvery(types.EVENT_PRODUCTS_SUGGEST, fetchProductsSuggestAsync)
    ];
}
