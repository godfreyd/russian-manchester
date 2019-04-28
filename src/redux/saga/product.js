import { call, put, takeEvery } from 'redux-saga/effects';

import API from '../services/api';
import * as types from '../actions/product';

function *fetchProductAsync({ payload }) {
    try {
        const data = yield call(API.product.fetchProduct, { payload });

        yield put(types.fetchProductSuccess(data));
    } catch (error) {
        yield put(types.fetchProductFail(error.message));
    }
}

function *fetchProductModelAsync({ payload }) {
    try {
        const data = yield call(API.product.fetchProductModel, { payload });

        yield put(types.fetchProductModelSuccess(data));
    } catch (error) {
        yield put(types.fetchProductModelFail(error.message));
    }
}

function *fetchProductModelsAsync({ payload }) {
    try {
        const data = yield call(API.product.fetchProductModels, { payload });

        yield put(types.fetchProductModelsSuccess(data));
    } catch (error) {
        yield put(types.fetchProductModelsFail(error.message));
    }
}

function *fetchProductHistoryAsync({ payload }) {
    try {
        const data = yield call(API.product.fetchProductHistory, payload);

        yield put(types.fetchProductHistorySuccess(data));
    } catch (error) {
        yield put(types.fetchProductHistoryFail(error.message));
    }
}

function *subscribeToProductAsync({ payload }) {
    try {
        const data = yield call(API.product.subscribe, payload);

        yield put(types.subscribeToProductSuccess(data));
    } catch (error) {
        yield put(types.subscribeToProductFail(error.message));
    }
}

function *fetchProductSubscriptionsAsync({ payload }) {
    try {
        const data = yield call(API.product.fetchProductSubscriptions, payload);

        yield put(types.fetchProductSubscriptionsSuccess(data));
    } catch (error) {
        yield put(types.fetchProductSubscriptionsFail(error.message));
    }
}

function *lockProductAsync({ payload }) {
    try {
        const data = yield call(API.product.lock, payload);

        yield put(types.lockProductSuccess(data));
    } catch (error) {
        yield put(types.lockProductFail(error.message));
    }
}

function *unlockProductAsync({ payload }) {
    try {
        const data = yield call(API.product.unlock, payload);

        yield put(types.unlockProductSuccess(data));
    } catch (error) {
        yield put(types.unlockProductFail(error.message));
    }
}

function *toServiceProductAsync({ payload }) {
    try {
        const data = yield call(API.product.toService, payload);

        yield put(types.toServiceProductSuccess(data));
    } catch (error) {
        yield put(types.toServiceProductFail(error.message));
    }
}

function *grabProductAsync({ payload }) {
    try {
        const data = yield call(API.product.grab, payload);

        yield put(types.grabProductSuccess(data));
    } catch (error) {
        yield put(types.grabProductFail(error.message));
    }
}

function *saveProductAsync({ payload }) {
    try {
        const data = yield call(API.product.save, payload);

        yield put(types.saveProductSuccess(data));
    } catch (error) {
        yield put(types.saveProductFail(error.message));
    }
}

function *destroyProductAsync({ payload }) {
    try {
        const data = yield call(API.product.destroy, payload);

        yield put(types.destroyProductSuccess(data));
    } catch (error) {
        yield put(types.destroyProductFail(error.message));
    }
}

function *savePublicInfoAsync({ payload }) {
    try {
        const data = yield call(API.product.public, { payload });

        yield put(types.saveProductPublicInfoSuccess(data));
    } catch (error) {
        yield put(types.saveProductPublicInfoFail(error.message));
    }
}

export default function *watchProductAsync() {
    yield [
        takeEvery(types.EVENT_FETCH_PRODUCT, fetchProductAsync),
        takeEvery(types.EVENT_PRODUCT_MODEL, fetchProductModelAsync),
        takeEvery(types.EVENT_PRODUCT_MODELS, fetchProductModelsAsync),
        takeEvery(types.EVENT_PRODUCT_HISTORY, fetchProductHistoryAsync),
        takeEvery(types.EVENT_SUBSCRIBE_PRODUCT, subscribeToProductAsync),
        takeEvery(types.EVENT_PRODUCT_SUBSCRIPTIONS, fetchProductSubscriptionsAsync),
        takeEvery(types.EVENT_LOCK_PRODUCT, lockProductAsync),
        takeEvery(types.EVENT_UNLOCK_PRODUCT, unlockProductAsync),
        takeEvery(types.EVENT_TO_SERVICE_PRODUCT, toServiceProductAsync),
        takeEvery(types.EVENT_GRAB_PRODUCT, grabProductAsync),
        takeEvery(types.EVENT_SAVE_PRODUCT, saveProductAsync),
        takeEvery(types.EVENT_DESTROY_PRODUCT, destroyProductAsync),
        takeEvery(types.EVENT_PRODUCT_PUBLIC, savePublicInfoAsync)
    ];
}
