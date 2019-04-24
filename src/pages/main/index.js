import { connect } from 'react-redux';
import { debounce } from 'throttle-debounce';

import { fetchProducts } from '../../redux/actions/products';
import { fetchFilters } from '../../redux/actions/filters';
import { fetchMyProducts } from '../../redux/actions/myproducts';

import MainPage from './main-page';

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);

function mapStateToProps(state) {
    return {
        filters: state.filters.filters,
        myProducts: state.myproducts.myproducts,
        filtersValue: state.filters.filtersValue
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getMyProductList: () => dispatch(fetchMyProducts()),
        updateProductList: debounce(300, query => {
            return dispatch(fetchProducts(query));
        }),
        getFilters: () => dispatch(fetchFilters())
    };
}
