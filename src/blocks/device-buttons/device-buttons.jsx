import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';

import Button from '../device-button';

import './device-buttons.css';

const classNames = cn('device-buttons');

const DeviceButtons = props => {
    const { action, items = [] } = props;

    return (
        <div className={classNames()}>
            {items.map(button => button.isVisible ? (
                <div className={classNames('item')} key={button.i18nKey}>
                    <Button
                        action={action}
                        disabled={button.isDisabled()}
                        {...button}
                    />
                </div>
            ) : null)}
        </div>
    );
};

DeviceButtons.propTypes = {
    action: PropTypes.bool,
    items: PropTypes.array
};

export default DeviceButtons;
