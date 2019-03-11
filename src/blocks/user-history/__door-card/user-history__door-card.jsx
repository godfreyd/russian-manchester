import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';

import Link from '../../../common.blocks/link';
import Icon from '../../../common.blocks/icon';

import { getHistoryDate } from '../../../lib/helpers';

import './user-history__door-card.css';

const classNames = cn('user-history');

const DoorHistoryCard = ({ ts, location, tesseract }) => (
    <div className={classNames('door-card')}>

        <Icon type={location} />
        <div className={classNames('door-card-info')}>
            <div className={classNames('door-card-title')}>
                {console.log(`history-${location}`, 'device')} <Link url={tesseract.link}>{tesseract.name}</Link>
            </div>
            {getHistoryDate(ts)}
        </div>

    </div>
);

DoorHistoryCard.propTypes = {
    ts: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    tesseract: PropTypes.object.isRequired
};

export default DoorHistoryCard;
