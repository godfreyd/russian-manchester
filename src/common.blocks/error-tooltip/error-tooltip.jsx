import React from 'react';
import MuiTooltip from '@material-ui/core/Tooltip';

const Tooltip = props => {
    return (
        <MuiTooltip
            theme="error"
            size="m"
            to="right"
            view="default"
            {...props}
        />
    );
};

export default Tooltip;
