import { handleActions } from 'redux-actions';

import { reachGoal } from '../../lib/metrika';
import { showTransactionErrorMessage, showSuccess } from '../../lib/notification';

import i18n from '../../components/i18n';

import {
    EVENT_FETCH_PRODUCT,
    EVENT_FETCH_PRODUCT_SUCCESS,
    EVENT_FETCH_PRODUCT_FAIL,
    EVENT_PRODUCT_MODELS_SUCCESS,
    EVENT_PRODUCT_MODEL_SUCCESS,
    EVENT_PRODUCT_HISTORY,
    EVENT_PRODUCT_HISTORY_SUCCESS,
    EVENT_PRODUCT_CLEAR,
    EVENT_SUBSCRIBE_PRODUCT,
    EVENT_SUBSCRIBE_PRODUCT_SUCCESS,
    EVENT_SUBSCRIBE_PRODUCT_FAIL,
    EVENT_PRODUCT_SUBSCRIPTIONS,
    EVENT_PRODUCT_SUBSCRIPTIONS_SUCCESS,
    EVENT_LOCK_PRODUCT,
    EVENT_LOCK_PRODUCT_SUCCESS,
    EVENT_LOCK_PRODUCT_FAIL,
    EVENT_UNLOCK_PRODUCT,
    EVENT_UNLOCK_PRODUCT_SUCCESS,
    EVENT_UNLOCK_PRODUCT_FAIL,
    EVENT_GRAB_PRODUCT,
    EVENT_GRAB_PRODUCT_SUCCESS,
    EVENT_GRAB_PRODUCT_FAIL,
    EVENT_TO_SERVICE_PRODUCT,
    EVENT_TO_SERVICE_PRODUCT_SUCCESS,
    EVENT_TO_SERVICE_PRODUCT_FAIL,
    EVENT_SAVE_PRODUCT,
    EVENT_SAVE_PRODUCT_SUCCESS,
    EVENT_SAVE_PRODUCT_FAIL,
    EVENT_DESTROY_PRODUCT,
    EVENT_DESTROY_PRODUCT_FAIL,
    EVENT_DESTROY_PRODUCT_SUCCESS,
    EVENT_PRODUCT_PUBLIC,
    EVENT_PRODUCT_PUBLIC_SUCCESS,
    EVENT_PRODUCT_PUBLIC_FAIL
} from '../actions/product';

export default handleActions({
    [EVENT_FETCH_PRODUCT]: fetchProduct,
    [EVENT_FETCH_PRODUCT_SUCCESS]: fetchProductSuccess,
    [EVENT_FETCH_PRODUCT_FAIL]: fetchProductFail,
    [EVENT_PRODUCT_MODELS_SUCCESS]: fetchProductModelsSuccess,
    [EVENT_PRODUCT_MODEL_SUCCESS]: fetchProductModelSuccess,
    [EVENT_PRODUCT_HISTORY]: fetchProductHistory,
    [EVENT_PRODUCT_HISTORY_SUCCESS]: fetchProductHistorySuccess,
    [EVENT_PRODUCT_CLEAR]: clearStore,
    [EVENT_SUBSCRIBE_PRODUCT]: subscribeToProduct,
    [EVENT_SUBSCRIBE_PRODUCT_SUCCESS]: subscribeToProductSuccess,
    [EVENT_SUBSCRIBE_PRODUCT_FAIL]: subscribeToProductFail,
    [EVENT_PRODUCT_SUBSCRIPTIONS]: fetchProductSubscriptions,
    [EVENT_PRODUCT_SUBSCRIPTIONS_SUCCESS]: fetchProductSubscriptionsSuccess,
    [EVENT_LOCK_PRODUCT]: lockProduct,
    [EVENT_LOCK_PRODUCT_SUCCESS]: lockProductSuccess,
    [EVENT_LOCK_PRODUCT_FAIL]: lockProductFail,
    [EVENT_UNLOCK_PRODUCT]: unlockProduct,
    [EVENT_UNLOCK_PRODUCT_SUCCESS]: unlockProductSuccess,
    [EVENT_UNLOCK_PRODUCT_FAIL]: unlockProductFail,
    [EVENT_GRAB_PRODUCT]: grabProduct,
    [EVENT_GRAB_PRODUCT_SUCCESS]: grabProductSuccess,
    [EVENT_GRAB_PRODUCT_FAIL]: grabProductFail,
    [EVENT_TO_SERVICE_PRODUCT]: toServiceProduct,
    [EVENT_TO_SERVICE_PRODUCT_SUCCESS]: toServiceProductSuccess,
    [EVENT_TO_SERVICE_PRODUCT_FAIL]: toServiceProductFail,
    [EVENT_SAVE_PRODUCT]: saveProduct,
    [EVENT_SAVE_PRODUCT_SUCCESS]: saveProductSuccess,
    [EVENT_SAVE_PRODUCT_FAIL]: saveProductFail,
    [EVENT_DESTROY_PRODUCT]: destroyProduct,
    [EVENT_DESTROY_PRODUCT_SUCCESS]: destroyProductSuccess,
    [EVENT_DESTROY_PRODUCT_FAIL]: destroyProductFail,
    [EVENT_PRODUCT_PUBLIC]: saveProductPublicInfo,
    [EVENT_PRODUCT_PUBLIC_SUCCESS]: saveProductPublicInfoSuccess,
    [EVENT_PRODUCT_PUBLIC_FAIL]: saveProductPublicInfoFail
}, {
    product: {},
    fetchInprogress: false,
    actionInprogress: false,
    error: undefined,
    models: [],
    modelInfo: {},
    history: {},
    subscriptions: {}
});

function fetchProduct(state) {
    return {
        ...state,
        fetchInprogress: true,
        error: undefined
    };
}

function fetchProductModelsSuccess(state, action) {
    return {
        ...state,
        models: action.payload,
        fetchInprogress: false,
        error: undefined
    };
}

function fetchProductModelSuccess(state, action) {
    return {
        ...state,
        models: [],
        modelInfo: action.payload,
        fetchInprogress: false,
        error: undefined
    };
}

function fetchProductSuccess(state, action) {
    return {
        ...state,
        product: action.payload,
        fetchInprogress: false,
        error: undefined
    };
}

function fetchProductFail(state, action) {
    return {
        ...state,
        product: {},
        fetchInprogress: false,
        error: action.payload
    };
}

function fetchProductHistory(state) {
    return {
        ...state,
        history: {
            ...state.history,
            isLoading: true
        }
    };
}

function fetchProductSubscriptions(state) {
    return {
        ...state,
        subscriptions: {
            ...state.subscriptions,
            isLoading: true
        }
    };
}

function fetchProductHistorySuccess(state, action) {
    const { rows: nextRows = [], pageNumber } = action.payload;
    const isFirstFetch = pageNumber === '1';
    const { rows = [] } = isFirstFetch ? {} : state.history;

    return {
        ...state,
        history: {
            ...action.payload,
            rows: rows.concat(nextRows),
            isLoading: false
        }
    };
}

function fetchProductSubscriptionsSuccess(state, action) {
    const { rows: nextRows = [], pageNumber } = action.payload;
    const isFirstFetch = pageNumber === '1';
    const { rows = [] } = isFirstFetch ? {} : state.subscriptions;

    return {
        ...state,
        subscriptions: {
            ...action.payload,
            rows: rows.concat(nextRows),
            isLoading: false
        }
    };
}

function clearStore() {
    return {
        product: {},
        models: [],
        modelInfo: {},
        actionInprogress: false,
        fetchInprogress: false,
        error: undefined,
        history: {},
        subscriptions: {}
    };
}

function subscribeToProduct(state, action) {
    const { method, productId } = action.payload;

    if (method === 'POST') {
        reachGoal('subscribe', { subscribeProductId: productId });
    } else if (method === 'DELETE') {
        reachGoal('unsubscribe', { unsubscribeProductId: productId });
    }

    return {
        ...state,
        actionInprogress: true
    };
}

function subscribeToProductSuccess(state) {
    return {
        ...state,
        actionInprogress: false
    };
}

function subscribeToProductFail(state) {
    return {
        ...state,
        actionInprogress: false
    };
}

function lockProduct(state) {
    // HYPERCUBE-378: Перенести вызов метрики
    return {
        ...state,
        actionInprogress: true
    };
}

function lockProductSuccess(state) {
    // HYPERCUBE-452: [FRONT] Подключить нотификации для различных действий
    return {
        ...state,
        actionInprogress: false
    };
}

function lockProductFail(state) {
    // HYPERCUBE-452: [FRONT] Подключить нотификации для различных действий
    return {
        ...state,
        actionInprogress: false
    };
}

function unlockProduct(state) {
    // HYPERCUBE-378: Перенести вызов метрики
    return {
        ...state,
        actionInprogress: true
    };
}

function unlockProductSuccess(state) {
    // HYPERCUBE-452: [FRONT] Подключить нотификации для различных действий
    return {
        ...state,
        actionInprogress: false
    };
}

function unlockProductFail(state) {
    // HYPERCUBE-452: [FRONT] Подключить нотификации для различных действий
    return {
        ...state,
        actionInprogress: false
    };
}

function toServiceProduct(state) {
    // HYPERCUBE-378: Перенести вызов метрики
    return {
        ...state,
        actionInprogress: true
    };
}

function toServiceProductSuccess(state) {
    // HYPERCUBE-452: [FRONT] Подключить нотификации для различных действий
    return {
        ...state,
        actionInprogress: false
    };
}

function toServiceProductFail(state) {
    // HYPERCUBE-452: [FRONT] Подключить нотификации для различных действий
    return {
        ...state,
        actionInprogress: false
    };
}

function grabProduct(state) {
    // HYPERCUBE-378: Перенести вызов метрики
    return {
        ...state,
        actionInprogress: true
    };
}

function grabProductSuccess(state) {
    // HYPERCUBE-452: [FRONT] Подключить нотификации для различных действий
    return {
        ...state,
        actionInprogress: false
    };
}

function grabProductFail(state) {
    // HYPERCUBE-452: [FRONT] Подключить нотификации для различных действий
    return {
        ...state,
        actionInprogress: false
    };
}

function saveProduct(state) {
    // HYPERCUBE-378: Перенести вызов метрики
    return {
        ...state,
        actionInprogress: true
    };
}

function saveProductSuccess(state) {
    // HYPERCUBE-452: [FRONT] Подключить нотификации для различных действий
    return {
        ...state,
        actionInprogress: false
    };
}

function saveProductFail(state) {
    // HYPERCUBE-452: [FRONT] Подключить нотификации для различных действий
    return {
        ...state,
        actionInprogress: false
    };
}

function destroyProduct(state) {
    return {
        ...state,
        actionInprogress: true,
        error: undefined
    };
}

function destroyProductSuccess(state) {
    showSuccess(i18n('destroy-product-success', 'product'));

    return {
        ...state,
        product: {},
        actionInprogress: false,
        error: undefined
    };
}

function destroyProductFail(state, action) {
    showTransactionErrorMessage('destroy-product', action.payload);

    return {
        ...state,
        actionInprogress: false,
        error: action.payload
    };
}

function saveProductPublicInfo(state) {
    return {
        ...state,
        actionInprogress: true,
        error: undefined
    };
}

function saveProductPublicInfoSuccess(state) {
    return {
        ...state,
        actionInprogress: false,
        error: undefined
    };
}

function saveProductPublicInfoFail(state, action) {
    return {
        ...state,
        actionInprogress: false,
        error: action.payload
    };
}
