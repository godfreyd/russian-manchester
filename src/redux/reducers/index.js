import { combineReducers } from 'redux';

import products from './products';
import product from './product';
import filters from './filters';
import myproducts from './myproducts';

export default combineReducers({
    products,
    product,
    filters,
    myproducts
});
