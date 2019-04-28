import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';
import get from 'lodash/get';

import PageNumber from '../../decorators/page-number';

import Slider from '../../common.components/slider';

import ProductSubscriptionsCard from './__card';

import i18n from '../i18n';

const classNames = cn('product-subscriptions');

class ProductSubscriptions extends React.PureComponent {
    constructor(props) {
        super(props);

        props.pageNumber.setCallback(this._fetchProductSubscriptions);
    }

    componentDidMount() {
        this._fetchProductSubscriptions();
    }

    componentWillReceiveProps(nextProps) {
        const { product, pageNumber } = this.props;

        if (product !== nextProps.product) {
            pageNumber.reset(this._fetchProductSubscriptions);
        }
    }

    /**
     * Запрос новой страницы подписок девайса
     *
     * @returns {void}
     * @private
     */
    _fetchProductSubscriptions = () => {
        const { productId, itemsPerPage, getProductSubscriptions, pageNumber } = this.props;

        getProductSubscriptions(productId, pageNumber.value(), itemsPerPage);
    }

    render() {
        const { subscriptions, itemsPerPage, productId, pageNumber } = this.props;
        const showSubscriptions = get(subscriptions, 'rows.0.product.id') === productId;

        return (
            <div className={classNames()}>
                {showSubscriptions &&
                    <Slider
                        type="product"
                        pageNumber={pageNumber}
                        itemsPerPage={itemsPerPage}
                        totalCount={subscriptions.totalCount}
                        title={i18n('subscriptions')}
                    >
                        {subscriptions.rows.map(card => <ProductSubscriptionsCard key={card.position} {...card} />)}
                    </Slider>
                }
            </div>
        );
    }

    static propTypes = {
        product: PropTypes.object,
        pageNumber: PropTypes.object.isRequired,
        productId: PropTypes.string.isRequired,
        getProductSubscriptions: PropTypes.func,
        subscriptions: PropTypes.object,
        itemsPerPage: PropTypes.number.isRequired
    }
}

export default PageNumber(ProductSubscriptions);
