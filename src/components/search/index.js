import { connect } from 'react-redux';

import { changeFilters } from '../../redux/actions/filters';
import { fetchProductsSuggest } from '../../redux/actions/products';

import Search from './search';

export default connect(mapStateToProps, mapDispatchToProps)(Search);

function mapStateToProps(state) {
    return {
        suggestResults: state.products.suggest,
        tesseractsValue: state.filters.filtersValue.tesseracts,
        searchValue: state.filters.filtersValue.text
    };
}

function mapDispatchToProps(dispatch) {
    return {
        filterChange: (field, value) => dispatch(changeFilters({ field, value })),
        productsSuggest: (text, tesseracts) => dispatch(fetchProductsSuggest({ text, tesseracts }))
    };
}
