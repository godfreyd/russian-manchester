import { createAction } from 'redux-actions';

export const EVENT_USER_INFO = 'EVENT_USER_INFO';
export const EVENT_USER_INFO_SUCCESS = 'EVENT_USER_INFO_SUCCESS';
export const EVENT_USER_INFO_FAIL = 'EVENT_USER_INFO_FAIL';

export const fetchUserInfo = createAction(EVENT_USER_INFO);
export const fetchUserInfoSuccess = createAction(EVENT_USER_INFO_SUCCESS);
export const fetchUserInfoFail = createAction(EVENT_USER_INFO_FAIL);

export const EVENT_USER_HISTORY = 'EVENT_USER_HISTORY';
export const EVENT_USER_HISTORY_SUCCESS = 'EVENT_USER_HISTORY_SUCCESS';
export const EVENT_USER_HISTORY_FAIL = 'EVENT_USER_HISTORY_FAIL';

export const fetchUserHistory = createAction(EVENT_USER_HISTORY);
export const fetchUserHistorySuccess = createAction(EVENT_USER_HISTORY_SUCCESS);
export const fetchUserHistoryFail = createAction(EVENT_USER_HISTORY_FAIL);

export const EVENT_USER_PRODUCTS = 'EVENT_USER_PRODUCTS';
export const EVENT_USER_PRODUCTS_SUCCESS = 'EVENT_USER_PRODUCTS_SUCCESS';
export const EVENT_USER_PRODUCTS_FAIL = 'EVENT_USER_PRODUCTS_FAIL';

export const fetchUserProducts = createAction(EVENT_USER_PRODUCTS);
export const fetchUserProductsSuccess = createAction(EVENT_USER_PRODUCTS_SUCCESS);
export const fetchUserProductsFail = createAction(EVENT_USER_PRODUCTS_FAIL);

export const EVENT_USER_SUBSCRIPTIONS = 'EVENT_USER_SUBSCRIPTIONS';
export const EVENT_USER_SUBSCRIPTIONS_SUCCESS = 'EVENT_USER_SUBSCRIPTIONS_SUCCESS';
export const EVENT_USER_SUBSCRIPTIONS_FAIL = 'EVENT_USER_SUBSCRIPTIONS_FAIL';

export const fetchUserSubscriptions = createAction(EVENT_USER_SUBSCRIPTIONS);
export const fetchUserSubscriptionsSuccess = createAction(EVENT_USER_SUBSCRIPTIONS_SUCCESS);
export const fetchUserSubscriptionsFail = createAction(EVENT_USER_SUBSCRIPTIONS_FAIL);
