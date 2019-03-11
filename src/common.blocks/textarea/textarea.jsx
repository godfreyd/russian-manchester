import React from 'react';

import TextField from '@material-ui/core/TextField';

import './textarea.css';

const Textarea = props => (
    <TextField
        theme="normal"
        {...props}
    />
);

export default Textarea;
