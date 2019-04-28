import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';
import { withRouter } from 'react-router-dom';
import get from 'lodash/get';

import Badge from '../../../common.components/badge';

import i18n from '../../i18n';

import './user-subscriptions__card.css';

const classNames = cn('user-subscriptions');

const UserSubscriptionsCard = ({ position, product, tesseract, location, history, notified, productLocation }) => {

    /**
     * Обработчик нажатия на девайс в подписках
     * @returns {void}
     * @private
     */
    const _handleProductClick = () => {
        history.replace({
            ...location,
            hash: `#${product.id}`
        });
    };

    const productName = get(product, 'model.name') || i18n('noname', 'product');
    const canTake = notified && globalConfig.locations.free.includes(productLocation);

    return (
        <div className={classNames('card')} onClick={_handleProductClick}>

            {canTake ?
                <Badge type="can-take" text={i18n('status-can-take', 'product')} /> :
                <Badge type="queue" text={i18n('position-in-queue', 'product', { position })} />
            }

            <div className={classNames('product')}>
                <div className={classNames('product-title')} title={productName}>
                    {productName}
                </div>
                <div className={classNames('product-info')}>
                    {tesseract.name}
                </div>
            </div>

        </div>
    );
};

UserSubscriptionsCard.propTypes = {
    product: PropTypes.object.isRequired,
    tesseract: PropTypes.object.isRequired,
    position: PropTypes.number.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    notified: PropTypes.bool.isRequired,
    productLocation: PropTypes.string.isRequired
};

export default withRouter(UserSubscriptionsCard);
