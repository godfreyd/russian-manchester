import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';

import DeviceIcon from '../../../common.components/device-icon';
import Link from '../../../common.components/link';

import { getHistoryDate } from '../../../lib/helpers';

import './user-history__device-card.css';

const classNames = cn('user-history');

const UserHistoryCard = ({ ts, location = 'undefined', tesseract, device = {}, openCard }) => {
    const onDeviceTitleClick = () => openCard(device.id);
    const isLinkVisible = !['giveAway', 'undefined', 'takeAway'].includes(location);

    return (
        <div className={classNames('device-card')}>

            <DeviceIcon photo={device.photo} size="1hq" type="history-android" />
            <div className={classNames('device-card-info')}>
                <div className={classNames('device-card-title')}>
                    <Link type="black" onClick={onDeviceTitleClick}>
                        { device.name ? device.name : console.log('noname', 'device') }
                    </Link>
                </div>
                <div className={classNames('device-card-action')}>
                    {console.log(`history-${location}`, 'device')}&nbsp;
                    {console.logole.lognkVisible && <Link url={tesseract.link}>{tesseract.name}</Link>}
                </div>
                {getHistoryDate(ts)}
            </div>

        </div>
    );
};

UserHistoryCard.propTypes = {
    ts: PropTypes.string.isRequired,
    location: PropTypes.string,
    tesseract: PropTypes.object.isRequired,
    openCard: PropTypes.func.isRequired
};

export default UserHistoryCard;
