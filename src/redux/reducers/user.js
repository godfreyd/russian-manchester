import { handleActions } from 'redux-actions';

import {
    EVENT_USER_INFO,
    EVENT_USER_INFO_SUCCESS,
    EVENT_USER_INFO_FAIL,
    EVENT_USER_HISTORY_SUCCESS,
    EVENT_USER_DEVICES,
    EVENT_USER_DEVICES_SUCCESS,
    EVENT_USER_SUBSCRIPTIONS_SUCCESS
} from '../actions/user';

export default handleActions({
    [EVENT_USER_INFO]: fetchUserInfo,
    [EVENT_USER_INFO_SUCCESS]: fetchUserInfoSuccess,
    [EVENT_USER_INFO_FAIL]: fetchUserInfoFail,
    [EVENT_USER_HISTORY_SUCCESS]: fetchUserHistorySuccess,
    [EVENT_USER_DEVICES]: fetchUserDevices,
    [EVENT_USER_DEVICES_SUCCESS]: fetchUserDevicesSuccess,
    [EVENT_USER_SUBSCRIPTIONS_SUCCESS]: fetchUserSubscriptionsSuccess
}, {
    info: {},
    inprogress: false,
    history: {},
    subscriptions: [],
    error: undefined
});

function fetchUserInfo(state) {
    return {
        ...state,
        inprogress: true,
        error: undefined
    };
}

function fetchUserDevices(state) {
    return {
        ...state,
        devices: []
    };
}

function fetchUserInfoSuccess(state, action) {
    return {
        ...state,
        info: action.payload,
        inprogress: false
    };
}

function fetchUserInfoFail(state, action) {
    return {
        ...state,
        info: {},
        inprogress: false,
        error: action.payload
    };
}

function fetchUserHistorySuccess(state, action) {
    return {
        ...state,
        history: action.payload
    };
}

function fetchUserDevicesSuccess(state, action) {
    return {
        ...state,
        devices: action.payload
    };
}

function fetchUserSubscriptionsSuccess(state, action) {
    return {
        ...state,
        subscriptions: action.payload
    };
}
