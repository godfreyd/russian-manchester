import { createAction } from 'redux-actions';

export const EVENT_FETCH_PRODUCTS = 'EVENT_FETCH_PRODUCTS';
export const EVENT_FETCH_PRODUCTS_SUCCESS = 'EVENT_FETCH_PRODUCTS_SUCCESS';
export const EVENT_FETCH_PRODUCTS_FAIL = 'EVENT_FETCH_PRODUCTS_FAIL';

export const fetchProducts = createAction(EVENT_FETCH_PRODUCTS);
export const fetchProductsSuccess = createAction(EVENT_FETCH_PRODUCTS_SUCCESS);
export const fetchProductsFail = createAction(EVENT_FETCH_PRODUCTS_FAIL);

export const EVENT_PRODUCTS_SUGGEST = 'EVENT_PRODUCTS_SUGGEST';
export const EVENT_PRODUCTS_SUGGEST_SUCCESS = 'EVENT_PRODUCTS_SUGGEST_SUCCESS';
export const EVENT_PRODUCTS_SUGGEST_FAIL = 'EVENT_PRODUCTS_SUGGEST_FAIL';

export const fetchProductsSuggest = createAction(EVENT_PRODUCTS_SUGGEST);
export const fetchProductsSuggestSuccess = createAction(EVENT_PRODUCTS_SUGGEST_SUCCESS);
export const fetchProductsSuggestFail = createAction(EVENT_PRODUCTS_SUGGEST_FAIL);
