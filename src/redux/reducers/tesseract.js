import { handleActions } from 'redux-actions';

import { showTransactionErrorMessage, showSuccess } from '../../lib/notification';
import {
    EVENT_EDIT_CUBE,
    EVENT_EDIT_CUBE_SUCCESS,
    EVENT_EDIT_CUBE_FAIL,
    EVENT_CUBE_HISTORY,
    EVENT_CUBE_HISTORY_SUCCESS,
    EVENT_CUBE_HISTORY_FAIL,
    FETCH_CUBE_LAST_EVENTS,
    FETCH_CUBE_LAST_EVENTS_SUCCESS,
    FETCH_CUBE_LAST_EVENTS_FAIL
} from '../actions/tesseract';

export default handleActions({
    [EVENT_EDIT_CUBE]: editCube,
    [EVENT_EDIT_CUBE_SUCCESS]: editCubeSuccess,
    [EVENT_EDIT_CUBE_FAIL]: editCubeFail,
    [EVENT_CUBE_HISTORY]: fetchCubeHistory,
    [EVENT_CUBE_HISTORY_SUCCESS]: fetchCubeHistorySuccess,
    [EVENT_CUBE_HISTORY_FAIL]: fetchCubeHistoryFail,
    [FETCH_CUBE_LAST_EVENTS]: fetchLastCubeEvents,
    [FETCH_CUBE_LAST_EVENTS_SUCCESS]: fetchLastEventCubeSuccess,
    [FETCH_CUBE_LAST_EVENTS_FAIL]: fetchLastCubeEventsFail
}, {
    lastEvents: [],
    history: {},
    slotHistory: {},
    inprogress: false
});

function editCube(state) {
    return {
        ...state,
        inprogress: true
    };
}

function editCubeSuccess(state) {
    showSuccess('Успешно отредактирован, очень успешно.');

    return {
        ...state,
        inprogress: false
    };
}

function editCubeFail(state, action) {
    showTransactionErrorMessage('edit-cube', action.payload);

    return {
        ...state,
        inprogress: false
    };
}

function fetchCubeHistory(state, action) {
    const isFirstFetch = action.payload.pageNumber === 1;
    const historyKey = getHistoryKey(action);
    const history = isFirstFetch ? {} : state[historyKey];

    return {
        ...state,
        [historyKey]: {
            ...history,
            isLoading: true
        }
    };
}

function fetchCubeHistorySuccess(state, action) {
    const { payload: { response } } = action;
    const historyKey = getHistoryKey(action);
    const { rows = [] } = state[historyKey];

    return {
        ...state,
        [historyKey]: {
            ...response,
            rows: rows.concat(response.rows)
        }
    };
}

function fetchCubeHistoryFail(state, action) {
    const historyKey = getHistoryKey(action);

    return {
        ...state,
        [historyKey]: {
            ...state[historyKey],
            isLoading: false
        }
    };
}

function getHistoryKey(action) {
    return action.payload.slot ? 'slotHistory' : 'history';
}

function fetchLastCubeEvents(state, action) {
    const { payload: { shouldReset } } = action;

    if (!shouldReset) {
        return state;
    }

    return {
        ...state,
        lastEvents: []
    };
}

function fetchLastEventCubeSuccess(state, action) {
    const { payload } = action;

    return {
        ...state,
        lastEvents: payload
    };
}

function fetchLastCubeEventsFail(state, action) {
    showTransactionErrorMessage('cubeLastEvents', action.payload);

    return state;
}
