import React from 'react';

import LegoTooltip from 'lego-on-react/src/components/tooltip/tooltip.react';

import 'lego-on-react/src/components/tooltip/tooltip.css';

const Tooltip = props => {
    return (
        <LegoTooltip
            theme="error"
            size="m"
            to="right"
            view="default"
            {...props}
        />
    );
};

export default Tooltip;
