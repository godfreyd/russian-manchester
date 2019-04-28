import { connect } from 'react-redux';
import { debounce } from 'throttle-debounce';

import { fetchProducts } from '../../redux/actions/products';
import { fetchFilters } from '../../redux/actions/filters';
import { fetchMyProducts } from '../../redux/actions/my-products';

import withLocalStorage from '../../decorators/local-storage';

import MainPage from './main-page';

export default withLocalStorage(connect(mapStateToProps, mapDispatchToProps)(MainPage));

function mapStateToProps(state) {
    return {
        filters: state.filters.filters,
        myProducts: state.myProducts.myProducts,
        filtersValue: state.filters.filtersValue,
        // tesseractInprogress: state.tesseract.inprogress
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getMyProductList: () => dispatch(fetchMyProducts()),
        updateProductList: debounce(300, query => dispatch(fetchProducts(query))),
        getFilters: () => dispatch(fetchFilters())
    };
}
