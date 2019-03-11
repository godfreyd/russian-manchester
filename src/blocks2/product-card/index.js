import { connect } from 'react-redux';
import {
    saveProduct,
} from '../../redux/actions2/product';

import ProductCard from './product-card';

export default connect(mapDispatchToProps)(ProductCard);

// function mapStateToProps(state) {

//     return {
//         actionInprogress: state.device.actionInprogress,
//         deviceInfo: state.device.device,
//         disableControls: state.device.actionInprogress,
//         fetchInprogress: state.device.fetchInprogress,
//         modelInfo: state.device.modelInfo,
//         models: state.device.models
//     };
// }

function mapDispatchToProps(dispatch) {
    return {
        saveProduct: body => dispatch(saveProduct(body))
    };
}
