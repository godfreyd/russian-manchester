import { connect } from 'react-redux';

import { fetchOffices } from '../../redux/actions/offices';

import Offices from './offices';

export default connect(mapStateToProps, mapDispatchToProps)(Offices);

function mapStateToProps(state) {
    const { list, inprogress } = state.offices;

    return { list, inprogress };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchOffices: () => dispatch(fetchOffices())
    };
}
