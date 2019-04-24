import React from 'react';
import propTypes from 'prop-types';

import LegoCheckbox from 'lego-on-react/src/components/checkbox/checkbox.react';

import 'lego-on-react/src/components/checkbox/checkbox.css';

import './checkbox.css';

const Checkbox = ({ tone = 'green', children, ...props }) => (
    <LegoCheckbox
        theme="normal"
        size="m"
        view="default"
        tone={tone}
        {...props}
    >
        {children}
    </LegoCheckbox>
);

Checkbox.propTypes = {
    tone: propTypes.string,
    children: propTypes.node.isRequired
};

export default Checkbox;
