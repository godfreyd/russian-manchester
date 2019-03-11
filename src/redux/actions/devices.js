import { createAction } from 'redux-actions';

export const EVENT_FETCH_DEVICES = 'EVENT_FETCH_DEVICES';
export const EVENT_FETCH_DEVICES_SUCCESS = 'EVENT_FETCH_DEVICES_SUCCESS';
export const EVENT_FETCH_DEVICES_FAIL = 'EVENT_FETCH_DEVICES_FAIL';

export const fetchDevices = createAction(EVENT_FETCH_DEVICES);
export const fetchDevicesSuccess = createAction(EVENT_FETCH_DEVICES_SUCCESS);
export const fetchDevicesFail = createAction(EVENT_FETCH_DEVICES_FAIL);

export const EVENT_DEVICES_SUGGEST = 'EVENT_DEVICES_SUGGEST';
export const EVENT_DEVICES_SUGGEST_SUCCESS = 'EVENT_DEVICES_SUGGEST_SUCCESS';
export const EVENT_DEVICES_SUGGEST_FAIL = 'EVENT_DEVICES_SUGGEST_FAIL';

export const fetchDevicesSuggest = createAction(EVENT_DEVICES_SUGGEST);
export const fetchDevicesSuggestSuccess = createAction(EVENT_DEVICES_SUGGEST_SUCCESS);
export const fetchDevicesSuggestFail = createAction(EVENT_DEVICES_SUGGEST_FAIL);
