import { connect } from 'react-redux';

import { grabProduct, lockProduct, unlockProduct } from '../../../redux/actions/product';

import withLocalStorage from '../../../decorators/local-storage';

import Product from './product';

export default withLocalStorage(connect(mapStateToProps, mapDispatchToProps)(Product));

function mapStateToProps(state) {
    return {
        filtersValue: state.filters.filtersValue,
        disableControls: state.product.actionInprogress
    };
}

function mapDispatchToProps(dispatch) {
    return {
        lockProduct: id => dispatch(lockProduct(id)),
        unlockProduct: id => dispatch(unlockProduct(id)),
        grabProduct: id => dispatch(grabProduct(id))
    };
}
