import { connect } from 'react-redux';

import { changeFilters } from '../../../redux/actions/filters';

import DiagonalFilter from './filter__diagonals';

export default connect(mapStateToProps, mapDispatchToProps)(DiagonalFilter);

function mapStateToProps(state) {
    return {
        filterPlaceholder: state.filters.filters.diagonals,
        filterValueMin: state.filters.filtersValue.diagonalMin,
        filterValueMax: state.filters.filtersValue.diagonalMax
    };
}

function mapDispatchToProps(dispatch) {
    return {
        filterChange: (field, value) => dispatch(changeFilters({ field, value }))
    };
}
