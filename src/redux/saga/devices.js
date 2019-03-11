import { call, put, takeEvery } from 'redux-saga/effects';

import API from '../services/api';
import * as types from '../actions/devices';

function *fetchDevicesAsync({ payload }) {
    try {
        const data = yield call(API.devices.fetch, { payload });

        yield put(types.fetchDevicesSuccess(data));
    } catch (error) {
        yield put(types.fetchDevicesFail(error.message));
    }
}

function *fetchDevicesSuggestAsync({ payload }) {
    try {
        const data = yield call(API.devices.suggest, [{ text: payload.text }, ...payload.tesseracts]);

        yield put(types.fetchDevicesSuggestSuccess(data));
    } catch (error) {
        yield put(types.fetchDevicesSuggestFail(error.message));
    }
}

export default function *watchDevicesAsync() {
    yield [
        takeEvery(types.EVENT_FETCH_DEVICES, fetchDevicesAsync),
        takeEvery(types.EVENT_DEVICES_SUGGEST, fetchDevicesSuggestAsync)
    ];
}
