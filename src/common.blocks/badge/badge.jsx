import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';

import './badge.css';

const classNames = cn('badge');

const Badge = ({ type, text }) => (
    <span className={classNames({ type })}>
        <div className={classNames('status-text')}>
            {text}
        </div>
    </span>
);

Badge.propTypes = {
    type: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

export default Badge;
