import { handleActions } from 'redux-actions';

import { reachGoal } from '../../lib/metrika';
import { showTransactionErrorMessage, showSuccess } from '../../lib/notification';
import {
    EVENT_FETCH_DEVICE,
    EVENT_FETCH_DEVICE_SUCCESS,
    EVENT_FETCH_DEVICE_FAIL,
    EVENT_DEVICE_MODELS_SUCCESS,
    EVENT_DEVICE_MODEL_SUCCESS,
    EVENT_DEVICE_HISTORY,
    EVENT_DEVICE_HISTORY_SUCCESS,
    EVENT_DEVICE_CLEAR,
    EVENT_SUBSCRIBE_DEVICE,
    EVENT_SUBSCRIBE_DEVICE_SUCCESS,
    EVENT_SUBSCRIBE_DEVICE_FAIL,
    EVENT_DEVICE_SUBSCRIPTIONS,
    EVENT_DEVICE_SUBSCRIPTIONS_SUCCESS,
    EVENT_LOCK_DEVICE,
    EVENT_LOCK_DEVICE_SUCCESS,
    EVENT_LOCK_DEVICE_FAIL,
    EVENT_UNLOCK_DEVICE,
    EVENT_UNLOCK_DEVICE_SUCCESS,
    EVENT_UNLOCK_DEVICE_FAIL,
    EVENT_GRAB_DEVICE,
    EVENT_GRAB_DEVICE_SUCCESS,
    EVENT_GRAB_DEVICE_FAIL,
    EVENT_TO_SERVICE_DEVICE,
    EVENT_TO_SERVICE_DEVICE_SUCCESS,
    EVENT_TO_SERVICE_DEVICE_FAIL,
    EVENT_SAVE_DEVICE,
    EVENT_SAVE_DEVICE_SUCCESS,
    EVENT_SAVE_DEVICE_FAIL,
    EVENT_DESTROY_DEVICE,
    EVENT_DESTROY_DEVICE_FAIL,
    EVENT_DESTROY_DEVICE_SUCCESS,
    EVENT_DEVICE_PUBLIC,
    EVENT_DEVICE_PUBLIC_SUCCESS,
    EVENT_DEVICE_PUBLIC_FAIL
} from '../actions/device';

export default handleActions({
    [EVENT_FETCH_DEVICE]: fetchDevice,
    [EVENT_FETCH_DEVICE_SUCCESS]: fetchDeviceSuccess,
    [EVENT_FETCH_DEVICE_FAIL]: fetchDeviceFail,
    [EVENT_DEVICE_MODELS_SUCCESS]: fetchDeviceModelsSuccess,
    [EVENT_DEVICE_MODEL_SUCCESS]: fetchDeviceModelSuccess,
    [EVENT_DEVICE_HISTORY]: fetchDeviceHistory,
    [EVENT_DEVICE_HISTORY_SUCCESS]: fetchDeviceHistorySuccess,
    [EVENT_DEVICE_CLEAR]: clearStore,
    [EVENT_SUBSCRIBE_DEVICE]: subscribeToDevice,
    [EVENT_SUBSCRIBE_DEVICE_SUCCESS]: subscribeToDeviceSuccess,
    [EVENT_SUBSCRIBE_DEVICE_FAIL]: subscribeToDeviceFail,
    [EVENT_DEVICE_SUBSCRIPTIONS]: fetchDeviceSubscriptions,
    [EVENT_DEVICE_SUBSCRIPTIONS_SUCCESS]: fetchDeviceSubscriptionsSuccess,
    [EVENT_LOCK_DEVICE]: lockDevice,
    [EVENT_LOCK_DEVICE_SUCCESS]: lockDeviceSuccess,
    [EVENT_LOCK_DEVICE_FAIL]: lockDeviceFail,
    [EVENT_UNLOCK_DEVICE]: unlockDevice,
    [EVENT_UNLOCK_DEVICE_SUCCESS]: unlockDeviceSuccess,
    [EVENT_UNLOCK_DEVICE_FAIL]: unlockDeviceFail,
    [EVENT_GRAB_DEVICE]: grabDevice,
    [EVENT_GRAB_DEVICE_SUCCESS]: grabDeviceSuccess,
    [EVENT_GRAB_DEVICE_FAIL]: grabDeviceFail,
    [EVENT_TO_SERVICE_DEVICE]: toServiceDevice,
    [EVENT_TO_SERVICE_DEVICE_SUCCESS]: toServiceDeviceSuccess,
    [EVENT_TO_SERVICE_DEVICE_FAIL]: toServiceDeviceFail,
    [EVENT_SAVE_DEVICE]: saveDevice,
    [EVENT_SAVE_DEVICE_SUCCESS]: saveDeviceSuccess,
    [EVENT_SAVE_DEVICE_FAIL]: saveDeviceFail,
    [EVENT_DESTROY_DEVICE]: destroyDevice,
    [EVENT_DESTROY_DEVICE_SUCCESS]: destroyDeviceSuccess,
    [EVENT_DESTROY_DEVICE_FAIL]: destroyDeviceFail,
    [EVENT_DEVICE_PUBLIC]: saveDevicePublicInfo,
    [EVENT_DEVICE_PUBLIC_SUCCESS]: saveDevicePublicInfoSuccess,
    [EVENT_DEVICE_PUBLIC_FAIL]: saveDevicePublicInfoFail
}, {
    device: {},
    fetchInprogress: false,
    actionInprogress: false,
    error: undefined,
    models: [],
    modelInfo: {},
    history: {},
    subscriptions: {}
});

function fetchDevice(state) {
    return {
        ...state,
        fetchInprogress: true,
        error: undefined
    };
}

function fetchDeviceModelsSuccess(state, action) {
    return {
        ...state,
        models: action.payload,
        fetchInprogress: false,
        error: undefined
    };
}

function fetchDeviceModelSuccess(state, action) {
    return {
        ...state,
        models: [],
        modelInfo: action.payload,
        fetchInprogress: false,
        error: undefined
    };
}

function fetchDeviceSuccess(state, action) {
    return {
        ...state,
        device: action.payload,
        fetchInprogress: false,
        error: undefined
    };
}

function fetchDeviceFail(state, action) {
    return {
        ...state,
        device: {},
        fetchInprogress: false,
        error: action.payload
    };
}

function fetchDeviceHistory(state) {
    return {
        ...state,
        history: {
            ...state.history,
            isLoading: true
        }
    };
}

function fetchDeviceSubscriptions(state) {
    return {
        ...state,
        subscriptions: {
            ...state.subscriptions,
            isLoading: true
        }
    };
}

function fetchDeviceHistorySuccess(state, action) {
    const { rows: nextRows = [], pageNumber } = action.payload;
    const isFirstFetch = pageNumber === '1';
    const { rows = [] } = isFirstFetch ? {} : state.history;

    return {
        ...state,
        history: {
            ...action.payload,
            rows: rows.concat(nextRows),
            isLoading: false
        }
    };
}

function fetchDeviceSubscriptionsSuccess(state, action) {
    const { rows: nextRows = [], pageNumber } = action.payload;
    const isFirstFetch = pageNumber === '1';
    const { rows = [] } = isFirstFetch ? {} : state.subscriptions;

    return {
        ...state,
        subscriptions: {
            ...action.payload,
            rows: rows.concat(nextRows),
            isLoading: false
        }
    };
}

function clearStore() {
    return {
        device: {},
        models: [],
        modelInfo: {},
        actionInprogress: false,
        fetchInprogress: false,
        error: undefined,
        history: {},
        subscriptions: {}
    };
}

function subscribeToDevice(state, action) {
    const { method, deviceId } = action.payload;

    if (method === 'POST') {
        reachGoal('subscribe', { subscribeDeviceId: deviceId });
    } else if (method === 'DELETE') {
        reachGoal('unsubscribe', { unsubscribeDeviceId: deviceId });
    }

    return {
        ...state,
        actionInprogress: true
    };
}

function subscribeToDeviceSuccess(state) {
    return {
        ...state,
        actionInprogress: false
    };
}

function subscribeToDeviceFail(state) {
    return {
        ...state,
        actionInprogress: false
    };
}

function lockDevice(state) {
    // HYPERCUBE-378: Перенести вызов метрики
    return {
        ...state,
        actionInprogress: true
    };
}

function lockDeviceSuccess(state) {
    // HYPERCUBE-452: [FRONT] Подключить нотификации для различных действий
    return {
        ...state,
        actionInprogress: false
    };
}

function lockDeviceFail(state) {
    // HYPERCUBE-452: [FRONT] Подключить нотификации для различных действий
    return {
        ...state,
        actionInprogress: false
    };
}

function unlockDevice(state) {
    // HYPERCUBE-378: Перенести вызов метрики
    return {
        ...state,
        actionInprogress: true
    };
}

function unlockDeviceSuccess(state) {
    // HYPERCUBE-452: [FRONT] Подключить нотификации для различных действий
    return {
        ...state,
        actionInprogress: false
    };
}

function unlockDeviceFail(state) {
    // HYPERCUBE-452: [FRONT] Подключить нотификации для различных действий
    return {
        ...state,
        actionInprogress: false
    };
}

function toServiceDevice(state) {
    // HYPERCUBE-378: Перенести вызов метрики
    return {
        ...state,
        actionInprogress: true
    };
}

function toServiceDeviceSuccess(state) {
    // HYPERCUBE-452: [FRONT] Подключить нотификации для различных действий
    return {
        ...state,
        actionInprogress: false
    };
}

function toServiceDeviceFail(state) {
    // HYPERCUBE-452: [FRONT] Подключить нотификации для различных действий
    return {
        ...state,
        actionInprogress: false
    };
}

function grabDevice(state) {
    // HYPERCUBE-378: Перенести вызов метрики
    return {
        ...state,
        actionInprogress: true
    };
}

function grabDeviceSuccess(state) {
    // HYPERCUBE-452: [FRONT] Подключить нотификации для различных действий
    return {
        ...state,
        actionInprogress: false
    };
}

function grabDeviceFail(state) {
    // HYPERCUBE-452: [FRONT] Подключить нотификации для различных действий
    return {
        ...state,
        actionInprogress: false
    };
}

function saveDevice(state) {
    // HYPERCUBE-378: Перенести вызов метрики
    return {
        ...state,
        actionInprogress: true
    };
}

function saveDeviceSuccess(state) {
    // HYPERCUBE-452: [FRONT] Подключить нотификации для различных действий
    return {
        ...state,
        actionInprogress: false
    };
}

function saveDeviceFail(state) {
    // HYPERCUBE-452: [FRONT] Подключить нотификации для различных действий
    return {
        ...state,
        actionInprogress: false
    };
}

function destroyDevice(state) {
    return {
        ...state,
        actionInprogress: true,
        error: undefined
    };
}

function destroyDeviceSuccess(state) {
    showSuccess(console.log('destroy-device-success', 'device'));

    return {
        ...state,
        device: {},
        actionInprogress: false,
        error: undefined
    };
}

function destroyDeviceFail(state, action) {
    showTransactionErrorMessage('destroy-device', action.payload);

    return {
        ...state,
        actionInprogress: false,
        error: action.payload
    };
}

function saveDevicePublicInfo(state) {
    return {
        ...state,
        actionInprogress: true,
        error: undefined
    };
}

function saveDevicePublicInfoSuccess(state) {
    return {
        ...state,
        actionInprogress: false,
        error: undefined
    };
}

function saveDevicePublicInfoFail(state, action) {
    return {
        ...state,
        actionInprogress: false,
        error: action.payload
    };
}
