import { connect } from 'react-redux';
import { fetchUserSubscriptions } from '../../redux/actions/user';

import UserSubscriptions from './user-subscriptions';

export default connect(mapStateToProps, mapDispatchToProps)(UserSubscriptions);

function mapStateToProps(state) {
    return {
        subscriptions: state.user.subscriptions,
        deviceSubscriptions: state.device.subscriptions
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getUserSubscriptions: () => dispatch(fetchUserSubscriptions())
    };
}
