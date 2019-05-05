import React from 'react';
import PropTypes from 'prop-types';
import { withNaming } from '@bem-react/classname';

import UserLogin from '../../../common.components/user-login';
import UserIcon from '../../../common.components/user-icon';

import i18n from '../../i18n';

import './product-subscriptions__card.css';

const cn = withNaming({ e: '__', m: '_', v: '_' });
const classNames = cn('product-subscriptions');
const USER_ICON_SIZE = 36;

const ProductSubscriptionsCard = ({ operator, position }) => (
    <div className={classNames('card')}>

        <UserIcon type="round" login={operator} size={USER_ICON_SIZE} />

        <div className={classNames('card-info')}>
            <div className={classNames('card-login')}>
                <UserLogin login={operator} />
            </div>
            <div className={classNames('card-action')}>
                {i18n('position-in-queue', 'product', { position })}
            </div>
        </div>

    </div>
);

ProductSubscriptionsCard.propTypes = {
    operator: PropTypes.string.isRequired,
    position: PropTypes.number.isRequired
};

export default ProductSubscriptionsCard;
