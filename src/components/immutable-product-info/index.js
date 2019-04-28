import { connect } from 'react-redux';

import { fetchProductModels } from '../../redux/actions/product';

import ImmutableProductInfo from './immutable-product-info';

export default connect(null, mapDispatchToProps)(ImmutableProductInfo);

function mapDispatchToProps(dispatch) {
    return {
        fetchModelsSuggest: text => dispatch(fetchProductModels([{ text }]))
    };
}
