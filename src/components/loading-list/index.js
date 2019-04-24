import { connect } from 'react-redux';

import { fetchCubeHistory } from '../../redux/actions/tesseract';
import { fetchProductHistory, fetchProductSubscriptions } from '../../redux/actions/product';
import { fetchUserHistory } from '../../redux/actions/user';

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
        product: {
            history: fetchProductHistory,
            subscriptions: fetchProductSubscriptions
        },
        user: {
            history: fetchUserHistory
        }
    }[entityType][type];

    return {
        fetchItems: (id, pageNumber, pageSize, options = {}) => {
            return dispatch(method({ id, pageNumber, pageSize, ...options }));
        }
    };
}
