import React from 'react';
import propTypes from 'prop-types';
import { withNaming } from '@bem-react/classname';

import './icon.css';

const cn = withNaming({ e: '__', m: '_', v: '_' });
const classNames = cn('icon');

const Icon = ({ onClick, type }) => (
    <span onClick={onClick} className={classNames({ type })} />
);

Icon.propTypes = {
    type: propTypes.string.isRequired,
    onClick: propTypes.func
};

export default Icon;
