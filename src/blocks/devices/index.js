import { connect } from 'react-redux';
import { fetchDevices } from '../../redux/actions/devices';

import Devices from './devices';

export default connect(mapStateToProps, mapDispatchToProps)(Devices);

function mapStateToProps(state) {
    return {
        devices: state.devices.devices,
        filtersValue: state.filters.filtersValue,
        deviceActionInprogress: state.device.actionInprogress
    };
}

function mapDispatchToProps(dispatch) {
    return {
        updateDeviceList: query => dispatch(fetchDevices(query))
    };
}
