import { createAction } from 'redux-actions';

export const EVENT_FETCH_MYDEVICES = 'EVENT_FETCH_MYDEVICES';
export const EVENT_FETCH_MYDEVICES_SUCCESS = 'EVENT_FETCH_MYDEVICES_SUCCESS';
export const EVENT_FETCH_MYDEVICES_FAIL = 'EVENT_FETCH_MYDEVICES_FAIL';

export const fetchMyDevices = createAction(EVENT_FETCH_MYDEVICES);
export const fetchMyDevicesSuccess = createAction(EVENT_FETCH_MYDEVICES_SUCCESS);
export const fetchMyDevicesFail = createAction(EVENT_FETCH_MYDEVICES_FAIL);
