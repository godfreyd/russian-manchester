import React from 'react';
import PropTypes from 'prop-types';
import { withNaming } from '@bem-react/classname';

import { getHistoryDate, parseSlot } from '../../../lib/helpers';

import ProductIcon from '../../../common.components/product-icon';
import Icon from '../../../common.components/icon';
import Link from '../../../common.components/link';
import UserIcon from '../../../common.components/user-icon';
import UserLogin from '../../../common.components/user-login';

import i18n from '../../i18n';

import './loading-list__item.css';

const cn = withNaming({ e: '__', m: '_', v: '_' });
const classNames = cn('loading-list');

const USER_ICON_SIZE = 36;
const HYPERCUBE_LOGIN = 'zomb-tesseract';

export default class LoadingListItem extends React.PureComponent {
    render() {
        const { item, type, entityType } = this.props;
        const renderer = {
            product: {
                history: this._productHistoryItemJsx,
                subscriptions: this._productSubscriptionItemJsx
            },
            tesseract: {
                history: this._tesseractHistoryItemJsx,
                slotHistory: this._tesseractHistoryItemJsx
            },
            user: {
                history: this._userHistoryItemJsx
            }
        }[entityType][type];

        return renderer(item);
    }

    _productHistoryItemJsx = item => {
        const { ts, login, location = 'undefined', tesseract } = item;
        const hasTesseractLink = !globalConfig.locations.withoutTesseract.includes(location);

        return (
            <article className={classNames('item', { type: 'product' })}>

                {this._userIconJsx(login)}

                <div className={classNames('item-info')}>
                    {this._itemLoginJsx(login)}
                    <div className={classNames('item-action')}>
                        {this._getHistoryText(item, 'product')}&nbsp;
                        {hasTesseractLink &&
                            <Link url={tesseract.link}>{tesseract.name}</Link>
                        }
                    </div>
                    {getHistoryDate(ts)}
                </div>

            </article>
        );
    }

    _productSubscriptionItemJsx = ({ operator, position }) => {
        return (
            <article className={classNames('item', { type: 'product' })}>

                {this._userIconJsx(operator)}

                <div className={classNames('item-info')}>
                    {this._itemLoginJsx(operator)}
                    <div className={classNames('item-action')}>
                        {i18n('position-in-queue', 'product', { position })}
                    </div>
                </div>

            </article>
        );
    }

    _tesseractHistoryItemJsx = item => {
        const { ts, login, location = 'undefined', product = {}, slot } = item;
        const hasProduct = !globalConfig.locations.door.includes(location);

        return (
            <article className={classNames('item', { type: 'tesseract' })}>

                {this._userIconJsx(login)}

                <div className={classNames('item-info')}>
                    {this._itemLoginJsx(login)}
                    <div className={classNames('item-action')}>
                        {this._getHistoryText(item, 'cube')}&nbsp;
                        {hasProduct && this._productJsx(product)}
                    </div>
                    {this._slotJsx(slot)}
                    {getHistoryDate(ts)}
                </div>

            </article>
        );
    }

    _userHistoryItemJsx = item => {
        const isDoorCard = globalConfig.locations.door.includes(item.location);

        return isDoorCard ?
            this._userDoorHistoryItemJsx(item) :
            this._userProductHistoryItemJsx(item);
    }

    _userDoorHistoryItemJsx = item => {
        const { ts, location, tesseract } = item;

        return (
            <article className={classNames('item', { type: 'user' })}>
                <Icon type={location} />
                <div className={classNames('item-info')}>
                    <div className={classNames('item-title')}>
                        {i18n(`history-${location}`, 'product')} <Link url={tesseract.link}>{tesseract.name}</Link>
                    </div>
                    {getHistoryDate(ts)}
                </div>
            </article>
        );
    }

    _userProductHistoryItemJsx = item => {
        const { ts, location = 'undefined', tesseract, product = {} } = item;
        const hasTesseractLink = !globalConfig.locations.withoutTesseract.includes(location);

        return (
            <article className={classNames('item', { type: 'user' })}>
                <ProductIcon photo={product.photo} size="1hq" type="history-android" />
                <div className={classNames('item-info')}>
                    <div className={classNames('item-title')}>
                        <Link type="black" onClick={this._onUserItemClick(item)}>
                            { product.name ? product.name : i18n('noname', 'product') }
                        </Link>
                    </div>
                    <div className={classNames('item-action')}>
                        {!this._hasLogin(item) && `${i18n('service-hypercube')} `}
                        {this._getHistoryText(item, 'product')}&nbsp;
                        {hasTesseractLink && <Link url={tesseract.link}>{tesseract.name}</Link>}
                    </div>
                    {getHistoryDate(ts)}
                </div>
            </article>
        );
    }

    _onUserItemClick = item => {
        return () => {
            if (this.props.onItemClick) {
                this.props.onItemClick(item.product.id);
            }
        };
    }

    _userIconJsx = login => {
        return this._hasLogin(login) ?
            <UserIcon type="round" login={login} size={USER_ICON_SIZE} /> :
            <Icon type="hypercube-history" />;
    }

    _itemLoginJsx = login => {
        return (
            <div className={classNames('item-title')}>
                {this._hasLogin(login) ?
                    <UserLogin login={login} /> :
                    i18n('service-hypercube')
                }
            </div>
        );
    }

    _getHistoryText = (item, type) => {
        const { links } = globalConfig;
        const { location, ticket } = item;

        const key = ticket ? `history-${location}-ticket` : `history-${location}`;

        const text = i18n(key, type, {
            ticket: links.tracker.replace('{ticket}', ticket)
        });

        return <span dangerouslySetInnerHTML={{ __html: text }} />;
    }

    _hasLogin = login => {
        const { item = {}, type } = this.props;
        const isExpiredHistoryItem = ['slotHistory', 'history'].includes(type) && item.location === 'expired';

        return login && login !== HYPERCUBE_LOGIN && !isExpiredHistoryItem;
    }

    _productJsx = product => {
        if (!product.name) {
            return i18n('product');
        }

        return <Link url={`#${product.id}`}>{product.name}</Link>;
    }

    _slotJsx = slot => {
        if (!slot) {
            return null;
        }

        const { row, cell } = parseSlot(slot);

        return (
            <div className={classNames('slot')}>
                {i18n('slot', 'cube', { row, cell })}
            </div>
        );
    }

    static propTypes = {
        item: PropTypes.object,
        type: PropTypes.string,
        entityType: PropTypes.string,
        onItemClick: PropTypes.func
    }
}
