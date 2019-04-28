import { createAction } from 'redux-actions';

export const EVENT_FETCH_MYPRODUCTS = 'EVENT_FETCH_MYPRODUCTS';
export const EVENT_FETCH_MYPRODUCTS_SUCCESS = 'EVENT_FETCH_MYPRODUCTS_SUCCESS';
export const EVENT_FETCH_MYPRODUCTS_FAIL = 'EVENT_FETCH_MYPRODUCTS_FAIL';

export const fetchMyProducts = createAction(EVENT_FETCH_MYPRODUCTS);
export const fetchMyProductsSuccess = createAction(EVENT_FETCH_MYPRODUCTS_SUCCESS);
export const fetchMyProductsFail = createAction(EVENT_FETCH_MYPRODUCTS_FAIL);
