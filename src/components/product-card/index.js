import { connect } from 'react-redux';

import {
    clearProductStore,
    destroyProduct,
    saveProductPublicInfo,
    fetchProduct,
    fetchProductModel,
    grabProduct,
    lockProduct,
    saveProduct,
    subscribeToProduct,
    toServiceProduct,
    unlockProduct
} from '../../redux/actions/product';

import withLocalStorage from '../../decorators/local-storage';

import ProductCard from './product-card';

export default withLocalStorage(connect(mapStateToProps, mapDispatchToProps)(ProductCard));

function mapStateToProps(state) {
    const { rows: subscriptions = [] } = state.product.subscriptions;

    return {
        actionInprogress: state.product.actionInprogress,
        productInfo: state.product.product,
        disableControls: state.product.actionInprogress,
        fetchInprogress: state.product.fetchInprogress,
        filtersValue: state.filters.filtersValue,
        hasSubscriptions: subscriptions.length > 0,
        modelInfo: state.product.modelInfo,
        models: state.product.models
    };
}

function mapDispatchToProps(dispatch) {
    return {
        clearProductStore: () => dispatch(clearProductStore()),
        destroyProduct: body => dispatch(destroyProduct(body)),
        getProductInfo: id => dispatch(fetchProduct(id)),
        getMarketModelInfo: id => dispatch(fetchProductModel(id)),
        grabProduct: body => dispatch(grabProduct(body)),
        lockProduct: id => dispatch(lockProduct(id)),
        saveProduct: body => dispatch(saveProduct(body)),
        subscribeToProduct: (productId, method) => dispatch(subscribeToProduct({ productId, method })),
        saveProductPublicInfo: body => dispatch(saveProductPublicInfo(body)),
        toServiceProduct: body => dispatch(toServiceProduct(body)),
        unlockProduct: id => dispatch(unlockProduct(id))
    };
}
