import { createAction } from 'redux-actions';

export const EVENT_SAVE_PRODUCT = 'EVENT_SAVE_PRODUCT';
export const EVENT_SAVE_PRODUCT_SUCCESS = 'EVENT_SAVE_PRODUCT_SUCCESS';
export const EVENT_SAVE_PRODUCT_FAIL = 'EVENT_SAVE_PRODUCT_FAIL';

export const saveProduct = createAction(EVENT_SAVE_PRODUCT);
export const saveProductSuccess = createAction(EVENT_SAVE_PRODUCT_SUCCESS);
export const saveProductFail = createAction(EVENT_SAVE_PRODUCT_FAIL);
