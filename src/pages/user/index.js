import { connect } from 'react-redux';
import { fetchUserInfo, fetchUserDevices } from '../../redux/actions/user';

import UserPage from './user-page';

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);

function mapStateToProps(state) {
    return {
        devices: state.user.devices,
        userInfo: state.user.info,
        inprogress: state.user.inprogress,
        error: state.user.error
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getUserDeviceList: login => dispatch(fetchUserDevices({ login })),
        getUserInfo: login => dispatch(fetchUserInfo({ login }))
    };
}
