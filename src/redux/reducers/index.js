import { combineReducers } from 'redux';

import devices from './devices';
import device from './device';
import filters from './filters';
import mydevices from './mydevices';
import user from './user';
import tesseract from './tesseract';

export default combineReducers({
    devices,
    device,
    filters,
    mydevices,
    user,
    tesseract
});
