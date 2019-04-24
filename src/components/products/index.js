import { connect } from 'react-redux';

import { fetchProducts } from '../../redux/actions/products';

import Products from './products';

export default connect(mapStateToProps, mapDispatchToProps)(Products);

function mapStateToProps(state) {
    return {
        products: state.products.products,
        filtersValue: state.filters.filtersValue,
        productActionInprogress: state.product.actionInprogress
    };
}

function mapDispatchToProps(dispatch) {
    return {
        updateProductList: query => dispatch(fetchProducts(query))
    };
}
