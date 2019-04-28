import { handleActions } from 'redux-actions';

import {
    EVENT_USER_INFO,
    EVENT_USER_INFO_SUCCESS,
    EVENT_USER_INFO_FAIL,
    EVENT_USER_PRODUCTS,
    EVENT_USER_PRODUCTS_SUCCESS,
    EVENT_USER_HISTORY,
    EVENT_USER_HISTORY_SUCCESS,
    EVENT_USER_SUBSCRIPTIONS_SUCCESS
} from '../actions/user';

export default handleActions({
    [EVENT_USER_INFO]: fetchUserInfo,
    [EVENT_USER_INFO_SUCCESS]: fetchUserInfoSuccess,
    [EVENT_USER_INFO_FAIL]: fetchUserInfoFail,
    [EVENT_USER_HISTORY]: fetchUserHistory,
    [EVENT_USER_HISTORY_SUCCESS]: fetchUserHistorySuccess,
    [EVENT_USER_PRODUCTS]: fetchUserProducts,
    [EVENT_USER_PRODUCTS_SUCCESS]: fetchUserProductsSuccess,
    [EVENT_USER_SUBSCRIPTIONS_SUCCESS]: fetchUserSubscriptionsSuccess
}, {
    info: {},
    inprogress: false,
    history: {},
    subscriptions: [],
    error: undefined
});

function fetchUserInfo(state) {
    return {
        ...state,
        inprogress: true,
        error: undefined
    };
}

function fetchUserProducts(state) {
    return {
        ...state,
        products: []
    };
}

function fetchUserInfoSuccess(state, action) {
    return {
        ...state,
        info: action.payload,
        inprogress: false
    };
}

function fetchUserInfoFail(state, action) {
    return {
        ...state,
        info: {},
        inprogress: false,
        error: action.payload
    };
}

function fetchUserProductsSuccess(state, action) {
    return {
        ...state,
        products: action.payload
    };
}

function fetchUserHistory(state) {
    return {
        ...state,
        history: {
            ...state.history,
            isLoading: true
        }
    };
}

function fetchUserHistorySuccess(state, action) {
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

function fetchUserSubscriptionsSuccess(state, action) {
    return {
        ...state,
        subscriptions: action.payload
    };
}
