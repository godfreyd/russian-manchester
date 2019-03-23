import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';

import './icon.css';

const classNames = cn('icon');

const Icon = ({ onClick, type }) => (
    <span onClick={onClick} className={classNames({ type })} />
);

Icon.propTypes = {
    type: PropTypes.string.isRequired,
    onClick: PropTypes.func
};

export default Icon;
