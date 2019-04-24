import { createAction } from 'redux-actions';

export const EVENT_EDIT_CUBE = 'EVENT_EDIT_CUBE';
export const EVENT_EDIT_CUBE_SUCCESS = 'EVENT_EDIT_CUBE_SUCCESS';
export const EVENT_EDIT_CUBE_FAIL = 'EVENT_EDIT_CUBE_FAIL';

export const editCube = createAction(EVENT_EDIT_CUBE);
export const editCubeSuccess = createAction(EVENT_EDIT_CUBE_SUCCESS);
export const editCubeFail = createAction(EVENT_EDIT_CUBE_FAIL);

export const EVENT_CUBE_HISTORY = 'EVENT_CUBE_HISTORY';
export const EVENT_CUBE_HISTORY_SUCCESS = 'EVENT_CUBE_HISTORY_SUCCESS';
export const EVENT_CUBE_HISTORY_FAIL = 'EVENT_CUBE_HISTORY_FAIL';

export const fetchCubeHistory = createAction(EVENT_CUBE_HISTORY);
export const fetchCubeHistorySuccess = createAction(EVENT_CUBE_HISTORY_SUCCESS);
export const fetchCubeHistoryFail = createAction(EVENT_CUBE_HISTORY_FAIL);

export const FETCH_CUBE_LAST_EVENTS = 'FETCH_CUBE_LAST_EVENTS';
export const FETCH_CUBE_LAST_EVENTS_SUCCESS = 'FETCH_CUBE_LAST_EVENTS_SUCCESS';
export const FETCH_CUBE_LAST_EVENTS_FAIL = 'FETCH_CUBE_LAST_EVENTS_FAIL';

export const fetchLastCubeEvents = createAction(FETCH_CUBE_LAST_EVENTS);
export const fetchLastCubeEventsSuccess = createAction(FETCH_CUBE_LAST_EVENTS_SUCCESS);
export const fetchLastCubeEventsFail = createAction(FETCH_CUBE_LAST_EVENTS_FAIL);

export const EVENT_SAVE_CUBE = 'EVENT_SAVE_CUBE';
export const EVENT_SAVE_CUBE_SUCCESS = 'EVENT_SAVE_CUBE_SUCCESS';
export const EVENT_SAVE_CUBE_FAIL = 'EVENT_SAVE_CUBE_FAIL';

export const saveCube = createAction(EVENT_SAVE_CUBE);
export const saveCubeSuccess = createAction(EVENT_SAVE_CUBE_SUCCESS);
export const saveCubeFail = createAction(EVENT_SAVE_CUBE_FAIL);
