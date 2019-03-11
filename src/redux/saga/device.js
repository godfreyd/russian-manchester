import { call, put, takeEvery } from 'redux-saga/effects';

import API from '../services/api';
import * as types from '../actions/device';

function *fetchDeviceAsync({ payload }) {
    try {
        const data = yield call(API.device.fetchDevice, { payload });

        yield put(types.fetchDeviceSuccess(data));
    } catch (error) {
        yield put(types.fetchDeviceFail(error.message));
    }
}

function *fetchDeviceModelAsync({ payload }) {
    try {
        const data = yield call(API.device.fetchDeviceModel, { payload });

        yield put(types.fetchDeviceModelSuccess(data));
    } catch (error) {
        yield put(types.fetchDeviceModelFail(error.message));
    }
}

function *fetchDeviceModelsAsync({ payload }) {
    try {
        const data = yield call(API.device.fetchDeviceModels, { payload });

        yield put(types.fetchDeviceModelsSuccess(data));
    } catch (error) {
        yield put(types.fetchDeviceModelsFail(error.message));
    }
}

function *fetchDeviceHistoryAsync({ payload }) {
    try {
        const data = yield call(API.device.fetchDeviceHistory, payload);

        yield put(types.fetchDeviceHistorySuccess(data));
    } catch (error) {
        yield put(types.fetchDeviceHistoryFail(error.message));
    }
}

function *subscribeToDeviceAsync({ payload }) {
    try {
        const data = yield call(API.device.subscribe, payload);

        yield put(types.subscribeToDeviceSuccess(data));
    } catch (error) {
        yield put(types.subscribeToDeviceFail(error.message));
    }
}

function *fetchDeviceSubscriptionsAsync({ payload }) {
    try {
        const data = yield call(API.device.fetchDeviceSubscriptions, payload);

        yield put(types.fetchDeviceSubscriptionsSuccess(data));
    } catch (error) {
        yield put(types.fetchDeviceSubscriptionsFail(error.message));
    }
}

function *lockDeviceAsync({ payload }) {
    try {
        const data = yield call(API.device.lock, payload);

        yield put(types.lockDeviceSuccess(data));
    } catch (error) {
        yield put(types.lockDeviceFail(error.message));
    }
}

function *unlockDeviceAsync({ payload }) {
    try {
        const data = yield call(API.device.unlock, payload);

        yield put(types.unlockDeviceSuccess(data));
    } catch (error) {
        yield put(types.unlockDeviceFail(error.message));
    }
}

function *toServiceDeviceAsync({ payload }) {
    try {
        const data = yield call(API.device.toService, payload);

        yield put(types.toServiceDeviceSuccess(data));
    } catch (error) {
        yield put(types.toServiceDeviceFail(error.message));
    }
}

function *grabDeviceAsync({ payload }) {
    try {
        const data = yield call(API.device.grab, payload);

        yield put(types.grabDeviceSuccess(data));
    } catch (error) {
        yield put(types.grabDeviceFail(error.message));
    }
}

function *saveDeviceAsync({ payload }) {
    try {
        const data = yield call(API.device.save, payload);

        yield put(types.saveDeviceSuccess(data));
    } catch (error) {
        yield put(types.saveDeviceFail(error.message));
    }
}

function *destroyDeviceAsync({ payload }) {
    try {
        const data = yield call(API.device.destroy, payload);

        yield put(types.destroyDeviceSuccess(data));
    } catch (error) {
        yield put(types.destroyDeviceFail(error.message));
    }
}

function *savePublicInfoAsync({ payload }) {
    try {
        yield call(API.device.public, { payload });
        yield put(types.saveDevicePublicInfoSuccess());
    } catch (error) {
        yield put(types.saveDevicePublicInfoFail(error.message));
    }
}

export default function *watchDeviceAsync() {
    yield [
        takeEvery(types.EVENT_FETCH_DEVICE, fetchDeviceAsync),
        takeEvery(types.EVENT_DEVICE_MODEL, fetchDeviceModelAsync),
        takeEvery(types.EVENT_DEVICE_MODELS, fetchDeviceModelsAsync),
        takeEvery(types.EVENT_DEVICE_HISTORY, fetchDeviceHistoryAsync),
        takeEvery(types.EVENT_SUBSCRIBE_DEVICE, subscribeToDeviceAsync),
        takeEvery(types.EVENT_DEVICE_SUBSCRIPTIONS, fetchDeviceSubscriptionsAsync),
        takeEvery(types.EVENT_LOCK_DEVICE, lockDeviceAsync),
        takeEvery(types.EVENT_UNLOCK_DEVICE, unlockDeviceAsync),
        takeEvery(types.EVENT_TO_SERVICE_DEVICE, toServiceDeviceAsync),
        takeEvery(types.EVENT_GRAB_DEVICE, grabDeviceAsync),
        takeEvery(types.EVENT_SAVE_DEVICE, saveDeviceAsync),
        takeEvery(types.EVENT_DESTROY_DEVICE, destroyDeviceAsync),
        takeEvery(types.EVENT_DEVICE_PUBLIC, savePublicInfoAsync)
    ];
}
