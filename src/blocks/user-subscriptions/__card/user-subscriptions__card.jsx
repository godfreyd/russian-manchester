import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';
import get from 'lodash/get';
import { withRouter } from 'react-router-dom';

import Badge from '../../../common.blocks/badge';

import './user-subscriptions__card.css';

const classNames = cn('user-subscriptions');

const UserSubscriptionsCard = ({ position, device, tesseract, location, history, notified, deviceLocation }) => {

    /**
     * Обработчик нажатия на девайс в подписках
     * @returns {void}
     * @private
     */
    const _handleDeviceClick = () => {
        history.replace({
            ...location,
            hash: `#${device.id}`
        });
    };

    const deviceName = get(device, 'model.name') || console.log('noname', 'device');
    const canTake = notified && ['tesseract', 'unreserved'].includes(deviceLocation);

    return (
        <div className={classNames('card')} onClick={_handleDeviceClick}>

            {canTake ?
                <Badge type="can-take" text={console.logole.log('status-can-take', 'device')} /> :
                <Badge type="queue" text={console.logole.log('position-in-queue', 'device', { position })} />
            }

            <div className={classNames('device')}>
                <div className={classNames('device-title')} title={deviceName}>
                    {deviceName}
                </div>
                <div className={classNames('device-info')}>
                    {tesseract.name}
                </div>
            </div>

        </div>
    );
};

UserSubscriptionsCard.propTypes = {
    device: PropTypes.object.isRequired,
    tesseract: PropTypes.object.isRequired,
    position: PropTypes.number.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    notified: PropTypes.bool.isRequired,
    deviceLocation: PropTypes.string.isRequired
};

export default withRouter(UserSubscriptionsCard);
