import { createAction } from 'redux-actions';

export const EVENT_FETCH_DEVICE = 'EVENT_FETCH_DEVICE';
export const EVENT_FETCH_DEVICE_SUCCESS = 'EVENT_FETCH_DEVICE_SUCCESS';
export const EVENT_FETCH_DEVICE_FAIL = 'EVENT_FETCH_DEVICE_FAIL';

export const fetchDevice = createAction(EVENT_FETCH_DEVICE);
export const fetchDeviceSuccess = createAction(EVENT_FETCH_DEVICE_SUCCESS);
export const fetchDeviceFail = createAction(EVENT_FETCH_DEVICE_FAIL);

export const EVENT_DEVICE_MODEL = 'EVENT_DEVICE_MODEL';
export const EVENT_DEVICE_MODEL_SUCCESS = 'EVENT_DEVICE_MODEL_SUCCESS';
export const EVENT_DEVICE_MODEL_FAIL = 'EVENT_DEVICE_MODEL_FAIL';

export const fetchDeviceModel = createAction(EVENT_DEVICE_MODEL);
export const fetchDeviceModelSuccess = createAction(EVENT_DEVICE_MODEL_SUCCESS);
export const fetchDeviceModelFail = createAction(EVENT_DEVICE_MODEL_FAIL);

export const EVENT_DEVICE_MODELS = 'EVENT_DEVICE_MODELS';
export const EVENT_DEVICE_MODELS_SUCCESS = 'EVENT_DEVICE_MODELS_SUCCESS';
export const EVENT_DEVICE_MODELS_FAIL = 'EVENT_DEVICE_MODELS_FAIL';

export const fetchDeviceModels = createAction(EVENT_DEVICE_MODELS);
export const fetchDeviceModelsSuccess = createAction(EVENT_DEVICE_MODELS_SUCCESS);
export const fetchDeviceModelsFail = createAction(EVENT_DEVICE_MODELS_FAIL);

export const EVENT_DEVICE_HISTORY = 'EVENT_DEVICE_HISTORY';
export const EVENT_DEVICE_HISTORY_SUCCESS = 'EVENT_DEVICE_HISTORY_SUCCESS';
export const EVENT_DEVICE_HISTORY_FAIL = 'EVENT_DEVICE_HISTORY_FAIL';

export const fetchDeviceHistory = createAction(EVENT_DEVICE_HISTORY);
export const fetchDeviceHistorySuccess = createAction(EVENT_DEVICE_HISTORY_SUCCESS);
export const fetchDeviceHistoryFail = createAction(EVENT_DEVICE_HISTORY_FAIL);

export const EVENT_SUBSCRIBE_DEVICE = 'EVENT_SUBSCRIBE_DEVICE';
export const EVENT_SUBSCRIBE_DEVICE_SUCCESS = 'EVENT_SUBSCRIBE_DEVICE_SUCCESS';
export const EVENT_SUBSCRIBE_DEVICE_FAIL = 'EVENT_SUBSCRIBE_DEVICE_FAIL';

export const subscribeToDevice = createAction(EVENT_SUBSCRIBE_DEVICE);
export const subscribeToDeviceSuccess = createAction(EVENT_SUBSCRIBE_DEVICE_SUCCESS);
export const subscribeToDeviceFail = createAction(EVENT_SUBSCRIBE_DEVICE_FAIL);

export const EVENT_LOCK_DEVICE = 'EVENT_LOCK_DEVICE';
export const EVENT_LOCK_DEVICE_SUCCESS = 'EVENT_LOCK_DEVICE_SUCCESS';
export const EVENT_LOCK_DEVICE_FAIL = 'EVENT_LOCK_DEVICE_FAIL';

export const lockDevice = createAction(EVENT_LOCK_DEVICE);
export const lockDeviceSuccess = createAction(EVENT_LOCK_DEVICE_SUCCESS);
export const lockDeviceFail = createAction(EVENT_LOCK_DEVICE_FAIL);

export const EVENT_UNLOCK_DEVICE = 'EVENT_UNLOCK_DEVICE';
export const EVENT_UNLOCK_DEVICE_SUCCESS = 'EVENT_UNLOCK_DEVICE_SUCCESS';
export const EVENT_UNLOCK_DEVICE_FAIL = 'EVENT_UNLOCK_DEVICE_FAIL';

export const unlockDevice = createAction(EVENT_UNLOCK_DEVICE);
export const unlockDeviceSuccess = createAction(EVENT_UNLOCK_DEVICE_SUCCESS);
export const unlockDeviceFail = createAction(EVENT_UNLOCK_DEVICE_FAIL);

export const EVENT_GRAB_DEVICE = 'EVENT_GRAB_DEVICE';
export const EVENT_GRAB_DEVICE_SUCCESS = 'EVENT_GRAB_DEVICE_SUCCESS';
export const EVENT_GRAB_DEVICE_FAIL = 'EVENT_GRAB_DEVICE_FAIL';

export const grabDevice = createAction(EVENT_GRAB_DEVICE);
export const grabDeviceSuccess = createAction(EVENT_GRAB_DEVICE_SUCCESS);
export const grabDeviceFail = createAction(EVENT_GRAB_DEVICE_FAIL);

export const EVENT_TO_SERVICE_DEVICE = 'EVENT_TO_SERVICE_DEVICE';
export const EVENT_TO_SERVICE_DEVICE_SUCCESS = 'EVENT_TO_SERVICE_DEVICE_SUCCESS';
export const EVENT_TO_SERVICE_DEVICE_FAIL = 'EVENT_TO_SERVICE_DEVICE_FAIL';

export const toServiceDevice = createAction(EVENT_TO_SERVICE_DEVICE);
export const toServiceDeviceSuccess = createAction(EVENT_TO_SERVICE_DEVICE_SUCCESS);
export const toServiceDeviceFail = createAction(EVENT_TO_SERVICE_DEVICE_FAIL);

export const EVENT_SAVE_DEVICE = 'EVENT_SAVE_DEVICE';
export const EVENT_SAVE_DEVICE_SUCCESS = 'EVENT_SAVE_DEVICE_SUCCESS';
export const EVENT_SAVE_DEVICE_FAIL = 'EVENT_SAVE_DEVICE_FAIL';

export const saveDevice = createAction(EVENT_SAVE_DEVICE);
export const saveDeviceSuccess = createAction(EVENT_SAVE_DEVICE_SUCCESS);
export const saveDeviceFail = createAction(EVENT_SAVE_DEVICE_FAIL);

export const EVENT_DEVICE_SUBSCRIPTIONS = 'EVENT_DEVICE_SUBSCRIPTIONS';
export const EVENT_DEVICE_SUBSCRIPTIONS_SUCCESS = 'EVENT_DEVICE_SUBSCRIPTIONS_SUCCESS';
export const EVENT_DEVICE_SUBSCRIPTIONS_FAIL = 'EVENT_DEVICE_SUBSCRIPTIONS_FAIL';

export const fetchDeviceSubscriptions = createAction(EVENT_DEVICE_SUBSCRIPTIONS);
export const fetchDeviceSubscriptionsSuccess = createAction(EVENT_DEVICE_SUBSCRIPTIONS_SUCCESS);
export const fetchDeviceSubscriptionsFail = createAction(EVENT_DEVICE_SUBSCRIPTIONS_FAIL);

export const EVENT_DEVICE_CLEAR = 'EVENT_DEVICE_CLEAR';
export const clearDeviceStore = createAction(EVENT_DEVICE_CLEAR);

export const EVENT_DESTROY_DEVICE = 'EVENT_DESTROY_DEVICE';
export const EVENT_DESTROY_DEVICE_SUCCESS = 'EVENT_DESTROY_DEVICE_SUCCESS';
export const EVENT_DESTROY_DEVICE_FAIL = 'EVENT_DESTROY_DEVICE_FAIL';

export const destroyDevice = createAction(EVENT_DESTROY_DEVICE);
export const destroyDeviceSuccess = createAction(EVENT_DESTROY_DEVICE_SUCCESS);
export const destroyDeviceFail = createAction(EVENT_DESTROY_DEVICE_FAIL);

export const EVENT_DEVICE_PUBLIC = 'EVENT_DEVICE_PUBLIC';
export const EVENT_DEVICE_PUBLIC_SUCCESS = 'EVENT_DEVICE_PUBLIC_SUCCESS';
export const EVENT_DEVICE_PUBLIC_FAIL = 'EVENT_DEVICE_PUBLIC_FAIL';

export const saveDevicePublicInfo = createAction(EVENT_DEVICE_PUBLIC);
export const saveDevicePublicInfoSuccess = createAction(EVENT_DEVICE_PUBLIC_SUCCESS);
export const saveDevicePublicInfoFail = createAction(EVENT_DEVICE_PUBLIC_FAIL);
