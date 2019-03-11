import React from 'react';
import PropTypes from 'prop-types';

import LegoPopup from 'lego-on-react/src/components/popup/popup.react';

import 'lego-on-react/src/components/popup/popup.css';

import './popup.css';

// _TODO: remove after release lego-on-react@3.0.0
// Workaround for bug: https://st.yandex-team.ru/ISL-4944 from https://st.yandex-team.ru/CRM-6700
// Breaks fix: https://st.yandex-team.ru/ISL-4212
class ExtendedLegoPopup extends LegoPopup {
    componentWillReceiveProps(...args) {
        super.componentWillReceiveProps(...args);

        this._preventHideByClick = null;
    }
}

const Popup = ({ children, ...props }) => (
    <ExtendedLegoPopup
        theme="normal"
        autoclosable
        {...props}
    >
        {children}
    </ExtendedLegoPopup>
);

Popup.propTypes = {
    children: PropTypes.node.isRequired
};

export default Popup;
