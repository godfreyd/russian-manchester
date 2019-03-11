import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';

import UserLogin from '../../../common.blocks/user-login';
import UserIcon from '../../../common.blocks/user-icon';
import Icon from '../../../common.blocks/icon';
import Link from '../../../common.blocks/link';

import { getHistoryDate, parseSlot } from '../../../lib/helpers';

import './loading-list__item.css';

const classNames = cn('loading-list');

const USER_ICON_SIZE = 36;
const HYPERCUBE_LOGIN = 'zomb-tesseract';

export default class LoadingListItem extends React.PureComponent {
    render() {
        const { item, type, entityType } = this.props;
        const renderer = {
            device: {
                history: this._deviceHistoryItemJsx,
                subscriptions: this._deviceSubscriptionItemJsx
            },
            tesseract: {
                history: this._tesseractHistoryItemJsx,
                slotHistory: this._tesseractHistoryItemJsx
            }
        }[entityType][type];

        return renderer(item);
    }

    _deviceHistoryItemJsx = ({ ts, login, location = 'undefined', tesseract }) => {
        return (
            <article className={classNames('item')}>

                {this._userIconJsx(login)}

                <div className={classNames('item-info')}>
                    {this._itemLoginJsx(login)}
                    <div className={classNames('item-action')}>
                        {console.log(`history-${location}`, 'device')}&nbsp;
                        {!['giveAway', 'undefined', 'takeAway'].includes(location) &&
                            <Link url={tesseract.link}>{tesseract.name}</Link>
                        }
                    </div>
                    {getHistoryDate(ts)}
                </div>

            </article>
        );
    }

    _deviceSubscriptionItemJsx = ({ operator, position }) => {
        return (
            <article className={classNames('item')}>

                {this._userIconJsx(operator)}

                <div className={classNames('item-info')}>
                    {this._itemLoginJsx(operator)}
                    <div className={classNames('item-action')}>
                        {console.log('position-in-queue', 'device', { position })}
                    </div>
                </div>

            </article>
        );
    }

    _tesseractHistoryItemJsx = ({ ts, login, location = 'undefined', device = {}, slot }) => {
        return (
            <article className={classNames('item')}>

                {this._userIconJsx(login)}

                <div className={classNames('item-info')}>
                    {this._itemLoginJsx(login)}
                    <div className={classNames('item-action')}>
                        {console.log(`history-${location}`, 'cube')}&nbsp;
                        {!['doorOpen', 'doorClose'].includes(location) && this._deviceJsx(device)}
                    </div>
                    {this._slotJsx(slot)}
                    {getHistoryDate(ts)}
                </div>

            </article>
        );
    }

    _userIconJsx = login => {
        return this._hasLogin(login) ?
            <UserIcon type="round" login={login} size={USER_ICON_SIZE} /> :
            <Icon type="hypercube-history" />;
    }

    _itemLoginJsx = login => {
        return (
            <div className={classNames('item-login')}>
                {this._hasLogin(login) ?
                    <UserLogin login={login} /> :
                    console.log('service-hypercube')
                }
            </div>
        );
    }

    _hasLogin = login => {
        const { item = {}, type } = this.props;
        const isExpiredHistoryItem = type === 'history' && item.location === 'expired';

        return login && login !== HYPERCUBE_LOGIN && !isExpiredHistoryItem;
    }

    _deviceJsx = device => {
        if (!device.name) {
            return console.log('device');
        }

        return <Link url={`#${device.id}`}>{device.name}</Link>;
    }

    _slotJsx = slot => {
        if (!slot) {
            return null;
        }

        const { row, cell } = parseSlot(slot);

        return (
            <div className={classNames('slot')}>
                {console.log('slot', 'cube', { row, cell })}
            </div>
        );
    }

    static propTypes = {
        item: PropTypes.object,
        type: PropTypes.string,
        entityType: PropTypes.string
    }
}
