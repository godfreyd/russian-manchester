import { connect } from 'react-redux';

import { fetchUserInfo, fetchUserProducts } from '../../redux/actions/user';

import UserPage from './user-page';

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);

function mapStateToProps(state) {
    return {
        products: state.user.products,
        userInfo: state.user.info,
        inprogress: state.user.inprogress,
        error: state.user.error
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getUserProductList: login => dispatch(fetchUserProducts({ login })),
        getUserInfo: login => dispatch(fetchUserInfo({ login }))
    };
}
