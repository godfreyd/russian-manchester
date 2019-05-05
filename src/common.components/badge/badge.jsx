import React from 'react';
import propTypes from 'prop-types';
import { withNaming } from '@bem-react/classname';

import './badge.css';

const cn = withNaming({ e: '__', m: '_', v: '_' });
const classNames = cn('badge');

const Badge = ({ type, text }) => (
    <span className={classNames({ type })}>
        <div className={classNames('status-text')}>
            {text}
        </div>
    </span>
);

Badge.propTypes = {
    type: propTypes.string.isRequired,
    text: propTypes.string.isRequired
};

export default Badge;
