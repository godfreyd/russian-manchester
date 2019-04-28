import { call, put, takeEvery } from 'redux-saga/effects';

import API from '../services/api';
import * as types from '../actions/filters';

function *fetchFiltersAsync() {
    try {
        const data = yield call(API.filters.fetch);

        yield put(types.fetchFiltersSuccess(data));
    } catch (error) {
        yield put(types.fetchFiltersFail(error.message));
    }
}

export default function *watchFiltersAsync() {
    yield [
        takeEvery(types.EVENT_FETCH_FILTERS, fetchFiltersAsync)
    ];
}
