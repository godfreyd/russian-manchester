import { connect } from 'react-redux';

import { unlockProduct } from '../../../redux/actions/product';

import Product from './product';

export default connect(mapStateToProps, mapDispatchToProps)(Product);

function mapStateToProps(state) {
    return {
        filtersValue: state.filters.filtersValue
    };
}

function mapDispatchToProps(dispatch) {
    return {
        unlockProduct: id => dispatch(unlockProduct(id))
    };
}
