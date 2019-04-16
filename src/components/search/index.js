import { connect } from 'react-redux';

import { changeFilters } from '../../redux/actions/filters';
import { fetchDevicesSuggest } from '../../redux/actions/devices';

import Search from './search';

export default connect(mapStateToProps, mapDispatchToProps)(Search);

function mapStateToProps(state) {
    return {
        suggestResults: state.devices.suggest,
        tesseractsValue: state.filters.filtersValue.tesseracts,
        searchValue: state.filters.filtersValue.text
    };
}

function mapDispatchToProps(dispatch) {
    return {
        filterChange: (field, value) => dispatch(changeFilters({ field, value })),
        devicesSuggest: (text, tesseracts) => dispatch(fetchDevicesSuggest({ text, tesseracts }))
    };
}
