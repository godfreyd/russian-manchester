import { connect } from 'react-redux';

import Filter from './filter';

export default connect(mapStateToProps, null)(Filter);

function mapStateToProps(state) {
    return {
        filters: state.filters.filters
    };
}
