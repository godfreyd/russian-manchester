import { handleActions } from 'redux-actions';

import {
    EVENT_FETCH_DEVICES,
    EVENT_FETCH_DEVICES_SUCCESS,
    EVENT_FETCH_DEVICES_FAIL,
    EVENT_DEVICES_SUGGEST_SUCCESS
} from '../actions/devices';

export default handleActions({
    [EVENT_FETCH_DEVICES]: fetchDevices,
    [EVENT_FETCH_DEVICES_SUCCESS]: fetchDevicesSuccess,
    [EVENT_FETCH_DEVICES_FAIL]: fetchDevicesFail,
    [EVENT_DEVICES_SUGGEST_SUCCESS]: fetchDevicesSuggestSuccess
}, {
    devices: undefined,
    suggest: [],
    inprogress: false,
    error: undefined
});

function fetchDevices(state) {
    return {
        ...state,
        inprogress: true,
        error: undefined
    };
}

function fetchDevicesSuccess(state, action) {
    return {
        ...state,
        devices: action.payload,
        inprogress: false,
        error: undefined
    };
}

function fetchDevicesFail(state, action) {
    return {
        ...state,
        devices: [],
        inprogress: false,
        error: action.payload
    };
}

function fetchDevicesSuggestSuccess(state, action) {
    return {
        ...state,
        suggest: action.payload
    };
}
