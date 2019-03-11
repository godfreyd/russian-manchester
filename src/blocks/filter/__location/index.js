import { connect } from 'react-redux';
import { changeFilters } from '../../../redux/actions/filters';

import LocationFilter from './filter__location';

export default connect(mapStateToProps, mapDispatchToProps)(LocationFilter);

function mapStateToProps(state) {
    return {
        locationsValue: state.filters.filtersValue.locations
    };
}

function mapDispatchToProps(dispatch) {
    return {
        filterChange: (field, value) => dispatch(changeFilters({ field, value }))
    };
}
