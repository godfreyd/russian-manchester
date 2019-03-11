import { connect } from 'react-redux';
import { grabDevice, lockDevice, unlockDevice } from '../../../redux/actions/device';

import Device from './device';

export default connect(mapStateToProps, mapDispatchToProps)(Device);

function mapStateToProps(state) {
    return {
        filtersValue: state.filters.filtersValue,
        disableControls: state.device.actionInprogress
    };
}

function mapDispatchToProps(dispatch) {
    return {
        lockDevice: id => dispatch(lockDevice(id)),
        unlockDevice: id => dispatch(unlockDevice(id)),
        grabDevice: id => dispatch(grabDevice(id))
    };
}
