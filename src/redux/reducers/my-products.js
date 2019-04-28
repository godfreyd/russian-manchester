import { handleActions } from 'redux-actions';

import {
    EVENT_FETCH_MYPRODUCTS,
    EVENT_FETCH_MYPRODUCTS_SUCCESS,
    EVENT_FETCH_MYPRODUCTS_FAIL
} from '../actions/my-products';

export default handleActions({
    [EVENT_FETCH_MYPRODUCTS]: fetchMyProducts,
    [EVENT_FETCH_MYPRODUCTS_SUCCESS]: fetchMyProductsSuccess,
    [EVENT_FETCH_MYPRODUCTS_FAIL]: fetchMyProductsFail
}, {
    myProducts: undefined,
    inprogress: false,
    error: undefined
});

function fetchMyProducts(state) {
    return {
        ...state,
        inprogress: true,
        error: undefined
    };
}

function fetchMyProductsSuccess(state, action) {
    return {
        myProducts: action.payload,
        inprogress: false,
        error: undefined
    };
}

function fetchMyProductsFail(state, action) {
    return {
        ...state,
        myProducts: [],
        inprogress: false,
        error: action.payload
    };
}
