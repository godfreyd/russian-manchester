import { call, put, takeEvery } from 'redux-saga/effects';

import API from '../services/api';
import * as types from '../actions/user';

function *fetchUserInfoAsync({ payload }) {
    try {
        const data = yield call(API.user.info, payload);

        yield put(types.fetchUserInfoSuccess(data));
    } catch (error) {
        yield put(types.fetchUserInfoFail(error.message));
    }
}

function *fetchUserHistoryAsync({ payload }) {
    try {
        const data = yield call(API.user.history, payload);

        yield put(types.fetchUserHistorySuccess(data));
    } catch (error) {
        yield put(types.fetchUserHistoryFail(error.message));
    }
}

function *fetchUserProductsAsync({ payload }) {
    try {
        const data = yield call(API.user.products, payload);

        yield put(types.fetchUserProductsSuccess(data));
    } catch (error) {
        yield put(types.fetchUserProductsFail(error.message));
    }
}

function *fetchUserSubscriptionsAsync() {
    try {
        const data = yield call(API.user.fetchUserSubscriptions);

        yield put(types.fetchUserSubscriptionsSuccess(data));
    } catch (error) {
        yield put(types.fetchUserSubscriptionsFail(error.message));
    }
}

export default function *watchUserAsync() {
    yield [
        takeEvery(types.EVENT_USER_INFO, fetchUserInfoAsync),
        takeEvery(types.EVENT_USER_HISTORY, fetchUserHistoryAsync),
        takeEvery(types.EVENT_USER_PRODUCTS, fetchUserProductsAsync),
        takeEvery(types.EVENT_USER_SUBSCRIPTIONS, fetchUserSubscriptionsAsync)
    ];
}
