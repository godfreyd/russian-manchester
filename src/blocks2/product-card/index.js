import { connect } from 'react-redux';
import {
    saveProduct,
} from '../../redux/actions/product';

import ProductCard from './product-card';

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);

function mapStateToProps(state) {

    return {
        actionInprogress: state.product.actionInprogress,
        productInfo: state.product.productInfo
    };
}

function mapDispatchToProps(dispatch) {
    return {
        saveProduct: body => dispatch(saveProduct(body))
    };
}
