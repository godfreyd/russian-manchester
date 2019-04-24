import { handleActions } from 'redux-actions';

import { showTransactionErrorMessage } from '../../lib/notification';

import {
    FETCH_OFFICES,
    FETCH_OFFICES_SUCCESS,
    FETCH_OFFICES_FAIL
} from '../actions/offices';

export default handleActions({
    [FETCH_OFFICES]: fetchOffices,
    [FETCH_OFFICES_SUCCESS]: fetchOfficesSuccess,
    [FETCH_OFFICES_FAIL]: fetchOfficesFail
}, {
    list: [],
    inprogress: false
});

function fetchOffices(state) {
    return {
        ...state,
        inprogress: true
    };
}

function fetchOfficesSuccess(state, action) {
    return {
        ...state,
        list: action.payload,
        inprogress: false
    };
}

function fetchOfficesFail(state, action) {
    showTransactionErrorMessage('offices', action.payload);

    return {
        ...state,
        inprogress: false
    };
}
