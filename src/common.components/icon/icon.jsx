import React from 'react';
import propTypes from 'prop-types';
import { cn } from '@bem-react/classname';

import './icon.css';

const classNames = cn('icon');

const Icon = ({ onClick, type }) => (
    <span onClick={onClick} className={classNames({ type })} />
);

Icon.propTypes = {
    type: propTypes.string.isRequired,
    onClick: propTypes.func
};

export default Icon;
