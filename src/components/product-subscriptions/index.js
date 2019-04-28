import { connect } from 'react-redux';

import { fetchProductSubscriptions } from '../../redux/actions/product';

import ProductSubscriptions from './product-subscriptions';

export default connect(mapStateToProps, mapDispatchToProps)(ProductSubscriptions);

function mapStateToProps(state) {
    return {
        product: state.product.product,
        subscriptions: state.product.subscriptions
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getProductSubscriptions: (id, pageNumber, pageSize) => dispatch(fetchProductSubscriptions({ id, pageNumber, pageSize }))
    };
}
