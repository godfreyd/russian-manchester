import { connect } from 'react-redux';

import UserHistory from './user-history';
import { fetchUserHistory } from '../../redux/actions/user';

export default connect(mapStateToProps, mapDispatchToProps)(UserHistory);

function mapStateToProps(state) {
    return {
        device: state.device.device,
        history: state.user.history
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getUserHistory: (login, pageNumber, pageSize) => dispatch(fetchUserHistory({ login, pageNumber, pageSize }))
    };
}
