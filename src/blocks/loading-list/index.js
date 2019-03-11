import { connect } from 'react-redux';

import { fetchCubeHistory } from '../../redux/actions/tesseract';
import { fetchDeviceHistory, fetchDeviceSubscriptions } from '../../redux/actions/device';

import LoadingList from './loading-list';

export default connect(mapStateToProps, mapDispatchToProps)(LoadingList);

function mapStateToProps(state, { type, entityType }) {
    return {
        list: state[entityType][type]
    };
}

function mapDispatchToProps(dispatch, { entityType, type }) {
    const method = {
        tesseract: {
            history: fetchCubeHistory,
            slotHistory: fetchCubeHistory
        },
        device: {
            history: fetchDeviceHistory,
            subscriptions: fetchDeviceSubscriptions
        }
    }[entityType][type];

    return {
        fetchItems: (id, pageNumber, pageSize, options = {}) => {
            return dispatch(method({ id, pageNumber, pageSize, ...options }));
        }
    };
}
