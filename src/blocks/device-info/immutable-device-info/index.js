import { connect } from 'react-redux';
import { fetchDeviceModels } from '../../../redux/actions/device';

import ImmutableDeviceInfo from './immutable-device-info';

export default connect(null, mapDispatchToProps)(ImmutableDeviceInfo);

function mapDispatchToProps(dispatch) {
    return {
        fetchModelsSuggest: text => dispatch(fetchDeviceModels([{ text }]))
    };
}
