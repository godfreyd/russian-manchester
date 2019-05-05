import React from 'react';
import PropTypes from 'prop-types';
import { withNaming } from '@bem-react/classname';

import { getHistoryDate } from '../../../lib/helpers';

import Link from '../../../common.components/link';
import Icon from '../../../common.components/icon';

import i18n from '../../i18n';

import './user-history__door-card.css';

const cn = withNaming({ e: '__', m: '_', v: '_' });
const classNames = cn('user-history');

const DoorHistoryCard = ({ ts, location, tesseract }) => (
    <div className={classNames('door-card')}>

        <Icon type={location} />
        <div className={classNames('door-card-info')}>
            <div className={classNames('door-card-title')}>
                {i18n(`history-${location}`, 'product')} <Link url={tesseract.link}>{tesseract.name}</Link>
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
