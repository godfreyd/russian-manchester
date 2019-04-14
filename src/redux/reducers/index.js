import { combineReducers } from 'redux';

import devices from './devices';
import product from './product';
import filters from './filters';
import mydevices from './mydevices';

export default combineReducers({
    devices,
    product,
    filters,
    mydevices
});
