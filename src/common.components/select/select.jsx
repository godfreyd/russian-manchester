import React from 'react';

import LegoSelect from 'lego-on-react/src/components/select/select.react';

import 'lego-on-react/src/components/select/select.css';

const Select = props => (
    <LegoSelect
        theme="normal"
        {...props}
    />
);

export default Select;
