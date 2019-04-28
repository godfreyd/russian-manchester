import { combineReducers } from 'redux';

import products from './products';
import product from './product';
import filters from './filters';
import myProducts from './my-products';
import offices from './offices';
import user from './user';
import tesseract from './tesseract';

export default combineReducers({
    products,
    product,
    filters,
    myProducts,
    offices,
    user,
    tesseract
});
