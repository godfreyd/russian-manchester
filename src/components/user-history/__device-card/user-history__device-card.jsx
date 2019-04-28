import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';

import { getHistoryDate } from '../../../lib/helpers';

import ProductIcon from '../../../common.components/product-icon';
import Link from '../../../common.components/link';

import i18n from '../../i18n';

import './user-history__product-card.css';

const classNames = cn('user-history');

const UserHistoryCard = props => {
    const { ts, location = 'undefined', tesseract, product = {}, openCard } = props;
    const onProductTitleClick = () => openCard(product.id);
    const hasTesseractLink = !globalConfig.locations.withoutTesseract.includes(location);

    return (
        <div className={classNames('product-card')}>

            <ProductIcon photo={product.photo} size="1hq" type="history-android" />
            <div className={classNames('product-card-info')}>
                <div className={classNames('product-card-title')}>
                    <Link type="black" onClick={onProductTitleClick}>
                        { product.name ? product.name : i18n('noname', 'product') }
                    </Link>
                </div>
                <div className={classNames('product-card-action')}>
                    {getHistoryText(props, 'product')}&nbsp;
                    {hasTesseractLink && <Link url={tesseract.link}>{tesseract.name}</Link>}
                </div>
                {getHistoryDate(ts)}
            </div>

        </div>
    );
};

function getHistoryText(item, type) {
    const { links } = globalConfig;
    const { location, ticket } = item;

    const key = ticket ? `history-${location}-ticket` : `history-${location}`;

    const text = i18n(key, type, {
        ticket: links.tracker.replace('{ticket}', ticket)
    });

    return <span dangerouslySetInnerHTML={{ __html: text }} />;
}

UserHistoryCard.propTypes = {
    ts: PropTypes.string.isRequired,
    location: PropTypes.string,
    tesseract: PropTypes.object.isRequired,
    openCard: PropTypes.func.isRequired
};

export default UserHistoryCard;
