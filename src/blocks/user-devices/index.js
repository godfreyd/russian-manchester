import { connect } from 'react-redux';
import { fetchMyDevices } from '../../redux/actions/mydevices';

import UserDevices from './user-devices';

export default connect(mapStateToProps, mapDispatchToProps)(UserDevices);

function mapStateToProps(state) {
    return {
        deviceActionInprogress: state.device.actionInprogress
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getMyDeviceList: () => dispatch(fetchMyDevices())
    };
}
