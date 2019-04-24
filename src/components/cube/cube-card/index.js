import { connect } from 'react-redux';

import { editCube, fetchLastCubeEvents } from '../../../redux/actions/tesseract';

import CubeCard from './cube-card';

export default connect(mapStateToProps, mapDispatchToProps)(CubeCard);

function mapStateToProps(state) {
    const { lastEvents } = state.tesseract;

    return { lastEvents };
}

function mapDispatchToProps(dispatch) {
    return {
        editCube: params => dispatch(editCube({ ...params })),
        fetchLastCubeEvents: (id, shouldReset) => dispatch(fetchLastCubeEvents({ id, shouldReset }))
    };
}
