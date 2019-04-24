import { createAction } from 'redux-actions';

export const EVENT_FETCH_PRODUCT = 'EVENT_FETCH_PRODUCT';
export const EVENT_FETCH_PRODUCT_SUCCESS = 'EVENT_FETCH_PRODUCT_SUCCESS';
export const EVENT_FETCH_PRODUCT_FAIL = 'EVENT_FETCH_PRODUCT_FAIL';

export const fetchProduct = createAction(EVENT_FETCH_PRODUCT);
export const fetchProductSuccess = createAction(EVENT_FETCH_PRODUCT_SUCCESS);
export const fetchProductFail = createAction(EVENT_FETCH_PRODUCT_FAIL);

export const EVENT_PRODUCT_MODEL = 'EVENT_PRODUCT_MODEL';
export const EVENT_PRODUCT_MODEL_SUCCESS = 'EVENT_PRODUCT_MODEL_SUCCESS';
export const EVENT_PRODUCT_MODEL_FAIL = 'EVENT_PRODUCT_MODEL_FAIL';

export const fetchProductModel = createAction(EVENT_PRODUCT_MODEL);
export const fetchProductModelSuccess = createAction(EVENT_PRODUCT_MODEL_SUCCESS);
export const fetchProductModelFail = createAction(EVENT_PRODUCT_MODEL_FAIL);

export const EVENT_PRODUCT_MODELS = 'EVENT_PRODUCT_MODELS';
export const EVENT_PRODUCT_MODELS_SUCCESS = 'EVENT_PRODUCT_MODELS_SUCCESS';
export const EVENT_PRODUCT_MODELS_FAIL = 'EVENT_PRODUCT_MODELS_FAIL';

export const fetchProductModels = createAction(EVENT_PRODUCT_MODELS);
export const fetchProductModelsSuccess = createAction(EVENT_PRODUCT_MODELS_SUCCESS);
export const fetchProductModelsFail = createAction(EVENT_PRODUCT_MODELS_FAIL);

export const EVENT_PRODUCT_HISTORY = 'EVENT_PRODUCT_HISTORY';
export const EVENT_PRODUCT_HISTORY_SUCCESS = 'EVENT_PRODUCT_HISTORY_SUCCESS';
export const EVENT_PRODUCT_HISTORY_FAIL = 'EVENT_PRODUCT_HISTORY_FAIL';

export const fetchProductHistory = createAction(EVENT_PRODUCT_HISTORY);
export const fetchProductHistorySuccess = createAction(EVENT_PRODUCT_HISTORY_SUCCESS);
export const fetchProductHistoryFail = createAction(EVENT_PRODUCT_HISTORY_FAIL);

export const EVENT_SUBSCRIBE_PRODUCT = 'EVENT_SUBSCRIBE_PRODUCT';
export const EVENT_SUBSCRIBE_PRODUCT_SUCCESS = 'EVENT_SUBSCRIBE_PRODUCT_SUCCESS';
export const EVENT_SUBSCRIBE_PRODUCT_FAIL = 'EVENT_SUBSCRIBE_PRODUCT_FAIL';

export const subscribeToProduct = createAction(EVENT_SUBSCRIBE_PRODUCT);
export const subscribeToProductSuccess = createAction(EVENT_SUBSCRIBE_PRODUCT_SUCCESS);
export const subscribeToProductFail = createAction(EVENT_SUBSCRIBE_PRODUCT_FAIL);

export const EVENT_LOCK_PRODUCT = 'EVENT_LOCK_PRODUCT';
export const EVENT_LOCK_PRODUCT_SUCCESS = 'EVENT_LOCK_PRODUCT_SUCCESS';
export const EVENT_LOCK_PRODUCT_FAIL = 'EVENT_LOCK_PRODUCT_FAIL';

export const lockProduct = createAction(EVENT_LOCK_PRODUCT);
export const lockProductSuccess = createAction(EVENT_LOCK_PRODUCT_SUCCESS);
export const lockProductFail = createAction(EVENT_LOCK_PRODUCT_FAIL);

export const EVENT_UNLOCK_PRODUCT = 'EVENT_UNLOCK_PRODUCT';
export const EVENT_UNLOCK_PRODUCT_SUCCESS = 'EVENT_UNLOCK_PRODUCT_SUCCESS';
export const EVENT_UNLOCK_PRODUCT_FAIL = 'EVENT_UNLOCK_PRODUCT_FAIL';

export const unlockProduct = createAction(EVENT_UNLOCK_PRODUCT);
export const unlockProductSuccess = createAction(EVENT_UNLOCK_PRODUCT_SUCCESS);
export const unlockProductFail = createAction(EVENT_UNLOCK_PRODUCT_FAIL);

export const EVENT_GRAB_PRODUCT = 'EVENT_GRAB_PRODUCT';
export const EVENT_GRAB_PRODUCT_SUCCESS = 'EVENT_GRAB_PRODUCT_SUCCESS';
export const EVENT_GRAB_PRODUCT_FAIL = 'EVENT_GRAB_PRODUCT_FAIL';

export const grabProduct = createAction(EVENT_GRAB_PRODUCT);
export const grabProductSuccess = createAction(EVENT_GRAB_PRODUCT_SUCCESS);
export const grabProductFail = createAction(EVENT_GRAB_PRODUCT_FAIL);

export const EVENT_TO_SERVICE_PRODUCT = 'EVENT_TO_SERVICE_PRODUCT';
export const EVENT_TO_SERVICE_PRODUCT_SUCCESS = 'EVENT_TO_SERVICE_PRODUCT_SUCCESS';
export const EVENT_TO_SERVICE_PRODUCT_FAIL = 'EVENT_TO_SERVICE_PRODUCT_FAIL';

export const toServiceProduct = createAction(EVENT_TO_SERVICE_PRODUCT);
export const toServiceProductSuccess = createAction(EVENT_TO_SERVICE_PRODUCT_SUCCESS);
export const toServiceProductFail = createAction(EVENT_TO_SERVICE_PRODUCT_FAIL);

export const EVENT_SAVE_PRODUCT = 'EVENT_SAVE_PRODUCT';
export const EVENT_SAVE_PRODUCT_SUCCESS = 'EVENT_SAVE_PRODUCT_SUCCESS';
export const EVENT_SAVE_PRODUCT_FAIL = 'EVENT_SAVE_PRODUCT_FAIL';

export const saveProduct = createAction(EVENT_SAVE_PRODUCT);
export const saveProductSuccess = createAction(EVENT_SAVE_PRODUCT_SUCCESS);
export const saveProductFail = createAction(EVENT_SAVE_PRODUCT_FAIL);

export const EVENT_PRODUCT_SUBSCRIPTIONS = 'EVENT_PRODUCT_SUBSCRIPTIONS';
export const EVENT_PRODUCT_SUBSCRIPTIONS_SUCCESS = 'EVENT_PRODUCT_SUBSCRIPTIONS_SUCCESS';
export const EVENT_PRODUCT_SUBSCRIPTIONS_FAIL = 'EVENT_PRODUCT_SUBSCRIPTIONS_FAIL';

export const fetchProductSubscriptions = createAction(EVENT_PRODUCT_SUBSCRIPTIONS);
export const fetchProductSubscriptionsSuccess = createAction(EVENT_PRODUCT_SUBSCRIPTIONS_SUCCESS);
export const fetchProductSubscriptionsFail = createAction(EVENT_PRODUCT_SUBSCRIPTIONS_FAIL);

export const EVENT_PRODUCT_CLEAR = 'EVENT_PRODUCT_CLEAR';
export const clearProductStore = createAction(EVENT_PRODUCT_CLEAR);

export const EVENT_DESTROY_PRODUCT = 'EVENT_DESTROY_PRODUCT';
export const EVENT_DESTROY_PRODUCT_SUCCESS = 'EVENT_DESTROY_PRODUCT_SUCCESS';
export const EVENT_DESTROY_PRODUCT_FAIL = 'EVENT_DESTROY_PRODUCT_FAIL';

export const destroyProduct = createAction(EVENT_DESTROY_PRODUCT);
export const destroyProductSuccess = createAction(EVENT_DESTROY_PRODUCT_SUCCESS);
export const destroyProductFail = createAction(EVENT_DESTROY_PRODUCT_FAIL);

export const EVENT_PRODUCT_PUBLIC = 'EVENT_PRODUCT_PUBLIC';
export const EVENT_PRODUCT_PUBLIC_SUCCESS = 'EVENT_PRODUCT_PUBLIC_SUCCESS';
export const EVENT_PRODUCT_PUBLIC_FAIL = 'EVENT_PRODUCT_PUBLIC_FAIL';

export const saveProductPublicInfo = createAction(EVENT_PRODUCT_PUBLIC);
export const saveProductPublicInfoSuccess = createAction(EVENT_PRODUCT_PUBLIC_SUCCESS);
export const saveProductPublicInfoFail = createAction(EVENT_PRODUCT_PUBLIC_FAIL);
