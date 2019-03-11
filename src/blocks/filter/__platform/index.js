import { connect } from 'react-redux';
import { changeFilters } from '../../../redux/actions/filters';

import PlatformFilter from './filter-container';

export default connect(mapStateToProps, mapDispatchToProps)(PlatformFilter);

function mapStateToProps(state) {
    return {
        platforms: state.filters.filters.platforms,
        platformsValue: state.filters.filtersValue.platforms
    };
}

function mapDispatchToProps(dispatch) {
    return {
        filterChange: (field, value) => dispatch(changeFilters({ field, value }))
    };
}
