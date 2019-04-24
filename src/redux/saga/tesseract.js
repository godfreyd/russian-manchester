import { call, put, takeEvery } from 'redux-saga/effects';

import API from '../services/api';
import * as types from '../actions/tesseract';

function *editCubeAsync({ payload }) {
    try {
        const data = yield call(API.tesseract.edit, payload);

        yield put(types.editCubeSuccess(data));
    } catch (error) {
        yield put(types.editCubeFail(error));
    }
}

function *fetchCubeHistoryAsync({ payload }) {
    try {
        const data = yield call(API.tesseract.fetchCubeHistory, payload);

        yield put(types.fetchCubeHistorySuccess({ response: data, slot: payload.slot }));
    } catch (error) {
        yield put(types.fetchCubeHistoryFail({ error: error.message, slot: payload.slot }));
    }
}

function *fetchLastCubeEventsAsync({ payload }) {
    try {
        const data = yield call(API.tesseract.fetchLastEvents, payload);

        yield put(types.fetchLastCubeEventsSuccess(data));
    } catch (error) {
        yield put(types.fetchLastCubeEventsFail(error.message));
    }
}

function *saveCubeAsync({ payload }) {
    try {
        const data = yield call(API.tesseract.save, payload);

        yield put(types.saveCubeSuccess(data));
    } catch (error) {
        yield put(types.saveCubeFail(error));
    }
}

export default function *watchTesseractAsync() {
    yield [
        takeEvery(types.EVENT_EDIT_CUBE, editCubeAsync),
        takeEvery(types.EVENT_CUBE_HISTORY, fetchCubeHistoryAsync),
        takeEvery(types.FETCH_CUBE_LAST_EVENTS, fetchLastCubeEventsAsync),
        takeEvery(types.EVENT_SAVE_CUBE, saveCubeAsync)
    ];
}
