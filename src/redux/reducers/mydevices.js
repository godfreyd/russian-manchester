import { handleActions } from 'redux-actions';

import {
    EVENT_FETCH_MYDEVICES,
    EVENT_FETCH_MYDEVICES_SUCCESS,
    EVENT_FETCH_MYDEVICES_FAIL } from '../actions/mydevices';

export default handleActions({
    [EVENT_FETCH_MYDEVICES]: fetchMyDevices,
    [EVENT_FETCH_MYDEVICES_SUCCESS]: fetchMyDevicesSuccess,
    [EVENT_FETCH_MYDEVICES_FAIL]: fetchMyDevicesFail
}, {
    mydevices: undefined,
    inprogress: false,
    error: undefined
});

function fetchMyDevices(state) {
    return {
        ...state,
        inprogress: true,
        error: undefined
    };
}

function fetchMyDevicesSuccess(state, action) {
    return {
        mydevices: action.payload,
        inprogress: false,
        error: undefined
    };
}

function fetchMyDevicesFail(state, action) {
    return {
        ...state,
        mydevices: [],
        inprogress: false,
        error: action.payload
    };
}
