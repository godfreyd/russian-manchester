import { handleActions } from 'redux-actions';

import {
    EVENT_FETCH_PRODUCTS,
    EVENT_FETCH_PRODUCTS_SUCCESS,
    EVENT_FETCH_PRODUCTS_FAIL,
    EVENT_PRODUCTS_SUGGEST_SUCCESS
} from '../actions/products';

export default handleActions({
    [EVENT_FETCH_PRODUCTS]: fetchProducts,
    [EVENT_FETCH_PRODUCTS_SUCCESS]: fetchProductsSuccess,
    [EVENT_FETCH_PRODUCTS_FAIL]: fetchProductsFail,
    [EVENT_PRODUCTS_SUGGEST_SUCCESS]: fetchProductsSuggestSuccess
}, {
    products: undefined,
    suggest: [],
    inprogress: false,
    error: undefined
});

function fetchProducts(state) {
    return {
        ...state,
        inprogress: true,
        error: undefined
    };
}

function fetchProductsSuccess(state, action) {
    return {
        ...state,
        products: action.payload,
        inprogress: false,
        error: undefined
    };
}

function fetchProductsFail(state, action) {
    return {
        ...state,
        products: [],
        inprogress: false,
        error: action.payload
    };
}

function fetchProductsSuggestSuccess(state, action) {
    return {
        ...state,
        suggest: action.payload
    };
}
