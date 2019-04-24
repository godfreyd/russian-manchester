import React from 'react';
import propTypes from 'prop-types';

import Badge from '..';

import i18n from '../../../components/i18n';

const msInDay = 24 * 60 * 60 * 1000;

const ExpiredBadge = ({ dateDifference }) => {
    const days = Math.floor(dateDifference / msInDay);
    const expiredText = i18n('badge-expired', 'product', { days });
    const daysFlectivity = i18n('days', 'common', { count: days });

    return <Badge type="expired" text={`${expiredText} ${daysFlectivity}`} />;
};

ExpiredBadge.propTypes = {
    dateDifference: propTypes.number.isRequired
};

export default ExpiredBadge;
