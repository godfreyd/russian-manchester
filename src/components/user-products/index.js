import { connect } from 'react-redux';

import { fetchMyProducts } from '../../redux/actions/my-products';

import UserProducts from './user-products';

export default connect(mapStateToProps, mapDispatchToProps)(UserProducts);

function mapStateToProps(state) {
    return {
        productActionInprogress: state.product.actionInprogress
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getMyProductList: () => dispatch(fetchMyProducts())
    };
}
