import React from 'react';

import LegoTextarea from 'lego-on-react/src/components/textarea/textarea.react';

import 'lego-on-react/src/components/textarea/textarea.css';

import './textarea.css';

const Textarea = props => (
    <LegoTextarea
        theme="normal"
        {...props}
    />
);

export default Textarea;
