import { connect } from 'react-redux';
import get from 'lodash/get';

import Cube from './cube';

export default connect(mapStateToProps, null)(Cube);

function mapStateToProps(state) {
    return {
        tesseracts: get(state.filters, 'filters.tesseracts')
    };
}
