import { handleActions } from 'redux-actions';

import {
    EVENT_SAVE_PRODUCT,
    EVENT_SAVE_PRODUCT_SUCCESS,
    EVENT_SAVE_PRODUCT_FAIL
} from '../actions/product';

export default handleActions({
    [EVENT_SAVE_PRODUCT]: saveProduct,
    [EVENT_SAVE_PRODUCT_SUCCESS]: saveProductSuccess,
    [EVENT_SAVE_PRODUCT_FAIL]: saveProductFail
}, {
    actionInprogress: false
});

function saveProduct(state) {
    return {
        ...state,
        actionInprogress: true
    };
}

function saveProductSuccess(state) {
    return {
        ...state,
        actionInprogress: false
    };
}

function saveProductFail(state) {
    return {
        ...state,
        actionInprogress: false
    };
}
