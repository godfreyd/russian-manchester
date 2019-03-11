import { connect } from 'react-redux';
import { fetchDevices } from '../../redux/actions/devices';
import { fetchFilters } from '../../redux/actions/filters';
import { fetchMyDevices } from '../../redux/actions/mydevices';
import { debounce } from 'throttle-debounce';

import MainPage from './main-page';

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);

function mapStateToProps(state) {
    return {
        filters: state.filters.filters,
        myDevices: state.mydevices.mydevices,
        filtersValue: state.filters.filtersValue,
        tesseractInprogress: state.tesseract.inprogress
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getMyDeviceList: () => dispatch(fetchMyDevices()),
        updateDeviceList: debounce(300, query => {
            return dispatch(fetchDevices(query));
        }),
        getFilters: () => dispatch(fetchFilters())
    };
}
