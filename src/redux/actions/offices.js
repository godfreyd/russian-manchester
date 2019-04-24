import { createAction } from 'redux-actions';

export const FETCH_OFFICES = 'FETCH_OFFICES';
export const FETCH_OFFICES_SUCCESS = 'FETCH_OFFICES_SUCCESS';
export const FETCH_OFFICES_FAIL = 'FETCH_OFFICES_FAIL';

export const fetchOffices = createAction(FETCH_OFFICES);
export const fetchOfficesSuccess = createAction(FETCH_OFFICES_SUCCESS);
export const fetchOfficesFail = createAction(FETCH_OFFICES_FAIL);
