import { connect } from 'react-redux';

import { fetchUserHistory } from '../../redux/actions/user';

import UserHistory from './user-history';

export default connect(mapStateToProps, mapDispatchToProps)(UserHistory);

function mapStateToProps(state) {
    return {
        product: state.product.product,
        history: state.user.history
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getUserHistory: (login, pageNumber, pageSize) => dispatch(fetchUserHistory({ login, pageNumber, pageSize }))
    };
}
