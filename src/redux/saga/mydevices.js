import { call, put, takeEvery } from 'redux-saga/effects';

import API from '../services/api';
import * as types from '../actions/mydevices';

function *fetchMyDevicesAsync() {
    try {
        const data = yield call(API.user.devices, {});

        yield put(types.fetchMyDevicesSuccess(data));
    } catch (error) {
        yield put(types.fetchMyDevicesFail(error.message));
    }
}

export default function *watchMyDevicesAsync() {
    yield [
        takeEvery(types.EVENT_FETCH_MYDEVICES, fetchMyDevicesAsync)
    ];
}
