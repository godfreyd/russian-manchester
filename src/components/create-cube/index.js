import { connect } from 'react-redux';

import { saveCube } from '../../redux/actions/tesseract';

import CreateCube from './create-cube';

export default connect(mapStateToProps, mapDispatchToProps)(CreateCube);

function mapStateToProps(state) {
    const { created } = state.tesseract;

    return {
        created
    };
}

function mapDispatchToProps(dispatch) {
    return {
        saveCube: payload => dispatch(saveCube(payload))
    };
}
