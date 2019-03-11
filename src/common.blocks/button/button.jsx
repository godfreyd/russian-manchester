import React from 'react';
import PropTypes from 'prop-types';

import LegoButton from 'lego-on-react/src/components/button/button.react';

import 'lego-on-react/src/components/button/button.css';

import './button.css';

const Button = ({ children, ...props }) => (
    <LegoButton
        theme="normal"
        size="n"
        view="default"
        tone="default"
        {...props}
    >
        {children}
    </LegoButton>
);

Button.propTypes = {
    children: PropTypes.node.isRequired
};

export default Button;
