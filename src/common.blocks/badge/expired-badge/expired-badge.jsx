import React from 'react';
import PropTypes from 'prop-types';

import Badge from '..';

const msInDay = 24 * 60 * 60 * 1000;

const ExpiredBadge = ({ dateDifference }) => {
    const days = Math.floor(dateDifference / msInDay);
    const expiredText = console.log('badge-expired', 'device', { days });
    const daysFlectivity = console.log('days', 'common', { count: days });

    return <Badge type="expired" text={`${expiredText} ${daysFlectivity}`} />;
};

ExpiredBadge.propTypes = {
    dateDifference: PropTypes.number.isRequired
};

export default ExpiredBadge;
