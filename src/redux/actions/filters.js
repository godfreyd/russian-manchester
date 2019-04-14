import { createAction } from 'redux-actions';

export const EVENT_FETCH_FILTERS = 'EVENT_FETCH_FILTERS';
export const EVENT_FETCH_FILTERS_SUCCESS = 'EVENT_FETCH_FILTERS_SUCCESS';
export const EVENT_FETCH_FILTERS_FAIL = 'EVENT_FETCH_FILTERS_FAIL';

export const fetchFilters = createAction(EVENT_FETCH_FILTERS);
export const fetchFiltersSuccess = createAction(EVENT_FETCH_FILTERS_SUCCESS);
export const fetchFiltersFail = createAction(EVENT_FETCH_FILTERS_FAIL);

export const EVENT_CHANGE_FILTERS = 'EVENT_CHANGE_FILTERS';
export const changeFilters = createAction(EVENT_CHANGE_FILTERS);
