import { connect } from 'react-redux';
import { unlockDevice } from '../../../redux/actions/device';

import Device from './device';

export default connect(mapStateToProps, mapDispatchToProps)(Device);

function mapStateToProps(state) {
    return {
        filtersValue: state.filters.filtersValue
    };
}

function mapDispatchToProps(dispatch) {
    return {
        unlockDevice: id => dispatch(unlockDevice(id))
    };
}
