import { call, put, takeEvery } from 'redux-saga/effects';

import API from '../services/api';
import * as types from '../actions/offices';

function *fetchOffices() {
    try {
        const data = yield call(API.offices.fetch);

        yield put(types.fetchOfficesSuccess(data));
    } catch (error) {
        yield put(types.fetchOfficesFail(error));
    }
}

export default function *watchOfficesAsync() {
    yield [
        takeEvery(types.FETCH_OFFICES, fetchOffices)
    ];
}
