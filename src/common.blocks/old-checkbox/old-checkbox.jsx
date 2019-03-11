import React from 'react';
import { cn } from '@bem-react/classname';
import PropTypes from 'prop-types';

import Checkbox from '@material-ui/core/Checkbox';

import './old-checkbox.css';

const classNames = cn('old-checkbox');

const OldCheckbox = ({ children, ...props }) => (
    <span className={classNames()}>
        <Checkbox
            {...props}
        >
            {children}
        </Checkbox>
    </span>
);

OldCheckbox.propTypes = {
    children: PropTypes.node.isRequired
};

// HYPERCUBE-414 перейти на новые зеленые чекбоксы во всем приложении
export default OldCheckbox;
